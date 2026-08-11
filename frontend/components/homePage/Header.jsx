import React from 'react'

export default function Header() {
  return (
    <div>
 

<section className="hero-bg relative min-h-[760px] pb-28">
  <div className="max-w-7xl mx-auto px-6 pt-40">
    <div className="max-w-xl">
      <h1 className="text-white text-4xl md:text-5xl font-extrabold leading-[1.35]">
        خانه‌ای برای آرامش،<br/>
        <span className="text-[var(--gold-light)]">سرمایه‌ای</span> برای آینده
      </h1>
      <p className="text-white/80 mt-5 leading-8 max-w-md">
        خرید و فروش تخصصی ویلا و زمین در سهیلیه کرج<br/>
        با همراهی مشاوران حرفه‌ای دکتر ویلا
      </p>
      <div className="flex items-center gap-4 mt-8">
        <button className="flex items-center gap-2 gold-grad text-[#241c0c] font-semibold px-6 py-3.5 rounded-full shadow-lg hover:brightness-110 transition">
          مشاهده ویلاها
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
        </button>
        <button className="flex items-center gap-2 border border-white/50 text-white font-semibold px-6 py-3.5 rounded-full hover:bg-white/10 transition">
          دریافت مشاوره
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
        </button>
      </div>
    </div>
  </div>

  <div className="absolute -bottom-16 inset-x-0">
    <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl px-8 py-7">
      <div className="text-center mb-6">
        <h3 className="font-bold text-lg text-[#232821] inline-flex items-center gap-2">
          جستجوی ملک رویایی شما
        </h3>
        <div className="flex items-center justify-center gap-2 mt-1">
          <span className="w-6 h-px bg-[var(--gold)]"></span>
          <span className="w-1.5 h-1.5 bg-[var(--gold)] rotate-45"></span>
          <span className="w-6 h-px bg-[var(--gold)]"></span>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 items-end">
        <div className="order-5 md:order-1">
          <button className="w-full flex items-center justify-center gap-2 bg-[#1f2319] text-white font-semibold rounded-xl py-3.5 hover:bg-[#2b3123] transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
            جستجو
          </button>
        </div>
        <div className="order-4 md:order-2">
          <label className="text-xs text-gray-400 block mb-1.5">بودجه</label>
          <select className="w-full border border-gray-200 rounded-xl px-3 py-3 text-sm text-gray-600 focus:outline-none focus:border-[var(--gold)]">
            <option>انتخاب کنید</option>
            <option>زیر ۵ میلیارد</option>
            <option>۵ تا ۱۰ میلیارد</option>
            <option>بالای ۱۰ میلیارد</option>
          </select>
        </div>
        <div className="order-3 md:order-3">
          <label className="text-xs text-gray-400 block mb-1.5">متراژ</label>
          <select className="w-full border border-gray-200 rounded-xl px-3 py-3 text-sm text-gray-600 focus:outline-none focus:border-[var(--gold)]">
            <option>انتخاب کنید</option>
            <option>زیر ۲۰۰ متر</option>
            <option>۲۰۰ تا ۵۰۰ متر</option>
            <option>بالای ۵۰۰ متر</option>
          </select>
        </div>
        <div className="order-2 md:order-4">
          <label className="text-xs text-gray-400 block mb-1.5">موقعیت</label>
          <select className="w-full border border-gray-200 rounded-xl px-3 py-3 text-sm text-gray-600 focus:outline-none focus:border-[var(--gold)]">
            <option selected>سهیلیه</option>
            <option>نیوساز</option>
            <option>مشجر</option>
          </select>
        </div>
        <div className="order-1 md:order-5">
          <label className="text-xs text-gray-400 block mb-1.5">نوع ملک</label>
          <select className="w-full border border-gray-200 rounded-xl px-3 py-3 text-sm text-gray-600 focus:outline-none focus:border-[var(--gold)]">
            <option selected>ویلا</option>
            <option>زمین</option>
            <option>باغ ویلا</option>
          </select>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}
