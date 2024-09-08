import { create } from "zustand";
import { persist } from "zustand/middleware";

interface userTypes {
  user: { id: string };
  token: string;
}
interface Campo {
  id: number;
  userId: number;
  name: string;
  latitude: string;
  longitude: string;
  size: number;
  workersAmount: number;
  mainCrop: string;
  weatherType: string;
  administration: string;
  season: string;
  updatedAt: string; // ISO date format
  createdAt: string; // ISO date format
}

interface userStoreProps {
  user: userTypes | null;
  fields: Campo[];
  setUser: (user: userTypes) => void;
  setFields: (fiels: Campo[]) => void;
  addField: (fiel: Campo) => void;
}

export const userStore = create<userStoreProps>()(
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
