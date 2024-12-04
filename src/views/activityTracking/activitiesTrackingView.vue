<template>
    <div class="container mx-auto py-8">
        <div class="flex justify-between items-center mb-6">
            <h1 class="text-2xl font-bold">Activity Tracking</h1>
            <RouterLink :to="{ name: 'activity.tracking.new' }"
                class="text-gray py-2 px-4 rounded">
                <ActivityHearbeatIcon class="text-blue-500 w-4 h-4 mr-2" />
                Registrar rutina
            </RouterLink>
        </div>

        <div class="bg-white shadow-md rounded-lg overflow-auto">
            <table class="w-full table-auto">
                <thead class="bg-gray-200">
                    <tr>
                        <th class="px-6 py-4 text-left">Fecha</th>
                        <th class="px-6 py-4 text-left">Hora</th>
                        <th class="px-6 py-4 text-left">Tipo de Ejercicio</th>
                        <th class="px-6 py-4 text-left">Frecuencia Cardíaca en Reposo</th>
                        <th class="px-6 py-4 text-left">Frecuencia Cardíaca Máxima</th>
                        <th class="px-6 py-4 text-left">Frecuencia Cardíaca de Recuperación</th>
                        <th class="px-6 py-4 text-left">Presión Arterial Sistólica</th>
                        <th class="px-6 py-4 text-left">Presión Arterial Diastólica</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="activity in activities" :key="activity.id" class="border-b">
                        <td class="px-6 py-4">{{ activity.date }}</td>
                        <td class="px-6 py-4">{{ activity.time }}</td>
                        <td class="px-6 py-4">{{ activity.exercise_type }}</td>
                        <td class="px-6 py-4">{{ activity.resting_heart_rate }} bpm</td>
                        <td class="px-6 py-4">{{ activity.max_heart_rate }} bpm</td>
                        <td class="px-6 py-4">{{ activity.recovering_heart_rate }} bpm</td>
                        <td class="px-6 py-4">{{ activity.systolic_pressure }} mmHg</td>
                        <td class="px-6 py-4">{{ activity.diastolic_pressure }} mmHg</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup>
    import ActivityHearbeatIcon from '@/components/icons/ActivityHearbeatIcon.vue';
    import useActivityTracking from '@/stores/activityTracking';
    import { storeToRefs } from 'pinia';
    import { onMounted } from 'vue';

    const { fetchActivity } = useActivityTracking();
    
    const {
        activities
    } = storeToRefs((useActivityTracking()));

    onMounted(async () => {
        await fetchActivity();
    });
</script>