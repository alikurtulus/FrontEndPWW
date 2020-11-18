import Vue from 'vue'
import ProductDetails from '@/components/Product/ProductDetails'

describe('ProductDetails.vue', () => {
  it('should be instantiated', () => {
    const container = document.createElement('div')
    const ProductDetailsComponent = Vue.extend(ProductDetails)
    const vm = new ProductDetailsComponent()
    vm.$mount(container)
    expect(vm.$el.querySelector('button').textContent).to.equal('Add To Card')
  })
})
