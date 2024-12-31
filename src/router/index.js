// router configuration all routes will be here 

import { createRouter, createWebHistory } from "vue-router";

import HomeView from "@/views/HomeView.vue";
import JobsView from "@/views/JobsView.vue";

//managing history 
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    // array of route objects
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/jobs',
            name: 'jobs',
            component: JobsView
        }
    ]
});

export default router;
