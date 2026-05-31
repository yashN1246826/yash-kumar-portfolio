"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/insights", label: "Insights" },
];

export default function NavBar() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname?.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/70 bg-[#fbf8f1]/90 py-5 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <Link href="/" className="group leading-none">
          <div className="text-2xl font-black tracking-tight text-slate-950 transition-colors group-hover:text-blue-700 sm:text-3xl">
            Yash Kumar
          </div>

          <div className="mt-2 text-[11px] font-bold uppercase tracking-[0.42em] text-slate-500">
            AI · Robotics · Cloud
          </div>
        </Link>

        <nav className="hidden items-center gap-1 rounded-full border border-slate-200 bg-white/80 p-1.5 shadow-md shadow-slate-900/5 backdrop-blur-md md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-300 ${
                isActive(item.href)
                  ? "bg-slate-950 text-white shadow-md shadow-slate-900/15"
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-950"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-full bg-slate-950 px-7 py-3 text-sm font-bold text-white shadow-md shadow-slate-900/15 transition-all hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg active:scale-95"
        >
          Contact
        </Link>
      </div>
    </header>
  );
}