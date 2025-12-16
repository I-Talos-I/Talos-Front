export const searchTemplate = async (q: string) => {
  const res = await fetch(`/api/templates/search?q=${encodeURIComponent(q)}`);

  if (!res.ok) {
    throw new Error("Search failed");
  }

  return res.json();
};
