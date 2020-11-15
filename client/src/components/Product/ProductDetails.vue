<template>
<div class="product-details-container">
    <div class="product-img-container">
        <img src="https://images.dedocloud.com/images/genel/image-not-found.png" alt="img" />
    </div>
    <div class="product-details-body">
        <h2 class="product-title">Reebok 2w2</h2>
        <p class="product-price">£14.99</p>
        <h4>Description</h4>
        <p class="product-description">sdsadsadsdsadsadsadsadsa</p>
        <div class="product-details-content">
            <div class="product-detail-item">
                <h5>Department</h5>
                <p class="product-weight">Shoes</p>
            </div>
            <div class="product-detail-item">
                <h5>Type</h5>
                <p class="product-weight">Running</p>
            </div>
            <div class="product-detail-item">
                <h5>Weight</h5>
                <p class="product-weight">1.2kg</p>
            </div>
        </div>
        
    </div>
</div>
</template>

<script>
export default {
  name: 'ProductDetails',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.product-details-container{
    display: flex;
    flex-direction: row;
    border-radius: 3px;
    height: 80vh;
    margin:10px;
    
}
.product-img-container img{
    width:100%;
    border:1px solid black;
    flex:0.45;
}
.product-details-body{
   display: flex;
   flex-direction: column;
   flex:0.55;
}
.product-title{
    padding:3px 10px;
}
.product-price{
    padding:5px 10px;
}
.product-details-content{
    display: flex;
    justify-content:space-between;
    flex-direction:row;
    font-size: 1.4rem;
}
</style>
