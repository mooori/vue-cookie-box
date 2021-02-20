<template>
  <div class="cookie-box">
    <CookieBoxBanner
      v-if="!hasConsent"
      :privacy-link="privacyLink"
      :banner-style="bannerStyle"
      @accept="persistConsent"
    />
  </div>
</template>

<script lang="ts">
import Vue, {PropType} from "vue"

import {ConsentStoreSource, newConsentStore} from "../store/consentStore"
import CookieBoxBanner, {BannerStyle} from "./CookieBoxBanner.vue"
import {componentProp as linkProp} from "../model/Link"

export default Vue.extend({
  components: {
    CookieBoxBanner
  },

  props: {
    consentStoreSource: {
      type: Number as PropType<ConsentStoreSource>,
      required: true
    },

    privacyLink: linkProp,

    bannerStyle: {
      type: Object as PropType<BannerStyle>,
      default: () => ({})
    }
  },

  data() {
    return {
      consentStore: newConsentStore(this.consentStoreSource)
    }
  },

  computed: {
    hasConsent(): boolean {
      return this.consentStore.hasConsent()
    }
  },

  methods: {
    persistConsent(): void {
      this.consentStore.persist()
    }
  }
})
</script>
