"use client";

import { useState } from "react";
import ReactMarkdown from "react-markdown";

type Template = {
  id: number;
  name: string;
  description: string;
  slug: string;
  isPublic: boolean;
  licenseType: string;
  createdAt: string;
  userName: string | null;
  dependencies: {
    name: string;
    versions: string[];
    commands: {
      linux: string[];
      windows: string[];
      macOS: string[];
    };
  }[];
};

export default function TemplateView({ template }: { template: Template }) {
  const command = `talos install ${template.slug}`;
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <main className="space-y-6 mt-5 max-w-xl mx-auto">
      {/* Header */}
      <header>
        <h1 className="text-2xl font-bold">{template.name}</h1>
        <ReactMarkdown>
          {template.description}
        </ReactMarkdown>
        <p className="text-muted-foreground">{template.description}</p>
        <div className="text-sm opacity-70 mt-2">
          <span>Slug: {template.slug}</span> ·{" "}
          <span>License: {template.licenseType}</span> ·{" "}
          <span>{template.isPublic ? "Public" : "Private"}</span>
        </div>
      </header>

      {/* Install command */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Comando</h2>

        <div
          onClick={handleCopy}
          className="group flex items-center justify-between gap-3 cursor-pointer
                     bg-black/80 text-white px-4 py-3 rounded-lg text-sm
                     hover:bg-black transition"
        >
          <code className="font-mono">{command}</code>
          <span className="text-xs opacity-70 group-hover:opacity-100">
            {copied ? "Copiado ✓" : "Copiar"}
          </span>
        </div>
      </section>

      {/* Dependencies */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Dependencies</h2>

        {template.dependencies.length === 0 && (
          <p className="opacity-60">No dependencies</p>
        )}

        <div className="space-y-4">
          {template.dependencies.map((dep) => (
            <div key={dep.name} className="border rounded-lg p-4 space-y-3">
              <h3 className="font-semibold">{dep.name}</h3>

              <div>
                <span className="text-sm opacity-70">Versions:</span>{" "}
                {dep.versions.length > 0 ? dep.versions.join(", ") : "Any"}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                {(["linux", "windows", "macOS"] as const).map((os) => (
                  <div key={os}>
                    <h4 className="font-medium mb-1">{os}</h4>
                    {dep.commands[os].length > 0 ? (
                      <pre className="bg-black/80 text-white p-2 rounded text-xs overflow-x-auto">
                        {dep.commands[os].join("\n")}
                      </pre>
                    ) : (
                      <span className="opacity-60">No commands</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
