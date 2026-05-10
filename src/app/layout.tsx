import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import ConvexClientProvider from "@/providers/convex-client-provider";

const inter = Inter({
    subsets:['latin'],
    variable:'--font-sans'
});

export const metadata: Metadata = {
    title: "Miro",
    description: "A Real-Time Collaborative Whiteboard App For Brainstorming, Diagramming, Drawing, and Team Collaboration.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <ClerkProvider>
                    <ConvexClientProvider>
                        {children}
                    </ConvexClientProvider>
                </ClerkProvider>
            </body>
        </html>
    );
}