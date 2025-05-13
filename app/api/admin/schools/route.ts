import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  const schools = await prisma.schoolRequest.findMany({
    orderBy: { createdAt: 'desc' },
  });
  return NextResponse.json(schools);
}