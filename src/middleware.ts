// src/middleware.ts
import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"

// List all public routes
const publicRoutes = [
  '$', // root path
  'auth', // auth routes
  '_next', // next.js system routes
  'favicon.ico',
  'about',
  'contact',
]

const publicPattern = `((?!${publicRoutes.join('|')}).*)`
  
export default withAuth(
  function middleware(req) {
    // console.log("Middleware Session Token: ", req.cookies);
    return NextResponse.next()
  },
  {
    callbacks: {
      authorized: ({ token }) => {
        // console.log("Session Token Authorization: ", token);
        return !!token;
      },
    },
    pages: {
      signIn: "/auth/login",
    },
  }
)
// matcher: [`/${publicPattern}`]
export const config = {
  matcher: [
    "/dashboard/:path*",
    "/profile/:path*",
    "/settings/:path*",
    "/past-papers/:path*",
    "/pastprep-ai/:path*",
    "/solve/:path*",
  ]
}