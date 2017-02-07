<template>
  <div class="gear">
<form>
    <input type="radio" name="reference" id="ref-annulus">
    <label for="ref-annulus">Annulus</label><br>
    <input type="radio" name="reference" id="ref-planet" checked>
    <label for="ref-planet">Planets</label><br>
    <input type="radio" name="reference" id="ref-sun">
    <label for="ref-sun">Sun</label>
</form>
  </div>
</template>

<script>
export default {
  name: 'gear',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>



</style>
