<template>
  <div
    class="cookie-box-banner"
    :style="bannerStyle"
  >
    <div class="cookie-box-banner__content">
      <div class="cookie-box-banner__text">
        Diese Seite verwendet Cookies.

        <template v-if="privacyLink">
          Weitere Infos gibt es in der
          <!-- Disable warning to avoid whitespace before dot. -->
          <!-- eslint-disable-next-line vue/singleline-html-element-content-newline -->
          <BaseLink :link="privacyLink">Datenschutzerklärung</BaseLink>.
        </template>
      </div>
      <div class="cookie-box-banner__buttons">
        <BaseButtonOutline
          class="cookie-box-banner__give-consent"
          @click.native="$emit('accept')"
        >
          Ok
        </BaseButtonOutline>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, {PropType} from "vue"

import BaseButtonOutline from "./BaseButtonOutline.vue"
import BaseLink from "./BaseLink.vue"
import {componentProp as linkProp} from "../model/Link"

export interface BannerStyle {
  backgroundColor?: string;
  color?: string;
  /** Allow string since sass :export is `{[key: string]: string}`. */
  zIndex?: number | string;
}

export default Vue.extend({
  components: {
    BaseButtonOutline,
    BaseLink
  },

  props: {
    bannerStyle: {
      type: Object as PropType<BannerStyle>,
      default: () => ({})
    },

    privacyLink: linkProp
  }
})
</script>

<style lang="scss">
@use "layout";

.cookie-box-banner {
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #c4c4c4;
}

.cookie-box-banner__content {
  margin: 0 auto;
  max-width: 80em;
  padding: 1em;
  display: flex;
  align-items: center;
  justify-content: center;
}

.cookie-box-banner__text {
  @include layout.break-long-words;
}

.cookie-box-banner__buttons {
  margin-left: 1em;
}
</style>
