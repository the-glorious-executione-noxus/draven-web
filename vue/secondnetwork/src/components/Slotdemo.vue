<template>
  <div class="slotdemo">
    {{msg}}
    <p></p>
    插槽  slotdemo
    <p></p>
    子组件
    <!--<slot name="v1">-->
      <!--&lt;!&ndash;插槽内容&ndash;&gt;-->
    <!--</slot>-->

    <!--<slot name="v2">-->
      <!--&lt;!&ndash;插槽内容&ndash;&gt;-->
    <!--</slot>-->

    <slot ct="儿子的数据">
      <!--插槽内容-->
    </slot>


    <!--<slot name="content">-->
      <!--&lt;!&ndash;插槽内容&ndash;&gt;-->
    <!--</slot>-->

  </div>
</template>

<script>
  export default {
    name: 'Slotdemo',
    data() {
      return {
        msg: 'Welcome to Your Vue.js slotdemo'
      }
    },
    // 单纯的传递
    // props: ["title","age"],
    // 指定类型传递
    // props: {
    //   title: String,
    //   age: Number
    // },
    methods: {},
    computed: {}
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
