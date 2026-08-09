import React from 'react'

export default function FinestVillas() {
  return (
<section id="villas" className="max-w-7xl mx-auto px-6 pb-24">
  <div className="text-center mb-14">
    <h2 className="text-2xl md:text-3xl font-extrabold text-[#232821]">منتخب‌ترین ویلاهای سهیلیه</h2>
    <div className="flex items-center justify-center gap-2 mt-2">
      <span className="w-6 h-px bg-[var(--gold)]"></span>
      <span className="w-1.5 h-1.5 bg-[var(--gold)] rotate-45"></span>
      <span className="w-6 h-px bg-[var(--gold)]"></span>
    </div>
  </div>

  <div className="grid md:grid-cols-3 gap-6">

    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 card-hover">
      <img src="https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=800&auto=format&fit=crop" className="w-full h-56 object-cover" alt="ویلای مدرن باغی"/>
      <div className="p-5">
        <h4 className="font-bold text-base">ویلای مدرن باغی</h4>
        <p className="text-xs text-gray-400 flex items-center gap-1 mt-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
          سهیلیه کرج
        </p>
        <div className="flex items-center gap-4 text-xs text-gray-500 mt-3">
          <span className="flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 21V7l9-4 9 4v14"/><path d="M9 21V12h6v9"/></svg>
            ۳۵۰ متر بنا
          </span>
          <span className="flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/></svg>
            ۶۰۰ متر زمین
          </span>
        </div>
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
          <button className="flex items-center gap-1 text-xs font-semibold border border-[var(--gold)] text-[var(--gold)] rounded-full px-3 py-2 hover:bg-[var(--gold)] hover:text-white transition">
            مشاهده جزئیات
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          </button>
          <span className="font-extrabold text-emerald-700 text-sm">۱۲ میلیارد تومان</span>
        </div>
      </div>
    </div>

    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 card-hover">
      <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop" className="w-full h-56 object-cover" alt="ویلای دوبلکس لوکس"/>
      <div className="p-5">
        <h4 className="font-bold text-base">ویلای دوبلکس لوکس</h4>
        <p className="text-xs text-gray-400 flex items-center gap-1 mt-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
          سهیلیه
        </p>
        <div className="flex items-center gap-4 text-xs text-gray-500 mt-3">
          <span className="flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 21V7l9-4 9 4v14"/><path d="M9 21V12h6v9"/></svg>
            ۲۸۰ متر بنا
          </span>
          <span className="flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/></svg>
            ۵۰۰ متر زمین
          </span>
        </div>
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
          <button className="flex items-center gap-1 text-xs font-semibold border border-[var(--gold)] text-[var(--gold)] rounded-full px-3 py-2 hover:bg-[var(--gold)] hover:text-white transition">
            مشاهده جزئیات
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          </button>
          <span className="font-extrabold text-emerald-700 text-sm">۹.۸ میلیارد تومان</span>
        </div>
      </div>
    </div>

    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 card-hover">
      <img src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=800&auto=format&fit=crop" className="w-full h-56 object-cover" alt="باغ ویلای دنج"/>
      <div className="p-5">
        <h4 className="font-bold text-base">باغ ویلای دنج</h4>
        <p className="text-xs text-gray-400 flex items-center gap-1 mt-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
          سهیلیه
        </p>
        <div className="flex items-center gap-4 text-xs text-gray-500 mt-3">
          <span className="flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 21V7l9-4 9 4v14"/><path d="M9 21V12h6v9"/></svg>
            ۲۲۰ متر بنا
          </span>
          <span className="flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/></svg>
            ۷۵۰ متر زمین
          </span>
        </div>
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
          <button className="flex items-center gap-1 text-xs font-semibold border border-[var(--gold)] text-[var(--gold)] rounded-full px-3 py-2 hover:bg-[var(--gold)] hover:text-white transition">
            مشاهده جزئیات
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          </button>
          <span className="font-extrabold text-emerald-700 text-sm">۸.۵ میلیارد تومان</span>
        </div>
      </div>
    </div>
  </div>
</section>  )
}
