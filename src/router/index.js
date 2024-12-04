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
      path: '/home',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/auth/RegisterView.vue'),
    },
    {
      path: '/medicalProfile',
      name: 'medicalProfile',
      component: () => import('../views/user/MedicalProfile.vue')
    }
  ],
})


router.beforeEach(async (to, from, next) => {
 
  const excludeRoutes = ['login', 'register'];
 
  const hasToken = localStorage.getItem('token') !== null;
  
  if (hasToken) {

    const auth = useAuthStore();

    if (hasToken && auth.user === null) {
      await auth.fetchUser();
    }
     
    if (auth.user.medical_profile === null && to.name !== 'medicalProfile') {
      next({ name: 'medicalProfile' });
      return;
    }

    
    if (excludeRoutes.includes(to.name)) {
      next({ name: 'home' });
      return;
    }

   
  } else {
    
    if (!excludeRoutes.includes(to.name)) {
      next({ name: 'login' });
      return;
    }
  }

  
  next();
});

export default router
