import React from "react";

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

export default function SideBar({ product }) {
  return (
    <aside className="space-y-4 lg:sticky lg:top-6">
      <div className="rounded-2xl border border-gray-200 bg-white p-5">
        {/* کد ملک و موقعیت */}
        <div className="mb-5 flex items-center justify-between gap-3">
          <span className="rounded-lg bg-gray-50 px-2.5 py-1.5 text-[11px] font-medium text-gray-500">
            کد ملک:{" "}
            {product?.id
              ? Number(product.id).toLocaleString("fa-IR")
              : "ثبت نشده"}
          </span>

          <div className="flex items-center gap-1.5 text-[12px] text-gray-500">
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
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

            {product?.location_display || "موقعیت ثبت نشده"}
          </div>
        </div>

        {/* عنوان */}
        <h1 className="mb-4 text-[19px] font-bold leading-8 text-gray-900">
          {product?.title || "زمین بدون عنوان"}
        </h1>

        {/* قیمت */}
        <div className="mb-5 border-y border-gray-100 py-4">
          <p className="mb-1 text-[11px] text-gray-400">
            قیمت زمین
          </p>

          <p className="text-[20px] font-extrabold text-amber-500">
            {formatPrice(product?.price)}
          </p>
        </div>

        {/* اطلاعات آگهی */}
        <div className="mb-5">
          <h2 className="mb-3 text-[13px] font-bold text-gray-800">
            اطلاعات آگهی
          </h2>

          <dl className="space-y-3">
            <div className="flex items-center justify-between gap-3">
              <dt className="text-[12px] text-gray-400">
                تاریخ ثبت
              </dt>

              <dd className="text-left text-[12px] font-medium text-gray-700">
                {formatDate(product?.created_at)}
              </dd>
            </div>

            <div className="flex items-center justify-between gap-3">
              <dt className="text-[12px] text-gray-400">
                آخرین به‌روزرسانی
              </dt>

              <dd className="text-left text-[12px] font-medium text-gray-700">
                {formatDate(product?.updated_at)}
              </dd>
            </div>
          </dl>
        </div>

        {/* تماس */}
        <a
          href="tel:09991887858"
          aria-label="دریافت مشاوره برای خرید زمین"
          className="flex h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#171717] text-[14px] font-semibold text-white transition-colors duration-200 hover:bg-black"
        >
          دریافت مشاوره

          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>

        {/* پیام اعتماد */}
        <div className="mt-4 flex items-start gap-2 border-t border-gray-100 pt-4">
          <svg
            className="mt-0.5 shrink-0 text-gray-400"
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinejoin="round"
            />
            <path
              d="m9 12 2 2 4-4"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <p className="text-[11px] leading-5 text-gray-400">
            برای بررسی وضعیت سند، بافت و انشعابات زمین با مشاور
            ملک تماس بگیرید.
          </p>
        </div>
      </div>
    </aside>
  );
}