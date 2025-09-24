<template>
  <div>
    <h2>Register</h2>
    <form @submit.prevent="doRegister">
      <input v-model="name" placeholder="Name" />
      <input v-model="email" placeholder="Email" />
      <input v-model="password" type="password" placeholder="Password" />
      <button type="submit">Register</button>
    </form>
    <p v-if="error">{{ error }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'

const router = useRouter()
const auth = useAuthStore()
const name = ref('')
const email = ref('')
const password = ref('')
const error = ref('')

const doRegister = async () => {
  try {
    await auth.register(name.value, email.value, password.value)
    router.push({ name: 'Login' })
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error(err)
      error.value = err.message || 'Error on registering user!'
    } else {
      console.error(err)
      error.value = 'Unexpected Error!'
    }
  }
}
</script>
