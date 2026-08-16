import Link from "next/link";
import React from "react";

export default function Box({ products }) {
  return (
    <div className="grid grid-cols-2 gap-3 md:gap-6 lg:grid-cols-3">
      {products.data.map((item) => (
        <article
          key={item.id}
          className="group min-w-0 overflow-hidden rounded-2xl bg-white shadow-card transition hover:-translate-y-1 hover:shadow-soft md:rounded-[24px]"
        >
          {/* تصویر ویلا */}
          <div className="relative overflow-hidden">
            <img
              src={item.poster}
              alt={item.title}
              loading="lazy"
              className="h-32 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-40 md:h-56"
            />
          </div>

          <div className="p-3 md:p-5">
            {/* عنوان و موقعیت */}
            <div className="mb-2 min-w-0 md:flex md:items-center md:justify-between md:gap-3 flex justify-between">
              <h3 className="line-clamp-1 text-sm font-extrabold text-ink md:text-lg">
                {item.title}
              </h3>

              <span className="mt-1 block truncate text-[10px] text-gray-500 md:mt-0 md:text-xs">
                {item.location_display}
              </span>
            </div>

            {/* مشخصات ویلا */}
            <div className="grid grid-cols-3 gap-1 rounded-xl bg-mist p-2 text-center text-[9px] text-gray-600 md:gap-2 md:rounded-2xl md:p-3 md:text-xs">
              <div className="min-w-0">
                <div className="truncate font-bold text-ink">
                  {item.land_area}
                </div>
                <div className="whitespace-nowrap">متر زمین</div>
              </div>

              <div className="min-w-0 border-x border-gray-200">
                <div className="truncate font-bold text-ink">
                  {item.building_area}
                </div>
                <div className="whitespace-nowrap">متر بنا</div>
              </div>

              <div className="min-w-0">
                <div className="truncate font-bold text-ink">
                  {item.room_count}
                </div>
                <div className="whitespace-nowrap">خواب</div>
              </div>
            </div>

            {/* امکانات */}
            <div className="mt-3 flex flex-wrap gap-1 text-[9px] md:mt-4 md:gap-2 md:text-xs">
              {item.pool && (
                <span className="rounded-full bg-blue-50 px-2 py-1 text-blue-700 md:px-3">
                  استخر
                </span>
              )}

              {item.deed && (
                <span className="rounded-full bg-emerald-50 px-2 py-1 text-emerald-700 md:px-3">
                  سنددار
                </span>
              )}

              {item.furnished && (
                <span className="rounded-full bg-purple-50 px-2 py-1 text-purple-700 md:px-3">
                  مبله
                </span>
              )}

              {item.roof && (
                <span className="rounded-full bg-amber-50 px-2 py-1 text-amber-700 md:px-3">
                  روف‌گاردن
                </span>
              )}
            </div>

            {/* قیمت و دکمه جزئیات */}
            <div className="mt-3 flex flex-col gap-3 border-t border-gray-100 pt-3 md:mt-5 md:flex-row md:items-center md:justify-between md:pt-4">
              <div className="min-w-0 flex items-center justify-between">
                <div className="text-[10px] text-gray-500 md:text-xs">قیمت:</div>

                <div className="truncate text-sm font-extrabold text-pine md:text-2xl">
                  {item.price}

                  <span className="mr-1 text-[9px] font-semibold md:text-sm">
                    میلیارد تومان
                  </span>
                </div>
              </div>

              <Link
                href={`/villas/${item.id}`}
                className="block w-full rounded-full border border-brand-200 px-2 py-2 text-center text-[10px] font-semibold text-brand-700 transition hover:bg-brand-50 md:w-auto md:px-4 md:text-sm"
              >
                مشاهده جزئیات
              </Link>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
