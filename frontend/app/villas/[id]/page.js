import AnotherVila from "@/components/vilaDetail/AnotherVila";
import DetailVila from "@/components/vilaDetail/DetailVila";
import SideBar from "@/components/vilaDetail/SideBar";
import React from "react";

export default async function page({ params }) {
  const { id } = await params;

  const res = await fetch(`http://localhost:8000/api/v1/villas/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch product");
  }

  const product = await res.json();
  return (
    <main className="max-w-[1180px] mx-auto px-6 pt-4 pb-16">
      <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-6">
        <SideBar product={product} />
        <DetailVila product={product} />
      </div>
      <AnotherVila product={product} />
    </main>
  );
}
