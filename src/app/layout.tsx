import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import ConvexClientProvider from "@/providers/convex-client-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";
import { ModalProvider } from "@/providers/modal-provider";
import { Suspense } from "react";
import { Loading } from "@/components/auth/loading";

const inter = Inter({
    subsets:['latin'],
    variable:'--font-sans'
});

export const metadata: Metadata = {
    title: "Miro",
    description: "A Real-Time Collaborative Whiteboard App For Brainstorming, Diagramming, Drawing, and Team Collaboration.",
    icons: {
        icon: "/favicon.svg"
    }
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Suspense fallback={<Loading/>}>
                    <ClerkProvider>
                        <ConvexClientProvider>
                            <Toaster/>
                            <ModalProvider/>
                            <TooltipProvider>
                                {children}
                            </TooltipProvider>
                        </ConvexClientProvider>
                    </ClerkProvider>
                </Suspense>
            </body>
        </html>
    );
}