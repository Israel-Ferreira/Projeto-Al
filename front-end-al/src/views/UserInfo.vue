<template>
    <div class="user-info">
        <div class="md-layout md-alignment-center">
            <AddInfo :username="$route.params.username" />
        </div>
    </div>
</template>
<script>
import AddInfo from '../components/AddInfo'

export default {
    name: 'user-info',
    components: {
        AddInfo
    }
}
</script>
