import React from "react";

export default function DetailVila({product}) {
  return (
    <section>
      <div className="relative rounded-2xl overflow-hidden h-[400px] group">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop"
          className="w-full h-full object-cover"
          alt="ویلا"
        />
        <div className="absolute top-4 right-4 bg-black/50 backdrop-blur text-white text-[12px] px-3 py-1.5 rounded-full flex items-center gap-1">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
            <path
              d="M9 18l6-6-6-6"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span>۱ / ۱۲</span>
        </div>
      </div>

      <div className="grid grid-cols-6 gap-3 mt-3">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=300&auto=format&fit=crop"
          className="w-full h-20 object-cover rounded-xl ring-2 ring-amber-400 cursor-pointer"
          alt=""
        />
        <img
          src="https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=300&auto=format&fit=crop"
          className="w-full h-20 object-cover rounded-xl cursor-pointer"
          alt=""
        />
        <img
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=300&auto=format&fit=crop"
          className="w-full h-20 object-cover rounded-xl cursor-pointer"
          alt=""
        />
        <img
          src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=300&auto=format&fit=crop"
          className="w-full h-20 object-cover rounded-xl cursor-pointer"
          alt=""
        />
        <img
          src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=300&auto=format&fit=crop"
          className="w-full h-20 object-cover rounded-xl cursor-pointer"
          alt=""
        />
        <div className="relative rounded-xl overflow-hidden cursor-pointer">
          <img
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=300&auto=format&fit=crop"
            className="w-full h-20 object-cover brightness-50"
            alt=""
          />
          <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-[15px]">
            ۳+
          </span>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-[19px] font-bold border-b-2 border-amber-400 inline-block pb-2 mb-4">
          جزئیات ملک
        </h2>
        <p className="text-[14px] text-gray-500 leading-8 mb-8">
          {product.description}
        </p>

        <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 mb-10">
          <div className="flex flex-col items-center gap-2 text-center">
            <div className="w-11 h-11 rounded-full bg-amber-50 flex items-center justify-center text-amber-500">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M3 9l9-7 9 7v11a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1z"
                  stroke="currentColor"
                  stroke-width="1.6"
                />
              </svg>
            </div>
            <p className="text-[13px] font-bold">{product.land_area} متر</p>
            <p className="text-[11.5px] text-gray-400">متراژ زمین</p>
          </div>
          <div className="flex flex-col items-center gap-2 text-center">
            <div className="w-11 h-11 rounded-full bg-amber-50 flex items-center justify-center text-amber-500">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <rect
                  x="3"
                  y="3"
                  width="18"
                  height="18"
                  rx="2"
                  stroke="currentColor"
                  stroke-width="1.6"
                />
                <path
                  d="M3 9h18M9 21V9"
                  stroke="currentColor"
                  stroke-width="1.6"
                />
              </svg>
            </div>
            <p className="text-[13px] font-bold">{product.building_area} متر</p>
            <p className="text-[11.5px] text-gray-400">متراژ بنا</p>
          </div>
          <div className="flex flex-col items-center gap-2 text-center">
            <div className="w-11 h-11 rounded-full bg-amber-50 flex items-center justify-center text-amber-500">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M3 18v-6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6M3 18h18M5 10V6a2 2 0 0 1 2-2h3v6"
                  stroke="currentColor"
                  stroke-width="1.6"
                />
              </svg>
            </div>
            <p className="text-[13px] font-bold">{product.room_count}</p>
            <p className="text-[11.5px] text-gray-400">اتاق خواب</p>
          </div>
          <div className="flex flex-col items-center gap-2 text-center">
            <div className="w-11 h-11 rounded-full bg-amber-50 flex items-center justify-center text-amber-500">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M4 12h16M6 12V6a2 2 0 0 1 2-2h1M6 12v8m12-8v8M6 20h12"
                  stroke="currentColor"
                  stroke-width="1.6"
                />
              </svg>
            </div>
            <p className="text-[13px] font-bold">{product.bathroom_count}</p>
            <p className="text-[11.5px] text-gray-400">سرویس بهداشتی</p>
          </div>
          <div className="flex flex-col items-center gap-2 text-center">
            <div className="w-11 h-11 rounded-full bg-amber-50 flex items-center justify-center text-amber-500">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 17h14M5 17v-4h14v4M7 13V9a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v4"
                  stroke="currentColor"
                  stroke-width="1.6"
                />
              </svg>
            </div>
            <p className="text-[13px] font-bold">{product.parking_count}</p>
            <p className="text-[11.5px] text-gray-400">پارکینگ</p>
          </div>
          <div className="flex flex-col items-center gap-2 text-center">
            <div className="w-11 h-11 rounded-full bg-amber-50 flex items-center justify-center text-amber-500">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 8v4l3 3"
                  stroke="currentColor"
                  stroke-width="1.6"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="9"
                  stroke="currentColor"
                  stroke-width="1.6"
                />
              </svg>
            </div>
            <p className="text-[13px] font-bold">{product.construction_year}</p>
            <p className="text-[11.5px] text-gray-400">سال ساخت</p>
          </div>
        </div>

        <h2 className="text-[19px] font-bold border-b-2 border-amber-400 inline-block pb-2 mb-4">
          ویژگی‌های ملک
        </h2>
        <div className="flex flex-wrap gap-3">
          <span className="flex items-center gap-2 border border-gray-200 rounded-xl px-4 h-11 text-[13.5px]">
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              className="text-amber-500"
            >
              <path
                d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
                stroke="currentColor"
                stroke-width="1.5"
              />
              <path d="M14 2v6h6" stroke="currentColor" stroke-width="1.5" />
            </svg>
            سند تک برگ
          </span>
          <span className="flex items-center gap-2 border border-gray-200 rounded-xl px-4 h-11 text-[13.5px]">
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              className="text-amber-500"
            >
              <rect
                x="3"
                y="4"
                width="18"
                height="16"
                rx="2"
                stroke="currentColor"
                stroke-width="1.5"
              />
              <path d="M3 9h18" stroke="currentColor" stroke-width="1.5" />
            </svg>
            سند تک برگ
          </span>
          <span className="flex items-center gap-2 border border-gray-200 rounded-xl px-4 h-11 text-[13.5px]">
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              className="text-amber-500"
            >
              <path
                d="M12 2C9 6 6 9 6 13a6 6 0 0 0 12 0c0-4-3-7-6-11z"
                stroke="currentColor"
                stroke-width="1.5"
              />
            </svg>
            گرمایش از کف
          </span>
          <span className="flex items-center gap-2 border border-gray-200 rounded-xl px-4 h-11 text-[13.5px]">
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              className="text-amber-500"
            >
              <path
                d="M3 21h18M5 21V9l7-5 7 5v12"
                stroke="currentColor"
                stroke-width="1.5"
              />
            </svg>
            کیفیت و آشپزخانه
          </span>
          <span className="flex items-center gap-2 border border-gray-200 rounded-xl px-4 h-11 text-[13.5px]">
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              className="text-amber-500"
            >
              <circle
                cx="12"
                cy="12"
                r="9"
                stroke="currentColor"
                stroke-width="1.5"
              />
              <path
                d="M8 12h8M12 8v8"
                stroke="currentColor"
                stroke-width="1.5"
              />
            </svg>
            سونا و جکوزی
          </span>
          <span className="flex items-center gap-2 border border-gray-200 rounded-xl px-4 h-11 text-[13.5px]">
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              className="text-amber-500"
            >
              <path
                d="M3 16c1.5-1.5 3-1.5 4.5 0s3 1.5 4.5 0 3-1.5 4.5 0 3 1.5 4.5 0M4 10h16v4H4z"
                stroke="currentColor"
                stroke-width="1.5"
              />
            </svg>
            استخر
          </span>
        </div>
      </div>
    </section>
  );
}
