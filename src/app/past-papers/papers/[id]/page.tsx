'use client'
//src/app/past-papers/papers/[id]/page.tsx
import { courses } from "@/app/appconfig/config";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { usePathname, useSearchParams } from 'next/navigation';
import { Footer } from "@/mycomponents/footer";
import { Intro } from "@/mycomponents/intro";
import Navbar from "@/mycomponents/navbar";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Timer, Bookmark, Pause, Play, RotateCcw, AlarmClock, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { PaperSearch } from "@/mycomponents/pastpapersSearch";
import { useRouter } from 'next/router';
import { useToast } from "@/hooks/use-toast";
import { PastPaper } from "@/types/paper";
import { addSavedPaper, getSavedPapers } from "@/utils/userService";
import { useSession } from "next-auth/react";


export default function PaperPage() {
  // Paper data state
  const [paperData, setPaperData] = useState<PastPaper | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [paperTitle, setPaperTitle] = useState('');
  const [pid, setUrlId] = useState<string>('');

  // UI state
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [showTimer, setShowTimer] = useState(false);
  const [isMobileTimerExpanded, setIsMobileTimerExpanded] = useState(false);

  // Timer state
  const [timerActive, setTimerActive] = useState(false);
  const [isTimeUp, setIsTimeUp] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [totalTime, setTotalTime] = useState(0);
  const [hours, setHours] = useState('00');
  const [minutes, setMinutes] = useState('00');
  const [seconds, setSeconds] = useState('00');
  const [progress, setProgress] = useState(100);

  // Hooks
  const pathname = usePathname();
  const { toast } = useToast();
  const searchParams = useSearchParams();

  const { data: session } = useSession();


  // const [savedPapers, setSavedPapers] = useState([]);
  // const [isOpen, setIsOpen] = useState(false);


  // const viewSavedPapers = async () => {
  //   const userData = await getSavedPapers(userId);
  //   setSavedPapers(userData.savedPapers); // Set the saved papers from the fetched user data
  //   setIsOpen(true); // Open the dialog
  // };

  // Fetch paper data
  useEffect(() => {
    const fetchPaperData = async () => {
      try {
        const paperId = pathname.split('/').pop();
        setUrlId(paperId || '');
        
        if (!paperId) {
          throw new Error('Paper ID not found');
        }

        const response = await fetch(`/api/paper/${paperId}`);
        console.log(response);
        if (!response.ok) {
          throw new Error('Failed to fetch paper data');
        }

        const data = await response.json();
        setPaperData(data);
        
        // Set paper title
        const title = `${data.pastpaper_type}${
          data.variant !== "All Variants" ? ` - Variant ${data.variant}` : ''
        }${data.pastpaper_number ? ` Paper ${data.pastpaper_number}` : ''} (${
          data.tenure
        } ${data.year})`;
        setPaperTitle(title);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch paper data');
        console.error('Error fetching paper:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPaperData();
  }, [pathname]);

  // Timer effects
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    
    if (timerActive && timeRemaining > 0) {
      interval = setInterval(() => {
        setTimeRemaining((prevTime) => {
          const newTime = prevTime - 1;
          setProgress((newTime / totalTime) * 100);
          if (newTime <= 0) {
            setTimerActive(false);
            setIsTimeUp(true);
            return 0;
          }
          return newTime;
        });
      }, 1000);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [timerActive, timeRemaining, totalTime]);

  // Update timer display
  useEffect(() => {
    const h = Math.floor(timeRemaining / 3600);
    const m = Math.floor((timeRemaining % 3600) / 60);
    const s = timeRemaining % 60;
    
    setHours(h.toString().padStart(2, '0'));
    setMinutes(m.toString().padStart(2, '0'));
    setSeconds(s.toString().padStart(2, '0'));
  }, [timeRemaining]);

  // Timer handlers
  const handleTimeChange = (value: string, setter: React.Dispatch<React.SetStateAction<string>>, max: number) => {
    const cleanValue = value.replace(/\D/g, '');
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
      setTotalTime(totalSeconds);
      setTimerActive(true);
      setIsTimeUp(false);
      setProgress(100);
    }
  };

  const toggleTimer = () => {
    setTimerActive(!timerActive);
  };

  const resetTimer = () => {
    setTimerActive(false);
    setTimeRemaining(0);
    setTotalTime(0);
    setHours('00');
    setMinutes('00');
    setSeconds('00');
    setIsTimeUp(false);
    setProgress(100);
  };

  const handleBookmarkToggle = async () => {
    setIsBookmarked(!isBookmarked);

    if (!session?.user?.id) {
      toast({
        title: "Error",
        description: "You must be logged in to bookmark papers.",
        variant: "destructive",
      });
      return;
    }

    // Assuming you have the paper object, for example:
    const paper = {
      id: paperData?.id,
      course_name: paperData?.course_name,
      course_code: paperData?.course_code,
      pastpaper_type: paperData?.pastpaper_type,
      year: paperData?.year,
      tenure: paperData?.tenure,
      variant: paperData?.variant,
      pdf_url: paperData?.pdf_url,
    };

    const validatedPaper = {
      id: String(paper.id),  // Convert to string
      course_name: String(paper.course_name),  // Convert to string
      course_code: String(paper.course_code),  // Convert to string
      pastpaper_type: String(paper.pastpaper_type),  // Convert to string
      year: Number(paper.year),  // Convert to integer
      tenure: String(paper.tenure),  // Convert to string
      variant: String(paper.variant),  // Convert to string
      pdf_url: String(paper.pdf_url),  // Convert to string
    };
  
    try {
      if (isBookmarked) {
        // Remove bookmark (if it was already bookmarked)
        // await removeSavedPaper(userId, paper.id); // Assuming removeSavedPaper API function exists
  
        toast({
          title: "Removed from bookmarks",
          description: "You have removed this paper from your bookmarks.",
        });
      } else {
        console.log(paperData);
        // Add bookmark (if it was not bookmarked)
        await addSavedPaper(session.user.id, validatedPaper); // Assuming addSavedPaper API function exists
  
        toast({
          title: "This paper is saved",
          description: "You have successfully saved this paper to your bookmarks.",
        });
      }
    } catch (error) {
      console.error("Error saving/removing paper from bookmarks:", error);
      toast({
        title: "Something went wrong",
        description: "There was an error while updating your bookmarks.",
        variant: "destructive",
      });
    }
  };


  if (isLoading) {
    return (
      <div className="h-screen bg-black">
        <Navbar />
        <div className="container mx-auto px-4 flex items-center justify-center h-[calc(100vh-64px)]">
          <div className="animate-pulse space-y-4">
            <div className="h-4 bg-gray-700 rounded w-72"></div>
            <div className="h-4 bg-gray-700 rounded w-48"></div>
          </div>
        </div>
      </div>
    );
  }


  return (
    <ScrollArea className="h-screen text-white">
      <div className="bg-black h-full w-screen">
        <Navbar />
        

        {/* Mobile Timer Panel */}
        <div className={`
          fixed bottom-0 left-0 right-0 bg-black bg-opacity-95 
          transition-transform duration-300 ease-in-out z-50
          lg:hidden
          ${isMobileTimerExpanded ? 'translate-y-0' : 'translate-y-full'}
        `}>
          <div className="p-4 space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Timer</h3>
              <Button 
                variant="ghost" 
                onClick={() => setIsMobileTimerExpanded(false)}
              >
                <X className="h-6 w-6" />
              </Button>
            </div>
            
            <div className="flex items-center justify-center gap-2">
              <Input
                type="text"
                value={hours}
                onChange={(e) => handleTimeChange(e.target.value, setHours, 99)}
                onBlur={(e) => handleBlur(e.target.value, setHours)}
                className="w-16 text-center bg-white bg-opacity-10"
                disabled={timerActive}
              />
              <span>:</span>
              <Input
                type="text"
                value={minutes}
                onChange={(e) => handleTimeChange(e.target.value, setMinutes, 59)}
                onBlur={(e) => handleBlur(e.target.value, setMinutes)}
                className="w-16 text-center bg-white bg-opacity-10"
                disabled={timerActive}
              />
              <span>:</span>
              <Input
                type="text"
                value={seconds}
                onChange={(e) => handleTimeChange(e.target.value, setSeconds, 59)}
                onBlur={(e) => handleBlur(e.target.value, setSeconds)}
                className="w-16 text-center bg-white bg-opacity-10"
                disabled={timerActive}
              />
            </div>

            <div className="flex justify-center gap-4">
              <Button 
                variant="outline"
                onClick={timerActive ? toggleTimer : startTimer}
                className="w-24 text-black"
              >
                {timerActive ? 'Pause' : 'Start'}
              </Button>
              <Button 
                variant="outline"
                onClick={resetTimer}
                className="w-24 text-black"
              >
                Reset
              </Button>
            </div>
          </div>
        </div>

        
        {/* Breadcrumb and Timer/Bookmark Container */}
        <div className="container mx-auto px-4 lg:px-2 flex flex-col lg:flex-row lg:justify-between lg:items-start max-w-7xl pt-20 lg:pt-32 gap-4 lg:gap-0">
          {/* Left Column - Breadcrumb and Description */}
          <div className="flex-1 w-full lg:w-auto">
            {paperData && ( // Add conditional rendering
              <Breadcrumb>
                <BreadcrumbList className="flex-wrap">
                  <BreadcrumbItem>
                    <span className="text-base lg:text-xl text-white text-opacity-70">
                      {paperData.course_code.toString().startsWith('9') ? 'A levels' : 'O levels'}
                    </span>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <span className="text-base lg:text-xl text-white text-opacity-70">
                      {paperData.course_name} ({paperData.course_code})
                    </span>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <span className="text-base lg:text-xl text-white">
                      {paperTitle}
                    </span>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            )}
            <p className="text-gray-500 mt-4 max-w-2xl text-sm lg:text-base">
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
                    className="rounded-xl lg:rounded-2xl bg-white bg-opacity-5 h-12 w-12 lg:h-16 lg:w-16"
                    onClick={() => {
                      if (window.innerWidth < 1024) {
                        setIsMobileTimerExpanded(true);
                      } else {
                        setShowTimer(!showTimer);
                      }
                    }}
                  >
                    {isTimeUp ? (
                      <AlarmClock className="h-6 w-6 lg:h-10 lg:w-10 text-red-500 animate-pulse" />
                    ) : (
                      <Timer className="h-6 w-6 lg:h-10 lg:w-10" />
                    )}
                  </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Toggle Timer</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
  
              <div className={`
                hidden lg:block overflow-hidden transition-all duration-300 ease-in-out
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
                          variant="ghost" 
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
  
            {/* Bookmark Button */}
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button 
                    variant="outline" 
                    size="icon"
                    className="rounded-xl lg:rounded-2xl bg-white bg-opacity-5 h-12 w-12 lg:h-16 lg:w-16"
                    onClick={handleBookmarkToggle}
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
  
        {/* Progress Bar */}
        <div className="flex justify-center items-center mt-4">
          <div className="w-full max-w-7xl px-4 lg:px-2">
            <Progress 
              value={progress}
              className="w-full h-4 lg:h-7 bg-[#323639] rounded-none" 
            />
          </div>
        </div>
        
        {/* PDF Viewer */}
        <div className="flex justify-center items-center mt-0 mb-32">
          <div className="w-full max-w-7xl px-4 lg:px-2">
            <div className="no-border overflow-hidden">
              {paperData ? (
                <iframe
                  src={paperData.pdf_url}
                  className="w-full h-[calc(100vh-280px)] lg:h-[calc(100vh-200px)]"
                  title={paperTitle}
                />
              ) : (
                <p>Loading...</p>
              )}
            </div>
          </div>
        </div>
  
        <Footer />
      </div>
      <ScrollBar className="visible z-[100]" orientation="vertical" />
    </ScrollArea>
  );
}