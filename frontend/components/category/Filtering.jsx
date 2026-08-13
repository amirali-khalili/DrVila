// import React from 'react'

// export default function Filtering() {
//   return (
//  <div className="sticky top-28 overflow-hidden rounded-[24px] bg-white shadow-soft">
//             <div className="border-b border-gray-100 px-5 py-4">
//               <div className="flex items-center justify-between">
//                 <h3 className="text-lg font-bold">فیلترها</h3>
//                 <button
//                   id="resetBtn"
//                   className="text-sm font-medium text-brand-600 hover:text-brand-700"
//                 >
//                   پاک کردن
//                 </button>
//               </div>
//             </div>

//             <div className="filter-scroll max-h-[calc(100vh-9rem)] space-y-6 overflow-y-auto px-5 py-5">
//               <div>
//                 <label className="mb-2 block text-sm font-semibold">
//                   منطقه
//                 </label>
//                 <select
//                   id="locationFilter"
//                   className="w-full rounded-2xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-brand-400"
//                 >
//                   <option value="">همه مناطق</option>
//                   <option value="سهیلیه">سهیلیه</option>
//                   <option value="کردان">کردان</option>
//                   <option value="آغچه‌حصار">آغچه‌حصار</option>
//                   <option value="زکی‌آباد">زکی‌آباد</option>
//                 </select>
//               </div>

//               <div>
//                 <label className="mb-2 block text-sm font-semibold">
//                   بازه قیمت (میلیارد تومان)
//                 </label>
//                 <div className="grid grid-cols-2 gap-3">
//                   <input
//                     id="minPrice"
//                     type="number"
//                     min="0"
//                     placeholder="حداقل"
//                     className="rounded-2xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-brand-400"
//                   />
//                   <input
//                     id="maxPrice"
//                     type="number"
//                     min="0"
//                     placeholder="حداکثر"
//                     className="rounded-2xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-brand-400"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label className="mb-2 block text-sm font-semibold">
//                   متراژ زمین (متر)
//                 </label>
//                 <div className="grid grid-cols-2 gap-3">
//                   <input
//                     id="minLand"
//                     type="number"
//                     min="0"
//                     placeholder="از"
//                     className="rounded-2xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-brand-400"
//                   />
//                   <input
//                     id="maxLand"
//                     type="number"
//                     min="0"
//                     placeholder="تا"
//                     className="rounded-2xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-brand-400"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label className="mb-2 block text-sm font-semibold">
//                   زیربنا (متر)
//                 </label>
//                 <div className="grid grid-cols-2 gap-3">
//                   <input
//                     id="minBuild"
//                     type="number"
//                     min="0"
//                     placeholder="از"
//                     className="rounded-2xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-brand-400"
//                   />
//                   <input
//                     id="maxBuild"
//                     type="number"
//                     min="0"
//                     placeholder="تا"
//                     className="rounded-2xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-brand-400"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label className="mb-3 block text-sm font-semibold">
//                   تعداد خواب
//                 </label>
//                 <div className="grid grid-cols-3 gap-2 text-sm">
//                   <label className="flex cursor-pointer items-center justify-center rounded-2xl border border-gray-200 px-3 py-2.5">
//                     <input
//                       type="radio"
//                       name="beds"
//                       value=""
//                       className="ml-2"
//                       defaultChecked
//                     />
//                     همه
//                   </label>
//                   <label className="flex cursor-pointer items-center justify-center rounded-2xl border border-gray-200 px-3 py-2.5">
//                     <input
//                       type="radio"
//                       name="beds"
//                       value="2"
//                       className="ml-2"
//                     />
//                     ۲+
//                   </label>
//                   <label className="flex cursor-pointer items-center justify-center rounded-2xl border border-gray-200 px-3 py-2.5">
//                     <input
//                       type="radio"
//                       name="beds"
//                       value="3"
//                       className="ml-2"
//                     />
//                     ۳+
//                   </label>
//                   <label className="flex cursor-pointer items-center justify-center rounded-2xl border border-gray-200 px-3 py-2.5">
//                     <input
//                       type="radio"
//                       name="beds"
//                       value="4"
//                       className="ml-2"
//                     />
//                     ۴+
//                   </label>
//                 </div>
//               </div>

