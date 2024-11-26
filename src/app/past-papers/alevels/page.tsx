'use client'

import { alevels_subjects } from "@/app/appconfig/config";
import PastPapersPage from "@/mycomponents/pastpaper";

export default function ALevels() {
  return (
    <PastPapersPage subjects={alevels_subjects} level='alevel'/>
  );
}
