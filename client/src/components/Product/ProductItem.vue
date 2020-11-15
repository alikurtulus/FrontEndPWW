<template>
<div class="product-item-container">
    <div class="product-img-container">
        <img src="https://images.dedocloud.com/images/genel/image-not-found.png" alt="img" />
    </div>
    <div class="product-item-body">
        <h4 class="product-title">{{title}}</h4>
        <p class="product-price">{{price}}</p>
    </div>
</div>
</template>

<script>
export default {
  name: 'ProductItem',
  props: {
    id: String,
    title: String,
    description: String,
    price: Number,
    type: String,
    department: String,
    weight: String
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.product-item-container{
    display: flex;
    flex-direction: column;
    border:1px solid black;
    border-radius: 3px;
    width:21rem;
    height: 40vh;
    margin:10px;
    cursor: pointer;
}
.product-img-container img{
    width:100%;
}
.product-item-body{
    height: 10vh;
}
.product-title{
    padding:3px 10px;
}
.product-title:hover{
    text-decoration: underline;
}
.product-price{
    padding:5px 10px;
}
</style>
