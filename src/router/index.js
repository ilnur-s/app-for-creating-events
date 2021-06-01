import { createRouter, createWebHistory } from 'vue-router';
import FirstStep from '../components/FirstStep.vue';

const routes = [
  {
    path: '/',
    name: 'FirstStep',
    component: FirstStep,
  },
  {
    path: '/',
    name: 'SecondStep',
    component: () => import('../components/SecondStep.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
