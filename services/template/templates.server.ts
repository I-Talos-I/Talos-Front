export const templateBySlug = async (slug: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/templates/by-slug/${encodeURIComponent(slug)}`,
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
