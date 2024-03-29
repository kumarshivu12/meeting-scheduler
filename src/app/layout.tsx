import type { Metadata } from "next";
import { Outfit } from "next/font/google";

//Components
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Meeting-Scheduler",
  description:
    "The Meeting Scheduler is a Next.js web app for easy meeting coordination, featuring user authentication, an interactive calendar, and customizable meeting options.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <Toaster />
        {children}
      </body>
    </html>
  );
}
