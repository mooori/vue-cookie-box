<template>
  <component
    :is="componentName"
    class="base-link"
    :to="link"
    :href="link"
  >
    <slot />
  </component>
</template>

<script lang="ts">
import Vue, {PropType} from "vue"

import {Link} from "@/model/Link.ts"

export default Vue.extend({
  props: {
    link: {
      type: [String, Object] as PropType<Link>,
      required: true
    }
  },

  computed: {
    isLocation(): boolean {
      return typeof this.link === "object"
    },

    componentName(): string {
      return this.isLocation ? "router-link" : "a"
    }
  }
})
</script>

<style lang="scss">
.base-link {
  &:visited {
    color: inherit;
  }
}
</style>
