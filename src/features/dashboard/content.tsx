"use client"

import { RedirectToSignIn, useOrganization } from "@clerk/nextjs";
import { Authenticated, Unauthenticated } from "convex/react";
import { EmptyOrg } from "./components/empty-org";
import { BoardList } from "./components/board-list";

interface DashboardPageProps {
    searchParams: {
        search?: string;
        favorites?: string;
    };
};

function Content({ searchParams }: DashboardPageProps) {
    const { organization } = useOrganization();
    return (
        <div className="flex-1 h-[calc(100%-80px)] p-6">
            {!organization ? (
                <EmptyOrg />
            ) : (
                <BoardList
                orgId={organization.id}
                query={searchParams}
                />
            )}
        </div>
    )
}

export const DashboardContent = ({ searchParams }: DashboardPageProps) => {
    return ( 
        <>
            <Authenticated>
                <Content searchParams={searchParams} />
            </Authenticated>
            <Unauthenticated>
                <RedirectToSignIn/>
            </Unauthenticated>
        </>
    );
};