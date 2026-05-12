"use client";

import { ReactNode } from "react";
import {
  LiveblocksProvider,
  RoomProvider,
  ClientSideSuspense,
} from "@liveblocks/react/suspense";
import { Loading } from "@/features/boards/components/loading";
import { LiveList, LiveMap, LiveObject } from "@liveblocks/client";
import { Layer } from "@/features/boards/types/canvas";

export function Room({ children, roomId }: { children: ReactNode, roomId: string }) {
    return (
        <LiveblocksProvider authEndpoint={"/api/liveblocks-auth"} throttle={16}>
            <RoomProvider 
            id={roomId} 
            initialPresence={{
                cursor: null,
                selection: [],
                pencilDraft: null,
                penColor: null,
            }}
            initialStorage={{
                layers: new LiveMap<string, LiveObject<Layer>>(),
                layerIds: new LiveList([]),
            }}      
            >
                <ClientSideSuspense fallback={<Loading />}>
                    {children}
                </ClientSideSuspense>
            </RoomProvider>
        </LiveblocksProvider>
    );
}