import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import store from '@/store'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      layout: 'main',
      auth: true,
    },
  },
  {
    path: '/auth',
    name: 'auth',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AuthView.vue'),
    meta: {
      layout: 'auth',
      auth: false,
    },
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

// действия до перехода на страницу
router.beforeEach((to, from, next) =>
{
  // узнаем из мета нужна ли регистрация для страницы
  const requireAuth = to.meta.auth
  // если в lockalStorage сохранен ключ то  порейдем на страницу
  if (requireAuth && store.getters['auth/isAuthenticated'])
  {
    next()
  }
  // в случае отсутствия ключа выведем страницу регистрации
  else if (requireAuth && !store.getters['auth/isAuthenticated'])
  {
    next('/auth')
  }
  else
  {
    next()
  }
})
export default router