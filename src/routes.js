import VueRouter from 'vue-router';
import HelloWorld from "@/views/HelloWorld.vue";
import HelloTurkey from "@/views/HelloTurkey.vue";
import Pdp from "@/views/Pdp.vue";
import Plp from "@/views/Plp.vue";
import ErrorPage from "@/views/ErrorPage.vue";
import Basket from "@/views/Basket.vue";


const routes = [
  { path: "/turkey", component: HelloTurkey },
  { path: "/", component: HelloWorld },
  { path: "/p/:productId", component: Pdp },
  { path: "/pd/:slug-p-:sku", component: Pdp },
  { path: "/l/:categoryId", component: Plp },
  { path: "/l", component: Plp },
  { path: "/basket", component: Basket},
  //{ path: "/:categorySlug-x-:xId-c:categoryId", component: Plp },
  { path: '*', component: ErrorPage}
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
