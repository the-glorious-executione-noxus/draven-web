<template>
  <div class="Child">
    <h1>{{ msg }}</h1>
    子组件
    {{ title }}
    {{ age }}

    <p></p>
    getFoo: {{ getFoo }}

    <button @click="changeCtoP" type="button" name="button">子传递父</button>
  </div>
</template>

<script>
  export default {
    name: 'Child',
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
      changeCtoP() {
        this.$emit("money", "翻倍了")
      }
    },
    computed: {
      getFoo() {
        return this.$root.foo
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
