
<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isReady = ref(false)

onMounted(() => {
  // Trigger animation after mount
  requestAnimationFrame(() => {
    isReady.value = true
  })
})
</script>

<template>
  <div
    class="transition-all duration-500 ease-out"
    :class="isReady ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
  >
    <slot />
  </div>
</template>
