<template>

    <main class="p-2 md:p-4 ">

        <section>


            <h1 class="text-4xl capitalize font-bold mb-2 ">
                {{ user.user.name }},
            </h1>
            <p class="text-gray-700 text-md mb-2 italic ">
                Bienvenido a tu panel de control
            </p>
            <p v-if="lastActivity" class="text-gray-500 text-xs ">
                El último registro de actividad fue el {{ format(lastActivity.created_at) }}
            </p>
            <p v-else class="text-gray-500 text-xs ">
                No tienes registros de actividad
            </p>

        </section>

        <section class="mt-6">
            <h2 class="text-xl mb-2 font-semibold">Perfil Médico</h2>

            <p class="text-gray-500 text-xs mb-2">
                Información básica sobre tus caracteristicas fisicas
            </p>
            <table class="w-full">

                <tr>
                    <td><strong>Tipo Sangre </strong></td>
                    <td>{{ user.user.medical_profile.blood_type }} </td>
                </tr>
                <tr>
                    <td><strong>Altura </strong></td>
                    <td>{{ user.user.medical_profile.height }} M</td>
                </tr>
                <tr>
                    <td><strong>Peso </strong></td>
                    <td>{{ user.user.medical_profile.weight }} kg</td>
                </tr>
                <tr>
                    <td><strong>Fecha Nacimiento </strong></td>
                    <td class="capitalize"> {{ format(user.user.medical_profile.birthdate) }} </td>
                </tr>
            </table>
        </section>

        <section class="mt-6 overflow-x-auto ">
            <h2 class="text-xl mb-2 font-semibold">Índices Cardíacos</h2>
            <p class="text-gray-500 text-xs mb-8">
                La información de tu frecuencia cardiaca es actualizada al ingresar un nuevo registro de tu rutina
            </p>
            <canvas ref="canvasRef" id="cardiacChart" class="w-full max-w-md mx-auto"></canvas>
        </section>
    </main>
</template>

<script setup>
    import { onMounted, computed, ref } from "vue";

    import format from "@/utils/date";
    import Chart from "chart.js/auto";
    import useAuthStore from "@/stores/auth";
    import { storeToRefs } from "pinia";

    const { user } = storeToRefs(useAuthStore());


    const lastActivity = computed(() => user.value.last_activity);


    const rfc = computed(() => {
        if (!lastActivity.value) return 0;
        return lastActivity.value.max_heart_rate - lastActivity.value.resting_heart_rate;
    });

    const irc = computed(() => {
        if (!lastActivity.value) return 0;
        return lastActivity.value.max_heart_rate - lastActivity.value.recovering_heart_rate;
    });


    const intensityZones = [0.5, 0.6, 0.7, 0.8, 0.9];
    const fcTraining = computed(() => {

        if (!lastActivity.value) return [];
     
        return intensityZones.map((intensity) =>
            Math.round(rfc.value * intensity + lastActivity.value.resting_heart_rate)
        )
    });


    const canvasRef = ref(null);

    onMounted(() => {

        if (canvasRef.value) {
            const ctx = canvasRef.value.getContext("2d");
        
            new Chart(ctx, {
                type: "pie",
                data: {
                    labels: ["Reserva Funcional", "Índice Recuperación", ...intensityZones.map((z) => `Zona ${z * 100}%`)],
                    datasets: [
                        {
                            label: "Índices Cardíacos",
                            data: [rfc.value, irc.value, ...fcTraining.value],
                            backgroundColor: [
                                "rgba(54, 162, 235, 0.7)",
                                "rgba(255, 99, 132, 0.7)",
                                "rgba(75, 192, 192, 0.7)",
                                "rgba(153, 102, 255, 0.7)",
                                "rgba(255, 159, 64, 0.7)",
                                "rgba(201, 203, 207, 0.7)"
                            ],
                            borderWidth: 1,
                        },
                    ],
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            position: "top",
                        },
                        tooltip: {
                            callbacks: {
                                label: (context) => `${context.label}: ${context.raw} bpm`,
                            },
                        },
                    },
                },
            });
        }
    });
</script>
