<template>
  <div class="article">
    {{article.content}}
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  //import hljs from 'highlight.js'
  import marked from 'marked'
  marked.setOptions({
    highlight: function (code) {
//    return hljs.highlightAuto(code).value
    },
    sanitize: true
  });
  const renderer = new marked.Renderer()
  renderer.heading = function (text, level) {
    return '<a href="#' + text + '" class="hashTitle" data-scroll><h' + level +
      ' id="' + text + '">' + text + '</h' + level + '></a>'
  }
  export default {
    name: 'article',
    data () {
      return {
        article: {content: 'fafa'}
      }
    },
    computed: {
      ...mapGetters(['reducedArticles'])
    },
    created: function () {
        debugger
      if (!this.$route.params.article) {
          this.$router.push({ path: 'circle' })
      }
      this.article = this.$route.params.article;
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
