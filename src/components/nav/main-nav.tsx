"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useStore } from "@/hooks/useJobStore";

export function MainNav() {
  const { user } = useStore();

  
  return (
    <nav className="flex items-center gap-6">
      {/* Desktop Nav Links */}
      <div className="hidden md:flex gap-6">
        <Link href="/jobs" className="text-sm font-medium hover:text-indigo-600 transition-colors">
          Browse Jobs
        </Link>
        <Link href="/companies" className="text-sm font-medium hover:text-indigo-600 transition-colors">
          Companies
        </Link>
        {user?.role === "EMPLOYER" && (
          <Link href="/dashboard" className="text-sm font-medium hover:text-indigo-600 transition-colors">
            Dashboard
          </Link>
        )}
      </div>

      {/* Auth Buttons / User Dropdown */}
      <div className="hidden md:flex items-center gap-2">
        {!user ? (
          <>
            <Button variant="outline" size="sm" asChild>
              <Link href="/login">Log In</Link>
            </Button>
            <Button size="sm" asChild>
              <Link href="/signup">Sign Up</Link>
            </Button>
          </>
        ) : (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={user?.image || ""} alt={user?.name || "User"} />
                  <AvatarFallback>
                    {user?.name?.charAt(0) || "U"}
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem asChild>
                <Link href="/profile">Profile</Link>
              </DropdownMenuItem>
              {user?.role === "EMPLOYER" && (
                <DropdownMenuItem asChild>
                  <Link href="/dashboard">Employer Dashboard</Link>
                </DropdownMenuItem>
              )}
              <DropdownMenuItem asChild>
                <Link href="/api/auth/signout">Sign Out</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>

    </nav>
  );
}