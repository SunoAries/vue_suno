<template>
  <div id="archives">

  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to XIAOCHENGLIN\'s Vue.js App',
      items: [
        {count: '1'},
        {count: '1'}
      ],
      thingsss:''
    }
  },
  methods: {
    add: function (i) {
      if(!i)return;
      this.items.push({count:i});
      this.thingsss=''
    },
    minus:function () {
      this.items.pop()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{
  font-weight: normal;
  text-align:center;
}
</style>
