import { create } from "zustand";
import { axiosInstance } from "../lib/axios";

export const useAuthStore = create((set) => ({
  authUser: null,
  isSigningUp: false,
  isLoggingIn: false,
  isUpdatingUser: false,

  isCheckingUserAuth: true,

  checkAuth: async () => {
    try {
      const res = await axiosInstance.get('/auth/check');
      set({ authUser: res.data });
    } catch (error) {
      console.log('Error in checking auth', error);
      set({ authUser: null });
    } finally {
      set({ isCheckingUserAuth: false });
    }
  },

  signup: async (data) => {
    
  }
}));
