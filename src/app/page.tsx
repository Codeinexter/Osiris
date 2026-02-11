import NavbarPublic from "@/components/NavbarPublic";
import FooterMega from "@/components/FooterMega";
import CTAStripYellow from "@/components/CTAStripYellow";
import Link from "next/link";
import { ArrowRight, Star, Users, BarChart3, Zap, Shield, MessageCircle } from "lucide-react";

export default function LandingPage() {
  return (
    <>
      <NavbarPublic />
      <main>
        {/* Hero */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20">
          <div className="bg-gradient-to-br from-brand to-brand-dark rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-0 items-center">
              <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
                <span className="inline-flex text-xs font-bold text-white/60 uppercase tracking-widest w-fit mb-6">Brand Discovery Platform</span>
                <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6">
                  Discover brand champions.
                </h1>
                <p className="text-white/80 text-base sm:text-lg max-w-md leading-relaxed mb-10">
                  Search creators, run campaigns, approve content, and track performance—one workspace for social commerce.
                </p>
                <div className="flex gap-3 flex-wrap">
                  <Link href="/auth?role=brand" className="inline-flex items-center gap-2 bg-white text-brand font-semibold px-6 py-3.5 rounded-full hover:bg-gray-50 transition-all hover:shadow-lg">
                    For Brands <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link href="/auth?role=creator" className="inline-flex items-center gap-2 bg-white/20 text-white border border-white/30 font-semibold px-6 py-3.5 rounded-full hover:bg-white/30 transition-all">
                    For Creators <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
              <div className="p-4 sm:p-6 lg:p-8 hidden lg:block">
                <div className="grid grid-cols-3 grid-rows-2 gap-3 h-full min-h-[350px]">
                  {[
                    { bg: "bg-gradient-to-br from-blue-300 to-blue-200", label: "@samanthalu" },
                    { bg: "bg-gradient-to-br from-pink-300 to-pink-200", label: "Fashion" },
                    { bg: "bg-gradient-to-br from-amber-300 to-amber-200", label: "@alenpalander" },
                    { bg: "bg-gradient-to-br from-emerald-300 to-emerald-200", label: "Pets" },
                    { bg: "bg-gradient-to-br from-violet-300 to-violet-200", label: "Outdoors" },
                    { bg: "bg-gradient-to-br from-cyan-300 to-cyan-200", label: "@the.truth.doctor" },
                  ].map((tile, i) => (
                    <div key={i} className={`${tile.bg} rounded-2xl flex items-end p-4 shadow-lg transition-transform hover:scale-105 ${i === 3 ? "col-span-1" : ""}`}>
                      <span className="text-xs font-bold bg-white/90 backdrop-blur px-3 py-1.5 rounded-full truncate">{tile.label}</span>
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
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-brand bg-brand/10 px-3 py-1 rounded-full mb-6">Why Choose Osiris</span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">Build your dream roster.</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">Identify your next brand champion with Osiris's Creator Discovery Suite. Surface top-fit creators, match prospects to campaign goals, and automate outreach.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Zap, title: "No Upfront Cost", desc: "Search creators for free. No subscriptions, contracts, or hidden fees." },
              { icon: Shield, title: "Vetted Creators", desc: "Every creator is vetted by us. Always receive high-quality, professional content." },
              { icon: MessageCircle, title: "Instant Chat", desc: "Instantly chat with creators and stay in touch throughout the whole collaboration." },
              { icon: Users, title: "Secure Payments", desc: "Your money is held safely until you approve the creator's work." },
            ].map((f, i) => (
              <div key={i} className="border border-gray-200 rounded-2xl p-8 hover:shadow-lg hover:border-brand/20 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-brand/10 group-hover:bg-brand/20 flex items-center justify-center mb-5 transition-all">
                  <f.icon className="w-6 h-6 text-brand" />
                </div>
                <h3 className="font-bold text-lg mb-3">{f.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section className="bg-gradient-to-b from-surface to-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-brand bg-brand/10 px-3 py-1 rounded-full mb-6">How It Works</span>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold">Execute with speed and precision.</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { step: "1", title: "Search & Discover", desc: "Browse thousands of vetted creators filtered by niche, platform, audience, and engagement rate." },
                { step: "2", title: "Collaborate & Create", desc: "Send briefs, negotiate terms, approve content—all within one organized workspace." },
                { step: "3", title: "Track & Pay", desc: "Monitor campaign performance in real time and release payments when deliverables are approved." },
              ].map((s, i) => (
                <div key={i} className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand/5 to-brand/10 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative bg-white rounded-2xl p-8 shadow-sm group-hover:shadow-lg transition-all duration-300">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand to-brand-dark text-white flex items-center justify-center font-bold text-lg mb-6">{s.step}</div>
                    <h3 className="font-bold text-xl mb-3">{s.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-20 bg-gradient-to-b from-white to-surface">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl p-12 sm:p-16 shadow-lg">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-brand text-brand" />)}
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-8">
                &ldquo;Osiris brings something unique to the market. We saw the brand <span className="text-brand">grow more than 55%.&rdquo;</span>
              </h2>
              <p className="text-gray-600 font-semibold">Charlene Zapisocki</p>
              <p className="text-gray-500 text-sm">Brand Manager — Norwell</p>
            </div>
          </div>
        </section>

        {/* Creators strip */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">Creators for every industry</h2>
            <p className="text-gray-600 text-lg">Find influencers across all niches and platforms</p>
          </div>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {["All Categories", "Fashion", "Beauty", "Tech", "Food", "Fitness", "Travel", "Finance", "Gaming"].map((cat, i) => (
              <button key={i} className={`px-4 py-2.5 rounded-full text-sm font-semibold transition-all ${i === 0 ? "bg-accent text-black shadow-lg" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}>
                {cat}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {["Fitness", "Beauty", "Tech", "Food", "Travel", "Fashion"].map((niche, i) => (
              <div key={i} className={`aspect-[3/4] rounded-3xl bg-gradient-to-br ${["from-orange-300 to-orange-200","from-pink-300 to-pink-200","from-blue-300 to-blue-200","from-amber-300 to-amber-200","from-cyan-300 to-cyan-200","from-violet-300 to-violet-200"][i]} flex items-end justify-center p-4 shadow-lg hover:shadow-xl transition-shadow group cursor-pointer`}>
                <span className="text-xs font-bold bg-white/95 backdrop-blur px-3 py-1.5 rounded-full text-gray-900 group-hover:bg-white">{niche}</span>
              </div>
            ))}
          </div>
        </section>

        {/* IRL Section */}
        <section className="bg-gradient-to-b from-gray-900 to-black text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="grid grid-cols-2 gap-4 order-last lg:order-first">
                <div className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-3xl aspect-video col-span-2 flex items-center justify-center text-gray-500 shadow-lg">
                  <span className="text-sm font-semibold">Event photo</span>
                </div>
                <div className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-full aspect-square flex items-center justify-center text-gray-500 shadow-lg">
                  <span className="text-xs font-semibold">Creator</span>
                </div>
                <div className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-3xl aspect-square flex items-center justify-center text-gray-500 shadow-lg">
                  <span className="text-xs font-semibold">Event</span>
                </div>
              </div>
              <div>
                <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">We bring marketers and creators together IRL, too.</h2>
                <p className="text-gray-300 text-lg mb-8 leading-relaxed">Join us and spend an evening with the most-loved content creators in your city. Network, collaborate, and build lasting relationships.</p>
                <div className="flex gap-2 flex-wrap">
                  {["Los Angeles", "Chicago", "Toronto", "New York", "Miami"].map((city) => (
                    <span key={city} className="bg-accent text-black text-xs font-bold px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition-shadow cursor-pointer">{city}</span>
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
