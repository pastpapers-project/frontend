'use client'

import { Course } from "@/app/appconfig/config";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { CourseScreen } from "@/mycomponents/courseScreen";
import { CourseScroll } from "@/mycomponents/courseScroll";
import { Intro } from "@/mycomponents/intro";
import { Navbar } from "@/mycomponents/navbar";
import { Footer } from "@/mycomponents/footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { useState, useRef, useEffect } from 'react';
import { Input } from "@/mycomponents/input";
import PastPrepImage from '../app/public/PastPrep.png';
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";



export interface Message {
    role: 'user' | 'assistant';
    content: string;
  }
  



export default function PastPrepAI() {
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const scrollAreaRef = useRef<HTMLDivElement>(null);

    const [selectedCourse, setSelectedCourse] = useState<Course>();
  
    useEffect(() => {
      const scrollToBottom = () => {
        if (scrollAreaRef.current) {
          const scrollElement = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
          if (scrollElement) {
            scrollElement.scrollTop = scrollElement.scrollHeight;
          }
        }
      };
    
      // Add a small delay to ensure the DOM has updated
      setTimeout(scrollToBottom, 100);
    }, [messages]);
  
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      if (!input.trim() || isLoading) return;
    
      const userMessage: Message = {
        role: 'user',
        content: input.trim(),
      };
    
      setMessages((prev) => [...prev, userMessage]);
      setInput('');
      setIsLoading(true);
    
      try {
        const response = await fetch('/api/chat', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            messages: [...messages, userMessage],
          }),
        });
    
        const data = await response.json();
        
        if (!response.ok) throw new Error(data.error);
    
        const assistantMessage: Message = {
          role: 'assistant',
          content: data.response,
        };
    
        setMessages((prev) => [...prev, assistantMessage]);
        
        // Add a small delay to ensure DOM update
        setTimeout(() => {
          if (scrollAreaRef.current) {
            const scrollElement = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
            if (scrollElement) {
              scrollElement.scrollTop = scrollElement.scrollHeight;
            }
          }
        }, 100);
    
      } catch (error) {
        console.error('Failed to fetch response:', error);
      } finally {
        setIsLoading(false);
      }
    };



  return (
    <ScrollArea className="h-screen text-white ">
    <div className="absolute inset-0 before:content-[''] before:absolute before:inset-0 before:bg-[url('./public/img1.png')] before:bg-cover before:[background-size:170%] before:[transform:rotate(180deg)] before:[transform-origin:center_center] before:-z-10">
    </div>
      <div className="backdrop-blur-3xl h-screen w-screen gap-x-20 ">
        <Navbar />  
        <div className="flex  justify-start gap-4 ">
          
          <div className="pt-16">
            <CourseScroll setSelectedCourse={setSelectedCourse}/>
          </div>
          <div className="flex flex-col h-screen w-full mx-auto  pt-16 ">
              <Card className="flex-grow overflow-hidden bg-transparent border-0 ">
                  <ScrollArea 
                  ref={scrollAreaRef} 
                  className="h-full p-4 px-64"
                  >
                  {messages.map((message, index) => (
                    
                  <div
                      key={index}
                      className={`mb-4 p-4 rounded-xl ${
                        message.role === 'user'
                          ? 'ml-auto max-w-[70%] min-w-[100px] backdrop-blur-3xl bg-white bg-opacity-15'
                          : 'mr-auto max-w-[70%] min-w-[100px] backdrop-blur-3xl bg-white bg-opacity-15'
                      }`}
                      style={{ 
                        wordBreak: 'break-word',
                        width: 'fit-content',
                        overflowWrap: 'break-word'
                      }}
                    >
                      <div className="flex-shrink-0">
                        {message.role === 'user' ? (
                          <div/>
                        
                        ) : (
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

              <form onSubmit={handleSubmit} className="mb-10 border border-transparent rounded-full flex items-center h-16 mx-64" style={{ backgroundColor: '#1A1919' }}>
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message..."
                  className="mx-4 text-white w-full  rounded-full outline-none border-0 focus:ring-0 focus-visible:ring-0 focus:ring-offset-0 focus-within:outline-none focus:outline-none active:outline-none bg-transparent"
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
                  className="rounded-bl-full rounded-br-full  rounded-tr-full bg-[#775BF1] bg-opacity-60 text-white  shadow-2xl mr-2 hover:bg-[#775BF1]"
                >
                  Ask AI
                </Button>
              </form>

              </div>
          </div>
    
    </div>
    <ScrollBar className="visible z-[100]" orientation="vertical" />
  </ScrollArea>
  );
}
