<template>
    <main>Homepage
        <div>{{ this.$store.state.user }}</div>
        <button @click="logout">Logout</button>
    </main>
</template>

<script>
export default {
        data() {
            return {
                
            }
        },
        methods: {
            logout(){
                this.$store.dispatch('logout')
            },
        }
    }
</script>