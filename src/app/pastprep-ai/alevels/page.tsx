// src/app/pastprep-ai/olevels/page.tsx
import { Suspense } from 'react';
import { alevels_subjects  } from "@/app/appconfig/config";
import PastPrepAI from "@/mycomponents/pastprepai";
import Loading from '@/mycomponents/Loading';

export default function AlevelsChatPage() {
  return (
    <Suspense fallback={<Loading />}>
      <PastPrepAIWrapper />
    </Suspense>
  );
}

function PastPrepAIWrapper() {
  return <PastPrepAI subjects={alevels_subjects} level='alevel' />;
}