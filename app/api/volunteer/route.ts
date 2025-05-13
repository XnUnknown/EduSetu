import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/app/lib/prisma';  // import prisma client (Make sure you set this up)

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const body = await request.json();

    // Save to the database using Prisma
    const savedVolunteer = await prisma.volunteer.create({
      data: {
        name: body.name,  // Assuming your data has a name field
        email: body.email,  // Assuming your data has an email field
        subjectExpertise: body.subjectExpertise,  // Assuming your data has a subject field
        contact: body.contact,
        availability: body.availability,  // Assuming your data has a contact field
      },
    });

    console.log('Volunteer saved:', savedVolunteer); // For debugging, see the saved data

    // Return a success response
    return NextResponse.json({ message: 'Volunteer registered successfully!' }, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Something went wrong.' }, { status: 500 });
  }
}