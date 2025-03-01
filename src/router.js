import { createRouter, createWebHistory } from 'vue-router';
import NotFound from './views/NotFound.vue';

const Coctails = () => import('./views/СoctailsPage.vue');

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/:coctailId?',
      component: Coctails,
      props: true,
      name: 'coctails',
      alias: '/',
    },
    { path: '/:notFound(.*)', component: NotFound },
  ],
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
});

export default router;
