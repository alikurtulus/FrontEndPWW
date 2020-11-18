<template>
<div>
    <div class="products-container">
      <div class="products-body">
          <div class="products-search-bar-container">
              <form >
                  <h2>Filter by</h2>
                  <hr />
                  <div class="form-group">
                      <div class="departments-container">
                          <h3>Departments</h3>
                          <select @change="handleSearch" v-model="department" class="departmenst-list-container">
                              <option value="" > All </option>
                              <option v-for="currentDepartment in departments" :key="currentDepartment" >{{currentDepartment}} </option>
                          </select>
                      </div>
                  </div>
                  <hr/>
                  <div class="form-group">
                      <label  for="price">Price</label>
                      <select  @change="handleSearch" v-model="price" id="price" name="price" class="form-control">
                          <option value="">- - -</option>
                          <option> ascending </option>
                          <option > descending </option>
                      </select>
                  </div>
                  <hr/>
                  <div class="form-group">
                      <label  for="type">Type</label>
                      <select @change="handleSearch" v-model="type" id="type" name="type" class="form-control" >
                          <option value="" >All </option>
                          <option v-for="currentType in types" :key="currentType" v:bind:value={}>{{currentType}} </option>
                      </select>
                  </div>
              </form>
          </div>
          <div class="products-list">
              <template v-if="products === null">
                <Spinner />
              </template>
              <template v-else-if="products.length > 0" >
                  <div
                      v-for="product in products"
                      class="product-item"
                      :key="product.id"
                      @click="navigateTo({
                      name:'product',
                      params:{
                          id:product.id
                      }})"
                  >
                    <ProductItem
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
</div>
</template>
<script>
import ProductItem from './ProductItem'
import axios from 'axios'
import NoProduct from './NoProduct'
import Spinner from '../UI/Spinner'
import Navbar from '../UI/Navbar'
import { EventBus } from '../../state/event-bus'

export default {
  name: 'ProductList',
  components: { ProductItem, NoProduct, Spinner, Navbar },
  data () {
    return {
      products: null,
      departments: null,
      types: null,
      searchKeyWord: '',
      department: '',
      type: '',
      price: '',
      id: ''
    }
  },
  created () {
    EventBus.$on('searched-word', searchKeyWord => {
      this.searchKeyWord = searchKeyWord
      this.handleSearch(event)
    })
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
      axios.get(`${process.env.ROOT_API}/search`, {
        params: {
          type: this.type,
          searchKeyWord: this.searchKeyWord,
          department: this.department,
          price: this.price
        }
      })
        .then(response => {
          this.products = response.data.products
        })
        .catch(error => {
          console.error(error)
        })
    }
  },
  async mounted () {
    if (this.$route.params.searchKeyWord !== undefined) {
      await axios.get(`${process.env.ROOT_API}/search`, {
        params: {
          type: this.type,
          searchKeyWord: this.$route.params.searchKeyWord,
          department: this.department,
          price: this.price
        }
      })
        .then(response => {
          this.products = response.data.products
        })
        .catch(error => {
          console.error(error)
        })
    } else {
      await axios.get(`${process.env.ROOT_API}/products`)
        .then(res => {
          console.log(res)
          this.products = res.data.products
        })
        .catch(error => {
          console.error(error)
        })
    }
    await axios.get(`${process.env.ROOT_API}/departments`)
      .then(res => {
        this.departments = res.data
      })
      .catch(error => {
        console.error(error)
      })
    await axios.get(`${process.env.ROOT_API}/types`)
      .then(res => {
        this.types = res.data
      })
      .catch(error => {
        console.error(error)
      })
  }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,400;0,500;1,300&display=swap');
.products-container{
  background-color:white;
  display:grid;
  place-items: center;
  margin-top:40px;
  font-family: 'Barlow', sans-serif;
}
.products-header{
    text-align:center;
}
h2{
  color:black;
}
.products-body{
  display:flex;
  flex-wrap: wrap;
  width: 90vw;
}
.products-search-bar-container{
    display: flex;
    flex-direction: column;
    flex:0.25;
    border:1px solid black;
    border-radius: 5px;
    background-color:#ededed;
    padding: 30px;
    height: 55vh;
    margin-top:10px;
    color:#0C509F;
}
.products-list{
    display: flex;
    flex-wrap: wrap;
    flex:0.75;
    padding-left: 20px;
    height: 100%;
    margin-left:10px;
}
.products-item{
    display: flex;
    flex:0.25;
    margin:auto;
}
.departmenst-list-container li:hover{
    cursor: pointer;
    text-decoration: underline;
}
.form-group{
    display: flex;
    flex-direction: column;
    width:70%;
    margin: 15px auto;
}
input[type=text], select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
  font-family: 'Barlow', sans-serif;
  font-size: 1.1rem;
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
hr.style-six {
    border: 0;
    height: 0;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
}

@media only screen and (max-width:425px) {
  .products-search-bar-container{
    flex:1;
    padding: 20px;
    height: auto;
    margin-top:0px;
  }
  .products-list{
    flex: 1;
    margin: 5px auto;
    padding-left:0px;
  }
  .form-group{
      width:90%;
      margin: 1px auto;
  }
  .products-item{
    width:100%;
    flex: 1;
  }
  h2{
    font-size:1.2rem;
  }
}
@media only screen and (min-width: 768px) and (max-width:1024px) {
    .products-search-bar-container{
      padding: 20px;
      height: 56vh;
      margin-top:0px;
    }
    .form-group{
        width:90%;
        margin: 1px auto;
    }
    h2{
      font-size:1.3rem;
    }
}
@media only screen and (min-width: 1024px) and (max-width:1440px) {
    .products-search-bar-container{
      padding: 20px;
      height: 56vh;
      margin-top:0px;
    }
    .form-group{
        width:90%;
        margin: 1px auto;
    }
    h2{
      font-size:1.4rem;
    }
}
</style>
