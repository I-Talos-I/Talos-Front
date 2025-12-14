"use client";

import { useAuth } from "@/hooks/useAuth";
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
    <div className="flex w-full border-b p-4 items-center">
      <Link className="text-2xl font-bold" href="/">Talos</Link>

      <Suspense fallback={null}>
        <SearchBar />
      </Suspense>

      <div className="flex gap-2">
        <UserMenu />
      </div>
    </div>
  );
}
