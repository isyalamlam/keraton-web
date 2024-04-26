import { createRouter, createWebHistory } from 'vue-router'
import SignIn from '../views/SignIn.vue'
import SignUp from '../views/SignUp.vue'
import SejarahLP from '../views/SejarahLP.vue'
import HistoryTransaksi from '../views/HistoryTransaksi.vue'
import AreaKeraton from '../views/AreaKeraton.vue'
import Museum from '../views/Museum.vue'
import CheckoutKeraton from '../views/CheckoutKeraton.vue'
import Checkout from '../views/CheckOut.vue'
import PilihanPaket from '../views/PilihanPaket.vue'
import BeranDa from '../views/BeranDa.vue'
import EventGratis from '../views/EventGratis.vue'
import Booking from '../views/Booking.vue'
import FilterBayar from '../views/FilterBayar.vue'
import Quasar from '../views/Quasar.vue'
import Silsilah from '../views/Silsilah.vue'


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

      path: '/sejarah',
      name: 'sejarah',
      component: SejarahLP
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
      path: '/booking',
      name: 'booking',
      component: Booking
    },
    {
      path: '/filterbayar',
      name: 'filterbayar',
      component: FilterBayar
    },
    {
      path: '/quasar',
      name: 'quasar',
      component: Quasar
    },
    {
      path: '/silsilah',
      name: 'silsilah',
      component: Silsilah
    },
  ]
})

export default router