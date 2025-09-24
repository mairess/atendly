<script setup lang="ts">
import { onMounted } from 'vue';
import { useAuthStore } from '../stores/auth';
import { useRouter } from 'vue-router';

const auth = useAuthStore();
const router = useRouter();

onMounted(async () => {
  if (!auth.user) {
    try {
      await auth.fetchProfile();
    } catch {
      router.push({ name: 'Login' });
    }
  }
});

function logout() {
  auth.logout();
  router.push({ name: 'Login' });
}

const user = auth.user;
</script>


<template>
  <div>
    <h2>Perfil</h2>
    <div v-if="user">
      <p><strong>Nome:</strong> {{ user.name }}</p>
      <p><strong>Email:</strong> {{ user.email }}</p>
      <button @click="logout">Logout</button>
    </div>
    <div v-else>
      <p>Carregando...</p>
    </div>
  </div>
</template>