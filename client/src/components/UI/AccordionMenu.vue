<template>
<ul class="wrapper">
    <li v-for="(item, index) in list" :key="'item'+index" >
        <div class="title">
            {{item.title}}
        </div>
    </li>
</ul>
</template>
<script>
export default {
  name: 'AccordionMenu',
  data () {
    return {
      list: [
        {
          title: 'Department',
          open: false
        },
        {
          title: 'Price',
          open: false
        },
        {
          title: 'Type',
          open: false
        }

      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrapper{
    list-style: none;
    background-color:#ededed;
    color:#0C509F;
    box-shadow: 0 2px rgba(0,0,0,0.15);
    border-radius: 4px;
    overflow: hidden;
}
li{
    position: relative;
    color:black;
    border-top:1px solid silver;
    cursor: pointer;
}
li .title{
    padding: 10px 0;
    text-indent: 20px;
}
li:hover{
  color:#4f7351;
  background-color:#DFEEE0;
}
</style>
