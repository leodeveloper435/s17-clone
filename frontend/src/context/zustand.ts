import { create } from "zustand";
import { persist } from "zustand/middleware";

interface userTypes {
  name: string;
  lastName: string;
  token: string;
}

interface userStoreProps {
  user: userTypes | null;
  setUser: (user: userTypes) => void;
}

export const userStore = create<userStoreProps>()(
  persist(
    (set) => ({
      user: null,
      setUser: (newUser) => set(() => ({ user: newUser })),
    }),
    { name: "userStore" }
  )
);
