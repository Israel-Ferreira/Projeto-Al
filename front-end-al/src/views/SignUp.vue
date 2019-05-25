<template>
    <div class="signup">
        <LoginForm :isLoginScreen="false" />
    </div>
</template>
<script>

import LoginForm from '../components/LoginForm'

export default {
    name: 'signup',
    components: {
        LoginForm
    }

}
</script>
