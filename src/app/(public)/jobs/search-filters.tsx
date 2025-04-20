"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter, useSearchParams } from "next/navigation";

export function SearchFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();

  return (
    <div className="flex flex-col md:flex-row gap-4">
      {/* Search Bar */}
      <div className="relative flex-1">
        <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
        <Input
          placeholder="Search jobs, companies, or keywords"
          className="pl-9"
          defaultValue={searchParams.get("query") || ""}
          onChange={(e) => {
            const params = new URLSearchParams(searchParams);
            params.set("query", e.target.value);
            router.replace(`/jobs?${params.toString()}`);
          }}
        />
      </div>

      {/* Filter Dropdown */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            Filters
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          <DropdownMenuRadioGroup
            value={searchParams.get("type") || ""}
            onValueChange={(value) => {
              const params = new URLSearchParams(searchParams);
              params.set("type", value);
              router.replace(`/jobs?${params.toString()}`);
            }}
          >
            <DropdownMenuRadioItem value="">All Types</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="FULL_TIME">Full-time</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="PART_TIME">Part-time</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="CONTRACT">Contract</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}