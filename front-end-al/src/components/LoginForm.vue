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
        <md-button type="submit" class="md-raised md-primary">Login</md-button>
        <md-button v-if="isLoginScreen" type="button" class="md-raised md-accent">
          <router-link to="/signup">
            Criar uma conta
          </router-link>
        </md-button>
    </form>
  </div>
</template>

<script>
import UserService from '../services/UserService'
import VueRouter from 'vue-router'

const userService = new UserService('http://localhost:6590');


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
      if(username == "" || email == "" || password == ""){
        this.$router.go();
      }else{
        const obj = {username: username.trim(),email, password}

        if(this.isLoginScreen){
          this.login(obj)
        }else{
          this.signUp(obj)
        }
      }
    },

    login(user){
      userService.loginUser(user)
        .then(resp => {
          localStorage.setItem('jwtToken',resp.data.token)
          this.$router.push({name:'user-details',params:{username: user.username}})
        })
        .catch(err => {
          console.log(`Deu erro: ${err}`)
          alert("Erro na autenticação");
          this.$router.go();
        })
    },

    signUp(user){
      userService.createUser(user)
        .then(resp => {
          console.log(resp)
          this.$router.push('auth')
          alert('Conta Criada com sucesso')
        })
        .catch(err => {
          console.log(err)
          this.$router.go()
        })
    }
  },
  computed: {
    componentTitle() {
      return this.isLoginScreen ? "Login" : "Cadastrar";
    }
  }
};
</script>
