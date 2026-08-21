import AnotherVila from "@/components/productDetail/vilaDetail/AnotherVila";
import DetailVila from "@/components/productDetail/vilaDetail/DetailVila";
import SideBar from "@/components/productDetail/vilaDetail/SideBar";

export default async function Page({ params }) {
  const { id } = await params;

  const [productRes, similarRes] = await Promise.all([
    fetch(`https://api.doctorvila.ir/api/v1/villas/${id}/`, {
      cache: "force-cache",
      next: {
        revalidate: 7200,
      },
    }),

    fetch(`https://api.doctorvila.ir/api/v1/villas/${id}/similar/`, {
      cache: "force-cache",
      next: {
        revalidate: 7200,
      },
    }),
  ]);

  if (!productRes.ok) {
    throw new Error("دریافت اطلاعات ویلا ناموفق بود");
  }

  const product = await productRes.json();

  let similarVillas = [];

  if (similarRes.ok) {
    const data = await similarRes.json();
    similarVillas = Array.isArray(data) ? data : [];
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

      <AnotherVila villas={similarVillas} />
    </main>
  );
}
