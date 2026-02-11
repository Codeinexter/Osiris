"use client";
import Link from "next/link";
import { Linkedin, Twitter, Instagram, Youtube, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function FooterMega() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-1">
            <h3 className="font-display text-3xl font-bold mb-6 bg-gradient-to-r from-accent to-brand bg-clip-text text-transparent">Osiris</h3>
            <Link href="/auth" className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark rounded-xl px-5 py-3 text-sm font-semibold transition-all shadow-lg hover:shadow-xl">
              Get Started <ArrowRight className="w-4 h-4" />
            </Link>
            <p className="text-gray-500 text-xs mt-8">© Osiris Inc. 2026. All rights reserved.</p>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">Platform</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><Link href="/auth" className="hover:text-white transition-colors font-medium">Platform Login</Link></li>
              <li><Link href="/creators" className="hover:text-white transition-colors font-medium">For Creators</Link></li>
              <li><Link href="/brands" className="hover:text-white transition-colors font-medium">For Brands</Link></li>
              <li><Link href="/auth" className="hover:text-white transition-colors font-medium">Sign Up</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">Company</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><span className="hover:text-white transition-colors cursor-default font-medium">Community</span></li>
              <li><span className="hover:text-white transition-colors cursor-default font-medium">Careers</span></li>
              <li><span className="hover:text-white transition-colors cursor-default font-medium">Help Center</span></li>
              <li><span className="hover:text-white transition-colors cursor-default font-medium">Blog</span></li>
            </ul>
            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4 mt-8">Follow Us</h4>
            <div className="flex gap-3">
              {[Linkedin, Twitter, Youtube, Instagram].map((Icon, i) => (
                <Link key={i} href="#" className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:border-brand hover:bg-brand/20 transition-all group">
                  <Icon className="w-4 h-4 text-gray-400 group-hover:text-brand transition-colors" />
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">Legal</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><span className="cursor-default font-medium hover:text-white transition-colors">Trust Center</span></li>
              <li><span className="cursor-default font-medium hover:text-white transition-colors">Terms of Service</span></li>
              <li><span className="cursor-default font-medium hover:text-white transition-colors">Privacy Policy</span></li>
              <li><span className="cursor-default font-medium hover:text-white transition-colors">Cookie Notice</span></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">Subscribe</h4>
            {subscribed ? (
              <div className="bg-green-500/20 border border-green-500/50 rounded-lg px-4 py-3">
                <p className="text-sm font-semibold text-green-400">Thanks for subscribing!</p>
                <p className="text-xs text-green-300 mt-1">Check your email for updates.</p>
              </div>
            ) : (
              <div className="space-y-3">
                <div className="flex gap-1">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="flex-1 bg-white/10 border border-gray-600 rounded-lg px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand/30 transition-all"
                  />
                  <button
                    onClick={() => { if (email) setSubscribed(true); }}
                    className="bg-brand hover:bg-brand-dark text-white font-bold text-sm px-4 py-2.5 rounded-lg transition-all shadow-lg hover:shadow-xl"
                  >
                    →
                  </button>
                </div>
                <p className="text-xs text-gray-500">Get emails about product updates and industry news.</p>
              </div>
            )}
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 mt-8">
          <p className="text-xs text-gray-500 text-center">Built with by the Osiris team. Made for creators and brands.</p>
        </div>
      </div>
    </footer>
  );
}
