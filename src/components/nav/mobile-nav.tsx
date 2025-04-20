"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useStore } from "@/hooks/useJobStore";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const { user } = useStore();

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </DialogTrigger>
      <DialogContent className=" left-auto mt-0 h-full w-64 translate-x-0 rounded-none border-l">
        <div className="flex flex-col gap-6 p-6">
          <Link
            href="/jobs"
            onClick={() => setOpen(false)}
            className="font-medium hover:text-indigo-600"
          >
            Browse Jobs
          </Link>
          <Link
            href="/companies"
            onClick={() => setOpen(false)}
            className="font-medium hover:text-indigo-600"
          >
            Companies
          </Link>
          {user?.role === "EMPLOYER" && (
            <Link
              href="/dashboard"
              onClick={() => setOpen(false)}
              className="font-medium hover:text-indigo-600"
            >
              Dashboard
            </Link>
          )}
          <div className="border-t pt-4">
            {!user ? (
              <>
                <Button variant="outline" className="w-full mb-2" asChild>
                  <Link href="/login">Log In</Link>
                </Button>
                <Button className="w-full" asChild>
                  <Link href="/signup">Sign Up</Link>
                </Button>
              </>
            ) : (
              <>
                <Link
                  href="/profile"
                  onClick={() => setOpen(false)}
                  className="block py-2 font-medium"
                >
                  Profile
                </Link>
                <Link
                  href="/api/auth/signout"
                  onClick={() => setOpen(false)}
                  className="block py-2 font-medium text-red-600"
                >
                  Sign Out
                </Link>
              </>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
