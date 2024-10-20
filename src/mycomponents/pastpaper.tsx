'use client'

import { Course } from "@/app/appconfig/config";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { CourseScreen } from "@/mycomponents/courseScreen";
import { CourseScroll } from "@/mycomponents/courseScroll";
import { Intro } from "@/mycomponents/intro";
import { Navbar } from "@/mycomponents/navbar";
import { useState } from "react";
import { Footer } from "@/mycomponents/footer";

export default function PastPapersPage() {
  const [selectedCourse, setSelectedCourse] = useState<Course>();
  return (
    <ScrollArea className="h-screen text-white">
    <div className="bg-black h-full w-screen">
      <Navbar />
      <Intro/>
      <div className="flex justify-start ml-32 gap-4 mb-64">
           <CourseScroll setSelectedCourse={setSelectedCourse}/>
           <CourseScreen selectedCourse={selectedCourse}/>
      </div>
      <Footer/>
    </div>
    <ScrollBar className="visible z-[100]" orientation="vertical" />
  </ScrollArea>
  );
}
