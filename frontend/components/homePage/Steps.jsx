import React from "react";

export default function Steps() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
        <div className="card-hover rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm">
          <span className="text-3xl font-extrabold text-gray-200">
            ۰۱
          </span>

          <div className="mx-auto my-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#fbf1de]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 text-[var(--gold)]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          </div>

          <p className="mb-2 text-sm font-bold">
            مشاوره اولیه
          </p>

          <p className="text-xs leading-6 text-gray-500">
            بررسی نیازها و ارائه بهترین پیشنهادها
          </p>
        </div>

        <div className="card-hover rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm">
          <span className="text-3xl font-extrabold text-gray-200">
            ۰۲
          </span>

          <div className="mx-auto my-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#fbf1de]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 text-[var(--gold)]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8Z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          </div>

          <p className="mb-2 text-sm font-bold">
            بازدید ملک
          </p>

          <p className="text-xs leading-6 text-gray-500">
            بازدید از ملک‌های منتخب بر اساس سلیقه شما
          </p>
        </div>

        <div className="card-hover rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm">
          <span className="text-3xl font-extrabold text-gray-200">
            ۰۳
          </span>

          <div className="mx-auto my-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#fbf1de]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 text-[var(--gold)]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <path d="M14 2v6h6" />
            </svg>
          </div>

          <p className="mb-2 text-sm font-bold">
            بررسی مدارک
          </p>

          <p className="text-xs leading-6 text-gray-500">
            بررسی کامل مدارک و وضعیت ملک توسط کارشناسان
          </p>
        </div>

        <div className="card-hover rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm">
          <span className="text-3xl font-extrabold text-gray-200">
            ۰۴
          </span>

          <div className="mx-auto my-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#fbf1de]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 text-[var(--gold)]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path d="M11 17a4 4 0 0 0 8 0v-1a4 4 0 0 0 0-8" />
              <path d="M5 15a4 4 0 0 1 4-4h.5" />
            </svg>
          </div>

          <p className="mb-2 text-sm font-bold">
            معامله امن
          </p>

          <p className="text-xs leading-6 text-gray-500">
            انجام معامله با اطمینان و همراهی تا سند
          </p>
        </div>
      </div>
    </section>
  );
}