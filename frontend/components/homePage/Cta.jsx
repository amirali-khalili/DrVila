import Image from "next/image";
import React from "react";

export default function Cta() {
  return (
    <section className="max-w-7xl mx-auto px-6 pb-20">
      <div className="relative rounded-3xl overflow-hidden min-h-[280px] flex items-center">
        <Image
          src="/images/moshavere.webp"
          alt="ویلای شبانه"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-black/50 to-black/10"></div>
        <div className="relative z-10 px-10 md:px-14 py-10 max-w-xl mr-0 ml-auto text-right">
          <h3 className="text-white text-xl md:text-2xl font-extrabold leading-relaxed">
            رویای ویلای خود را با{" "}
            <span className="text-[var(--gold-light)]">دکتر ویلا</span> بسازید.
          </h3>
          <p className="text-white/70 text-sm mt-3 leading-7">
            مشاوران ما آماده‌اند تا بهترین مسیر خرید را برای شما هموار کنند.
          </p>
          <button className="inline-flex items-center gap-2 gold-grad text-[#241c0c] font-semibold px-6 py-3 rounded-full shadow-lg mt-6 hover:brightness-110 transition">
            شروع مشاوره رایگان
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
