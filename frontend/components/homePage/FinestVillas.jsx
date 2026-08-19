import Link from "next/link";

function formatPrice(price) {
  if (price === null || price === undefined) {
    return "قیمت توافقی";
  }

  return `${Number(price).toLocaleString("fa-IR")} میلیارد تومان`;
}

function formatNumber(value) {
  if (value === null || value === undefined) {
    return "ثبت نشده";
  }

  return Number(value).toLocaleString("fa-IR");
}

async function getLatestVillas() {
  const response = await fetch("http://localhost:8000/api/v1/villas/latest/", {
    cache: "force-cache",
    next: {
      revalidate: 7200,
    },
  });

  if (!response.ok) {
    return [];
  }

  const data = await response.json();

  const villas = Array.isArray(data) ? data : data?.results ?? data?.data ?? [];

  return villas.slice(0, 3);
}

export default async function FinestVillas() {
  const villas = await getLatestVillas();

  if (!villas.length) {
    return null;
  }

  return (
    <section
      id="villas"
      className="mx-auto max-w-7xl px-3 pb-24 sm:px-4 lg:px-6"
    >
      {/* سربرگ بخش */}
      <div className="relative mb-10 flex min-h-12 items-center justify-center md:mb-14">
        {/* عنوان وسط */}
        <div className="text-center">
          <h2 className="text-xl font-extrabold text-[#232821] sm:text-2xl md:text-3xl">
            جدیدترین ویلاها
          </h2>

          <div className="mt-2 flex items-center justify-center gap-2">
            <span className="h-px w-6 bg-[var(--gold)]" />
            <span className="h-1.5 w-1.5 rotate-45 bg-[var(--gold)]" />
            <span className="h-px w-6 bg-[var(--gold)]" />
          </div>
        </div>

        {/* دکمه سمت چپ */}
        <Link
          href="/villas"
          className="absolute left-0 top-1/2 flex -translate-y-1/2 cursor-pointer items-center gap-1.5 rounded-xl bg-[var(--gold)] px-3 py-2 text-[11px] font-semibold text-white shadow-sm transition hover:brightness-90 sm:gap-2 sm:px-4 sm:py-2.5 sm:text-sm"
        >
          <span className="hidden xs:inline">مشاهده همه ویلاها</span>
          <span className="xs:hidden">مشاهده همه</span>

          <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none">
            <path
              d="M15 18l-6-6 6-6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>

      {/* کارت‌های ویلا */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {villas.map((villa) => (
          <Link key={villa.id}  href={`/villas/${villa.id}`}>
          <article
            key={villa.id}
            className="card-hover flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm"
          >
            {/* تصویر */}
            <div className="h-56 w-full bg-gray-100">
              {villa.poster ? (
                <img
                  src={villa.poster}
                  alt={villa.title || "تصویر ویلا"}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full items-center justify-center text-sm text-gray-400">
                  تصویری ثبت نشده است
                </div>
              )}
            </div>

            <div className="flex flex-1 flex-col p-5">
              {/* عنوان ویلا */}
              <h3 className="truncate text-base font-bold">
                {villa.title || "ویلای بدون عنوان"}
              </h3>

              {/* موقعیت */}
              <p className="mt-1 flex items-center gap-1 text-xs text-gray-400">
                <svg
                  className="h-3.5 w-3.5 shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>

                <span className="truncate">
                  {villa.location_display ||
                    villa.location ||
                    "موقعیت ثبت نشده"}
                </span>
              </p>

              {/* متراژها */}
              <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-gray-500 pb-2">
                <span className="flex items-center gap-1">
                  <svg
                    className="h-3.5 w-3.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M3 21V7l9-4 9 4v14" />
                    <path d="M9 21V12h6v9" />
                  </svg>
                  {formatNumber(villa.building_area)} متر بنا
                </span>

                <span className="flex items-center gap-1">
                  <svg
                    className="h-3.5 w-3.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M3 7 12 3l9 4-9 4-9-4Z" />
                    <path d="m3 12 9 4 9-4M3 17l9 4 9-4" />
                  </svg>
                  {formatNumber(villa.land_area)} متر زمین
                </span>
              </div>

              {/* دکمه جزئیات و قیمت */}
              <div className="mt-auto flex items-center justify-between gap-3 border-t border-gray-100 pt-4">
                <Link
                  href={`/villas/${villa.id}`}
                  className="flex shrink-0 cursor-pointer items-center gap-1 rounded-full border border-[var(--gold)] px-3 py-2 text-xs font-semibold text-[var(--gold)] transition hover:bg-[var(--gold)] hover:text-white"
                >
                  مشاهده جزئیات
                  <svg
                    className="h-3.5 w-3.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M19 12H5M12 19l-7-7 7-7" />
                  </svg>
                </Link>

                <span className="text-left text-sm font-extrabold text-emerald-700">
                  {formatPrice(villa.price)}
                </span>
              </div>
            </div>
          </article>
          </Link>

        ))}
      </div>
    </section>
  );
}
