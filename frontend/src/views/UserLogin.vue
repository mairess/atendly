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
  <div class="flex items-center justify-center min-h-screen bg-gray-50">
    <div class="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-xl">
      <h2 class="text-2xl font-semibold text-center text-gray-700">Login</h2>
      
      <form @submit.prevent="doLogin" class="space-y-4">
        <div>
          <input 
            v-model="email" 
            type="email" 
            placeholder="Email" 
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div>
          <input 
            v-model="password" 
            type="password" 
            placeholder="Password" 
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <p v-if="error" class="text-sm text-center text-red-500">{{ error }}</p>

        <div>
          <button 
            type="submit" 
            class="w-full px-4 py-2 font-semibold text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Login
          </button>
        </div>
      </form>

      <div class="text-sm text-center text-gray-500">
        <p>Don't have an account? <a href="/register" class="text-indigo-600 hover:text-indigo-800">Sign up</a></p>
      </div>
    </div>
  </div>
</template>