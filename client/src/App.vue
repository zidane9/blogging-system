<template>
  <div id="app">
    <div class="">
      <center><h1>Blogging System</h1></center>
    </div>
    <div>
      <router-link  to="/signin">Sign In</router-link> |
      <router-link  to="/signup">Sign Up</router-link>

    </div>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {

    }
  }
}
</script>

<style>

</style>
