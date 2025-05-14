// /app/api/auth-admin/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const body = await request.json();
  const password = body.password;

  if (password === process.env.ADMIN_PASSWORD) {
    const response = NextResponse.json({ success: true });

    // Set cookie for 1 day
    response.cookies.set('admin-auth', password, {
      httpOnly: true,
      path: '/',
      maxAge: 60 * 60 * 24,
    });

    return response;
  }

  return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
}