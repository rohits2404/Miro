import { DashboardContent } from "@/features/dashboard/content";
import React from "react";

interface DashboardPageProps {
    searchParams: Promise<{
        search?: string;
        favorites?: string;
    }>;
}

const DashboardPage = async ({ searchParams }: DashboardPageProps) => {
    const params = await searchParams;
    return (
        <DashboardContent searchParams={params} />
    );
};

export default DashboardPage;