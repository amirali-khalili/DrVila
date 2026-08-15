import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#171a16] pt-16 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10 text-center md:text-right">
        <div>
          <h4 className="text-white text-xl font-bold mb-3">
            دکتر <span className="text-[var(--gold-light)]">ویلا</span>
          </h4>
          <p className="text-white/50 text-xs leading-7">
            خرید و فروش تخصصی ویلا و زمین در سهیلیه کرج
          </p>
          <div className="flex items-center justify-center md:justify-start gap-3 mt-5">
            <a
              href="#"
              className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/70 hover:text-[var(--gold-light)] hover:border-[var(--gold)] transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm3.5 7-1.1 5.4c-.1.4-.4.5-.7.3l-1.9-1.4-.9.9c-.1.1-.2.2-.4.2l.1-2 3.7-3.3c.2-.1 0-.2-.2-.1l-4.6 2.9-2-.6c-.4-.1-.4-.4.1-.6l7.8-3c.4-.1.7.1.6.6Z" />
              </svg>
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/70 hover:text-[var(--gold-light)] hover:border-[var(--gold)] transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M17 2H7a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5Zm-5 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm5.5-9a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
              </svg>
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/70 hover:text-[var(--gold-light)] hover:border-[var(--gold)] transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2a10 10 0 0 0-8.66 15L2 22l5.2-1.36A10 10 0 1 0 12 2Z" />
              </svg>
            </a>
          </div>
        </div>

        <div>
          <h5 className="text-white font-bold mb-4">دسترسی سریع</h5>
          <ul className="space-y-3 text-white/50 text-xs">
            <li>
              <a href="#" className="hover:text-[var(--gold-light)]">
                ویلاک
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[var(--gold-light)]">
                خرید زمین
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[var(--gold-light)]">
                خرید ویلا
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[var(--gold-light)]">
                فروش ملک
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h5 className="text-white font-bold mb-4">درباره ما</h5>
          <ul className="space-y-3 text-white/50 text-xs">
            <li>
              <a href="#" className="hover:text-[var(--gold-light)]">
                تماس با ما
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[var(--gold-light)]">
                درباره دکتر ویلا
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h5 className="text-white font-bold mb-4">تماس با ما</h5>
          <ul className="space-y-3 text-white/50 text-xs">
            <li className="flex items-center justify-center md:justify-start gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3.5 h-3.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              ۰۲۶-۳۶۵۴۵۶۷۸
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3.5 h-3.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              ۰۹۱۳-۱۳۳-۴۵۶۷
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
              کرج، سهیلیه، بلوار اصلی، پلاک ۱۳۳
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-12 pt-6 border-t border-white/10 text-center">
        <p className="text-white/30 text-xs">
          © تمامی حقوق این وبسایت متعلق به دکتر ویلا است.
        </p>
      </div>

      <button
        onclick="window.scrollTo({top:0,behavior:'smooth'})"
        className="fixed bottom-6 left-6 w-11 h-11 rounded-full border border-[var(--gold)] text-[var(--gold-light)] flex items-center justify-center bg-[#171a16] shadow-lg hover:bg-[var(--gold)] hover:text-[#171a16] transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="m18 15-6-6-6 6" />
        </svg>
      </button>
    </footer>
  );
}
