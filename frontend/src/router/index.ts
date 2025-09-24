import { createRouter, createWebHistory } from 'vue-router';
import UserRegister from '../views/UserRegister.vue'
import { useAuthStore } from '../stores/auth';

const routes = [
  { path: '/register', name: 'Register', component: UserRegister },
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
