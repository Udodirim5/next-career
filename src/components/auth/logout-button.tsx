"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useStore } from "@/hooks/useJobStore";

export function LogoutButton() {
  const router = useRouter();
  const { setUser, setActiveUserId } = useStore();

  const handleLogout = () => {
    setUser(null);
    setActiveUserId(null);
    router.push("/login");
  };

  return (
    <Button variant="ghost" onClick={handleLogout}>
      Log Out
    </Button>
  );
}