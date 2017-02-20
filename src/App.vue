<template>
  <div id="app">
    <hello></hello>
    <gear></gear>
    <input type="text" v-model="thingsss" placeholder="shit on you">
    <button @click="add(thingsss)">add</button>
    <button @click="minus()">delete</button>
    <ul>
      <li v-for="shit in items">{{shit.count}}</li>
    </ul>
  </div>
</template>

<script>
  import Hello from './components/Hello'
  import Gear from './components/Gear'


  export default {
    name: 'app',
    components: {
      Hello,
      Gear
    },
    data (){
      ret
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

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 60px;
  }

  body {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    width: 960px;
    height: 500px;
    position: relative;
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
