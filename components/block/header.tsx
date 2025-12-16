"use client";

import { useAuth } from "@/hooks/useAuth";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { Button } from "../ui/button";
import { SearchBar } from "./search-bar";

const UserMenu = () => {
  const { account } = useAuth();

  if (!account) {
    return (
      <>
        <Button variant="outline" asChild>
          <Link href="/auth/register">Registrarse</Link>
        </Button>
        <Button variant="ghost" asChild>
          <Link href="/auth/login">Iniciar sesión</Link>
        </Button>
      </>
    );
  }

  return (
    <Button>Perfil</Button>
  )
}

export default function Header() {
  return (
    <header className="border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-5">
          <Link href="/" className="flex flex-1 items-center gap-3">
            <div className="relative overflow-hidden w-8 h-8 bg-primary rounded flex items-center justify-center">
              <Image
                src="https://avatars.githubusercontent.com/u/246142092?s=96&v=4"
                alt="Talos"
                //width={20}
                //height={20}
                fill
              />
            </div>
            <span className="text-xl font-bold text-foreground">Talos</span>
          </Link>
          <Suspense fallback={null}>
            <SearchBar />
          </Suspense>
          <div className="flex flex-1 gap-1 justify-end">
            <UserMenu />
          </div>
        </div>
      </div>
      <nav className="flex justify-center p-2 gap-2 [&_a]:p-3 border-t">
        <Button asChild variant="link">
          <a href="#features" className="text-sm text-muted-foreground">
            Features
          </a>
        </Button>
        <Button asChild variant="link">
          <a
            href="#templates"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Templates
          </a>
        </Button>
        <Button asChild variant="link">
          <a
            href="#docs"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Docs
          </a>
        </Button>
      </nav>
    </header>
  );
}
