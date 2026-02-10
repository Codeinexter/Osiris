import { NextRequest, NextResponse } from "next/server";
import { deals } from "@/data/seed";

export async function GET() {
  return NextResponse.json(deals);
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const newDeal = { id: "d" + Date.now(), ...body, status: "invited", createdAt: new Date().toISOString().split("T")[0] };
  deals.push(newDeal);
  return NextResponse.json(newDeal, { status: 201 });
}
