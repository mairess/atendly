import { defineStore } from 'pinia';
import { api } from '../services/api';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: localStorage.getItem('token') || null as string | null,
    user: null as null | { id: number; name: string; email: string; }
  }),
  getters: {
    isAuthenticated: (state) => !!state.token
  },
  actions: {
    async register(name: string, email: string, password: string) {
      await api.post('/register', { name, email, password });
    },
    async login(email: string, password: string) {
      const res = await api.post<{ token: string }>('/login', { email, password });
      this.token = res.token;
      localStorage.setItem('token', this.token);
      this.user = await api.get('/profile');
    },
    logout() {
      this.token = null;
      this.user = null;
      localStorage.removeItem('token');
    },
    async fetchProfile() {
      this.user = await api.get('/profile');
    }
  }
});
