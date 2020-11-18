import Vue from 'vue'
import NoProduct from '@/components/Product/NoProduct.vue'

describe('Spinner.vue', () => {
  it('should display No results found', () => {
    const Constructor = Vue.extend(NoProduct)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.product-notfound-content').textContent)
      .to.equal('No results found')
  })
})
