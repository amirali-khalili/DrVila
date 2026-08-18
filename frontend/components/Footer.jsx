"use client";

import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#171a16] pt-16 pb-6 ">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center md:text-right flex justify-center">
        <div className="mx-auto my-auto">
          <h4 className="text-white text-xl font-bold mb-3">
            دکتر <span className="text-[var(--gold-light)]">ویلا</span>
          </h4>
          <p className="text-white/50 text-xs leading-7">
            خرید و فروش تخصصی ویلا و زمین در سهیلیه کرج
          </p>
        </div>

        <div className="mx-auto">
          <h5 className="text-white font-bold mb-4">دسترسی سریع</h5>
          <ul className="space-y-3 text-white/50 text-xs">
            <li>
              <Link href="/villas" className="hover:text-[var(--gold-light)]">
                خرید ویلا
              </Link>
            </li>
            <li>
              <Link href="/earths" className="hover:text-[var(--gold-light)]">
                خرید زمین
              </Link>
            </li>
            <li>
              <Link href="/gardens" className="hover:text-[var(--gold-light)]">
                خرید خرید باغ
              </Link>
            </li>
          </ul>
        </div>

        <div className="mx-auto">
          <h5 className="text-white font-bold mb-4">تماس با ما</h5>
          <ul className="space-y-3 text-white/50 text-xs">
            <li className="flex items-center justify-center gap-2 md:justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3.5 w-3.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              <a
                href="tel:09368272668"
                dir="ltr"
                className="flex cursor-pointer items-center gap-2 transition hover:text-[var(--gold-light)]"
              >

                <span>09368272668</span>
              </a>
            </li>

            <li className="flex items-center justify-center gap-2 md:justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3.5 w-3.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <a
                href="tel:09991887858"
                dir="ltr"
                className="flex cursor-pointer items-center gap-2 transition hover:text-[var(--gold-light)]"
              >
                <span>09991887858</span>
              </a>
            </li>
            <li className="flex items-start justify-center md:justify-start gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3.5 h-3.5 mt-0.5 shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              کرج، سهیلیه
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-12 pt-6 border-t border-white/10 text-center">
        <p className="text-white/30 text-xs">
          © تمامی حقوق این وبسایت متعلق به دکتر ویلا است.
        </p>
      </div>
    </footer>
  );
}
