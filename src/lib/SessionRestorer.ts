"use client";

import { useEffect } from "react";
import { user as allUsers } from "../../data/dummyData";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { useStore } from "@/hooks/useJobStore";

export function SessionRestorer() {
  const [storedUserId] = useLocalStorage<string | null>("activeUserId", null);
  const { setUser, setActiveUserId, setHydrated } = useStore();

  useEffect(() => {
    if (storedUserId) {
      const existingUser = allUsers.find((u) => u.id === storedUserId);
      if (existingUser) {
        setUser(existingUser);
        setActiveUserId(storedUserId);
      }
    }
    setHydrated(true); // 👈 important
  }, [storedUserId, setUser, setActiveUserId, setHydrated]);

  return null;
}
