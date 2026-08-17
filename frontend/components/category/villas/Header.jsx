import Image from "next/image";
import React from "react";

export default function Header() {
  return (
    <section className="relative overflow-hidden">
     <Image
  src="/images/vilacategory.webp"
  alt="ویلای لوکس"
  width={1800}
  height={1000}
  sizes="100vw"
  className="h-[320px] w-full object-cover md:h-[380px]"
/>
      <div className="hero-overlay absolute inset-0"></div>
      <div className="absolute inset-0">
        <div className="mx-auto flex h-full max-w-7xl flex-col justify-center px-4 lg:px-6">
          <div className="max-w-xl text-white">
           
            <h1 className="text-4xl font-extrabold leading-tight md:text-5xl">
              ویلاهای سهیلیه
            </h1>
            <p className="mt-4 max-w-lg text-sm leading-7 text-white/85 md:text-base">
              مجموعه‌ای از ویلاهای منتخب، باغ‌ویلاهای لوکس و فرصت‌های
              سرمایه‌گذاری مطمئن در سهیلیه کرج. فیلتر کن، مقایسه کن، انتخاب کن.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
