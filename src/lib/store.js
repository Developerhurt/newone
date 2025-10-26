import { create } from "zustand";

export const useAppStore = create((set) => ({
  showLogin: false,
  setShowLogin: (value) => set({ showLogin: value }),
}));

// ✅ Add this for auth-specific state
const getInitialAuth = () => {
  if (typeof window !== 'undefined') {
    try {
      const raw = localStorage.getItem('auth');
      if (raw) return JSON.parse(raw);
    } catch {}
  }
  return { isAuthenticated: false, user: null };
};

export const useAuthStore = create((set, get) => ({
  ...getInitialAuth(),
  login: (user) => {
    const state = { isAuthenticated: true, user };
    set(state);
    if (typeof window !== 'undefined') {
      localStorage.setItem('auth', JSON.stringify(state));
    }
  },
  logout: () => {
    const state = { isAuthenticated: false, user: null };
    set(state);
    if (typeof window !== 'undefined') {
      localStorage.removeItem('auth');
    }
  },
}));
