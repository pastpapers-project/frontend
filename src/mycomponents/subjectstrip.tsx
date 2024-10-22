"use client";

import React, { useEffect, useState } from "react";

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

import { 
  Calculator, 
  Binary,
  Microscope,
  BookOpen,
  Globe2,
  Pencil,
  Building2,
  Music,
  Palette,
  Languages,
  FileSpreadsheet,
  Ruler,
  Wheat,
  MessagesSquare,
  PenTool,
  Briefcase,
  Computer,
  Scissors,
  Utensils,
  LandPlot,
  Users,
  Heart,
  GraduationCap,
  Coffee,
  Book,
  Database,
  TreePine,
  PlaneTakeoff,
  BookMarked,
  ScrollText,
  ChefHat,
  Workflow,
  Cpu,
  Factory,
  School
} from "lucide-react";

const subjects = [
  { name: "Accounting", icon: FileSpreadsheet },
  { name: "Add-Maths", icon: Calculator },
  { name: "Agriculture", icon: Wheat },
  { name: "Arabic", icon: Languages },
  { name: "Art and Design", icon: Palette },
  { name: "Bangladesh Studies", icon: Book },
  { name: "Bengali", icon: Languages },
  { name: "Biology", icon: Microscope },
  { name: "Business Studies", icon: Briefcase },
  { name: "Chemistry", icon: ChefHat },
  { name: "Commerce", icon: Building2 },
  { name: "Commercial Studies", icon: Briefcase },
  { name: "Computer Science", icon: Cpu },
  { name: "Computer Studies", icon: Computer },
  { name: "Design and Technology", icon: Ruler },
  { name: "Economics", icon: Building2 },
  { name: "English", icon: BookOpen },
  { name: "Environmental Management", icon: TreePine },
  { name: "Fashion and Textiles", icon: Scissors },
  { name: "Food and Nutrition", icon: Utensils },
  { name: "French", icon: Languages },
  { name: "Geography", icon: Globe2 },
  { name: "German", icon: Languages },
  { name: "Global Perspectives", icon: LandPlot },
  { name: "Hindi", icon: Languages },
  { name: "Hinduism", icon: BookMarked },
  { name: "History World Affairs", icon: ScrollText },
  { name: "Home Management", icon: ChefHat },
  { name: "Islamic Studies", icon: BookMarked },
  { name: "Islamiyat", icon: BookMarked },
  { name: "Literature", icon: Pencil },
  { name: "Marine Science", icon: Workflow },
  { name: "Mathematics", icon: Calculator },
  { name: "Metalwork", icon: Factory },
  { name: "Nepali", icon: Languages },
  { name: "Pakistan Studies", icon: Book },
  { name: "Physics", icon: Binary },
  { name: "Accounts", icon: FileSpreadsheet },
  { name: "Religious Studies", icon: BookMarked },
  { name: "Setswana", icon: Languages },
  { name: "Sinhala", icon: Languages },
  { name: "Sociology", icon: Users },
  { name: "Spanish", icon: Languages },
  { name: "Statistics", icon: Database },
  { name: "Swahili", icon: Languages },
  { name: "Tamil", icon: Languages },
  { name: "Tourism", icon: PlaneTakeoff },
  { name: "Urdu", icon: Languages },
];