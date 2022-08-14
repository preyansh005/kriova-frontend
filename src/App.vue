<template>
  <router-view></router-view>
</template>

<script>

export default {
  name: 'App',
  mounted() {
    if (localStorage.getItem('emp_id') && localStorage.getItem('name')) {
      this.$router.push('/home')
    }
    else {
      this.$router.push('/login')
    }
  }
}
</script>

<style>
:root{
  --main-color: #203549;
  --text-color: white;
  --big-font: 50px;
  --mid-font: 18px;
  --small-font: 15px;
  --large-weight: 650;
  --mid-weight: 500;
}

::selection{
  background-color:#2c3e50;
  color: var(--text-color);
}

#app {
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 3rem;
  scroll-behavior: smooth;
}
@media (max-width: 768px){
    :root{
        --big-font: 40px;
    }
}
</style>
