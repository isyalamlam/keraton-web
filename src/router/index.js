import { createRouter, createWebHistory } from 'vue-router'
import SignIn from '../views/SignIn.vue'
import SignUp from '../views/SignUp.vue'
import AreaKeraton from '../views/AreaKeraton.vue'
import Museum from '../views/Museum.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/signin',
      name: 'signin',
      component: SignIn
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUp
    },
    {
      path: '/areakeraton',
      name: 'areakeraton',
      component: AreaKeraton
    },
    {
      path: '/museum',
      name: 'museum',
      component: Museum
    },
 
  ]
})

export default router
