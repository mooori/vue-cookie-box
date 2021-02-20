// Used by `npm run serve` (development).

import Vue from "vue"
import App from "./App.vue"

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount("#app")
