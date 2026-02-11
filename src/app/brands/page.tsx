import NavbarPublic from "@/components/NavbarPublic";
import FooterMega from "@/components/FooterMega";
import CTAStripYellow from "@/components/CTAStripYellow";
import Link from "next/link";
import { ArrowRight, Star, BarChart3, Search, Zap, Target, TrendingUp } from "lucide-react";

export default function BrandsPage() {
  return (
    <>
      <NavbarPublic />
      <main>
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20">
          <div className="bg-gradient-to-br from-surface to-white rounded-3xl overflow-hidden shadow-xl">
            <div className="grid lg:grid-cols-2 gap-0 items-center">
              <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
                <span className="inline-flex text-xs font-bold bg-accent text-black px-3 py-1.5 rounded-full w-fit mb-6 uppercase tracking-widest">For Brands</span>
                <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6">Collaborate with top creators</h1>
                <p className="text-gray-700 text-lg max-w-md leading-relaxed mb-10">Build your creator roster—faster. Shortlist creators with the right audience, launch campaigns, and measure ROI in real time.</p>
                <div className="flex flex-wrap gap-3 mb-10">
                  <Link href="/auth?role=brand" className="inline-flex items-center gap-2 bg-brand text-white font-semibold px-6 py-3.5 rounded-full hover:bg-brand-dark transition-all shadow-lg hover:shadow-xl">
                    Book a Demo
                  </Link>
                  <Link href="/creators" className="inline-flex items-center gap-2 text-brand font-semibold hover:underline">
                    Explore Creators <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
                  </div>
                  <span className="text-xs font-bold text-gray-700 uppercase tracking-wide">Best customer support</span>
                </div>
              </div>
              <div className="p-6 lg:p-8 hidden lg:block">
                <div className="grid grid-cols-3 grid-rows-2 gap-4 h-full min-h-[350px]">
                  {[
                    { bg: "from-blue-300 to-blue-200" },
                    { bg: "from-pink-300 to-pink-200" },
                    { bg: "from-amber-300 to-amber-200" },
                    { bg: "from-emerald-300 to-emerald-200" },
                    { bg: "from-violet-300 to-violet-200" },
                    { bg: "from-cyan-300 to-cyan-200" }
                  ].map((item, i) => (
                    <div key={i} className={`bg-gradient-to-br ${item.bg} rounded-3xl ${i === 4 ? "col-span-2" : ""} shadow-lg hover:shadow-xl transition-shadow`}></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-brand bg-brand/10 px-3 py-1.5 rounded-full mb-6">Strategic Imperative</span>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">Make Creator Strategy a Marketing Pillar</h2>
              <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">Influencer marketing is no longer a test—it&apos;s a strategic necessity. Social platforms have overtaken TV in audience size—flipping the marketing landscape forever.</p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-b from-cyan-50 via-blue-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">Build your dream roster.</h2>
                <p className="text-gray-700 text-lg leading-relaxed">Surface top-fit creators, match prospects to campaign goals, and automate outreach with Osiris's Creator Discovery Suite. All powered by AI.</p>
              </div>
              <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-shadow border border-gray-200">
                <h3 className="font-bold text-lg mb-6 text-gray-900">AI Creator Search</h3>
                <div className="flex gap-2 mb-8 flex-wrap">
                  {["Brand Awareness", "Age: 25-35", "Audience: Male"].map((tag) => (
                    <span key={tag} className="bg-brand/10 text-brand text-xs px-3 py-1.5 rounded-full font-semibold">{tag}</span>
                  ))}
                </div>
                <div className="bg-gradient-to-br from-brand/10 to-brand/5 rounded-2xl p-6 flex items-center gap-4 border border-brand/20">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-brand to-brand-dark flex items-center justify-center text-2xl shadow-lg">
                    🤝
                  </div>
                  <div>
                    <p className="font-bold text-3xl text-brand">103</p>
                    <p className="text-sm text-gray-600">Creators matched</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-brand bg-brand/10 px-3 py-1.5 rounded-full mb-6">Execution</span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">Execute with speed and precision.</h2>
            <p className="text-gray-700 text-lg max-w-3xl leading-relaxed">No more spreadsheets or scattered tools. Osiris brings everything under one roof—messaging, contracts, payments, and approvals—so you can stay organized and move fast.</p>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-b from-white to-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-brand bg-brand/10 px-3 py-1.5 rounded-full mb-6">Analytics</span>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">Track complete performance.</h2>
              <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">Real-time analytics on every campaign. See engagement, reach, conversions, and ROI across all your creator partnerships.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[{ icon: Search, t: "Discover", d: "Find the perfect creators for your brand with AI-powered search and detailed audience insights." },
                { icon: Zap, t: "Execute", d: "Manage briefs, contracts, approvals, and payments all in one workspace." },
                { icon: TrendingUp, t: "Measure", d: "Track real-time ROI with conversion attribution across every creator and campaign." }
              ].map((f, i) => (
                <div key={i} className="bg-white rounded-3xl p-8 text-center border border-gray-200 hover:shadow-lg hover:border-brand/20 transition-all group">
                  <div className="w-14 h-14 rounded-xl bg-brand/10 group-hover:bg-brand/20 mx-auto flex items-center justify-center mb-6 transition-all">
                    <f.icon className="w-6 h-6 text-brand" />
                  </div>
                  <h3 className="font-bold text-xl mb-3 text-gray-900">{f.t}</h3>
                  <p className="text-gray-600 leading-relaxed">{f.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-b from-surface to-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl p-12 sm:p-16 shadow-lg border border-gray-200">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-brand text-brand" />)}
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-8">
                &ldquo;Osiris brings something unique to the market. We saw the brand <span className="text-brand">grow more than 55%.&rdquo;</span>
              </h2>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand to-brand-dark"></div>
                <div>
                  <p className="font-semibold text-gray-900">Charlene Zapisocki</p>
                  <p className="text-sm text-gray-600">Brand Manager — Norwell</p>
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
