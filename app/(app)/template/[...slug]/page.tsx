import { templateBySlug } from "@/services/template/templates.server";
import TemplateView from "./TemplateView";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;

  const fullSlug = slug.join("/");

  const template = await templateBySlug(fullSlug);

  return <TemplateView template={template} />;
}
