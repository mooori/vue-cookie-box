<template>
  <component
    :is="componentName"
    class="base-link"
    :to="maybeLocation"
    :href="maybeHref"
  >
    <slot />
  </component>
</template>

<script lang="ts">
import {Location} from "vue-router"
import Vue, {PropType} from "vue"

import {Link} from "../model/Link"

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

    /** undefined to suppress :to on <component> if link is string */
    maybeLocation(): Location | undefined {
      if (typeof this.link === "string") {
        return undefined
      }
      return this.link
    },

    /** undefined to suppress :href on <component> if link is Location */
    maybeHref(): string | undefined {
      if (typeof this.link !== "string") {
        return undefined
      }
      return this.link
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
