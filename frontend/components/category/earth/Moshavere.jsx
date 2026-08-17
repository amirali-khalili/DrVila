import Image from 'next/image'
import React from 'react'

export default function Moshavere() {
  return (
<section className="mt-10 overflow-hidden rounded-[28px] bg-pine text-white shadow-soft">
        <div className="grid items-center gap-6 md:grid-cols-[1.1fr_.9fr] bg-green-950 ">
          <div className="p-8 md:p-10 ">
            <span className="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-brand-100">
              مشاوره تخصصی خرید
            </span>
            <h3 className="mt-4 text-3xl font-extrabold leading-tight">
              برای خرید ویلا در سهیلیه <br />
              به مشاوره نیاز دارید؟
            </h3>
            <p className="mt-3 max-w-xl text-sm leading-7 text-white/75">
              کارشناسان دکتر ویلا با شناخت دقیق منطقه، بودجه و هدف سرمایه‌گذاری
              شما، بهترین گزینه‌ها را گلچین می‌کنند. وقت تلف نکن؛ انتخاب اشتباه
              توی ملک شوخی نیست.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <button className="rounded-full bg-brand-500 px-6 py-3 text-sm font-bold text-white transition hover:bg-brand-600">
                درخواست مشاوره رایگان
              </button>
              <a
                href="tel:09121234567"
                className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                تماس فوری باید برقرار شود بببببب
              </a>
            </div>
          </div>
                   <Image
            src="/images/moshaverevilacategory.webp"
            alt="مشاوره خرید ویلا"
            width={1200}
            height={800}
            sizes="(min-width: 768px) 50vw, 100vw"
            className="h-full min-h-[280px] w-full object-cover"
          />
        </div>
      </section>  )
}
