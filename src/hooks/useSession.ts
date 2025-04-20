"use client";

import { User } from "@/types";
import { useState, useEffect } from "react";

export function useSession() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSession = async () => {
      try {
        const response = await fetch("http://localhost:3001/auth/session");
        if (response.ok) {
          const userData = await response.json();
          setUser(userData);
        } else {
          setUser(null);
        }
      } catch (error) {
        console.error("An error occurred while fetching session:", error); // FIXME: Remember to not show the entire error at the end
        setUser(null); // Handle potential errors by setting user to null
      } finally {
        setLoading(false);
      }
    };

    fetchSession();
  }, []);

  return { user, loading };
}
