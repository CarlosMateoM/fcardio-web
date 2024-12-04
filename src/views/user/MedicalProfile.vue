<template>
  <form @submit.prevent="handleSubmit"
    class="mx-auto w-full max-w-5xl p-8  grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
    <div class=" col-span-full">
      <p class="mb-4 text-blue-700">
        Bienvenido a <strong> FCardio</strong>,
      </p>
      <h1 class="text-4xl capitalize font-bold text-blue-600 mb-4">
        {{ user.user.name }}
      </h1>
      <p class="text-gray-700 text-md">
        Por favor completa tu perfil médico para continuar
      </p>
    </div>

    <div class="grid grid-cols-1 gap-6">
      <div>
        <label for="fecha-nacimiento" class="block text-sm font-medium text-gray-700 mb-2">
          Fecha de Nacimiento
        </label>
        <input v-model="form.birthdate" type="date" id="fecha-nacimiento"
          class="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-300 bg-white/80"
          required />
      </div>

      <div>
        <label for="tipo-sangre" class="block text-sm font-medium text-gray-700 mb-2">
          Tipo de Sangre
        </label>
        <select v-model="form.blood_type" id="tipo-sangre"
          class="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-300 bg-white/80"
          required>
          <option value="">Selecciona tu tipo de sangre</option>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
        </select>
      </div>

      <div>
        <label for="estatura" class="block text-sm font-medium text-gray-700 mb-2">
          Estatura (m)
        </label>
        <input v-model="form.height" type="number" id="estatura"
          class="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-300 bg-white/80"
          step="0.01" min="1.00" placeholder="Ej. 1.70" required />
      </div>
    </div>

    <div class="grid grid-cols-1 gap-6">
      <div>
        <label for="peso" class="block text-sm font-medium text-gray-700 mb-2">
          Peso (kg)
        </label>
        <input v-model="form.weight" type="number" id="peso" step="0.01" min="5.00"
          class="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-300 bg-white/80"
          placeholder="Ej. 70.5" required />
      </div>

      <div>
        <label for="direccion" class="block text-sm font-medium text-gray-700 mb-2">
          Número de teléfono
        </label>
        <input v-model="form.phone_number" type="tel" id="direccion"
          class="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-300 bg-white/80"
          required />
      </div>

      <div>
        <label for="telefono" class="block text-sm font-medium text-gray-700 mb-2">
          Nombre del contacto de emergencia
        </label>
        <input v-model="form.emergency_contact_name" type="tel" id="text"
          class="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-300 bg-white/80"
          required />
      </div>
    </div>

    <div class="md:col-span-full grid grid-cols-1 gap-6">
      <div>
        <label for="telefono-familiar" class="block text-sm font-medium text-gray-700 mb-2">
          Número de teléfono del contacto de emergencia
        </label>
        <input v-model="form.emergency_contact_phone" type="tel" id="telefono-familiar"
          class="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-300 bg-white/80"
          required />
      </div>

      <div>
        <label for="historial-clinico" class="block text-sm font-medium text-gray-700 mb-2">
          Historial Clínico-Deportivo
        </label>
        <textarea v-model="form.history" id="historial-clinico" rows="5"
          class="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-300 bg-white/80 overflow-y-auto"
          placeholder="Describe tu historial médico y deportivo..."></textarea>
      </div>
    </div>

    <div class="md:col-span-full">
      <button type="submit"
        class="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold shadow-md">
        Completar Perfil
      </button>
    </div>

    <!-- <div class="md:col-span-full text-center">
          <p class="text-sm text-gray-600">
            ¿Desesa regresar al inicio de sesión? 
            <RouterLink :to="{name: 'login'}" >
              <a 
                href="#" 
                class="text-blue-600 hover:underline"
              >
                Inicio de Sesión
              </a>
            </RouterLink>
          </p>
        </div> -->
  </form>
</template>
<script setup>
  import { ref } from 'vue';
  import useAuthStore from '@/stores/auth';
  import useMedicalProfileStore from '@/stores/medicalProfile';
  import router from '@/router';
  import { storeToRefs } from 'pinia';

  const {
    createMedicalProfile
  } = useMedicalProfileStore();

  const {
    user
  } = storeToRefs(useAuthStore());

  const {
    fetchUser
  } = useAuthStore();

  const form = ref({
    birthdate: '',
    blood_type: '',
    height: 1.00,
    weight: 1.00,
    phone_number: '',
    emergency_contact_name: '',
    emergency_contact_phone: '',
    history: ''
  });

  const handleSubmit = async () => {

    const response = await createMedicalProfile(form.value);
    
    await fetchUser();

    if (response.status === 201) {
      router.push({ name: 'home' });
    }
  };
</script>