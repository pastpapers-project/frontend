// src/mycomponents/courseScreen.tsx
import React, { useEffect, useState } from 'react';
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
import { useRouter } from 'next/navigation';
import { PastPaper } from '@/types/paper';

interface CourseScreenProps {
  selectedCourse: {
    course_name: string;
    course_code: string;
  } | undefined;
  level: 'olevel' | 'alevel';
}

export const CourseScreen = ({ selectedCourse, level }: CourseScreenProps) => {
  const router = useRouter();
  const [papers, setPapers] = useState<PastPaper[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPapers = async () => {
      if (!selectedCourse) return;
      
      setIsLoading(true);
      setError(null);
      
      try {
        const response = await fetch(
          `/api/papers?courseCode=${selectedCourse.course_code}&level=${level}`
        );
        
        if (!response.ok) {
          throw new Error('Failed to fetch papers');
        }
        
        const data = await response.json();
        console.log('Fetched papers:', data); // Debug log
        setPapers(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch papers');
        console.error('Error fetching papers:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPapers();
  }, [selectedCourse, level]);

  const getGradientByType = (type: string) => {
    const gradients: { [key: string]: string } = {
      'Question Paper': 'bg-gradient-to-r from-red-400 to-red-300',
      'Marking Scheme': 'bg-gradient-to-r from-blue-700 to-sky-400',
      'Grade Threshold': 'bg-gradient-to-r from-purple-600 to-pink-300',
      'default': 'bg-gradient-to-r from-red-500 to-red-700'
    };
    return gradients[type] || gradients['default'];
  };
 
  const handlePaperClick = (paper: PastPaper) => {
    router.push(`/past-papers/papers/${paper.id}`);
  };

  if (!selectedCourse) {
    return (
      <div className="flex items-center justify-center h-[calc(100vh-200px)]">
        <p className="text-gray-500">Select a course to view past papers</p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-[calc(100vh-200px)]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-[calc(100vh-200px)]">
        <p className="text-red-500">Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="space-y-6 py-4 lg:py-8">
      <div>
        <div className="mb-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/" className="text-lg lg:text-xl">
                  {level === 'olevel' ? 'O levels' : 'A levels'}
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink className="text-lg lg:text-xl">
                  {selectedCourse.course_name} ({selectedCourse.course_code})
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
        {papers.map((paper) => (
          <div 
            key={paper.id}
            onClick={() => handlePaperClick(paper)}
            className="cursor-pointer"
          >
            <Card className="flex flex-col rounded-xl overflow-hidden border-[0.1px] border-gray-300 border-opacity-20 bg-white bg-opacity-10 hover:bg-opacity-0 transition-colors duration-200 cursor-pointer">
              <div className={`h-20 lg:h-24 ${getGradientByType(paper.pastpaper_type)} flex items-end justify-start pl-2 pb-2`}>
                <span className="text-white text-lg lg:text-xl">{paper.pastpaper_type}</span>
              </div>
              <CardContent className="flex-grow p-0">
                <div className="p-2">
                  <div className="flex justify-start items-end mb-2">
                    {paper.variant !== "All Variants" ? (
                      <span className="text-xs lg:text-sm text-white text-opacity-50 font-normal">
                        Variant {paper.variant} {paper.pastpaper_number && `| Paper ${paper.pastpaper_number}`}
                      </span>
                    ) : (
                      <span className="text-xs lg:text-sm text-white text-opacity-50 font-normal">
                        All Papers | All Variants
                      </span>
                    )}
                  </div>
                  <div className="flex justify-end items-end gap-2 text-white text-opacity-50 font-normal text-lg lg:text-xl">
                    <span>{paper.tenure}</span>
                    <span>{paper.year}</span>
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