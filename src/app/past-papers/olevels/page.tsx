'use client'

import { olevels_subjects } from "@/app/appconfig/config";
import PastPapersPage from "@/mycomponents/pastpaper";

export default function OLevels() {
  return (
    <PastPapersPage subjects={olevels_subjects} level='olevel'/>
  );
}
