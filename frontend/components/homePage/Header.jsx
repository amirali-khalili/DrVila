"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const PRICE_OPTIONS = [
  { value: "1", label: "از ۱ میلیارد" },
  { value: "2", label: "از ۲ میلیارد" },
  { value: "5", label: "از ۵ میلیارد" },
  { value: "8", label: "از ۸ میلیارد" },
  { value: "10", label: "از ۱۰ میلیارد" },
  { value: "15", label: "از ۱۵ میلیارد" },
  { value: "20", label: "از ۲۰ میلیارد" },
];

const AREA_OPTIONS = [
  { value: "200", label: "از ۲۰۰ متر" },
  { value: "500", label: "از ۵۰۰ متر" },
  { value: "1000", label: "از ۱٬۰۰۰ متر" },
  { value: "2000", label: "از ۲٬۰۰۰ متر" },
  { value: "5000", label: "از ۵٬۰۰۰ متر" },
];

const LOCATION_OPTIONS = [
  { value: "soheiliyeh", label: "سهیلیه" },
  { value: "kordan", label: "کردان" },
  { value: "aghcheh-hesar", label: "آغچه‌حصار" },
  { value: "zakiabad", label: "زکی‌آباد" },
];

const PROPERTY_OPTIONS = [
  { value: "villas", label: "ویلا" },
  { value: "earths", label: "زمین" },
  { value: "gardens", label: "باغ" },
];

