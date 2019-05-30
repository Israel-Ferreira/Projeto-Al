<template>
  <div class="user-details">
    <div class="viewport">
      <md-field>
        <label>Nome</label>
        <md-input v-model="user.username" readonly></md-input>
      </md-field>
      <md-field>
        <label>Email</label>
        <md-input v-model="user.email" readonly></md-input>
      </md-field>
      <md-field v-if="user.phone">
        <label>Telefone</label>
        <md-input v-model="user.phone"></md-input>
      </md-field>
      <md-field v-if="user.address">
        <label>Endereço</label>
        <md-input v-model="user.address"></md-input>
      </md-field>
      <md-list class="md-double-line">
        <md-list-item>
          <md-button @click="logOut" class="md-raised md-primary">Sair</md-button>
          <md-button @click="addMoreInfo" class="md-raised md-accent">Adicionar Mais Informações</md-button>
        </md-list-item>
      </md-list>
    </div>
  </div>
</template>
<script>
import UserService from "../services/UserService";

export default {
  name: "user-details-component",
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
        this.$router.push("/auth");
      }
    },

    logOut() {
      localStorage.removeItem("jwtToken");
      this.$router.push("/auth");
    },

    addMoreInfo() {
      const { username } = this.user;
      this.$router.push({
        name: "user-details-edit",
        params: { username: username }
      });
    }
  },

  mounted() {
    this.getUser();
  }
};
</script>
