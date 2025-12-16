import { templateBySlug } from "@/services/template/templates.server";
import TemplateView from "./TemplateView";

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const template = await templateBySlug(slug);

  return <TemplateView template={template} />;
}
