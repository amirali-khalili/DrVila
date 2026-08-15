"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NAV_LINKS = [
  { href: "/", label: "خانه" },
  { href: "/villas", label: "خرید ویلا" },
  { href: "/earths", label: "خرید زمین" },
  { href: "/gardens", label: "خرید باغ" },
  { href: "/aboutUs", label: "درباره ما" },
  { href: "/contactUs", label: "تماس با ما" },
];

export default function Navbar() {
  const pathname = usePathname();

  const isActiveLink = (href) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="absolute inset-x-0 top-0 z-30 mt-10">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold tracking-wide text-white">
            دکتر{" "}
            <span className="text-[var(--gold-light)]">
              ویلا
            </span>
          </span>
        </div>

        <nav className="hidden items-center gap-8 text-sm font-medium text-white/90 lg:flex">
          {NAV_LINKS.map((link) => {
            const isActive = isActiveLink(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`border-b-2 pb-1 transition ${
                  isActive
                    ? "border-[var(--gold)] text-white"
                    : "border-transparent hover:text-[var(--gold-light)]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="tel:09991887858"
            dir="ltr"
            className="gold-grad hidden cursor-pointer items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-[#241c0c] shadow-lg transition hover:brightness-110 sm:flex"
          >
            <span>0999 188 7858</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z"
              />
            </svg>
          </a>

          <button
            type="button"
            aria-label="جستجو"
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/40 text-white transition hover:bg-white/10"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}