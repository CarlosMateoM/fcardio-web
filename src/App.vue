<template>
  <component :is="layout">
    <RouterView />
  </component>
</template>

<script setup>
import { computed } from 'vue';
import { RouterView } from 'vue-router'
import { useRoute } from 'vue-router';
import GuestLayout from './layouts/GuestLayout.vue';
import AuthenticatedLayout from './layouts/AuthenticatedLayout.vue';

const route = useRoute();

const layouts = {
  GuestLayout,
  AuthenticatedLayout
}

const layout = computed (() => {
  return route.meta.layout ? layouts[route.meta.layout] : 'div';
});


</script>
