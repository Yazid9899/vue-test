<script>

</script>

<template>
  <div class="home-button">
    <router-link to="/a-answer">A</router-link>
    <router-link to="/b-answer">B</router-link>
  </div>

</template>

<style>
.home-button{
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  font-size: 50px;
  gap: 50px;
}
a{
  text-decoration: none;
  color: black;
}
a:hover{
  font-size: 70px;
  color: darkslategrey;
}
</style>
