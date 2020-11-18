import Vue from 'vue'
import ProductList from '@/components/Product/ProductList'

describe('ProductList.vue', () => {
  let vm = null
  beforeEach(() => {
    const container = document.createElement('div')
    const ProductListComponent = Vue.extend(ProductList)
    vm = new ProductListComponent()
    vm.$mount(container)
  })
  it('should be instantiated', () => {
    expect(vm.$el.querySelector('form').firstChild.tagName).to.equal('H2')
    expect(vm.$el.querySelector('select').firstChild.tagName).to.equal('OPTION')
    expect(vm.$el.querySelector('h2').textContent).to.equal('Filter by')
    expect(vm.$el.querySelector('select').firstChild.tagName).to.equal('OPTION')
    expect(vm.searchKeyWord).to.equal('')
    expect(vm.department).to.equal('')
    expect(vm.type).to.equal('')
    expect(vm.price).to.equal('')
    expect(vm.id).to.equal('')
  })
})
