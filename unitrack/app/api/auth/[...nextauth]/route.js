import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from "@prisma/client";
import { compare } from "bcryptjs";
import client from "@/app/generated/prisma/client";

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
        console.log("Received credentials:", credentials);
        if (!credentials?.email || !credentials?.password) 
          {console.log("Missing email or password");
            return null;
          }

        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });

         if (!user) {
            console.log("User not found for email:", credentials.email);
            return null;
          }

        if (!user.password) {
          console.log("User exists but has no password in DB");
          return null;
        }

        const isValid = await credentials.password === user.password
        if (!isValid) {
          console.log("Password does not match for", credentials.email);
          return null;
        }

        console.log("Login successful:", user.email);
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