import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const q = searchParams.get("q");

    if (!q) {
      return NextResponse.json(
        { error: "Query parameter 'q' is required" },
        { status: 400 }
      );
    }

    const apiUrl = `${
      process.env.NEXT_PUBLIC_API_BASE_URL
    }/api/v1/templates/search?q=${encodeURIComponent(q)}`;

    let res: Response;

    try {
      res = await fetch(apiUrl, {
        headers: {
          "x-api-key": process.env.API_KEY ?? "",
        },
        cache: "no-store",
      });
    } catch (err) {
      console.error("FETCH FAILED", err);

      return NextResponse.json(
        { error: "Failed to connect to API" },
        { status: 502 }
      );
    }

    const contentType = res.headers.get("content-type");
    const rawBody = await res.text();

    if (!res.ok) {
      console.error("API ERROR", {
        status: res.status,
        body: rawBody,
      });

      return NextResponse.json(
        {
          error: "API returned error",
          status: res.status,
          detail: rawBody || null,
        },
        { status: res.status }
      );
    }

    if (!rawBody) {
      return NextResponse.json([]);
    }

    if (!contentType?.includes("application/json")) {
      console.error("INVALID CONTENT-TYPE", {
        contentType,
        body: rawBody,
      });

      return NextResponse.json(
        { error: "API did not return JSON" },
        { status: 502 }
      );
    }

    try {
      const data = JSON.parse(rawBody);
      return NextResponse.json(data);
    } catch (err) {
      console.error("JSON PARSE ERROR", rawBody);

      return NextResponse.json(
        { error: "Invalid JSON received from API" },
        { status: 502 }
      );
    }
  } catch (err) {
    console.error("UNEXPECTED SERVER ERROR", err);

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
