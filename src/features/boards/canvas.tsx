"use client";

import { Info } from "./components/info";
import { Toolbar } from "./components/toolbar";
import { Participants } from "./components/participants";
import { Authenticated, Unauthenticated } from "convex/react";
import { RedirectToSignIn } from "@clerk/nextjs";
import { useState } from "react";
import { CanvasMode, type CanvasState } from "./types/canvas";
import { useCanRedo, useCanUndo, useHistory } from "@liveblocks/react";

interface CanvasProps {
    boardId: string;
};

export const Canvas = ({
    boardId,
}: CanvasProps) => {

    const [canvasState, setCanvasState] = useState<CanvasState>({
        mode: CanvasMode.None,
    });

    const history = useHistory();
    const canUndo = useCanUndo();
    const canRedo = useCanRedo();

    return (
        <>
            <Authenticated>
                <main className="h-full w-full relative bg-neutral-100 touch-none">
                    <Info boardId={boardId} />
                    <Participants />
                    <Toolbar
                    canvasState={canvasState}
                    setCanvasState={setCanvasState}
                    canRedo={canRedo}
                    canUndo={canUndo}
                    undo={history.undo}
                    redo={history.redo}
                    />
                </main>
            </Authenticated>
            <Unauthenticated>
                <RedirectToSignIn/>
            </Unauthenticated>
        </>
    );
};