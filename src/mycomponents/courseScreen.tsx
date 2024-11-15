// src/mycomponents/courseScreen.tsx
import React from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import Link from 'next/link';
import { useRouter } from 'next/navigation';


export const CourseScreen = ({ selectedCourse }: { selectedCourse: any }) => {

  const router = useRouter();

  const getGradientByType = (type: string) => {
    const gradients: { [key: string]: string } = {
      'Question Paper': 'bg-gradient-to-r from-red-400 to-red-300',
      'Marking Scheme': 'bg-gradient-to-r from-blue-700 to-sky-400',
      'Grade Threshold': 'bg-gradient-to-r from-purple-600 to-pink-300',
      'default': 'bg-gradient-to-r from-red-500 to-red-700'
    };
    return gradients[type] || gradients['default'];
  };


  const handlePaperClick = (pid: string) => {
    router.push(`/past-papers/papers/${pid}`);
  };


  return (
    <div className="space-y-6 py-4 lg:py-8">
      <div>
        <div className="mb-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/" className="text-lg lg:text-xl">O levels</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink className="text-lg lg:text-xl">
                  {selectedCourse?.name} {selectedCourse?.id && `${selectedCourse.id}`}
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <div>
          <p className="text-gray-500 text-sm lg:text-base">
            Access a vast collection of past papers to help you prepare, practice, and excel in your exams with ease.
          </p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {selectedCourse?.files.map((file: any, index: number) => (
          <div 
            key={file.pid}
            onClick={() => handlePaperClick(file.pid)}
            className="cursor-pointer"
          >
            <Card className="flex flex-col rounded-xl overflow-hidden border-[0.1px] border-gray-300 border-opacity-20 bg-white bg-opacity-10 hover:bg-opacity-0 transition-colors duration-200 cursor-pointer">
              <div className={`h-20 lg:h-24 ${getGradientByType(file.type)} flex items-end justify-start pl-2 pb-2`}>
                <span className="text-white text-lg lg:text-xl">{file.type}</span>
              </div>
              <CardContent className="flex-grow p-0">
                <div className="p-2">
                  <div className="flex justify-start items-end mb-2">
                    {file.variant > 0 && file.paper ? (
                      <span className="text-xs lg:text-sm text-white text-opacity-50 font-normal">
                        Variant {file.variant} | Paper {file.paper}
                      </span>
                    ) : (
                      <span className="text-xs lg:text-sm text-white text-opacity-50 font-normal">
                        All Papers | All Variants
                      </span>
                    )}
                  </div>
                  <div className="flex justify-end items-end gap-2 text-white text-opacity-50 font-normal text-lg lg:text-xl">
                    <span>{file.tenure}</span>
                    <span>{file.year}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};