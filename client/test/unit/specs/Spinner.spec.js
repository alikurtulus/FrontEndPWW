import Vue from 'vue'
import Spinner from '@/components/UI/Spinner.vue'

describe('Spinner.vue', () => {
  it('should spin the ring and show Loading... text', () => {
    const Constructor = Vue.extend(Spinner)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.loading-text').textContent)
      .to.equal('Loading...')
  })
})
