
<script setup lang="ts">
import type { CityDetailModel } from '@/data/city'

interface Props {
  city: CityDetailModel
  isClient: boolean
}

defineProps<Props>()
</script>

<template>
  <div class="relative w-full h-96 overflow-hidden bg-muted">
    <!-- 英雄图片 -->
    <img
      :src="city.heroImageUrl"
      :alt="city.name"
      class="w-full h-full object-cover"
    />

    <!-- 渐变遮罩 -->
    <div class="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

    <!-- 城市信息叠加层 -->
    <div class="absolute inset-0 flex flex-col justify-end p-8">
      <div class="max-w-2xl">
        <h1 class="text-5xl font-bold text-white mb-3 drop-shadow-lg">{{ city.name }}</h1>
        <p class="text-xl text-white/90 drop-shadow-md">{{ city.shortDescription }}</p>
      </div>
    </div>
  </div>
</template>
