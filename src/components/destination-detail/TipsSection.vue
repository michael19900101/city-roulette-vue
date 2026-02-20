
<script setup lang="ts">
import SafeIcon from '@/components/common/SafeIcon.vue'

interface Props {
  tips: string[]
}

defineProps<Props>()
</script>

<template>
  <section class="mb-16">
    <h3 class="text-2xl font-bold mb-8 text-foreground">旅游提示</h3>
    <div class="bg-accent/10 border border-accent/20 rounded-lg p-8">
      <ul class="space-y-4">
        <li
          v-for="(tip, index) in tips"
          :key="index"
          class="flex gap-4 items-start animate-slide-up"
          :style="{ animationDelay: `${index * 100}ms` }"
        >
          <div class="flex-shrink-0 mt-1">
            <SafeIcon
              name="AlertCircle"
              :size="20"
              color="hsl(var(--accent))"
              class="text-accent"
            />
          </div>
          <span class="text-foreground leading-relaxed">{{ tip }}</span>
        </li>
      </ul>
    </div>
  </section>
</template>
