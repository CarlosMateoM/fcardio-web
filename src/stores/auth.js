import { defineStore } from "pinia";
import router from "@/router";
import api from "@/lib/axios";
import { ref } from 'vue';

export const useAuthStore = defineStore('auth', () => {

    const user = ref(null);
    
    const login = async (payload) => {
        const response = await api.post('/login', payload);
        localStorage.setItem('token', response.data.access_token);
        await fetchUser();
        router.push({name: 'home'});
        return response;
    };
    
    const logout = async () => {
        const response = await api.post('/logout');  
        localStorage.removeItem('token');
        router.push({name: 'login'})
        return response;
    };

    const register = async (payload) => {
        const response = await api.post('/register', payload);
        router.push({name: 'login'});
        return response;
    }

    const updateUser = async (payload) => { 
        const response = await api.post('/user', payload);
        return response;
    }

    const fetchUser = async () => {
        try {

            const response = await api.get('/user');
            user.value = response.data.data;
            return response;
        } catch (error) {
            router.push({name: 'login'});
            return error;
        }
     
    }
    
    return {
        user,
        login,
        logout,
        register,
        fetchUser,
        updateUser
    };
});

export default useAuthStore;