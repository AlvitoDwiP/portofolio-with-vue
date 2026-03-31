<script setup>
defineOptions({
  inheritAttrs: false,
})
</script>

<template>
  <div class="container" v-bind="$attrs">
    <slot />
  </div>
</template>
