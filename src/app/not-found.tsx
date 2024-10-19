import { ScrollArea } from "@/components/ui/scroll-area";
import { Footer } from "@/mycomponents/footer";
import { Navbar } from "@/mycomponents/navbar";
import Link from "next/link";

export default function notfound() {
  return (
    <ScrollArea className="h-screen text-white">
      <div className="bg-black h-full">
        <Navbar />
        <div className="h-screen w-screen bg-cover bg-[url('./public/img1.png')] flex flex-col justify-center items-center">
          <div className="backdrop-blur-xl h-screen w-screen flex justify-center items-center gap-x-20">
            <div className="">
              <p className="text-6xl mb-2">Page Not Found</p>
              <p className="mb-2">
                It looks like thge page you are trying to access doesn't exist
                or has been removed.
              </p>
              <Link href={"/"} className="bg-gray-800 rounded-xl p-1 border border-gray-700 hover:bg-gray-600 transition-all">Back to Home</Link>
            </div>
            <div className="text-gray-500 text-[256px] font-bold">404</div>
          </div>
        </div>
        <Footer />
      </div>
    </ScrollArea>
  );
}
