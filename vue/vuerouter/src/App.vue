<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!--<HelloWorld/>-->
    <router-view/>

    <ul>
      <router-link tag="li" to="/hello">Hello</router-link>
      <!--<router-link tag="li" to="/learn/vue">learnRouter</router-link>-->
      <router-link tag="li" :to="{name:'LearnRouter',params:{ id : id }}">learnRouter</router-link>
    </ul>

    <button @click="gotohello" type="button" name="button">去hello</button>
  </div>
</template>

<script>
  // import HelloWorld from './components/HelloWorld'

  export default {
    name: 'App',
    components: {
      // HelloWorld
    },
    methods: {
      gotohello() {
        // this.$router.push("/hello")
        // this.$router.push({path:"/hello"})
        this.$router.replace({path: "/hello"})
      }
    },
    data() {
      return {
        id: 1234
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  ul li {
    list-style: none;
    display: inline-block;
    margin: 0 20px;
    text-decoration: underline;

  }
</style>
