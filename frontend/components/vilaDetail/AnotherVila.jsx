import React from 'react'

export default function AnotherVila() {
  return (
<div className="mt-16">
    <h2 className="text-[19px] font-bold border-b-2 border-amber-400 inline-block pb-2 mb-6">ویلاهای مشابه</h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-[0_2px_18px_-6px_rgba(0,0,0,0.06)]">
        <img src="https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=600&auto=format&fit=crop" className="w-full h-48 object-cover" alt=""/>
        <div className="p-5">
          <h3 className="font-bold text-[15px] mb-1">ویلای لاکچری در مهرشهر</h3>
          <p className="text-[12.5px] text-gray-400 mb-3">مهرشهر، کرج</p>
          <p className="text-[12.5px] text-gray-400 mb-4">۴۳۰ متر بنا &nbsp;|&nbsp; ۳ خواب &nbsp;|&nbsp; ۴ سرویس</p>
          <div className="flex items-center justify-between">
            <button className="flex items-center gap-1 text-[12.5px] text-gray-500 border border-gray-200 rounded-full px-3 py-1.5">
              مشاهده جزئیات
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none"><path d="M15 18l-6-6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </button>
            <span className="text-amber-500 font-bold text-[14px]">۹.۲ میلیارد تومان</span>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-[0_2px_18px_-6px_rgba(0,0,0,0.06)]">
        <img src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=600&auto=format&fit=crop" className="w-full h-48 object-cover" alt=""/>
        <div className="p-5">
          <h3 className="font-bold text-[15px] mb-1">ویلای مدرن استخردار در فردیس</h3>
          <p className="text-[12.5px] text-gray-400 mb-3">فردیس، کرج</p>
          <p className="text-[12.5px] text-gray-400 mb-4">۴۸۰ متر بنا &nbsp;|&nbsp; ۴ خواب &nbsp;|&nbsp; ۵ سرویس</p>
          <div className="flex items-center justify-between">
            <button className="flex items-center gap-1 text-[12.5px] text-gray-500 border border-gray-200 rounded-full px-3 py-1.5">
              مشاهده جزئیات
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none"><path d="M15 18l-6-6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </button>
            <span className="text-amber-500 font-bold text-[14px]">۹.۸ میلیارد تومان</span>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-[0_2px_18px_-6px_rgba(0,0,0,0.06)]">
        <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=600&auto=format&fit=crop" className="w-full h-48 object-cover" alt=""/>
        <div className="p-5">
          <h3 className="font-bold text-[15px] mb-1">ویلای کلاسیک دوبلکس در محمدشهر</h3>
          <p className="text-[12.5px] text-gray-400 mb-3">محمدشهر، کرج</p>
          <p className="text-[12.5px] text-gray-400 mb-4">۵۲۰ متر بنا &nbsp;|&nbsp; ۴ خواب &nbsp;|&nbsp; ۶ سرویس</p>
          <div className="flex items-center justify-between">
            <button className="flex items-center gap-1 text-[12.5px] text-gray-500 border border-gray-200 rounded-full px-3 py-1.5">
              مشاهده جزئیات
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none"><path d="M15 18l-6-6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </button>
            <span className="text-amber-500 font-bold text-[14px]">۱۰.۵ میلیارد تومان</span>
          </div>
        </div>
      </div>

    </div>
  </div>  )
}
