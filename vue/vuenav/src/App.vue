<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
  export default {
    name: 'App'
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

    padding: 0;
    border: 0;
    font-size: 100%;
    /*vertical-align: baseline;*/
    /*background: transparent;*/
    text-decoration: none;
    color: #000;
  }

  body {
    line-height: 1;
    background: #f1f1f1;
  }
</style>
