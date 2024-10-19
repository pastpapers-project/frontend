'use client'

import { Course } from "@/app/appconfig/config";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { CourseScreen } from "@/mycomponents/courseScreen";
import { CourseScroll } from "@/mycomponents/courseScroll";
import { Intro } from "@/mycomponents/intro";
import { Navbar } from "@/mycomponents/navbar";
import { useState } from "react";

export default function OLevels() {
  const [selectedCourse, setSelectedCourse] = useState<Course>();
  return (
    <ScrollArea className="h-screen text-white">
      <div className="bg-black h-full w-screen">
        <Navbar />
        <Intro />
        <div className="flex justify-center">
          <CourseScroll setSelectedCourse={setSelectedCourse}/>
          <CourseScreen selectedCourse={selectedCourse}/>
        </div>
      </div>
      <ScrollBar className="visible z-[100]" orientation="vertical" />
    </ScrollArea>
  );
}
