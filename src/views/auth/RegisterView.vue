<template>
  <form @submit.prevent="handleSubmit"
    class="w-full max-w-md  p-8 rounded-xl shadow-lg bg-white/80 backdrop-blur-md border border-white/20 flex flex-col gap-6 relative z-10">
    <div class="text-center">
      <h1 class="text-3xl font-bold text-blue-600 mb-2">FCardio</h1>
      <p class="text-gray-500 text-sm">Registro de Usuario</p>
    </div>

    <div>
      <div>
        <label for="nombre" class="block text-sm font-medium text-gray-700 mb-2">
          Nombre
        </label>
        <input v-model="form.name" type="text" id="nombre"
          class="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-300 bg-white/80"
          required />
      </div>

    </div>

    <div>
      <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
        Correo electrónico
      </label>
      <input v-model="form.email" type="email" id="email"
        class="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-300 bg-white/80"
        required />
    </div>

    <div>
      <label for="password" class="block text-sm font-medium text-gray-700 mb-2">
        Contraseña
      </label>
      <div class="relative">
        <input v-model="form.password" type="password" id="password"
          class="w-full p-3 border border-gray-200 rounded-lg pr-12 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-300 bg-white/80"
           />
        <button type="button"
          class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-blue-600 transition-colors">
          <!-- Icono de ojo -->
        </button>
      </div>
    </div>

    <div>
      <label for="confirm-password" class="block text-sm font-medium text-gray-700 mb-2">
        Confirmar Contraseña
      </label>
      <div class="relative">
        <input v-model="form.confirm_password" type="password" id="confirm-password"
          class="w-full p-3 border border-gray-200 rounded-lg pr-12 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-300 bg-white/80"
           />
        <button type="button"
          class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-blue-600 transition-colors">
          <!-- Icono de ojo -->
        </button>
      </div>
    </div>

    <button type="submit"
      class="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold shadow-md">
      Registrarse
    </button>

    <div class="text-center">
      <p class="text-sm text-gray-600">
        ¿Ya tienes una cuenta?
        <RouterLink :to="{ name: 'login' }">
          <a href="#" class="text-blue-600 hover:underline">
            Iniciar sesión
          </a>
        </RouterLink>

      </p>
    </div>
  </form>
</template>
<script setup>
  import { ref } from 'vue';
  import useAuthStore from '@/stores/auth';

  const form = ref({
    name: '',
    email: '',
    password: '',
    confirm_password: ''
  });

  const {
    register
  } = useAuthStore();

  const handleSubmit = async () => {

    const response = await register(form.value);
    console.log(response);


  };
</script>