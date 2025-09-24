<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()

</script>

<template>
  <div>
    <nav v-if="route.name !== 'Profile'">
      <router-link to="/register">Register</router-link>
      <router-link to="/login">Login</router-link>
      <router-link to="/profile">Profile</router-link>
    </nav>

    <router-view />
  </div>
</template>

<style scoped></style>
