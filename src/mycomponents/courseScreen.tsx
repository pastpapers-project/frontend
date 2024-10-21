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

export const CourseScreen = ({ selectedCourse }: { selectedCourse: any }) => {
  const getGradientByType = (type: string) => {
    const gradients: { [key: string]: string } = {
      'Question Paper': 'bg-gradient-to-r from-red-400 to-red-300',
      'Marking Scheme': 'bg-gradient-to-r from-blue-700 to-sky-400',
      'Grade Threshold': 'bg-gradient-to-r from-purple-600 to-pink-300',
      'default': 'bg-gradient-to-r from-red-500 to-red-700'
    };
    return gradients[type] || gradients['default'];
  };

  return (
    <div className="space-y-8">
      <div>
        <div className="mx-10 mt-20">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/" className="text-xl">O levels</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/components" className="text-xl font-white">{selectedCourse?.name} ({selectedCourse?.id})</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <div className="mx-10">
          <p className="text-gray-500">Access a vast collection of past papers to help you prepare, practice, and excel in your exams with ease.</p>
        </div>
      </div>
      
      <div className="mx-10 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {selectedCourse?.files.map((file: any, index: number) => (
            <Link 
            href={`/pastpapers/papers/${file.pid}`}
            key={file.pid}
            >
            <Card className="flex flex-col rounded-xl overflow-hidden border-[0.1px] border-gray-300 border-opacity-20 bg-white bg-opacity-10 hover:bg-opacity-0 transition-colors duration-200 cursor-pointer">
                <div className={`h-24 ${getGradientByType(file.type)} flex items-end justify-start pl-2 pb-2`}>
                <span className="text-white text-xl">{file.type}</span>
                </div>
                <CardContent className="flex-grow p-0">
                <div className="p-2">
                    <div className="flex justify-start items-end mb-2">
                    {file.variant > 0 && file.paper ? (
                        <span className="text-sm text-white text-opacity-50 font-normal">
                        Variant {file.variant} | Paper {file.paper}
                        </span>
                    ) : (
                        <span className="text-sm text-white text-opacity-50 font-normal">
                        All Papers | All Variants
                        </span>
                    )}
                    </div>
                    <div className="flex justify-end items-end gap-2 text-white text-opacity-50 font-normal text-xl">
                    <span>{file.tenure}</span>
                    <span>{file.year}</span>
                    </div>
                </div>
                </CardContent>
            </Card>
            </Link>
        ))}
        </div>

    </div>
  );
};