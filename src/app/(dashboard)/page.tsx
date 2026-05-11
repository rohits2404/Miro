import { DashboardContent } from "@/features/dashboard/content";
import React from "react";

interface DashboardPageProps {
    searchParams: {
        search?: string;
        favorites?: string;
    };
}

const DashboardPage = ({ searchParams }: DashboardPageProps) => {
    return (
        <DashboardContent searchParams={searchParams} />
    );
};

export default DashboardPage;