import Link from "next/link";

export default function CTAStripYellow() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-7xl mx-auto bg-accent rounded-[2.5rem] py-16 sm:py-24 px-8 text-center shadow-card-hover">
        <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
          Join the marketplace.<br />Find your next match.
        </h2>
        <Link href="/auth" className="inline-block mt-8 bg-gray-900 text-white font-semibold text-sm sm:text-base px-8 py-4 rounded-full hover:bg-gray-800 transition-all shadow-lg">
          Get Started
        </Link>
      </div>
    </section>
  );
}
