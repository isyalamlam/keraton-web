import { createRouter, createWebHistory } from 'vue-router'
import SignIn from '../views/SignIn.vue'
import SignUp from '../views/SignUp.vue'
import SejarahKeraton from '../views/SejarahKeraton.vue'
import HistoryTransaksi from '../views/HistoryTransaksi.vue'
import AreaKeraton from '../views/AreaKeraton.vue'
import Museum from '../views/Museum.vue'
import CheckoutKeraton from '../views/CheckoutKeraton.vue'
import Checkout from '../views/CheckOut.vue'
<<<<<<< Updated upstream
import PilihanPaket from '../views/PilihanPaket.vue'
import CheckOut from '../views/CheckOut.vue'
import BeranDa from '../views/BeranDa.vue'

=======
import EventGratis from '../views/EventGratis.vue'
>>>>>>> Stashed changes

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

      path: '/sejarahkeraton',
      name: 'sejarahkeraton',
      component: SejarahKeraton
    }
    ,{
      path: '/areakeraton',
      name: 'areakeraton',
      component: AreaKeraton
    },
    {
      path: '/museum',
      name: 'museum',
      component: Museum
    },
    {
      path: '/checkoutkeraton',
      name: 'checkoutkeraton',
      component: CheckoutKeraton
    },
    {
      path: '/pilihanpaket',
      name: 'pilihanpaket',
      component: PilihanPaket
    },
    {
      path: '/checkout',
      name: 'checkout',
<<<<<<< Updated upstream
      component: CheckOut
    },
    {
      path: '/beranda',
      name: 'beranda',
      component: BeranDa
    },
    {
      path: '/historytransaksi',
      name: 'historytransaksi',
      component: HistoryTransaksi

    },
=======
      component: Checkout
    },
    {
      path: '/eventgratis',
      name: 'eventgratis',
      component: EventGratis
    }
>>>>>>> Stashed changes
  ]
})

export default router