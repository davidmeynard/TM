<template>
    <div class="container">
        <form @submit.prevent="login">
            <h1>Login</h1>
            <p>{{ this.$store.state.error }}</p>
            <input type="email" v-model="email" placeholder="Email" required>
            <input type="password" v-model="password" placeholder="Password" required>
            <button>Login</button>
        </form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                email: "",
                password: "",
            }
        },
        methods: {
            login(){
                this.$store.dispatch('login',{email:this.email, password:this.password})
                // router.push("/")
            },
        }
    }
</script>

<style scoped>
.container {
    display: flex;
    align-items: center;
    justify-content: center;
}
form *{
    display: block;
    margin: 10px;
}
form {
    width: 50vw;
    height: 70vh;
    border: 5px gray;
    border-radius: 10px;
    border-style: outset;
}
</style>