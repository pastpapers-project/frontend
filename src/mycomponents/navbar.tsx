'use client'
import React, { useState } from 'react';
import Image from "next/image";
import { appname } from "@/app/appconfig/config";
import Link from 'next/link';
import { useEffect } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { 
 DropdownMenu, 
 DropdownMenuContent, 
 DropdownMenuItem, 
 DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu"

import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger, 
} from "@/components/ui/navigation-menu";
import { Menu, Coffee, Download } from "lucide-react";
import { Button } from "@/components/ui/button"
import { useRouter } from 'next/navigation';
import { getSavedPapers } from '@/utils/userService';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { SavePaper } from '@/types/paper';


const ListItem: React.FC<SubMenuItem> = ({ title, href, description }) => (
  <li>
    <NavigationMenuLink asChild>
      <a
        href={href}
        className="block select-none space-y-1 rounded-2xl p-4 leading-none no-underline outline-none hover:backdrop-blur-md transition-colors hover:backdrop-blur-md hover:bg-white/10 transition-all duration-200"
      >
        <div className="text-sm font-medium leading-none">{title}</div>
        <p className="line-clamp-2 text-sm leading-snug text-white text-opacity-25">
          {description}
        </p>
      </a>
    </NavigationMenuLink>
  </li>
);

ListItem.displayName = "ListItem";

interface SubMenuItem {
  title: string;
  href: string;
  description: string;
}

interface MenuItem {
  label: string;
  href?: string;
  submenu?: SubMenuItem[];
}

const menuItems: MenuItem[] = [
  {
    label: "PastPapers",
    submenu: [
      {
        title: "O Levels",
        href: "/past-papers/olevels",
        description: "Access O Level past papers and resources.",
      },
      {
        title: "A Levels",
        href: "/past-papers/alevels",
        description: "Explore A Level past papers and study materials.",
      },
    ],
  },
  {
    label: "Pastprep AI",
    submenu: [
      {
        title: "O Levels AI",
        href: "/pastprep-ai/olevels",
        description: "AI-powered assistance for O Level studies.",
      },
      {
        title: "A Levels AI",
        href: "/pastprep-ai/alevels",
        description: "Advanced AI tools for A Level preparation.",
      },
    ],
  },
  {
    label: "Solve PastPapers",
    submenu: [
      {
        title: "O Levels Solver",
        href: "/solve/olevels",
        description: "Interactive O Level past paper solving platform.",
      },
      {
        title: "A Levels Solver",
        href: "/solve/alevels",
        description: "Comprehensive A Level problem-solving tools.",
      },
    ],
  },
  {
    label: "Contact Us",
    href: "/contact-us",
  },
];

// New component for mobile menu items
const MobileMenuItem: React.FC<{ item: SubMenuItem }> = ({ item }) => (
  <Link href={item.href}>
    <Button 
      variant="ghost" 
      className="justify-start hover:opacity-80 active:opacity-60 transition-opacity duration-150 pl-0 text-white bg-transparent hover:bg-transparent w-full"
    >
      <span className="flex items-center justify-center w-8 h-8 border border-white/50 rounded-xl mr-2 text-white/50">
        <Coffee className="h-5 w-5" />
      </span>
      {item.title.split(' ')[0]} Levels
    </Button>
  </Link>
);

