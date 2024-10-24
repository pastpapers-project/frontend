import { ScrollArea } from "@/components/ui/scroll-area";
import { Footer } from "@/mycomponents/footer";
import { Navbar } from "@/mycomponents/navbar";
import Link from "next/link";

export default function notfound() {
  return (
    <ScrollArea className="h-screen text-white">
      <div className="bg-black min-h-screen flex flex-col">
        <Navbar />
        
        <main className="flex-grow bg-cover bg-center bg-[url('./public/img1.jpg')]">
          <div className="backdrop-blur-xl min-h-screen w-full flex items-center justify-center p-4">
            <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-center gap-8 md:gap-16 py-8">
              {/* Content Section */}
              <div className="text-center md:text-left max-w-md">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                  Page Not Found
                </h1>
                <p className="text-base md:text-lg mb-6">
                  It looks like the page you are trying to access does not exist
                  or has been removed.
                </p>
                <Link 
                  href="/"
                  className="inline-block bg-white bg-opacity-20 rounded-xl p-3 border border-white 
                           hover:bg-white hover:bg-opacity-40 transition-all duration-200 text-sm md:text-base"
                >
                  Back to Home
                </Link>
              </div>

              {/* 404 Number */}
              <div className="text-white text-opacity-20 text-8xl md:text-9xl lg:text-[256px] font-bold select-none">
                404
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </ScrollArea>
  );
}
