import Box from "@/components/category/gardens/Box";
import Filtering from "@/components/category/gardens/Filtering";
import Header from "@/components/category/gardens/Header";
import Moshavere from "@/components/category/gardens/Moshavere";
import Sorting from "@/components/category/gardens/Sorting";
import Link from "next/link";

const ALLOWED_FILTERS = [
  "location",
  "min_price",
  "max_price",
  "min_land",
  "max_land",
  "features",
  "sort",
  "search",
  "page",
];

async function getProducts(filters) {
  const apiParams = new URLSearchParams();
  ALLOWED_FILTERS.forEach((key) => {
    const value = filters?.[key];
    if (typeof value === "string" && value.trim() !== "")
      apiParams.set(key, value);
    if (Array.isArray(value))
      value.forEach((item) => apiParams.append(key, item));
  });
  const query = apiParams.toString();
  const url = query
    ? `http://localhost:8000/api/v1/gardens/?${query}`
    : "http://localhost:8000/api/v1/gardens/";
  const response = await fetch(url, { cache: "no-store" });
  if (!response.ok) throw new Error("Failed to fetch products");
  return response.json();
}

function createPaginationItems(currentPage, lastPage) {
  if (lastPage <= 5)
    return Array.from({ length: lastPage }, (_, index) => index + 1);
  const pages = new Set([
    1,
    lastPage,
    currentPage - 1,
    currentPage,
    currentPage + 1,
  ]);
  if (currentPage <= 2) {
    pages.add(2);
    pages.add(3);
  }
  if (currentPage >= lastPage - 1) {
    pages.add(lastPage - 1);
    pages.add(lastPage - 2);
  }
  const valid = [...pages]
    .filter((page) => page >= 1 && page <= lastPage)
    .sort((a, b) => a - b);
  const items = [];
  valid.forEach((page, index) => {
    if (index > 0 && page - valid[index - 1] > 1)
      items.push(`ellipsis-${valid[index - 1]}`);
    items.push(page);
  });
  return items;
}

export default async function Page({ searchParams }) {
  const filters = await searchParams;
  const products = await getProducts(filters);
  const productItems = products?.data ?? [];
  const total = Number(products?.pagination?.total) || 0;
  const currentPage = Number(products?.pagination?.current_page) || 1;
  const lastPage = Number(products?.pagination?.last_page) || 1;
  const paginationItems = createPaginationItems(currentPage, lastPage);

  const createPageHref = (page) => {
    const params = new URLSearchParams();
    Object.entries(filters || {}).forEach(([key, value]) => {
      if (Array.isArray(value))
        value.forEach((item) => params.append(key, item));
      else if (value !== undefined && value !== "")
        params.set(key, String(value));
    });
    params.set("page", String(page));
    return `/gardens?${params.toString()}`;
  };

  return (
    <div>
      <Header />
      <main className="mx-auto max-w-7xl px-3 py-5 sm:px-4 lg:px-6 lg:py-10">
        {/* عنوان و مرتب‌سازی دسکتاپ */}
        <Sorting count={total} />

        <div className="grid gap-6 lg:grid-cols-[300px_minmax(0,1fr)]">
          {/* فیلتر ثابت دسکتاپ */}
          <aside className="hidden lg:block">
            <Filtering />
          </aside>

          <section className="min-w-0">
            {/* نوار ابزار موبایل، دقیقاً بالای کارت‌ها */}
            <div className="mb-4 lg:hidden">
              <div className="mb-3 flex items-center justify-between gap-3">
                <div>
                  <h2 className="font-extrabold text-gray-900">باغ‌ها</h2>
                  <p className="mt-1 text-xs text-gray-500">
                    {total.toLocaleString("fa-IR")} باغ پیدا شد
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Filtering mobile count={total} />
                <Sorting mobile count={total} />
              </div>
            </div>

            {productItems.length === 0 ? (
              <div className="rounded-[24px] bg-white px-6 py-16 text-center shadow-soft">
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                  <svg
                    className="h-10 w-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m15 15-6 6m0-6 6 6M21 12A9 9 0 1 1 3 12a9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">باغی پیدا نشد</h3>
                <p className="mt-2 text-sm leading-7 text-gray-500">
                  باغی مطابق فیلترهای انتخاب‌شده پیدا نشد؛ چند فیلتر را حذف و
                  دوباره امتحان کنید.
                </p>
              </div>
            ) : (
              <Box products={products} />
            )}

            {/* صفحه‌بندی */}
            <div className="mt-8 flex items-center justify-center gap-2">
              {paginationItems.map((item) => {
                if (typeof item === "string") {
                  return (
                    <span
                      key={item}
                      className="flex h-10 min-w-6 items-center justify-center text-sm text-gray-400"
                    >
                      ...
                    </span>
                  );
                }

                const isActive = item === currentPage;

                if (isActive) {
                  return (
                    <span
                      key={item}
                      aria-current="page"
                      className="flex h-10 w-10 items-center justify-center rounded-xl border border-brand-400 bg-brand-50 text-sm font-semibold text-brand-700"
                    >
                      {item.toLocaleString("fa-IR")}
                    </span>
                  );
                }

                return (
                  <Link
                    key={item}
                    href={createPageHref(item)}
                    scroll={false}
                    className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl border border-gray-200 bg-white text-sm text-gray-500 transition hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700"
                  >
                    {item.toLocaleString("fa-IR")}
                  </Link>
                );
              })}
            </div>
          </section>
        </div>
        <Moshavere />
      </main>
    </div>
  );
}
