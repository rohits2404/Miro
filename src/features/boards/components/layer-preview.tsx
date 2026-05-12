"use client";

import { useStorage } from "@liveblocks/react";
import { memo } from "react";
import { LayerType } from "../types/canvas";
import { Rectangle } from "./rectangle";
import { Note } from "./note";
import { Text } from "./text";
import { Ellipse } from "./ellipse";

interface LayerPreviewProps {
    id: string;
    onLayerPointerDown: (e: React.PointerEvent, layerId: string) => void;
    selectionColor?: string;
};

export const LayerPreview = memo(({
    id,
    onLayerPointerDown,
    selectionColor,
}: LayerPreviewProps) => {
  
    const layer = useStorage((root) => root.layers[id]);

    if (!layer) {
        return null;
    }

    switch (layer.type) {
        case LayerType.Note:
            return (
                <Note
                id={id}
                layer={layer}
                onPointerDown={onLayerPointerDown}
                selectionColor={selectionColor}
                />
            );
        case LayerType.Text:
            return (
                <Text
                id={id}
                layer={layer}
                onPointerDown={onLayerPointerDown}
                selectionColor={selectionColor}
                />
            );
        case LayerType.Ellipse:
            return (
                <Ellipse
                id={id}
                layer={layer}
                onPointerDown={onLayerPointerDown}
                selectionColor={selectionColor}
                />
            );
        case LayerType.Rectangle:
            return (
                <Rectangle
                id={id}
                layer={layer}
                onPointerDown={onLayerPointerDown}
                selectionColor={selectionColor}
                />
            );
        default:
            console.warn("Unknown Layer Type");
            return null;
    }
});

LayerPreview.displayName = "LayerPreview";