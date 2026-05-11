"use client";

import { Info } from "./components/info";
import { Toolbar } from "./components/toolbar";
import { Participants } from "./components/participants";
import { Authenticated, Unauthenticated } from "convex/react";
import { RedirectToSignIn } from "@clerk/nextjs";
import { useCallback, useState } from "react";
import { Camera, CanvasMode, type CanvasState } from "./types/canvas";
import { useCanRedo, useCanUndo, useHistory, useMutation } from "@liveblocks/react";
import { pointerEventToCanvasPoint } from "@/lib/utils";
import { CursorsPresence } from "./components/cursors-presence";

interface CanvasProps {
    boardId: string;
};

export const Canvas = ({
    boardId,
}: CanvasProps) => {

    const [canvasState, setCanvasState] = useState<CanvasState>({
        mode: CanvasMode.None,
    });

    const [camera, setCamera] = useState<Camera>({ x: 0, y: 0 });

    const history = useHistory();
    const canUndo = useCanUndo();
    const canRedo = useCanRedo();

    const onWheel = useCallback((e: React.WheelEvent) => {
        setCamera((camera) => ({
            x: camera.x - e.deltaX,
            y: camera.y - e.deltaY,
        }));
    }, []);

    const onPointerMove = useMutation((
        { setMyPresence }, 
        e: React.PointerEvent
    ) => {
        e.preventDefault();

        const current = pointerEventToCanvasPoint(e, camera);

        setMyPresence({ cursor: current });
    }, []);

    const onPointerLeave = useMutation(({ setMyPresence }) => {
        setMyPresence({ cursor: null });
    }, []);

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
                    <svg
                    className="h-screen w-screen"
                    onWheel={onWheel}
                    onPointerMove={onPointerMove}
                    onPointerLeave={onPointerLeave}
                    >
                        <g>
                            <CursorsPresence />
                        </g>
                    </svg>
                </main>
            </Authenticated>
            <Unauthenticated>
                <RedirectToSignIn/>
            </Unauthenticated>
        </>
    );
};