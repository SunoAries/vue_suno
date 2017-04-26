<template>
  <div>
    <h1>Hello App!</h1>
    <router-link to="/circle">Go to circle</router-link>
    <router-link to="/gear">gear</router-link>
    <router-link to="/hello">hello</router-link>
    <transition name="router-fade" mode="out-in">

    </transition>
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
  @import './style/common';
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-active {
    opacity: 0
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
