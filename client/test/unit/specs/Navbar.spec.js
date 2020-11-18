import Vue from 'vue'
import Navbar from '@/components/UI/Navbar'

describe('Navbar.vue', () => {
  let vm = null
  beforeEach(() => {
    const container = document.createElement('div')
    const NavbarComponent = Vue.extend(Navbar)
    vm = new NavbarComponent()
    vm.$mount(container)
  })

  it('should be instantiated', () => {
    expect(vm.searchKeyWord).to.equal('')
    expect(vm.$el.querySelector('span').textContent).to.equal('Store')
    expect(vm.$el.querySelector('nav').firstChild.tagName).to.equal('UL')
    expect(vm.$el.querySelector('ul').firstChild.tagName).to.equal('LI')
    expect(vm.$el.querySelector('form').firstChild.tagName).to.equal('INPUT')
    expect(vm.$el.querySelector('form').lastChild.tagName).to.equal('INPUT')
  })
  it('should get input', () => {
    const input = vm.$el.querySelector('.product-user-input')
    input.value = 'Hello'
    input.dispatchEvent(new Event('input'))
    expect(vm.searchKeyWord).to.equal('Hello')
  })
})
