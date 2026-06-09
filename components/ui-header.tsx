"use client";

import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { useEffect, useState } from "react";

export default function Header() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header
      className="fixed top-0 z-50 w-full bg-[rgba(246,247,249,0.82)] dark:bg-[rgba(17,19,24,0.85)] backdrop-blur-[8px] border-b border-line"
      style={{ height: "60px" }}
    >
      <div className="wrap flex h-full items-center justify-between">
        {/* Brand */}
        <Link
          href="/"
          className="font-mono text-[13.5px] tracking-tight text-ink hover:opacity-70 transition-opacity duration-150"
        >
          prajwal<span className="text-brand">.</span>joshi
        </Link>

        {/* Nav */}
        <nav className="flex items-center gap-1 sm:gap-0">
          {[
            { label: "work", href: "/#work" },
            { label: "about", href: "/#about" },
            { label: "contact", href: "/#contact" },
          ].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="font-mono text-[13px] text-slate hover:text-ink transition-colors duration-150 px-2 sm:px-3"
            >
              <span className="text-line mr-0.5">/</span>
              {item.label}
            </Link>
          ))}
          {mounted && (
            <span className="ml-1 sm:ml-2">
              <ThemeToggle />
            </span>
          )}
        </nav>
      </div>
    </header>
  );
}
