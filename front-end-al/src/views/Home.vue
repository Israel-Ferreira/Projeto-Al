<template>
  <div class="home">
     <img alt="Vue logo" src="../assets/logo.png">
    <div class="md-layout md-alignment-center-center">
      <HelloWorld msg="Welcome to Your Vue.js App"/>
    </div>
  </div>
</template>
<style lang="scss">
img {
  margin: 0px auto;
  display: block;
}
</style>


<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
