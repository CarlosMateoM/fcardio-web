import useAuthStore from '@/stores/auth'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('../views/auth/LoginView.vue'),
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/auth/RegisterView.vue'),
    },
    {
      path: '/medicalProfile',
      name: 'medicalProfile',
      component: () => import('../user/MedicalProfile.vue')
    }
  ],
})

router.beforeEach((to, from, next) => {

  const auth = useAuthStore();

  if (to.name !== 'login' && !localStorage.getItem('token')) {
    next({ name: 'login' })
  } else if(to.name === 'login' && localStorage.getItem('token')) {
    next({ name: 'inicio' })
  } else {
    next()
  }
})

export default router
