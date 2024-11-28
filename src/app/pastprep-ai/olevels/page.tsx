import { olevels_subjects } from "@/app/appconfig/config";
import PastPrepAI from "@/mycomponents/pastprepai";


export default function OlevelsChatPage() {
  return (
    <PastPrepAI subjects={olevels_subjects} level='olevel'/>
  );
}
