<template>
  <div class="Music">

    <h1>{{ msg }}</h1>
    music组件
    {{ title }}
    {{ age }}


    <p class="p1" ref="p1">原声P标签</p>
    <input ref="input"/>
    <button @click="getValue" type="button" name="button">get</button>
    <audio></audio>

  </div>
</template>

<script>
  export default {
    name: 'Music',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    // 单纯的传递
    // props: ["title","age"],
    // 指定类型传递
    props: {
      title: String,
      age: Number
    },
    methods: {
      getValue(){
        console.log(this.$refs.input.value);
      }
    },
    mounted() {
      // 获取dom原生操作
      console.log(this.$refs.p1);
      this.$refs.p1.innerHTML = '给我变且'
      this.$refs.input.value = "aha11"
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
