// src/app/api/auth/[...nextauth]/route.ts
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { NextAuthOptions } from "next-auth"
import { JWT } from "next-auth/jwt"
import { Account, Profile } from "next-auth"

interface GoogleProfile extends Profile {
  picture?: string
  email_verified?: boolean
  locale?: string
  hd?: string
  sub?: string
  iat?: number
  exp?: number
}

interface GoogleAccount extends Account {
  provider: "google"
  type: "oauth"
  providerAccountId: string
  access_token: string
  expires_at: number
  refresh_token?: string
  id_token: string
  scope: string
  token_type: string
  session_state?: string
}

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async jwt({ token, account, profile }) {
      if (account && profile) {
        const googleAccount = account as GoogleAccount;
        const googleProfile = profile as GoogleProfile;
        
        if (googleProfile.picture) {
          token.picture = googleProfile.picture;
          console.log(googleProfile.picture);
        }
        else{
          console.log('picture load nae hwi');
        }
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user && token.picture) {
        session.user.image = token.picture;
      }
      return session;
    },
  },
  pages: {
    signIn: '/auth/login',
  }
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }