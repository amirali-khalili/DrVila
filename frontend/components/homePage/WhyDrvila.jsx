import React from 'react'

export default function WhyDrvila() {
  return (
<section className="max-w-7xl mx-auto px-6 pt-32 pb-20">
  <div className="text-center mb-14">
    <h2 className="text-2xl md:text-3xl font-extrabold text-[#232821]">چرا دکتر ویلا؟</h2>
    <div className="flex items-center justify-center gap-2 mt-2">
      <span className="w-6 h-px bg-[var(--gold)]"></span>
      <span className="w-1.5 h-1.5 bg-[var(--gold)] rotate-45"></span>
      <span className="w-6 h-px bg-[var(--gold)]"></span>
    </div>
  </div>

  <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 text-center card-hover">
      <div className="w-16 h-16 rounded-full bg-[#fbf1de] mx-auto flex items-center justify-center mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-[var(--gold)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M11 17a4 4 0 0 0 8 0v-1a4 4 0 0 0 0-8h-.5"/><path d="M5 15a4 4 0 0 1 4-4h.5a4 4 0 0 0 3.9-3.1"/><path d="m7 21 3-3M14 3l3 3-3 3"/></svg>
      </div>
      <h4 className="font-bold text-sm mb-2">مشاوره تا معامله</h4>
      <p className="text-xs text-gray-500 leading-6">همراه شما از انتخاب تا سند</p>
    </div>
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 text-center card-hover">
      <div className="w-16 h-16 rounded-full bg-[#fbf1de] mx-auto flex items-center justify-center mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-[var(--gold)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-4 4"/></svg>
      </div>
      <h4 className="font-bold text-sm mb-2">سرمایه‌گذاری مطمئن</h4>
      <p className="text-xs text-gray-500 leading-6">انتخاب ملک با نگاه آینده‌نگر</p>
    </div>
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 text-center card-hover">
      <div className="w-16 h-16 rounded-full bg-[#fbf1de] mx-auto flex items-center justify-center mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-[var(--gold)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 22s8-4.5 8-11V5l-8-3-8 3v6c0 6.5 8 11 8 11Z"/><path d="m9 12 2 2 4-4"/></svg>
      </div>
      <h4 className="font-bold text-sm mb-2">املاک تایید شده</h4>
      <p className="text-xs text-gray-500 leading-6">بررسی دقیق موقعیت و مدارک ملک</p>
    </div>
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 text-center card-hover">
      <div className="w-16 h-16 rounded-full bg-[#fbf1de] mx-auto flex items-center justify-center mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-[var(--gold)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
      </div>
      <h4 className="font-bold text-sm mb-2">تخصص در سهیلیه</h4>
      <p className="text-xs text-gray-500 leading-6">شناخت کامل منطقه و بهترین فرصت‌های خرید</p>
    </div>
  </div>
</section>
  )
}
