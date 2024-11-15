'use client';

import React, { useEffect } from 'react';
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { signIn } from "next-auth/react";
import PrivacyPolicyDialog from '@/mycomponents/privacyPolicy';
import TermsAndConditionsDialog from '@/mycomponents/termsConditions';
import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth/next'
import { useSession } from "next-auth/react";
import { useRouter } from 'next/navigation';
import { UserData } from '../types/user';
import { createUser, getUser } from '@/utils/userService';


const LoginForm = () => {

    const handleGoogleSignIn = async (e: React.FormEvent) => {
      e.preventDefault();
      try {
        await signIn("google", { callbackUrl: "/" });
      } catch (error) {
        console.error("Login error:", error);
      }
    };
    
  
    return (
      <div className="flex items-center justify-center min-h-screen h-screen bg-cover bg-[url('/img1.jpg')]">
        <div className="backdrop-blur-3xl h-screen w-screen flex flex-col justify-center items-center">
          <Card className="w-full max-w-sm bg-white  rounded-xl shadow-[0_0_25px_rgba(0,0,0,0.5)] border-[0.5px] border-white border-opacity-10">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl font-bold text-center">Welcome back</CardTitle>
              <CardDescription className="text-center">
                Sign in to your account
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <Button 
                  variant="outline" 
                  onClick={handleGoogleSignIn}
                  className="w-full"
                >
                  <svg
                    className="mr-2 h-4 w-4"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="google"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 488 512"
                  >
                    <path
                      fill="currentColor"
                      d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                    />
                  </svg>
                  Sign in with Google
                </Button>
              </div>
  
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <Separator className="w-full" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">
                    Secure login
                  </span>
                </div>
              </div>
  
              <p className="text-center text-sm text-muted-foreground">
                By clicking continue, you agree to our{" "}
                <TermsAndConditionsDialog>
                  <button className="underline underline-offset-4 hover:text-primary cursor-pointer">
                    Terms and Conditions
                  </button>
                </TermsAndConditionsDialog>{" "}
                and{" "}
                <PrivacyPolicyDialog>
                  <span className="underline underline-offset-4 hover:text-primary cursor-pointer">
                    Privacy Policy
                  </span>
                </PrivacyPolicyDialog>
                .
              </p>
  
            </CardContent>
          </Card>
        </div>
      </div>
    );
  };
  
  export default LoginForm;