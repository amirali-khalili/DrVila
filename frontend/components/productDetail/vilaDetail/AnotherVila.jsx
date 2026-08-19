"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function formatPrice(price) {
  if (price === null || price === undefined) {
    return "قیمت توافقی";
  }

  return `${Number(price).toLocaleString("fa-IR")} میلیارد تومان`;
}

export default function AnotherVila({ villas = [] }) {
  if (!villas.length) {
    return null;
  }

  return (
    <section className="w-full min-w-0 mt-10 sm:mt-12 lg:mt-16" dir="rtl">
      <h2 className="text-[17px] sm:text-[19px] font-bold border-b-2 border-amber-400 inline-block pb-2 mb-5 sm:mb-6">
        ویلاهای مشابه
      </h2>

      <div className="w-full min-w-0 overflow-hidden">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={16}
          slidesPerView={2}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 18,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
          }}
          className="similar-villas-swiper w-full !pb-12"
        >
          {villas.map((villa) => (
            <SwiperSlide key={villa.id} className="!h-auto">
              <article className="h-full min-w-0 flex flex-col bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-[0_2px_18px_-6px_rgba(0,0,0,0.06)]">
                <img
                  src={villa.poster}
                  alt={villa.title || "ویلا"}
                  className="block w-full h-44 sm:h-48 object-cover"
                  loading="lazy"
                />

                <div className="p-4 sm:p-5 flex flex-col flex-1 min-w-0">
                  <h3 className="font-bold text-[14px] sm:text-[15px] mb-1 truncate">
                    {villa.title}
                  </h3>

                  <p className="text-xs sm:text-[12.5px] text-gray-400 mb-3">
                    {villa.location_display}
                  </p>

                  <p className="text-xs sm:text-[12.5px] text-gray-400 mb-4 whitespace-normal">
                    {villa.building_area?.toLocaleString("fa-IR")} متر بنا
                    <span className="mx-1 sm:mx-2">|</span>
                    {villa.room_count?.toLocaleString("fa-IR")} خواب
                    <span className="mx-1 sm:mx-2">|</span>
                    {villa.bathroom_count?.toLocaleString("fa-IR")} سرویس
                  </p>

                  <div className="flex flex-col xs:flex-row sm:flex-col xl:flex-row items-start xl:items-center justify-between gap-3 mt-auto">
                    <Link
                      href={`/villas/${villa.id}`}
                      className="shrink-0 flex items-center gap-1 text-xs sm:text-[12.5px] text-gray-500 border border-gray-200 rounded-full px-3 py-1.5 transition-colors hover:text-amber-500 hover:border-amber-400"
                    >
                      مشاهده جزئیات

                      <svg
                        width="11"
                        height="11"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M15 18l-6-6 6-6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>

                    <span className="text-amber-500 font-bold text-[13px] sm:text-[14px] whitespace-nowrap">
                      {formatPrice(villa.price)}
                    </span>
                  </div>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}