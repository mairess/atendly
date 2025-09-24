<script setup lang="ts"></script>

<template>
<div>
    <nav>
      <router-link to="/register">Register</router-link>
      <router-link to="/login">Login</router-link>
      <router-link to="/profile">Profile</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style scoped></style>
