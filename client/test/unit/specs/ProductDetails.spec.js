import Vue from 'vue'
import ProductDetails from '@/components/Product/ProductDetails'

describe('ProductDetails.vue', () => {
  it('should be instantiated', () => {
    const Constructor = Vue.extend(ProductDetails)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('button').textContent).to.equal('Add To Card')
  })
})
