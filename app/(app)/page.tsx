import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Package, Shield, Terminal, Zap } from "lucide-react";

export default function Page() {
  return (
    <div className="min-h-screen bg-background">

      {/* Hero Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-4 px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
              Command Template Manager
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance">
              Automate Your Workflow with Reusable Templates
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
              Like npm, but for command sequences. Define your workflows once,
              run them everywhere. Perfect for scaffolding projects, deployment
              scripts, and complex workflows.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="w-full sm:w-auto">
                Download
              </Button>
              {/* <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto bg-transparent"
              >
                View Documentation
              </Button> */}
            </div>
            <div className="mt-8 inline-flex items-center gap-2 text-sm text-muted-foreground">
              <Terminal className="w-4 h-4" />
              {/* <code className="bg-muted px-2 py-1 rounded text-xs font-mono">
                npm install -g talos-cli
              </code> */}
            </div>
          </div>

          {/* Code Example */}
          <div className="max-w-4xl mx-auto mt-16">
            <Card className="bg-card border border-border overflow-hidden">
              <div className="bg-muted border-b border-border px-4 py-2 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                <span className="text-xs text-muted-foreground ml-2">
                  terminal
                </span>
              </div>
              <div className="p-6 font-mono text-sm">
                <div className="space-y-2">
                  <div className="flex gap-2">
                    <span className="text-muted-foreground">$</span>
                    <span className="text-accent">talos run dotnet-ddd</span>
                  </div>
                  <div className="text-muted-foreground pl-4">
                    → Creating project structure...
                  </div>
                  <div className="text-muted-foreground pl-4">
                    → Installing dependencies...
                  </div>
                  <div className="text-muted-foreground pl-4">
                    → Setting up Domain-Driven Design layers...
                  </div>
                  <div className="text-primary pl-4">
                    ✓ Project ready in 12.3s
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              Built for Developer Efficiency
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Stop repeating yourself. Package your command sequences into
              templates and share them with your team.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="p-6 bg-card border border-border hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Terminal className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Template Registry
              </h3>
              <p className="text-muted-foreground text-pretty">
                Browse and install templates from the community. Share your own
                workflows and help others automate their work.
              </p>
            </Card>

            <Card className="p-6 bg-card border border-border hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Lightning Fast
              </h3>
              <p className="text-muted-foreground text-pretty">
                Built with performance in mind. Templates execute in parallel
                when possible, saving you precious development time.
              </p>
            </Card>

            <Card className="p-6 bg-card border border-border hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Safe & Secure
              </h3>
              <p className="text-muted-foreground text-pretty">
                Review templates before running. Sandbox execution prevents
                unwanted side effects. Full audit logs included.
              </p>
            </Card>

            <Card className="p-6 bg-card border border-border hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Package className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Cross-Platform
              </h3>
              <p className="text-muted-foreground text-pretty">
                Works on Windows, macOS, and Linux. Write once, run anywhere.
                Perfect for teams with mixed environments.
              </p>
            </Card>

            <Card className="p-6 bg-card border border-border hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🔄</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Version Control
              </h3>
              <p className="text-muted-foreground text-pretty">
                Track changes to your templates. Roll back when needed. Semantic
                versioning keeps dependencies stable.
              </p>
            </Card>

            <Card className="p-6 bg-card border border-border hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">⚙️</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Configurable
              </h3>
              <p className="text-muted-foreground text-pretty">
                Use variables, environment files, and prompts. Templates adapt
                to your specific needs without modification.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Popular Templates */}
      <section id="templates" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              Popular Templates
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Get started with community-favorite templates for common
              workflows.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {[
              {
                name: "dotnet-ddd",
                description: "Domain-Driven Design project structure for .NET",
                downloads: "12.5k",
                commands: "8 commands",
              },
              {
                name: "react-typescript",
                description: "React + TypeScript + Vite + Tailwind CSS setup",
                downloads: "24.8k",
                commands: "6 commands",
              },
              {
                name: "microservices-k8s",
                description:
                  "Microservices scaffolding with Kubernetes configs",
                downloads: "8.2k",
                commands: "15 commands",
              },
              {
                name: "ci-cd-pipeline",
                description:
                  "GitHub Actions workflow for automated deployments",
                downloads: "18.3k",
                commands: "5 commands",
              },
            ].map((template, index) => (
              <Card
                key={index}
                className="p-6 bg-card border border-border hover:border-primary/50 transition-all hover:shadow-lg"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <code className="text-lg font-mono font-semibold text-primary">
                        {template.name}
                      </code>
                      <span className="text-xs text-muted-foreground">
                        {template.downloads} downloads
                      </span>
                    </div>
                    <p className="text-muted-foreground mb-3">
                      {template.description}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>{template.commands}</span>
                      <span>•</span>
                      <code className="text-xs bg-muted px-2 py-1 rounded font-mono">
                        talos run {template.name}
                      </code>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Install
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="ghost" className="text-primary">
              Browse All Templates →
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              Ready to Automate Your Workflow?
            </h2>
            <p className="text-lg mb-8 text-primary-foreground/90 text-pretty">
              Join thousands of developers who have automated their repetitive
              tasks with Talos.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                variant="secondary"
                className="w-full sm:w-auto"
              >
                Download for Free
              </Button>
              {/* <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
              >
                Read Documentation
              </Button> */}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">
                    T
                  </span>
                </div>
                <span className="font-bold text-foreground">Talos</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Command template manager for modern developers.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-3">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Templates
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Changelog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-3">Resources</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    API Reference
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Examples
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Community
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-3">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-12 pt-8 text-center text-sm text-muted-foreground">
            <p>
              © 2025 Talos by Vandlee. Named after the bronze automaton of Greek mythology.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