//               <div>
//                 <label className="mb-3 block text-sm font-semibold">
//                   ویژگی‌ها
//                 </label>
//                 <div className="space-y-3 text-sm text-gray-700">
//                   <label className="flex items-center justify-between rounded-2xl border border-gray-100 px-4 py-3">
//                     <span>استخر</span>
//                     <input
//                       type="checkbox"
//                       value="pool"
//                       className="feature-check h-4 w-4 accent-brand-600"
//                     />
//                   </label>
//                   <label className="flex items-center justify-between rounded-2xl border border-gray-100 px-4 py-3">
//                     <span>سنددار</span>
//                     <input
//                       type="checkbox"
//                       value="deed"
//                       className="feature-check h-4 w-4 accent-brand-600"
//                     />
//                   </label>
//                   <label className="flex items-center justify-between rounded-2xl border border-gray-100 px-4 py-3">
//                     <span>مبله</span>
//                     <input
//                       type="checkbox"
//                       value="furnished"
//                       className="feature-check h-4 w-4 accent-brand-600"
//                     />
//                   </label>
//                   <label className="flex items-center justify-between rounded-2xl border border-gray-100 px-4 py-3">
//                     <span>سرایداری</span>
//                     <input
//                       type="checkbox"
//                       value="caretaker"
//                       className="feature-check h-4 w-4 accent-brand-600"
//                     />
//                   </label>
//                   <label className="flex items-center justify-between rounded-2xl border border-gray-100 px-4 py-3">
//                     <span>روف‌گاردن</span>
//                     <input
//                       type="checkbox"
//                       value="roof"
//                       className="feature-check h-4 w-4 accent-brand-600"
//                     />
//                   </label>
//                 </div>
//               </div>

//               <button
//                 id="applyBtn"
//                 className="w-full rounded-2xl bg-pine px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#21483a]"
//               >
//                 اعمال فیلترها
//               </button>
//             </div>
//           </div>  )
// }
"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const PRICE_OPTIONS = [1, 2, 5, 8, 10, 15, 20];
const AREA_OPTIONS = [200, 500, 1000, 2000, 5000];

const EMPTY_FILTERS = {
  location: "",
  min_price: "",
  max_price: "",
  min_land: "",
  max_land: "",
  min_build: "",
  max_build: "",
  beds: "",
  features: [],
};

