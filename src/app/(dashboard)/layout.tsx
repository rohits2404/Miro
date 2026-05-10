import { Navbar } from "@/features/dashboard/components/navbar";
import { OrgSidebar } from "@/features/dashboard/components/org-sidebar";
import { Sidebar } from "@/features/dashboard/components/sidebar";

interface DashboardLayoutProps {
    children: React.ReactNode;
};

const DashboardLayout = ({
    children,
}: DashboardLayoutProps) => {
    return (
        <main className="h-full">
            <Sidebar />
            <div className="pl-15 h-full">
                <div className="flex gap-x-3 h-full">
                    <OrgSidebar />
                    <div className="h-full flex-1">
                        <Navbar />
                        {children}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default DashboardLayout;