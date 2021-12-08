import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/task',
    name: 'Task',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Task.vue')
    // 加这个keep alive才生效
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/user',
    name: 'User',
    component: () => import(/* webpackChunkName: "about" */ '../views/User.vue')
  },
  {
    path: '/details',
    name: 'Details',
    component: () => import(/* webpackChunkName: "about" */ '../views/Details.vue')
  },
  {
    path: '/submit',
    name: 'Submit',
    component: () => import(/* webpackChunkName: "about" */ '../views/Submit.vue')
  },
  {
    path: '/manage',
    name: 'Manage',
    component: () => import(/* webpackChunkName: "about" */ '../views/Manage.vue')
  },
  {
    path: '/dealwith',
    name: 'Dealwith',
    component: () => import(/* webpackChunkName: "about" */ '../views/Dealwith.vue')
  },
  {
    path: '/loding',
    name: 'Loding',
    component: () => import(/* webpackChunkName: "about" */ '../views/Loding.vue')
  },
  {
    path: '/createtask',
    name: 'CreateTask',
    component: () => import(/* webpackChunkName: "about" */ '../views/CreateTask.vue')
  },
  {
    path: '/Accessibility',
    name: 'Cccessibility',
    component: () => import(/* webpackChunkName: "about" */ '../views/Accessibility.vue')
  },
  {
    path: '/UserAgreement',
    name: 'UserAgreement',
    component: () => import(/* webpackChunkName: "about" */ '../views/UserAgreement.vue')
  },
  {
    path: '/Privacy',
    name: 'Privacy',
    component: () => import(/* webpackChunkName: "about" */ '../views/Privacy.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
