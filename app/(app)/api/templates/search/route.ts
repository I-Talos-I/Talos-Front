import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const q = searchParams.get("q");

  if (!q) {
    return NextResponse.json(
      { message: "Query required" },
      { status: 400 }
    );
  }

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/templates/search?q=${encodeURIComponent(q)}`,
    {
      headers: {
        "x-api-key": process.env.API_KEY!,
      },
      cache: "no-store",
    }
  );

  const text = await res.text();

  if (!res.ok) {
    return NextResponse.json(
      { message: "API error", detail: text },
      { status: res.status }
    );
  }

  if (!text) {
    return NextResponse.json([]);
  }

  return NextResponse.json(JSON.parse(text));
}
