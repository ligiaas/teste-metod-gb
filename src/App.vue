<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #1F2041;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 30px;
}
</style>

<style lang="css">
@import './assets/bootstrap.min';
@import '../node_modules/@fortawesome/fontawesome-free/css/fontawesome';
@font-face {
  font-family: 'Font Awesome 5 Solid';
  src: url('../node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.eot'),
   url('../node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.woff') format('woff'),
   url('../node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}
</style>
