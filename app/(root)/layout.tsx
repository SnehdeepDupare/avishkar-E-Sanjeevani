import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E-Sanjeevani",
  description: "Your Online Doctor",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        elements: {
          footer: "hidden",
        },
      }}
    >
      <html lang="en">
        <body className={inter.className}>
          <Navbar />

          <main>{children}</main>
          <Toaster />
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
