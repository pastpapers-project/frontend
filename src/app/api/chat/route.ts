// src/app/api/chat/route.ts
import { NextResponse } from 'next/server'; 


function normalizeLevel(level: string): 'olevels' | 'alevels' {
  const normalizedLevel = level.toLowerCase().replace(/s$/, '');
  console.log(level);
  if (normalizedLevel === 'olevel') {
    return 'olevels';
  } else if (normalizedLevel === 'alevel') {
    return 'alevels';
  } else {
    throw new Error(`Invalid level: ${level}. Must be 'O-Levels' or 'A-Levels'.`);
  }
}

export async function POST(req: Request) {
  try {
    // Get the endpoint URL from environment variables
    const endpointUrl = process.env.QUERY_ENDPOINT_URL;
    
    if (!endpointUrl) {
      return NextResponse.json(
        { error: 'Query endpoint URL is not configured' },
        { status: 500 }
      );
    }

    // Parse the incoming request
    const { messages, course, category } = await req.json();
    const lastMessage = messages[messages.length - 1];

    // Prepare the payload for the query endpoint
    const payload = {
      question: lastMessage.content,
      course: course.course_name,
      category: normalizeLevel(category)
    };

    // Send request to the query endpoint
    const response = await fetch(endpointUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      throw new Error('Failed to fetch response from query endpoint');
    }

    const data = await response.json();

    // Return the answer from the endpoint
    return NextResponse.json({ 
      response: data.answer,
      context: data.context // Optionally include context if needed
    });

  } catch (error) {
    console.error('Error in chat API route:', error);
    return NextResponse.json(
      { error: 'Failed to fetch response' },
      { status: 500 }
    );
  }
}