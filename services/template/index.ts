import { api } from "@/services";
import { SearchTemplateResponse } from "@/types/template";

export const searchTemplate = async (q: string): Promise<SearchTemplateResponse> => {
  const response = await api.get<SearchTemplateResponse>(
    "/templates/search",
    {
      params: { q }
    }
  );

  return response.data;
};
