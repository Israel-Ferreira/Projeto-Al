<template>
    <div class="user-edit">
        <Edit :username="$route.params.username" />
    </div>
</template>
<script>
import Edit from '../components/Edit'

export default {
    name: 'user-edit',
    components: {
        Edit
    }
}
</script>

