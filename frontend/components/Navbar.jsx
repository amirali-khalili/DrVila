import React from "react";

export default function Navbar() {
  return (
    <header className="absolute top-0 inset-x-0 z-30 mt-10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-6">
        <div className="flex items-center gap-2">
          <span className="text-white text-2xl font-bold tracking-wide">
            دکتر <span className="text-[var(--gold-light)]">ویلا</span>
          </span>
        </div>

        <nav className="hidden lg:flex items-center gap-8 text-white/90 text-sm font-medium">
          <a
            href="#"
            className="pb-1 border-b-2 border-[var(--gold)] text-white"
          >
            خانه
          </a>
          <a
            href="#villas"
            className="hover:text-[var(--gold-light)] transition"
          >
            خرید ویلا
          </a>
          <a href="#land" className="hover:text-[var(--gold-light)] transition">
            خرید زمین
          </a>
          <a href="#" className="hover:text-[var(--gold-light)] transition">
            فروش ملک
          </a>
          <a href="#" className="hover:text-[var(--gold-light)] transition">
            درباره ما
          </a>
          <a href="#" className="hover:text-[var(--gold-light)] transition">
            تماس با ما
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <button className="hidden sm:flex items-center gap-2 gold-grad text-[#241c0c] text-sm font-semibold px-5 py-2.5 rounded-full shadow-lg hover:brightness-110 transition">
            مشاوره رایگان
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          </button>
          <button className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center text-white hover:bg-white/10 transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
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
