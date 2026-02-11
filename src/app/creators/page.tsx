import NavbarPublic from "@/components/NavbarPublic";
import FooterMega from "@/components/FooterMega";
import CTAStripYellow from "@/components/CTAStripYellow";
import Link from "next/link";
import { Star, Handshake, CheckCircle, DollarSign, Link2, MessageCircle, FileText, ArrowRight } from "lucide-react";

export default function CreatorsPage() {
  return (
    <>
      <NavbarPublic />
      <main>
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20">
          <div className="bg-gradient-to-br from-surface to-white rounded-3xl overflow-hidden shadow-xl">
            <div className="grid lg:grid-cols-2 gap-0 items-center">
              <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
                <span className="inline-flex text-xs font-bold bg-accent text-black px-3 py-1.5 rounded-full w-fit mb-6 uppercase tracking-widest">For Creators &amp; Agents</span>
                <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6">Get paid to do what you love</h1>
                <p className="text-gray-700 text-lg max-w-md leading-relaxed mb-10">Find collaborations that excite you. Set your rates, share your media kit, and track approvals—without chasing brands.</p>
                <div className="flex flex-wrap gap-3 mb-10">
                  <Link href="/auth?role=creator" className="inline-flex items-center gap-2 bg-brand text-white font-semibold px-6 py-3.5 rounded-full hover:bg-brand-dark transition-all shadow-lg hover:shadow-xl">
                    Join for Free
                  </Link>
                  <Link href="/brands" className="inline-flex items-center gap-2 text-brand font-semibold hover:underline">
                    Are you a brand? Book a Demo <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
                  </div>
                  <span className="text-xs font-bold text-gray-700 uppercase tracking-wide">Easiest to do business with</span>
                </div>
              </div>
              <div className="p-6 lg:p-8 hidden lg:block">
                <div className="grid grid-cols-2 gap-4 h-full min-h-[350px]">
                  <div className="bg-gradient-to-br from-pink-300 to-pink-200 rounded-3xl row-span-2 relative shadow-lg hover:shadow-xl transition-shadow group">
                    <div className="absolute top-4 right-4 bg-white rounded-xl px-3 py-2 shadow-lg text-xs font-bold flex items-center gap-2 group-hover:scale-105 transition-transform">
                      <span className="text-green-500 text-sm">✓</span>
                      <span>Payment</span>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-amber-300 to-amber-200 rounded-3xl shadow-lg hover:shadow-xl transition-shadow"></div>
                  <div className="bg-gradient-to-br from-blue-300 to-blue-200 rounded-3xl shadow-lg hover:shadow-xl transition-shadow"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-b from-white to-surface rounded-3xl my-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="bg-gradient-to-br from-gray-200 to-gray-100 rounded-3xl aspect-[4/5] relative overflow-hidden shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 space-y-2">
                {["Contracted", "Content Approved", "Payment"].map((s, i) => (
                  <div key={i} className="bg-white rounded-xl px-4 py-2.5 shadow-lg flex items-center gap-2 text-sm font-semibold text-gray-900 backdrop-blur-sm hover:shadow-xl transition-shadow">
                    <span className={`w-2.5 h-2.5 rounded-full ${i === 2 ? "bg-green-500" : "bg-gray-300"}`}></span>{s}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-black bg-accent px-3 py-1.5 rounded-full mb-6">Automation</span>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">You create. We manage everything else.</h2>
              <p className="text-gray-700 text-lg leading-relaxed">Our team and technology helps manage the campaign every step of the way so you can focus on creating amazing content.</p>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-black bg-accent px-3 py-1.5 rounded-full mb-6">Payment</span>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">Quality content deserves quality pay.</h2>
              <p className="text-gray-700 text-lg mb-10 leading-relaxed">Set your own prices and get automatic payments in under 45 days. No hidden fees, no middlemen.</p>
              <div className="bg-gradient-to-br from-surface to-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-lg transition-shadow">
                <div className="flex gap-2 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-brand text-brand" />)}
                </div>
                <p className="text-lg font-display italic text-gray-900 mb-4">&ldquo;My highest paid and most credible deals have been through Osiris.&rdquo;</p>
                <p className="text-sm font-semibold text-gray-700">Andrea Rivera</p>
                <p className="text-xs text-gray-500">@andreariverafit</p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-surface to-white rounded-3xl p-10 border border-gray-200 shadow-lg">
              <h3 className="font-bold text-xl mb-8 text-gray-900">Add your rates</h3>
              <div className="space-y-6">
                {["Photo", "Video", "Story", "YT Ad", "Billboard"].map((type, i) => (
                  <div key={i} className="flex items-center justify-between group">
                    <span className="text-sm font-semibold text-gray-700 group-hover:text-brand transition-colors">{type}</span>
                    <div className="w-32 h-10 bg-gray-100 rounded-lg group-hover:bg-brand/5 transition-colors flex items-center px-3">
                      <input type="number" placeholder="$0" className="w-full bg-transparent font-semibold text-right outline-none" />
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full bg-brand text-white font-semibold py-3.5 rounded-xl hover:bg-brand-dark transition-all mt-8 shadow-lg">
                Save Rates
              </button>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-b from-white to-surface py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-brand bg-brand/10 px-3 py-1.5 rounded-full mb-6">How It Works</span>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">How Osiris Works</h2>
              <p className="text-gray-600 text-lg max-w-2xl">Everything you need to run your business as a creator. Simple, transparent, and designed for your success.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              {[{ n: "1", t: "Create Your Profile", d: "Create your personal page and list your services for Instagram, TikTok, YouTube, and UGC." },
                { n: "2", t: "Share Your Link", d: "Share your custom link in your bio and social media. Brands can view and purchase your services." },
                { n: "3", t: "Start Earning", d: "Easily manage brand deals and get paid for your work directly through the platform." }
              ].map((s, i) => (
                <div key={i} className={`rounded-3xl p-8 text-white shadow-lg hover:shadow-xl transition-all ${["bg-gradient-to-br from-brand to-brand-dark", "bg-gradient-to-br from-gray-700 to-gray-800", "bg-gradient-to-br from-gray-800 to-gray-900"][i]}`}>
                  <span className="text-sm font-bold opacity-70 uppercase tracking-widest">Step {s.n}</span>
                  <h3 className="font-bold text-2xl mt-3 mb-3">{s.t}</h3>
                  <p className="text-sm opacity-90 leading-relaxed">{s.d}</p>
                </div>
              ))}
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[{ icon: Handshake, t: "Get Brand Deals", d: "Get discovered by thousands of brands on our marketplace looking to work with you." },
                { icon: CheckCircle, t: "Manage Collabs", d: "Easily keep track of brand deals and deadlines. Submit deliverables directly through the platform." },
                { icon: DollarSign, t: "Always Get Paid", d: "Funds are collected upfront and paid out to you when you complete the collaboration." },
                { icon: Link2, t: "Custom Link", d: "Share your custom URL in your link in bio and with brands. Drive traffic to your profile." },
                { icon: MessageCircle, t: "Instant Chat", d: "Receive messages from brands and communicate instantly throughout the collaboration." },
                { icon: FileText, t: "Taxes Made Simple", d: "We handle the filing of your 1099 forms. No more worrying about tax season." }
              ].map((f, i) => (
                <div key={i} className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:border-brand/20 transition-all group">
                  <div className="w-10 h-10 rounded-lg bg-brand/10 group-hover:bg-brand/20 flex items-center justify-center mb-4 transition-all">
                    <f.icon className="w-5 h-5 text-brand" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{f.t}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{f.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-b from-gray-900 to-black text-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative">
              <div className="absolute -top-4 -left-4 text-6xl opacity-10">&ldquo;</div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight relative z-10">
                &ldquo;Osiris advocates for their creators... from making sure that we get paid fairly to hosting events that bring brands and creators together&rdquo;
              </h2>
            </div>
            <div className="mt-10 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand to-brand-dark"></div>
              <div>
                <p className="font-semibold text-white">Conor McKenzie</p>
                <p className="text-sm text-gray-400">@conor_mckenzie</p>
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
