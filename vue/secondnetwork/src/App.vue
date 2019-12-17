<template>
  <div id="app">
    <img src="./assets/logo.png">
    <HelloWorld/>
    <Music/>
    <Parent/>
    <Slotdemo>
      <!--<div class="">-->
      <!--hello 插槽-->
      <!--</div>-->
      <!--<template slot="v1">-->
      <!--<div class="v1">-->
      <!--v1插槽-->
      <!--</div>-->
      <!--</template>-->

      <!--<template slot="v2">-->
      <!--<div class="v2">-->
      <!--v2插槽-->
      <!--</div>-->
      <!--</template>-->

      <template slot-scope="slotProps">
        content
        <p></p>
        <h2>{{slotProps.ct}}</h2>
      </template>

    </Slotdemo>
  </div>
</template>

<script>
  import HelloWorld from './components/HelloWorld';
  // import Child from './components/Child';
  import Parent from './components/Parent';
  import Music from './components/Music';
  import Slotdemo from './components/Slotdemo'


  export default {
    name: 'App',
    components: {
      HelloWorld,
      Music,
      Parent,
      Slotdemo
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
</style>
