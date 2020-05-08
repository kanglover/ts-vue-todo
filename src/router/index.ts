import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Todo from '../views/todo.vue';
Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'Todo',
    component: Todo,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
