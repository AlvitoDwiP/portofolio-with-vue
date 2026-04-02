import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ExperienceDetailView from '@/views/ExperienceDetailView.vue'
import ProjectDetailView from '@/views/ProjectDetailView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/projects/:slug',
    name: 'project-detail',
    component: ProjectDetailView,
  },
  {
    path: '/experiences/:slug',
    name: 'experience-detail',
    component: ExperienceDetailView,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }

    return { top: 0 }
  },
})

export default router
