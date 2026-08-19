import AnotherVila from "@/components/productDetail/earthDetail/AnotherVila";
import DetailVila from "@/components/productDetail/earthDetail/DetailVila";
import SideBar from "@/components/productDetail/earthDetail/SideBar";

export default async function Page({ params }) {
  const { id } = await params;

  const [productRes, similarRes] = await Promise.all([
    // جزئیات زمین
    fetch(`http://localhost:8000/api/v1/earths/${id}/`, {
      cache: "force-cache",
      next: {
        revalidate: 7200,
      },
    }),

    // زمین‌های مشابه
    fetch(`http://localhost:8000/api/v1/earth/${id}/similar/`, {
      cache: "force-cache",
      next: {
        revalidate: 7200,
      },
    }),
  ]);

  if (!productRes.ok) {
    throw new Error("دریافت اطلاعات زمین ناموفق بود");
  }

  const product = await productRes.json();

  let similarEarths = [];

  if (similarRes.ok) {
    const data = await similarRes.json();

    similarEarths = Array.isArray(data)
      ? data
      : data?.results ?? data?.data ?? [];
  }

  return (
    <main className="mx-auto w-full max-w-[1180px] px-3 pb-16 pt-4 sm:px-4 lg:px-6">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[300px_minmax(0,1fr)] lg:gap-6">
        <div className="min-w-0">
          <SideBar product={product} />
        </div>

        <div className="min-w-0">
          <DetailVila product={product} />
        </div>
      </div>

      <AnotherVila earths={similarEarths} />
    </main>
  );
}