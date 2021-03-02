<template>
  <div id="app" ref="app">
    <Navigation/>

    <vs-row class="scroll-to-me">
      <vs-col w="12" align="justify">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis nemo ex aut placeat perferendis incidunt necessitatibus nostrum non, quisquam cumque reiciendis commodi ipsam qui impedit odio odit id maxime deleniti!
      </vs-col>
    </vs-row>

    <vs-row class="content">
      <vs-col w="12" align="justify">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis nemo ex aut placeat perferendis incidunt necessitatibus nostrum non, quisquam cumque reiciendis commodi ipsam qui impedit odio odit id maxime deleniti!
      </vs-col>
    </vs-row>

    <vs-row class="content">
      <vs-col w="12" align="justify">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis nemo ex aut placeat perferendis incidunt necessitatibus nostrum non, quisquam cumque reiciendis commodi ipsam qui impedit odio odit id maxime deleniti!
      </vs-col>
    </vs-row>

    <vs-row class="content">
      <vs-col w="12" align="justify">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis nemo ex aut placeat perferendis incidunt necessitatibus nostrum non, quisquam cumque reiciendis commodi ipsam qui impedit odio odit id maxime deleniti!
      </vs-col>
    </vs-row>

    <vs-row class="content">
      <vs-col w="12" align="justify">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis nemo ex aut placeat perferendis incidunt necessitatibus nostrum non, quisquam cumque reiciendis commodi ipsam qui impedit odio odit id maxime deleniti!
      </vs-col>
    </vs-row>

    <vs-row class="content">
      <vs-col w="12" align="justify">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis nemo ex aut placeat perferendis incidunt necessitatibus nostrum non, quisquam cumque reiciendis commodi ipsam qui impedit odio odit id maxime deleniti!
      </vs-col>
    </vs-row>

    <vs-row ref="about">
      <vs-col w="12" align="justify">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis nemo ex aut placeat perferendis incidunt necessitatibus nostrum non, quisquam cumque reiciendis commodi ipsam qui impedit odio odit id maxime deleniti!
      </vs-col>
    </vs-row>

    <vs-row class="content">
      <vs-col w="12" align="justify">
        <vs-button @click="ScrollToRef($refs['app'])">
          Scroll
        </vs-button>
      </vs-col>
    </vs-row>

    <vs-dialog v-model="underDevelopment" not-close prevent-close not-padding>
      <vs-alert relief color="danger" class="under-construction alert" >
        <h2>Sorry!</h2>
        <h3>I'm doing some work on the site :)</h3>
      </vs-alert>
    </vs-dialog>
  </div>
</template>

<script>
import Navigation from './components/Navigation'

export default {
  name: 'App',

  data: () => ({
    underDevelopment: true
  }),

  components: {
    Navigation
  }
}
</script>

<style lang="sass">
  @import 'assets/styles/all.sass'

  #app
    margin-top: 90px
    height: 10000px
</style>
