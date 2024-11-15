"use client"
import React, { useState } from 'react';
import { SubjectStrip } from "./subjectstrip";
import { Input } from './input';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

export const Intro = () => {
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter(); // Initialize useRouter

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      if (!input.trim() || isLoading) return;

    // Navigate to the new page with input as a query parameter
    router.push(`/pastprep-ai/olevels?pageInput=${encodeURIComponent(input.trim())}`);
    }
  };
  
  return (
    <div className="min-h-screen bg-cover bg-[url('/img2.jpg')] relative">
      <div className="absolute inset-0 flex flex-col justify-center items-center px-4">
        <div className="border border-gray-600 bg-transparent 
                      h-8 sm:h-10 
                      w-full max-w-[16rem] sm:max-w-[20rem]
                      rounded-full 
                      text-white text-xs sm:text-sm
                      flex justify-center items-center text-center 
                      mb-6 sm:mb-10
                      px-4">
          Designed for Students. Built for Success.
        </div>

        <div className="text-white 
                      text-4xl sm:text-5xl md:text-6xl lg:text-7xl 
                      font-semibold 
                      text-center
                      max-w-[90%] sm:max-w-[80%] md:max-w-[70%]">
          Your Ticket to Top Grades
        </div>

        <form 
          onSubmit={handleSubmit} 
          className="mt-16 border border-transparent rounded-full flex items-center h-16 mx-auto w-full lg:max-w-3xl"
          style={{ backgroundColor: '#1A1919' }}
        >
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="mx-4 text-white w-full rounded-full outline-none border-0 focus:ring-0 focus-visible:ring-0 focus:ring-offset-0 focus-within:outline-none focus:outline-none active:outline-none bg-transparent"
            disabled={isLoading}
            style={{ 
              boxShadow: 'none', 
              backgroundColor: '#1A1919',
              height: '4rem',
              minHeight: '4rem',
              padding: '4px 8px',
              lineHeight: '2rem'
            }}
          />
          <Button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="rounded-bl-full rounded-br-full rounded-tr-full bg-[#775BF1] bg-opacity-60 text-white shadow-2xl mr-2 hover:bg-[#775BF1]"
          >
            Ask AI
          </Button>
        </form>
    
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <SubjectStrip />
      </div>
    </div>
  );
};
