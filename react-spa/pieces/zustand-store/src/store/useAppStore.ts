import { create } from "zustand";

// Global store for TemplateApp. Add slices as the app grows.
export type AppState = {
  count: number;
  increment: () => void;
  reset: () => void;
};

const initialCount = 0; // tpl:var initial_count 0

export const useAppStore = create<AppState>((set) => ({
  count: initialCount,
  increment: () => set((state) => ({ count: state.count + 1 })),
  reset: () => set({ count: initialCount }),
}));
