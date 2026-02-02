import { NextResponse } from "next/server";
import { signIn } from "@/app/(auth)/auth";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const redirectUrl = searchParams.get("redirectUrl") || "/";

  // Mock: directly sign in
  return signIn("mock", { redirect: true, redirectTo: redirectUrl });
}
