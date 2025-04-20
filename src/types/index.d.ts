export interface User {
  id: string;
  name: string | null;
  email: string | null;
  password: string;
  emailVerified: Date | null;
  image: string | null;
  website?: string;
  bio?: string;
  role: "USER" | "EMPLOYER" | "ADMIN";
  location?: {
    city?: string;
    country?: string;
    remote?: boolean;
  };
  social?: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
  skills: string[];
  resumeUrl?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Job {
  id: string;
  title: string;
  description: string;
  experienceLabel: "ENTRY" | "MID-LEVEL" | "SENIOR";
  jobTypeLabel: "FULL_TIME" | "PART_TIME" | "CONTRACT";
  locationType: string;
  salary: string;
  postedAt: Date;
  company: {
    id: string;
    name: string;
    logo: string;
    description: string;
    website: string;
  };
}

export interface Store {
  jobs: Job[];
  user: User | null;
  activeUserId: string | null;
  hydrated: boolean;
  setJobs: (jobs: Job[]) => void;
  setUser: (user: User | null) => void;
  setActiveUserId: (id: string | null) => void;
  setHydrated: (hydrated: boolean) => void;
}
