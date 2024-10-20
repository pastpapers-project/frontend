'use client'

import { Course, courses } from "@/app/appconfig/config";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

import { Footer } from "@/mycomponents/footer";
import { Intro } from "@/mycomponents/intro";
import Navbar from "@/mycomponents/navbar";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Timer, Bookmark, Pause, Play, RotateCcw, AlarmClock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Input } from "@/components/ui/input";

interface PageProps {
  params: {
    pid: string;
  };
}


export default function PaperPage({ params }: PageProps) {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [timerActive, setTimerActive] = useState(false);
  const [showTimer, setShowTimer] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [inputMinutes, setInputMinutes] = useState('');
  const [isTimeUp, setIsTimeUp] = useState(false);

  const [hours, setHours] = useState('00');
  const [minutes, setMinutes] = useState('00');
  const [seconds, setSeconds] = useState('00');

  // ... (other useEffects and functions)

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    
    if (timerActive && timeRemaining > 0) {
      interval = setInterval(() => {
        setTimeRemaining((prevTime) => {
          if (prevTime <= 1) {
            setTimerActive(false);
            setIsTimeUp(true);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [timerActive, timeRemaining]);

  useEffect(() => {
    const h = Math.floor(timeRemaining / 3600);
    const m = Math.floor((timeRemaining % 3600) / 60);
    const s = timeRemaining % 60;
    
    setHours(h.toString().padStart(2, '0'));
    setMinutes(m.toString().padStart(2, '0'));
    setSeconds(s.toString().padStart(2, '0'));
  }, [timeRemaining]);

  const handleTimeChange = (value: string, setter: React.Dispatch<React.SetStateAction<string>>, max: number) => {
    // Remove any non-digit characters
    const cleanValue = value.replace(/\D/g, '');
    
    // Limit to two digits
    const twoDigitValue = cleanValue.slice(0, 2);
    
    const numValue = parseInt(twoDigitValue, 10);
    if (!isNaN(numValue) && numValue >= 0 && numValue <= max) {
      setter(twoDigitValue);
    } else if (twoDigitValue === '') {
      setter('');
    }
  };

  const handleBlur = (value: string, setter: React.Dispatch<React.SetStateAction<string>>) => {
    if (value === '') {
      setter('00');
    } else if (value.length === 1) {
      setter(value.padStart(2, '0'));
    }
  };

  const startTimer = () => {
    if (!timerActive) {
      const totalSeconds = 
        parseInt(hours || '0') * 3600 + 
        parseInt(minutes || '0') * 60 + 
        parseInt(seconds || '0');
      setTimeRemaining(totalSeconds);
      setTimerActive(true);
      setIsTimeUp(false);
    }
  };


  const toggleTimer = () => {
    if (!showTimer) {
      setShowTimer(true);
    }
    setTimerActive(!timerActive);
  };

  const resetTimer = () => {
    setTimerActive(false);
    setTimeRemaining(0);
    setHours('00');
    setMinutes('00');
    setSeconds('00');
    setIsTimeUp(false);
  };


  const pidNumber = parseInt(params.pid, 10);

  // Find the file with the matching pid
  let file = null;
  let currentCourse = null;
  
  for (const course of courses) {
    file = course.files.find(f => f.pid === pidNumber);
    if (file) {
      currentCourse = course;
      break;
    }
  }

  if (!file || !currentCourse) {
    return <div>Not found</div>;
  }

  // Construct the paper title for the breadcrumb
  const paperTitle = `${file.type}${file.variant > 0 ? ` - Variant ${file.variant}` : ''}${file.paper ? ` Paper ${file.paper}` : ''} (${file.tenure} ${file.year})`;

  return (
    <ScrollArea className="h-screen text-white">
    <div className="bg-black h-full w-screen">
      <Navbar />
      <Intro />
      
      {/* Breadcrumb and Timer/Bookmark Container */}
      <div className="container mx-auto px-2  flex justify-between items-start max-w-7xl">
        {/* Left Column - Breadcrumb and Description */}
        <div className="flex-1">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <span className="text-xl text-white text-opacity-70">
                  O levels
                </span>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <span className="text-xl text-white text-opacity-70">
                  {currentCourse.name} ({currentCourse.id})
                </span>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <span className="text-xl text-white">
                  {paperTitle}
                </span>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <p className="text-gray-500 mt-4 max-w-2xl">
            Access a vast collection of past papers to help you prepare, practice, and excel in your exams with ease.
          </p>
        </div>

        {/* Right Column - Timer and Bookmark */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button 
                    variant="outline" 
                    size="icon"
                    className="rounded-2xl bg-white bg-opacity-5 h-16 w-16"
                    onClick={() => setShowTimer(!showTimer)}
                  >
                    {isTimeUp ? (
                      <AlarmClock className="h-10 w-10 text-red-500 animate-pulse" />
                    ) : (
                      <Timer className="h-10 w-10" />
                    )}
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Toggle Timer</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <div className={`
                overflow-hidden transition-all duration-300 ease-in-out
                ${showTimer ? 'w-[320px] opacity-100' : 'w-0 opacity-0'}`}>
                <div className={`flex items-center gap-2 bg-white bg-opacity-5 rounded-2xl px-3 justify-center h-16 w-[320px] ${isTimeUp ? 'bg-red-500 bg-opacity-20' : ''}`}>
                  {/* Editable Timer Display */}
                  <Input
                    type="text"
                    value={hours}
                    onChange={(e) => handleTimeChange(e.target.value, setHours, 99)}
                    onBlur={(e) => handleBlur(e.target.value, setHours)}
                    className="w-12 h-14 text-center bg-white bg-opacity-10 rounded-2xl border-none hover:border-none"
                    disabled={timerActive}
                  />
                  <span>:</span>
                  <Input
                    type="text"
                    value={minutes}
                    onChange={(e) => handleTimeChange(e.target.value, setMinutes, 59)}
                    onBlur={(e) => handleBlur(e.target.value, setMinutes)}
                    className="w-12 h-14 text-center bg-white bg-opacity-10 rounded-2xl border-none hover:border-none"
                    disabled={timerActive}
                  />
                  <span>:</span>
                  <Input
                    type="text"
                    value={seconds}
                    onChange={(e) => handleTimeChange(e.target.value, setSeconds, 59)}
                    onBlur={(e) => handleBlur(e.target.value, setSeconds)}
                    className="w-12 h-14 text-center bg-white bg-opacity-10 rounded-2xl border-none hover:border-none"
                    disabled={timerActive}
                  />

                            {/* Play/Pause Button */}
                          <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="h-8 w-8 hover:bg-transparent"
                          onClick={timerActive ? toggleTimer : startTimer}
                        >
                          {timerActive ? 
                            <Pause className="h-8 w-8 fill-white" /> : 
                            <Play className="h-8 w-8 fill-white" />
                          }
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{timerActive ? 'Pause' : 'Start'}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>

                            {/* Reset Button */}
                            <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button 
                          variant="primary" 
                          size="icon" 
                          className="h-8 w-8"  
                          onClick={resetTimer}
                        >
                          <RotateCcw className="h-8 w-8" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Reset</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </div>
            </div>

          {/* Bookmark Section */}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button 
                  variant="outline" 
                  size="icon"
                  className="rounded-2xl bg-white bg-opacity-5 h-16 w-16 "
                  onClick={() => setIsBookmarked(!isBookmarked)}
                >
                  <Bookmark 
                    className="h-5 w-5" 
                    fill={isBookmarked ? "white" : "none"}
                  />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>{isBookmarked ? 'Remove Bookmark' : 'Add Bookmark'}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>

      {/* PDF Viewer */}
      <div className="flex justify-center items-center mt-4 mb-32">
        <div className="w-full max-w-7xl bg-[#323639] rounded-xl shadow-lg p-2">
          <div className="no-border rounded-lg overflow-hidden">
            <iframe
              src={file.pdf_url}
              className="w-full h-[calc(100vh-200px)]"
              title={paperTitle}
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
    <ScrollBar className="visible z-[100]" orientation="vertical" />
  </ScrollArea>
  );
}