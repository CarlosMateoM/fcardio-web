<template>
    <div class="flex flex-col md:flex-row">
      
      <div class="w-full md:w-1/3 p-6 md:p-12">
        <div class="flex flex-col items-start mb-8">
          <button 
            @click="goBack" 
            class="flex items-center text-gray-600 hover:text-blue-600 transition-colors mb-4"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Regresar
          </button>
          <h1 class="text-4xl font-bold text-blue-600">FCardio</h1>
        </div>
        <p class="text-xl text-gray-700 mb-4">Registro de Ejercicio Cardiovascular</p>
        <p class="text-gray-500">
          Monitorea tu frecuencia cardíaca, presión arterial y rendimiento físico en cada entrenamiento.
        </p>
      </div>
    
      <form 
        @submit.prevent="handleSubmit" 
        class="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-6 p-6 md:p-12"
      >
        <div>
          <label for="date" class="block text-sm font-medium text-gray-700 mb-2">
            Fecha
          </label>
          <input 
            v-model="form.date"
            type="date" 
            id="date" 
            required 
            class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
    
        <div>
          <label for="time" class="block text-sm font-medium text-gray-700 mb-2">
            Hora
          </label>
          <input 
            v-model="form.time"
            type="time" 
            id="time" 
            required 
            class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
    
        <div>
          <label for="exercise_type" class="block text-sm font-medium text-gray-700 mb-2">
            Tipo de Ejercicio
          </label>
          <input 
            v-model="form.exercise_type"
            type="text" 
            id="exercise_type" 
            required 
            class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
    
        <div>
          <label for="resting_heart_rate" class="block text-sm font-medium text-gray-700 mb-2">
            FC Reposo (ppm)
          </label>
          <input 
            v-model.number="form.resting_heart_rate"
            type="number" 
            id="resting_heart_rate" 
            min="40" 
            max="200" 
            required 
            class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
    
        <div>
          <label for="max_heart_rate" class="block text-sm font-medium text-gray-700 mb-2">
            FC Máxima (ppm)
          </label>
          <input 
            v-model.number="form.max_heart_rate"
            type="number" 
            id="max_heart_rate" 
            min="40" 
            max="220" 
            required 
            class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
    
        <div>
          <label for="recovering_heart_rate" class="block text-sm font-medium text-gray-700 mb-2">
            FC Recuperación (ppm)
          </label>
          <input 
            v-model.number="form.recovering_heart_rate"
            type="number" 
            id="recovering_heart_rate" 
            min="40" 
            max="200" 
            required 
            class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
    
        <div>
          <label for="systolic_pressure" class="block text-sm font-medium text-gray-700 mb-2">
            Presión Sistólica (mmHg)
          </label>
          <input 
            v-model.number="form.systolic_pressure"
            type="number" 
            id="systolic_pressure" 
            min="40" 
            max="250" 
            required 
            class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
    
        <div>
          <label for="diastolic_pressure" class="block text-sm font-medium text-gray-700 mb-2">
            Presión Diastólica (mmHg)
          </label>
          <input 
            v-model.number="form.diastolic_pressure"
            type="number" 
            id="diastolic_pressure" 
            min="40" 
            max="150" 
            required 
            class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
    
        <div class="md:col-span-3 mt-6">
          <button 
            type="submit"
            class="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold shadow-md"
          >
            Guardar Registro
          </button>
        </div>
      </form>
    </div>
  </template>
<script setup>
import { ref } from 'vue';
import useActivityTracking from '@/stores/activityTracking.js';

const { 
    addActivity 
                } = useActivityTracking();

const form = ref({
  date: '',
  time: '',
  exercise_type: '',
  resting_heart_rate: 0,
  max_heart_rate: 0,
  recovering_heart_rate: 0,
  systolic_pressure: 0,
  diastolic_pressure: 0
});

const handleSubmit = async () => {
    const response = await addActivity(form.value);
    console.log(response);
}
</script>