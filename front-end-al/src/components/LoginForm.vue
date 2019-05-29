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

    async login(user){
      try{
        const resp =  await UserService.loginUser(user)
        localStorage.setItem('jwtToken',resp.data.token)
        this.$router.push({name:'user-details',params:{username: user.username}})
      }catch(e){
        alert("Erro na autenticação ", e);
        this.$router.go();
      }
    },

    async signUp(user){
      try{
        const resp =  await UserService.createUser(user);
        
        if(resp.status == 201) this.$router.push('auth')
        alert('Conta Criada com sucesso')
      }catch{
        this.$router.go()
      }
    },
  },
  computed: {
    componentTitle() {
      return this.isLoginScreen ? "Login" : "Cadastrar";
    }
  }
};
</script>
