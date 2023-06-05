import clientPromise from "@/lib/mongodb";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import NextAuth, { getServerSession } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { useSession } from "next-auth/react";

const admin = ["0xvinay@gmail.com"];
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  adapter: MongoDBAdapter(clientPromise),
  callbacks: {
    session: ({ session, user }: any) => {
      if (admin.includes(user.email)) {
        return session;
      } else {
        return false;
      }
    },
  },
};
export default NextAuth(authOptions);

export const ValidOwner = async (req: any, res: any) => {
  const session = await getServerSession(req, res, authOptions);
  if (!admin.includes(session?.user?.email)) {
    res.status(401);
    res.end();
    throw "NOT THE ADMIN";
  }
};
