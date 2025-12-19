import { CreateTemplate } from "@/types/template";

export const searchTemplate = async (q: string) => {
  const res = await fetch(`/api/templates/search?q=${encodeURIComponent(q)}`);

  if (!res.ok) {
    throw new Error("Search failed");
  }

  return res.json();
};

export const createTemplate = async (template: CreateTemplate) => {
  const res = await fetch("/api/templates", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(template),
  });

  if (!res.ok) {
    throw new Error("Template creation failed");
  }

  return res.json();
};
