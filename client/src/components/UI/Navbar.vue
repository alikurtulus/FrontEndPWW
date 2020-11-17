<template>
<div class='content-wrapper'>
  <div class='navmenu'>
      <nav id='navbar' >
        <ul class='navbar'>
          <li><a href='/'><span >Store</span></a></li>
        </ul>
      </nav>
      <form   id='search-form' method='get'>
        <input v-model.trim="searchKeyWord" placeholder='Search product name...' size='15' type='text'/>
        <input @click="search" id='button-submit' type='submit' value='Search'/>
      </form>
  </div>
  <div style='clear: both;'/>
</div>
</template>
<script>
import { EventBus } from '../../state/event-bus'
export default {
  name: 'Navbar',
  data () {
    return {
      searchKeyWord: ''
    }
  },
  methods: {
    search (newSearchKeyWord) {
      EventBus.$emit('searched-word', this.searchKeyWord)
    }
  }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,400;0,500;1,300&display=swap');
.navmenu {
    font-family: 'Barlow', sans-serif;
    width: 100%;
    background: #303030;
    display: flex;
    justify-content:space-between;
}
nav ul {
    list-style-type: none;
    padding-left: 2px;
    font-size: 0;
    background-color: #303030
}
nav li {
    display: block;
    font-size: 16px;
    color: white;
}
ul.navbar>li>a {
    color: #fff;
}
nav a {
    display: block;
    padding:7px;
    text-decoration: none;
    color: inherit;
    font-size:1.2rem;
}
#search-form {
    display: inline-block;
    padding-top: 4px;
    padding-right: 5px;
}
#search-form input {
    width: 200px;
    float: left;
    border-radius: 2px 0 0 2px;
    font-size: 13px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    border: 0;
    outline: 0;
    font-size: 100%;
    font: inherit
}
#button-submit {
    width: auto!important;
    float: right;
    border-radius: 0 2px 2px 0;
    background-color:mediumseagreen;
    color:white;
    font-size: 18px;
    font-weight: 600;
    text-shadow: 0 1px 0 rgba(0, 0, 0, 0.3);
}
@media only screen and (max-width:720px) {
    nav ul {
      width: 100%!important
    }
    nav a {
      padding: 5px 10px
    }
      .navmenu {
          padding: 5px;
      }
      #navbar{
          height: 24px;
          line-height: 24px;
      }
    #search-form input {
      width: 150px;
      padding: 5px;
      margin: 0;
    }
}
@media only screen and (min-width:720px) {
    #menu {
      display: none
    }
      #navbar{
      height: 50px;
      line-height: 50px;
  }
  nav {
    display: block!important
  }
  nav li {
    display: inline-block
  }
  #search-form input {
    height: 50px;
    padding: 10px;
    margin: 5px 0;
  }
}
</style>
