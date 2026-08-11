import React from "react";

export default function SideBar({ product }) {
  return (
    <aside className="space-y-4">
      <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_18px_-6px_rgba(0,0,0,0.06)] p-5">
        <div className="flex items-start justify-between mb-4">
          <button className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-red-400 hover:border-red-200 transition">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path
                d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"
                stroke="currentColor"
                stroke-width="1.6"
              />
            </svg>
          </button>
          <span className="text-[12px] text-gray-400 mt-2">
            کد ملک: {product.id}
          </span>
        </div>

        <h1 className="text-[19px] font-bold leading-8 mb-2">
          {product.title}{" "}
        </h1>
        <p className="text-[13px] text-gray-400 mb-4">{product.address}</p>

        <p className="text-amber-500 text-[22px] font-extrabold mb-5">
          {product.price} میلیارد تومان
        </p>

        <button className="w-full bg-[#141414] hover:bg-black transition text-white text-[14px] font-semibold h-12 rounded-xl flex items-center justify-center gap-2 mb-3">
          دریافت مشاوره
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
            <path
              d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"
              stroke="white"
              stroke-width="1.8"
            />
          </svg>
        </button>

        <button className="w-full border border-gray-200 hover:border-amber-300 transition text-[#141414] text-[14px] font-semibold h-12 rounded-xl flex items-center justify-center gap-2">
          هماهنگی بازدید
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
            <rect
              x="3"
              y="4"
              width="18"
              height="18"
              rx="2"
              stroke="currentColor"
              stroke-width="1.6"
            />
            <path
              d="M16 2v4M8 2v4M3 10h18"
              stroke="currentColor"
              stroke-width="1.6"
            />
          </svg>
        </button>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_18px_-6px_rgba(0,0,0,0.06)] p-5 flex items-center justify-between gap-3">
        <div>
          <p className="text-[14px] font-bold mb-2">این ملک را می‌پسندید؟</p>
          <p className="text-[12.5px] text-gray-400 leading-6">
            برای مشاهده ملک‌های مشابه ذخیره کنید.
          </p>
        </div>
        <button className="shrink-0 w-11 h-11 rounded-xl border border-amber-200 flex items-center justify-center text-amber-500">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
            <path
              d="M6 3h12a1 1 0 0 1 1 1v17l-7-4-7 4V4a1 1 0 0 1 1-1z"
              stroke="currentColor"
              stroke-width="1.6"
            />
          </svg>
        </button>
      </div>
    </aside>
  );
}
