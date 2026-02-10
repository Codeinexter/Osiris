import { NextRequest, NextResponse } from "next/server";
import { creators } from "@/data/seed";

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  let filtered = [...creators];
  const niche = url.searchParams.get("niche");
  if (niche) filtered = filtered.filter((c) => c.niches.some((n) => n.toLowerCase() === niche.toLowerCase()));
  const platform = url.searchParams.get("platform");
  if (platform) filtered = filtered.filter((c) => c.platforms[platform as keyof typeof c.platforms]);
  const minFollowers = url.searchParams.get("minFollowers");
  if (minFollowers) filtered = filtered.filter((c) => c.followers >= Number(minFollowers));
  const maxFollowers = url.searchParams.get("maxFollowers");
  if (maxFollowers) filtered = filtered.filter((c) => c.followers <= Number(maxFollowers));
  const country = url.searchParams.get("country");
  if (country) filtered = filtered.filter((c) => c.audience.countries.some((co) => co.toLowerCase().includes(country.toLowerCase())));
  const q = url.searchParams.get("q");
  if (q) filtered = filtered.filter((c) => c.name.toLowerCase().includes(q.toLowerCase()) || c.handle.toLowerCase().includes(q.toLowerCase()) || c.niches.some((n) => n.toLowerCase().includes(q.toLowerCase())));
  return NextResponse.json(filtered);
}
