<template>
  <div class="user-details">
    <div class="separator">
      <md-avatar class="md-avatar-icon">A</md-avatar>
      <h2>{{user.username}}</h2>
    </div>
    <div class="viewport">
      <md-list class="md-double-line">
        <md-subheader>Nome</md-subheader>

        <md-list-item>
          <md-icon class="md-primary">user</md-icon>

          <div class="md-list-item-text">
            <span>{{user.password}}</span>
            <span>Mobile</span>
          </div>

          <md-button class="md-icon-button md-list-action">
            <md-icon>sms</md-icon>
          </md-button>
        </md-list-item>

        <md-divider></md-divider>
        <md-subheader>{{user.username}}</md-subheader>

        <md-list-item>
          <md-icon class="md-primary">email</md-icon>
          <div class="md-list-item-text">
            <span>{{user.email}}</span>
            <span>Personal</span>
          </div>
        </md-list-item>
        <md-list-item>
          <div v-if="user.phone" class="md-list-item-text">
            <span>{{user.phone}}</span>
            <span>Phone</span>
          </div>
          <div v-if="user.address" class="md-list-tem-text">
            <span>{{user.address}}</span>
            <span></span>
          </div>
        </md-list-item>
        <md-button @click="logOut" class="md-raised md-primary">Sair</md-button>
        <md-button @click="addMoreInfo" class="md-raised md-accent">Adicionar Mais Informações</md-button>
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
