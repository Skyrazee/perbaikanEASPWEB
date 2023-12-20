import { createRouter, createWebHistory } from 'vue-router';
import RegistrationForm from '../views/RegistrationForm.vue';
import StatusCheck from '../views/StatusCheck.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: RegistrationForm,
        },
        {
            path: '/status',
            name: 'status',
            component: StatusCheck,
        },
    ],
});

export default router;