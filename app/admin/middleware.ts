// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const isAdminPath = url.pathname.startsWith('/admin');

  if (isAdminPath) {
    const password = request.cookies.get('admin-auth')?.value;
    if (password !== process.env.ADMIN_PASSWORD) {
      url.pathname = '/admin-login';
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};