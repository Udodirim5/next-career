import "../../styles/globals.css";
import Link from "next/link";
import { MainNav } from "@/components/nav/main-nav";
import { MobileNav } from "@/components/nav/mobile-nav";
import { LoadMockData } from "@/lib/LoadMockDataLoadMockData";
import { SessionRestorer } from "@/lib/SessionRestorer";

export const metadata = {
  title: "NextCareer",
  description: "Find your dream dev job",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 antialiased">
        <header className="border-b bg-white sticky top-0 z-50 px-2">
          <div className=" flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-md bg-indigo-600" />
              <span className="text-xl font-bold text-indigo-600">
                NextCareer
              </span>
            </Link>
            <MainNav />
            <MobileNav />
          </div>
        </header>
        <main className=" py-8">
          <>
            <LoadMockData />
            <SessionRestorer />
            {children}
          </>
        </main>
      </body>
    </html>
  );
}
