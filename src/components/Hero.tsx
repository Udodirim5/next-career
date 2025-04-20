import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const Hero = () => {
  return (
    <section>
      <div className="mx-auto max-w-7xl px-4 py-24 text-center">
        <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Launch Your
          <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            {" "}
            Next Career Move
          </span>
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          For developers who want to build their future—not just browse job
          boards.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700">
            Get Started
          </Button>
          <Button variant="outline" size="lg">
            How It Works
          </Button>
        </div>

        {/* Search Bar */}
        <div className="mt-16 max-w-2xl mx-auto">
          <div className="relative">
            <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
            <Input
              placeholder="Search jobs by title, keyword, or tech stack..."
              className="pl-12 py-6 text-lg rounded-full shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
