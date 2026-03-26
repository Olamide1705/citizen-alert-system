"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "./nav-items";

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-[#0B0F19] md:hidden">
      <div className="flex justify-between px-6 py-3">
        {navItems.map(({ name, icon: Icon, href }) => {
          const isActive = pathname === href;

          return (
            <Link
              key={name}
              href={href}
              className="flex flex-col items-center gap-1 text-xs"
            >
              <Icon
                className={`h-5 w-5 ${
                  isActive ? "text-primary" : "text-white/40"
                }`}
              />
              <span
                className={`${isActive ? "text-primary" : "text-white/40"}`}
              >
                {name}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
