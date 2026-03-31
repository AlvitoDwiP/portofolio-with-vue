<script setup>
import AppFooter from '@/components/layout/AppFooter.vue'
import AppNavbar from '@/components/layout/AppNavbar.vue'
</script>

<template>
  <div class="flex min-h-screen flex-col bg-canvas text-text">
    <AppNavbar />

    <main class="flex-1">
      <slot />
    </main>

    <AppFooter />
  </div>
</template>