function HeaderDropdown({ value, placeholder, options, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const selectedOption = options.find((option) => option.value === value);

  useEffect(() => {
    const closeDropdown = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", closeDropdown);

    return () => {
      document.removeEventListener("mousedown", closeDropdown);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative">
      <button
        type="button"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((previous) => !previous)}
        className={`flex w-full cursor-pointer items-center justify-between gap-2 rounded-xl border bg-white px-3 py-3 text-right text-sm text-gray-600 outline-none transition-colors ${
          isOpen
            ? "border-[var(--gold)]"
            : "border-gray-200 hover:border-[var(--gold)]"
        }`}
      >
        <span className="min-w-0 flex-1 whitespace-nowrap">
          {selectedOption?.label ?? placeholder}
        </span>

        <svg
          className={`h-4 w-4 shrink-0 text-gray-400 transition-transform ${
            isOpen ? "rotate-180 text-[var(--gold)]" : ""
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
        <div className="absolute right-0 top-full z-50 mt-2 min-w-full overflow-hidden rounded-2xl border border-gray-200 bg-white p-2 shadow-[0_18px_50px_rgba(31,35,25,0.16)]">
          <button
            type="button"
            onClick={() => {
              onChange("");
              setIsOpen(false);
            }}
            className={`flex w-full cursor-pointer items-center justify-between gap-3 whitespace-nowrap rounded-xl px-3 py-2.5 text-right text-sm transition-colors ${
              value === ""
                ? "bg-amber-50 font-semibold text-amber-800"
                : "text-gray-600 hover:bg-amber-50 hover:text-amber-800"
            }`}
          >
            <span>{placeholder}</span>

            {value === "" && (
              <span className="h-2 w-2 rounded-full bg-[var(--gold)]" />
            )}
          </button>

          {options.map((option) => {
            const isSelected = option.value === value;

            return (
              <button
                key={option.value}
                type="button"
                onClick={() => {
                  onChange(option.value);
                  setIsOpen(false);
                }}
                className={`flex w-full cursor-pointer items-center justify-between gap-3 whitespace-nowrap rounded-xl px-3 py-2.5 text-right text-sm transition-colors ${
                  isSelected
                    ? "bg-amber-50 font-semibold text-amber-800"
                    : "text-gray-700 hover:bg-amber-50 hover:text-amber-800"
                }`}
              >
                <span>{option.label}</span>

                {isSelected && (
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--gold)] text-xs text-white">
                    ✓
                  </span>
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default function Header() {
  const router = useRouter();

  const [filters, setFilters] = useState({
    min_price: "",
    min_land: "",
    location: "",
    property_type: "villas",
  });

  const changeFilter = (name, value) => {
    setFilters((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSearch = () => {
    const params = new URLSearchParams();

    if (filters.min_price) {
      params.set("min_price", filters.min_price);
    }

    if (filters.min_land) {
      params.set("min_land", filters.min_land);
    }

    if (filters.location) {
      params.set("location", filters.location);
    }

    const propertyPaths = {
      villas: "/villas",
      earths: "/earths",
      gardens: "/gardens",
    };

    const pathname = propertyPaths[filters.property_type] || "/villas";

    const queryString = params.toString();

    router.push(queryString ? `${pathname}?${queryString}` : pathname);
  };

  return (
    <div>
      <section className="relative min-h-[760px] overflow-visible pb-28">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <Image
            src="/images/header-bg-homaPage.webp"
            alt="ویلای لوکس در سهیلیه کرج"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />

          {/* لایه تیره روی تصویر برای خوانایی متن */}
          <div className="absolute inset-0 bg-gradient-to-l from-black/75 via-black/45 to-black/20" />
        </div>
        <div className="mx-auto max-w-7xl px-6 pt-40">
          <div className="max-w-xl">
            <h1 className="text-4xl font-extrabold leading-[1.35] text-white md:text-5xl">
              خانه‌ای برای آرامش،
              <br />
              <span className="text-[var(--gold-light)]">سرمایه‌ای</span> برای
              آینده
            </h1>

            <p className="mt-5 max-w-md leading-8 text-white/80">
              خرید و فروش تخصصی ویلا و زمین در سهیلیه کرج
              <br />
              با همراهی مشاوران حرفه‌ای دکتر ویلا
            </p>

            <div className="mt-8 flex items-center gap-4">
              <Link href="/villas">
                <button className=" cursor-pointer gold-grad flex items-center gap-2 rounded-full px-6 py-3.5 font-semibold text-[#241c0c] shadow-lg transition hover:brightness-110">
                  مشاهده ویلاها
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M19 12H5M12 19l-7-7 7-7" />
                  </svg>
                </button>
              </Link>

              <a
                href="tel:09991887858"
                className="flex items-center gap-2 rounded-full border border-white/50 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10"
              >
                دریافت مشاوره
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="absolute -bottom-16 inset-x-0">
          <div className="mx-auto max-w-5xl rounded-3xl bg-white px-8 py-7 shadow-2xl">
            <div className="mb-6 text-center">
              <h3 className="inline-flex items-center gap-2 text-lg font-bold text-[#232821]">
                جستجوی ملک رویایی شما
              </h3>

              <div className="mt-1 flex items-center justify-center gap-2">
                <span className="h-px w-6 bg-[var(--gold)]" />
                <span className="h-1.5 w-1.5 rotate-45 bg-[var(--gold)]" />
                <span className="h-px w-6 bg-[var(--gold)]" />
              </div>
            </div>

            <div className="grid grid-cols-2 items-end gap-4 md:grid-cols-5">
              <div className="order-4">
                <label className="mb-1.5 block text-xs text-gray-400">
                  حداقل بودجه
                </label>

                <HeaderDropdown
                  placeholder="انتخاب کنید"
                  value={filters.min_price}
                  options={PRICE_OPTIONS}
                  onChange={(value) => changeFilter("min_price", value)}
                />
              </div>

              <div className="order-3">
                <label className="mb-1.5 block text-xs text-gray-400">
                  حداقل متراژ
                </label>

                <HeaderDropdown
                  placeholder="انتخاب کنید"
                  value={filters.min_land}
                  options={AREA_OPTIONS}
                  onChange={(value) => changeFilter("min_land", value)}
                />
              </div>

              <div className="order-2">
                <label className="mb-1.5 block text-xs text-gray-400">
                  موقعیت
                </label>

                <HeaderDropdown
                  placeholder="همه مناطق"
                  value={filters.location}
                  options={LOCATION_OPTIONS}
                  onChange={(value) => changeFilter("location", value)}
                />
              </div>

              <div className="order-1">
                <label className="mb-1.5 block text-xs text-gray-400">
                  نوع ملک
                </label>

                <HeaderDropdown
                  placeholder="انتخاب کنید"
                  value={filters.property_type}
                  options={PROPERTY_OPTIONS}
                  onChange={(value) => changeFilter("property_type", value)}
                />
              </div>

              <div className="order-5">
                <button
                  type="button"
                  onClick={handleSearch}
                  className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#1f2319] py-3.5 font-semibold text-white transition hover:bg-[#2b3123]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.35-4.35" />
                  </svg>
                  جستجو
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
