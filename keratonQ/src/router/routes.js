const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/agungdalem', component: () => import('pages/AgungDalem.vue') },
      { path: '/areakeraton', component: () => import('pages/AreaKeraton.vue') },
      { path: '/', component: () => import('pages/BeranDa.vue') },
      { path: '/booking', component: () => import('pages/Booking.vue') },
      { path: '/checkout', component: () => import('pages/CheckOut.vue') },
      { path: '/checkoutkeraton', component: () => import('pages/CheckoutKeraton.vue') },
      { path: '/eventgratis', component: () => import('pages/EventGratis.vue') },
      { path: '/filterbayar', component: () => import('pages/FilterBayar.vue') },
      { path: '/historytransaksi', component: () => import('pages/HistoryTransaksi.vue') },
      { path: '/lotus', component: () => import('pages/Lotus.vue') },
      { path: '/museum', component: () => import('pages/Museum.vue') },
      { path: '/pembayaran', component: () => import('pages/Pembayaran.vue') },
      { path: '/pilihanpaket', component: () => import('pages/PilihanPaket.vue') },
      { path: '/sejarah', component: () => import('pages/SejarahLP.vue') },
      { path: '/silsilah', component: () => import('pages/sejarahSilsilah.vue') },
      { path: '/SignIn', component: () => import('pages/SignIn.vue') },
      { path: '/SignUp', component: () => import('pages/SignUp.vue') },
      { path: '/agungdalem', component: () => import('pages/AgungDalem.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
