// src/types/next-auth.d.ts
import NextAuth, { DefaultSession, DefaultUser } from "next-auth"
import { JWT } from "next-auth/jwt"

declare module "next-auth" {
  interface Session {
    user: {
      id?: string
      name?: string | null
      email?: string | null
      image?: string | null
    } & DefaultSession["user"]
  }

  interface JWT {
    picture?: string
  }
}