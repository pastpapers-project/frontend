'use client'

import { Course } from "@/app/appconfig/config";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { CourseScroll } from "@/mycomponents/courseScroll";
import { Navbar } from "@/mycomponents/navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState, useRef, useEffect } from 'react';
import { Input } from "@/mycomponents/input";
import PastPrepImage from '../../public/PastPrep.png';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { useSearchParams } from "next/navigation";
import { useToast } from "@/hooks/use-toast";

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}


type grade_level = {
  course_name: string;
  course_code: string;
};

type PastPapersPageProps = {
  subjects: grade_level[];
  level: 'olevel' | 'alevel';
};

export default function PastPrepAI({ subjects, level }: PastPapersPageProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const [selectedCourse, setSelectedCourse] = useState<grade_level>();

  const searchParams = useSearchParams();
  const initialInput = searchParams.get('pageInput');
  const hasInitialInputProcessed = useRef(false);


  const { toast } = useToast();

  useEffect(() => {
    if (initialInput && !hasInitialInputProcessed.current) {
      hasInitialInputProcessed.current = true; // Mark it as processed.
      setInput(initialInput);
      autoSubmit(initialInput);
      setInput('');
    }
  }, [initialInput]);

  const autoSubmit = async (message: string) => {

    if (!selectedCourse) {
      toast({
        title: "Course Not Selected",
        description: "Please select a course before asking a question.",
        variant: "destructive"
      });
      return;
    }

    const userMessage: Message = { role: 'user', content: message };
    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          messages: [userMessage],
          course: selectedCourse,
          category: level
        }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error);

      const assistantMessage: Message = { role: 'assistant', content: data.response };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Failed to fetch response:', error);
      toast({
        title: "Error",
        description: "Failed to get AI response. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const scrollToBottom = () => {
      if (scrollAreaRef.current) {
        const scrollElement = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
        if (scrollElement) {
          scrollElement.scrollTop = scrollElement.scrollHeight;
        }
      }
    };
    setTimeout(scrollToBottom, 100);
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedCourse) {
      toast({
        title: "Course Not Selected",
        description: "Please select a course before asking a question.",
        variant: "destructive"
      });
      return;
    }

    if (!input.trim() || isLoading) return;
    await autoSubmit(input.trim());
    setInput('');
  };

  return (
    <ScrollArea className="h-screen text-white">
      <div className="absolute inset-0 before:content-[''] before:absolute before:inset-0 before:bg-[url('/img1.jpg')] before:bg-cover before:[background-size:170%] before:[transform:rotate(180deg)] before:[transform-origin:center_center] before:-z-10">
      </div>
      <div className="backdrop-blur-3xl min-h-screen w-screen">
        <Navbar />

        {/* Mobile Menu Button - Adjusted position */}
        <div className="lg:hidden fixed top-16 left-4 z-50">
          <Button
            variant="ghost"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 text-black hover:bg-white/10 bg-white bg-opacity-65"
          >
            {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
            <p>Select Course</p>
          </Button>
        </div>

        {/* Main container with top padding to prevent navbar overlap */}
        <div className="pt-20 lg:pt-24"> {/* Added padding top */}
          <div className="flex flex-col lg:flex-row h-[calc(100vh-96px)]"> {/* Adjusted height calculation */}
            {/* Sidebar */}
            <div className={`
              fixed lg:relative
              inset-y-0 left-0 z-40
              w-64 lg:w-52
              transition-all duration-300 ease-in-out
              transform 
              ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
              bg-black/50 backdrop-blur-md lg:bg-transparent
              pt-20 lg:pt-0 
            `}>
              <div className="h-full">
              <CourseScroll 
                subjects={subjects}
                setSelectedCourse={(subject: grade_level) => {
                  // console.log(subject);
                  setSelectedCourse(subject);
                  toast({
                    title: "Course Selected",
                    description: `You have selected ${subject.course_name}`,
                  });
                  setIsSidebarOpen(false);
                }}
              />
              </div>
            </div>

            {/* Overlay */}
            {isSidebarOpen && (
              <div 
                className="fixed inset-0 bg-black/50 z-30 lg:hidden"
                onClick={() => setIsSidebarOpen(false)}
              />
            )}

            {/* Main Chat Area */}
            <div className="flex-1 flex flex-col h-full px-4 lg:px-16">
              <Card className="flex-grow overflow-hidden bg-transparent border-0">
                <ScrollArea 
                  ref={scrollAreaRef} 
                  className="h-full p-4"
                >
                  {messages.map((message, index) => (
                    <div
                      key={index}
                      className={`mb-4 p-4 rounded-xl ${
                        message.role === 'user'
                          ? 'ml-auto max-w-[90%] lg:max-w-[70%] min-w-[100px] backdrop-blur-3xl bg-white bg-opacity-15'
                          : 'mr-auto max-w-[90%] lg:max-w-[70%] min-w-[100px] backdrop-blur-3xl bg-white bg-opacity-15'
                      }`}
                      style={{ 
                        wordBreak: 'break-word',
                        width: 'fit-content',
                        overflowWrap: 'break-word'
                      }}
                    >
                      <div className="flex-shrink-0">
                        {message.role === 'assistant' && (
                          <Image 
                            src={PastPrepImage} 
                            alt="Assistant avatar" 
                            width={20}
                            height={20}
                            className="rounded-full mb-2" 
                          />
                        )}
                      </div>                      
                      <p className="text-white whitespace-pre-wrap break-words">
                        {message.content}
                      </p>
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex items-center justify-center py-4">
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-gray-900"></div>
                    </div>
                  )}
                </ScrollArea>
              </Card>

              {/* Chat Input */}
              <form 
                onSubmit={handleSubmit} 
                className="mb-16 border border-transparent rounded-full flex items-center h-16 mx-auto w-full lg:max-w-3xl"
                style={{ backgroundColor: '#1A1919' }}
              >
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message..."
                  className="mx-4 text-white w-full rounded-full outline-none border-0 focus:ring-0 focus-visible:ring-0 focus:ring-offset-0 focus-within:outline-none focus:outline-none active:outline-none bg-transparent"
                  disabled={isLoading}
                  style={{ 
                    boxShadow: 'none', 
                    backgroundColor: '#1A1919',
                    height: '4rem',
                    minHeight: '4rem',
                    padding: '4px 8px',
                    lineHeight: '2rem'
                  }}
                />
                <Button
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className="rounded-bl-full rounded-br-full rounded-tr-full bg-[#775BF1] bg-opacity-60 text-white shadow-2xl mr-2 hover:bg-[#775BF1]"
                >
                  Ask AI
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ScrollBar className="visible z-[100]" orientation="vertical" />
    </ScrollArea>
  );
}