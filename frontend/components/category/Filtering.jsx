import React from 'react'

export default function Filtering() {
  return (
 <div className="sticky top-28 overflow-hidden rounded-[24px] bg-white shadow-soft">
            <div className="border-b border-gray-100 px-5 py-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold">فیلترها</h3>
                <button
                  id="resetBtn"
                  className="text-sm font-medium text-brand-600 hover:text-brand-700"
                >
                  پاک کردن
                </button>
              </div>
            </div>

            <div className="filter-scroll max-h-[calc(100vh-9rem)] space-y-6 overflow-y-auto px-5 py-5">
              <div>
                <label className="mb-2 block text-sm font-semibold">
                  منطقه
                </label>
                <select
                  id="locationFilter"
                  className="w-full rounded-2xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-brand-400"
                >
                  <option value="">همه مناطق</option>
                  <option value="سهیلیه">سهیلیه</option>
                  <option value="کردان">کردان</option>
                  <option value="آغچه‌حصار">آغچه‌حصار</option>
                  <option value="زکی‌آباد">زکی‌آباد</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold">
                  بازه قیمت (میلیارد تومان)
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <input
                    id="minPrice"
                    type="number"
                    min="0"
                    placeholder="حداقل"
                    className="rounded-2xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-brand-400"
                  />
                  <input
                    id="maxPrice"
                    type="number"
                    min="0"
                    placeholder="حداکثر"
                    className="rounded-2xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-brand-400"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold">
                  متراژ زمین (متر)
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <input
                    id="minLand"
                    type="number"
                    min="0"
                    placeholder="از"
                    className="rounded-2xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-brand-400"
                  />
                  <input
                    id="maxLand"
                    type="number"
                    min="0"
                    placeholder="تا"
                    className="rounded-2xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-brand-400"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold">
                  زیربنا (متر)
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <input
                    id="minBuild"
                    type="number"
                    min="0"
                    placeholder="از"
                    className="rounded-2xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-brand-400"
                  />
                  <input
                    id="maxBuild"
                    type="number"
                    min="0"
                    placeholder="تا"
                    className="rounded-2xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-brand-400"
                  />
                </div>
              </div>

              <div>
                <label className="mb-3 block text-sm font-semibold">
                  تعداد خواب
                </label>
                <div className="grid grid-cols-3 gap-2 text-sm">
                  <label className="flex cursor-pointer items-center justify-center rounded-2xl border border-gray-200 px-3 py-2.5">
                    <input
                      type="radio"
                      name="beds"
                      value=""
                      className="ml-2"
                      defaultChecked
                    />
                    همه
                  </label>
                  <label className="flex cursor-pointer items-center justify-center rounded-2xl border border-gray-200 px-3 py-2.5">
                    <input
                      type="radio"
                      name="beds"
                      value="2"
                      className="ml-2"
                    />
                    ۲+
                  </label>
                  <label className="flex cursor-pointer items-center justify-center rounded-2xl border border-gray-200 px-3 py-2.5">
                    <input
                      type="radio"
                      name="beds"
                      value="3"
                      className="ml-2"
                    />
                    ۳+
                  </label>
                  <label className="flex cursor-pointer items-center justify-center rounded-2xl border border-gray-200 px-3 py-2.5">
                    <input
                      type="radio"
                      name="beds"
                      value="4"
                      className="ml-2"
                    />
                    ۴+
                  </label>
                </div>
              </div>

              <div>
                <label className="mb-3 block text-sm font-semibold">
                  ویژگی‌ها
                </label>
                <div className="space-y-3 text-sm text-gray-700">
                  <label className="flex items-center justify-between rounded-2xl border border-gray-100 px-4 py-3">
                    <span>استخر</span>
                    <input
                      type="checkbox"
                      value="pool"
                      className="feature-check h-4 w-4 accent-brand-600"
                    />
                  </label>
                  <label className="flex items-center justify-between rounded-2xl border border-gray-100 px-4 py-3">
                    <span>سنددار</span>
                    <input
                      type="checkbox"
                      value="deed"
                      className="feature-check h-4 w-4 accent-brand-600"
                    />
                  </label>
                  <label className="flex items-center justify-between rounded-2xl border border-gray-100 px-4 py-3">
                    <span>مبله</span>
                    <input
                      type="checkbox"
                      value="furnished"
                      className="feature-check h-4 w-4 accent-brand-600"
                    />
                  </label>
                  <label className="flex items-center justify-between rounded-2xl border border-gray-100 px-4 py-3">
                    <span>سرایداری</span>
                    <input
                      type="checkbox"
                      value="caretaker"
                      className="feature-check h-4 w-4 accent-brand-600"
                    />
                  </label>
                  <label className="flex items-center justify-between rounded-2xl border border-gray-100 px-4 py-3">
                    <span>روف‌گاردن</span>
                    <input
                      type="checkbox"
                      value="roof"
                      className="feature-check h-4 w-4 accent-brand-600"
                    />
                  </label>
                </div>
              </div>

              <button
                id="applyBtn"
                className="w-full rounded-2xl bg-pine px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#21483a]"
              >
                اعمال فیلترها
              </button>
            </div>
          </div>  )
}
