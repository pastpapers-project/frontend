'use client';

import { useState } from "react";
import Image from "next/image";
import icon from "@/app/public/PastPrep.png";
import { appname } from "@/app/appconfig/config";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Menu, Coffee  } from "lucide-react";

export const Navbar = () => {
  return (
    <div className="px-4 fixed w-screen bg-transparent flex justify-between items-center">
      {/* Left Section: Logo and App Name */}
      <div className="flex items-center">
        <Image className="scale-50" draggable={false} src={icon} alt="Logo" />
        <p className="text-white font-bold text-2xl sm:text-3xl">{appname}</p>
      </div>

      {/* Center Section: Navigation for larger screens */}
      <div className="hidden md:flex text-white items-center">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>PastPapers</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>
                  <div className="h-10 w-10"></div>
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Pastprep AI</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>
                  <div className="h-10 w-10"></div>
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem className="pl-4">Solve PastPapers</NavigationMenuItem>
            <NavigationMenuItem className="pl-8">Contact Us</NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Right Section: Login/Signup */}
      <div className="hidden md:flex text-white items-center gap-x-2">
        <Button variant="ghost" className="rounded-full">
          Login
        </Button>
        <Button variant="ghost" className="rounded-full">
          Signup
        </Button>
      </div>

      {/* Mobile Sidebar using shadcn/ui Sheet component */}
      
      
      <Sheet>
        <SheetTrigger asChild className="md:hidden">
          <Button variant="ghost" size="icon">
            <Menu className="h-6 w-6 text-white" />
          </Button>
        </SheetTrigger>
        <SheetContent 
          side="right" 
          className="w-64 border-gray-700/50 flex flex-col bg-gray-800/40 backdrop-blur-2xl backdrop-saturate-150 supports-[backdrop-filter]:bg-gray-800/40"
        >
          {/* Menu Header */}
          <div className="flex flex-col space-y-6 text-white flex-grow">
            <div className="text-lg font-semibold">Menu</div>
            <div className="border-b border-gray-600"></div>
            <nav className="flex flex-col space-y-4 overflow-y-auto flex-grow">
              {/* PastPapers Header */}
              <div className="cursor-default font-semibold">PastPapers</div>
              <div className=" flex flex-col space-y-1">
              <Button 
                variant="ghost" 
                className="justify-start hover:opacity-80 active:opacity-60 transition-opacity duration-150 pl-0 text-white bg-transparent hover:bg-transparent">
                  <span className="flex items-center justify-center w-8 h-8 border border-white/50 rounded-xl mr-2 text-white/50">
                    <Coffee className="h-5 w-5" />
                  </span>
                  O Levels
                </Button>
                <Button 
                variant="ghost" 
                className="justify-start hover:opacity-80 active:opacity-60 transition-opacity duration-150 pl-0 text-white bg-transparent hover:bg-transparent">
                  <span className="flex items-center justify-center w-8 h-8 border border-white/50 rounded-xl mr-2 text-white/50">
                    <Coffee className="h-5 w-5" />
                  </span>
                  A Levels
              </Button>
              </div>

              {/* Pastprep AI Header */}
              <div className="cursor-default font-semibold">Pastprep AI</div>
              <div className=" flex flex-col space-y-1">
              <Button 
                variant="ghost" 
                className="justify-start hover:opacity-80 active:opacity-60 transition-opacity duration-150 pl-0 text-white bg-transparent hover:bg-transparent">
                  <span className="flex items-center justify-center w-8 h-8 border border-white/50 rounded-xl mr-2 text-white/50">
                    <Coffee className="h-5 w-5" />
                  </span>
                  O Levels
                </Button>
                <Button 
                variant="ghost" 
                className="justify-start hover:opacity-80 active:opacity-60 transition-opacity duration-150 pl-0 text-white bg-transparent hover:bg-transparent">
                  <span className="flex items-center justify-center w-8 h-8 border border-white/50 rounded-xl mr-2 text-white/50">
                    <Coffee className="h-5 w-5" />
                  </span>
                  A Levels
              </Button>
              </div>

              {/* Solve PastPapers Header */}
              <div className="cursor-default font-semibold">Solve PastPapers</div>
              <div className=" flex flex-col space-y-1">
              <Button 
                variant="ghost" 
                className="justify-start hover:opacity-80 active:opacity-60 transition-opacity duration-150 pl-0 text-white bg-transparent hover:bg-transparent">
                  <span className="flex items-center justify-center w-8 h-8 border border-white/50 rounded-xl mr-2 text-white/50">
                    <Coffee className="h-5 w-5" />
                  </span>
                  O Levels
                </Button>
                <Button 
                variant="ghost" 
                className="justify-start hover:opacity-80 active:opacity-60 transition-opacity duration-150 pl-0 text-white bg-transparent hover:bg-transparent">
                  <span className="flex items-center justify-center w-8 h-8 border border-white/50 rounded-xl mr-2 text-white/50">
                    <Coffee className="h-5 w-5" />
                  </span>
                  A Levels
              </Button>
              </div>

              {/* Contact Us Button */}
              <Button 
                variant="ghost" 
                className="justify-start hover:opacity-80 active:opacity-60 transition-opacity duration-150 pl-0 text-white bg-transparent hover:bg-transparent">
                Contact Us
              </Button>
            </nav>
          </div>

          {/* Sticky Login/Signup Buttons at Bottom */}
          <div className="border-t border-gray-600 pt-4">
            <div className="flex flex-col space-y-4">
              <Button variant="secondary" className="w-full rounded-full">
                Login
              </Button>
              <Button variant="secondary" className="w-full rounded-full">
                Signup
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>


    </div>
  );
};