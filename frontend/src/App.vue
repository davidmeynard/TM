<template>
  <div>
    <RouterView/>
  </div>
</template>

<script >
import { RouterView } from 'vue-router'
export default {
  name: 'App',
  components: {
    RouterView
  },
  beforeMount(){
    this.$store.commit("checkUser")
    if(!this.$store.state.user) this.$router.push('/login')
  }
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
