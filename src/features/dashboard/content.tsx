"use client"

import { RedirectToSignIn } from "@clerk/nextjs";
import { Authenticated, Unauthenticated } from "convex/react";

export const DashboardContent = () => {
    return ( 
        <>
            <Authenticated>
                Dashboard Root page
            </Authenticated>
            <Unauthenticated>
                <RedirectToSignIn/>
            </Unauthenticated>
        </>
    );
};