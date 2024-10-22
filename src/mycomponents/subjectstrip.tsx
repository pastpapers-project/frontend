"use client";

import React, { useEffect, useState } from "react";
import { 
  BookOpen, 
  Calculator, 
  Globe2, 
  Laptop, 
  Pencil, 
  Binary,
  Building2,
  Music,
  Palette,
  Languages
} from "lucide-react";

import { samplesubjects } from "@/app/appconfig/config";
import { InfiniteMovingCards } from "@/components/infinite-moving-cards";

export const SubjectStrip = () => {
  return (
    <div className="h-[10rem] rounded-md flex flex-col antialiased bg-transparent dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={subjects}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const subjects = [
  {
    name: "Mathematics",
    icon: Calculator
  },
  {
    name: "Physics",
    icon: Binary
  },
  {
    name: "Chemistry",
    icon: Laptop
  },
  {
    name: "Biology",
    icon: Laptop
  },
  {
    name: "English",
    icon: BookOpen
  },
  {
    name: "Geography",
    icon: Globe2
  },
  {
    name: "Literature",
    icon: Pencil
  },
  {
    name: "Economics",
    icon: Building2
  },
  {
    name: "Music",
    icon: Music
  },
  {
    name: "Art",
    icon: Palette
  },
  {
    name: "Languages",
    icon: Languages
  }
];


