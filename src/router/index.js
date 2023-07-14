import { createRouter, createWebHistory } from 'vue-router'
// import ExpandingCard from '../components/ExpandingCard/ExpandingCard.vue';
import routes from './routes';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
