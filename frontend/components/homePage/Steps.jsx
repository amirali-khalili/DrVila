import React from "react";

export default function Steps() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 shadow-2xl rounded-2xl my-20">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 relative">
        <div className="hidden md:block absolute top-8 inset-x-24 h-px bg-gray-200 -z-0"></div>

        <div className="text-center relative z-10">
          <span className="text-3xl font-extrabold text-gray-200">۰۱</span>
          <div className="w-14 h-14 rounded-full bg-[#fbf1de] mx-auto flex items-center justify-center my-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-[var(--gold)]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.8"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          </div>
          <p className="font-bold text-sm">مشاوره اولیه</p>
          <p className="text-xs text-gray-400 mt-1">
            بررسی نیازها و ارائه بهترین پیشنهادها
          </p>
        </div>
        <div className="text-center relative z-10">
          <span className="text-3xl font-extrabold text-gray-200">۰۲</span>
          <div className="w-14 h-14 rounded-full bg-[#fbf1de] mx-auto flex items-center justify-center my-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-[var(--gold)]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.8"
            >
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8Z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          </div>
          <p className="font-bold text-sm">بازدید ملک</p>
          <p className="text-xs text-gray-400 mt-1">
            بازدید از ملک‌های منتخب بر اساس سلیقه شما
          </p>
        </div>
        <div className="text-center relative z-10">
          <span className="text-3xl font-extrabold text-gray-200">۰۳</span>
          <div className="w-14 h-14 rounded-full bg-[#fbf1de] mx-auto flex items-center justify-center my-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-[var(--gold)]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.8"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <path d="M14 2v6h6" />
            </svg>
          </div>
          <p className="font-bold text-sm">بررسی مدارک</p>
          <p className="text-xs text-gray-400 mt-1">
            بررسی کامل مدارک و وضعیت ملک توسط کارشناسان
          </p>
        </div>
        <div className="text-center relative z-10">
          <span className="text-3xl font-extrabold text-gray-200">۰۴</span>
          <div className="w-14 h-14 rounded-full bg-[#fbf1de] mx-auto flex items-center justify-center my-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-[var(--gold)]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.8"
            >
              <path d="M11 17a4 4 0 0 0 8 0v-1a4 4 0 0 0 0-8" />
              <path d="M5 15a4 4 0 0 1 4-4h.5" />
            </svg>
          </div>
          <p className="font-bold text-sm">معامله امن</p>
          <p className="text-xs text-gray-400 mt-1">
            انجام معامله با اطمینان و همراهی تا سند
          </p>
        </div>
      </div>
    </section>
  );
}
