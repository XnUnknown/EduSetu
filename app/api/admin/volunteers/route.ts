import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET() {
  try {
    const volunteers = await prisma.volunteer.findMany()  // ✅ Capital "V"
    return Response.json(volunteers)
  } catch (error) {
    console.error(error)
    return new Response('Failed to fetch volunteers', { status: 500 })
  }
}