const FILTER_KEYS = [
  "location",
  "min_price",
  "max_price",
  "min_land",
  "max_land",
  "min_build",
  "max_build",
  "beds",
  "features",
];

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
    (option) => String(option.value) === String(value),
  );

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
            className={`flex w-full cursor-pointer items-center justify-between gap-3 whitespace-nowrap rounded-xl px-3 py-2.5 text-right text-sm transition-colors ${
              value === ""
                ? "bg-brand-50 font-semibold text-brand-700"
                : "text-gray-600 hover:bg-brand-50 hover:text-brand-700"
            }`}
          >
            <span>{placeholder}</span>

            {value === "" && (
              <span className="h-2 w-2 shrink-0 rounded-full bg-brand-500" />
            )}
          </button>

          {options.map((option) => {
            const isSelected = String(option.value) === String(value);

            return (
              <button
                key={option.value}
                type="button"
                onClick={() => {
                  onChange(String(option.value));
                  setIsOpen(false);
                }}
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
  );
}

export default function Filtering() {
  const changeAreaFilter = (name, value) => {
  const nextFilters = {
    ...filtersRef.current,
    [name]: value,
  };

  if (
    name === "min_land" &&
    nextFilters.max_land &&
    Number(nextFilters.max_land) <= Number(value)
  ) {
    nextFilters.max_land = "";
  }

  if (
    name === "min_build" &&
    nextFilters.max_build &&
    Number(nextFilters.max_build) <= Number(value)
  ) {
    nextFilters.max_build = "";
  }

  applyFilters(nextFilters, true);
};

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const timeoutRef = useRef(null);

  const readFiltersFromUrl = () => ({
    location: searchParams.get("location") ?? "",
    min_price: searchParams.get("min_price") ?? "",
    max_price: searchParams.get("max_price") ?? "",
    min_land: searchParams.get("min_land") ?? "",
    max_land: searchParams.get("max_land") ?? "",
    min_build: searchParams.get("min_build") ?? "",
    max_build: searchParams.get("max_build") ?? "",
    beds: searchParams.get("beds") ?? "",
    features: searchParams.get("features")
      ? searchParams.get("features").split(",").filter(Boolean)
      : [],
  });

  const [filters, setFilters] = useState(readFiltersFromUrl);
  const filtersRef = useRef(filters);

  const updateUrl = (nextFilters) => {
    const params = new URLSearchParams(searchParams.toString());

    FILTER_KEYS.forEach((key) => {
      params.delete(key);
    });

    Object.entries(nextFilters).forEach(([key, value]) => {
      if (key === "features") {
        if (value.length > 0) {
          params.set("features", value.join(","));
        }

        return;
      }

      if (value !== "") {
        params.set(key, String(value));
      }
    });

    // با اعمال هر فیلتر، صفحه‌بندی به صفحه اول برمی‌گردد
    params.delete("page");

    const queryString = params.toString();

    router.replace(queryString ? `${pathname}?${queryString}` : pathname, {
      scroll: false,
    });
  };

  const applyFilters = (nextFilters, immediate = false) => {
    filtersRef.current = nextFilters;
    setFilters(nextFilters);

    clearTimeout(timeoutRef.current);

    if (immediate) {
      updateUrl(nextFilters);
      return;
    }

    // جلوگیری از ارسال درخواست هنگام کلیک‌های متوالی
    timeoutRef.current = setTimeout(() => {
      updateUrl(filtersRef.current);
    }, 500);
  };

  const changeFilter = (name, value, immediate = false) => {
    const nextFilters = {
      ...filtersRef.current,
      [name]: value,
    };

    // حداکثر قیمت نامعتبر پاک می‌شود
    if (
      name === "min_price" &&
      nextFilters.max_price !== "" &&
      Number(nextFilters.max_price) <= Number(value)
    ) {
      nextFilters.max_price = "";
    }

    applyFilters(nextFilters, immediate);
  };

  const changeNumberFilter = (name, rawValue) => {
    let value = rawValue;

    if (rawValue !== "") {
      value = String(Math.max(0, Number(rawValue)));
    }

    const nextFilters = {
      ...filtersRef.current,
      [name]: value,
    };

    /*
     * اگر کف متراژ انتخاب شود و سقف خالی یا نامعتبر باشد،
     * سقف به‌صورت خودکار ۵۰ متر بیشتر قرار می‌گیرد.
     */
    

    if (name === "max_land" && value !== "") {
      const minimumMaximum = Number(nextFilters.min_land || 0) + 50;

      nextFilters.max_land = String(Math.max(Number(value), minimumMaximum));
    }

    // همین اعتبارسنجی برای زیربنا نیز اعمال می‌شود
   

    if (name === "max_build" && value !== "") {
      const minimumMaximum = Number(nextFilters.min_build || 0) + 50;

      nextFilters.max_build = String(Math.max(Number(value), minimumMaximum));
    }

    applyFilters(nextFilters);
  };

  const toggleFeature = (feature) => {
    const currentFeatures = filtersRef.current.features;

    const features = currentFeatures.includes(feature)
      ? currentFeatures.filter((item) => item !== feature)
      : [...currentFeatures, feature];

    applyFilters(
      {
        ...filtersRef.current,
        features,
      },
      true,
    );
  };

  const resetFilters = () => {
    clearTimeout(timeoutRef.current);

    const emptyFilters = {
      ...EMPTY_FILTERS,
      features: [],
    };

    filtersRef.current = emptyFilters;
    setFilters(emptyFilters);

    const params = new URLSearchParams(searchParams.toString());

    FILTER_KEYS.forEach((key) => {
      params.delete(key);
    });

    params.delete("page");

    const queryString = params.toString();

    router.replace(queryString ? `${pathname}?${queryString}` : pathname, {
      scroll: false,
    });
  };

  useEffect(() => {
    const urlFilters = readFiltersFromUrl();

    filtersRef.current = urlFilters;
    setFilters(urlFilters);
  }, [searchParams]);

  useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, []);

  const minimumPriceOptions = PRICE_OPTIONS.map((price) => ({
    value: price,
    label: `از ${price} میلیارد`,
  }));

  const maximumPriceOptions = PRICE_OPTIONS.filter((price) => {
    if (!filters.min_price) return true;

    return price > Number(filters.min_price);
  }).map((price) => ({
    value: price,
    label: `تا ${price} میلیارد`,
  }));

  const featureOptions = [
    { value: "pool", label: "استخر" },
    { value: "deed", label: "سنددار" },
    { value: "furnished", label: "مبله" },
    { value: "caretaker", label: "سرایداری" },
    { value: "roof", label: "روف‌گاردن" },
  ];
  const locationOptions = [
    { value: "سهیلیه", label: "سهیلیه" },
    { value: "کردان", label: "کردان" },
    { value: "آغچه‌حصار", label: "آغچه‌حصار" },
    { value: "زکی‌آباد", label: "زکی‌آباد" },
  ];

const minimumLandOptions = AREA_OPTIONS.map((area) => ({
  value: area,
  label: `${area.toLocaleString("fa-IR")} متر`,
}));

const maximumLandOptions = AREA_OPTIONS.filter(
  (area) =>
    !filters.min_land || area > Number(filters.min_land),
).map((area) => ({
  value: area,
  label: `${area.toLocaleString("fa-IR")} متر`,
}));

const minimumBuildOptions = AREA_OPTIONS.map((area) => ({
  value: area,
  label: `${area.toLocaleString("fa-IR")} متر`,
}));

const maximumBuildOptions = AREA_OPTIONS.filter(
  (area) =>
    !filters.min_build || area > Number(filters.min_build),
).map((area) => ({
  value: area,
  label: `${area.toLocaleString("fa-IR")} متر`,
}));

  return (
    <div className="sticky top-28 rounded-[24px] bg-white shadow-soft">
      <div className="border-b border-gray-100 px-5 py-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold">فیلترها</h3>

<button
  type="button"
  onClick={resetFilters}
  className="cursor-pointer rounded-full border border-transparent px-4 py-2 text-sm font-medium text-brand-600 transition-all duration-200 hover:border-brand-400 hover:bg-brand-50 hover:text-brand-700 hover:ring-1 hover:ring-brand-200"
>
  پاک کردن
</button>
        </div>
      </div>

      {/* اسکرول داخلی کاملاً حذف شده است */}
      <div className="space-y-6 px-5 py-5">
        {/* منطقه */}
        <div>
          <label
            htmlFor="locationFilter"
            className="mb-2 block text-sm font-semibold"
          >
            منطقه
          </label>

          <div>
            <ModernDropdown
              placeholder="همه مناطق"
              value={filters.location}
              options={locationOptions}
              onChange={(value) => changeFilter("location", value, true)}
            />
          </div>
        </div>

        {/* قیمت */}
        <div>
          <label className="mb-2 block text-sm font-semibold">
            بازه قیمت (میلیارد تومان)
          </label>

          <div className="grid grid-cols-2 gap-3">
            <ModernDropdown
              placeholder="حداقل"
              value={filters.min_price}
              options={minimumPriceOptions}
              onChange={(value) => changeFilter("min_price", value, true)}
            />

            <ModernDropdown
              placeholder="حداکثر"
              value={filters.max_price}
              options={maximumPriceOptions}
              onChange={(value) => changeFilter("max_price", value, true)}
            />
          </div>
        </div>

       <div>
  {/* متراژ زمین */}
<div>
  <label className="mb-2 block text-sm font-semibold">
    متراژ زمین (متر)
  </label>

  <div className="grid grid-cols-2 gap-3">
    <ModernDropdown
      placeholder="حداقل"
      value={filters.min_land}
      options={minimumLandOptions}
      onChange={(value) =>
        changeAreaFilter("min_land", value)
      }
    />

    <ModernDropdown
      placeholder={
        filters.min_land === "5000"
          ? "گزینه‌ای نیست"
          : "حداکثر"
      }
      value={filters.max_land}
      options={maximumLandOptions}
      disabled={filters.min_land === "5000"}
      onChange={(value) =>
        changeAreaFilter("max_land", value)
      }
    />
  </div>
</div>

</div>

{/* زیربنا */}
<div>
  <label className="mb-2 block text-sm font-semibold">
    زیربنا (متر)
  </label>

  <div className="grid grid-cols-2 gap-3">
    <ModernDropdown
      placeholder="حداقل"
      value={filters.min_build}
      options={minimumBuildOptions}
      onChange={(value) =>
        changeAreaFilter("min_build", value)
      }
    />

    <ModernDropdown
      placeholder={
        filters.min_build === "5000"
          ? "گزینه‌ای نیست"
          : "حداکثر"
      }
      value={filters.max_build}
      options={maximumBuildOptions}
      disabled={filters.min_build === "5000"}
      onChange={(value) =>
        changeAreaFilter("max_build", value)
      }
    />
  </div>
</div>
        {/* تعداد خواب */}
        <div>
          <label className="mb-3 block text-sm font-semibold">تعداد خواب</label>

          <div className="grid grid-cols-3 gap-2 text-sm">
            {[
              { value: "", label: "همه" },
              { value: "2", label: "۲+" },
              { value: "3", label: "۳+" },
              { value: "4", label: "۴+" },
            ].map((bed) => (
              <label
                key={bed.value || "all"}
                className={`flex cursor-pointer items-center justify-center rounded-2xl border px-3 py-2.5 transition ${
                  filters.beds === bed.value
                    ? "border-brand-400 bg-brand-50 font-semibold text-brand-700"
                    : "border-gray-200 text-gray-600 hover:border-brand-300"
                }`}
              >
                <input
                  type="radio"
                  name="beds"
                  value={bed.value}
                  checked={filters.beds === bed.value}
                  onChange={() => changeFilter("beds", bed.value, true)}
                  className="sr-only"
                />

                {bed.label}
              </label>
            ))}
          </div>
        </div>

        {/* ویژگی‌ها */}
        <div>
          <label className="mb-3 block text-sm font-semibold">ویژگی‌ها</label>

          <div className="space-y-3 text-sm text-gray-700">
            {featureOptions.map((feature) => {
              const isChecked = filters.features.includes(feature.value);

              return (
                <label
                  key={feature.value}
                  className={`flex cursor-pointer items-center justify-between rounded-2xl border px-4 py-3 transition ${
                    isChecked
                      ? "border-brand-300 bg-brand-50 text-brand-800"
                      : "border-gray-100 hover:border-brand-200"
                  }`}
                >
                  <span>{feature.label}</span>

                  <input
                    type="checkbox"
                    value={feature.value}
                    checked={isChecked}
                    onChange={() => toggleFeature(feature.value)}
                    className="h-4 w-4 accent-brand-600"
                  />
                </label>
              );
            })}
          </div>
        </div>

        <p className="rounded-2xl bg-mist px-4 py-3 text-center text-xs leading-6 text-gray-500">
          تغییرات فیلتر به‌صورت خودکار اعمال می‌شوند.
        </p>
      </div>
    </div>
  );
}
