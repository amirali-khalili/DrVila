export default function VillasSkeleton() {
    return (
      <div
        className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-2 xl:grid-cols-3"
        aria-label="در حال دریافت ویلاها"
        aria-busy="true"
      >
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-2xl border border-gray-100 bg-white"
          >
            <div className="aspect-[4/3] animate-pulse bg-gray-200" />
  
            <div className="space-y-3 p-3 sm:p-4">
              <div className="h-4 w-4/5 animate-pulse rounded bg-gray-200" />
              <div className="h-3 w-2/5 animate-pulse rounded bg-gray-200" />
              <div className="h-3 w-full animate-pulse rounded bg-gray-200" />
  
              <div className="flex items-center justify-between gap-2 pt-2">
                <div className="h-8 w-20 animate-pulse rounded-full bg-gray-200" />
                <div className="h-4 w-16 animate-pulse rounded bg-gray-200" />
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }