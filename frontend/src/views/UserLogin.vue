<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'

const router = useRouter()
const auth = useAuthStore()
const email = ref('')
const password = ref('')
const error = ref('')

const doLogin = async () => {
  try {
    await auth.login(email.value, password.value)
    router.push({ name: 'Profile' })
  } catch (err: unknown) {
    if (err instanceof Error) {
      error.value = err.message || 'Error on logging!'
      console.error(err);
    } else {
      error.value = 'Unexpected Error!';
      console.error(err);
    }
  }
}
</script>

<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="doLogin">
      <input v-model="email" placeholder="Email" />
      <input v-model="password" type="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
    <p v-if="error">{{ error }}</p>
  </div>
</template>
