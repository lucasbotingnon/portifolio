<template>
  <div class="navigation">
    <transition name="fadeDown">
      <vs-navbar v-model="active" paddingScroll shadowScroll v-show="showNavbar">
        <template #left>
          <vs-button dark icon @click="showSidebar = !showSidebar">
            <i class="bx bx-menu"></i>
          </vs-button>
        </template>

        <img src="../assets/LOGO.svg" height="35px">

        <template #right>
          <vs-button animation-type="vertical" dark icon>
            <i class='bx bx-envelope'></i>
          </vs-button>
        </template>
      </vs-navbar>
    </transition>

    <transition name="fadeUp">
      <div class="floating-navbar" v-show="showFloatNavbar">
        <vs-row justify="space-between" align="center">
          <vs-button size="xl" dark circle @click="showSidebar = !showSidebar">
            <i class="bx bx-menu"></i>
          </vs-button>

          <img src="../assets/LOGO.svg" height="30px">

          <vs-button animation-type="vertical" size="xl" dark circle>
            <i class='bx bx-envelope'></i>
          </vs-button>
        </vs-row>
      </div>
    </transition>

    <vs-sidebar
      v-model="active"
      :open.sync="showSidebar"
    >
      <template #logo>
        <img src="../assets/LOGO.svg">
      </template>
      <vs-sidebar-item id="about">
        <template #icon>
          <i class='bx bx-info-circle'></i>
        </template>
        About me
      </vs-sidebar-item>
      <vs-sidebar-item id="skills">
        <template #icon>
          <i class='bx bx-medal'></i>
        </template>
        Skills
      </vs-sidebar-item>
      <vs-sidebar-item id="projects">
        <template #icon>
          <i class='bx bx-bracket'></i>
        </template>
        Projects
      </vs-sidebar-item>
      <vs-sidebar-item id="contact">
        <template #icon>
          <i class='bx bx-chat'></i>
        </template>
        Contact
      </vs-sidebar-item>

      <template #footer>
        <vs-row justify="center">
          <vs-button href="https://www.linkedin.com/in/lucasbotingnon/?locale=en_US" color="linkedin" gradient circle icon blank  >
            <i class='bx bxl-linkedin-square' ></i>
          </vs-button>
          <vs-button href="https://github.com/lucasbotingnon" dark gradient circle icon blank>
            <i class='bx bxl-github' ></i>
          </vs-button>
          <vs-button href="https://www.reddit.com/user/kaliope77" color="reddit" gradient circle icon blank>
            <i class='bx bxl-reddit' ></i>
          </vs-button>
        </vs-row>
      </template>
    </vs-sidebar>
  </div>
</template>

<script>
export default {
  name: 'Navigation',

  data: () => ({
    active: '',
    showNavbar: true,
    showFloatNavbar: false,
    showSidebar: false,
    scrollPosition: null
  }),

  methods: {
    updateScroll () {
      this.scrollPosition = window.scrollY
      if (this.scrollPosition > 10) {
        this.showFloatNavbar = true
        this.showNavbar = false
      } else {
        this.showFloatNavbar = false
        this.showNavbar = true
      }
      console.log()
    }
  },

  mounted () {
    window.addEventListener('scroll', this.updateScroll)
  },

  destroy () {
    window.removeEventListener('scroll', this.updateScroll)
  }
}
</script>

<style lang="sass">
  .floating-navbar
    position: fixed
    background: #FFF
    bottom: 10px
    left: 0
    right: 0
    margin: 0 auto
    max-width: 230px
    z-index: 10
    border-radius: 40px
    box-shadow: 0px 5px 25px 0px rgb(0 0 0 / 30%)
</style>
