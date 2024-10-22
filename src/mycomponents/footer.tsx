import { Separator } from "@/components/ui/separator";
import icon from "@/app/public/PastPrep.png";
import Image from "next/image";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";

import React from 'react';
import { Mail, Phone, Linkedin, Youtube } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const Footer = () => {
  return (
    <footer className="w-full">
      <Separator className="bg-gray-600" />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Company Info Section */}
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="h-12 w-12 relative">
                <Image src={icon} alt="PastPrep Logo" className="object-contain" />
                </div>
                <h2 className="text-2xl md:text-4xl font-bold">Pastprep</h2>
              </div>
              <p className="text-gray-500">Say goodbye to exam stress!</p>
            </div>
            
            <div className="text-sm text-gray-500 pt-8">
              © Pastprep 2024. All rights reserved.
            </div>
          </div>

          {/* Contact and Social Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-xl md:text-2xl font-semibold">Contact</h3>
              <div className="space-y-3">
                <a href="mailto:info@pastprep.com" className="flex items-center gap-2 hover:text-gray-600 transition-colors">
                  <Mail className="h-5 w-5" />
                  <span>info@pastprep.com</span>
                </a>
                <a href="tel:+923319765860" className="flex items-center gap-2 hover:text-gray-600 transition-colors">
                  <Phone className="h-5 w-5" />
                  <span>+92 331 9765860</span>
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h3 className="text-xl md:text-2xl font-semibold">Follow Us</h3>
              <div className="flex gap-4">
                <a 
                  href="#" 
                  className="p-2 border border-gray-600 rounded-full hover:bg-gray-100 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="p-2 border border-gray-600 rounded-full hover:bg-gray-100 transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
