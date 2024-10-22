'use client'

import { Course } from "@/app/appconfig/config";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { CourseScreen } from "@/mycomponents/courseScreen";
import { CourseScroll } from "@/mycomponents/courseScroll";
import { Intro } from "@/mycomponents/intro";
import { Navbar } from "@/mycomponents/navbar"; 
import { Footer } from "@/mycomponents/footer";
import { PaperSearch } from "./pastpapersSearch";

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export default function PastPapersPage() {

  const [selectedCourse, setSelectedCourse] = useState<Course>();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

 
  return (
    <ScrollArea className="h-screen text-white">
      <div className="bg-black min-h-screen w-full">
        <Navbar />
        <PaperSearch />
        
        {/* Mobile Menu Button - Only visible on small screens */}
        <div className="lg:hidden ">
          <Button 
            variant="ghost" 
            className="text-white hover:bg-white/10 transition-colors duration-200"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <Menu className="h-6 w-6 mr-2" />
            <span className="text-sm">Select Course</span>
          </Button>
        </div>

        <div className="flex flex-col lg:flex-row max-w-[1400px] mx-auto px-4 relative">
          {/* Sidebar Container - Always present but transformed */}
          <div 
            className={`
              fixed lg:relative
              inset-y-0 left-0 z-40
              w-64 lg:w-52
              transition-all duration-300 ease-in-out
              transform 
              ${isSidebarOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0 lg:opacity-100'} 
              lg:translate-x-0
              bg-black lg:bg-transparent
              pt-16 lg:pt-0
              overflow-hidden
            `}
          >
            {/* Inner sidebar content with fade effect */}
            <div className={`
              transition-opacity duration-300 ease-in-out
              ${isSidebarOpen ? 'opacity-100' : 'opacity-0 lg:opacity-100'}
            `}>
              <CourseScroll 
                setSelectedCourse={(course: Course) => {
                  setSelectedCourse(course);
                  setIsSidebarOpen(false);
                }}
              />
            </div>
          </div>

          {/* Animated Overlay */}
          <div 
            className={`
              fixed inset-0 bg-black transition-all duration-300 ease-in-out
              ${isSidebarOpen 
                ? 'opacity-50 pointer-events-auto' 
                : 'opacity-0 pointer-events-none'
              } 
              z-30 lg:hidden
            `}
            onClick={() => setIsSidebarOpen(false)}
          />

          {/* Main Content */}
          <div className={`
            flex-1 lg:ml-8
            transition-all duration-300 ease-in-out
            ${isSidebarOpen ? 'lg:opacity-100 blur-none' : 'lg:opacity-100 blur-none'}
          `}>
            <CourseScreen selectedCourse={selectedCourse} />
          </div>
        </div>
        
        <Footer />
      </div>
      <ScrollBar 
        className="visible z-[100] transition-all duration-300 ease-in-out" 
        orientation="vertical" 
      />
    </ScrollArea>
  );
}
