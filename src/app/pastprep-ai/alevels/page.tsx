import { alevels_subjects } from "@/app/appconfig/config";
import PastPrepAI from "@/mycomponents/pastprepai";


export default function AlevelsChatPage() {
  return (
    <PastPrepAI subjects={alevels_subjects} level='alevel'/>
  );
}
