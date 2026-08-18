"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const DESKTOP_LINKS = [
  { href: "/", label: "خانه" },
  { href: "/villas", label: "خرید ویلا" },
  { href: "/earths", label: "خرید زمین" },
  { href: "/gardens", label: "خرید باغ" },
];

const MOBILE_LINKS = [
  {
    href: "/",
    label: "خانه",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m3 11 9-8 9 8v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1v-9Z"
      />
    ),
  },
  {
    href: "/villas",
    label: "ویلاها",
    icon: (
      <>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 21V7.5L12 3l7 4.5V21M3 21h18"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 21v-5h6v5M8 10h2M14 10h2M8 13h2M14 13h2"
        />
      </>
    ),
  },
  {
    href: "/earths",
    label: "زمین",
    icon: (
      <>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m4 6 5-2 6 2 5-2v14l-5 2-6-2-5 2V6Z"
        />
        <path strokeLinecap="round" d="M9 4v14M15 6v14" />
      </>
    ),
  },
  {
    href: "/gardens",
    label: "باغ‌ها",
    icon: (
      <>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 21v-8M8 17h8"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 13c-4 0-6-2.5-6-5.5C9 7 11 8 12 10c1-4 4-6 7-6 0 5-2 9-7 9Z"
        />
      </>
    ),
  },
  {
    href: "tel:09991887858",
    label: "تماس",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 16.5v3a1.5 1.5 0 0 1-1.64 1.5 18.5 18.5 0 0 1-8.08-2.88 18.2 18.2 0 0 1-5.62-5.62 18.5 18.5 0 0 1-2.88-8.11A1.5 1.5 0 0 1 4.27 2.75h3a1.5 1.5 0 0 1 1.49 1.29c.12.9.34 1.78.65 2.63a1.5 1.5 0 0 1-.34 1.58L7.9 9.42a14.5 14.5 0 0 0 6.68 6.68l1.17-1.17a1.5 1.5 0 0 1 1.58-.34c.85.31 1.73.53 2.63.65A1.5 1.5 0 0 1 21 16.5Z"
      />
    ),
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const isActive = (href) =>
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <>
    {/* هدر و منوی دسکتاپ */}
<header className="absolute inset-x-0 top-0 z-30 mt-10 lg:static lg:mt-0 lg:bg-[#171a16] lg:px-6 lg:py-5">
  <div
    className="
      mx-auto flex max-w-7xl items-center justify-between px-6 py-5
      lg:rounded-[28px]
      lg:border lg:border-white/15
      lg:bg-white/[0.07]
      lg:shadow-[0_15px_45px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.12)]
      lg:backdrop-blur-2xl
      lg:backdrop-saturate-150
    "
  >
    <Link href="/" className="flex items-center gap-2">
      <span className="text-2xl font-bold tracking-wide text-white">
        دکتر{" "}
        <span className="text-[var(--gold-light)]">
          ویلا
        </span>
      </span>
    </Link>

    <nav className="hidden items-center gap-2 text-sm font-medium text-white/75 lg:flex">
      {DESKTOP_LINKS.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`rounded-full px-5 py-2.5 transition-all duration-300 ${
            isActive(link.href)
              ? "bg-white/10 text-[var(--gold-light)] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]"
              : "hover:bg-white/[0.07] hover:text-white"
          }`}
        >
          {link.label}
        </Link>
      ))}
    </nav>

    <a
      href="tel:09991887858"
      dir="ltr"
      className="
        gold-grad
        fixed left-4 top-16 z-50
        flex items-center gap-2
        rounded-full px-3 py-2
        text-xs font-semibold text-[#241c0c]
        shadow-[0_8px_24px_rgba(191,146,55,0.25)]
        transition-all duration-300
        hover:-translate-y-0.5 hover:brightness-110
        sm:static sm:px-5 sm:py-2.5 sm:text-sm
      "
    >
      <span>0999 188 7858</span>

      <svg
        className="h-4 w-4"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z"
        />
      </svg>
    </a>
  </div>
</header>

      {/* نوار شیشه‌ای پایین موبایل */}
      <nav
        aria-label="منوی موبایل"
        className="fixed inset-x-3 bottom-[max(12px,env(safe-area-inset-bottom))] z-[90] lg:hidden"
      >
        <div className="mx-auto grid max-w-md grid-cols-5 rounded-[24px] border border-white/60 bg-white/75 px-1.5 py-1.5 shadow-[0_12px_40px_rgba(20,50,40,0.2)] backdrop-blur-2xl backdrop-saturate-150">
          {MOBILE_LINKS.map((link) => {
            const isPhoneLink = link.href.startsWith("tel:");
            const active = !isPhoneLink && isActive(link.href);
            const Item = isPhoneLink ? "a" : Link;

            return (
              <Item
                key={link.href}
                href={link.href}
                aria-label={
                  isPhoneLink ? "تماس با شماره 09991887858" : undefined
                }
                aria-current={active ? "page" : undefined}
                className={`group relative flex min-w-0 flex-col items-center justify-center gap-1 rounded-[18px] px-1 py-2 transition-all duration-300 ${
                  active
                    ? "bg-[var(--gold)]/15 text-[var(--gold)]"
                    : "text-gray-500 hover:bg-white/60 hover:text-gray-800"
                }`}
              >
                {active && (
                  <span className="absolute -top-1 h-1 w-7 rounded-full bg-[var(--gold)] shadow-[0_2px_8px_var(--gold)]" />
                )}

                <svg
                  className={`h-[21px] w-[21px] transition-all duration-300 ${
                    active
                      ? "-translate-y-0.5 scale-110"
                      : "group-active:scale-90"
                  }`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={active ? "2.2" : "1.7"}
                >
                  {link.icon}
                </svg>

                <span
                  className={`truncate text-[10px] leading-4 ${
                    active ? "font-bold" : "font-medium"
                  }`}
                >
                  {link.label}
                </span>
              </Item>
            );
          })}
        </div>
      </nav>
    </>
  );
}
