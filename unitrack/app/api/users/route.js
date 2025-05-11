import { PrismaClient } from "@prisma/client"
import bcrypt from "bcrypt"
import { verifyJwt } from "../../lib/jwt"


export async function POST(request) {
  const prisma = new PrismaClient()

  const body = await request.json()
  const saltRounds = 10 // makes encryption more secure
  const user = await prisma.user.create({
    data: {
      name: body.name,
      email: body.email,
      password: await bcrypt.hash(body.password, saltRounds),
    },
  })

  const { password, ...userWithoutPassword } = user
  return new Response(JSON.stringify(userWithoutPassword))
}

export async function GET(request) {
  const prisma = new PrismaClient()

  const idToken = request.headers.get("authorization")

  if (!idToken) {
   return Response.json(
    { error: "🚫 Unauthorized - id token is missing" },
    { status: 401 })
   }
  const user = verifyJwt(idToken)
  if (!user) {
    return Response.json(
        { error: "🚫 Unauthorized - id token is invalid." },
        { status: 401 })
    }
  if (!user.role || user.role.toLowerCase() !== "admin") {
   return Response.json(
        { error: `⛔ Forbidden - Role should be Admin. Désolé ${user.name}!` },
        { status: 403 })
   }
 const users = await prisma.user.findMany()
 return Response.json(users)
 }
  