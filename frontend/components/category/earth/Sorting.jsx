"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const SORT_OPTIONS = [
  { value: "", label: "پیش‌فرض" },
  { value: "newest", label: "جدیدترین" },
  { value: "price-asc", label: "ارزان‌ترین" },
  { value: "price-desc", label: "گران‌ترین" },
  { value: "land-desc", label: "بیشترین متراژ زمین" },
  { value: "land-asc", label: "کمترین متراژ زمین" },
];

function SortIcon({ className = "h-5 w-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path strokeLinecap="round" d="M8 7h12M4 7h.01M12 12h8M4 12h4M16 17h4M4 17h8" />
    </svg>
  );
}

export default function Sorting({ count = 0, mobile = false }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const dropdownRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState(searchParams.get("sort") || "");

  useEffect(() => setSelectedSort(searchParams.get("sort") || ""), [searchParams]);

  useEffect(() => {
    if (!mobile || !isOpen) return;
    const oldOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = oldOverflow; };
  }, [isOpen, mobile]);

  useEffect(() => {
    if (mobile) return;
    const close = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) setIsOpen(false);
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, [mobile]);

  const changeSorting = (value) => {
    const params = new URLSearchParams(searchParams.toString());
    value ? params.set("sort", value) : params.delete("sort");
    params.delete("page");
    setSelectedSort(value);
    setIsOpen(false);
    const query = params.toString();
    router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
  };

  const selectedOption = SORT_OPTIONS.find((option) => option.value === selectedSort) || SORT_OPTIONS[0];

  if (mobile) {
    return (
      <>
        <button type="button" onClick={() => setIsOpen(true)} className="flex h-11 flex-1 items-center justify-center gap-2 rounded-2xl border border-gray-200 bg-white px-3 text-xs font-semibold text-gray-700 shadow-sm">
          <SortIcon />
          <span className="max-w-[130px] truncate">
            {selectedSort ? selectedOption.label : "مرتب‌سازی"}
          </span>
        </button>

        {isOpen && (
          <div className="fixed inset-0 z-[100] lg:hidden" role="dialog" aria-modal="true" aria-label="مرتب‌سازی زمین‌ها">
            <button type="button" aria-label="بستن" onClick={() => setIsOpen(false)} className="sort-backdrop-enter absolute inset-0 bg-black/55" />
            <div dir="rtl" className="sort-sheet-enter absolute inset-x-0 bottom-0 max-h-[82vh] overflow-y-auto rounded-t-[24px] bg-white pb-[max(16px,env(safe-area-inset-bottom))] shadow-2xl">
              <div className="mx-auto mt-2 h-1 w-10 rounded-full bg-gray-300" />
              <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4">
                <h3 className="font-extrabold text-gray-900">مرتب‌سازی بر اساس</h3>
                <button type="button" onClick={() => setIsOpen(false)} className="flex h-9 w-9 items-center justify-center rounded-full text-2xl text-gray-500 hover:bg-gray-100">×</button>
              </div>
              <div className="px-5">
                {SORT_OPTIONS.map((option) => {
                  const active = option.value === selectedSort;
                  return (
                    <button key={option.value || "default"} type="button" onClick={() => changeSorting(option.value)} className={`flex w-full items-center justify-between border-b border-gray-100 py-4 text-right text-sm ${active ? "font-bold text-brand-700" : "text-gray-700"}`}>
                      <span>{option.label}</span>
                      {active && <span className="h-2.5 w-2.5 rounded-full bg-brand-500" />}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}
        <style jsx global>{`
          @keyframes sortBackdropEnter { from { opacity: 0; } to { opacity: 1; } }
          @keyframes sortSheetEnter { from { transform: translateY(100%); } to { transform: translateY(0); } }
          .sort-backdrop-enter { animation: sortBackdropEnter 220ms ease-out both; }
          .sort-sheet-enter { animation: sortSheetEnter 300ms cubic-bezier(.22,.8,.3,1) both; }
          @media (prefers-reduced-motion: reduce) {
            .sort-backdrop-enter, .sort-sheet-enter { animation: none; }
          }
        `}</style>
      </>
    );
  }

  return (
    <div className="mb-6 hidden rounded-[24px] bg-white p-5 shadow-soft lg:block">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold">لیست زمین‌ها</h2>
          <p className="mt-1 text-sm text-gray-500">{Number(count).toLocaleString("fa-IR")} ویلا پیدا شد</p>
        </div>
        <div ref={dropdownRef} className="relative min-w-[230px]">
          <button type="button" onClick={() => setIsOpen((value) => !value)} className="flex w-full items-center justify-between gap-3 rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm hover:border-brand-300">
            <span className="flex items-center gap-2"><SortIcon /><span>{selectedOption.label}</span></span>
            <span className={`transition ${isOpen ? "rotate-180" : ""}`}>⌄</span>
          </button>
          {isOpen && (
            <div className="absolute left-0 top-full z-50 mt-2 w-full overflow-hidden rounded-2xl border border-gray-200 bg-white p-2 shadow-xl">
              {SORT_OPTIONS.map((option) => (
                <button key={option.value || "default"} type="button" onClick={() => changeSorting(option.value)} className={`w-full rounded-xl px-3 py-2.5 text-right text-sm ${selectedSort === option.value ? "bg-brand-50 font-bold text-brand-700" : "text-gray-700 hover:bg-gray-50"}`}>
                  {option.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
