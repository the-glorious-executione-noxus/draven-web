<template>
  <div class="parent">
    <h1>{{ msg }}</h1>
    父组件
    money: {{ money }}
    <Child
      @money="getMoney"



      title="这是一个小目标"
      :age = age

    />


  </div>
</template>


<script>
  // 注意引入组件的位置
  import Child from "./child"

  export default {
    name: 'parent',
    data() {
      return {
        money: "",
        age: 10,
        msg: 'Welcome to Your Vue.js App'
      }
    },
    components: {
      Child
    },
    methods: {
      getMoney(data) {
          this.money = data;
      }
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
