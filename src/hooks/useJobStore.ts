import { create } from "zustand";
import { Store, Job, User } from "@/types";

export const useStore = create<Store>((set) => ({
  jobs: [],
  user: null,
  activeUserId: null,
  hydrated: false,
  setJobs: (jobs: Job[]) => set({ jobs }),
  setUser: (user: User | null) => set({ user }),
  setActiveUserId: (id: string | null) => set({ activeUserId: id }),
  setHydrated: (hydrated: boolean) => set({ hydrated }),
}));
