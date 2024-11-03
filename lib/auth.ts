import { prisma } from "@/pothos/db";
import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials!;
        // Find user by email
        const user = await prisma.user.findUnique({
          where: { email },
        });

        if (!user) {
          // User not found
          return null;
        }

        // Compare hashed password with user's passwordHash
        const isValidPassword = await bcrypt.compare(password, user.password!);

        if (!isValidPassword) {
          return null;
        }

        // User authenticated successfully, return user object
        return user;
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      if (account?.provider === "google") {
        const user = await prisma.user.findUnique({
          where: { email: profile?.email },
        });
        if (!user) {
          await prisma.user.create({
            data: {
              name: profile?.name!,
              email: profile?.email!,
            },
          });
        }
        return true; // Allow sign-in
      }
      return true; // For other providers, allow sign-in as well
    },
  },
};
