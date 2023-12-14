import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Image from "next/image";

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
          <main className="flex flex-col items-center ">
            <div className="flex items-center gap-4 ">
              <div className="relative h-28 w-28">
                <Image
                  src="/assets/logo.png"
                  alt="logo"
                  fill
                  priority
                  className="object-contain"
                />
              </div>
              <h2 className="font-bold text-2xl">E-Sanjeevani</h2>
            </div>
            {children}
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
