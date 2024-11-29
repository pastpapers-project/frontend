import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { NextAuthOptions } from "next-auth"
import { JWT } from "next-auth/jwt"
import { Account, Profile } from "next-auth"
import axios from "axios"
import { loginUser } from "./userService"
import { toast } from "@/hooks/use-toast"
 
declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
    }
  }

  interface User {
    id: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    sub: string;
  }
}



export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: 'E7IwWSfspo9oG14C910zhw2r2tHIxngr3drSxIIQBKA=',
  callbacks: {
    session: async ({ session, token }) => {
      console.log("Session User ID:", token.sub);
 

      return {
        ...session,
        user: {
          ...session.user,
          id: token.sub,
        },
      };
    },
    async jwt({ token, account, profile }) {
      if (account && profile) {
        
        console.log("token details:", token);

        const userId = String(token.sub);
        const displayName = String(profile?.name || 'Unknown User');
        const email = String(profile?.email || 'unknown@example.com');
        const customerType = 'free';


        console.log(
          `userId: ${userId} (type: ${typeof userId}), ` +
          `displayName: ${displayName} (type: ${typeof displayName}), ` +
          `email: ${email} (type: ${typeof email}), ` +
          `customerType: ${customerType} (type: ${typeof customerType})`
        );
        
        try {
          await loginUser(
            userId,
            displayName,
            email,
            customerType
          );
        } catch (error) {
          console.error("Error logging in user:", error);
        }
      }
      return token;
    },
  },
  pages: {
    signIn: '/auth/login',
  },
  jwt: {
    maxAge: 86400,  
  },
}