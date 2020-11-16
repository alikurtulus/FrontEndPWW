<template>
  <div class="products-container">
    <div class="products-body">
         <div class="products-search-bar-container">
            <form v-on:submit.prevent="onSubmit" >
                <div class="form-group">
                    <input v-model.trim="searchKeyWord" type="text" value="" name="searchName" class="form-control" placeholder="Search product Name ... "/>
                </div>
                <div class="form-group">
                    <div class="departments-container">
                        <h3>Departments</h3>
                        <select v-model="department" class="departmenst-list-container">
                            <option value="" > All </option>
                            <option v-for="currentDepartment in departments" :key="currentDepartment"  >{{currentDepartment}} </option>
                        </select>
                    </div>
                </div>
                <div class="form-group">
                    <label  for="price">Price</label>
                    <select v-model="price" id="price" name="price" class="form-control">
                        <option value="">---</option>
                        <option> ascending </option>
                        <option > descending </option>
                    </select>
                </div>
                <div class="form-group">
                    <label  for="type">Type</label>
                    <select v-model="type" id="type" name="type" class="form-control" >
                        <option value="" >All </option>
                        <option v-for="currentType in types" :key="currentType" >{{currentType}} </option>
                    </select>
                </div>
                <div class="form-group">
                    <button v-on:click="handleSearch" class="btn-search">Search</button>
                </div>
            </form>
        </div>
        <div class="products-list">
            <template
                v-if="products.length > 0"
                @click="navigateTo({
                    name:'product',
                    params:{
                        id:product.id
                    }
                })"
            >   <div  v-for="product in products" class="product-item"  :key="product.id" >
                    <ProductItem
                    v-bind:id="product.id"
                    v-bind:product="product"
                />
                </div>
            </template>
            <template v-else>
                <NoProduct />
            </template >
        </div>
    </div>
</div>
</template>

<script>
import ProductItem from './ProductItem'
import ProductsServices from '../../../services/ProductsServices'
import axios from 'axios'
import NoProduct from './NoProduct'

export default {
  name: 'ProductList',
  components: { ProductItem, NoProduct },
  data () {
    return {
      products: null,
      departments: null,
      types: null,
      searchKeyWord: '',
      department: '',
      type: '',
      price: ''
    }
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    },
    handleTypeChange (event) {
      this.type = event.target.value
    },
    handleSearch (event) {
      event.preventDefault()
      axios.get('http://localhost:5000/api/search', {
        params: {
          type: this.type,
          searchKeyWord: this.searchKeyWord,
          department: this.department,
          price: this.price
        }
      })
        .then(response => {
          this.products = response.data
        })
        .catch(error => {
          console.error(error)
        })
    }
  },
  async mounted () {
    this.products = (await ProductsServices.index()).data.products
    this.departments = (await ProductsServices.getDepartments()).data
    this.types = (await ProductsServices.getAllTypes()).data
  }
}
</script>

<style scoped>
.products-container{
  background-color:white;
  display:grid;
  place-items: center;
  margin-top:30px;
}
.products-header{
    text-align:center;
}
.products-body{
  display:flex;
  width: 90vw;
}
.products-search-bar-container{
    display: flex;
    flex-direction: column;
    flex:0.25;
    border:1px solid black;
    border-radius: 5px;
    background-color:#ededed;
    padding: 20px;
    box-shadow: -1px 4px 20px -6px rgba(0,0,0,0.2);
    height: 90vh;
}
.products-list{
    display: flex;
    flex-wrap: wrap;
    flex:0.75;
    border:1px solid black;
    background-color:#ededed;
    padding: 20px;
    height: 100%;
    box-shadow: -1px 4px 20px -6px rgba(0,0,0,0.2);
}
.products-item{
    display: flex;
    flex:0.25;
    margin:auto;
}
ul.departmenst-list-container{
    list-style-type: none;
    font-size: 1.2rem;
    padding:0;
    line-height:1.6rem;
    color:cornflowerblue;
}
.departmenst-list-container li:hover{
    cursor: pointer;
    text-decoration: underline;
}
.form-group{
    display: flex;
    flex-direction: column;
    width:70%;
    margin: 10px auto;
}
input[type=text], select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
label{
    font-size:1.2rem;
    font-weight:800;
}
.btn-search{
    height: 40px;
    background-color:mediumseagreen;
    color:white;
    font-size: 1.2rem;
}
</style>
