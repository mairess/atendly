<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()

</script>

<template>
  <div class="flex flex-col min-h-screen">
    <nav 
      v-if="route.name !== 'Profile'" 
      class="flex items-center justify-between px-6 py-4 text-white bg-indigo-600 shadow-md"
    >
      <div class="text-xl font-bold">Atendly</div>
      <div class="space-x-4">
        <router-link 
          to="/register" 
          class="px-3 py-2 transition-colors rounded-md hover:bg-indigo-500"
        >
          Register
        </router-link>
        <router-link 
          to="/login" 
          class="px-3 py-2 transition-colors rounded-md hover:bg-indigo-500"
        >
          Login
        </router-link>
        <router-link 
          to="/profile" 
          class="px-3 py-2 transition-colors rounded-md hover:bg-indigo-500"
        >
          Profile
        </router-link>
      </div>
    </nav>

    <div class="flex-1">
      <router-view />
    </div>
  </div>
</template>

<style scoped></style>
