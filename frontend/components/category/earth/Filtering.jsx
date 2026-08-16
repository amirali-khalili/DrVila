"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const PRICE_OPTIONS = [1, 2, 5, 8, 10, 15, 20];
const AREA_OPTIONS = [200, 500, 1000, 2000, 5000];
const FILTER_KEYS = [
  "location",
  "min_price",
  "max_price",
  "min_land",
  "max_land",
  "features",
];
const EMPTY = {
  location: "",
  min_price: "",
  max_price: "",
  min_land: "",
  max_land: "",
  features: [],
};
const LOCATIONS = [
  { value: "soheiliyeh", label: "سهیلیه" },
  { value: "kordan", label: "کردان" },
  { value: "aghcheh-hesar", label: "آغچه‌حصار" },
  { value: "zakiabad", label: "زکی‌آباد" },
];
const FEATURES = [
  { value: "deed", label: "سنددار" },
  { value: "caretaker", label: "سرایداری" },
  { value: "in_urban_area", label: "داخل بافت" },
  { value: "has_utilities", label: "دارای آب، برق و گاز" },
];

function FilterIcon({ className = "h-5 w-5" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path
        strokeLinecap="round"
        d="M4 7h10M18 7h2M4 17h2M10 17h10M14 4v6M7 14v6"
      />
    </svg>
  );
}

