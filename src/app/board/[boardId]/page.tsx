import { Room } from "@/components/Room";
import { Canvas } from "@/features/boards/canvas";
import React from "react";

interface BoardIdPageProps {
    params: Promise<{
        boardId: string;
    }>;
}

const BoardIdPage = async ({ params }: BoardIdPageProps) => {
  
    const { boardId } = await params;

    return (
        <Room roomId={boardId}>
            <Canvas boardId={boardId} />
        </Room>
    );
};

export default BoardIdPage;