/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { Item, ItemContent, ItemDescription, ItemGroup, ItemTitle } from "@/components/ui/item";
import { Separator } from "@/components/ui/separator";
import { searchTemplate } from "@/services";
import { SearchTemplateResponse } from "@/types/template";
import { formatDate, formatRelativeDate } from "@/utils";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function SearchClient() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") ?? "";

  const [results, setResults] = useState<SearchTemplateResponse | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);

    try {
      const response = await searchTemplate(query);
      setResults(response);
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      }

      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (!query) return;

    handleSearch();
  }, [query]);

  console.log(results);

  return (
    <div className="max-w-lg mx-auto px-6 py-8">
      {query && (
        <div className="max-w-lg mx-auto space-y-3 mb-4">
          <p className="mt-2 text-sm text-muted-foreground">
            Mostrando resultados para{" "}
            <span className="font-medium">&quot;{query}&quot;</span>
          </p>
          <Separator />
        </div>
      )}

      {loading && <p>Searching…</p>}

      {results && (
        <ItemGroup className="flex w-full flex-col max-w-lg gap-3 mx-auto">
          {results.map((template) => (
            <Item variant="outline" key={template.id} asChild>
              <Link href={`/template/${template.slug}`}>
                <ItemContent>
                  <ItemTitle>{template.templateName}</ItemTitle>
                  <ItemDescription>
                    <time title={formatDate(template.createdAt)}>
                      {formatRelativeDate(template.createdAt)}
                    </time>
                  </ItemDescription>
                </ItemContent>
              </Link>
            </Item>
          ))}
        </ItemGroup>
      )}
    </div>
  );
}
