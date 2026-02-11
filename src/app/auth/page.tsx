"use client";
import { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ArrowRight, Star } from "lucide-react";

function AuthContent() {
  const params = useSearchParams();
  const tab = params.get("tab") || "signup";

  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      <div className="flex flex-col justify-center px-8 sm:px-16 lg:px-24 py-12">
        <Link href="/" className="font-display text-2xl font-bold mb-12 animate-fade-in-down">Osiris</Link>
        {tab === "login" ? (
          <>
            <h1 className="font-display text-3xl sm:text-4xl font-bold mb-2 animate-fade-in-down" style={{animationDelay: "0.1s"}}>Welcome back</h1>
            <p className="text-gray-500 mb-8 animate-fade-in-down" style={{animationDelay: "0.2s"}}>Log in to continue managing your campaigns and collaborations.</p>
            <div className="space-y-4 max-w-md">
              <Link href="/auth/login?role=creator" className="flex items-center justify-between bg-surface hover:shadow-card-hover transition-all rounded-3xl p-6 border border-gray-200 hover:border-brand/30 hover-lift animate-fade-in-up">
                <div><h3 className="font-bold text-lg">Creator</h3><p className="text-sm text-gray-600">Access your deals &amp; insights</p></div>
                <ArrowRight className="w-5 h-5 text-brand transition-smooth group-hover:translate-x-1" />
              </Link>
              <Link href="/auth/login?role=brand" className="flex items-center justify-between bg-surface hover:shadow-card-hover transition-all rounded-3xl p-6 border border-gray-200 hover:border-brand/30 hover-lift animate-fade-in-up" style={{animationDelay: "0.1s"}}>
                <div><h3 className="font-bold text-lg">Brand</h3><p className="text-sm text-gray-600">Manage campaigns &amp; creators</p></div>
                <ArrowRight className="w-5 h-5 text-brand transition-smooth group-hover:translate-x-1" />
              </Link>
            </div>
            <p className="text-sm text-gray-500 mt-8 animate-fade-in-down" style={{animationDelay: "0.4s"}}>Don&apos;t have an account? <Link href="/auth?tab=signup" className="underline font-medium text-black hover:text-brand transition-colors">Sign up</Link></p>
          </>
        ) : (
          <>
            <h1 className="font-display text-3xl sm:text-4xl font-bold mb-2 animate-fade-in-down" style={{animationDelay: "0.1s"}}>Join Osiris</h1>
            <div className="flex items-center gap-2 mb-8 animate-fade-in-down" style={{animationDelay: "0.2s"}}>
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-red-500 text-red-500 transition-smooth hover:scale-125" style={{animationDelay: `${i * 0.05}s`}} />)}
              <span className="text-xs font-bold text-red-600 uppercase tracking-wide">&ldquo;Best customer support&rdquo;</span>
            </div>
            <div className="grid grid-cols-2 gap-4 max-w-lg">
              <Link href="/auth/signup?role=brand" className="bg-surface hover:shadow-card-hover transition-all rounded-3xl p-6 col-span-1 row-span-2 flex flex-col justify-end border border-gray-200 hover:border-brand/30 hover-lift animate-fade-in-up">
                <h3 className="font-bold text-lg">Brand or Agency</h3>
                <p className="text-sm text-gray-600">Match with creators</p>
                <ArrowRight className="w-5 h-5 text-brand mt-2 transition-smooth group-hover:translate-x-1" />
              </Link>
              <Link href="/auth/signup?role=creator" className="bg-surface hover:shadow-card-hover transition-all rounded-3xl p-6 flex flex-col justify-between border border-gray-200 hover:border-brand/30 hover-lift animate-fade-in-up" style={{animationDelay: "0.1s"}}>
                <div>
                  <h3 className="font-bold text-lg">Creator</h3>
                  <p className="text-sm text-gray-600">Match with brands</p>
                </div>
                <ArrowRight className="w-5 h-5 text-brand mt-2 transition-smooth group-hover:translate-x-1" />
              </Link>
              <div className="bg-gray-50 rounded-3xl p-6 flex flex-col justify-between opacity-60 border border-gray-200 transition-smooth hover:opacity-100 animate-fade-in-up" style={{animationDelay: "0.2s"}}>
                <div>
                  <h3 className="font-bold text-lg">Talent Agency</h3>
                  <p className="text-sm text-gray-500">Coming soon</p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-300 mt-2" />
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-8 animate-fade-in-down" style={{animationDelay: "0.4s"}}>Already have an account? <Link href="/auth?tab=login" className="underline font-medium text-black hover:text-brand transition-colors">Log In</Link></p>
          </>
        )}
      </div>
      <div className="hidden lg:block bg-gradient-to-br from-brand via-neon-purple to-accent relative overflow-hidden animate-fade-in-right">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-80 h-96 bg-gradient-to-br from-neon-pink to-neon-purple rounded-[3rem] transform rotate-3 shadow-lg animate-float"></div>
        </div>
      </div>
    </div>
  );
}

export default function AuthPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <AuthContent />
    </Suspense>
  );
}
