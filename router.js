import { createRouter, createWebHistory } from 'vue-router'
import Login from './components/Login.vue'
import Home from './components/Home.vue'
import JobPosting from './components/JobPosting.vue'
import firebase from './plugins/firebase'

function checkRouteOnlyLoggedIn(route) {
  return route.matched.some((record) => record.meta.onlyLoggedIn)
}

function checkRouteOnlyLoggedOut(route) {
  return route.matched.some((record) => record.meta.onlyLoggedOut)
}

function redirectLogin(currentUser, route, redirect) {
  const onlyLoggedIn = checkRouteOnlyLoggedIn(route)
  const onlyLoggedOut = checkRouteOnlyLoggedOut(route)

  if (onlyLoggedOut && currentUser) {
    const path = route.query.redirect || ''
    return redirect(path)
  }

  if (onlyLoggedIn && !currentUser) {
    return redirect({
      name: 'login',
      query: { redirect: route.fullPath },
    })
  }

  return false
}

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: { onlyLoggedOut: true },
    },
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: { onlyLoggedIn: true },
    },
    {
      path: '/job-posting',
      name: 'jobPosting',
      component: JobPosting,
      meta: { onlyLoggedIn: true },
    },
    { path: '/:path(.*)', redirect: { name: 'home' } },
  ],
})

router.beforeEach(async (to, from, next) => {
  const currentUser = await firebase.auth().currentUser
  return redirectLogin(currentUser, to, next) || next()
})

firebase.auth().onAuthStateChanged((currentUser) => {
  redirectLogin(currentUser, router.currentRoute.value, router.push)
})

export default router
