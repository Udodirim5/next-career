import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Clock, MapPin, Banknote } from "lucide-react";
import Image from "next/image";
import { Job } from "@/types";



export function JobCard({ job }: { job: Job }) {
  return (
    <Link
      href={`/jobs/${job.id}`}
      className="border rounded-lg p-6 hover:shadow-md transition-shadow bg-white"
    >
      <div className="flex items-start gap-4">
        <div className="flex-1">
          <h3 className="font-semibold text-lg">{job.title}</h3>
          <p className="text-gray-600">{job.company.name}</p>
        </div>
        <div className="relative h-12 w-12">
        {job.company.logo ? (
            <Image
              src={job.company.logo}
              alt={job.company.name}
              fill
              className="h-12 w-12 rounded-md object-contain border"
            />
          ) : (
            <div className="h-12 w-12 rounded-md bg-gray-100 flex items-center justify-center">
              <span className="text-xs text-gray-500">Logo</span>
            </div>
          )}
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <Badge variant="outline" className="flex items-center gap-1">
          <Clock className="h-3 w-3" />
          {job.jobTypeLabel}
        </Badge>
        <Badge variant="outline" className="flex items-center gap-1">
          <MapPin className="h-3 w-3" />
          {job.locationType}
        </Badge>
        <Badge variant="outline">{job.experienceLabel}</Badge>
      </div>

      {job.salary && (
        <div className="mt-3 flex items-center gap-1 text-sm text-gray-700">
          <Banknote className="h-4 w-4" />
          <span>{job.salary}</span>
        </div>
      )}

      <div className="mt-4 text-xs text-gray-500">
        Posted {job.postedAt.toLocaleDateString()}
      </div>
    </Link>
  );
}
