<template>
<div class="product-details-container">
    <div class="product-left-container">
        <h2 class="product-title" >{{ product.name}}</h2>
        <img src="https://images.dedocloud.com/images/genel/image-not-found.png" alt="img" />
    </div>
    <div class="product-details-body" v-if="product !== null" >
        <p class="product-price">£{{ product.price.value }}</p>
        <hr class="style-six"/>
        <h3>Description</h3>
        <p class="product-description">{{product.description}}</p>
        <hr class="style-six"/>
        <div class="product-details-content">
            <div class="product-detail-item">
                <h3>Department</h3>
                <p class="product-department">{{product.department}}</p>
            </div>
            <div class="product-detail-item">
                <h3>Type</h3>
                <p class="product-type">{{product.type}}</p>
            </div>
            <div class="product-detail-item">
                <h3>Weight</h3>
                <p class="product-weight">{{product.weight}}</p>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import axios from 'axios'

export default {
  name: 'ProductDetails',
  data () {
    return {
      id: this.$route.params.id,
      product: null
    }
  },
  async mounted () {
    axios.get(`${process.env.ROOT_API}/products/${this.id}`)
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
    border-radius: 3px;
    height: 80vh;
    margin:3rem auto;
    width: 50%;
    font-family: 'Barlow', sans-serif;
    border: 1px solid black;
    padding:5px;
    border-radius: 3px;
    background-color:#ededed;
}
.product-left-container{
    position: relative;
    left:20px;
    top:20px;
}
.product-left-container img{
    width:98%;
    border:1px solid black;
    flex:0.45;
    height: 58vh;
}
.product-details-body{
    display: flex;
    flex-direction: column;
    flex:0.55;
    padding-left:50px;
    position: relative;
    top:70px;
}
.product-title{
    padding:3px 10px;
    font-size: 1.8em;
    color:#0C509F;
    font-weight:800;
}
.product-price{
    padding:2px 1px;
    font-size: 1.6rem;
    font-weight: 800;
    position: relative;
    top:15px;
}
h3{
    font-size: 1.5rem;
    margin: 0;
    color:#0C509F;
}
h5{
    color:#0C509F;
}
.product-description{
    font-size: 1.3rem;
}
.product-details-content{
    display: flex;
    justify-content:space-between;
    flex-direction:row;
    font-size: 1.4rem;

}
.product-detail-item{
    margin: auto 15px;
}
hr.style-six {
    border: 0;
    height: 0;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
}

</style>
