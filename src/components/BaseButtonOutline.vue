<template>
  <button
    class="base-button-outline"
    :disabled="disabled"
    type="button"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  }
})
</script>

<style lang="scss" scoped>
@use "button";

.base-button-outline {
  @include button.basics;

  color: inherit;
  background-color: transparent;

  &:active,
  &:hover,
  &:focus {
    background-color: transparent;
  }
}
</style>
