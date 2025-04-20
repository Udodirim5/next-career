type Session = {
  user: {
    name: string;
    email: string;
    image: string;
    role: "USER" | "EMPLOYER";
  };
};

export async function auth(): Promise<Session | null> {
  return {
    user: {
      name: "Jane Doe",
      email: "jane@example.com",
      image: "https://i.pravatar.cc/150?u=jane@example.com",
      role: "EMPLOYER", // or "USER"
    },
  };
}
