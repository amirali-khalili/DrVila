import React from "react";

export default function SideBar({ product }) {
  return (
    <aside className="space-y-4">
      <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_18px_-6px_rgba(0,0,0,0.06)] p-5">
        <div className="flex items-start justify-between mb-4">
          
          <span className="text-[12px] text-gray-400 mt-2">
            کد ملک: {product.id}
          </span>
        </div>

        <h1 className="text-[19px] font-bold leading-8 mb-2">
          {product.title}{" "}
        </h1>
        <p className="text-[13px] text-gray-400 mb-4">{product.address}</p>

        <p className="text-amber-500 text-[22px] font-extrabold mb-5">
          {product.price} میلیارد تومان
        </p>

        <a
  href="tel:09991887858"
  aria-label="تماس با شماره 09991887858"
  className="mb-3 flex h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#141414] text-[14px] font-semibold text-white transition hover:bg-black"
>
  دریافت مشاوره

  <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
    <path
      d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"
      stroke="white"
      strokeWidth="1.8"
    />
  </svg>
</a>

       
      </div>

     
    </aside>
  );
}
