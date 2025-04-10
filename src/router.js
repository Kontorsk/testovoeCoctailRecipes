import { createRouter, createWebHistory } from 'vue-router';
import NotFound from './views/NotFound.vue';
import Cocktails from './views/CocktailsPage.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/:cocktailId?',
      component: Cocktails,
      props: true,
      name: 'cocktails',
      alias: '/',
    },
    { path: '/:notFound(.*)', component: NotFound },
  ],
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
});

export default router;
