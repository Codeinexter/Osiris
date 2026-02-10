import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  return NextResponse.json({ success: true, deal: { id: "d" + Date.now(), ...body, status: "invited" } }, { status: 201 });
}
