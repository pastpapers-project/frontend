export const Intro = () => {
    return (
        <div className="h-screen bg-cover bg-[url('./public/img2.png')] flex flex-col justify-center items-center">
          <div className="border border-gray-600 bg-transparent h-10 w-64 rounded-full text-white text-xs flex justify-center items-center text-center mt-12 mb-10">
            Designed for Students. Built for Success.
          </div>
          <div className="text-white text-6xl font-semibold">
            Your Ticket to Top Grades
          </div>
          <div className="mt-40 mb-10 border border-gray-700 rounded-full bg-gray-900 h-16 flex items-center w-96">
            <input className="mx-4 h-12 rounded-full bg-gray-900 text-white outline-none w-full" />
            <button className="rounded-bl-full rounded-br-full rounded-tr-full bg-indigo-700 text-white w-20 h-12 shadow-2xl mr-2">
              Ask AI
            </button>
          </div>
        </div>
    )
}