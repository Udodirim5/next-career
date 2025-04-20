"use client";

import { Button } from "@/components/ui/button";
import { Bookmark, Share2 } from "lucide-react";
// import { useSession } from "next-auth/react";
import { toast } from "sonner";
import { useSession } from "@/hooks/useSession";


export function JobActions({ jobId }: { jobId: string }) {
  // const { data: session } = useSession();
  const { session, loading } = useSession();

  if (loading) return <p>Hold on…</p>;

  const handleApply = () => {
    if (!session) {
      toast.error("Please sign in to apply");
      return;
    }
    toast.success("Application submitted!");
    // TODO: Connect to DB
  };

  const handleSave = () => {
    if (!session) {
      toast.error("Please sign in to save jobs");
      return;
    }
    toast("Job saved to your profile");
    // TODO: Connect to DB
  };

  return (
    <div className="border rounded-lg bg-white p-4 space-y-3">
      <Button className="w-full" size="lg" onClick={handleApply}>
        Apply Now
      </Button>
      <div className="flex gap-2">
        <Button
          variant="outline"
          className="flex-1"
          onClick={handleSave}
        >
          <Bookmark className="h-4 w-4 mr-2" />
          Save
        </Button>
        <Button variant="outline" className="flex-1">
          <Share2 className="h-4 w-4 mr-2" />
          Share
        </Button>
      </div>
      <p className="text-xs text-gray-500 text-center">
        ⏳ 42 applicants • Posted 2 weeks ago
      </p>
    </div>
  );
}