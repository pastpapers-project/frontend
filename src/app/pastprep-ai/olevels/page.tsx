// src/app/pastprep-ai/olevels/page.tsx
import { Suspense } from 'react';
import { olevels_subjects } from "@/app/appconfig/config";
import PastPrepAI from "@/mycomponents/pastprepai";
import Loading from '@/mycomponents/Loading';

export default function OlevelsChatPage() {
  return (
    <Suspense fallback={<Loading />}>
      <PastPrepAIWrapper />
    </Suspense>
  );
}

function PastPrepAIWrapper() {
  return <PastPrepAI subjects={olevels_subjects} level='olevel' />;
}