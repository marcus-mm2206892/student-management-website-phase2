import unitrackRepo from "@/repos/unitrack-repo";

// export async function GET(req, {params}){
//     const { searchParams } = new URL(req.url);
//     // const type = searchParams.get('Type');
//     const response = await unitrackRepo.checkCourseId("CMPS151");
//     return Response.json(response, {status: 200});
// }

// app/api/debug/route.ts
import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import { hash } from 'bcryptjs'

const prisma = new PrismaClient()

export async function GET() {
  try {
    // 1. First just READ data (safe operation)
    const users = await prisma.user.findMany({
      select: {
        email: true,
        password: true
      },
      take: 100 // Limit to 5 users for testing
    })

    // 2. Filter users with plaintext passwords (fixed arrow function)
    const needsHashing = users.filter(user => {
      return user.password && !user.password.startsWith('$2a$')
    })

    if (needsHashing.length === 0) {
      return NextResponse.json({
        message: 'All passwords are already hashed',
        users
      })
    }

    // 3. If we found plaintext passwords, show them
    return NextResponse.json({
      warning: 'Found plaintext passwords - review before updating',
      usersWithPlaintext: needsHashing,
      exampleHash: await hash('test123', 10) // Show example hash
    })

  } catch (error) {
    return NextResponse.json(
      { error: 'Database error', details: error.message },
      { status: 500 }
    )
  } finally {
    await prisma.$disconnect()
  }
}