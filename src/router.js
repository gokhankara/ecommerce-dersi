import VueRouter from 'vue-router';
import store from './store'


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

router.beforeEach((to, from,next)=>{

  console.log({to,from})

  const isLoggedIn = store.getters['auth/isLoggedIn']
  console.log({isLoggedIn})

  if ( isLoggedIn && ['/login','/register'].includes(to.path) ){
   return next('/')
  } 

  if ( !isLoggedIn && ['/basket'].includes(to.path) ){
    return next('/login')
   } 

  next();
})


export default router;
