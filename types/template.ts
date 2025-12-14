export type TemplateSearchItem = {
  id: number;
  templateName: string;
  slug: string;
  isPublic: boolean;
  licenseType: string | null;
  createdAt: string;
  userId: number;
};

export type SearchTemplateResponse = TemplateSearchItem[];
