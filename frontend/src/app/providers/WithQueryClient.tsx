"use client";
import {QueryClientProvider} from "@tanstack/react-query";
import React from "react";
import {queryClient} from "@/shared/api/queryClient";

export const WithQueryClientProvider = ({children}: { children: React.ReactNode }) => {
    return(
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}