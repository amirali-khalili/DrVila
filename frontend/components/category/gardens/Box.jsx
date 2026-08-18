import Link from "next/link";

export default function Box({ products }) {
  return (
    <div className="grid grid-cols-2 gap-3 md:gap-6 lg:grid-cols-3">
      {products.data.map((item) => (
        <article
          key={item.id}
          className="group min-w-0 overflow-hidden rounded-2xl bg-white shadow-card transition hover:-translate-y-1 hover:shadow-soft md:rounded-[24px]"
        >
          <div className="relative overflow-hidden">
            <img
              src={item.poster}
              alt={item.title}
              loading="lazy"
              className="h-32 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-40 md:h-56"
            />
          </div>
          <div className="p-3 md:p-5">
            <div className="mb-2 flex min-w-0 items-center justify-between gap-2 md:gap-3">
              <h3 className="line-clamp-1 min-w-0 text-sm font-extrabold text-ink md:text-lg">
                {item.title}
              </h3>
              <span className="shrink-0 truncate text-[10px] text-gray-500 md:text-xs">
                {item.location_display}
              </span>
            </div>

            <div className="rounded-xl bg-mist p-2 text-center text-[10px] text-gray-600 md:rounded-2xl md:p-3 md:text-xs flex ">
              <div className="font-bold text-ink md:text-sm ml-1 ">
                {item.land_area}
              </div>
              <div>متر زمین</div>
            </div>

            <div className="mt-3 flex min-h-6 flex-wrap gap-1 text-[9px] md:mt-4 md:gap-2 md:text-xs">
              {item.deed && (
                <span className="rounded-full bg-emerald-50 px-2 py-1 text-emerald-700 md:px-3">
                  سنددار
                </span>
              )}
              {item.caretaker && (
                <span className="rounded-full bg-purple-50 px-2 py-1 text-purple-700 md:px-3">
                  سرایداری
                </span>
              )}
              {item.in_urban_area && (
                <span className="rounded-full bg-blue-50 px-2 py-1 text-blue-700 md:px-3">
                  داخل بافت
                </span>
              )}
              {item.has_utilities && (
                <span className="rounded-full bg-amber-50 px-2 py-1 text-amber-700 md:px-3">
                  آب، برق و گاز
                </span>
              )}
            </div>

            <div className="mt-3 flex flex-col gap-3 border-t border-gray-100 pt-3 md:mt-5 md:flex-row md:items-center md:justify-between md:gap-2 md:pt-4">
              <div className="flex min-w-0 items-center justify-between gap-1 md:block">
                <div className="text-[10px] text-gray-500 md:text-xs">
                  قیمت:
                </div>
                <div className="truncate text-sm font-extrabold text-pine md:text-xl">
                  {item.price}
                  <span className="mr-1 text-[9px] font-semibold md:text-xs">
                    میلیارد تومان
                  </span>
                </div>
              </div>
              <Link
                href={`/gardens/${item.id}`}
                className="block w-full shrink-0 rounded-full border border-brand-200 px-2 py-2 text-center text-[10px] font-semibold text-brand-700 transition hover:bg-brand-50 md:w-auto md:px-3 md:py-1.5 md:text-xs"
              >
                مشاهده جزئیات
              </Link>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
