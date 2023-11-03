import { NextResponse } from 'next/server'
 

export function middleware(request) {
  const path = request.nextUrl.pathname
   const isPublic = path === '/login' || path === '/signup'

   const token = request.cookies.get('token')?.value || ''

   if(token && isPublic){
    return NextResponse.redirect(new URL('/profile', request.nextUrl))
   }

   if(!isPublic && !token){
    return NextResponse.redirect(new URL('/login', request.nextUrl))
   
    
  }
}
 
export const config = {
  matcher: [
    '/',
    '/login',
    '/profile',
    '/signup',
    '/homepage'
  ]
}