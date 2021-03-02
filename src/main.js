import Vue from 'vue'
import App from './App.vue'

import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css'

const ScrollToRef = {
  install (Vue, options) {
    Vue.prototype.ScrollToRef = (ref) => {
      if (ref) {
        ref.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }
}

Vue.config.productionTip = false

Vue.use(Vuesax, {
  colors: {
    primary: '#ff7272',
    success: 'rgb(23, 201, 100)',
    danger: 'rgb(242, 19, 93)',
    warning: 'rgb(255, 130, 0)',
    dark: 'rgb(30, 30, 30)'
  }
})
Vue.use(ScrollToRef)

new Vue({
  render: h => h(App)
}).$mount('#app')
