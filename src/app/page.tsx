import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Navbar } from "@/mycomponents/navbar";
import { Intro } from "@/mycomponents/intro";
import { SubjectStrip } from "@/mycomponents/subjectstrip";
import { Services } from "@/mycomponents/services";
import { Value } from "@/mycomponents/value";
import { Faq } from "@/mycomponents/faq";
import { Footer } from "@/mycomponents/footer";

// import { getServerSession } from 'next-auth/next'
// import { authOptions } from './api/auth/[...nextauth]/route'
// import { redirect } from 'next/navigation'


export default async function Home() {
  // const session = await getServerSession(authOptions)

  // if (!session) {
  //   redirect('/auth/login')
  // }

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

