import Vue from 'vue'
import Router from 'vue-router'
import ProductList from '@/components/Product/ProductList'
import ProductDetails from '@/components/Product/ProductDetails'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'ProductList',
      component: ProductList
    },
    {
      path: '/products/:id',
      name: 'product',
      component: ProductDetails
    }
  ]
})
