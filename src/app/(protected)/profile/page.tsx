"use client";

import { redirect } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { LogoutButton } from "@/components/auth/logout-button";
import { EditProfileModal } from "./edit-modal";
import { useStore } from "@/hooks/useJobStore";

export default function ProfilePage() {
  const { user } = useStore();

  if (!user) {
    redirect("/login");
  }

  return (
    <div className="px-4 py-8">
      {/* Header */}
      <div className="flex justify-between items-start mb-8">
        <h1 className="text-3xl font-bold">Your Profile</h1>
        <LogoutButton />
      </div>

      {/* Profile Card */}
      <div className="grid md:grid-cols-3 gap-8">
        {/* Left Column - Profile Info */}
        <div className="md:col-span-1 space-y-6">
          <div className="bg-white rounded-lg border p-6">
            <div className="flex flex-col items-center text-center">
              <Avatar className="h-24 w-24 mb-4">
                <AvatarImage src={user.image || ""} />
                <AvatarFallback>
                  {user.name?.split(" ").map((n) => n[0]).join("")}
                </AvatarFallback>
              </Avatar>
              <h2 className="text-xl font-bold">{user.name}</h2>
              <p className="text-gray-600">{user.bio || "No bio yet"}</p>
              
              <div className="mt-4 flex gap-2">
                <EditProfileModal user={user} />
                <Button variant="outline" size="sm">
                  View Resume
                </Button>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              <div>
                <h3 className="font-medium text-gray-500">Location</h3>
                <p>
                  {user.location?.city}, {user.location?.country}
                  {user.location?.remote && " (Remote)"}
                </p>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-500">Contact</h3>
                <p>{user.email}</p>
                {user.website && (
                  <a 
                    href={user.website} 
                    target="_blank" 
                    className="text-indigo-600 hover:underline"
                  >
                    {user.website.replace(/^https?:\/\//, "")}
                  </a>
                )}
              </div>

              <div>
                <h3 className="font-medium text-gray-500">Social</h3>
                <div className="flex gap-2 mt-1">
                  {user.social?.github && (
                    <a 
                      href={`https://github.com/${user.social.github}`} 
                      target="_blank"
                    >
                      <Badge variant="outline">GitHub</Badge>
                    </a>
                  )}
                  {user.social?.linkedin && (
                    <a 
                      href={`https://linkedin.com/in/${user.social.linkedin}`} 
                      target="_blank"
                    >
                      <Badge variant="outline">LinkedIn</Badge>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Content */}
        <div className="md:col-span-2 space-y-6">
          {/* Skills Section */}
          <div className="bg-white rounded-lg border p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Skills</h2>
              <Button variant="ghost" size="sm">
                Edit
              </Button>
            </div>
            <div className="flex flex-wrap gap-2">
              {user.skills?.length > 0 ? (
                user.skills.map((skill) => (
                  <Badge key={skill} className="px-3 py-1">
                    {skill}
                  </Badge>
                ))
              ) : (
                <p className="text-gray-500">No skills added yet</p>
              )}
            </div>
          </div>

          {/* Saved Jobs Section */}
          <div className="bg-white rounded-lg border p-6">
            <h2 className="text-xl font-bold mb-4">Saved Jobs</h2>
            <div className="space-y-2">
              <p className="text-gray-500">You haven&sbquo;t saved any jobs yet.</p>
              <Button variant="outline" className="mt-2">
                Browse Jobs
              </Button>
            </div>
          </div>

          {/* Applications Section */}
          <div className="bg-white rounded-lg border p-6">
            <h2 className="text-xl font-bold mb-4">Recent Applications</h2>
            <div className="space-y-2">
              <p className="text-gray-500">No applications yet.</p>
              <Button variant="outline" className="mt-2">
                View All Jobs
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}