import { createRouter, createWebHistory } from "vue-router";
import HomePage from '@/pages/Home/Home.vue'

const routes = [
    {
        path: '/',
        component: HomePage
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;