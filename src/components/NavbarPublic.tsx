"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";

export default function NavbarPublic() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-lg border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="font-display text-2xl font-bold tracking-tight bg-gradient-to-r from-brand to-brand-dark bg-clip-text text-transparent hover:opacity-80 transition-opacity">
            Osiris
          </Link>
          <div className="hidden md:flex items-center gap-10">
            <Link href="/brands" className="text-sm font-semibold text-gray-700 hover:text-brand transition-colors flex items-center gap-1">
              For Brands <ChevronDown className="w-3 h-3 opacity-50" />
            </Link>
            <Link href="/creators" className="text-sm font-semibold text-gray-700 hover:text-brand transition-colors">
              For Creators
            </Link>
          </div>
          <div className="hidden md:flex items-center gap-3">
            <Link href="/auth" className="text-sm font-semibold px-5 py-2.5 rounded-full border-2 border-gray-300 text-gray-700 hover:border-brand hover:text-brand transition-all">
              Log in
            </Link>
            <Link href="/auth" className="text-sm font-semibold px-5 py-2.5 rounded-full bg-brand text-white hover:bg-brand-dark shadow-lg hover:shadow-xl transition-all inline-flex items-center gap-2">
              Get started <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-gray-200 bg-white px-4 py-4 space-y-3 animate-in fade-in slide-in-from-top">
          <Link href="/brands" className="block text-sm font-semibold py-3 px-3 hover:bg-gray-50 rounded-lg transition-colors">For Brands</Link>
          <Link href="/creators" className="block text-sm font-semibold py-3 px-3 hover:bg-gray-50 rounded-lg transition-colors">For Creators</Link>
          <hr className="my-2" />
          <Link href="/auth" className="block text-sm font-semibold py-3 px-3 hover:bg-gray-50 rounded-lg transition-colors">Log in</Link>
          <Link href="/auth" className="block text-sm font-semibold py-3 px-4 bg-brand text-white rounded-xl text-center hover:bg-brand-dark transition-colors">Get started</Link>
        </div>
      )}
    </nav>
  );
}
