
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Navbar } from "@/mycomponents/navbar";
import { Intro } from "@/mycomponents/intro";
import { SubjectStrip } from "@/mycomponents/subjectstrip";
import { Services } from "@/mycomponents/services";
import { Value } from "@/mycomponents/value";
import { Faq } from "@/mycomponents/faq";
import { Footer } from "@/mycomponents/footer";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";


export default async function Home() {


  return (
    <ScrollArea className="h-screen text-white">
      <div className="bg-black h-full w-screen">
        <Navbar />
        <Intro/>
        {/* <SubjectStrip/> */}
        <Services/>
        <Value/>
        <Faq/>
        <Footer/>
      </div>
      <ScrollBar className="visible z-[100]" orientation="vertical" />
    </ScrollArea>
  );
}

