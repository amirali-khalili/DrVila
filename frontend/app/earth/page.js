import Box from "@/components/category/Box";
import Filtering from "@/components/category/Filtering";
import Header from "@/components/category/Header";
import Moshavere from "@/components/category/Moshavere";
import Sorting from "@/components/category/Sorting";
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
export default async function page() {
  const products = await getProducts();

  return (
    <div>
      <Header />
      <main className="mx-auto max-w-7xl px-4 py-8 lg:px-6 lg:py-10">
        <Sorting />

        <div className="grid gap-6 lg:grid-cols-[300px_minmax(0,1fr)]">
          <aside className="order-2 lg:order-1">
            <Filtering />
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
                فیلترها خیلی سفت و سخت شده‌اند. کمی شل کن تا نتایج واقعی ببینی.
              </p>
            </div>
            <Box products={products} />
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

        <Moshavere />
      </main>
    </div>
  );
}