export const Navbar: React.FC = () => {

  const { data: session } = useSession();
  const router = useRouter();

  const [savedPapers, setSavedPapers] = useState<SavePaper[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);


  const viewSavedPapers = async (userId: string) => {
    try {
      const response = await getSavedPapers(userId);
      setSavedPapers(response.savedPapers);
      setIsDialogOpen(true);
    } catch (error) {
      console.error('Error fetching saved papers:', error);
    }
  };

  useEffect(() => {
    console.log('Saved papers:', savedPapers);
  }, [savedPapers]);


  const SavedPapersDialog = () => (    
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        {/* <Button variant="outline">Saved Papers</Button> */}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Saved Papers</DialogTitle>
          <DialogDescription>
            Here are your saved papers:
          </DialogDescription>
        </DialogHeader>
        
        {/* Display saved papers */}
        <div className="grid gap-4 py-4">
          {savedPapers.length > 0 ? (
            <div className="space-y-4">
              {savedPapers.map((paper, index) => (
                <div 
                  key={index} 
                  className="bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 hover:border-white/40 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl cursor-pointer"
                  onClick={() => router.push(`/past-papers/papers/${paper.id}`)}
                >
                  <div className="p-4 flex items-center justify-between">
                    <div className="flex-grow pr-4">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="text-lg font-semibold ">{paper.course_name}</h3>
                        <span className="text-sm  bg-white/20 px-2 py-1 rounded-full">
                          {paper.pastpaper_type}
                        </span>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm ">
                          <span className="font-medium">Course Code:</span> {paper.course_code}
                        </p>
                        <div className="flex justify-between">
                          <p className="text-sm ">
                            <span className="font-medium">Year:</span> {paper.year}
                          </p>
                          {paper.variant && (
                            <span className="text-xs  bg-white/10 px-2 rounded-md">
                              {paper.variant}
                            </span>
                          )}
                        </div>
                      </div>
                    </div> 
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 bg-white/10 rounded-xl">
              <Coffee className="mx-auto h-12 w-12 mb-4" />
              <p className="">No saved papers found</p>
              <p className=" text-sm mt-2">Explore and save some papers to get started</p>
            </div>
          )}
        </div>
  
        <DialogFooter>
          <Button variant="outline" onClick={() => setIsDialogOpen(false)}>Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
 

  return (
    <div className="fixed w-full bg-transparent backdrop-blur-lg z-50">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        {/* Left Section: Logo and App Name */}

          <div className="flex items-center cursor-pointer" onClick={() => router.push("/")}>
            <Image className="h-8 w-auto" src="/PastPrep.png" width={48} height={48} alt="Logo" />
            <p className="text-white font-bold text-2xl ml-2">{appname}</p>
          </div>


        {/* Center Section: Navigation for larger screens */}
        <div className="hidden lg:block">
          <NavigationMenu >
            <NavigationMenuList className="flex space-x-4 " >
              {menuItems.map((item, index) => (
                <NavigationMenuItem key={index} >
                  {item.submenu ? (
                    <>
                    <NavigationMenuTrigger className="text-white hover:backdrop-blur-md hover:bg-white/10 transition-all duration-200 rounded">
                      {item.label}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="text-white bg-transparent leading-none no-underline outline-none">
                      <div className="bg-black-700/70 rounded-2xl">
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                          {item.submenu.map((subItem, subIndex) => (
                            <li key={subIndex} onClick={() => router.push(subItem.href)} className="cursor-pointer">
                              <div className="block select-none space-y-1 rounded-2xl p-4 leading-none no-underline outline-none hover:backdrop-blur-md transition-colors hover:backdrop-blur-md hover:bg-white/10 transition-all duration-200">
                                <div className="text-sm font-medium leading-none">{subItem.title}</div>
                                <p className="line-clamp-2 text-sm leading-snug text-white text-opacity-25">
                                  {subItem.description}
                                </p>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </NavigationMenuContent>
                  </>
                ) : (
                    <NavigationMenuLink
                      className="text-white hover:backdrop-blur-md hover:bg-white/10  px-3 py-2 transition-all duration-200  rounded"
                      onClick={() => router.push(item.href!)}
                    >
                      {item.label}
                    </NavigationMenuLink>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Right Section: Login/Signup */}
        <div className="hidden lg:flex space-x-2 items-center">
          {!session ? (
            <Button variant="outline" className="text-black flex items-center">
              <Link href="/auth/login" className="flex items-center">
                <img
                  src="https://img.icons8.com/?size=100&id=85834&format=png&color=000000"
                  alt="Google Icon"
                  className="w-5 h-5 mr-2"
                />
                Sign in with Google
              </Link>
            </Button>
          ) : (
            <div className="flex items-center gap-4">
              <DropdownMenu>
                <DropdownMenuTrigger className="focus:outline-none">
                <Avatar className="h-8 w-8 ">
                  <AvatarImage 
                    src={session?.user?.image || ''} 
                    alt={session?.user?.name || ''}
                    onError={(e) => {
                      console.error('Avatar image failed to load:', session?.user?.image);
                      e.currentTarget.src = '';
                    }}
                  />
                  <AvatarFallback className='bg-white text-black'>
                    {session?.user?.name?.charAt(0)?.toUpperCase() || '?'}
                  </AvatarFallback>
                </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-[200px]">
                  <DropdownMenuItem className="cursor-default">
                    <div className="flex flex-col space-y-1">
                      <p className="font-medium">{session.user?.name}</p>
                      <p className="text-sm text-muted-foreground">{session.user?.email}</p>
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem >
                    Settings
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => viewSavedPapers(session.user?.id)}>
        Saved papers
      </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => signOut()}>
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          )}
          </div>
          <SavedPapersDialog />
        {/* Mobile Menu */}
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
                {menuItems.map((item, index) => (
                  <React.Fragment key={index}>
                    {item.submenu ? (
                      <>
                        <div className="cursor-default font-semibold">{item.label} </div>
                        <div className="flex flex-col space-y-1">
                          {item.submenu.map((subItem, subIndex) => (
                            <MobileMenuItem key={subIndex} item={subItem} />
                          ))}
                        </div>
                      </>
                    ) : (
                      <Button 
                        variant="ghost" 
                        className="justify-start hover:opacity-80 active:opacity-60 transition-opacity duration-150 pl-0 text-white bg-transparent hover:bg-transparent"
                      >
                        {item.label}
                      </Button>
                    )}
                  </React.Fragment>
                ))}
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
    </div>
  );
};

export default Navbar;  





