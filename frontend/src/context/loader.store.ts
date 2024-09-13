import { LoadStateI } from "@/types";
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
