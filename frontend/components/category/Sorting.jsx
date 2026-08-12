import React from "react";

export default function Sorting() {
  return (
    <div className="mb-6 rounded-[24px] bg-white p-4 shadow-soft md:p-5">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h2 className="text-xl font-bold">لیست ویلاها</h2>
          <p id="resultCount" className="mt-1 text-sm text-gray-500">
            در حال نمایش ۹ مورد
          </p>
        </div>

        <div className="flex flex-col gap-3 md:flex-row md:items-center">
          <div className="flex items-center gap-2 rounded-2xl border border-gray-200 bg-mist px-3 py-2">
            <label htmlFor="sortBy" className="text-sm text-gray-500">
              جستجو:
            </label>
            <input
              id="searchInput"
              type="text"
              placeholder="نام ویلا یا لوکیشن"
              className="w-56 bg-transparent text-sm outline-none placeholder:text-gray-400"
            />
          </div>

          <div className="flex items-center gap-3">
            <label htmlFor="sortBy" className="text-sm text-gray-500">
              مرتب‌سازی:
            </label>
            <select
              id="sortBy"
              className="rounded-2xl border border-gray-200 bg-white px-4 py-2.5 text-sm outline-none focus:border-brand-400"
            >
              <option value="newest">جدیدترین</option>
              <option value="price-asc">ارزان‌ترین</option>
              <option value="price-desc">گران‌ترین</option>
              <option value="land-desc">بیشترین متراژ زمین</option>
              <option value="build-desc">بیشترین زیربنا</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
