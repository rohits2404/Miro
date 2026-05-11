"use client";

import { Info } from "./components/info";
import { Toolbar } from "./components/toolbar";
import { Participants } from "./components/participants";
import { Authenticated, Unauthenticated } from "convex/react";
import { RedirectToSignIn } from "@clerk/nextjs";

interface CanvasProps {
    boardId: string;
};

export const Canvas = ({
    boardId,
}: CanvasProps) => {

    return (
        <>
            <Authenticated>
                <main className="h-full w-full relative bg-neutral-100 touch-none">
                    <Info boardId={boardId} />
                    <Participants />
                    <Toolbar />
                </main>
            </Authenticated>
            <Unauthenticated>
                <RedirectToSignIn/>
            </Unauthenticated>
        </>
    );
};