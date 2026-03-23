"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <header className="w-full pb-10">
      <div className="hidden md:flex justify-between items-center pt-5 px-16 w-full mx-auto">
        {/* Logo */}
        <Link href="/" className="flex">
          <Image
            aria-hidden
            src="/logo.png"
            alt="SafeSignal Logo"
            width={235}
            height={64}
            className="w-8 h-8"
          />
        </Link>

        {/* nav links */}
        <nav className="hidden md:flex items-center text-white/70 text-[18px] md:space-x-5 lg:space-x-10 xl:space-x-15">
          <Link href="#about" className="hover:text-white transition">
            About
          </Link>
          <Link href="#features" className="hover:text-white transition">
            Features
          </Link>
          <Link href="#how-it-works" className="hover:text-white transition">
            How it Works
          </Link>
          <Link href="#feedback" className="hover:text-white transition">
            Stories
          </Link>
        </nav>

        {/* Right side: auth buttons */}
        <Link
          href="/register"
          className="px-6 py-2 bg-primary hover:bg-[#b7281b] hover:scale-105 transition duration-200 text-white rounded-xl font-semibold text-[18px]"
        >
          Get Started
        </Link>
      </div>

      {/* Mobile */}
      <div className="md:hidden fixed top-0 left-0 w-full z-50 bg-[#080A0D]">
        <div className="flex justify-between items-center px-6 py-4">
          <Image
            src="/logo.png"
            alt="SafeSignal Logo"
            width={117}
            height={32}
            className="w-8 h-8"
          />

          <button
            onClick={() => setSidebarOpen(true)}
            className="px-2 text-white text-2xl"
          >
            ☰
          </button>
        </div>

        {sidebarOpen && (
          <div
            className="md:hidden fixed inset-0 z-50"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        <aside
          className={`pb-8 md:hidden fixed top-0 w-full bg-[#080A0D] z-50 transform transition-transform duration-300 ease-in-out 
        ${sidebarOpen ? "translate-x-0" : "translate-x-full"}
        `}
        >
          <div className="flex justify-between items-center px-6 mt-5 w-full">
            <Image
              src="/logo.png"
              alt="SafeSignal Logo"
              width={117}
              height={32}
              className="w-8 h-8"
            />

            <button
              onClick={() => setSidebarOpen(false)}
              className="text-[#FF6161] text-2xl font-bold"
            >
              ✕
            </button>
          </div>

          <nav className="flex flex-col space-y-8 mt-8 text-center text-white/70 text-base">
            <Link href="#about" onClick={() => setSidebarOpen(false)}>
              About
            </Link>

            <Link href="#features" onClick={() => setSidebarOpen(false)}>
              Features
            </Link>

            <Link href="#how-it-works" onClick={() => setSidebarOpen(false)}>
              How it Works
            </Link>

            <Link href="#feedback" onClick={() => setSidebarOpen(false)}>
              Stories
            </Link>
          </nav>

          <div className="text-center mt-12">
            <Link
              href="/register"
              onClick={() => setSidebarOpen(false)}
              className="px-6 py-3 text-white bg-primary font-semibold text-base rounded-xl"
            >
              Get Started
            </Link>
          </div>
        </aside>
      </div>
    </header>
  );
}
