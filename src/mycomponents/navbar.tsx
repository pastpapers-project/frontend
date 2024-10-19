import React from 'react';
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
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Menu, Coffee } from "lucide-react";



const ListItem: React.FC<SubMenuItem> = ({ title, href, description }) => (
  <li>
    <NavigationMenuLink asChild>
      <a
        href={href}
        className="block select-none space-y-1 rounded-2xl p-4 leading-none no-underline outline-none transition-colors hover:bg-gray-100 focus:bg-gray-100"
      >
        <div className="text-sm font-medium leading-none">{title}</div>
        <p className="line-clamp-2 text-sm leading-snug text-gray-500">
          {description}
        </p>
      </a>
    </NavigationMenuLink>
  </li>
);

ListItem.displayName = "ListItem";




// Define the structure for submenu items
interface SubMenuItem {
  title: string;
  href: string;
  description: string;
}

// Define the structure for main menu items
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
        href: "/pastpapers/o-levels",
        description: "Access O Level past papers and resources.",
      },
      {
        title: "A Levels",
        href: "/pastpapers/a-levels",
        description: "Explore A Level past papers and study materials.",
      },
    ],
  },
  {
    label: "Pastprep AI",
    submenu: [
      {
        title: "O Levels AI",
        href: "/pastprep-ai/o-levels",
        description: "AI-powered assistance for O Level studies.",
      },
      {
        title: "A Levels AI",
        href: "/pastprep-ai/a-levels",
        description: "Advanced AI tools for A Level preparation.",
      },
    ],
  },
  {
    label: "Solve PastPapers",
    submenu: [
      {
        title: "O Levels Solver",
        href: "/solve/o-levels",
        description: "Interactive O Level past paper solving platform.",
      },
      {
        title: "A Levels Solver",
        href: "/solve/a-levels",
        description: "Comprehensive A Level problem-solving tools.",
      },
    ],
  },
  {
    label: "Contact Us",
    href: "/contact",
  },
];



export const Navbar: React.FC = () => {
  return (
    <div className="fixed w-full bg-gray-900/50 backdrop-blur-lg z-50">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        {/* Left Section: Logo and App Name */}
        <div className="flex items-center">
          <Image className="h-8 w-auto" src={icon} alt="Logo" />
          <p className="text-white font-bold text-2xl ml-2">{appname}</p>
        </div>

        {/* Center Section: Navigation for larger screens */}
        <div className="hidden lg:block">
          <NavigationMenu>
          <NavigationMenuList className="flex space-x-4">
            {menuItems.map((item, index) => (
              <NavigationMenuItem key={index}>
                {item.submenu ? (
                  <>
                    <NavigationMenuTrigger className="text-white hover:bg-gray-700/50 rounded">
                      {item.label}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="bg-transparent backdrop-blur-md rounded-2xl overflow-hidden">
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                          {item.submenu.map((subItem, subIndex) => (
                            <ListItem key={subIndex} {...subItem} />
                          ))}
                        </ul>
                      </div>
                    </NavigationMenuContent>
                  </>
                ) : (
                  <NavigationMenuLink
                    className="text-white hover:bg-gray-700/50 px-3 py-2 rounded"
                    href={item.href}
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
        <div className="hidden lg:flex space-x-2">
          <Button variant="ghost" className="text-white hover:bg-gray-700/50">Login</Button>
          <Button variant="outline" className="text-white border-white hover:bg-white hover:text-gray-900">Signup</Button>
        </div>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6 text-white" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-gray-900/95 text-white">
            <nav className="flex flex-col space-y-4">
              <h2 className="text-xl font-bold mb-4">Menu</h2>
              <div className="space-y-2">
                <h3 className="font-semibold">PastPapers</h3>
                <Button variant="ghost" className="w-full justify-start text-white">
                  <Coffee className="mr-2 h-4 w-4" /> O Levels
                </Button>
                <Button variant="ghost" className="w-full justify-start text-white">
                  <Coffee className="mr-2 h-4 w-4" /> A Levels
                </Button>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">Pastprep AI</h3>
                <Button variant="ghost" className="w-full justify-start text-white">
                  <Coffee className="mr-2 h-4 w-4" /> O Levels
                </Button>
                <Button variant="ghost" className="w-full justify-start text-white">
                  <Coffee className="mr-2 h-4 w-4" /> A Levels
                </Button>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">Solve PastPapers</h3>
                <Button variant="ghost" className="w-full justify-start text-white">
                  <Coffee className="mr-2 h-4 w-4" /> O Levels
                </Button>
                <Button variant="ghost" className="w-full justify-start text-white">
                  <Coffee className="mr-2 h-4 w-4" /> A Levels
                </Button>
              </div>
              <Button variant="ghost" className="w-full justify-start text-white">
                Contact Us
              </Button>
            </nav>
            <div className="absolute bottom-4 left-4 right-4 space-y-2">
              <Button variant="outline" className="w-full text-white border-white">Login</Button>
              <Button variant="default" className="w-full bg-white text-gray-900 hover:bg-gray-200">Signup</Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Navbar;