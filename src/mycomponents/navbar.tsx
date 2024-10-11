"use client";

import icon from "@/app/public/PastPrep.png";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import { appname } from "@/app/appconfig/config";

export const Navbar = () => {
  return (
    <div className="px-4 fixed w-screen bg-transparent flex justify-between">
      <div className="flex items-center">
        <Image className="scale-75" draggable={false} src={icon} alt="" />
        <p className="text-white font- text-4xl">{appname}</p>
      </div>
      <div className="text-white flex items-center">
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
          </NavigationMenuList>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Pastprep AI</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>
                  <div className="h-10 w-10"></div>
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
          <NavigationMenuList>
            <NavigationMenuItem className="pl-4">
              Solve PastPapers
            </NavigationMenuItem>
          </NavigationMenuList>
          <NavigationMenuList>
            <NavigationMenuItem className="pl-8">Contact Us</NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="text-white flex items-center gap-x-2">
        <div className="bg-gray-800 rounded-full p-1 min-w-20 flex justify-center">
          Login
        </div>
        <div className="bg-gray-800 rounded-full p-1 min-w-20 flex justify-center">
          Signup
        </div>
      </div>
    </div>
  );
};
