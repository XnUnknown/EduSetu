// src/app/api/school/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const saved = await prisma.schoolRequest.create({
      data: {
        schoolName: body.schoolName,
        contactPerson: body.contactPerson,
        email: body.email,
        gradeNeeds: body.gradeNeeds,
        subjectsNeeded: body.subjectsNeeded,
        message: body.message,
      }
    });

    return NextResponse.json({ message: 'School request submitted successfully!', data: saved });
  } catch (err) {
    console.error('API ERROR:', err);
    return NextResponse.json({ error: 'Something went wrong.' }, { status: 500 });
  }
}