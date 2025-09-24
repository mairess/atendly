import { defineStore } from 'pinia';
import { api } from '../services/api';

type User = {
  id: number
  name: string
  email: string
}

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: localStorage.getItem('token'),
    user: null as null | User
  }),

  getters: {
    isAuthenticated: (state) => !!state.token
  },

  actions: {
    async register(name: string, email: string, password: string) {
      await api.post<User>('/register', { name, email, password });
    },

    async login(email: string, password: string) {
      const res = await api.post<{ token: string }>('/login', { email, password });
      this.token = res.token;
      localStorage.setItem('token', this.token);
      await this.fetchProfile();
    },
    
    async fetchProfile() {
      this.user = await api.get<User>('/profile');
    },

    logout() {
      this.token = null;
      this.user = null;
      localStorage.removeItem('token');
    },
  }
});
