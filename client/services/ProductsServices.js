import Api from './Api'

export default {
  index () {
    return Api().get('products')
  },
  show () {
    return Api().get('products/:id')
  }
}
