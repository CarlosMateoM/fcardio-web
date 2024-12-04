<template>

    <section class="p-6 rounded-lg max-w-7xl mx-auto">

        <h2 class="text-2xl font-bold text-gray-800 mb-4">Perfil de Usuario</h2>
        <p class="text-gray-600 text-sm mb-6">
            Actualiza tus credenciales en fcardio
        </p>

        <!-- Formulario de Usuario -->
        <form @submit.prevent="updateUserHandleSubmit" class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
                <label for="nombre" class="block text-sm font-medium text-gray-700 mb-2">Nombre</label>
                <input v-model="userForm.name" type="text" id="nombre"
                    class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white"
                    required />
            </div>
            <div>
                <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Correo Electrónico</label>
                <input v-model="userForm.email" type="email" id="email"
                    class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white"
                    required />
            </div>
            <div>
                <label for="password" class="block text-sm font-medium text-gray-700 mb-2">Contraseña</label>
                <input v-model="userForm.password" type="password" id="password"
                    class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white"
                    required />
            </div>
            <div>
                <label for="confirm-password" class="block text-sm font-medium text-gray-700 mb-2">Confirmar
                    Contraseña</label>
                <input v-model="userForm.confirm_password" type="password" id="confirm-password"
                    class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white"
                    required />
            </div>
            <div class="mt-2">
                <button type="submit" class="flex w-full md:w-auto   py-3 ">
                    <UpdateIcon class="w-4 mr-2 text-blue-500" />
                    Actualizar
                </button>
            </div>
        </form>

        <h2 class="text-2xl font-bold text-gray-800 my-12 mb-4">Perfil Médico</h2>

        <p class="text-gray-600 text-sm mb-6">
            Actualiza tus información física
        </p>


        <!-- Formulario de Perfil Médico -->
        <form @submit.prevent="updateMedicalProfileHandleSubmit" class="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
                <label for="fecha-nacimiento" class="block text-sm font-medium text-gray-700 mb-2">Fecha de
                    Nacimiento</label>
                <input v-model="medicalProfileForm.birthdate" type="date" id="fecha-nacimiento"
                    class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white"
                    required />
            </div>
            <div>
                <label for="tipo-sangre" class="block text-sm font-medium text-gray-700 mb-2">Tipo de Sangre</label>
                <select v-model="medicalProfileForm.blood_type" id="tipo-sangre"
                    class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white"
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
                <label for="estatura" class="block text-sm font-medium text-gray-700 mb-2">Estatura (m)</label>
                <input v-model="medicalProfileForm.height" type="number" id="estatura"
                    class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white"
                    step="0.01" min="1.00" placeholder="Ej. 1.70" required />
            </div>
            <div>
                <label for="peso" class="block text-sm font-medium text-gray-700 mb-2">Peso (kg)</label>
                <input v-model="medicalProfileForm.weight" type="number" id="peso"
                    class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white"
                    step="0.01" min="5.00" placeholder="Ej. 70.5" required />
            </div>
            <div>
                <label for="telefono" class="block text-sm font-medium text-gray-700 mb-2">Número de Teléfono</label>
                <input v-model="medicalProfileForm.phone_number" type="tel" id="telefono"
                    class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white"
                    required />
            </div>
            <div>
                <label for="emergency-name" class="block text-sm font-medium text-gray-700 mb-2">Nombre Contacto de
                    Emergencia</label>
                <input v-model="medicalProfileForm.emergency_contact_name" type="text" id="emergency-name"
                    class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white"
                    required />
            </div>
            <div>
                <label for="emergency-phone" class="block text-sm font-medium text-gray-700 mb-2">Teléfono
                    Emergencia</label>
                <input v-model="medicalProfileForm.emergency_contact_phone" type="tel" id="emergency-phone"
                    class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white"
                    required />
            </div>
            <div class="sm:col-span-2 lg:col-span-3">
                <label for="historial-clinico" class="block text-sm font-medium text-gray-700 mb-2">Historial
                    Médico/Deportivo</label>
                <textarea v-model="medicalProfileForm.history" id="historial-clinico" rows="5"
                    class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white"
                    placeholder="Describe tu historial médico y deportivo..."></textarea>
            </div>
            <!-- Botón de Envío -->
            <div class="mt-2">
                <button type="submit" class="flex w-full md:w-auto py-3 ">
                    <UpdateIcon class="mr-2 w-4 text-blue-500" />
                    Actualizar
                </button>
            </div>

        </form>


    </section>
</template>

<script setup>
    import { onMounted, ref } from 'vue';
    import useAuthStore from '@/stores/auth';
    import useMedicalProfileStore from '@/stores/medicalProfile';
    import UpdateIcon from '@/components/icons/UpdateIcon.vue';


    const userForm = ref({
        name: '',
        email: '',
        password: '',
        confirm_password: ''
    });

    const medicalProfileForm = ref({
        birthdate: '',
        blood_type: '',
        height: 1.00,
        weight: 1.00,
        phone_number: '',
        emergency_contact_name: '',
        emergency_contact_phone: '',
        history: ''
    });


    const {
        fetchUser,
        updateUser
    } = useAuthStore();

    const {
        fetchMedicalProfile,
        updateMedicalProfile
    } = useMedicalProfileStore();

    const updateUserHandleSubmit = async () => {
        const response = await updateUser();
    }

    const updateMedicalProfileHandleSubmit = async () => {
        const response = await updateMedicalProfile();
    }

    onMounted(async () => {
        const response = await fetchUser();
        const id  = response.data.data.user.medical_profile.id;
        userForm.value = response.data.data.user;
        const medicalProfileResponse  = await fetchMedicalProfile(id);
        

    });
</script>