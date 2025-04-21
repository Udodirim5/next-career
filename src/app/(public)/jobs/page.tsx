'use client';

import { JSX, Suspense, useMemo } from "react";
import { SkeletonGrid } from "./skeleton-grid";
import { SearchFilters } from "./search-filters";
import { JobCard } from "./card";
import { useStore } from "@/hooks/useJobStore";
import { notFound, useSearchParams } from "next/navigation";

export default function JobsPage(): JSX.Element {
  const searchParams = useSearchParams();
  const query = searchParams.get("query")?.toLowerCase() || "";
  const type = searchParams.get("type");
  const location = searchParams.get("location");
  const experience = searchParams.get("experience");

  const jobs = useStore((state) => state.jobs);
  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const matchesQuery =
        !query ||
        job.title.toLowerCase().includes(query) ||
        job.company.name.toLowerCase().includes(query);

      const matchesType = !type || job.jobTypeLabel === type;
      const matchesLocation = !location || job.locationType === location;
      const matchesExperience = !experience || job.experienceLabel === experience;

      return matchesQuery && matchesType && matchesLocation && matchesExperience;
    });
  }, [jobs, query, type, location, experience]);
  
  if (!jobs) return notFound();

  return (
    <div className="py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Browse Jobs</h1>

      {/* Search & Filters */}
      <SearchFilters />

      {/* Job Grid */}
      <div className="mt-8">
        <Suspense fallback={<SkeletonGrid />}>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => <JobCard key={job.id} job={job} />)
            ) : (
              <p className="text-gray-500">No jobs match your filters.</p>
            )}
          </div>
        </Suspense>
      </div>
    </div>
  );
}
