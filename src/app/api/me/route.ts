import { NextResponse } from "next/server";
import { mockUsers } from "@/data/seed";

export async function GET() {
  const user = mockUsers[0];
  if (!user) return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  const { password: _, ...safeUser } = user;
  return NextResponse.json(safeUser);
}
