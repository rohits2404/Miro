"use client"

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useOrganization, useUser } from "@clerk/nextjs";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { api } from "../../../../convex/_generated/api";
import { toast } from "sonner";

export const EmptyBoards = () => {

    const { user } = useUser();

    const { organization } = useOrganization();

    const { mutate, pending } = useApiMutation(api.board.create);

    const onClick = () => {
        if (!organization) return;
        mutate({
            orgId: organization.id,
            title: "Untitled",
            authorName: user?.fullName || user?.emailAddresses[0]?.emailAddress || "Anonymous",
        })
        .then((id) => {
            toast.success("Board Created");
            // TODO: Redirect to board/{id}
        })
        .catch(() => toast.error("Failed To Create Board"));
    };

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
                <Button disabled={pending} onClick={onClick} size="lg">
                    Create Board
                </Button>
            </div>
        </div>
    );
};