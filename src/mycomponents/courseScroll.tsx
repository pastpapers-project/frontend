import { Course, courses } from "@/app/appconfig/config";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

import React from 'react';

import { 
  Book, 
  BookOpen, 
  BookMarked, 
  GraduationCap, 
  Binary,
  Code2,
  FileCode,
  Puzzle,
  Brain,
  Calculator,
  Atom,
  Telescope,
  Microscope,
  Palette
} from 'lucide-react';

const iconSet = [
  Book,
  BookOpen,
  BookMarked,
  GraduationCap,
  Binary,
  Code2,
  FileCode,
  Puzzle,
  Brain,
  Calculator,
  Atom,
  Telescope,
  Microscope,
  Palette
];

// One-to-One Hash function to generate unique icon for each course name.
const getIconForCourse = (courseName: string) => {
  let hash = 0;
  for (let i = 0; i < courseName.length; i++) {
    hash = ((hash << 5) - hash) + courseName.charCodeAt(i);
    hash = hash & hash;
  }
  const iconIndex = Math.abs(hash) % iconSet.length;
  return iconSet[iconIndex];
};

type SubjectProps = {
  course_name: string;
  course_code: string;
};

interface CourseScrollProps {
  setSelectedCourse: (subject: SubjectProps) => void;
  subjects: SubjectProps[];
}

export const CourseScroll = ({ setSelectedCourse, subjects }: CourseScrollProps) => {

  return (
    <ScrollArea className="h-[calc(100vh-200px)] p-4">
      <div className="space-y-2">
      {subjects.map((subject) => {
          const IconComponent = getIconForCourse(subject.course_name);
          return (
            <div
              key={subject.course_code}
              className="flex items-center justify-between hover:cursor-pointer p-3 hover:bg-gray-100 font-bold hover:bg-opacity-5 rounded-xl group"
              onClick={() => setSelectedCourse(subject)}
            >
              <div className="flex items-center gap-2">
                <IconComponent className="w-5 h-5 text-gray-500 group-hover:text-sky-500 transition-colors duration-200" />
                <p className="group-hover:text-sky-500 transition-colors duration-200 text-sm lg:text-base">{subject.course_name}</p>
              </div>
              <p className="text-gray-500 text-sm">{subject.course_code}</p>
            </div>
          );
        })}
      </div>
      <ScrollBar className="visible z-[100]" orientation="vertical" />
    </ScrollArea>
  );
};