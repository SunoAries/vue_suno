<template>
  <div class="tagsWrap">
    <div v-if="!argument">
      <span v-for="(value,key) in tagSort" @click="argument=key" class="tag">
          {{key}}({{value.length}})
      </span>
      <hr>
      <router-link v-for="(value,key) in tagSort" :to="{path:'/tags',query:{tag:key}}"  tag="span" class="tag">{{key}}({{value.length}}) </router-link>
    </div>
    <div v-else>
      <span v-for="value in tagSort[argument]" class="tags">
        <router-link :to="{name: 'article', params: {article: value}}" tag="a" exact>{{value.title}}</router-link>
      </span>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  data () {
    return {
      argument:this.$route.query.tag
    }
  },
  computed:{
    ...mapGetters(['tagSort'])
  },
  components:{

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tagsWrap{
  padding: 10px;
}
.tag{
  cursor: pointer;
  display: inline-block;
  font-size: 14px;
  padding: 0 15px;
  height: 40px;
  line-height: 40px;
  color: rgba(36,121,204,.8);
  border: 1px solid rgba(36,121,204,.8);
  border-radius: 4px;
  margin: 0 15px 10px 0;
  text-decoration: none;
  -webkit-transition: color .2s cubic-bezier(.4,.01,.165,.99),border .2s cubic-bezier(.4,.01,.165,.99);
  transition: color .2s cubic-bezier(.4,.01,.165,.99),border .2s cubic-bezier(.4,.01,.165,.99);
}


</style>
