import Api from './Api'

export default {
  index () {
    return Api().get('products')
  },
  getDepartments () {
    return Api().get('departments')
  },
  getAllTypes () {
    return Api().get('types')
  }
}
