<template>
  <div class="hello">
    <h1 class="md-title">{{msg}}</h1>
    <div class="md-layout md-alignment-top-center">
      <md-button class="md-raised md-accent">
        <router-link to="/signup">Criar Usuario</router-link>
      </md-button>
      <md-button class="md-raised md-primary" id="md-auth">
        <router-link to="/auth">Login</router-link>
      </md-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">



#md-auth {
  color: #fff;
  background-color: blue;
}

#md-signup {
  background-color: md-get-palette(blue, A200);
  color: #fff;
}
</style>
