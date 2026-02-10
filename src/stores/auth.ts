import { create } from "zustand";

export type Role = "creator" | "brand";

export interface User {
  id: string;
  email: string;
  role: Role;
  name: string;
  handle?: string;
  brandSlug?: string;
  onboarded: boolean;
}

interface AuthState {
  user: User | null;
  token: string | null;
  login: (user: User, token: string) => void;
  logout: () => void;
  setUser: (user: User) => void;
}

export const useAuthStore = create<AuthState>((set) => {
  let initialUser: User | null = null;
  let initialToken: string | null = null;
  if (typeof window !== "undefined") {
    try {
      const stored = localStorage.getItem("osiris_user");
      const storedToken = localStorage.getItem("osiris_token");
      if (stored && storedToken) {
        initialUser = JSON.parse(stored);
        initialToken = storedToken;
      }
    } catch {}
  }
  return {
    user: initialUser,
    token: initialToken,
    login: (user, token) => {
      if (typeof window !== "undefined") {
        localStorage.setItem("osiris_user", JSON.stringify(user));
        localStorage.setItem("osiris_token", token);
      }
      set({ user, token });
    },
    logout: () => {
      if (typeof window !== "undefined") {
        localStorage.removeItem("osiris_user");
        localStorage.removeItem("osiris_token");
      }
      set({ user: null, token: null });
    },
    setUser: (user) => {
      if (typeof window !== "undefined") {
        localStorage.setItem("osiris_user", JSON.stringify(user));
      }
      set({ user });
    },
  };
});

interface OnboardingState {
  step: number;
  data: Record<string, unknown>;
  setStep: (s: number) => void;
  setData: (d: Record<string, unknown>) => void;
  reset: () => void;
}

export const useOnboardingStore = create<OnboardingState>((set) => ({
  step: 0,
  data: {},
  setStep: (step) => set({ step }),
  setData: (data) => set((s) => ({ data: { ...s.data, ...data } })),
  reset: () => set({ step: 0, data: {} }),
}));
