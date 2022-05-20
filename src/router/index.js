import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/LoginPage.vue')
    },
    {
      path: '/register',
      name: 'register',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/RegisterPage.vue')
    },
    {
      path: '/recipes/:id',
      name: 'RecipesDetail',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/RecipeDetail.vue')
    },
    {
      path: '/bookmark',
      name: 'bookmark',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Bookmark.vue')
    },
    {
      path: '/anotherRecipe',
      name: 'anotherRecipe',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AnotherRecipe.vue')
    },
    {
      path: '/anotherRecipe/:id',
      name: 'detailAnother',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/DetailAnother.vue')
    },
    
    
  ]
})

router.beforeEach((to, from, next) => {
  if (localStorage.getItem("access_token") && (to.name === 'login' || to.name === "register")) next({ name: 'home' })
  else if (to.name === 'bookmark' && !localStorage.getItem("access_token")) next({ name: 'login' })
  else next()
})
export default router
