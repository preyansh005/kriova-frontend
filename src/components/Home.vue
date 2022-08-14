<template>
    <img src="../assets/logo.png" alt="Kriova Logo">
    <!-- <h1>Home</h1> -->
    <h3>{{ name }}</h3>
    <button type="submit" @click="logout">Logout</button>
</template>

<script>
export default {
    name: 'Home',
    data() {
        return {
            name: localStorage.getItem('name')
        }
    },
    mounted() {
        if (localStorage.getItem('emp_id') && localStorage.getItem('name')) {
            true
        }
        else {
            this.$router.push('/login')
        }
    },
    methods: {
        logout() {
            localStorage.removeItem('emp_id')
            localStorage.removeItem('name')
            this.$router.push('/login')
        }
    }
}
</script>

<style scoped>
button {
    margin: 15px 0;
    font-size: var(--small-font);
    padding: 10px;
    line-height: 1.2rem;
    text-decoration: none;
    border: 2px solid var(--main-color);
    color: var(--main-color);
    width: 20%;
    font-weight: var(--mid-weight);
    border-radius: 8px;
}

button:hover {
    transition: 0.3s;
    transform: scale(1.2);
}
</style>