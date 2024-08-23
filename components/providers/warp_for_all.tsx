"use client"

import { QueryClientProvider, QueryClient } from "@tanstack/react-query"
import { SessionProvider } from "next-auth/react";
import { useEffect, useState } from "react";

const queryClient = new QueryClient()


export default function Providers({ children }: { children: React.ReactNode }) {

    return (
        <SessionProvider>
            <QueryClientProvider client={queryClient} >
                <main className={`relative top-[54px]`} >
                    {children}
                </main>
            </QueryClientProvider>
        </SessionProvider>

    );
} 