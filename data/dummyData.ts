import { Job, User } from "@/types";

export const mockJobs: Job[] = [
  {
    id: "1",
    title: "Senior Frontend Engineer (React/TypeScript)",
    description: `
      <h2 class="text-xl font-bold mb-4">About the Role</h2>
      <p class="mb-4">We're looking for a Senior Frontend Engineer to lead our Next.js/TypeScript initiatives. You'll architect performant UIs and mentor junior devs.</p>
      
      <h2 class="text-xl font-bold mb-4">Requirements</h2>
      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li>5+ years with React and TypeScript</li>
        <li>Expertise in Next.js and modern CSS (Tailwind)</li>
        <li>Experience with state management (Zustand/Jotai)</li>
      </ul>
    `,
    jobTypeLabel: "FULL_TIME",
    locationType: "REMOTE",
    experienceLabel: "SENIOR",
    salary: "$120k - $150k",
    postedAt: new Date("2024-03-15"),
    company: {
      id: "1",
      name: "NextTech",
      logo: "placeholder.svg",
      description: "Pioneering the future of web development tools.",
      website: "https://nexttech.example",
    },
  },
  {
    id: "2",
    title: "Junior Web Developer (Vue/Nuxt)",
    description: `
      <h2 class="text-xl font-bold mb-4">The Gig</h2>
      <p class="mb-4">Join our fast-paced design agency as a junior dev working on client-facing Nuxt.js projects with beautiful UIs.</p>
      
      <h2 class="text-xl font-bold mb-4">What You Need</h2>
      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li>1+ year of frontend experience</li>
        <li>Basic knowledge of Vue.js and Nuxt</li>
        <li>Familiar with Figma and responsive design</li>
      </ul>
    `,
    jobTypeLabel: "PART_TIME",
    locationType: "HYBRID",
    experienceLabel: "ENTRY",
    salary: "$40k - $55k",
    postedAt: new Date("2024-04-01"),
    company: {
      id: "2",
      name: "PixelForge",
      logo: "placeholder.svg",
      description: "Design-forward dev studio crafting web magic.",
      website: "https://pixelforge.example",
    },
  },
  {
    id: "3",
    title: "Full Stack Developer (MERN)",
    description: `
      <h2 class="text-xl font-bold mb-4">Overview</h2>
      <p class="mb-4">We're building a social platform and need a dev who can work across the stack with Mongo, Express, React, and Node.</p>
      
      <h2 class="text-xl font-bold mb-4">You Should Know</h2>
      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li>Solid experience with the MERN stack</li>
        <li>REST API and MongoDB schema design</li>
        <li>Unit testing and Git workflow</li>
      </ul>
    `,
    jobTypeLabel: "CONTRACT",
    locationType: "ONSITE",
    experienceLabel: "MID-LEVEL",
    salary: "$80k - $100k",
    postedAt: new Date("2024-03-28"),
    company: {
      id: "3",
      name: "Buzzly",
      logo: "placeholder.svg",
      description: "Connecting people, one buzz at a time.",
      website: "https://buzzly.example",
    },
  },
  {
    id: "4",
    title: "DevOps Engineer (AWS/Linux)",
    description: `
      <h2 class="text-xl font-bold mb-4">Mission</h2>
      <p class="mb-4">Help us scale our infra on AWS, automate everything, and ensure zero downtime.</p>
      
      <h2 class="text-xl font-bold mb-4">Qualifications</h2>
      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li>3+ years in DevOps roles</li>
        <li>Strong AWS, Docker, and CI/CD experience</li>
        <li>Scripting with Bash or Python</li>
      </ul>
    `,
    jobTypeLabel: "CONTRACT",
    locationType: "REMOTE",
    experienceLabel: "MID-LEVEL",
    salary: "$70/hr - $90/hr",
    postedAt: new Date("2024-04-10"),
    company: {
      id: "4",
      name: "InfraWave",
      logo: "placeholder.svg",
      description: "Cloud-native infrastructure as a service.",
      website: "https://infrawave.example",
    },
  },
  {
    id: "5",
    title: "Product Designer (UI/UX + Motion)",
    description: `
      <h2 class="text-xl font-bold mb-4">Your Role</h2>
      <p class="mb-4">Design delightful interfaces with fluid motion and accessible design. You'll work closely with engineers to ship real stuff.</p>
      
      <h2 class="text-xl font-bold mb-4">You Bring</h2>
      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li>Experience designing in Figma</li>
        <li>Understanding of animation and micro-interactions</li>
        <li>Bonus: Framer, After Effects, or GSAP</li>
      </ul>
    `,
    jobTypeLabel: "FULL_TIME",
    locationType: "REMOTE",
    experienceLabel: "MID-LEVEL",
    salary: "$85k - $110k",
    postedAt: new Date("2024-03-20"),
    company: {
      id: "5",
      name: "MojoStudio",
      logo: "placeholder.svg",
      description: "We make interfaces that move — literally.",
      website: "https://mojostudio.example",
    },
  },
];

export const user: User[] = [
  {
    id: "user-1",
    name: "Ada Lovelace",
    email: "ada@nextcareer.io",
    password: "password123",
    emailVerified: new Date(),
    image: "https://i.pravatar.cc/150?img=1",
    website: "https://adalovelace.dev",
    bio: "First programmer. Math wizard.",
    role: "EMPLOYER",
    location: {
      city: "London",
      country: "UK",
      remote: true,
    },
    social: {
      github: "adalove",
      linkedin: "ada-lovelace",
      twitter: "ada_code",
    },
    skills: ["math", "logic", "vision"],
    resumeUrl: "https://resumes.nextcareer.io/ada.pdf",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "user-2",
    name: "Grace Hopper",
    email: "grace@nextcareer.io",
    password: "password123",
    emailVerified: new Date(),
    image: "https://i.pravatar.cc/150?img=2",
    website: "https://gracehopper.dev",
    bio: "Invented the compiler. Legend.",
    role: "ADMIN",
    location: {
      city: "New York",
      country: "USA",
      remote: false,
    },
    social: {
      github: "gracehopper",
      linkedin: "grace-hopper",
      twitter: "gracecodes",
    },
    skills: ["COBOL", "leadership"],
    resumeUrl: "https://resumes.nextcareer.io/grace.pdf",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "user-3",
    name: "Alan Turing",
    email: "alan@nextcareer.io",
    password: "password123",
    emailVerified: new Date(),
    image: "https://i.pravatar.cc/150?img=3",
    website: "https://alanturing.dev",
    bio: "Cracked the Enigma code. Genius.",
    role: "USER",
    location: {
      city: "Manchester",
      country: "UK",
      remote: true,
    },
    social: {
      github: "turingmachine",
      linkedin: "alan-turing",
      twitter: "turingcode",
    },
    skills: ["math", "logic"],
    resumeUrl: "https://resumes.nextcareer.io/alan.pdf",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];
