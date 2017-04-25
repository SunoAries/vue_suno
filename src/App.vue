<template>
  <div>
    <h1>Hello App!</h1>
    <router-link to="/circle">Go to circle</router-link>
    <router-link to="/gear">gear</router-link>
    <router-link to="/hello">hello</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
    components: {
    },
    data (){
      return {

      }
    },
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 60px;
  }

  body {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    width: 960px;
    height: 500px;
    position: relative;
  }

  form {
    top: 1em;
    left: 1em;
  }

  path {
    fill-rule: evenodd;
    stroke: #333;
    stroke-width: 2px;
  }

  .sun path {
    fill: #6baed6;
  }

  .planet path {
    fill: #9ecae1;
  }

  .annulus path {
    fill: #c6dbef;
  }

  .router-link-active {
    color: red;
  }
</style>
