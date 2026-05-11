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
        <Canvas boardId={params.boardId} />
    );
};

export default BoardIdPage;