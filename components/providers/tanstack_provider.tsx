"use client"

import { QueryClientProvider, QueryClient } from "@tanstack/react-query"
import { useEffect, useState } from "react";

const queryClient = new QueryClient()


export default function TanstackProvider({ children }: { children: React.ReactNode }) {

    return (
        <QueryClientProvider client={queryClient} >
            <main className={`relative top-[8.5vh]`} >
                {children}
            </main>
        </QueryClientProvider>
    );
} 