<template>
<div class="product-notfound-container">
    <p class="product-notfound-content">Product not found</p>
</div>
</template>
<script>
export default {
  name: 'NoProduct',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.product-notfound-container{
    width:95%;
}
.product-notfound-content{
    border:1px solid #f8d7da;
    border-radius: 3px;
    color:#721C24;
    font-size: 1.3rem;
    padding:10px;
    background-color:#f8d7da;
}
@media only screen and (max-width:425px) {
  .product-notfound-container{
    position: relative;
    top: 10px;
    flex:1;
    width: 90vw;
}
}
@media only screen and (min-width: 768px) and (max-width:1024px) {
    
}
@media only screen and (min-width: 1024px) and (max-width:1440px) {
    
}
</style>
