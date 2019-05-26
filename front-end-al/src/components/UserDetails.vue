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
          <md-button @click="logOut"  class="md-raised md-primary">Sair</md-button>
        </md-list-item>
      </md-list>
    </div>
  </div>
</template>
<script>
import UserService from "../services/UserService";

const userService = new UserService("http://localhost:6590");

export default {
  name: "user-details-component",
  props: {
    username: String
  },
  data: () => ({
    user: {},
  }),
  methods: {
    getUser() {
      userService
        .getUserByName(this.username)
        .then(resp => {
           this.user = resp.data.user
        })
        .catch(err => {
          console.log(err);
          this.$router.push("/auth");
        });
    },

    logOut(){
        localStorage.removeItem('jwtToken')
        this.$router.push('/auth')
    }
  },

  mounted(){
    this.getUser()
  },
};
</script>
