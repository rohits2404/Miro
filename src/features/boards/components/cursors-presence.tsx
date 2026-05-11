"use client"

import { useOthersConnectionIds } from "@liveblocks/react";
import { Cursor } from "./cursor";
import { memo } from "react";

const Cursors = () => {
  
    const ids = useOthersConnectionIds();

    return (
        <>
            {ids.map((connectionId) => (
                <Cursor
                key={connectionId}
                connectionId={connectionId}
                />
            ))}
        </>
    );
};

export const CursorsPresence = memo(() => {
    return (
        <>
            {/* TODO: Draft pencil */}
            <Cursors />
        </>
    );
});

CursorsPresence.displayName = "CursorsPresence";