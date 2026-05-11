import { Room } from "@/components/Room";
import { Canvas } from "@/features/boards/canvas";
import React from "react";

interface BoardIdPageProps {
    params: {
        boardId: string;
    };
};

const BoardIdPage = ({
    params,
}: BoardIdPageProps) => {
    return (
        <Room>
            <Canvas boardId={params.boardId} />
        </Room>
    );
};

export default BoardIdPage;