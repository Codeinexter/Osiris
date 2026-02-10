"use client";
import Link from "next/link";
import { useAuthStore } from "@/stores/auth";
import { useRouter, usePathname } from "next/navigation";
import { LayoutDashboard, User, BarChart3, Handshake, Search, Megaphone, LogOut, Menu, X } from "lucide-react";
import { useState } from "react";
import { getInitials } from "@/lib/utils";

const creatorNav = [
  { href: "/app/creator", label: "Dashboard", icon: LayoutDashboard },
  { href: "/app/creator/profile", label: "Profile", icon: User },
  { href: "/app/creator/insights", label: "Insights", icon: BarChart3 },
  { href: "/app/creator/deals", label: "Deals", icon: Handshake },
];

const brandNav = [
  { href: "/app/brand", label: "Dashboard", icon: LayoutDashboard },
  { href: "/app/brand/profile", label: "Profile", icon: User },
  { href: "/app/brand/creators", label: "Discover", icon: Search },
  { href: "/app/brand/campaigns", label: "Campaigns", icon: Megaphone },
];

export default function NavbarApp() {
  const { user, logout } = useAuthStore();
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const nav = user?.role === "creator" ? creatorNav : brandNav;

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href={user?.role === "creator" ? "/app/creator" : "/app/brand"} className="font-display text-2xl font-bold tracking-tight">
            Osiris
          </Link>
          <div className="hidden md:flex items-center gap-1">
            {nav.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link key={item.href} href={item.href} className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${isActive ? "bg-gray-900 text-white" : "text-gray-600 hover:bg-gray-100"}`}>
                  <item.icon className="w-4 h-4" />
                  {item.label}
                </Link>
              );
            })}
          </div>
          <div className="hidden md:flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-brand flex items-center justify-center text-white text-xs font-bold">
              {user ? getInitials(user.name) : "?"}
            </div>
            <button onClick={handleLogout} className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-900 transition-colors">
              <LogOut className="w-4 h-4" /> Sign out
            </button>
          </div>
          <button onClick={() => setOpen(!open)} className="md:hidden p-2">
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t bg-white px-4 py-4 space-y-2">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium ${pathname === item.href ? "bg-gray-900 text-white" : "text-gray-600"}`}>
              <item.icon className="w-4 h-4" /> {item.label}
            </Link>
          ))}
          <button onClick={handleLogout} className="flex items-center gap-2 px-4 py-2.5 text-sm text-red-600 font-medium w-full">
            <LogOut className="w-4 h-4" /> Sign out
          </button>
        </div>
      )}
    </nav>
  );
}
