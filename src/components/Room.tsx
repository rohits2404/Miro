"use client";

import { ReactNode } from "react";
import {
  LiveblocksProvider,
  RoomProvider,
  ClientSideSuspense,
} from "@liveblocks/react/suspense";
import { Loading } from "@/features/boards/components/loading";

export function Room({ children, roomId }: { children: ReactNode, roomId: string }) {
    return (
        <LiveblocksProvider authEndpoint={"/api/liveblocks-auth"}>
            <RoomProvider id={roomId} initialPresence={{ cursor: null }}>
                <ClientSideSuspense fallback={<Loading />}>
                    {children}
                </ClientSideSuspense>
            </RoomProvider>
        </LiveblocksProvider>
    );
}