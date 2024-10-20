"use client";
import React from "react";
// import { LayoutGrid } from "@/components/ui/layout-grid";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl"></div>
);
interface BentoItem {
  title: string;
  header: React.ReactNode;
  className: string;
  index: number;
}

const bentoItems: BentoItem[] = [
  {
    title: "AI Trained on Past Papers",
    header: <Skeleton />,
    className: "md:col-span-2",
    index: 1
  },
  {
    title: "Biggest Past Paper Collection",
    header: <Skeleton />,
    className: "md:col-span-1",
    index: 2
  },
  {
    title: "Save your papers",
    header: <Skeleton />,
    className: "md:col-span-1",
    index: 3
  },
  {
    title: "Get your solved papers checked by AI",
    header: <Skeleton />,
    className: "md:col-span-2",
    index: 4
  },
];

export function Services() {
  return (
    <section className="relative min-h-screen w-full py-20">
      <div className="flex flex-col items-center justify-start w-full">
        <div className="text-xs text-white rounded-xl h-8 w-16 border border-gray-600 flex items-center justify-center">
          Services
        </div>
        <div className="flex text-white text-5xl mt-10">Why We're the Right Choice</div>
        <div className="text-gray-500 w-[600px] text-center mt-2 mb-10">
          Choose us for our AI-driven solutions, extensive past paper collection, and seamless paper management to further amplify your academic success.
        </div>

        <div className="h-screen py-20 w-full">
          <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
            {bentoItems.map((item, i) => (
              <BentoGridItem
                key={i}
                title={item.title}
                header={item.header}
                className={item.className}
                index = {item.index}
              />
            ))}
          </BentoGrid>
        </div>
      </div>
    </section>
  );
}

export default Services;