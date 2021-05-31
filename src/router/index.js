import { createRouter, createWebHistory } from 'vue-router';
import FirstStep from '../components/FirstStep.vue';

const routes = [
  {
    path: '/',
    name: 'First step',
    component: FirstStep,
  },
  {
    path: '/second-step',
    name: 'SecondStep',
    component: () => import('../components/SecondStep.vue'),
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
