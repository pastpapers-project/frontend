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
import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="px-4 fixed w-screen bg-transparent backdrop-blur-3xl bg-opacity-90 z-50 flex justify-between">
      <div className="flex items-center">
        <Image className="scale-75" draggable={false} src={icon} alt="" />
        <p className="text-white font- text-4xl">{appname}</p>
      </div>
      <div className="text-white flex items-center">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent ">
                PastPapers
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>
                  <div className="h-auto w-auto p-5 items-center text-white flex flex-col bg-black bg-opacity-95">
                    <Link
                      href={"/PastPapers/O-Levels"}
                      className=" flex items-center justify-center w-20 h-10 hover:bg-gray-600 transition-all rounded-xl"
                    >
                      O Levels
                    </Link>
                    <Link
                      href={"/PastPapers/A-Levels"}
                      className=" flex items-center justify-center w-20 h-10 hover:bg-gray-600 transition-all rounded-xl"
                    >
                      A Levels
                    </Link>
                  </div>
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent">
                Pastprep AI
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>
                  <div className="h-10 w-10"></div>
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
          <NavigationMenuList>
            <NavigationMenuItem className="pl-4">
              <Link href="/Solve" legacyBehavior passHref>
                <NavigationMenuLink
                  className={navigationMenuTriggerStyle() + " bg-transparent"}
                >
                  Solve PastPapers
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
          <NavigationMenuList>
            <NavigationMenuItem className="pl-4">
              <Link href="/Contact" legacyBehavior passHref>
                <NavigationMenuLink
                  className={navigationMenuTriggerStyle() + " bg-transparent"}
                >
                  Contact Us
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
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
