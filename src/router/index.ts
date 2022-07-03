import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import store from '@/store'
import HomeView from '../views/HomeView/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      layout: 'main',
      auth: true,
      title: 'Galery',
    },
  },
  {
    path: '/auth',
    name: 'auth',
    component: () => import('../views/AuthView/AuthView.vue'),
    meta: {
      layout: 'auth',
      auth: false,
      title: 'Authenticated',
    },
  },
  {
    // страница 404
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../views/NotFound/NotFound.vue'),
    meta: {
      layout: 'main',
      auth: false,
      title: 'Not Found',
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