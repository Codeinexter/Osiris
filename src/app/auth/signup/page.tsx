"use client";
import { useState, Suspense } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useAuthStore } from "@/stores/auth";
import { Eye, EyeOff, ArrowLeft } from "lucide-react";
import { Toast } from "@/components/UIComponents";

function SignupForm() {
  const params = useSearchParams();
  const role = params.get("role") || "creator";
  const router = useRouter();
  const { login } = useAuthStore();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (password.length < 10) { setError("Password must be at least 10 characters long."); return; }
    setLoading(true);
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, role, name: email.split("@")[0] }),
      });
      const data = await res.json();
      if (!res.ok) { setError(data.error || "Signup failed"); setLoading(false); return; }
      login(data.user, data.token);
      router.push(role === "creator" ? "/onboarding/creator" : "/onboarding/brand");
    } catch { setError("Something went wrong."); }
    setLoading(false);
  };

  const isCreator = role === "creator";

  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-white">
      <div className="flex flex-col justify-center px-6 sm:px-12 lg:px-20 py-12 lg:py-0">
        <Link href="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 w-fit">
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm font-medium">Back to home</span>
        </Link>
        <div className="mb-8">
          <Link href="/" className="font-display text-2xl font-bold">Osiris</Link>
        </div>
        <div className="mb-8">
          <span className="inline-block bg-accent text-black text-xs font-bold px-3 py-1 rounded-full mb-4">
            {isCreator ? "Join as a Creator" : "Join as a Brand"}
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold mb-3">
            {isCreator ? "Get paid to do what you love" : "Build your creator roster"}
          </h1>
          <p className="text-gray-600 text-lg">
            {isCreator
              ? "Find collaborations that excite you and track approvals."
              : "Find top creators, manage campaigns, and measure ROI."}
          </p>
        </div>
        <form onSubmit={handleSubmit} className="w-full max-w-md space-y-5">
          <div>
            <label className="block text-sm font-semibold mb-2 text-gray-900">Email address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full px-4 py-3.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 transition-all"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2 text-gray-900">Password</label>
            <div className="relative">
              <input
                type={showPw ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••"
                className="w-full px-4 py-3.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 transition-all pr-12"
                required
              />
              <button
                type="button"
                onClick={() => setShowPw(!showPw)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showPw ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2">Minimum 10 characters</p>
          </div>
          {error && <p className="text-sm text-red-600 bg-red-50 px-4 py-3 rounded-lg">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-brand hover:bg-brand-dark text-white font-semibold py-3.5 rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed mt-6"
          >
            {loading ? "Creating account..." : "Get started"}
          </button>
          <p className="text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link href={`/auth/login?role=${role}`} className="font-semibold text-brand hover:underline">
              Sign in
            </Link>
          </p>
          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-xs font-medium text-gray-500">or</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>
          <button
            type="button"
            onClick={() => setToast("Google signup coming soon")}
            className="w-full border border-gray-300 py-3.5 rounded-xl font-medium text-sm flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.1"/><text x="12" y="14" textAnchor="middle" fill="currentColor" fontSize="10" fontWeight="bold">G</text></svg>
            Sign up with Google
          </button>
          <button
            type="button"
            onClick={() => setToast("Apple signup coming soon")}
            className="w-full border border-gray-300 py-3.5 rounded-xl font-medium text-sm flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" opacity="0.1"/><text x="12" y="14" textAnchor="middle" fill="currentColor" fontSize="10" fontWeight="bold">A</text></svg>
            Sign up with Apple
          </button>
          <p className="text-xs text-gray-500 text-center pt-4 border-t border-gray-200">
            By signing up, you agree to our{" "}
            <Link href="/legal" className="text-brand font-semibold hover:underline">Terms</Link>
            {" "}and{" "}
            <Link href="/legal" className="text-brand font-semibold hover:underline">Privacy Policy</Link>.
          </p>
        </form>
      </div>
      <div className="hidden lg:flex bg-gradient-to-br from-accent via-yellow-200 to-orange-200 relative overflow-hidden items-center justify-center">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-brand rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>
        <div className="text-center z-10">
          <div className="inline-block">
            <p className="font-display text-4xl font-bold text-gray-900 mb-2">
              {isCreator ? "Join thousands" : "Scale faster"}
            </p>
            <p className="text-gray-700 text-lg">
              {isCreator
                ? "of creators earning through Osiris"
                : "with top creator partnerships"}
            </p>
          </div>
        </div>
      </div>
      {toast && <Toast message={toast} onClose={() => setToast("")} />}
    </div>
  );
}

export default function SignupPage() {
  return <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}><SignupForm /></Suspense>;
}
