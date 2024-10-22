import React from 'react';
import { SubjectStrip } from "./subjectstrip";

export const Intro = () => {
  return (
    <div className="min-h-screen bg-cover bg-[url('./public/img2.png')] relative">
      {/* Main content wrapper - centered vertically and horizontally */}
      <div className="absolute inset-0 flex flex-col justify-center items-center px-4">
        {/* Top banner */}
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

        {/* Main heading */}
        <div className="text-white 
                      text-4xl sm:text-5xl md:text-6xl lg:text-7xl 
                      font-semibold 
                      text-center
                      max-w-[90%] sm:max-w-[80%] md:max-w-[70%]">
          Your Ticket to Top Grades
        </div>

        {/* Search bar */}
        <div className="mt-20 sm:mt-32 md:mt-40 
                      border border-gray-700 rounded-full 
                      bg-gray-900 
                      h-12 sm:h-14 md:h-16
                      flex items-center 
                      w-full max-w-[320px] sm:max-w-[384px] md:max-w-[448px]
                      px-2 sm:px-3">
          <input 
            placeholder="Ask your question..."
            className="mx-2 sm:mx-4 
                      h-10 sm:h-12 
                      rounded-full 
                      bg-gray-900 
                      text-white 
                      outline-none 
                      w-full 
                      text-sm sm:text-base
                      placeholder-gray-400" 
          />
          <button className="rounded-full sm:rounded-bl-full sm:rounded-br-full sm:rounded-tr-full 
                          bg-indigo-700 hover:bg-indigo-600 
                          text-white 
                          min-w-[4rem] sm:w-20 
                          h-8 sm:h-10 md:h-12
                          shadow-2xl 
                          text-sm sm:text-base
                          transition-colors
                          flex items-center justify-center">
            Ask AI
          </button>
        </div>
      </div>

      {/* Subject strip - positioned at bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <SubjectStrip />
      </div>
    </div>
  );
};
