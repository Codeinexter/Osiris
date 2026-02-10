import { NextRequest, NextResponse } from "next/server";
import { creators } from "@/data/seed";

export async function GET(_req: NextRequest, { params }: { params: { handle: string } }) {
  const creator = creators.find((c) => c.handle === params.handle);
  if (!creator) return NextResponse.json({ error: "Creator not found" }, { status: 404 });
  return NextResponse.json(creator);
}
