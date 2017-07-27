<template>
  <div id="archives">
    <h2>{{headline.content}}</h2>
    <template v-for="item in reducedArticles">
          <div class="article">
            <h3>{{item.title}}</h3>
            <span>{{new Date(item.date).toLocaleDateString()}}</span><span>tags：</span>
            <router-link v-for="tag in item.tags" :to="{path:'/tags',query:{tag:tag}}"  tag="span">{{tag}} </router-link>
          </div>
    </template>
  </div>
</template>

<script>
  import {mapState,mapGetters} from 'vuex'
export default {
  data () {
    return {
      arr:[]
    }
  },
  computed: {
    ...mapState(['headline']),
    ...mapGetters(['reducedArticles'])
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #archives{
    padding: 10px;
  }
h2{
  font-weight: normal;
  text-align:center;
}
  .article{
    margin: 10px;
  }
</style>
