import Vue from 'vue';
import VueRouter from 'vue-router';
const index = () => import('../views/index/index.vue');
const code_list = () => import('../views/code_list/index.vue');
Vue.use(VueRouter);
const routes = [
  { path: '/', name: 'index', component: index },
  { path: '/code_list', name: 'code_list', component: code_list },
];
const router = new VueRouter({ routes, mode: 'history' });
export default router;
