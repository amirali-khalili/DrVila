"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

function formatNumber(value) {
  if (value === null || value === undefined || value === "") {
    return "ثبت نشده";
  }

  return Number(value).toLocaleString("fa-IR");
}

function formatPrice(price) {
  if (price === null || price === undefined) {
    return "قیمت توافقی";
  }

  return `${Number(price).toLocaleString("fa-IR")} میلیارد تومان`;
}

function formatDate(date) {
  if (!date) {
    return "ثبت نشده";
  }

  return new Intl.DateTimeFormat("fa-IR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(date));
}

function SpecificationIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 20V10l8-6 8 6v10H4Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M9 20v-6h6v6"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function DetailVila({ product }) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const galleryImages = useMemo(() => {
    const images = [
      ...(product?.poster
        ? [
            {
              id: "poster",
              image: product.poster,
            },
          ]
        : []),
      ...(product?.images ?? []),
    ];

    // حذف تصاویر تکراری
    return images.filter(
      (item, index, array) =>
        item?.image &&
        array.findIndex((otherItem) => otherItem.image === item.image) === index
    );
  }, [product]);

  const currentImage = galleryImages[selectedImageIndex] ?? galleryImages[0];

  useEffect(() => {
    setSelectedImageIndex(0);
  }, [product?.id]);

  function showPreviousImage() {
    if (galleryImages.length < 2) return;

    setSelectedImageIndex((currentIndex) =>
      currentIndex === 0 ? galleryImages.length - 1 : currentIndex - 1
    );
  }

  function showNextImage() {
    if (galleryImages.length < 2) return;

    setSelectedImageIndex((currentIndex) =>
      currentIndex === galleryImages.length - 1 ? 0 : currentIndex + 1
    );
  }

  const specifications = [
    {
      key: "land_area",
      label: "مساحت زمین",
      value: `${formatNumber(product?.land_area)} متر`,
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path
            d="M3 7 12 3l9 4-9 4-9-4Z"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m3 12 9 4 9-4M3 17l9 4 9-4"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      key: "building_area",
      label: "زیربنای ساختمان",
      value: `${formatNumber(product?.building_area)} متر`,
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path
            d="M4 21V5a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v16M17 9h3v12M2 21h20"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 7h2M13 7h1M8 11h2M13 11h1M8 15h2M13 15h1M9 21v-3h3v3"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      key: "room_count",
      label: "تعداد اتاق خواب",
      value: `${formatNumber(product?.room_count)} اتاق`,
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path
            d="M3 19v-8M21 19v-6a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v6M3 16h18"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7 11V8a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3M3 19v2M21 19v2"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      key: "bathroom_count",
      label: "تعداد سرویس",
      value: `${formatNumber(product?.bathroom_count)} سرویس`,
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path
            d="M4 13h16v2a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5v-2Z"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6 13V6a3 3 0 0 1 6 0M9 20v2M17 20v2"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      key: "parking_count",
      label: "ظرفیت پارکینگ",
      value: `${formatNumber(product?.parking_count)} خودرو`,
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path
            d="m5 11 2-5h10l2 5M4 11h16a2 2 0 0 1 2 2v5H2v-5a2 2 0 0 1 2-2Z"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="6" cy="15" r="1" fill="currentColor" />
          <circle cx="18" cy="15" r="1" fill="currentColor" />
          <path
            d="M4 18v2M20 18v2"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      key: "construction_year",
      label: "سال ساخت",
      value: formatNumber(product?.construction_year),
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <rect
            x="3"
            y="5"
            width="18"
            height="16"
            rx="2"
            stroke="currentColor"
            strokeWidth="1.7"
          />
          <path
            d="M8 3v4M16 3v4M3 10h18"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
          <path
            d="M8 14h2M14 14h2M8 17h2M14 17h2"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
  ];
  const features = [
    {
      key: "deed",
      label: "سند",
      enabled: product?.deed,
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path
            d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14 2v6h6M8 13h8M8 17h5"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      key: "furnished",
      label: "مبله",
      enabled: product?.furnished,
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path
            d="M5 12V8a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v4"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path
            d="M4 11a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2M5 19v2M19 19v2"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      key: "pool",
      label: "استخر",
      enabled: product?.pool,
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path
            d="M3 16c1.5-1.5 3-1.5 4.5 0s3 1.5 4.5 0 3-1.5 4.5 0 3 1.5 4.5 0M3 20c1.5-1.5 3-1.5 4.5 0s3 1.5 4.5 0 3-1.5 4.5 0 3 1.5 4.5 0"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path
            d="M7 13V5a2 2 0 0 1 4 0M7 9h7V5a2 2 0 0 1 4 0"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      key: "roof",
      label: "روف گاردن",
      enabled: product?.roof,
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path
            d="M3 11 12 4l9 7M5 10v10h14V10"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 20v-5h6v5M12 4V2M16 5l2-2M8 5 6 3"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      key: "caretaker",
      label: "سرایدار",
      enabled: product?.caretaker,
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <circle
            cx="12"
            cy="7"
            r="4"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <path
            d="M4 21a8 8 0 0 1 16 0"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
  ].filter((feature) => Boolean(feature.enabled));

  return (
    <section className="min-w-0">
      {/* تصویر اصلی */}
      <div className="group relative h-[260px] overflow-hidden rounded-2xl bg-gray-100 sm:h-[360px] lg:h-[430px]">
        {currentImage ? (
          <Image
            src={currentImage.image}
            alt={product?.title || "تصویر ویلا"}
            fill
            priority
            sizes="(min-width: 1024px) 850px, 100vw"
            className="object-cover"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-gray-400">
            تصویری برای این ملک ثبت نشده است
          </div>
        )}

        {galleryImages.length > 1 && (
          <>
            <button
              type="button"
              onClick={showPreviousImage}
              aria-label="تصویر قبلی"
              className="absolute left-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-black/45 text-white backdrop-blur-sm transition hover:bg-black/70 sm:left-4 sm:h-11 sm:w-11"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="m15 18-6-6 6-6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <button
              type="button"
              onClick={showNextImage}
              aria-label="تصویر بعدی"
              className="absolute right-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-black/45 text-white backdrop-blur-sm transition hover:bg-black/70 sm:right-4 sm:h-11 sm:w-11"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="m9 18 6-6-6-6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </>
        )}

        {galleryImages.length > 0 && (
          <div className="absolute right-3 top-3 z-10 rounded-full bg-black/55 px-3 py-1.5 text-xs text-white backdrop-blur sm:right-4 sm:top-4">
            {(selectedImageIndex + 1).toLocaleString("fa-IR")}
            {" / "}
            {galleryImages.length.toLocaleString("fa-IR")}
          </div>
        )}

        <div className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1.5 text-xs font-medium text-gray-700 shadow-sm backdrop-blur sm:bottom-4 sm:left-4">
          کد ملک: {formatNumber(product?.id)}
        </div>
      </div>

      {/* تصاویر گالری */}
      {galleryImages.length > 1 && (
        <div className="mt-3 flex gap-3 overflow-x-auto pb-2">
          {galleryImages.map((galleryImage, index) => {
            const isSelected = selectedImageIndex === index;

            return (
              <button
                key={`${galleryImage.id}-${galleryImage.image}`}
                type="button"
                onClick={() => setSelectedImageIndex(index)}
                aria-label={`نمایش تصویر ${index + 1}`}
                className={`relative h-20 w-24 shrink-0 cursor-pointer overflow-hidden rounded-xl bg-gray-100 transition sm:h-24 sm:w-28 ${
                  isSelected
                    ? "ring-2 ring-amber-400"
                    : "ring-1 ring-gray-200 hover:ring-amber-300"
                }`}
              >
                <Image
                  src={galleryImage.image}
                  alt={`${product?.title || "ویلا"} - تصویر ${index + 1}`}
                  fill
                  sizes="112px"
                  className="object-cover transition duration-300 hover:scale-105"
                />
              </button>
            );
          })}
        </div>
      )}

      {/* اطلاعات اصلی */}
      <div className="mt-6 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm sm:p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="min-w-0">
            <h1 className="text-xl font-extrabold leading-8 text-gray-900 sm:text-2xl">
              {product?.title || "ویلای بدون عنوان"}
            </h1>

            <div className="mt-2 flex items-center gap-2 text-sm text-gray-500">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"
                  stroke="currentColor"
                  strokeWidth="1.7"
                />
                <circle
                  cx="12"
                  cy="10"
                  r="2.5"
                  stroke="currentColor"
                  strokeWidth="1.7"
                />
              </svg>

              <span>{product?.location_display || "موقعیت ثبت نشده"}</span>
            </div>
          </div>

          <div className="shrink-0 rounded-xl bg-amber-50 px-4 py-3 text-amber-600">
            <p className="mb-1 text-xs text-gray-500">قیمت ملک</p>

            <p className="font-extrabold">{formatPrice(product?.price)}</p>
          </div>
        </div>
      </div>

      {/* مشخصات فنی */}
      <div>
        <h2 className="mb-4 mt-10 inline-block border-b-2 border-amber-400 pb-2 text-lg font-bold sm:text-[19px]">
          مشخصات ویلا
        </h2>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {specifications.map((item) => (
            <div
              key={item.key}
              className="rounded-2xl border border-gray-100 bg-white p-3 shadow-sm transition hover:border-amber-200 hover:shadow-md sm:p-4"
            >
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-amber-50 text-amber-500">
                {item.icon}
              </div>

              <p className="text-xs text-gray-400">{item.label}</p>

              <p className="mt-1 text-sm font-bold text-gray-800">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* امکانات */}
      {features.length > 0 && (
  <div>
    <h2 className="mb-4 mt-10 inline-block border-b-2 border-amber-400 pb-2 text-lg font-bold sm:text-[19px]">
      امکانات ملک
    </h2>

    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {features.map((feature) => (
        <div
          key={feature.key}
          className="flex items-center gap-3 rounded-2xl border border-gray-100 bg-white p-3 shadow-sm transition hover:border-amber-200 hover:shadow-md"
        >
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-500">
            {feature.icon}
          </div>

          <p className="text-sm font-semibold text-gray-800">
            {feature.label}
          </p>
        </div>
      ))}
    </div>
  </div>
)}
    </section>
  );
}
