<template>
    <main class="flex w-full min-h-screen justify-center items-center px-4 bg-[url('/backgroundCredentials.jpg')] bg-no-repeat bg-cover bg-fixed relative">
      <div class="absolute inset-0 bg-black/30 backdrop-blur-3xl"></div>
      <form 
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
              type="password"
              id="password"
              class="w-full p-3 border border-gray-200 rounded-lg pr-12 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-300 bg-white/80"
              required 
            />
            <button
              type="button"
              class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-blue-600 transition-colors"
            >
              <!-- You can add an eye icon here if using Vue with icon library -->
            </button>
          </div>
        </div>
  
        <button 
          type="submit" 
          class="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold shadow-md"
        >
          Iniciar Sesión
        </button>
  
        <div class="text-center">
            <spam>No tienes una cuenta?</spam>
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
</script>