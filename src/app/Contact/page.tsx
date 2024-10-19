import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Footer } from "@/mycomponents/footer";
import { Navbar } from "@/mycomponents/navbar";

export default function Contact () {
  return (
    <ScrollArea className="h-screen text-white">
      <div className="bg-black h-full w-screen">
        <Navbar />
        <div className="h-screen bg-cover bg-[url('./public/img2.png')] ">
            <div className="backdrop-blur-3xl h-screen w-screen flex flex-col justify-center items-center">
                <p className="text-7xl">Contact Us</p>
                <p>Get in touch with us for any questions, support, or feedback</p>
                <div className="flex">
                <div className="m-4 h-52 w-52 p-2 bg-gray-600 bg-opacity-35 rounded-xl">
                    <p className="text-2xl font-bold">Our Mission</p>
                </div>
                <div className="m-4 h-52 w-52 bg-gray-600 bg-opacity-35 rounded-xl"></div>
                </div>
            </div>
        </div>
        <Footer/>
      </div>
      <ScrollBar className="visible z-[100]" orientation="vertical" />
    </ScrollArea>
  )
}
