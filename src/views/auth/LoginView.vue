<template>
    <main class="flex w-full min-h-screen justify-center items-center px-4 bg-[url('/backgroundCredentials.jpg')] bg-no-repeat bg-cover bg-fixed relative">
      <div class="absolute inset-0 bg-black/30 backdrop-blur-3xl"></div>
      <form 
        @submit.prevent="handleSubmit"
        class="w-full max-w-md p-8 rounded-xl shadow-lg bg-white/80 backdrop-blur-md border border-white/20 flex flex-col gap-6 relative z-10"
      >
        <div class="text-center">
          <h1 class="text-3xl font-bold text-blue-600 mb-2">FCardio</h1>
          <p class="text-gray-500 text-sm">Inicio de sesión</p>
        </div>
  
        <div>
          <label 
            for="email" 
            class="block text-sm font-medium text-gray-700 mb-2"
          >
            Correo electrónico
          </label>
          <input
            v-model="form.email" 
            type="email" 
            id="email"
            class="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-300 bg-white/80"
            required 
          />
        </div>
        
        <div>
          <label 
            for="password" 
            class="block text-sm font-medium text-gray-700 mb-2"
          >
            Contraseña
          </label>
          <div class="relative">
            <input 
              v-model="form.password"
              type="password"
              id="password"
              class="w-full p-3 border border-gray-200 rounded-lg pr-12 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-300 bg-white/80"
              required 
            />
          </div>
        </div>
  
        <button 
          type="submit" 
          class="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold shadow-md"
        >
          Iniciar Sesión
        </button>
  
        <div class="text-center">
            <span>¿No tienes una cuenta?</span>
          <RouterLink to="/register">
              <a 
              href="#" 
              class="text-sm text-blue-600 hover:underline"
            >
              Regístrate
            </a>
          </RouterLink>
        </div>
      </form>
    </main>
  </template>
<script setup>
import { ref } from 'vue';
import useAuthStore from '@/stores/auth';

const {
    login } = useAuthStore();
    
    const form = ref({
        email: '',
        password: ''
    })

    const handleSubmit = async () => {
        const response = await login(form.value);
        console.log(response);
    }
</script>