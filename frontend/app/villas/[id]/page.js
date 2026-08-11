import AnotherVila from "@/components/vilaDetail/AnotherVila";
import DetailVila from "@/components/vilaDetail/DetailVila";
import SideBar from "@/components/vilaDetail/SideBar";
import React from "react";

export default function page() {
  return (
    <main class="max-w-[1180px] mx-auto px-6 pt-4 pb-16">
      <div class="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-6">
        <SideBar />
        <DetailVila />
      </div>
        <AnotherVila/>
    </main>
  );
}
