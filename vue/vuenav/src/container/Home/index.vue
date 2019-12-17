<template>
  <div class="Home">
    <ul>
      <router-link tag="li" to="/home/hot">推荐</router-link>
      <router-link tag="li" to="/home/re">热门</router-link>
    </ul>
    <keep-alive>
      <router-view/>
    </keep-alive>
    <Nav/>
  </div>
</template>

<script>

  import Nav from "../../components/Nav"

  export default {
    name: 'Home',
    components: {
      Nav
    },
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  ul {
    width: 100%;
    text-align: center;
    /*margin-top: 20px;*/
  }

  ul li {
    display: inline-block;
    /*font-size: 20px;*/
    /*margin: 0 20px;*/
  }

</style>
