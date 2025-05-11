import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from "@prisma/client";
import { compare } from "bcryptjs";

const prisma = new PrismaClient();

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });

        if (!user?.password) return null;

        const isValid = await compare(credentials.password, user.password);
        if (!isValid) return null;

        return {
          id: user.id,
          email: user.email,
          name: `${user.firstName} ${user.lastName}`,
          role: user.role,
        };
      },
    }),
  ],
 callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role; 
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.role = token.role; 
      session.user.id = token.id;
      return session;
    }
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };



// const handler = NextAuth({
//   providers: [
//     GithubProvider({
//       clientId: process.env.GITHUB_ID,
//       clientSecret: process.env.GITHUB_SECRET,
//     }),
//     GoogleProvider({
//       clientId: process.env.GOOGLE_ID,
//       clientSecret: process.env.GOOGLE_SECRET,
//     }),
//     CredentialsProvider({
//       name: "Credentials",
//       credentials: {
//         email: {
//           label: "Email",
//           type: "text",
//           defaultValue: "jane.doe@jwt.com",
//         },
//         password: {
//           label: "Password",
//           type: "password",
//           defaultValue: "pass123",
//         },
//       },

//       async authorize(credentials, req) {
//         const res = await fetch("/api/users/login", {
//           method: "POST",
//           body: JSON.stringify(credentials),
//           headers: { "Content-Type": "application/json" },
//         })

//         const user = await res.json()

//         // If no error then return the user data otherwise return nulll
//         if (res.ok && user) {
//           return user
//         }
//         return null
//       },
//     }),
//   ],
 
//   callbacks: {
//     async jwt({ token, user }) {
      
//       return { ...token, ...user }
//     },

//     async session({ session, token }) {
//       session.user = token
//       return session
//     },
//   },
// })

//export { handler as GET, handler as POST }