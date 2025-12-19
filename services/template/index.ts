import { CreateTemplate, TemplateResponse } from "@/types/template";
import { AxiosResponse } from "axios";
import { api } from "..";

export const searchTemplate = async (q: string) => {
  const res = await fetch(`/api/templates/search?q=${encodeURIComponent(q)}`);

  if (!res.ok) {
    throw new Error("Search failed");
  }

  return res.json();
};

export const templateBySlug = async (slug: string) => {
  const res = await fetch(`/api/templates/by-slug/${slug}`);
  return res.json();
};

export const createTemplate = async (
  template: CreateTemplate
): Promise<TemplateResponse> => {
  const response: AxiosResponse<TemplateResponse> = await api.post(
    "/templates",
    template
  );

  return response.data;
};
