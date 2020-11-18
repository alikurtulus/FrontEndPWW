<template>
<div class="product-item-container">
    <div class="product-img-container">
        <img src="https://images.dedocloud.com/images/genel/image-not-found.png" alt="img" />
    </div>
    <div class="product-item-body">
        <h4 class="product-title">{{product.name}}</h4>
        <p class="product-price">£{{product.price.value}}</p>
    </div>
</div>
</template>
<script>
export default {
  name: 'ProductItem',
  props: {
    product: Object
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,400;0,500;1,300&display=swap');
.product-item-container{
    display: flex;
    flex-direction: column;
    border:1px solid black;
    border-radius: 3px;
    width:21rem;
    height: 40vh;
    margin:10px;
    cursor: pointer;
    background-color:#ededed;
    font-family: 'Barlow', sans-serif;
}
.product-img-container img{
    width:100%;
    height: 25vh;
}
.product-item-body{
    height: 20vh;
}
.product-title{
    font-size: 1.2rem;
    color:black;
    text-align:center;
    font-weight: 500;
    line-height:1.3rem;
}
.product-price{
    font-size: 1.2rem;
    text-align:center;
    font-weight:800;
}
.product-title:hover{
    text-decoration: underline;
}
.product-price{
    padding:5px 10px;
    color:#0C509F;
}
@media only screen and (max-width:320px) {
    div .product-item-container{
        width:18rem !important;
        margin:5px auto;
        height: 45vh;
    }
     .product-img-container img{
        height: 26vh !important;
    }
}
@media only screen and (min-width: 320px) and (max-width:375px) {
    .product-item-container{
        width:21rem !important;
        margin:5px auto;
        height: 45vh;
    }
}
@media only screen and (max-width:425px) {
    .product-item-container{
        width:24rem;
        margin:5px auto;
        height: 50vh;
    }
    .product-img-container img{
        height: 33vh;
    }
}
@media only screen and (min-width: 768px) and (max-width:1024px) {
    .product-item-container{
        width:18rem !important;
        margin:5px 2px;
        height: 45vh;
    }
}
@media only screen and (min-width: 1024px) and (max-width:1440px) {
    .product-item-container{
        width:18rem !important;
        margin:5px 2px;
        height: 45vh;
    }
}
</style>
