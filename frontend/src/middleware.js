// import NextAuth from 'next-auth';
// import { authConfig } from './auth.config';
import { NextResponse, NextRequest } from 'next/server'

export function middleware(request) {
    return NextResponse.redirect(new URL('/home', request.url))
}

export const config = {
    matcher: '/about/:path*',
}