import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const robotoMono = Roboto_Mono({
    subsets: ["latin"],
    display: "swap",
    weight: ["400", "700"],
});

export const metadata: Metadata = {
    title: "Beth Gavião - Fotografia",
    description: "Portfolio fotografico de Beth Gavião",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt">
            <body
                className={`${robotoMono.className} ${robotoMono.className} antialiased`}
            >
                <Header />
                <main className="container mx-auto px-4 min-h-screen">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
