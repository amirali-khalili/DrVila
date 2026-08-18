import Link from "next/link";
import React from "react";

export default function SpecialBuy() {
  return (
    <section id="land" className="bg-[#171a16] py-20 flex justify-center">
      <div className="w-full flex justify-center">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1fr_1fr] gap-10 items-center justify-center">
          <div className="grid grid-cols-3 gap-4 order-2 lg:order-1 mx-auto">
            <div className="bg-[#1f2319] border border-white/10 rounded-2xl p-5 text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7 text-[var(--gold-light)] mx-auto mb-3"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              </svg>
              <p className="text-white font-bold text-sm">باغچه سندار</p>
              <p className="text-white/50 text-xs mt-2">
                ۱۵۰۰ متر
                <br />
                کاربری مناسب
              </p>
              <p className="text-[var(--gold-light)] text-[11px] mt-2 flex items-center justify-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3 h-3"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                </svg>
                سهیلیه
              </p>
            </div>
            <div className="bg-[#1f2319] border border-white/10 rounded-2xl p-5 text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7 text-[var(--gold-light)] mx-auto mb-3"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M3 9h18M9 21V9" />
              </svg>
              <p className="text-white font-bold text-sm">
                زمین مناسب سرمایه‌گذاری
              </p>
              <p className="text-white/50 text-xs mt-2">
                ۹۰۰ متر
                <br />
                دسترسی عالی
              </p>
              <p className="text-[var(--gold-light)] text-[11px] mt-2 flex items-center justify-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3 h-3"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                </svg>
                سهیلیه
              </p>
            </div>
            <div className="bg-[#1f2319] border border-white/10 rounded-2xl p-5 text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7 text-[var(--gold-light)] mx-auto mb-3"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path d="M11 20A7 7 0 0 1 4 13c0-4 4-9 7-9s7 5 7 9a7 7 0 0 1-7 7Z" />
              </svg>
              <p className="text-white font-bold text-sm">زمین باغی</p>
              <p className="text-white/50 text-xs mt-2">
                ۱۲۰۰ متر
                <br />
                سندار
              </p>
              <p className="text-[var(--gold-light)] text-[11px] mt-2 flex items-center justify-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3 h-3"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                </svg>
                سهیلیه
              </p>
            </div>
          </div>

          <div className="order-1 lg:order-2 text-center lg:text-center flex justify-center ">
            <div>

            
            <h3 className="text-white text-2xl font-extrabold leading-relaxed">
              فرصت‌های ویژه خرید زمین
            </h3>
            <div className="flex items-center justify-center lg:justify-center gap-2 mt-3 mb-6">
              <span className="w-6 h-px bg-[var(--gold)]"></span>
              <span className="w-1.5 h-1.5 bg-[var(--gold)] rotate-45"></span>
              <span className="w-6 h-px bg-[var(--gold)]"></span>
            </div>
            <Link href='/earths'  >
            <button className="cursor-pointer inline-flex items-center gap-2 gold-grad text-[#241c0c] font-semibold px-6 py-3 rounded-full shadow-lg hover:brightness-110 transition">
              بررسی فرصت‌ها
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                >
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </button>
                </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
