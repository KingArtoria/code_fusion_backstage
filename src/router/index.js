import Vue from 'vue';
import VueRouter from 'vue-router';
const index = () => import('../views/index/index.vue');
Vue.use(VueRouter);
const routes = [
  { path: '/', name: 'index', component: index },
];
const router = new VueRouter({ routes, mode: 'history' });
export default router;
