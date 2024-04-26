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
import AgungDalem from '../views/AgungDalem.vue'
import Lotus from '../views/Lotus.vue'
import sejarahSilsilah from '../views/sejarahSilsilah.vue'
import silsilahDesktop from '../views/silsilahDesktop.vue'

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
      path: '/agungdalem',
      name: 'agungdalem',
      component: AgungDalem
    },
    {
      path: '/lotus',
      name: 'lotus',
      component: Lotus
    },
    {
      path: '/sejarahsilsilah',
      name: 'sejarahsilsilah',
      component: sejarahSilsilah
    },
    {
      path: '/silsilahdesktop',
      name: 'silsilahktop',
      component: silsilahDesktop
    },
  ]
})

export default router