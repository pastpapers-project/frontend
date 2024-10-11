import { Separator } from "@/components/ui/separator";
import icon from "@/app/public/PastPrep.png";
import Image from "next/image";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";

export const Footer = () => {
  return (
    <div className="">
      <Separator className="bg-gray-600" />
      <div className="flex p-4 w-full">
        <div className="flex flex-col w-1/2">
          <div>
            <div className="flex items-center">
              <Image className="scale-75" draggable={false} src={icon} alt="" />
              <div className="text-4xl">Pastprep</div>
            </div>
            <div className="pl-4 text-gray-500">
              Say goodbye to exam stress!
            </div>
          </div>
          <div className="mt-64">@ Pastprep 2024. All rights reserved.</div>
        </div>
        <div className="flex w-1/2">
          <div className="w-1/2">
            <p className="text-4xl">Contact</p>
            <div>
              <div>
                <EmailIcon />
                info@pastprep.com
              </div>
              <div>
                <CallIcon /> +92 *** *******
              </div>
              <div>
                <LocationOnIcon /> abcd
              </div>
            </div>
          </div>
          <div className="flex flex-col">
          <p className="text-4xl">Follow Us</p>
            <div className="flex justify-between mt-2">
              <LinkedInIcon className="rounded-full border border-gray-600" />
              <YouTubeIcon className="rounded-full border border-gray-600" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
