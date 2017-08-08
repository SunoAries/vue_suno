<template>
  <div class="tagsWrap">
    <div v-if="!argument">
      <span v-for="(value,key) in tagSort" @click="tagsHandler(key)" class="tag">
          {{key}}({{value.length}})
      </span>
    </div>
    <div v-else>
      <div v-for="value in tagSort[argument]" class="tags">
        <router-link :to="{name: 'article', params: {article: value}}" tag="a" exact>{{value.title}}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  data () {
    return {
    }
  },
  computed:{
    ...mapGetters(['tagSort']),
    argument:function () {
      return this.$route.query.tag
    }
  },
  components:{

  },
  methods:{
    tagsHandler:function (key) {
      this.$router.push({ path: 'tags', query: { tag:key }})
    }
  },
  beforeRouteEnter (to, from, next) {
    next()
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当钩子执行前，组件实例还没被创建
  },
  beforeRouteUpdate (to, from, next) {
    next()
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
  },
  beforeRouteLeave (to, from, next) {
    next()
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
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
