import { NextRequest, NextResponse } from "next/server";

export const templateBySlug = async (slug: string) => {
  const res = await fetch(
    `${
      process.env.NEXT_PUBLIC_API_BASE_URL
    }/api/v1/templates/by-slug/${encodeURIComponent(slug)}`,
    {
      headers: {
        "x-api-key": process.env.API_KEY!,
      },
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Template fetch failed");
  }

  return res.json();
};

export async function POST(req: NextRequest) {
  const body = await req.json();

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/templates`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.API_KEY!,
      },
      body: JSON.stringify(body),
    }
  );

  if (!res.ok) {
    return NextResponse.json(
      { error: "Template creation failed" },
      { status: res.status }
    );
  }

  const data = await res.json();
  return NextResponse.json(data, { status: 201 });
}
