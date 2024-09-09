import { LoadStateI } from "@/types/generalTypes";
import { create } from "zustand";

export const useLoaderStore = create<LoadStateI>()((set) => ({
  isLoading: false,
  showLoader: () => {
    set({
      isLoading: true,
    });
  },

  hideLoader: () => {
    set({
      isLoading: false,
    });
  },
}));
