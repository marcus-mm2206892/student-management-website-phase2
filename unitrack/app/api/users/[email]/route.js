// export async function GET(req){
//     const { searchParams } = new URL(req.url);
//     // const type = searchParams.get('Type');
//     const response = { message: 'API endpoint http://localhost:3000 ' }
//     return Response.json(response, {status: 200});
// }

import { verifyJwt } from "@/lib/jwt";
import { PrismaClient } from "@prisma/client";

export async function GET(request, { params }) {
  const prisma = new PrismaClient();

  const accessToken = request.headers.get("authorization");
  if (!accessToken || !verifyJwt(accessToken)) {
    return new Response(
      JSON.stringify({
        error: "unauthorized",
      }),
      {
        status: 401,
      }
    );
  }
  const userPosts = await prisma.post.findMany({
    where: { authorId: +params.id },
    include: {
      author: {
        select: {
          email: true,
          name: true,
        },
      },
    },
  });

  return new Response(JSON.stringify(userPosts));
}
