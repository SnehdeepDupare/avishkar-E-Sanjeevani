"use client";

import Image from "next/image";
import Link from "next/link";
import { SignInButton, SignedOut, UserButton } from "@clerk/nextjs";

function Navbar() {
  return (
    <nav className="h-[100px] bg-blue-500 text-white px-5 ">
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        <Link href="/">
          <div className="flex items-center gap-2">
            <div className="relative h-24 w-24">
              <Image
                src="/assets/logo.png"
                alt="logo"
                fill
                priority
                className="object-contain"
              />
            </div>

            <h2 className="font-semibold text-2xl">E-Sanjeevani</h2>
          </div>
        </Link>

        <div className="flex items-center space-x-3">
          <UserButton afterSignOutUrl="/" />
          <SignedOut>
            <SignInButton>
              <p className="bg-white text-blue-500 px-4 py-2 rounded-lg cursor-pointer">
                Doctor Login
              </p>
            </SignInButton>
          </SignedOut>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
