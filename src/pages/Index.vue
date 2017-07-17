<template>
  <div id="wrapper">
    <my-header></my-header>
    <div class="suno-content">
      <spinner v-show="isLoading"></spinner>
      <router-view class="content" v-show="!isLoading"></router-view>
      <my-footer></my-footer>
    </div>
    <transition name="huojian" enter-active-class="animated bounceIn" leave-active-class="animated fadeOut">
      <a href="#app" class="rocket" data-scroll style="position: fixed;right: 0;bottom: 0;">回到最上</a>
    </transition>
  </div>
</template>

<script>
  import MyHeader         from './components/MyHeader'
  import MyFooter         from './components/MyFooter'
  import spinner          from './components/spinner'
  import {mapState}       from 'vuex'

  export default {
    data () {
      return {
        show: false
      }
    },
    mounted () {
      window.addEventListener('scroll', this.handleScroll)
    },
    computed: {
      ...mapState(['isLoading'])
    },
    methods: {
      handleScroll () {
        this.show = window.scrollY > 400
      }
    },
    components: {
      MyHeader,
      MyFooter,
      spinner
    }
  }
</script>

<style>
  #wrapper {
    margin: 0 auto;
    height: 100%;
  }
  .suno-content{
    position: relative;
    height: 100%;
    margin-left: 250px;
  }
  h1 {
    color: white;
    text-align: center;
  }

  .icon-huojian {
    font-size: 2.5rem;
    color: #C0CCDA;
    position: fixed;
    bottom: 1.25rem;
    right: 2.5rem;
    cursor: pointer;
    transition: 1s;

  }

  .totop {
    bottom: 31.25rem;
    transition: 1s;
  }

  @media screen and (max-width: 440px) {
    .icon-huojian {
      right: 0.5rem;
    }
  }
</style>
