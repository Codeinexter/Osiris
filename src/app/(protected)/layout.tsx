"use client";
import { useAuthStore } from "@/stores/auth";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import NavbarApp from "@/components/NavbarApp";

export default function ProtectedLayout({ children }: { children: React.ReactNode }) {
  const { user } = useAuthStore();
  const router = useRouter();
  const pathname = usePathname();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!user) { router.push("/auth?tab=login"); return; }
    if (user.role === "creator" && pathname.startsWith("/app/brand")) { router.push("/app/creator"); return; }
    if (user.role === "brand" && pathname.startsWith("/app/creator")) { router.push("/app/brand"); return; }
    setReady(true);
  }, [user, pathname, router]);

  if (!ready) return <div className="min-h-screen flex items-center justify-center"><div className="w-8 h-8 border-4 border-brand border-t-transparent rounded-full animate-spin" /></div>;

  return (
    <div className="min-h-screen bg-gray-50">
      <NavbarApp />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">{children}</main>
    </div>
  );
}
