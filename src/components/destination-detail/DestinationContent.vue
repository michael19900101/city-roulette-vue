
<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import type { CityDetailModel } from '@/data/city'
import { CITIES, getCityById } from '@/data/city'
import DestinationHero from './DestinationHero.vue'
import AttractionCard from './AttractionCard.vue'
import CuisineCard from './CuisineCard.vue'
import TipsSection from './TipsSection.vue'

// SSG 初始化：使用默认城市（成都）
const defaultCity = CITIES[0]
const currentCity = ref<CityDetailModel>(defaultCity)
const isClient = ref(true)

onMounted(() => {
  // 1→0→1 过程：进入客户端时先设为 false
  isClient.value = false

  // 检查 URL 查询参数
  const params = new URLSearchParams(window.location.search)
  const cityId = params.get('id')

  if (cityId) {
    const city = getCityById(cityId)
    if (city) {
      currentCity.value = city
    }
  }

  // 使用 requestAnimationFrame 确保 DOM 更新后再设为 true
  requestAnimationFrame(() => {
    isClient.value = true
  })
})
</script>

<template>
  <div class="w-full">
    <!-- 英雄区域 -->
    <DestinationHero :city="currentCity" :is-client="isClient" />

    <!-- 主容器 -->
    <div class="container mx-auto px-4 py-12">
      <!-- 城市基本信息 -->
      <section class="mb-16 animate-slide-up">
        <h2 class="text-3xl font-bold mb-4 text-foreground">{{ currentCity.name }}</h2>
        <p class="text-lg text-muted-foreground mb-6 leading-relaxed">
          {{ currentCity.fullDescription }}
        </p>
        <div class="flex flex-wrap gap-4">
          <div class="flex items-center gap-2 px-4 py-2 bg-muted rounded-lg">
            <span class="text-sm font-medium text-muted-foreground">地区：</span>
            <span class="font-semibold text-foreground">{{ currentCity.region }}</span>
          </div>
          <div class="flex items-center gap-2 px-4 py-2 bg-muted rounded-lg">
            <span class="text-sm font-medium text-muted-foreground">评分：</span>
            <span class="font-semibold text-primary">{{ currentCity.rating }}/5.0</span>
          </div>
        </div>
      </section>

      <!-- 热门景点 -->
      <section class="mb-16">
        <h3 class="text-2xl font-bold mb-8 text-foreground">热门景点</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AttractionCard
            v-for="(attraction, index) in currentCity.attractions"
            :key="index"
            :attraction="attraction"
            :index="index"
          />
        </div>
      </section>

      <!-- 当地美食 -->
      <section class="mb-16">
        <h3 class="text-2xl font-bold mb-8 text-foreground">当地美食</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <CuisineCard
            v-for="(cuisine, index) in currentCity.cuisines"
            :key="index"
            :cuisine="cuisine"
            :index="index"
          />
        </div>
      </section>

      <!-- 旅游提示 -->
      <TipsSection :tips="currentCity.tips" />
    </div>
  </div>
</template>
