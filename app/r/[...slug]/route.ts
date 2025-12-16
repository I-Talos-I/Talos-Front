/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  ctx: { params: Promise<{ slug?: string[] }> }
) {
  try {
    const { slug } = await ctx.params;

    if (!slug || slug.length === 0) {
      return NextResponse.json(
        { message: "Slug is required" },
        { status: 400 }
      );
    }

    const path = slug.join("/");

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/templates/by-slug/${encodeURIComponent(
        path
      )}`,
      {
        headers: {
          "x-api-key": process.env.API_KEY!,
        },
        cache: "no-store",
      }
    );

    if (!res.ok) {
      // intenta leer el error del backend
      let errorBody: any = null;
      try {
        errorBody = await res.json();
      } catch {
        /* backend devolvió basura o nada */
      }

      return NextResponse.json(
        {
          message: "Failed to fetch template",
          backendStatus: res.status,
          backendError: errorBody,
        },
        { status: res.status }
      );
    }

    const data = await res.json();

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error("Template by slug error:", error);

    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
