import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BarangView from '../views/BarangView.vue'
import DetailBarang from '../views/DetailBarang.vue'
import KeranjangView from '../views/KeranjangView.vue'
import PesananSukses from '../views/PesananSukses.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/barang',
    name: 'barang',
    component: BarangView
  },
  {
    path: '/detail-barang',
    name: 'detail-barang',
    component: DetailBarang
  },
  {
    path: '/keranjang',
    name: 'keranjang',
    component: KeranjangView
  },
  {
    path: '/pesanan-sukses',
    name: 'pesanan-sukses',
    component: PesananSukses
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
