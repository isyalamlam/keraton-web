import { createRouter, createWebHistory } from 'vue-router'
import SignIn from '../views/SignIn.vue'
import SignUp from '../views/SignUp.vue'
import SejarahKeraton from '../views/SejarahKeraton.vue'
import HistoryTransaksi from '../views/HistoryTransaksi.vue'
import AreaKeraton from '../views/AreaKeraton.vue'
import Museum from '../views/Museum.vue'
import CheckoutKeraton from '../views/CheckoutKeraton.vue'
import Checkout from '../views/CheckOut.vue'
import PilihanPaket from '../views/PilihanPaket.vue'
import BeranDa from '../views/BeranDa.vue'
import Checkoutlebihdari1 from '../views/CheckOutlebihdari1.vue'
import EventGratis from '../views/EventGratis.vue'
import Booking from '../views/Booking.vue'
import FilterBayar from '../views/FilterBayar.vue'

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
      component: Checkout
    },
    {
      path: '/',
      name: 'beranda',
      component: BeranDa
    },
    {
      path: '/historytransaksi',
      name: 'historytransaksi',
      component: HistoryTransaksi
    },
    {
      path: '/eventgratis',
      name: 'eventgratis',
      component: EventGratis
    },
    {
      path: '/checkoutlebihdari1',
      name: 'checkoutlebihdari1',
      component: Checkoutlebihdari1
    },
    {
      path: '/booking',
      name: 'booking',
      component: Booking
    },
    {
      path: '/filterbayar',
      name: 'filterbayar',
      component: FilterBayar
    },
  ]
})

export default router