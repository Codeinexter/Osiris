import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTAStripYellow() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-7xl mx-auto bg-gradient-to-r from-accent via-yellow-300 to-accent rounded-3xl py-16 sm:py-24 px-8 sm:px-12 text-center shadow-xl relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-72 h-72 bg-black rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-black rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>
        <div className="relative z-10">
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-black leading-tight mb-4">
            Join the marketplace.
          </h2>
          <p className="text-gray-800 text-lg sm:text-xl max-w-2xl mx-auto mb-10 font-medium">Find your next match and start collaborating with success.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth?role=creator" className="inline-flex items-center justify-center gap-2 bg-white text-black font-semibold px-8 py-4 rounded-full hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl">
              I'm a Creator <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/auth?role=brand" className="inline-flex items-center justify-center gap-2 bg-black/20 hover:bg-black/30 text-black font-semibold px-8 py-4 rounded-full transition-all backdrop-blur-sm">
              I'm a Brand <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
