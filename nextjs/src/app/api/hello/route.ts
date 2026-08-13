import { NextResponse } from "next/server";
import { greet } from "@/lib/greet";

export function GET(request: Request) {
  const name = new URL(request.url).searchParams.get("name") ?? "world";
  return NextResponse.json({ message: greet(name) });
}
