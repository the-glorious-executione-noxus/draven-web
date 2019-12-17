<template>
  <div class="Order">
    Order
    <Nav/>
  </div>
</template>

<script>

  import Nav from "../../components/Nav"

  export default {
    name: 'Order',
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
<style>

</style>
