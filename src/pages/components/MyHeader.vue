<template>
  <div id="nav">
    <nav>
      <ul class="catalog">
        <router-link to="/circle" tag="li">首页</router-link>
        <router-link to="/archives" tag="li">目录</router-link>
        <router-link to="/tags" tag="li">标签</router-link>
        <router-link to="/resume" tag="li">简历</router-link>
      </ul>
    </nav>
    <div class="contact">
      <a href="https://segmentfault.com/u/sunoaries" class="iconfont icon-iconsf-copy" target="_blank"></a>
      <a href="https://github.com/SunoAries" class="iconfont icon-githubsquare" target="_blank"></a>
      <a href="http://weibo.com/p/1005052373460431" class="iconfont icon-weibo" target="_blank"></a>
    </div>
  </div>
</template>

<script>
  import {mapState, mapActions} from 'vuex'
  export default {
    data () {
      return {
        text: ''
      }
    },
    computed: mapState(['headline']),
    methods: {
      ...mapActions(['searchArticles']),
      search () {
        this.$router.push({name: 'SearchResult', params: {text: this.text}, hash: '#search'})
      }
    },
    watch: {
      $route () {
        this.text = ''
      }
    }
  }
</script>

<style scoped>
  @import '//at.alicdn.com/t/font_o0hjt9tb6ueg66r.css';
  #nav {
    position: fixed;
    left: 0;
    height: 100%;
    width: 250px;
  }

  .contact {
    background: none;
  }

  .iconfont {
    font-size: 1.875rem;
    color: #000;
    margin-right: 0.625rem;
  }

  .icon-github:hover {
    color: royalblue;
  }

  .icon-cion15 {
    font-size: 1.625rem;
  }

  .icon-cion15:hover {
    color: deepskyblue;
  }

  .icon-iconsf:hover {
    color: green;
  }

  div {
    text-align: center;
    line-height: 2.5rem;
    width: 100%;
    background: rgba(55, 57, 65, 0.5);
  }

  p {
    text-align: center;
    color: #ffffff;
    font-size: 1rem;
  }

  span.login {
    cursor: pointer;
    color: #fff;
  }
</style>
