'use client';

import { notFound } from "next/navigation";
import { CompanyCard } from "@/components/company/card";
import { JobActions } from "../actions";
import { useStore } from "@/hooks/useJobStore";

export default function JobPage({ params }: { params: { id: string } }) {
  const job = useStore((state) => state.jobs.find((j) => j.id === params.id));

  if (!job) return notFound(); // If mock data isn't loaded, return 404

  return (
    <div className="px-4 py-8">
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Job Content */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg border p-6">
            {/* Job Header */}
            <div className="flex items-start gap-4 mb-6">
              <div className="h-16 w-16 rounded-md bg-gray-100 flex items-center justify-center">
                <span className="text-xs text-gray-500">Logo</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold">{job.title}</h1>
                <p className="text-lg text-gray-600">{job.company.name}</p>
              </div>
            </div>

            {/* Job Meta */}
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-indigo-100 text-indigo-800">
                {job.jobTypeLabel === "FULL_TIME" ? "Full-time" : "Part-time"}
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-green-100 text-green-800">
                {job.locationType}
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-amber-100 text-amber-800">
                {job.experienceLabel === "SENIOR" ? "Senior" : "Mid-level"}
              </span>
              {job.salary && (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800">
                  💰 {job.salary}
                </span>
              )}
            </div>

            {/* Job Description */}
            <div
              className="prose max-w-none"
              dangerouslySetInnerHTML={{ __html: job.description }}
            />

            {/* Apply Button */}
            <div className="lg:hidden mt-8 sticky bottom-4">
              <JobActions jobId={job.id} />
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="hidden lg:block sticky top-4">
            <JobActions jobId={job.id} />
          </div>

          <CompanyCard company={job.company} />
        </div>
      </div>
    </div>
  );
}
