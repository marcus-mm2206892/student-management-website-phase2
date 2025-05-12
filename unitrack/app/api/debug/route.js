// this file is just for debugging purposes
import unitrackRepo from "@/repos/unitrack-repo";

// export async function GET(req, {params}){
//     const { searchParams } = new URL(req.url);
//     // const type = searchParams.get('Type');
//     const response = await unitrackRepo.checkCourseId("CMPS151");
//     return Response.json(response, {status: 200});
// }

import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import { hash } from 'bcryptjs'

const prisma = new PrismaClient()

export async function GET() {
  try {
      const users = await prisma.user.findMany({
      select: {
        email: true,
        password: true
      },
      take: 100
    })
    const needsHashing = users.filter(user => {
      return user.password && !user.password.startsWith('$2a$')
    })

    if (needsHashing.length === 0) {
      return NextResponse.json({
        message: 'All passwords are already hashed',
        users
      })
    }

    return NextResponse.json({
      warning: 'Found plaintext passwords - review before updating',
      usersWithPlaintext: needsHashing,
      exampleHash: await hash('test123', 10)
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