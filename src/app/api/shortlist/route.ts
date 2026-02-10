import { NextRequest, NextResponse } from "next/server";

const shortlist: string[] = [];

export async function POST(req: NextRequest) {
  const { creatorId } = await req.json();
  if (!shortlist.includes(creatorId)) shortlist.push(creatorId);
  return NextResponse.json({ success: true, shortlist });
}
