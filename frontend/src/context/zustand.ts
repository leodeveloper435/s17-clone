import { UserStoreProps } from "@/types/generalTypes";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const userStore = create<UserStoreProps>()(
  persist(
    (set) => ({
      user: null,
      fields: [],
      setUser: (newUser) => set(() => ({ user: newUser })),
      setFields: (newFields) => set(() => ({ fields: newFields })),
      addField: (newField) =>
        set((state) => ({ fields: [...state.fields, newField] })),
    }),
    { name: "userStore" }
  )
);
