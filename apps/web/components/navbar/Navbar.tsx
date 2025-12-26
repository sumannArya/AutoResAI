"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full border-b">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
        <div className="text-xl font-bold">AutoResume</div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="#">Products</Link>
          <Link href="#">Solutions</Link>
          <Link href="#">Pricing</Link>
          <Link href="#">Resources</Link>
        </nav>

        <div className="flex items-center gap-4">
          <button className="rounded-md border px-4 py-2 text-sm">
            Sign Up
          </button>
          <button className="rounded-md bg-black px-4 py-2 text-sm text-white">
            Request a Demo
          </button>
        </div>
      </div>
    </header>
  );
}
