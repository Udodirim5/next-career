import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface CompanyCardProps {
  company: {
    id: string;
    name: string;
    logo?: string;
    description: string;
    website: string;
  };
}

export function CompanyCard({ company }: CompanyCardProps) {

  return (
    <div className="border rounded-lg bg-white p-6">
      <div className="flex items-center gap-4 mb-4">
        {company.logo ? (
        <div className="relative h-12 w-12">
            <Image
              src={company.logo?.startsWith("http")? company.logo : `/${company.name}`}
              alt={company.name}
              fill
              loading="eager"
              className="h-12 w-12 rounded-md object-contain border"
            />
          </div>
        ) : (
          <div className="h-12 w-12 rounded-md bg-gray-100 flex items-center justify-center">
            <span className="text-xs text-gray-500">Logo</span>
          </div>
        )}
        <h3 className="font-semibold text-lg">{company.name}</h3>
      </div>
      <p className="text-gray-600 mb-4">{company.description}</p>
      <div className="space-y-3">
        <Button variant="outline" className="w-full" asChild>
          <Link href={`/companies/${company.id}`}>View Profile</Link>
        </Button>
        <Button variant="ghost" className="w-full" asChild>
          <Link href={company.website} target="_blank">
            Visit Website
          </Link>
        </Button>
      </div>
    </div>
  );
}
