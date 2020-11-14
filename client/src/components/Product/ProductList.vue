<template>
  <div class="products-container">
    <div class="products-body">
         <div class="products-search-bar-container">
            <form>
                <div class="form-group">
                    <input type="text" value="" class="form-control" placeholder="Search ... "/>
                </div>
                <div class="form-group">
                    <div class="departments-container">
                        <h3>Departments</h3>
                        <ul class="departmenst-list-container">
                            <a class="department-link">
                                <li>Books and Stationery</li>
                            </a>
                            <a class="department-link">
                                <li>Computing</li>
                            </a>
                            <a class="department-link">
                                <li>Cookwares</li>
                            </a>
                            <a class="department-link">
                                <li>DIY</li>
                            </a>
                            <a class="department-link">
                                <li>Entertainment</li>
                            </a>
                            <a class="department-link">
                                <li>Gifts</li>
                            </a>
                            <a class="department-link">
                                <li>Home</li>
                            </a>
                            <a class="department-link">
                                <li>Photography and Art</li>
                            </a>
                            <a class="department-link">
                                <li>Shoes</li>
                            </a>
                        </ul>
                    </div>
                </div>
                <div class="form-group">
                    <label  for="price">Price</label>
                    <select id="price" class="form-control">
                        <option value="ascending ">ascending </option>
                        <option value="descending ">descending </option>
                    </select>
                </div>
                <div class="form-group">
                    <label>Min</label>
                    <input type="text" class="form-control" placeholder="Search ... "/>
                </div>
                <div class="form-group">
                    <label>Max</label>
                    <input type="text" class="form-control" placeholder="Search ... "/>
                </div>
                <div class="form-group">
                    <label  for="price">Category</label>
                    <select id="price" class="form-control">
                        <option value="Book ">Book </option>
                        <option value="Casual"> Casual</option>
                        <option value="Ceramics">Ceramics </option>
                        <option value="Electrical"> Electrical</option>
                        <option value="Electronics"> Electronics</option>
                        <option value="Running"> Running</option>
                        <option value="Voucher"> Voucher</option>
                    </select>
                </div>
                <div class="form-group">
                    <button class="btn-search">Search</button>
                </div>
            </form>       
        </div>
         <div class="products-list">
            <h4>sdada</h4>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductList',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>
.products-container{
  background-color:white;
  display:grid;
  place-items: center;
  height: 100vh;
}
.products-header{
    text-align:center;
}
.products-body{
  display:flex;
  margin-top: -50px;
  background-color:#ededed;
  width: 90vw;
  height: 90vh;
  box-shadow: -1px 4px 20px -6px rgba(0,0,0,0.2);
  
}
.products-search-bar-container{
    display: flex;
    flex-direction: column;
    flex:0.25;
    border:1px solid black;
    border-radius: 5px;
    background-color: #f2f2f2;
    padding: 20px;
}
.products-list{
    display: flex;
    flex:0.75;
}
ul.departmenst-list-container{
    list-style-type: none;
    font-size: 1.2rem;
    padding:0;
    line-height:1.6rem;
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
