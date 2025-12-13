"use client";

import { useSearchParams } from "next/navigation";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") ?? "";

  return (
    <div className="mx-auto max-w-7xl px-6 py-8">
      {/* Search bar */}
      <div className="mb-8">

        {query && (
          <p className="mt-2 text-sm text-muted-foreground">
            Showing results for <span className="font-medium">&quot;{query}&quot;</span>
          </p>
        )}
      </div>

      {/* Layout */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-[240px_1fr]">
        {/* Filters */}
        <aside className="space-y-6 text-sm">
          <div>
            <h3 className="mb-2 font-semibold">Sort</h3>
            <ul className="space-y-1 text-muted-foreground">
              <li>Relevance</li>
              <li>Most popular</li>
              <li>Recently updated</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-2 font-semibold">Type</h3>
            <ul className="space-y-1 text-muted-foreground">
              <li>Packages</li>
              <li>Tools</li>
              <li>Libraries</li>
            </ul>
          </div>
        </aside>

        {/* Results */}
        <main className="space-y-6">
          {[1, 2, 3].map((item) => (
            <article
              key={item}
              className="rounded-lg border p-4 hover:bg-muted/50 transition"
            >
              <div className="flex items-center justify-between">
                <h2 className="font-semibold">talos-ui</h2>
                <span className="text-xs text-muted-foreground">
                  v1.2.{item}
                </span>
              </div>

              <p className="mt-2 text-sm text-muted-foreground">
                Modern dark UI components for React. Clean, fast and
                opinionated.
              </p>

              <div className="mt-3 flex gap-4 text-xs text-muted-foreground">
                <span>⭐ 1.2k</span>
                <span>📦 45k/week</span>
                <span>MIT</span>
              </div>
            </article>
          ))}
        </main>
      </div>
    </div>
  );
}
