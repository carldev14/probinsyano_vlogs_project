"use client"

import {QueryClientProvider, QueryClient} from "@tanstack/react-query"
import { Children } from "react";
const queryClient = new QueryClient()


export default function TanstackProvider({children} : {children: React.ReactNode}){
    return(
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
} 