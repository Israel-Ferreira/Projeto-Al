<template>
  <div class="login-form">
    <form class="md-layout" @submit.prevent="submitForm">
        <div class="md-title">{{componentTitle}}</div>
        <md-field>
            <label>Usuário</label>
            <md-input v-model="username"></md-input>
        </md-field>

        <md-field>
            <label>Email</label>
            <md-input v-model="email" type="email"></md-input>
        </md-field>

        <md-field>
            <label>Senha</label>
            <md-input type="password" v-model="password"></md-input>
            <span class="md-helper-text">Helper text</span>
        </md-field>
        <md-button type="submit" class="md-raised md-primary">Create user</md-button>
    </form>
  </div>
</template>





<script>
import axios from "axios";
import VueRouter from 'vue-router'


export default {
  props: ["isLoginScreen"],
  name: "login-form",
  data: () => ({
    username: "",
    email: "",
    password: "",
  }),
  methods: {
    submitForm() {
      let { username, email, password } = this;

      const api = "http://localhost:6590";

      if(username == "" || email == "" || password == ""){
        this.$router.go();
      }else{
        const routeApi =  this.isLoginScreen ? `${api}/authenticate` : `${api}/create-user`;
        axios.post(routeApi,{email,username,password})
          .then(resp => console.log(resp.data))
          .catch(err => console.log(`Deu erro: ${err}`))
      }
    }
  },
  computed: {
    componentTitle() {
      return this.isLoginScreen ? "Login" : "Cadastrar";
    }
  }
};
</script>
