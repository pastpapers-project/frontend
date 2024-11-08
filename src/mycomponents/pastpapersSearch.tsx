export const PaperSearch = () => {
    return (
        <div className="min-h-screen bg-cover bg-[url('/img1.jpg')] relative 
            after:absolute after:content-[''] after:inset-0 
            after:shadow-[inset_0_0_250px_rgba(0,0,0,1)] 
            after:pointer-events-none">
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
            Your Secret Weapon for A*s
          </div>

        <div className="text-gray-500 w-full max-w-[600px] mx-auto px-4 text-center mt-2 mb-10 text-sm md:text-base">
          Explore our extensive database of past papers to gain insights into exam patterns and expectations.
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
              placeholder="Search your Paper...."
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
                            bg-lime-400 hover:bg-lime-500
                            text-black
                            min-w-[4rem] sm:w-20 
                            h-8 sm:h-10 md:h-12
                            shadow-2xl 
                            text-sm sm:text-base
                            transition-colors
                            flex items-center justify-center">
              Search
            </button>
          </div>
        </div>
      </div>
    );
  };
  