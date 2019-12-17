<template>
  <div class="Car">
    Car
    <Nav/>
  </div>
</template>

<script>
  import Nav from "../../components/Nav"

  export default {
    name: 'Car',
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
