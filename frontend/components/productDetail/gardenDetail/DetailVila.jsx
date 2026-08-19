"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

function formatNumber(value) {
  if (value === null || value === undefined || value === "") {
    return "ثبت نشده";
  }

  return Number(value).toLocaleString("fa-IR");
}

function LandIcon() {
  return (
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
  );
}

function DeedIcon() {
  return (
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
  );
}

function CaretakerIcon() {
  return (
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
  );
}

function UrbanAreaIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M3 21V9l6-4 6 4v12M15 12l3-2 3 2v9M1 21h22"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 12h4M7 16h4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function UtilitiesIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="m13 2-8 12h7l-1 8 8-12h-7l1-8Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function DetailVila({ product }) {
  const [selectedImageIndex, setSelectedImageIndex] =
    useState(0);

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

    return images.filter(
      (item, index, array) =>
        item?.image &&
        array.findIndex(
          (otherItem) => otherItem.image === item.image
        ) === index
    );
  }, [product]);

  const currentImage =
    galleryImages[selectedImageIndex] ?? galleryImages[0];

  useEffect(() => {
    setSelectedImageIndex(0);
  }, [product?.id]);

  function showPreviousImage() {
    if (galleryImages.length < 2) return;

    setSelectedImageIndex((currentIndex) =>
      currentIndex === 0
        ? galleryImages.length - 1
        : currentIndex - 1
    );
  }

  function showNextImage() {
    if (galleryImages.length < 2) return;

    setSelectedImageIndex((currentIndex) =>
      currentIndex === galleryImages.length - 1
        ? 0
        : currentIndex + 1
    );
  }

  const specifications = [
    {
      key: "land_area",
      label: "مساحت باغ",
      value: `${formatNumber(product?.land_area)} متر`,
      icon: <LandIcon />,
    },
  ];

  const features = [
    {
      key: "deed",
      label: "دارای سند",
      enabled: product?.deed,
      icon: <DeedIcon />,
    },
    {
      key: "caretaker",
      label: "دارای سرایدار",
      enabled: product?.caretaker,
      icon: <CaretakerIcon />,
    },
    {
      key: "in_urban_area",
      label: "داخل بافت شهری",
      enabled: product?.in_urban_area,
      icon: <UrbanAreaIcon />,
    },
    {
      key: "has_utilities",
      label: "دارای انشعابات",
      enabled: product?.has_utilities,
      icon: <UtilitiesIcon />,
    },
  ].filter((feature) => Boolean(feature.enabled));

  return (
    <section className="min-w-0">
      {/* تصویر اصلی */}
      <div className="group relative h-[260px] overflow-hidden rounded-2xl bg-gray-100 sm:h-[360px] lg:h-[430px]">
        {currentImage ? (
          <Image
            src={currentImage.image}
            alt={product?.title || "تصویر باغ"}
            fill
            priority
            sizes="(min-width: 1024px) 850px, 100vw"
            className="object-cover"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-gray-400">
            تصویری برای این باغ ثبت نشده است
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
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
              >
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
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
              >
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
            const isSelected =
              selectedImageIndex === index;

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
                  alt={`${product?.title || "باغ"} - تصویر ${
                    index + 1
                  }`}
                  fill
                  sizes="112px"
                  className="object-cover transition duration-300 hover:scale-105"
                />
              </button>
            );
          })}
        </div>
      )}

      {/* مشخصات باغ */}
      <div>
        <h2 className="mb-4 mt-10 inline-block border-b-2 border-amber-400 pb-2 text-lg font-bold sm:text-[19px]">
          مشخصات باغ
        </h2>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {specifications.map((item) => (
            <div
              key={item.key}
              className="flex items-center gap-3 rounded-2xl border border-gray-100 bg-white p-3 shadow-sm transition hover:border-amber-200 hover:shadow-md"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-500">
                {item.icon}
              </div>

              <div className="flex min-w-0 flex-1 items-center justify-between gap-2">
                <p className="text-xs text-gray-500">
                  {item.label}
                </p>

                <p className="shrink-0 text-sm font-bold text-gray-800">
                  {item.value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* امکانات فعال */}
      {features.length > 0 && (
        <div>
          <h2 className="mb-4 mt-10 inline-block border-b-2 border-amber-400 pb-2 text-lg font-bold sm:text-[19px]">
            امکانات باغ
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

      {/* توضیحات */}
      <div>
        <h2 className="mb-4 mt-10 inline-block border-b-2 border-amber-400 pb-2 text-lg font-bold sm:text-[19px]">
          توضیحات باغ
        </h2>

        <div className="rounded-2xl border border-gray-200 bg-white p-5">
          {product?.description ? (
            <p className="whitespace-pre-line text-[14px] leading-8 text-gray-600">
              {product.description}
            </p>
          ) : (
            <p className="text-[13px] text-gray-400">
              توضیحی برای این باغ ثبت نشده است.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}