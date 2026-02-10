import { NextRequest, NextResponse } from "next/server";
import { campaigns } from "@/data/seed";

export async function GET() {
  return NextResponse.json(campaigns);
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const newCampaign = { id: "c" + Date.now(), ...body, status: "draft", creatorsInvited: 0, creatorsAccepted: 0, createdAt: new Date().toISOString().split("T")[0] };
  campaigns.push(newCampaign);
  return NextResponse.json(newCampaign, { status: 201 });
}
