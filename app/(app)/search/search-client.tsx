
"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Spinner } from "@/components/ui/spinner";
import { searchTemplate } from "@/services";
import { SearchTemplateResponse } from "@/types/template";
import { formatDate, formatRelativeDate } from "@/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useState } from "react";

export default function SearchClient() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") ?? "";

  const [results, setResults] = useState<SearchTemplateResponse | null>(null);
  const [loading, setLoading] = useState(true);

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

  React.useEffect(() => {
    if (!query) return;

    handleSearch();
  }, [query]);

  return (
    <div className="max-w-3xl w-full mx-auto px-6 py-8">
      {query && (
        <div className="mx-auto space-y-3 mb-4">
          <p className="mt-2 text-sm text-muted-foreground">
            Mostrando resultados para{" "}
            <span className="font-medium">&quot;{query}&quot;</span>
          </p>
          <Separator />
        </div>
      )}

      {loading && (
        <>
          <Spinner />
          <br />
        </>
      )}

      {results && results.length > 0 ? (
        <div>
          {results.map((template) => (
            <Card
              key={template.id}
              className="p-6 bg-card border border-border hover:border-primary/50 transition-all hover:shadow-lg"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <code className="text-lg font-mono font-semibold text-primary">
                      {template.name}
                    </code>
                  </div>
                  <p className="text-muted-foreground mb-3">
                    {template.description}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>talos install {template.slug}</span>
                  </div>

                  <div className="text-sm">
                    <span>
                      by <strong>{template.userName}</strong>
                    </span>
                    {" - "}
                    <time title={formatDate(template.createdAt)}>
                      {formatRelativeDate(template.createdAt)}
                    </time>
                  </div>
                </div>
                <Button variant="outline" size="sm" asChild>
                  <Link href={`/template/${template.slug}`}>
                    Install <ArrowRight />
                  </Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <>{!loading && <h2>No hay resultados.</h2>}</>
      )}
    </div>
  );
}
