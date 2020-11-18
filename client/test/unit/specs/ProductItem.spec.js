import Vue from 'vue'
import ProductItem from '@/components/Product/ProductItem'

describe('ProductItem.vue', () => {
  it('should display product record', () => {
    const container = document.createElement('div')
    const ProductItemComponent = Vue.extend(ProductItem)
    const vm = new ProductItemComponent({
      propsData: {
        product: {
          name: 'Kitchen Scales',
          price: {value: '79.99', currency: 'GBP'}
        }
      }
    })
    vm.$mount(container)
    expect(vm.product.name).to.equal('Kitchen Scales')
    expect(vm.product.price.value).to.equal('79.99')
    expect(vm.$el.querySelector('img').src).to.equal('https://images.dedocloud.com/images/genel/image-not-found.png')
  })
})
