import { defineStore } from "pinia";
import router from "@/router";
import api from "@/lib/axios";
import { ref } from 'vue';

export const useAuthStore = defineStore('auth', () => {

    const user = ref(null);
    
    const login = async (payload) => {
        const response = await api.post('/login', payload);
        localStorage.setItem('token', response.data.access_token);
        router.push({name: 'home'});
        return response;
    };
    
    const logout = async () => {
        const response = await api.post('/logout');  
        localStorage.removeItem('token');
        router.push({name: ''})
        return response;
    };

    const register = async (payload) => {
        const response = await api.post('/register', payload);
        router.push({name: 'login'});
        return response;
    }

    const fetchUser = async () => {
        const response = await api.get('/user');
        user.value = response.data;
        return response;
    }
    
    return {
        user,
        login,
        logout,
        register,
        fetchUser
    };
});

export default useAuthStore;