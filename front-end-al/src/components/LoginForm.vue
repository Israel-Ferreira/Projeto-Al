<template>
    <div class="login-form">
        <form  class="md-layout" @submit.prevent="submitForm">
            <md-card class="md-layout-item md-size-50">
                <md-card-header>
                    <div class="md-title">{{isLoginScreen ? 'Login' : 'Cadastrar'}}</div>
                </md-card-header>
                <md-field v-if="!isLoginScreen">

                </md-field>
                <md-field>
                    <label>Email: </label>
                    <md-input v-model="email" type="email"/>
                </md-field>
                <md-field>
                    <label>Nome de Usuário: </label>
                    <md-input v-model="password" type="password" />
                </md-field>
                <md-card-actions>
                    <md-button type="submit" class="md-primary">Create user</md-button>
                </md-card-actions>
            </md-card>
        </form>
    </div>
</template>
<script>
import axios from 'axios'

const api = "http://localhost:6590";

export default {
    data: () => ({
        username: "",
        email: "",
        password: "",
        isLoginScreen: true
    }),
    methods: {
        submitForm(){
            let {username,email,password} = this

            if(this.isLoginScreen){
                console.log({username,password})
                axios.post()
            }else{
                console.log({email,username,password})
            }
        }
    },
    computed: {
        titlePage(){
            return 
        }
    }
    
}
</script>
