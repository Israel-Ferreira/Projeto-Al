<template>
    <div class="add-info">
        <form class="md-layout" @submit.prevent="submitAddInfoForm" >
            <md-field>
                <label>Usuário</label>
                <md-input readonly  v-model="user.username"></md-input>
            </md-field>
            <md-field>
                <label>Email</label>
                <md-input  readonly v-model="user.email" type="email"></md-input>
            </md-field>
            <md-field>
                <label>Senha</label>
                <md-input type="password" v-model="user.password"></md-input>
            </md-field>
            <md-field>
                <label>Telefone</label>
                <md-input v-model="phone"></md-input>
            </md-field>
            <md-field>
                <label>Endereço</label>
                <md-input v-model="address"></md-input>
            </md-field>
            <md-button type="submit" class="md-raised md-accent">Atualizar informações</md-button>
            <md-button type="button" class="md-raised md-primary">
                <router-link class="text-white" :to="`/user-details/${user.username}`">Voltar</router-link>
            </md-button>
        </form>
    </div>
</template>
<style scoped lang="scss">
.text-white{
    color: #FFF;

}
</style>

<script>
import UserService from '../services/UserService'

export default {
    name: 'add-info',
    props: {
        username: String
    },
    data: () => ({
        user: {},
        phone: "",
        address: "",
    }),
    methods: {
        async submitAddInfoForm(){
            const { address, phone} = this;
            this.user["address"] = address;
            this.user["phone"] = phone;

            const {user} = this;

            try{
                const resp = await UserService.updateInformations(user)
                this.$router.push({name:"user-details", params:{username:user.username}})
            }catch(err){
                alert("Falha na operação")
                this.$router.go()
            }
        },

        async getUser(){
            try{
                const resp = await UserService.getUserByName(this.username);
                this.user = resp.data.user;
            }catch(err) {
                this.$router.push("user-details")
            }
        }
    },

    mounted(){
        this.getUser();
    }

}
</script>
