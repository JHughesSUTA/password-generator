import { create } from "zustand";
import type { PasswordOptions } from "./types";

interface PasswordStore {
  // State
  password: string;
  options: PasswordOptions;

  // State setters
  setPassword: (password: string) => void;
  setOptions: (options: PasswordOptions) => void;
  toggleUppercase: () => void;
  toggleLowercase: () => void;
  toggleNumbers: () => void;
  toggleSymbols: () => void;
  setLength: (length: number) => void;
}

export const usePasswordStore = create<PasswordStore>((set) => ({
  // Initial state
  password: "",
  options: {
    includeUppercase: false,
    includeLowercase: true,
    includeNumbers: true,
    includeSymbols: false,
    length: 8,
  },

  // State setters only - no business logic
  setPassword: (password) => set({ password }),
  setOptions: (options) => set({ options }),

  toggleUppercase: () =>
    set((state) => ({
      options: {
        ...state.options,
        includeUppercase: !state.options.includeUppercase,
      },
    })),

  toggleLowercase: () =>
    set((state) => ({
      options: {
        ...state.options,
        includeLowercase: !state.options.includeLowercase,
      },
    })),

  toggleNumbers: () =>
    set((state) => ({
      options: {
        ...state.options,
        includeNumbers: !state.options.includeNumbers,
      },
    })),

  toggleSymbols: () =>
    set((state) => ({
      options: {
        ...state.options,
        includeSymbols: !state.options.includeSymbols,
      },
    })),

  setLength: (length) =>
    set((state) => ({
      options: { ...state.options, length },
    })),
}));
