<script setup lang="ts">
import { computed, useAttrs } from 'vue'
import * as LucideIcons from 'lucide-vue-next'
import { Circle } from 'lucide-vue-next'

interface Props {
  name: string
  size?: number | string
  color?: string
  strokeWidth?: number | string
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  size: 24,
  strokeWidth: 2,
})

const attrs = useAttrs()

// Resolve icon synchronously to keep SSR stable. Fallback to Circle if not found.
const IconComponent = computed(() => {
  const icon = (LucideIcons as any)[props.name]
  if (!icon) {
    if (import.meta.env?.DEV) {
      console.warn(`Icon "${props.name}" not found in lucide-vue-next, using fallback`)
    }
    return Circle
  }
  return icon
})
</script>

<template>
  <component
    :is="IconComponent"
    :size="size"
    :color="color"
    :stroke-width="strokeWidth"
    :class="[attrs.class, props.class]"
  />
</template>

