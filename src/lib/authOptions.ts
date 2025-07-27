import type { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcryptjs";
import { connectToSpandanDB } from "@/lib/connectToSpandanDB";
import { getUserModel } from "@/models/User";
import { JWT } from "next-auth/jwt";
import { Session, User as NextAuthUser, Account, Profile } from "next-auth";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),

    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) {
          throw new Error("Email and password required");
        }

        await connectToSpandanDB();
        const User = await getUserModel();
        const user = await User.findOne({ email: credentials.email });

        if (!user) throw new Error("User not found");

        const isValid = await compare(credentials.password, user.password);
        if (!isValid) throw new Error("Invalid credentials");

        return {
          id: user._id.toString(),
          name: user.username || user.name || '',
          email: user.email,
          image: user.image || null,
        };
      },
    }),
  ],

  callbacks: {
    async signIn({ user, account }: {
      user: NextAuthUser;
      account: Account | null;
      profile?: Profile;
    }) {
      if (account?.provider === 'google') {
        await connectToSpandanDB();
        const User = await getUserModel();

        const existingUser = await User.findOne({ email: user.email });

        if (!existingUser) {
          await User.create({
            name: user.name || '',
            username: user.name,
            email: user.email,
            image: user.image,
            password: '', // Optional: you can leave it blank or note it's a Google account
            provider: 'google'
          });
        }
      }

      return true;
    },

    async jwt({ token, user }: { token: JWT; user?: NextAuthUser }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },

    async session({ session, token }: { session: Session; token: JWT }) {
      if (token && session.user) {
        session.user.id = token.id as string;
      }
      return session;
    },
  },

  pages: {
    signIn: "/auth/login",
  },

  secret: process.env.NEXTAUTH_SECRET,
};
