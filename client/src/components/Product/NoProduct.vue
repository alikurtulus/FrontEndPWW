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
</style>
