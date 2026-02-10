import { NextRequest, NextResponse } from "next/server";
import { brands } from "@/data/seed";

export async function GET(_req: NextRequest, { params }: { params: { slug: string } }) {
  const brand = brands.find((b) => b.slug === params.slug);
  if (!brand) return NextResponse.json({ error: "Brand not found" }, { status: 404 });
  return NextResponse.json(brand);
}
