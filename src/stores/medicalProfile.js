import api from "@/lib/axios";
import { defineStore } from "pinia";
import { ref } from 'vue';

export const useMedicalProfileStore = defineStore('medicalProfile', () => {

    const medicalProfile = ref(null);

    const fetchMedicalProfile = async (idMedialProfile) => {
        const response = await api.get(`/medical-profiles/${idMedialProfile}`);
        medicalProfile.value = response.data.data;
    }

    const createMedicalProfile = async (payload) => {
        const response = await api.post('/medical-profiles', payload);
        return response;
    }

    const updateMedicalProfile = async (idMedicalProfile, payload) => {
        const response = await api.put(`/medical-profiles/${idMedicalProfile}`, payload);
        return response;
    }

    const deleteMedicalProfile = async (idMedicalProfile) => {
        const response = await api.delete(`/medical-profiles/${idMedicalProfile}`);
        return response;
    }



    return {
        medicalProfile,
        createMedicalProfile,
        fetchMedicalProfile,
        updateMedicalProfile,
        deleteMedicalProfile
    };
    
});

export default useMedicalProfileStore;