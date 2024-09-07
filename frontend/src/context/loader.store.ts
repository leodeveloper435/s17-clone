import { create } from "zustand";

interface LoadStateI {
    isLoading: boolean;
    showLoader: () => void;
    hideLoader: () => void;
}


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