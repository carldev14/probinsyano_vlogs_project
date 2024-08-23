import type { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import connectMongoDB from "@/libs/mongodb";
import Usermodels from "@/models/users";
import bcrypt from 'bcrypt'

interface LoginTypes {
    number_id: string,
    password: string,
}

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
                number_id: { label: "Number ID", type: "text" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials: LoginTypes | undefined) {
                if (!credentials) return null;

                const { number_id, password } = credentials;

                try {
                    await connectMongoDB();
                    const user = await Usermodels.findOne({ number_id });

                    if (!user) {
                        return null;
                    }

                    //Check if the password input and the password crypted in the database are same
                    const passwordsMatch = await bcrypt.compare(password, user.password);

                    //Condition where a password and the crypted password are not the same return to null
                    if (!passwordsMatch) {
                        return null;
                    }

                    //return user when the procedure are success.
                    return user;
                } catch (error) {
                    console.log("Error", error)
                }
            },
        }),
    ],
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET!,
    pages: {
        signIn: "/admin",
    },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };