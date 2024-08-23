// authOptions.ts
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import connectMongoDB from "@/libs/mongodb";
import Usermodels from "@/models/users";
import bcrypt from 'bcrypt';

interface LoginTypes {
    number_id: string;
    password: string;
}

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
                number_id: { label: "Number ID", type: "text" },
                password: { label: "Password", type: "password" },
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

                    const passwordsMatch = await bcrypt.compare(password, user.password);

                    if (!passwordsMatch) {
                        return null;
                    }

                    return user;
                } catch (error) {
                    console.error("Error:", error);
                    return null;
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
