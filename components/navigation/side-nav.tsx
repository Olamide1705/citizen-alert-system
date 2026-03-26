"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "./nav-items";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden md:flex md:flex-col md:w-64 md:h-screen md:border-r md:border-white/10 md:bg-[#0B0F19] p-5">
      <h2 className="text-white font-semibold text-lg mb-10">SafeSignal NG</h2>

      <nav className="flex flex-col gap-3">
        {navItems.map(({ name, icon: Icon, href }) => {
          const isActive = pathname === href;

          return (
            <Link
              key={name}
              href={href}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition ${
                isActive
                  ? "bg-[#182033] text-primary"
                  : "text-white/60 hover:bg-[#111620] hover:text-white"
              }`}
            >
              <Icon className="h-5 w-5" />
              <span>{name}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
