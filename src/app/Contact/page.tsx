"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Footer } from "@/mycomponents/footer";
import { Navbar } from "@/mycomponents/navbar";
import { cn } from "@/lib/utils";
import { IconBrandGithub, IconBrandGoogle, IconBrandOnlyfans } from "@tabler/icons-react";

export default function Contact() {
  return (
    <ScrollArea className="h-screen text-white">
      <div className="bg-black h-full w-screen">
        <Navbar />
        <div className="h-screen bg-cover bg-[url('./public/img2.png')] ">
            <div className="backdrop-blur-3xl h-screen w-screen flex flex-col justify-center items-center">
            <div className="flex flex-col items-center">
              <p className="text-7xl mb-4">Contact Us</p>
              <p className="mb-8">Get in touch with us for any questions, support, or feedback</p>

              <div className="flex gap-8">
                <div className=" max-w-md w-full p-8 bg-white bg-opacity-10 rounded-xl shadow-[0_0_25px_rgba(0,0,0,0.5)] border-[0.5px] border-white border-opacity-10 flex flex-col justify-between h-full">
                  
                    <div>
                      <div className="flex items-center mb-4">
                          <div className="bg-transparent bg-opacity-20 p-2 rounded-xl border-[0.5px] border-white border-opacity-10">    
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white-opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                                  <path stroke-linecap="round" stroke-linejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674a1 1 0 00.95.69h4.908c.969 0 1.371 1.24.588 1.81l-3.977 2.892a1 1 0 00-.364 1.118l1.518 4.674c.3.921-.755 1.688-1.539 1.118L12 17.75l-3.977 2.892c-.784.57-1.838-.197-1.539-1.118l1.518-4.674a1 1 0 00-.364-1.118L3.66 10.1c-.783-.57-.381-1.81.588-1.81h4.908a1 1 0 00.95-.69l1.518-4.674z" />
                              </svg>
                          </div>
                          <h2 className="text-2xl font-semibold ml-4 ">Our mission</h2>
                      </div>

                      <p className="text-gray-300 mb-6">
                          Our mission is to provide students with easy access to past papers, helping them prepare effectively for their exams. We aim to foster academic excellence by offering the right resources to aid in learning and success.
                      </p>
                    </div>
                    <div className="pt-4">
                        <h3 className="text-lg font-semibold">Get in touch</h3>
                        <p className="text-white text-opacity-40 mt-2">Email: contact.pastprep@gmail.com</p>
                        <p className="text-white text-opacity-40">Phone: +92 331-9765860</p>
                    </div>
      
                </div>

                <ClientContactForm/>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
      <ScrollBar className="visible z-[100]" orientation="vertical" />
    </ScrollArea>
  )
}


function ClientContactForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="max-w-md w-full rounded-2xl p-8 bg-white bg-opacity-10 dark:bg-black shadow-[0_0_25px_rgba(0,0,0,0.5)] border-[0.5px] border-white border-opacity-10">
      <form onSubmit={handleSubmit}>
        <div className="flex space-x-2 mb-4">
          <LabelInputContainer >
            <Label htmlFor="firstname">First name</Label>
            <Input id="firstname" placeholder="Ahmed" type="text" />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input id="lastname" placeholder="Khan" type="text" />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" placeholder="Ahmed@example.com" type="email" />
        </LabelInputContainer>
        
        <LabelInputContainer className="mb-4">
          <Label htmlFor="subject">Subject</Label>
          <Input id="subject" placeholder="Enter subject" type="text" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="message">Message</Label>
          <textarea          
            id="message"
            placeholder="Write your message here"
            className="flex h-20 w-full px-3 py-2 rounded-md placeholder:text-white-opacity-50 bg-black bg-opacity-20 text-white  text-sm  outline-0 border-none"
          >            
          </textarea>
        </LabelInputContainer>
        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Send Message
          <BottomGradient />
        </button>
      </form>
    </div>
  );
}

 
const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};
 
const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}      
    </div>
  );
};