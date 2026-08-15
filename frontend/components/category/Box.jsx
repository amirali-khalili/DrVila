import Link from "next/link";
import React from "react";

export default function Box({ products }) {
  console.log(products)
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {products.data.map((item) => {
        // const tag = item.tags[0] || "ویلا";

        return (
          <article
            key={item.id}
            className="group overflow-hidden rounded-[24px] bg-white shadow-card transition hover:-translate-y-1 hover:shadow-soft"
          >
            <div className="relative overflow-hidden">
              <img
                src={item.poster}
                alt={item.title}
                className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
              />

              {/* <div className="absolute right-4 top-4 rounded-full bg-brand-500 px-3 py-1 text-xs font-bold text-white">
                      {tag}
                    </div> */}

             
            </div>

            <div className="p-5">
              <div className="mb-2 flex items-center justify-between gap-3">
                <h3 className="line-clamp-1 text-lg font-extrabold text-ink">
                  {item.title}
                </h3>

                <span className="whitespace-nowrap text-xs text-gray-500">
                  {item.location}
                </span>
              </div>

              <div className="grid grid-cols-3 gap-2 rounded-2xl bg-mist p-3 text-center text-xs text-gray-600">
                <div>
                  <div className="font-bold text-ink">{item.land_area}</div>
                  <div>متر زمین</div>
                </div>

                <div>
                  <div className="font-bold text-ink">{item.building_area}</div>
                  <div>متر بنا</div>
                </div>

                <div>
                  <div className="font-bold text-ink">{item.room_count}</div>
                  <div>خواب</div>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2 text-xs">
                {item.pool && (
                  <span className="rounded-full bg-blue-50 px-3 py-1 text-blue-700">
                    استخر
                  </span>
                )}

                {item.deed && (
                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-emerald-700">
                    سنددار
                  </span>
                )}

                {item.furnished && (
                  <span className="rounded-full bg-purple-50 px-3 py-1 text-purple-700">
                    مبله
                  </span>
                )}

                {item.roof && (
                  <span className="rounded-full bg-amber-50 px-3 py-1 text-amber-700">
                    روف‌گاردن
                  </span>
                )}
              </div>

              <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-4">
                <div>
                  <div className="text-xs text-gray-500">قیمت</div>

                  <div className="text-2xl font-extrabold text-pine">
                    {item.price}
                    <span className="text-sm font-semibold">
                      {" "}
                      میلیارد تومان
                    </span>
                  </div>
                </div>

                <Link
                  href={`/villas/${item.id}`}
                  className="rounded-full border border-brand-200 px-4 py-2 text-sm font-semibold text-brand-700 transition hover:bg-brand-50"
                >
                  مشاهده جزئیات
                </Link>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
