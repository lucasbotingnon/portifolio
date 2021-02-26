<template>
  <div id="app">
    <Navbar/>

    <vs-dialog v-model="underDevelopment" not-close prevent-close not-padding>
      <vs-alert relief color="danger" class="under-construction alert" >
        <h2>Sorry!</h2>
        <h3>I'm doing some work on the site :)</h3>
      </vs-alert>
    </vs-dialog>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',

  data: () => ({
    underDevelopment: true
  }),

  components: {
    Navbar
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Slabo+27px&display=swap');

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

  .under-construction.alert {
    font-family: 'Slabo 27px', serif;
  }
}
</style>
