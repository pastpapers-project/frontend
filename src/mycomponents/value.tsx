import React from 'react';
import SentimentNeutralIcon from "@mui/icons-material/SentimentNeutral";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";

export const Value = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center  bg-center px-4 py-16 md:py-32 bg-[url('./public/img2.jpg')] bg-cover">
      {/* Header Section */}
      <div className="text-xs text-white rounded-xl h-8 w-16 border border-gray-600 flex items-center justify-center">
        Value
      </div>
      <div className="text-white text-3xl md:text-5xl mt-6 md:mt-10 mb-4 text-center">
        Pricing Models
      </div>

      <div className="text-gray-500 w-full max-w-[600px] mx-auto px-4 text-center mt-2 mb-10 text-sm md:text-base">
        Join the ranks of high achievers who trust our premium service to guide them through their exam journey with tailored support and unlimited resources!
      </div>

      <div className="flex flex-col md:flex-row mt-2 gap-6 md:gap-x-10 justify-center w-full max-w-5xl relative z-10">
        <div className="relative flex flex-col w-full h-full md:w-64 rounded-xl p-4 md:p-3 overflow-hidden group transition-all duration-300 hover:scale-80 md:transform md:scale-90">
          <div className="absolute inset-0 bg-gray-900/40 backdrop-blur-xl backdrop-filter" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-10" />
          <div className="absolute inset-0 rounded-xl border border-white/10" />
          <div className="relative z-10">
            {/* <SentimentNeutralIcon className="h-14 w-14 md:h-16 md:w-16 text-gray-400 border rounded-[20px] border-gray-500/50 bg-gray-900/50" /> */}
            <p className="text-2xl md:text-3xl text-white mt-2">Basic</p>
            <div className="pl-1 rounded-xl py-3 mt-3 w-full flex flex-col justify-center space-y-2">
              <p className="text-white/90 text-sm">🗹 Access to Past papers</p>
              <p className="text-white/90 text-sm">🗹 Limited Access to Pastprep AI</p>
              <p className="text-white/90 text-sm">🗹 Save Past papers</p>
            </div>
            <button className="rounded-xl bg-black/80 backdrop-blur-sm text-white h-10 mt-4 hover:bg-gray-800 transition-colors w-full">
              Continue
            </button>
          </div>
        </div>

        <div className="relative flex flex-col w-full md:w-80 rounded-xl p-4 md:p-6 overflow-hidden group transition-all duration-300 hover:scale-105 md:transform md:scale-110">                
          <div className="absolute inset-0 bg-gray-900/40 backdrop-blur-xl backdrop-filter" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-10" />
          <div className="absolute inset-0 rounded-xl border border-white/10 bg-gradient-to-b from-cyan-500/5 via-indigo-700/5 to-purple-700/5" />          
          <div className="relative z-10">
            {/* <SentimentVerySatisfiedIcon className="h-16 w-16 md:h-20 md:w-20 text-gray-400 border rounded-[20px] border-gray-500/50 bg-gray-900/50" /> */}

            <p className="text-3xl md:text-4xl text-white mt-2">Prep Ai Pro</p>
            <div className="pl-1 rounded-xl py-4 mt-4 w-full flex flex-col justify-center space-y-2">
            <p className="text-white/90 text-sm">🗹 Access to Past papers</p>
              <p className="text-white/90 text-sm">🗹 Unlimited Access to Pastprep AI</p>
              <p className="text-white/90 text-sm">🗹 Save Past papers</p>
              <p className="text-white/90 text-sm md:text-base">🗹 Solve Pastpapers</p>
            </div>
            <div className="flex items-end mt-6 text-white">
              <p className="text-4xl font-bold">1000 Rs</p>
              <span className="ml-1">/month</span>
            </div>
            <button className="rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-700 to-purple-700 text-white h-12 mt-6 hover:opacity-90 transition-opacity w-full text-lg">
              Get Started Now
            </button>
          </div>
        </div>
      </div>



    </div>
  );
};
