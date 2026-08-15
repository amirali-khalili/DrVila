import React from "react";

export default function Soheylie() {
  return (
   <section className="max-w-7xl mx-auto px-6 pb-24">
  <div className="bg-white rounded-3xl shadow-sm border border-gray-100 grid md:grid-cols-2 overflow-hidden">
    <div className="p-8 md:p-12 flex flex-col justify-center">
      <h3 className="text-xl md:text-2xl font-extrabold leading-relaxed">
        سهیلیه؛ مقصد جدید سرمایه‌گذاری ملکی
      </h3>
      <p className="text-gray-500 text-sm leading-8 mt-4">
        ترکیب طبیعت، دسترسی مناسب و رشد ارزش زمین، سهیلیه را
        به یکی از مناطق جذاب اطراف کرج تبدیل کرده است.
      </p>
      <div className="grid grid-cols-3 gap-4 mt-8">
        <div className="text-center">
          <div className="w-14 h-14 rounded-2xl bg-[#171a16] mx-auto flex items-center justify-center mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[var(--gold-light)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6"/></svg>
          </div>
          <p className="font-extrabold text-lg">+۱۰</p>
          <p className="text-[11px] text-gray-400">سال تجربه</p>
        </div>
        <div className="text-center">
          <div className="w-14 h-14 rounded-2xl bg-[#171a16] mx-auto flex items-center justify-center mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[var(--gold-light)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>
          </div>
          <p className="font-extrabold text-lg">+۱۰۰</p>
          <p className="text-[11px] text-gray-400">مشتری موفق</p>
        </div>
        <div className="text-center">
          <div className="w-14 h-14 rounded-2xl bg-[#171a16] mx-auto flex items-center justify-center mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[var(--gold-light)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/></svg>
          </div>
          <p className="font-extrabold text-lg">+۵۰۰</p>
          <p className="text-[11px] text-gray-400">ملک بررسی شده</p>
        </div>
      </div>
    </div>
    <div className="min-h-[280px]">
      <img src="https://images.unsplash.com/photo-1544984243-ec57ea16fe25?q=80&w=1200&auto=format&fit=crop" className="w-full h-full object-cover" alt="نمای هوایی سهیلیه"/>
    </div>
  </div>
</section>
  );
}
