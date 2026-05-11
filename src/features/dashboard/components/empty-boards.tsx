import Image from "next/image";
import { Button } from "@/components/ui/button";

export const EmptyBoards = () => {
    return (
        <div className="h-full flex flex-col items-center justify-center">
            <Image
            src="/images/note.svg"
            height={110}
            width={110}
            alt="Empty"
            />
            <h2 className="text-2xl font-semibold mt-6">
                Create Your First Board!
            </h2>
            <p className="text-muted-foreground textg-sm mt-2">
                Start By Creating A Board For Your Organization
            </p>
            <div className="mt-6">
                <Button size="lg">
                    Create Board
                </Button>
            </div>
        </div>
    );
};