// src/app/api/papers/route.ts
import { NextRequest, NextResponse } from "next/server";
import { CosmosClient } from "@azure/cosmos";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const courseCode = searchParams.get("courseCode");
    const level = searchParams.get("level");

    if (!courseCode || !level) {
      return NextResponse.json(
        { error: "Course code and level are required" },
        { status: 400 }
      );
    }

    const client = new CosmosClient({
      endpoint: process.env.COSMOS_ENDPOINT || "",
      key: process.env.COSMOS_KEY || "",
    });

    const database = client.database("pastpapers");
    const container = database.container(level === "olevel" ? "Olevels" : "Alevels");

    const querySpec = {
    query: "SELECT * FROM c WHERE c.course_code = @courseCode",
    parameters: [
        {
        name: "@courseCode",
        value: parseInt(courseCode, 10)
        }
    ]
    };

    const { resources } = await container.items.query(querySpec).fetchAll();
    
    // Log the results to help debug
    // console.log('Found papers:', resources.length);
    // console.log('Sample paper:', resources[0]);

    return NextResponse.json(resources);
  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json(
      { error: "Failed to fetch papers" },
      { status: 500 }
    );
  }
}