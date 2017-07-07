<template>
  <div class="suno-resume">
        xxx
    联系方式xxxx
  </div>
</template>

<script>


  export default {
    data () {
      return {

      }
    },
    mounted () {
    },
    computed: {

    },
    methods: {

    },
    components: {

    }
  }
</script>

<style>
  #wrapper {
    margin: 0 auto;
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