function ModernDropdown({
  label,
  placeholder,
  value,
  options,
  onChange,
  disabled = false,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const selectedOption = options.find(
    (option) => String(option.value) === String(value)
  );

  useEffect(() => {
    const closeDropdown = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target))
        setIsOpen(false);
    };
    document.addEventListener("mousedown", closeDropdown);
    return () => document.removeEventListener("mousedown", closeDropdown);
  }, []);

  return (
    <div ref={dropdownRef} className="relative min-w-0">
      {label && (
        <label className="mb-2 block text-xs font-medium text-gray-500">
          {label}
        </label>
      )}
      <button
        type="button"
        disabled={disabled}
        onClick={() => setIsOpen((previous) => !previous)}
        className={`flex w-full cursor-pointer items-center justify-between gap-2 rounded-2xl border px-3 py-3 text-right text-sm transition-colors ${
          isOpen
            ? "border-brand-400 bg-brand-50/50"
            : "border-gray-200 bg-white hover:border-brand-300 hover:bg-brand-50/30"
        } ${
          disabled
            ? "cursor-not-allowed bg-gray-50 text-gray-400"
            : "text-gray-700"
        }`}
      >
        <span className="min-w-0 flex-1 whitespace-nowrap">
          {selectedOption?.label ?? placeholder}
        </span>
        <svg
          className={`h-4 w-4 shrink-0 transition-transform ${
            isOpen ? "rotate-180 text-brand-600" : "text-gray-400"
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
      {isOpen && !disabled && (
        <div className="absolute right-0 top-full z-50 mt-2 min-w-full overflow-hidden rounded-2xl border border-gray-200 bg-white p-2 shadow-[0_18px_50px_rgba(34,76,60,0.16)]">
          <button
            type="button"
            onClick={() => {
              onChange("");
              setIsOpen(false);
            }}
            className={`flex w-full items-center justify-between gap-3 whitespace-nowrap rounded-xl px-3 py-2.5 text-right text-sm transition-colors ${
              value === ""
                ? "bg-brand-50 font-semibold text-brand-700"
                : "text-gray-600 hover:bg-brand-50 hover:text-brand-700"
            }`}
          >
            <span>{placeholder}</span>
            {value === "" && (
              <span className="h-2 w-2 rounded-full bg-brand-500" />
            )}
          </button>
          {options.map((option) => {
            const selected = String(option.value) === String(value);
            return (
              <button
                key={option.value}
                type="button"
                onClick={() => {
                  onChange(String(option.value));
                  setIsOpen(false);
                }}
                className={`flex w-full items-center justify-between gap-3 whitespace-nowrap rounded-xl px-3 py-2.5 text-right text-sm transition-colors ${
                  selected
                    ? "bg-brand-50 font-semibold text-brand-700"
                    : "text-gray-700 hover:bg-brand-100 hover:text-brand-800"
                }`}
              >
                <span>{option.label}</span>
                {selected && (
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-500 text-xs text-white">
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

function readFromParams(searchParams) {
  return {
    location: searchParams.get("location") || "",
    min_price: searchParams.get("min_price") || "",
    max_price: searchParams.get("max_price") || "",
    min_land: searchParams.get("min_land") || "",
    max_land: searchParams.get("max_land") || "",
    features: (searchParams.get("features") || "").split(",").filter(Boolean),
  };
}

export default function Filtering({ mobile = false }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);
  const [filters, setFilters] = useState(() => readFromParams(searchParams));

  useEffect(() => setFilters(readFromParams(searchParams)), [searchParams]);
  useEffect(() => {
    if (!mobile || !isOpen) return;
    const oldOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = oldOverflow;
    };
  }, [isOpen, mobile]);

  // فقط فیلترهایی شمرده می‌شوند که واقعاً در URL اعمال شده‌اند.
  const appliedFilterCount = FILTER_KEYS.reduce((total, key) => {
    if (key === "features") {
      return (
        total +
        (searchParams.get("features") || "").split(",").filter(Boolean).length
      );
    }

    return total + (searchParams.get(key) ? 1 : 0);
  }, 0);

  const writeUrl = (next) => {
    const params = new URLSearchParams(searchParams.toString());
    FILTER_KEYS.forEach((key) => params.delete(key));
    Object.entries(next).forEach(([key, value]) => {
      if (key === "features") {
        if (value.length) params.set(key, value.join(","));
      } else if (value !== "") params.set(key, value);
    });
    params.delete("page");
    const query = params.toString();
    router.replace(query ? `${pathname}?${query}` : pathname, {
      scroll: false,
    });
  };

  const change = (name, value) => {
    const next = { ...filters, [name]: value };
    if (
      name === "min_price" &&
      next.max_price &&
      Number(next.max_price) <= Number(value)
    )
      next.max_price = "";
    if (
      name === "min_land" &&
      next.max_land &&
      Number(next.max_land) <= Number(value)
    )
      next.max_land = "";
    setFilters(next);
    if (!mobile) writeUrl(next);
  };

  const toggleFeature = (value) => {
    const features = filters.features.includes(value)
      ? filters.features.filter((item) => item !== value)
      : [...filters.features, value];
    const next = { ...filters, features };
    setFilters(next);
    if (!mobile) writeUrl(next);
  };

  const reset = () => {
    const next = { ...EMPTY, features: [] };
    setFilters(next);
    if (!mobile) writeUrl(next);
  };

  const applyMobileFilters = () => {
    writeUrl(filters);
    setIsOpen(false);
  };

  const resetMobileFilters = () => {
    const emptyFilters = {
      ...EMPTY,
      features: [],
    };

    setFilters(emptyFilters);
    setIsOpen(false);

    // تمام پارامترهای URL را حذف می‌کند
    router.replace(pathname, {
      scroll: false,
    });
  };

  const form = (
    <div className="space-y-6">
      <ModernDropdown
        label="منطقه"
        placeholder="همه مناطق"
        value={filters.location}
        options={LOCATIONS}
        onChange={(value) => change("location", value)}
      />

      <div>
        <h4 className="mb-2 text-sm font-semibold">
          بازه قیمت (میلیارد تومان)
        </h4>
        <div className="grid grid-cols-2 gap-3">
          <ModernDropdown
            placeholder="حداقل"
            value={filters.min_price}
            options={PRICE_OPTIONS.map((v) => ({
              value: v,
              label: `از ${v} میلیارد`,
            }))}
            onChange={(value) => change("min_price", value)}
          />
          <ModernDropdown
            placeholder="حداکثر"
            value={filters.max_price}
            options={PRICE_OPTIONS.filter(
              (v) => !filters.min_price || v > Number(filters.min_price)
            ).map((v) => ({ value: v, label: `تا ${v} میلیارد` }))}
            onChange={(value) => change("max_price", value)}
          />
        </div>
      </div>

      {[
        { title: "متراژ زمین (متر)", min: "min_land", max: "max_land" },
      ].map((group) => (
        <div key={group.min}>
          <h4 className="mb-2 text-sm font-semibold">{group.title}</h4>
          <div className="grid grid-cols-2 gap-3">
            <ModernDropdown
              placeholder="حداقل"
              value={filters[group.min]}
              options={AREA_OPTIONS.map((v) => ({
                value: v,
                label: `${v.toLocaleString("fa-IR")} متر`,
              }))}
              onChange={(value) => change(group.min, value)}
            />
            <ModernDropdown
              disabled={filters[group.min] === "5000"}
              placeholder={
                filters[group.min] === "5000" ? "گزینه‌ای نیست" : "حداکثر"
              }
              value={filters[group.max]}
              options={AREA_OPTIONS.filter(
                (v) => !filters[group.min] || v > Number(filters[group.min])
              ).map((v) => ({
                value: v,
                label: `${v.toLocaleString("fa-IR")} متر`,
              }))}
              onChange={(value) => change(group.max, value)}
            />
          </div>
        </div>
      ))}

      <div>
        <h4 className="mb-3 text-sm font-semibold">ویژگی‌ها</h4>
        <div className="space-y-2">
          {FEATURES.map((feature) => (
            <label
              key={feature.value}
              className="flex cursor-pointer items-center justify-between rounded-2xl border border-gray-100 px-4 py-3 text-sm"
            >
              <span>{feature.label}</span>
              <input
                type="checkbox"
                checked={filters.features.includes(feature.value)}
                onChange={() => toggleFeature(feature.value)}
                className="h-4 w-4 accent-brand-600"
              />
            </label>
          ))}
        </div>
      </div>
    </div>
  );

  if (mobile) {
    return (
      <>
        <button
          type="button"
          onClick={() => {
            setFilters(readFromParams(searchParams));
            setIsOpen(true);
          }}
          className={`relative flex h-11 flex-1 items-center justify-center gap-2 rounded-2xl border bg-white px-3 text-xs font-semibold shadow-sm ${
            appliedFilterCount
              ? "border-brand-400 text-brand-700"
              : "border-gray-200 text-gray-700"
          }`}
        >
          <FilterIcon />
          <span>فیلترها</span>
          {appliedFilterCount > 0 && (
            <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-brand-500 px-1 text-[10px] text-white">
              {appliedFilterCount.toLocaleString("fa-IR")}
            </span>
          )}
        </button>
        {isOpen && (
          <div
            className="filter-mobile-enter fixed inset-0 z-[100] bg-white lg:hidden"
            dir="rtl"
            role="dialog"
            aria-modal="true"
            aria-label="فیلتر زمین‌ها"
          >
            <div className="flex h-full flex-col">
              <header className="flex shrink-0 items-center justify-between border-b border-gray-100 px-5 py-4">
                <h3 className="text-lg font-extrabold">فیلترها</h3>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-full text-2xl text-gray-500 hover:bg-gray-100"
                >
                  ×
                </button>
              </header>
              <div className="flex-1 overflow-y-auto px-5 py-5">{form}</div>
              <footer className="grid shrink-0 grid-cols-[1fr_2fr] gap-3 border-t border-gray-200 bg-white p-4 pb-[max(16px,env(safe-area-inset-bottom))]">
                <button
                  type="button"
                  onClick={resetMobileFilters}
                  className="rounded-2xl border border-red-200 py-3 text-sm font-bold text-red-500 transition hover:bg-red-50"
                >
                  حذف فیلترها
                </button>{" "}
                <button
                  type="button"
                  onClick={applyMobileFilters}
                  className="rounded-2xl bg-red-500 py-3 text-sm font-bold text-white transition hover:bg-red-600 active:scale-[0.98]"
                >
                  اعمال فیلترها
                </button>
              </footer>
            </div>
          </div>
        )}
        <style jsx global>{`
          @keyframes filterMobileEnter {
            from {
              opacity: 0;
              transform: translateX(28px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          .filter-mobile-enter {
            animation: filterMobileEnter 260ms cubic-bezier(0.22, 0.8, 0.3, 1)
              both;
          }
          @media (prefers-reduced-motion: reduce) {
            .filter-mobile-enter {
              animation: none;
            }
          }
        `}</style>
      </>
    );
  }

  return (
    <div className="sticky top-28 hidden rounded-[24px] bg-white shadow-soft lg:block">
      <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4">
        <h3 className="text-lg font-bold">فیلترها</h3>
        <button
          type="button"
          onClick={reset}
          className="text-sm font-medium text-brand-600"
        >
          پاک کردن
        </button>
      </div>
      <div className="px-5 py-5">{form}</div>
    </div>
  );
}
