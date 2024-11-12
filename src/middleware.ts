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
  // add other public routes here
]

const publicPattern = `((?!${publicRoutes.join('|')}).*)`

export default withAuth(
  function middleware(req) {
    return NextResponse.next()
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token
    },
    pages: {
      signIn: "/auth/login",
    },
  }
)
// matcher: [`/${publicPattern}`]
export const config = {
  matcher: [
                     // Home page
    "/dashboard/:path*",  // Dashboard and all its sub-routes
    "/profile/:path*",    // Profile and all its sub-routes
    "/settings/:path*",   // Settings and all its sub-routes
    "/past-papers/:path*",
    "/pastprep-ai/:path*",
    "/solve/:path*",
  ]
}