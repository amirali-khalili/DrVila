"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const LOCATION_LABELS = {
  kordan: "کردان",
  soheiliyeh: "سهیلیه",
  zakiabad: "زکی‌آباد",
  "aghcheh-hesar": "آغچه‌حصار",
};

function formatLocation(garden) {
  if (garden?.location_display) {
    return garden.location_display;
  }

  if (!garden?.location) {
    return "موقعیت ثبت نشده";
  }

  return (
    LOCATION_LABELS[garden.location] ||
    garden.location.replaceAll("-", " ")
  );
}

function formatPrice(price) {
  if (price === null || price === undefined) {
    return "قیمت توافقی";
  }

  return `${Number(price).toLocaleString("fa-IR")} میلیارد تومان`;
}

function formatArea(area) {
  if (area === null || area === undefined) {
    return "متراژ ثبت نشده";
  }

  return `${Number(area).toLocaleString("fa-IR")} متر باغ`;
}

export default function AnotherVila({ gardens = [] }) {
  if (!gardens.length) {
    return null;
  }

  return (
    <section
      className="mt-10 w-full min-w-0 sm:mt-12 lg:mt-16"
      dir="rtl"
    >
      <h2 className="mb-5 inline-block border-b-2 border-amber-400 pb-2 text-[17px] font-bold sm:mb-6 sm:text-[19px]">
        باغ‌های مشابه
      </h2>

      <div className="w-full min-w-0 overflow-hidden">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{
            clickable: true,
          }}
          slidesPerView={2}
          slidesPerGroup={1}
          spaceBetween={12}
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
          {gardens.map((garden) => (
            <SwiperSlide
              key={garden.id}
              className="!h-auto"
            >
              <article className="flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-[0_2px_18px_-6px_rgba(0,0,0,0.06)]">
                <div className="relative h-44 w-full bg-gray-100 sm:h-48">
                  {garden.poster ? (
                    <img
                      src={garden.poster}
                      alt={garden.title || "باغ"}
                      loading="lazy"
                      className="block h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center px-2 text-center text-xs text-gray-400">
                      تصویری ثبت نشده است
                    </div>
                  )}
                </div>

                <div className="flex min-w-0 flex-1 flex-col p-3 sm:p-5">
                  <h3 className="mb-1 truncate text-[13px] font-bold text-gray-900 sm:text-[15px]">
                    {garden.title || "باغ بدون عنوان"}
                  </h3>

                  <p className="mb-3 flex items-center gap-1 text-[11px] text-gray-400 sm:text-[12.5px]">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="shrink-0"
                    >
                      <path
                        d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"
                        stroke="currentColor"
                        strokeWidth="1.6"
                      />
                      <circle
                        cx="12"
                        cy="10"
                        r="2.5"
                        stroke="currentColor"
                        strokeWidth="1.6"
                      />
                    </svg>

                    <span className="truncate">
                      {formatLocation(garden)}
                    </span>
                  </p>

                  <p className="mb-4 text-[11px] text-gray-400 sm:text-[12.5px]">
                    {formatArea(garden.land_area)}
                  </p>

                  <div className="mt-auto flex flex-col items-start justify-between gap-3 xl:flex-row xl:items-center">
                    <Link
                      href={`/gardens/${garden.id}`}
                      className="flex shrink-0 items-center gap-1 rounded-full border border-gray-200 px-2.5 py-1.5 text-[11px] text-gray-500 transition-colors hover:border-amber-400 hover:text-amber-500 sm:px-3 sm:text-[12.5px]"
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

                    <span className="whitespace-nowrap text-[12px] font-bold text-amber-500 sm:text-[14px]">
                      {formatPrice(garden.price)}
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