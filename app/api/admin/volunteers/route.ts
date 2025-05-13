import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  const Volunteers = await prisma.Volunteers.findMany({
    orderBy: { createdAt: 'desc' },
  });
  return NextResponse.json(Volunteers);
}