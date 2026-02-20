
<script setup lang="ts">
import type { CuisineModel } from '@/data/city'

interface Props {
  cuisine: CuisineModel
  index: number
}

defineProps<Props>()
</script>

<template>
  <div
    class="group overflow-hidden rounded-lg shadow-card hover:shadow-hover transition-all duration-300 hover:scale-105 animate-slide-up"
    :style="{ animationDelay: `${index * 100}ms` }"
  >
    <!-- 图片容器 -->
    <div class="relative h-48 overflow-hidden bg-muted">
      <img
        :src="cuisine.imageUrl"
        :alt="cuisine.name"
        class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
      />
    </div>

    <!-- 内容容器 -->
    <div class="p-4 bg-card">
      <h4 class="text-lg font-semibold text-foreground mb-2">{{ cuisine.name }}</h4>
      <p class="text-sm text-muted-foreground line-clamp-2">{{ cuisine.description }}</p>
    </div>
  </div>
</template>
