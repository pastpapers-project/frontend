// LoginForm.jsx
// 'use client'

import React from 'react';
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { signIn } from "next-auth/react";
import PrivacyPolicyDialog from '@/mycomponents/privacyPolicy';
import TermsAndConditionsDialog from '@/mycomponents/termsConditions';
import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'  
import { useSession } from "next-auth/react";
import { useRouter } from 'next/navigation';
import LoginForm from '@/mycomponents/loginForm';


export default async function LoginPage() {
  const session = await getServerSession(authOptions)
  
  // Redirect to dashboard/home if already authenticated
  // if (session) {
  //   redirect('/')  // or wherever you want authenticated users to go
  // }

  return <LoginForm />
}




