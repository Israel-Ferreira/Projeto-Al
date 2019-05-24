<template>
    <div class="auth">
        <div>
            <LoginForm :isLoginScreen="true" />
        </div>
    </div>
</template>

<script>
import LoginForm from '@/components/LoginForm'

export default {
    name: 'auth',
    components: {
        LoginForm
    }
}
</script>

