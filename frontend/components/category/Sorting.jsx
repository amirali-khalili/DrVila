"use client";

import { useEffect, useRef, useState } from "react";
import {
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";

const SORT_OPTIONS = [
  { value: "", label: "پیش‌فرض" },
  { value: "newest", label: "جدیدترین" },
  { value: "price-asc", label: "ارزان‌ترین" },
  { value: "price-desc", label: "گران‌ترین" },
  { value: "land-desc", label: "بیشترین متراژ زمین" },
  { value: "land-asc", label: "کمترین متراژ زمین" },
  { value: "build-desc", label: "بیشترین زیربنا" },
  { value: "build-asc", label: "کمترین زیربنا" },
];

export default function Sorting({ count = 0 }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const dropdownRef = useRef(null);

  const [isOpen, setIsOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState(
  searchParams.get("sort") || "",
);

 useEffect(() => {
  setSelectedSort(searchParams.get("sort") || "");
}, [searchParams]);

  useEffect(() => {
    const closeDropdown = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", closeDropdown);

    return () => {
      document.removeEventListener("mousedown", closeDropdown);
    };
  }, []);

  const changeSorting = (value) => {
  const params = new URLSearchParams(searchParams.toString());

  if (value === "") {
    // با انتخاب پیش‌فرض، فقط پارامتر sort حذف می‌شود
    params.delete("sort");
  } else {
    params.set("sort", value);
  }

  params.delete("page");

  setSelectedSort(value);
  setIsOpen(false);

  const queryString = params.toString();

  router.replace(
    queryString ? `${pathname}?${queryString}` : pathname,
    { scroll: false },
  );
};

 const selectedOption =
  SORT_OPTIONS.find(
    (option) => option.value === selectedSort,
  ) || SORT_OPTIONS[0];

  return (
    <div className="mb-6 rounded-[24px] bg-white p-4 shadow-soft md:p-5">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h2 className="text-xl font-bold">لیست ویلاها</h2>

          
        </div>

        <div className="flex flex-col gap-3 md:flex-row md:items-center">
          

          <div className="flex items-center gap-3">
            <span className="shrink-0 text-sm text-gray-500">
              مرتب‌سازی:
            </span>

            <div
              ref={dropdownRef}
              className="relative min-w-[210px]"
            >
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => setIsOpen((previous) => !previous)}
                className={`flex w-full cursor-pointer items-center justify-between gap-3 whitespace-nowrap rounded-2xl border bg-white px-4 py-2.5 text-right text-sm text-gray-700 outline-none transition-colors ${
                  isOpen
                    ? "border-brand-400"
                    : "border-gray-200 hover:border-brand-300"
                }`}
              >
                <span>{selectedOption.label}</span>

                <svg
                  className={`h-4 w-4 shrink-0 text-gray-400 transition-transform ${
                    isOpen
                      ? "rotate-180 text-brand-600"
                      : ""
                  }`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.168l3.71-3.938a.75.75 0 1 1 1.08 1.04l-4.25 4.5a.75.75 0 0 1-1.08 0l-4.25-4.5a.75.75 0 0 1 .02-1.06Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {isOpen && (
                <div className="absolute left-0 top-full z-50 mt-2 w-full min-w-[230px] overflow-hidden rounded-2xl border border-gray-200 bg-white p-2 shadow-[0_18px_50px_rgba(34,76,60,0.16)]">
                  {SORT_OPTIONS.map((option) => {
                    const isSelected =
                      selectedSort === option.value;

                    return (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() =>
                          changeSorting(option.value)
                        }
                        className={`flex w-full cursor-pointer items-center justify-between gap-3 whitespace-nowrap rounded-xl px-3 py-2.5 text-right text-sm transition-colors ${
                          isSelected
                            ? "bg-brand-50 font-semibold text-brand-700"
                            : "text-gray-700 hover:bg-brand-100 hover:text-brand-800"
                        }`}
                      >
                        <span>{option.label}</span>

                        {isSelected && (
                          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-500 text-xs text-white">
                            ✓
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}