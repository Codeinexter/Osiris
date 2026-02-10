import { NextRequest, NextResponse } from "next/server";
import { mockUsers } from "@/data/seed";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { email, password, role, name } = body;
  if (!email || !password || !role) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }
  const exists = mockUsers.find((u) => u.email === email);
  if (exists) {
    return NextResponse.json({ error: "User already exists" }, { status: 409 });
  }
  const newUser = {
    id: "u" + Date.now(),
    email,
    role,
    name: name || email.split("@")[0],
    handle: role === "creator" ? email.split("@")[0].toLowerCase() : undefined,
    brandSlug: role === "brand" ? email.split("@")[0].toLowerCase() : undefined,
    onboarded: false,
  };
  mockUsers.push({ ...newUser, password });
  const token = "mock_token_" + Date.now();
  return NextResponse.json({ user: newUser, token });
}
