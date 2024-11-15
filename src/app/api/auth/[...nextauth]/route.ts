// src/app/api/auth/[...nextauth]/route.ts
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { NextAuthOptions } from "next-auth"
import { JWT } from "next-auth/jwt"
import { Account, Profile } from "next-auth"
import { authOptions } from '@/utils/NextAuthOptions';


const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }