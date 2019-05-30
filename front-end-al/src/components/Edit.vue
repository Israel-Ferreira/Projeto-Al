<template>
  <div class="md-layout">
    <form class="md-layout" @submit.prevent="updateUser">
      <h3 class="md-title">Editar Usuário</h3>
      <md-field>
        <label>Nome</label>
        <md-input v-model="user.username"></md-input>
      </md-field>
      <md-field>
        <label>Email</label>
        <md-input type="email" v-model="user.email"></md-input>
      </md-field>
      <md-field>
        <label>Senha</label>
        <md-input type="password" v-model="user.password"></md-input>
      </md-field>
      <md-field v-if="user.phone">
        <label>Telefone</label>
        <md-input v-model="user.phone"></md-input>
      </md-field>
      <md-field v-if="user.address">
        <label>Endereço</label>
        <md-input v-model="user.address"></md-input>
      </md-field>
      <md-button type="submit" class="md-raised md-accent">Atualizar</md-button>
      <md-button class="md-raised md-transparent">
        <router-link :to="`/user-details/${username}`">Voltar</router-link>
      </md-button>
    </form>
  </div>
</template>
<script>
import UserService from "../services/UserService";

export default {
  name: "edit-user",
  props: {
    username: String
  },
  data: () => ({
    user: {}
  }),
  methods: {
    async getUser() {
      try {
        const resp = await UserService.getUserByName(this.username);
        this.user = resp.data.user;
      } catch (err) {
        console.log(err);
        this.$router.push(`/user-details/${this.username}`);
      }
    },

    async updateUser(){
      if(!this._checkTxtFields(this.user)){
        alert("Erro: Campos Vazios");
        this.$router.go();
      }

      try{
        const resp = await UserService.updateInformations(this.user)
        console.log(resp.data)
        this.$router.push(`/user-details/${this.username}`)
      }catch(err){
        alert(err)
        this.$router.go();
      }
    },

    _checkTxtFields(user){
      const {email,username,phone,password,address} = user
      return (email != "" && username != "" && phone != "" && password != "" && address != "")
    }
  },

  mounted() {
    this.getUser();
  }
};
</script>
