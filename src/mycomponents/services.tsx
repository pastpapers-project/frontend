"use client";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

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
    <section className="relative  w-full py-60">
      <div className="flex flex-col items-center justify-start w-full">
        <div className="text-xs text-white rounded-xl h-8 w-16 border border-gray-600 flex items-center justify-center">
          Services
        </div>
        <div className="text-white text-3xl md:text-5xl mt-6 md:mt-10 mb-4 text-center">Why We are the Right Choice</div>
        <div className="text-gray-500 w-full max-w-[600px] mx-auto px-4 text-center mt-2 mb-10 text-sm md:text-base">
          Choose us for our AI-driven solutions, extensive past paper collection, and seamless paper management to further amplify your academic success.
        </div>
 

        <div className=" py-8 w-full">
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