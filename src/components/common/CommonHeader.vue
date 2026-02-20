
<script setup lang="ts">
import { Button } from '@/components/ui/button'
import SafeIcon from '@/components/common/SafeIcon.vue'

interface Props {
  showBackButton?: boolean
  backUrl?: string
  transparent?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  showBackButton: false,
  backUrl: './home-explorer.html',
  transparent: false,
})
</script>

<template>
  <header 
    class="sticky top-0 z-50 w-full border-b transition-colors"
    :class="transparent ? 'bg-background/80 backdrop-blur-md' : 'bg-background'"
  >
    <div class="container mx-auto flex h-16 items-center justify-between px-4">
      <!-- Left: Back Button (conditional) -->
      <div class="flex items-center gap-4">
        <Button
          v-if="showBackButton"
          variant="ghost"
          size="icon"
          :as="'a'"
          :href="backUrl"
          aria-label="返回"
        >
          <SafeIcon name="ArrowLeft" :size="20" />
        </Button>
        
        <!-- Logo/Brand -->
        <a 
          href="./home-explorer.html" 
          class="flex items-center gap-2 text-xl font-bold hover:opacity-80 transition-opacity"
        >
          <div class="w-8 h-8 rounded-lg bg-gradient-warm flex items-center justify-center text-white shadow-soft">
            <SafeIcon name="Compass" :size="20" />
          </div>
          <span class="hidden sm:inline-block text-gradient">城市转盘</span>
        </a>
      </div>

      <!-- Right: Placeholder for future actions (e.g., theme toggle, menu) -->
      <div class="flex items-center gap-2">
        <slot name="actions" />
      </div>
    </div>
  </header>
</template>
