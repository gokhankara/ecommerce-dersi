import VueRouter from 'vue-router';



const routes = [
  { path: "/turkey", component:() => import("@/views/HelloTurkey.vue"), },
  { path: "/", component: ()=>import('@/views/HelloWorld.vue') },
  { path: "/p/:productId", component: ()=>import('@/views/Pdp.vue') },
  { path: "/pd/:slug-p-:sku", component: ()=>import('@/views/Pdp.vue') },
  { path: "/l/:categoryId", component: ()=>import('@/views/Plp.vue') },
  { path: "/l", component: ()=>import('@/views/Plp.vue') },
  { path: "/basket", component: ()=>import('@/views/Basket.vue')},
  { path: "/login", component: ()=>import('@/views/Login.vue')},
  //{ path: "/:categorySlug-x-:xId-c:categoryId", component: ()=>import('@/views/Plp.vue') },
  { path: '*', component: ()=>import('@/views/ErrorPage.vue')}
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
