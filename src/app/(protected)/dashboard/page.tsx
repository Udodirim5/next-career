"use client";

import { redirect } from "next/navigation";
import { LogoutButton } from "@/components/auth/logout-button";
import { useStore } from "@/hooks/useJobStore";

export default function DashboardPage() {
  const { user, hydrated } = useStore();

  if (!hydrated) return null; // or a spinner

  if (!user) {
    redirect("/login");
  }
  console.log((user));
  

  return (
    <div className="px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <LogoutButton />
      </div>
      
      <div className="bg-white p-6 rounded-lg border">
        <h2 className="text-xl font-semibold">Welcome, {user.name}!</h2>
        <p className="text-gray-600 mt-2">Role: {user.role}</p>
      </div>
    </div>
  );
}