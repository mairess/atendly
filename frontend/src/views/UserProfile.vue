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
  <div class="flex items-center justify-center min-h-screen bg-gray-50">
    <div class="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-xl">
      <h2 class="text-3xl font-semibold text-center text-gray-700">Perfil</h2>

      <div v-if="user" class="space-y-4">
        <div class="space-y-2">
          <p class="text-lg"><strong class="font-semibold">Nome:</strong> {{ user.name }}</p>
          <p class="text-lg"><strong class="font-semibold">Email:</strong> {{ user.email }}</p>
        </div>

        <div class="text-center">
          <button 
            @click="logout" 
            class="w-full px-4 py-2 font-semibold text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            Logout
          </button>
        </div>
      </div>

      <div v-else class="text-center text-gray-500">
        <p>Carregando...</p>
      </div>
    </div>
  </div>
</template>