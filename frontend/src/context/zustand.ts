import { create } from "zustand";
import { persist } from "zustand/middleware";

interface userTypes {
  name: string;
  lastName: string;
  token: string;
}

interface userStoreProps {
  user: userTypes | null;
  fields: any[];
  setUser: (user: userTypes) => void;
  setFields: (fiels: any[]) => void;
}

export const userStore = create<userStoreProps>()(
  persist(
    (set) => ({
      user: null,
      fields: [],
      setUser: (newUser) => set(() => ({ user: newUser })),
      setFields: (newFields) => set(() => ({ fields: newFields })),
    }),
    { name: "userStore" }
  )
);
