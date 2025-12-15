export type TemplateSearchItem = {
  id: number;
  name: string;
  description: string | null;
  slug: string;
  isPublic: boolean;
  licenseType: string | null;
  createdAt: string;
  userName: string;
};

export type SearchTemplateResponse = TemplateSearchItem[];
