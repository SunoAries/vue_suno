<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <input type="text" v-model="thingsss" placeholder="shit on you">
    <button @click="add(thingsss)">add</button>
    <button @click="minus()">delete</button>
    <ul>
      <li v-for="shit in items">{{shit.count}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to XIAOCHENGLIN\'s Vue.js App \n  still in love with xuan  tt',
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
