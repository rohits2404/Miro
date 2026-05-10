"use client"

import { RedirectToSignIn, UserButton } from '@clerk/nextjs'
import { Authenticated, Unauthenticated } from 'convex/react';
import React from 'react'

function Content() {
    return (
        <div className="flex flex-col gap-y-4">
            <div>
                This is a screen for authenticated users only
            </div>
            <div>
                <UserButton />
            </div>
        </div>
    )
}

const Home = () => {
    return (
        <>
            <Authenticated>
                <Content />
            </Authenticated>
            <Unauthenticated>
                <RedirectToSignIn/>
            </Unauthenticated>
        </>
    )
}

export default Home