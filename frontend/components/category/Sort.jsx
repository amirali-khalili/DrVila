import Link from "next/link";
import React from "react";

async function getProducts() {
  const res = await fetch("http://localhost:8000/api/villas/", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
}

export default async function Sort() {
  
  const products = await getProducts();
  console.log(products)

  return (
    <main className="mx-auto max-w-7xl px-4 py-8 lg:px-6 lg:py-10">
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
              <label for="searchInput" className="text-sm text-gray-500">
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
              <label for="sortBy" className="text-sm text-gray-500">
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

      <div className="grid gap-6 lg:grid-cols-[300px_minmax(0,1fr)]">
        <aside className="order-2 lg:order-1">
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
                      checked
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
          </div>
        </aside>

        <section className="order-1 lg:order-2">
          <div
            id="emptyState"
            className="hidden rounded-[24px] bg-white px-6 py-16 text-center shadow-soft"
          >
            <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-brand-50 text-brand-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="1.5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m15 15-6 6m0-6 6 6M21 12A9 9 0 1 1 3 12a9 9 0 0 1 18 0Z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold">ملکی پیدا نشد</h3>
            <p className="mt-2 text-sm leading-7 text-gray-500">
              فیلترها خیلی سفت و سخت شده‌اند. کمی شل کن تا نتایج واقعی ببینی.
            </p>
          </div>
          {/* box */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {products.map((item) => {
              // const tag = item.tags[0] || "ویلا";

              return (
                <article
                  key={item.id}
                  className="group overflow-hidden rounded-[24px] bg-white shadow-card transition hover:-translate-y-1 hover:shadow-soft"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={item.poster}
                      alt={item.title}
                      className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
                    />

                    {/* <div className="absolute right-4 top-4 rounded-full bg-brand-500 px-3 py-1 text-xs font-bold text-white">
                      {tag}
                    </div> */}

                    {/* <button className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-gray-600 shadow">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="1.7"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m21 8.25c0-2.485-2.239-4.5-5-4.5-1.74 0-3.273.8-4.168 2.018C10.94 4.55 9.407 3.75 7.667 3.75c-2.761 0-5 2.015-5 4.5 0 7.22 9.165 11.25 9.165 11.25S21 15.47 21 8.25Z"
                        />
                      </svg>
                    </button> */}
                  </div>

                  <div className="p-5">
                    <div className="mb-2 flex items-center justify-between gap-3">
                      <h3 className="line-clamp-1 text-lg font-extrabold text-ink">
                        {item.title}
                      </h3>

                      <span className="whitespace-nowrap text-xs text-gray-500">
                        {item.location}
                      </span>
                    </div>

                    <div className="grid grid-cols-3 gap-2 rounded-2xl bg-mist p-3 text-center text-xs text-gray-600">
                      <div>
                        <div className="font-bold text-ink">
                          {item.land_area}
                        </div>
                        <div>متر زمین</div>
                      </div>

                      <div>
                        <div className="font-bold text-ink">
                          {item.building_area}
                        </div>
                        <div>متر بنا</div>
                      </div>

                      <div>
                        <div className="font-bold text-ink">
                          {item.room_count}
                        </div>
                        <div>خواب</div>
                      </div>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2 text-xs">
                      {item.features.includes("pool") && (
                        <span className="rounded-full bg-blue-50 px-3 py-1 text-blue-700">
                          استخر
                        </span>
                      )}

                      {item.features.includes("deed") && (
                        <span className="rounded-full bg-emerald-50 px-3 py-1 text-emerald-700">
                          سنددار
                        </span>
                      )}

                      {item.features.includes("furnished") && (
                        <span className="rounded-full bg-purple-50 px-3 py-1 text-purple-700">
                          مبله
                        </span>
                      )}

                      {item.features.includes("roof") && (
                        <span className="rounded-full bg-amber-50 px-3 py-1 text-amber-700">
                          روف‌گاردن
                        </span>
                      )}
                    </div>

                    <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-4">
                      <div>
                        <div className="text-xs text-gray-500">قیمت</div>

                        <div className="text-2xl font-extrabold text-pine">
                          {item.price}
                          <span className="text-sm font-semibold">
                            {" "}
                            میلیارد تومان
                          </span>
                        </div>
                      </div>

                      <Link
                        href={`/products/${item.id}`}
                        className="rounded-full border border-brand-200 px-4 py-2 text-sm font-semibold text-brand-700 transition hover:bg-brand-50"
                      >
                        مشاهده جزئیات
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
          <div
            id="propertyGrid"
            className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3"
          ></div>

          <div className="mt-8 flex items-center justify-center gap-2">
            <button className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-white text-sm font-semibold text-brand-700">
              ۱
            </button>
            <button className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-white text-sm text-gray-500">
              ۲
            </button>
            <button className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-white text-sm text-gray-500">
              ۳
            </button>
            <button className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-white text-sm text-gray-500">
              ›
            </button>
          </div>
        </section>
      </div>

      <section className="mt-10 overflow-hidden rounded-[28px] bg-pine text-white shadow-soft">
        <div className="grid items-center gap-6 md:grid-cols-[1.1fr_.9fr] bg-green-950 ">
          <div className="p-8 md:p-10 ">
            <span className="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-brand-100">
              مشاوره تخصصی خرید
            </span>
            <h3 className="mt-4 text-3xl font-extrabold leading-tight">
              برای خرید ویلا در سهیلیه <br />
              به مشاوره نیاز دارید؟
            </h3>
            <p className="mt-3 max-w-xl text-sm leading-7 text-white/75">
              کارشناسان دکتر ویلا با شناخت دقیق منطقه، بودجه و هدف سرمایه‌گذاری
              شما، بهترین گزینه‌ها را گلچین می‌کنند. وقت تلف نکن؛ انتخاب اشتباه
              توی ملک شوخی نیست.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <button className="rounded-full bg-brand-500 px-6 py-3 text-sm font-bold text-white transition hover:bg-brand-600">
                درخواست مشاوره رایگان
              </button>
              <a
                href="tel:09121234567"
                className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                تماس فوری
              </a>
            </div>
          </div>
          <img
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80"
            alt="مشاوره خرید ویلا"
            className="h-full min-h-[280px] w-full object-cover"
          />
        </div>
      </section>
    </main>
  );
}
