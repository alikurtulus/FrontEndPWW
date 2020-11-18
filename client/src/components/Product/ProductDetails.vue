<template>
<div class="product-details-container">
    <template v-if="product === null">
        <Spinner />
    </template>
    <template v-else >
        <div class="product-left-container">
            <img src="https://images.dedocloud.com/images/genel/image-not-found.png" alt="img" />
        </div>
        <div class="product-details-body" >
            <p class="product-deparment-type">{{product.department}} / {{product.type}}</p>
            <h2 class="product-title" >{{ product.name}}</h2>
            <div class="rating">
               <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
            </div>
            <p class="product-price">£{{ product.price.value }}</p>
            <div>
                <h3>Weight</h3>
                <p class="product-weight">{{product.weight}}</p>
            </div>
            <h3>Product Details</h3>
            <p class="product-description">{{product.description}}</p>
            <button class="btn-add">Add To Card</button>
        </div>
    </template>
</div>
</template>
<script>
import axios from 'axios'
import Spinner from '../UI/Spinner'
export default {
  name: 'ProductDetails',
  components: { Spinner },
  data () {
    return {
      id: this.$route.params.id,
      product: null
    }
  },
  async mounted () {
    await axios.get(`${process.env.ROOT_API}/products/${this.id}`)
      .then(response => {
        this.product = response.data
      })
      .catch(error => {
        console.error(error)
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,400;0,500;1,300&display=swap');
.product-details-container{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    border-radius: 15px;
    height: 85vh;
    margin:3rem auto;
    width: 50%;
    font-family: 'Barlow', sans-serif;
    border: 1px solid black;
    padding: 5px 20px;
    border-radius: 3px;
    background-color:#ededed;
}
.product-left-container{
    flex:0.50;
    position: relative;
    left:10px;
    top:35px;
}
.product-left-container img{
    width:100%;
    border:1px solid black;
    height: 60vh;
}
.product-details-body{
    display: flex;
    flex-direction: column;
    flex:0.50;
    padding-left:50px;
    position: relative;
    top:10px;
}
.product-deparment-type{
    position: relative;
    top:10px;
    font-size: 1.3rem;
}
.product-title{
    padding:3px 0px;
    font-size: 2.8em;
    color:black;
    font-weight:800;
    text-align: left;
}
.product-price{
    padding:2px 1px;
    font-size: 1.6rem;
    font-weight: 800;
}
.product-weight{
    font-size: 1.2rem;
}
h3{
    font-size: 1.3rem;
    margin: 0;
    color:#0C509F;
}
h5{
    color:#0C509F;
}
.product-description{
    font-size: 1.2rem;
}
.product-details-content{
    display: flex;
    justify-content:space-between;
    flex-direction:row;
    font-size: 1.2rem;
    padding:5px;
}
.rating {
  unicode-bidi: bidi-override;
  direction: rtl;
  font-size: 2.3rem;
  color:orange;
  text-align: left;
}
.rating > span {
  display: inline-block;
  position: relative;
  width: 1.1em;
  color:orange;
}
.rating > span:hover:before,
.rating > span:hover ~ span:before {
   content: "\2605";
   position: absolute;
   color:orange;
}
.btn-add{
    height: 42px;
    padding:4px;
    font-size: 1.3rem;
    background-color:mediumseagreen;
    color:white;
    outline:none;
    border:none;
    border-radius: 3px;
}
@media only screen and (max-width:425px) {
    .product-details-container {
        display: flex;
        flex-direction: column;
        width: 80%;
        margin: 10px auto;
        height: auto;
    }
    .product-left-container {
        width: 100%;
        flex:1;
        position: relative;
        left:0;
        top:15px;
    }
    .product-details-body {
        display: flex;
        flex-direction: column;
        flex:1;
        position: relative;
        right: 20px;
        top:0px;
    }
    .product-deparment-type {
        position: relative;
        top:30px;
        font-size: 1.2rem;
    }
    .product-title {
        padding: 0px;
        font-size: 1.7rem;
        color:black;
        font-weight:800;
        text-align: left;
    }
    .rating {
        unicode-bidi: bidi-override;
        direction: rtl;
        font-size: 2rem;
        color:orange;
        text-align: left;
    }
    .product-price {
        padding:0px;
        font-size: 1.4rem;
        font-weight: 800;
    }
    .product-left-container img{
        width:100%;
        border:1px solid black;
        height: 40vh;
    }
    .btn-add {
        height: 42px;
        padding:4px;
        font-size: 1.3rem;
    }
}
@media only screen and (min-width: 768px) and (max-width:1024px) {
    .product-details-container {
        display: flex;
        flex-direction: row;
        width: 90%;
        margin: 20px auto;
        height: auto;
        padding:10px;
    }
    .product-left-container {
        width: 100%;
        flex:0.50;
        position: relative;
        left:0;
        top:15px;
    }
    .product-details-body {
        display: flex;
        flex-direction: column;
        flex:0.50;
        position: relative;
        right: 20px;
        top:0px;
    }
    .product-title {
        padding: 0px;
        font-size: 1.7rem;
        color:black;
        font-weight:800;
        text-align: left;
    }
}
@media only screen and (min-width: 1024px) and (max-width:1440px) {
    .product-details-container {
        display: flex;
        flex-direction: row;
        width: 90%;
        margin: 40px auto;
        height: auto;
        padding:10px;
    }
    .product-left-container {
        width: 100%;
        flex:0.50!important;
        position: relative;
        left:0;
        top:15px;
    }
    .product-details-body {
        display: flex;
        flex-direction: column;
        flex:0.50 !important;
        position: relative;
        right: 20px;
        top:0px;
    }
}
</style>
