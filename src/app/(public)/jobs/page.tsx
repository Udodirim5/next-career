'use client';

import { JSX, Suspense } from "react";
import { SkeletonGrid } from "./skeleton-grid";
import { SearchFilters } from "./search-filters";
import { JobCard } from "./card";
import { useStore } from "@/hooks/useJobStore";
import { notFound } from "next/navigation";

type JobSearchFilters = Partial<{
  query: string;
  type: string;
  location: string;
  experience: string;
}>;

type JobsPageProps = {
  searchParams?: JobSearchFilters;
};

export default function JobsPage({
  searchParams = {},
}: JobsPageProps): JSX.Element {
  const { query, type, location, experience } = searchParams;

  const jobs = useStore((state) => state.jobs);
  if (!jobs) return notFound();

  const filteredJobs = jobs.filter((job) => {
    const matchesQuery = query
      ? job.title.toLowerCase().includes(query.toLowerCase()) ||
        job.company.name.toLowerCase().includes(query.toLowerCase())
      : true;

    const matchesType = type ? job.jobTypeLabel === type : true;
    const matchesLocation = location ? job.locationType === location : true;
    const matchesExperience = experience
      ? job.experienceLabel === experience
      : true;

    return matchesQuery && matchesType && matchesLocation && matchesExperience;
  });

  return (
    <div className="py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Browse Jobs</h1>

      {/* Search & Filters */}
      <SearchFilters />

      {/* Job Grid */}
      <div className="mt-8">
        <Suspense fallback={<SkeletonGrid />}>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredJobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
            {filteredJobs.length === 0 && (
              <p className="text-gray-500">No jobs match your filters.</p>
            )}
          </div>
        </Suspense>
      </div>
    </div>
  );
}
