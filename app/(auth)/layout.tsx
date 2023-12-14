import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E-Sanjeevani | SingIn",
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
        <body
          className={`${inter.className} bg-[#f1f1f1] h-screen flex items-center justify-center`}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
