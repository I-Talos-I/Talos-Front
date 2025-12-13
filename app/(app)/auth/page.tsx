import { Button } from "@/components/ui/button";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default function Page() {
  return (
    <Button asChild>
      <Link href="/auth/login">Login</Link>
    </Button>
  )
}
