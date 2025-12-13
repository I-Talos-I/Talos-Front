"use client";

import { useSearchParams } from "next/navigation";

export default function SearchClient() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") ?? "";

  return (
    <div className="mx-auto max-w-7xl px-6 py-8">
      {query && (
        <p className="mt-2 text-sm text-muted-foreground">
          Showing results for <span className="font-medium">&quot;{query}&quot;</span>
        </p>
      )}

      {/* resto del JSX igual */}
    </div>
  );
}
