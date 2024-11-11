import { createRouter, createWebHistory } from 'vue-router'

import HomePage from './pages/HomePage.vue'
import PostsPage from './pages/PostsPage.vue'
import PostPage from './pages/PostPage.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/posts', component: PostsPage },
  { path: '/post', component: PostPage }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
