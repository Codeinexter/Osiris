"use client";

import NavbarPublic from "@/components/NavbarPublic";
import FooterMega from "@/components/FooterMega";
import CTAStripYellow from "@/components/CTAStripYellow";
import Link from "next/link";
import { ArrowRight, Star, Users, BarChart3, Zap, Shield, MessageCircle } from "lucide-react";
import { useState } from "react";

export default function LandingPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  // Mock data for creators with their categories
  const creators = [
    // Fitness
    { category: "Fitness", url: "https://www.instagram.com/reel/CoFdmkzJ6Cj/" },
    { category: "Fitness", url: "https://www.instagram.com/reel/DUzBxl_kwh1/" },
    { category: "Fitness", url: "https://www.instagram.com/reel/DT-g6dRiJjn/" },
    { category: "Fitness", url: "https://www.instagram.com/reel/DU0EFt1iR1C/" },
    { category: "Fitness", url: "https://www.instagram.com/p/BGxnBBAkhxQ/" },
    { category: "Fitness", url: "https://www.instagram.com/reel/Ci6p9KbJ2Xj/" },
    { category: "Fitness", url: "https://www.instagram.com/reel/DKUu1pEvTaK/" },
    { category: "Fitness", url: "https://www.instagram.com/reel/DO96Gy7gSdm/" },
    { category: "Fitness", url: "https://www.instagram.com/reel/C6L1EMOyxM8/" },
    { category: "Fitness", url: "https://www.instagram.com/reel/CNH-VX4AQ90/" },
    { category: "Fitness", url: "https://www.instagram.com/reel/DSxGbtMkjoV/" },
    // Fashion
    { category: "Fashion", url: "https://www.instagram.com/reel/Cz8rxeLM9za/" },
    { category: "Fashion", url: "https://www.instagram.com/reel/DLX8dVyzFyM/" },
    { category: "Fashion", url: "https://www.instagram.com/reel/DP8zcqAkk9q/" },
    { category: "Fashion", url: "https://www.instagram.com/reel/DUiL3WiAQOa/" },
    { category: "Fashion", url: "https://www.instagram.com/reel/DRSmpmnDoAV/" },
    { category: "Fashion", url: "https://www.instagram.com/reel/DRMQIOhkUBa/" },
    { category: "Fashion", url: "https://www.instagram.com/reel/Cz8rxeLM9za/" }, // Duplicate to fill grid
    { category: "Fashion", url: "https://www.instagram.com/reel/DLX8dVyzFyM/" }, // Duplicate to fill grid
    // Tech
    { category: "Tech", url: "https://www.instagram.com/reel/DRAIEoxE9sN/" },
    { category: "Tech", url: "https://www.instagram.com/reel/DBlj_VFx0u0/" },
    { category: "Tech", url: "https://www.instagram.com/reel/DOaHK7bERIg/" },
    { category: "Tech", url: "https://www.instagram.com/reel/DQ0eGoUEoOW/" },
    { category: "Tech", url: "https://www.instagram.com/reel/DJ6mms4yKwO/" },
    { category: "Tech", url: "https://www.instagram.com/reel/DTNYwK8kekK/" },
    { category: "Tech", url: "https://www.instagram.com/reel/DRAIEoxE9sN/" }, // Duplicate
    { category: "Tech", url: "https://www.instagram.com/reel/DBlj_VFx0u0/" }, // Duplicate
    // Food
    { category: "Food", url: "https://www.instagram.com/reel/ClRQFkRIK0m/" },
    { category: "Food", url: "https://www.instagram.com/reel/DSX5PatCCtG/" },
    { category: "Food", url: "https://www.instagram.com/reel/DRTv9oYgX7a/" },
    { category: "Food", url: "https://www.instagram.com/reel/DUZ3suHjDvQ/" },
    { category: "Food", url: "https://www.instagram.com/reel/DUSSQ_JiRF9/" },
    { category: "Food", url: "https://www.instagram.com/reel/DPAKRa8jabI/" },
    { category: "Food", url: "https://www.instagram.com/reel/ClRQFkRIK0m/" }, // Duplicate
    { category: "Food", url: "https://www.instagram.com/reel/DSX5PatCCtG/" }, // Duplicate
    // Travel
    { category: "Travel", url: "https://www.instagram.com/reel/DO6LSHPjJkT/" },
    { category: "Travel", url: "https://www.instagram.com/reel/DHdxalPN-Jg/" },
    { category: "Travel", url: "https://www.instagram.com/reel/DM2WE0oMFv-/" },
    { category: "Travel", url: "https://www.instagram.com/reel/DMegxAaRT1K/" },
    { category: "Travel", url: "https://www.instagram.com/reel/DTUBZJdglPF/" },
    { category: "Travel", url: "https://www.instagram.com/reel/C_vJcN3S-_l/" },
    { category: "Travel", url: "https://www.instagram.com/reel/DO6LSHPjJkT/" }, // Duplicate
    { category: "Travel", url: "https://www.instagram.com/reel/DHdxalPN-Jg/" }, // Duplicate
    // Gaming
    { category: "Gaming", url: "https://www.instagram.com/reel/DDlFYmxtS19/" },
    { category: "Gaming", url: "https://www.instagram.com/reel/DKzvAsUhe3X/" },
    { category: "Gaming", url: "https://www.instagram.com/reel/C_ksBqdoqOS/" },
    { category: "Gaming", url: "https://www.instagram.com/reel/DA2UAkbNXks/" },
    { category: "Gaming", url: "https://www.instagram.com/reel/DSH4KyTCPtj/" },
    { category: "Gaming", url: "https://www.instagram.com/reel/DLR_F_xxrY1/" },
    { category: "Gaming", url: "https://www.instagram.com/reel/DDlFYmxtS19/" }, // Duplicate
    { category: "Gaming", url: "https://www.instagram.com/reel/DKzvAsUhe3X/" }, // Duplicate
    // Beauty
    { category: "Beauty", url: "https://www.instagram.com/reel/DQDl52ekvG5/" },
    { category: "Beauty", url: "https://www.instagram.com/reel/DLXup_JpUXd/" },
    { category: "Beauty", url: "https://www.instagram.com/reel/DPWTD0AiZ5U/" },
    { category: "Beauty", url: "https://www.instagram.com/reel/DNTQJpxis5U/" },
    { category: "Beauty", url: "https://www.instagram.com/reel/DOBAJ42EkV4/" },
    { category: "Beauty", url: "https://www.instagram.com/reel/DOREwHUjHRU/" },
    { category: "Beauty", url: "https://www.instagram.com/reel/DPL6k9_AcGq/" },
    { category: "Beauty", url: "https://www.instagram.com/reel/DQDl52ekvG5/" }, // Duplicate
  ];

  const filteredCreators = selectedCategory === "All Categories"
    ? creators
    : creators.filter(c => c.category === selectedCategory);

  return (
    <>
      <NavbarPublic />
      <main>
        {/* Hero */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16">
          <div className="bg-gradient-hero rounded-[2.5rem] overflow-hidden shadow-card-hover transition-smooth hover:shadow-2xl animate-fade-in-up">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] animate-fade-in-down">
                  Discover brand champions.
                </h1>
                <p className="mt-4 text-white/85 text-base sm:text-lg max-w-md leading-relaxed animate-fade-in-down" style={{ animationDelay: "0.1s" }}>
                  Search creators, run campaigns, approve content, and track performance—one workspace for social commerce.
                </p>
                <div className="mt-8">
                  <Link href="/auth" className="inline-flex items-center gap-2 bg-white text-gray-900 font-semibold text-sm px-6 py-3.5 rounded-full hover-lift hover:shadow-xl transition-smooth">
                    Get Started <ArrowRight className="w-4 h-4 transition-smooth group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
              <div className="p-4 sm:p-6 lg:p-8">
                <div className="grid grid-cols-3 grid-rows-2 gap-3 h-full min-h-[300px]">
                  {[
                    // Hero Collage Reels - Mix from various categories
                    { url: "https://www.instagram.com/reel/CoFdmkzJ6Cj/", aspect: "col-span-2 row-span-2" }, // Fitness
                    { url: "https://www.instagram.com/reel/Cz8rxeLM9za/", aspect: "col-span-1 row-span-1" }, // Fashion
                    { url: "https://www.instagram.com/reel/DRAIEoxE9sN/", aspect: "col-span-1 row-span-1" }, // Tech
                    { url: "https://www.instagram.com/reel/ClRQFkRIK0m/", aspect: "col-span-1 row-span-1" }, // Food
                    { url: "https://www.instagram.com/reel/DO6LSHPjJkT/", aspect: "col-span-1 row-span-1" }, // Travel
                  ].map((tile, i) => (
                    <div
                      key={i}
                      className={`${tile.aspect} rounded-3xl overflow-hidden shadow-md hover-lift transition-smooth animate-fade-in-up bg-gray-900 relative group`}
                      style={{ animationDelay: `${i * 0.05}s` }}
                    >
                      <iframe
                        src={`${tile.url}embed`}
                        className="w-full h-full absolute inset-0 border-0"
                        allowFullScreen
                        loading="lazy"
                        scrolling="no"
                      />
                      {/* Interaction overlay to prevent iframe stealing clicks but allow scrolling if needed, or just let users click play */}
                      {/* For now keeping plain iframe */}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust bar */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="flex flex-wrap items-center justify-center gap-8 text-gray-400 text-sm font-medium">
            <span>Trusted by 2,500+ brands</span>
            <span>•</span>
            <span>15,000+ verified creators</span>
            <span>•</span>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
              <span className="ml-1 text-gray-600 font-semibold">4.9/5</span>
            </div>
          </div>
        </section>

        {/* Feature sections */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="text-center mb-16">
            <p className="text-sm font-bold uppercase tracking-widest text-brand mb-3">Why Osiris</p>
            <h2 className="font-display text-3xl sm:text-5xl font-bold">Build your dream roster.</h2>
            <p className="mt-4 text-gray-500 text-lg max-w-2xl mx-auto">Identify your next brand champion with Osiris&apos;s Creator Discovery Suite. Surface top-fit creators, match prospects to campaign goals, and automate outreach.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Zap, title: "No Upfront Cost", desc: "Search creators for free. No subscriptions, contracts, or hidden fees." },
              { icon: Shield, title: "Vetted Creators", desc: "Every creator is vetted by us. Always receive high-quality, professional content." },
              { icon: MessageCircle, title: "Instant Chat", desc: "Instantly chat with creators and stay in touch throughout the whole collaboration." },
              { icon: Users, title: "Secure Payments", desc: "Your money is held safely until you approve the creator's work." },
            ].map((f, i) => (
              <div key={i} className="border border-gray-200 rounded-3xl p-6 bg-white hover-lift hover:shadow-card-hover hover:border-brand/30 transition-smooth animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="w-10 h-10 rounded-xl bg-brand/15 flex items-center justify-center mb-4 transition-smooth group-hover:scale-110">
                  <f.icon className="w-5 h-5 text-brand transition-smooth" />
                </div>
                <h3 className="font-bold text-lg mb-2">{f.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section className="bg-surface py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-center mb-16">Execute with speed and precision.</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { step: "1", title: "Search & Discover", desc: "Browse thousands of vetted creators filtered by niche, platform, audience, and engagement rate." },
                { step: "2", title: "Collaborate & Create", desc: "Send briefs, negotiate terms, approve content—all within one organized workspace." },
                { step: "3", title: "Track & Pay", desc: "Monitor campaign performance in real time and release payments when deliverables are approved." },
              ].map((s, i) => (
                <div key={i} className="bg-white rounded-3xl p-8 shadow-card hover-lift hover:shadow-card-hover transition-smooth animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
                  <div className="w-10 h-10 rounded-full bg-brand text-white flex items-center justify-center font-bold text-lg mb-4 transition-smooth hover:scale-110">{s.step}</div>
                  <h3 className="font-bold text-xl mb-2">{s.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              &ldquo;Osiris brings something unique to the market. We saw the brand <span className="text-brand">grow more than 55%.</span>&rdquo;
            </h2>
            <p className="mt-6 text-gray-500">Charlene Zapisocki, Brand Manager — Norwell</p>
          </div>
        </section>

        {/* Creators strip */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-center mb-10">Creators for every industry</h2>
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {["All Categories", "Fashion", "Beauty", "Tech", "Food", "Fitness", "Travel", "Finance", "Gaming"].map((cat, i) => (
              <button
                key={i}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedCategory === cat
                  ? "bg-accent text-black font-semibold shadow-md"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredCreators.length > 0 ? (
              filteredCreators.map((creator, i) => (
                <div
                  key={i}
                  className="aspect-[9/16] rounded-[2rem] overflow-hidden shadow-md hover-lift hover:shadow-lg transition-smooth animate-fade-in-up bg-gray-100 relative group"
                  style={{ animationDelay: `${i * 0.05}s` }}
                >
                  <iframe
                    src={`${creator.url}embed`}
                    className="w-full h-full absolute inset-0 border-0"
                    allowFullScreen
                    loading="lazy"
                    scrolling="no"
                  />
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    <span className="text-xs font-bold bg-white/95 backdrop-blur px-3 py-1 rounded-full text-gray-900 shadow-sm">
                      {creator.category}
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-10 text-gray-500">
                No creators found in this category.
              </div>
            )}
          </div>
        </section>

        {/* IRL Section */}
        <section className="bg-gradient-hero-dark text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-700 rounded-3xl aspect-video col-span-2 flex items-center justify-center text-gray-500 shadow-card">
                  <span className="text-sm">Event photo</span>
                </div>
                <div className="bg-gray-700 rounded-full aspect-square flex items-center justify-center text-gray-500 shadow-card">
                  <span className="text-xs">Creator</span>
                </div>
                <div className="bg-gray-700 rounded-3xl aspect-square flex items-center justify-center text-gray-500 shadow-card">
                  <span className="text-xs">Event</span>
                </div>
              </div>
              <div>
                <h2 className="font-display text-4xl sm:text-5xl font-bold leading-tight">We bring marketers and creators together IRL, too.</h2>
                <p className="mt-4 text-gray-300 text-lg">Join us and spend an evening with the most-loved content creators in your city.</p>
                <div className="flex gap-2 mt-6 flex-wrap">
                  {["Los Angeles", "Chicago", "Toronto", "New York", "Miami"].map((city) => (
                    <span key={city} className="bg-accent text-gray-900 text-xs font-bold px-3 py-1.5 rounded-full shadow-md">{city}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <CTAStripYellow />
      </main>
      <FooterMega />
    </>
  );
}
