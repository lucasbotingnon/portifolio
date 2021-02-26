<template>
  <vs-navbar center-collapsed shadow v-model="active">
    <template #left>
      <vs-avatar secondary size="30">
        <img src="../assets/LOGO.svg">
      </vs-avatar>
    </template>
    <vs-navbar-item :active="active == 'about'" id="about">
      About
    </vs-navbar-item>
  </vs-navbar>
</template>

<script>
export default {
  name: 'Navbar',

  data: () => ({
    active: 'about'
  })
}
</script>

<style>

</style>
