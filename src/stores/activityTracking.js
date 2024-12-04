import { defineStore } from "pinia";
import api from "@/lib/axios";
import { ref } from 'vue';

export const useActivityTracking = defineStore('activityTracking', () => {
    const activities = ref({});


    const fetchActivity = async (idActivity) => {
        const response = await api.get(`/activity-trackings/${idActivity}`)
        activities.value = response.data.data;
    }

    const addActivity = async (payload) => {
        const response = await api.post('/activity-trackings', payload);
        return response;
    }

    const updateActivity = async (idActivity, payload) => {
        const response = await api.put(`/activity-trackings/${idActivity}`, payload);
        return response;
    }

    const deleteActivity = async (idActivity) => {
        const response = await api.delete(`/activity-trackings/${idActivity}`);
        return response;
    }

    return {
        activities,
        fetchActivity,
        addActivity,
        updateActivity,
        deleteActivity
    };

});

export default useActivityTracking;