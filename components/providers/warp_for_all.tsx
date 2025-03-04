"use client"

import { QueryClientProvider, QueryClient } from "@tanstack/react-query"
import { SessionProvider } from "next-auth/react";
import { EdgeStoreProvider } from '@/lib/edgestore';

const queryClient = new QueryClient()


export default function Providers({ children }: { children: React.ReactNode }) {

    return (
        <SessionProvider>
            <QueryClientProvider client={queryClient} >
                <EdgeStoreProvider>
                    <main className={`relative top-[54px]`} >
                        {children}
                    </main>
                </EdgeStoreProvider>
            </QueryClientProvider>
        </SessionProvider>

    );
} 