import { NextRequest, NextResponse } from "next/server";
import { mockUsers } from "@/data/seed";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { email, password } = body;
  const user = mockUsers.find((u) => u.email === email && u.password === password);
  if (!user) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }
  const token = "mock_token_" + Date.now();
  const { password: _, ...safeUser } = user;
  return NextResponse.json({ user: safeUser, token });
}
