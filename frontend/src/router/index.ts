import { createRouter, createWebHistory } from 'vue-router';
import UserRegister from '../views/UserRegister.vue'
import UserLogin from '../views/UserLogin.vue';
import UserProfile from '../views/UserProfile.vue';
import { useAuthStore } from '../stores/auth';

const routes = [
  { path: '/register', name: 'Register', component: UserRegister },
  { path: '/login', name: 'Login', component: UserLogin },
  { path: '/profile', name: 'Profile', component: UserProfile, meta: { requiresAuth: true } },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach(async (to) => {
  const auth = useAuthStore();
  if (!auth.user && auth.token) {
    try {
      await auth.fetchProfile();
    } catch (err: unknown) {
      console.error(err);
      auth.logout();
    }
  }
  if (to.meta.requiresAuth && !auth.isAuthenticated) {
    return { name: 'Login' };
  }
});

export default router;
