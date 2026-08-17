"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function DetailVila({ product }) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const galleryImages = [
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

  const currentImage = galleryImages[selectedImageIndex] ?? galleryImages[0];
  const visibleImages = galleryImages.slice(0, 6);
  const remainingImagesCount = Math.max(galleryImages.length - 6, 0);

  useEffect(() => {
    setSelectedImageIndex(0);
  }, [product?.id]);

  const showPreviousImage = () => {
    if (galleryImages.length < 2) return;

    setSelectedImageIndex((currentIndex) =>
      currentIndex === 0 ? galleryImages.length - 1 : currentIndex - 1
    );
  };

  const showNextImage = () => {
    if (galleryImages.length < 2) return;

    setSelectedImageIndex((currentIndex) =>
      currentIndex === galleryImages.length - 1 ? 0 : currentIndex + 1
    );
  };

  const propertyFeatures = [
    {
      key: "deed",
      label: "سند",
      enabled: product?.deed,
      icon: (
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
          <path
            d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14 2v6h6M8 13h8M8 17h5"
            stroke="currentColor"
            strokeWidth="1.5"
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
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
          <path
            d="M5 12V8a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M4 11a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2M5 19v2M19 19v2"
            stroke="currentColor"
            strokeWidth="1.5"
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
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
          <path
            d="M3 16c1.5-1.5 3-1.5 4.5 0s3 1.5 4.5 0 3-1.5 4.5 0 3 1.5 4.5 0M3 20c1.5-1.5 3-1.5 4.5 0s3 1.5 4.5 0 3-1.5 4.5 0 3 1.5 4.5 0M7 13V5a2 2 0 0 1 4 0M7 9h7V5a2 2 0 0 1 4 0"
            stroke="currentColor"
            strokeWidth="1.5"
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
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
          <path
            d="M3 11 12 4l9 7M5 10v10h14V10"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 20v-5h6v5M12 4V2M16 5l2-2M8 5 6 3"
            stroke="currentColor"
            strokeWidth="1.5"
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
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
          <circle
            cx="12"
            cy="7"
            r="4"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M4 21a8 8 0 0 1 16 0M17 13.5l2 1 2-1v3.5c0 2-1.2 3.4-2 4-.8-.6-2-2-2-4v-3.5Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ].filter((feature) => feature.enabled);

  return (
    <section>
      {/* تصویر اصلی */}
      <div className="group relative h-[400px] overflow-hidden rounded-2xl bg-gray-100">
        {currentImage ? (
          <Image
            src={currentImage.image}
            alt={product?.title || "تصویر ویلا"}
            fill
            priority
            sizes="(min-width: 1280px) 1200px, 100vw"
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
              className="absolute left-4 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-black/45 text-white backdrop-blur-sm transition hover:scale-105 hover:bg-black/65"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
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
              className="absolute right-4 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-black/45 text-white backdrop-blur-sm transition hover:scale-105 hover:bg-black/65"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
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
          <div className="absolute right-4 top-4 z-10 rounded-full bg-black/50 px-3 py-1.5 text-[12px] text-white backdrop-blur">
            {selectedImageIndex + 1} / {galleryImages.length}
          </div>
        )}
      </div>

      {/* تصاویر کوچک گالری */}
      {visibleImages.length > 1 && (
        <div className="mt-3 grid grid-cols-3 gap-3 sm:grid-cols-6">
          {visibleImages.map((galleryImage, index) => {
            const isSelected = selectedImageIndex === index;
            const isLastVisibleImage = index === 5 && remainingImagesCount > 0;

            return (
              <button
                key={`${galleryImage.id}-${galleryImage.image}`}
                type="button"
                onClick={() => setSelectedImageIndex(index)}
                aria-label={`نمایش تصویر ${index + 1}`}
                className={`relative h-20 cursor-pointer overflow-hidden rounded-xl bg-gray-100 ${
                  isSelected
                    ? "ring-2 ring-amber-400"
                    : "ring-1 ring-transparent"
                }`}
              >
                <Image
                  src={galleryImage.image}
                  alt={`${product?.title || "ویلا"} - تصویر ${index + 1}`}
                  fill
                  sizes="(min-width: 640px) 16vw, 33vw"
                  className={`object-cover transition duration-300 hover:scale-105 ${
                    isLastVisibleImage ? "brightness-50" : ""
                  }`}
                />

                {isLastVisibleImage && (
                  <span className="absolute inset-0 flex items-center justify-center text-[15px] font-bold text-white">
                    +{remainingImagesCount}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      )}

      {/* ویژگی‌های ملک */}
      {propertyFeatures.length > 0 && (
        <div>
          <h2 className="mb-4 mt-10 inline-block border-b-2 border-amber-400 pb-2 text-[19px] font-bold">
            ویژگی‌های ملک
          </h2>

          <div className="flex flex-wrap gap-3">
            {propertyFeatures.map((feature) => (
              <span
                key={feature.key}
                className="flex h-11 items-center gap-2 rounded-xl border border-gray-200 px-4 text-[13.5px]"
              >
                <span className="flex text-amber-500">{feature.icon}</span>
                {feature.label}
              </span>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
