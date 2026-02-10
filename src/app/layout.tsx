import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Osiris — Creator-Brand Collaboration Platform",
  description: "Discover brand champions. Search creators, run campaigns, approve content, and track performance — one workspace for social commerce.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white antialiased">{children}</body>
    </html>
  );
}
