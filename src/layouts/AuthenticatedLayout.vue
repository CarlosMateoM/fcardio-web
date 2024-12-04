<template>
    <div class="flex w-full min-h-screen justify-center items-center px-4 bg-[url('/backgroundCredentials.jpg')] bg-no-repeat bg-cover bg-fixed">
        <div class="absolute inset-0 bg-black/30 backdrop-blur-3xl"></div>

        <div class="w-full  p-8 rounded-xl shadow-lg bg-white/80 backdrop-blur-md border border-white/20 flex flex-col gap-6 relative z-10">

            <header>
                <nav>
                    <ul class="flex justify-around">
                        <li>
                            <RouterLink :to="{ name: 'home' }">
                                <HomeIcon class="w-4 text-blue-700" />
                                <span>Inicio</span>
                            </RouterLink>
                        </li>
                        <li>
                            <RouterLink :to="{ name: 'activity.tracking' }">
                                <HealthIcon class="w-4 text-blue-700" />
                                <span>Rutina</span>
                            </RouterLink>
                        </li>
                        <li>
                            <RouterLink :to="{ name: 'home' }">
                                <UserIcon class="w-4 text-blue-700" />
                                <span>Perfil</span>
                            </RouterLink>
                        </li>
                    </ul>
                </nav>
            </header>

            <slot></slot>

        </div>
    </div>
</template>
<script setup>
import HealthIcon from '@/components/icons/HealthIcon.vue';
import HomeIcon from '@/components/icons/HomeIcon.vue';
import UserIcon from '@/components/icons/UserIcon.vue';
</script>