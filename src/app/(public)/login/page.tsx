"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useStore } from "@/hooks/useJobStore";
import { user } from "../../../../data/dummyData";
import { useLocalStorage } from "@/hooks/useLocalStorage";

export default function LoginPage() {
  const router = useRouter();
  const { setUser, setActiveUserId } = useStore();
  const [, setStoredUserId] = useLocalStorage<string | null>(
    "activeUserId",
    null
  ); // 👈 here

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    // Find user in mock data
    const matchedUser = user.find(
      (u) => u.email === email && u.password === password
    );

    if (matchedUser) {
      setUser(matchedUser);
      setActiveUserId(matchedUser.id);
      setStoredUserId(matchedUser.id);
      setTimeout(() => {
        router.push("/dashboard");
      }, 100); // give Zustand + hydration a breath
    } else {
      alert("User not found. Try 'ada@nextcareer.io' or 'grace@nextcareer.io'");
    }
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="w-full max-w-md rounded-lg border bg-white p-8 shadow-sm">
        <h1 className="mb-6 text-center text-2xl font-bold">
          Welcome to NextCareer
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="ada@nextcareer.io"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="••••••••"
              required
            />
          </div>

          <Button type="submit" className="w-full">
            Log In
          </Button>
        </form>

        <div className="mt-4 text-center text-sm">
          <span className="text-gray-600">Don’t have an account?</span>{" "}
          <button className="text-indigo-600 hover:underline">Sign up</button>
        </div>
      </div>
    </div>
  );
}
