<!-- Used only for dev and as local demo. -->

<template>
  <div class="app">
    <h1>
      vue-cookie-box
    </h1>
    <div>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </div>
    <CookieBox
      :consent-store-source="storeSource"
      privacy-link="https://example.com"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue"

import {ConsentStoreSource} from "./store/consentStore"
import CookieBox from "./components/CookieBox.vue"

export default Vue.extend({
  name: "App",

  components: {
    CookieBox
  },

  data: () => ({
    storeSource: ConsentStoreSource.LocalStorage
  })
})
</script>

<style lang="scss">
.app {
  font-family: sans-serif;
}
</style>
