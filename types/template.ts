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

export interface TemplateDependency {
  name: string;
  versions: string[];
  commands: {
    linux: string[];
    windows: string[];
    macOS: string[];
  };
}

export interface CreateTemplate {
  name: string;
  description: string;
  repositoryUrl: string;
  isPublic: boolean;
  licenseType: string;
  dependencies: TemplateDependency[];
}

export interface TemplateResponse extends CreateTemplate {
  id: string;
  createdAt: string;
  updatedAt: string;
}
