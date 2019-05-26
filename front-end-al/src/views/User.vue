<template>
    <div class="user">
        <md-card>
            <md-card-header>
                <h3 class="md-title">Detalhes do Usuário</h3>
                <UserDetails :username="$route.params.username" />
            </md-card-header>
            <md-card-content>
            </md-card-content>
        </md-card>
    </div>
</template>
<script>
import UserDetails from '../components/UserDetails'

export default {
    name: "user",
    components: {
        UserDetails
    }
}
</script>
