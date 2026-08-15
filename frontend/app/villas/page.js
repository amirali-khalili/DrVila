import Box from "@/components/category/villas/Box";
import Filtering from "@/components/category/villas/Filtering";
import Header from "@/components/category/villas/Header";
import Moshavere from "@/components/category/villas/Moshavere";
import Sorting from "@/components/category/villas/Sorting";
import Link from "next/link";

const ALLOWED_FILTERS = [
  "location",
  "min_price",
  "max_price",
  "min_land",
  "max_land",
  "min_build",
  "max_build",
  "beds",
  "features",
  "sort",
  "search",
  "page",
];

async function getProducts(filters) {
  const apiParams = new URLSearchParams();

  ALLOWED_FILTERS.forEach((key) => {
    const value = filters?.[key];

    if (typeof value === "string" && value.trim() !== "") {
      apiParams.set(key, value);
    }

    if (Array.isArray(value)) {
      value.forEach((item) => {
        apiParams.append(key, item);
      });
    }
  });

  const queryString = apiParams.toString();

  const apiUrl = queryString
    ? `http://localhost:8000/api/v1/villas/?${queryString}`
    : "http://localhost:8000/api/v1/villas/";

  const res = await fetch(apiUrl, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  // خروجی را تغییر نمی‌دهیم چون Box از products.data استفاده می‌کند
  return res.json();
}

function createPaginationItems(currentPage, lastPage) {
  // اگر تعداد صفحات ۵ یا کمتر باشد، همه را نمایش بده
  if (lastPage <= 5) {
    return Array.from({ length: lastPage }, (_, index) => index + 1);
  }

  const pages = new Set([
    1,
    lastPage,
    currentPage - 1,
    currentPage,
    currentPage + 1,
  ]);

  // صفحات ابتدایی
  if (currentPage <= 2) {
    pages.add(2);
    pages.add(3);
  }

  // صفحات انتهایی
  if (currentPage >= lastPage - 1) {
    pages.add(lastPage - 1);
    pages.add(lastPage - 2);
  }

  const validPages = [...pages]
    .filter((page) => page >= 1 && page <= lastPage)
    .sort((first, second) => first - second);

  const paginationItems = [];

  validPages.forEach((page, index) => {
    const previousPage = validPages[index - 1];

    if (index > 0 && page - previousPage > 1) {
      paginationItems.push(`ellipsis-${previousPage}`);
    }

    paginationItems.push(page);
  });

  return paginationItems;
}

export default async function Page({ searchParams }) {
  const filters = await searchParams;
  const products = await getProducts(filters);

  const productItems = products?.data ?? [];

  const currentPage = Number(products?.pagination?.current_page) || 1;

  const lastPage = Number(products?.pagination?.last_page) || 1;

  const paginationItems = createPaginationItems(currentPage, lastPage);

  const createPageHref = (page) => {
    const params = new URLSearchParams();

    Object.entries(filters || {}).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        value.forEach((item) => {
          params.append(key, item);
        });

        return;
      }

      if (value !== undefined && value !== "") {
        params.set(key, String(value));
      }
    });

    // فقط شماره صفحه را تغییر می‌دهیم
    params.set("page", String(page));

    return `/villas?${params.toString()}`;
  };

  return (
    <div>
      <Header />

      <main className="mx-auto max-w-7xl px-4 py-8 lg:px-6 lg:py-10">
        <Sorting count={products?.pagination?.total ?? 0} />

        <div className="grid gap-6 lg:grid-cols-[300px_minmax(0,1fr)]">
          <aside className="order-2 lg:order-1">
            <Filtering />
          </aside>

          <section className="order-1 lg:order-2">
            {productItems.length === 0 ? (
              <div className="rounded-[24px] bg-white px-6 py-16 text-center shadow-soft">
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
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

                <h3 className="text-xl font-bold">ملکی پیدا نشد</h3>

                <p className="mt-2 text-sm leading-7 text-gray-500">
                  فیلترها خیلی سفت و سخت شده‌اند. کمی شل کن تا نتایج واقعی
                  ببینی.
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
