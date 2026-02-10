"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/stores/auth";
import OnboardingStepper from "@/components/OnboardingStepper";
import Link from "next/link";

const STEPS = ["Basics", "Platforms", "Niche", "Audience", "Rates", "Finish"];
const NICHES = ["Fitness","Beauty","Tech","Food","Fashion","Finance","Travel","Wellness","Gaming","Education","Photography","Home","Lifestyle","Outdoors","Art","Sustainability"];
const COUNTRIES = ["United States","United Kingdom","Canada","India","Australia","Germany","Brazil","France","Japan","Mexico","South Korea","Spain","Italy","UAE"];

export default function CreatorOnboarding() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<Record<string, any>>({ niches: [], countries: [] });
  const router = useRouter();
  const { user, setUser } = useAuthStore();

  const update = (key: string, val: any) => setData((d) => ({ ...d, [key]: val }));
  const toggleNiche = (n: string) => update("niches", data.niches.includes(n) ? data.niches.filter((x: string) => x !== n) : [...data.niches, n]);
  const toggleCountry = (c: string) => update("countries", data.countries.includes(c) ? data.countries.filter((x: string) => x !== c) : [...data.countries, c]);

  const finish = () => {
    if (user) setUser({ ...user, onboarded: true });
    router.push("/app/creator");
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-2xl mx-auto px-4 py-12">
        <Link href="/" className="font-display text-2xl font-bold">Osiris</Link>
        <div className="mt-8">
          <OnboardingStepper steps={STEPS} currentStep={step} />
        </div>
        <div className="mt-8">
          {step === 0 && (
            <div className="space-y-4">
              <h2 className="font-display text-2xl font-bold">Tell us about yourself</h2>
              <p className="text-gray-500 text-sm">This helps brands find and connect with you.</p>
              <div><label className="block text-sm font-medium mb-1">Full name</label><input value={data.name || ""} onChange={(e) => update("name", e.target.value)} placeholder="Your full name" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand/20" /></div>
              <div><label className="block text-sm font-medium mb-1">Handle</label><input value={data.handle || ""} onChange={(e) => update("handle", e.target.value)} placeholder="@yourhandle" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand/20" /></div>
              <div><label className="block text-sm font-medium mb-1">Email</label><input value={data.email || user?.email || ""} onChange={(e) => update("email", e.target.value)} placeholder="you@email.com" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand/20" /></div>
              <div><label className="block text-sm font-medium mb-1">Location</label><input value={data.location || ""} onChange={(e) => update("location", e.target.value)} placeholder="City, Country" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand/20" /></div>
            </div>
          )}
          {step === 1 && (
            <div className="space-y-4">
              <h2 className="font-display text-2xl font-bold">Connect your platforms</h2>
              <p className="text-gray-500 text-sm">Add your social media handles so brands can see your reach.</p>
              <div><label className="block text-sm font-medium mb-1">Instagram</label><input value={data.instagram || ""} onChange={(e) => update("instagram", e.target.value)} placeholder="@handle" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand/20" /></div>
              <div><label className="block text-sm font-medium mb-1">TikTok</label><input value={data.tiktok || ""} onChange={(e) => update("tiktok", e.target.value)} placeholder="@handle" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand/20" /></div>
              <div><label className="block text-sm font-medium mb-1">YouTube</label><input value={data.youtube || ""} onChange={(e) => update("youtube", e.target.value)} placeholder="Channel name" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand/20" /></div>
            </div>
          )}
          {step === 2 && (
            <div className="space-y-4">
              <h2 className="font-display text-2xl font-bold">Pick your niches</h2>
              <p className="text-gray-500 text-sm">Select up to 5 categories that best describe your content.</p>
              <div className="flex flex-wrap gap-2">
                {NICHES.map((n) => (
                  <button key={n} onClick={() => toggleNiche(n)} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${data.niches.includes(n) ? "bg-brand text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}>{n}</button>
                ))}
              </div>
              <p className="text-xs text-gray-400">{data.niches.length}/5 selected</p>
            </div>
          )}
          {step === 3 && (
            <div className="space-y-4">
              <h2 className="font-display text-2xl font-bold">Your audience</h2>
              <p className="text-gray-500 text-sm">Help brands understand who follows you.</p>
              <div><label className="block text-sm font-medium mb-2">Top countries (select up to 3)</label>
                <div className="flex flex-wrap gap-2">{COUNTRIES.map((c) => (
                  <button key={c} onClick={() => toggleCountry(c)} className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${data.countries.includes(c) ? "bg-brand text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}>{c}</button>
                ))}</div>
              </div>
              <div><label className="block text-sm font-medium mb-1">Primary age range</label>
                <select value={data.ageRange || ""} onChange={(e) => update("ageRange", e.target.value)} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand/20">
                  <option value="">Select age range</option><option value="13-17">13-17</option><option value="18-24">18-24</option><option value="25-34">25-34</option><option value="35-44">35-44</option><option value="45+">45+</option>
                </select>
              </div>
            </div>
          )}
          {step === 4 && (
            <div className="space-y-4">
              <h2 className="font-display text-2xl font-bold">Set your rates</h2>
              <p className="text-gray-500 text-sm">Brands will see these when reviewing your profile. You can change them anytime.</p>
              {["Instagram Reel", "TikTok / YT Short", "Instagram Story", "YouTube Integration"].map((type) => (
                <div key={type}><label className="block text-sm font-medium mb-1">{type}</label>
                  <div className="relative"><span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">$</span>
                    <input type="number" value={data[type] || ""} onChange={(e) => update(type, e.target.value)} placeholder="0" className="w-full pl-8 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand/20" />
                  </div>
                </div>
              ))}
            </div>
          )}
          {step === 5 && (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-green-100 rounded-full mx-auto flex items-center justify-center mb-6"><span className="text-4xl">🎉</span></div>
              <h2 className="font-display text-3xl font-bold mb-2">You&apos;re all set!</h2>
              <p className="text-gray-500 max-w-sm mx-auto">Your creator profile is ready. Start exploring brand partnerships and landing your first deal.</p>
            </div>
          )}
        </div>
        <div className="flex justify-between mt-10">
          {step > 0 && step < 5 && <button onClick={() => setStep(step - 1)} className="px-6 py-3 border border-gray-200 rounded-xl text-sm font-medium hover:bg-gray-50">Back</button>}
          {step < 5 ? (
            <button onClick={() => setStep(step + 1)} className="ml-auto px-8 py-3 bg-black text-white font-semibold rounded-xl text-sm hover:bg-gray-800">Continue</button>
          ) : (
            <button onClick={finish} className="ml-auto px-8 py-3 bg-brand text-white font-semibold rounded-xl text-sm hover:bg-brand-dark">Go to Dashboard</button>
          )}
        </div>
      </div>
    </div>
  );
}
