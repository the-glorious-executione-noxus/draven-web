<template>
  <div class="nav">
    <ul>
      <router-link to="/home">
        <i class="iconfont icon-address"></i>
        <span class="title">home</span>
      </router-link>
      <router-link to="/order">
        <i class="iconfont icon-bluetoothoff"></i>
        <span class="title">order</span>
      </router-link>
      <router-link to="/car">
        <i class="iconfont icon-camera"></i>
        <span class="title">car</span>
      </router-link>
    </ul>
  </div>
</template>

<script>

  import "../../assets/iconfont.css"

  export default {
    name: 'myNav',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .nav {
    position: fixed;
    left: 0;
    right: 1px;
    bottom: 0;
    height: 50px;
    padding: 30px;
    background: #ffff;
  }

  .nav ul {
    height: 40px;
    width: 100%;
    display: flex;
  }

  .nav ul a {
    text-align: center;
    flex: 1;
  }

  .title {
    display: block;
    font-size: 5px;
  }

  .nav ul a i {
    font-size: 30px;
  }

  .active{
    color: #39ac69;
  }
</style>
