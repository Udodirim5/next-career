"use client";

import { Star, MapPin, Users, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useStore } from "@/hooks/useJobStore";
import Image from "next/image";

// Mock company data (replace with your store later)
const mockCompanies = [
  {
    id: "1",
    name: "NextTech",
    logo: "/nexttech-logo.png",
    description: "Building the future of web development tools.",
    rating: 4.5,
    reviews: 42,
    location: "San Francisco, CA",
    employees: "50-100",
    founded: "2018",
    jobs: ["Frontend Engineer", "UX Designer"],
  },
  {
    id: "2",
    name: "DataSystems",
    logo: "/datasystems-logo.png",
    description: "Enterprise data infrastructure for Fortune 500 companies.",
    rating: 3.8,
    reviews: 28,
    location: "Remote",
    employees: "200+",
    founded: "2015",
    jobs: ["Backend Developer", "Data Scientist"],
  },
];

export default function CompaniesPage() {
  const { user } = useStore();

  return (
    <div className="px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Featured Companies</h1>
        <p className="text-gray-600 mt-2">
          Discover workplaces rated by developers like you
        </p>
      </div>

      {/* Company Grid */}
      <div className="space-y-6">
        {mockCompanies.map((company) => (
          <CompanyCard key={company.id} company={company} />
        ))}
      </div>
    </div>
  );
}

// Company Card Component
function CompanyCard({ company }: { company: (typeof mockCompanies)[0] }) {
  return (
    <div className="bg-white rounded-xl border p-6 hover:shadow-md transition-shadow">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Company Logo */}
        <div className="flex-shrink-0">
          {company.logo ? (
            <div className="relative h-12 w-12">
              <Image
                src={
                  company.logo?.startsWith("http")
                    ? company.logo
                    : `/${company.name}`
                }
                alt={company.name}
                fill
                loading="eager"
                className="h-20 w-20 rounded-lg object-contain border"
              />
            </div>
          ) : (
            <div className="h-20 w-20 rounded-lg bg-gray-100 flex items-center justify-center">
              <span className="text-xs text-gray-500">Logo</span>
            </div>
          )}
        </div>

        {/* Company Details */}
        <div className="flex-1">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-bold">{company.name}</h2>
              <p className="text-gray-600">{company.description}</p>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2 bg-gray-50 px-3 py-1 rounded-full">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="font-medium">
                {company.rating.toFixed(1)} ({company.reviews})
              </span>
            </div>
          </div>

          {/* Metadata */}
          <div className="mt-4 flex flex-wrap gap-4">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <MapPin className="h-4 w-4" />
              <span>{company.location}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Users className="h-4 w-4" />
              <span>{company.employees} employees</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Clock className="h-4 w-4" />
              <span>Founded {company.founded}</span>
            </div>
          </div>

          {/* Open Jobs */}
          <div className="mt-4">
            <h3 className="font-medium text-gray-900 mb-2">Open Positions</h3>
            <div className="flex flex-wrap gap-2">
              {company.jobs.map((job) => (
                <Button
                  key={job}
                  variant="outline"
                  size="sm"
                  className="rounded-full"
                >
                  {job}
                </Button>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-6 flex gap-3">
            <Button variant="default" className="flex-1 md:flex-none">
              View Jobs
            </Button>
            <Button variant="outline" className="flex-1 md:flex-none">
              Company Profile
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
