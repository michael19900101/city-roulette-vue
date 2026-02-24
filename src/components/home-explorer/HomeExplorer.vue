
<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { CITIES } from '@/data/city'
import type { CityDetailModel } from '@/data/city'
import FilterPanel from './FilterPanel.vue'
import CityWheel from './CityWheel.vue'
import DrawButton from './DrawButton.vue'
import ResultCard from './ResultCard.vue'
import SafeIcon from '@/components/common/SafeIcon.vue'
import { Badge } from '@/components/ui/badge'

// Client state (SSR-safe)
const isMounted = ref(false)
const hasResult = ref(false)

// Data state
const selectedCity = ref<CityDetailModel>(CITIES[0])
const selectedFilters = ref<Set<string>>(new Set())
const isSpinning = ref(false)
const wheelRotation = ref(0)
const lastRotation = ref(0)

// Computed
const filteredCities = computed(() => {
  if (selectedFilters.size === 0) return CITIES.slice(0, 20)

  const filtered = CITIES.filter(city => {
    for (const filter of selectedFilters.value) {
      // Match behavior for regions in data/city.ts
      const regionMap: Record<string, string> = {
        'east': '华东', 'south': '华南', 'north': '华北', 'southwest': '西南', 'northwest': '西北'
      }
      if (city.region === regionMap[filter] || city.region === filter) return true
    }
    return false
  })

  return filtered.length > 0 ? filtered.slice(0, 20) : CITIES.slice(0, 20)
})

// Methods
const handleFilterChange = (filterId: string, isChecked: boolean) => {
  if (isChecked) {
    selectedFilters.value.add(filterId)
  } else {
    selectedFilters.value.delete(filterId)
  }
  // Reset wheel position on filter change to avoid confusion
  wheelRotation.value = 0
  lastRotation.value = 0
  hasResult.value = false
}

const handleDraw = () => {
  if (isSpinning.value) return

  isSpinning.value = true
  hasResult.value = false

  const pool = filteredCities.value
  const targetIndex = Math.floor(Math.random() * pool.length)
  const segmentAngle = 360 / pool.length

  // Logic: The pointer is at 12 o'clock (0 deg relative to screen)
  // To make target item stop AT the top, the wheel must rotate:
  // (360 - itemOffsetAngle). For center of segment, add half angle.
  const targetItemRotation = 360 - (targetIndex * segmentAngle) - (segmentAngle / 2)

  // Add 5-8 full laps (1800-2880 deg) to last cumulative rotation
  const extraLaps = (5 + Math.floor(Math.random() * 3)) * 360
  const newRotation = lastRotation.value + (360 - (lastRotation.value % 360)) + extraLaps + targetItemRotation

  wheelRotation.value = newRotation
  lastRotation.value = newRotation

  // Sync result after animation
  setTimeout(() => {
    selectedCity.value = pool[targetIndex]
    isSpinning.value = false
    hasResult.value = true
  }, 4000)
}

const handleNavigateToDetail = () => {
  // Navigation will be handled by the ResultCard component
  window.location.href = `./destination-detail.html?id=${selectedCity.value.id}`
}

// SSG/Hydration lifecycle
onMounted(() => {
  isMounted.value = true
})
</script>

<template>
  <div class="w-full min-h-screen flex flex-col">
    <!-- Filter Panel -->
<!--<FilterPanel @filter-change="handleFilterChange" />-->

    <!-- Wheel Section -->
    <section class="flex-1 flex flex-col items-center justify-center pt-8 pb-12 px-4 transition-all duration-300">
      <div class="w-full max-w-2xl flex flex-col items-center gap-16">
        <!-- Wheel Container -->
        <div class="relative w-full aspect-square max-w-[400px] md:max-w-[450px]">
          <CityWheel
            v-if="isMounted"
            :cities="filteredCities"
            :rotation="wheelRotation"
            :is-spinning="isSpinning"
          />
          <!-- Fallback for SSR -->
          <div v-else class="w-full h-full rounded-full bg-muted animate-pulse border-8 border-white shadow-lg"></div>

          <!-- Pointer (top center, strictly pointing down) -->
          <div class="absolute -top-4 left-1/2 -translate-x-1/2 z-30 filter drop-shadow-md">
            <div class="w-8 h-10 bg-primary flex items-center justify-center rounded-t-sm rounded-b-xl transition-transform"
                 :class="isSpinning ? 'animate-bounce' : ''">
              <SafeIcon name="MapPin" :size="20" color="white" />
            </div>
            <div class="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-8 border-transparent border-t-primary"></div>
          </div>
        </div>

        <!-- Draw Button -->
        <DrawButton
          :is-spinning="isSpinning"
          @draw="handleDraw"
        />
      </div>
    </section>

    <!-- Result Card Section -->
    <section v-if="hasResult || !isMounted" class="pb-16 px-4 bg-gradient-to-t from-background to-transparent animate-slide-up">
      <div class="container mx-auto max-w-2xl">
        <div class="text-center mb-6">
          <Badge variant="outline" class="px-4 py-1 text-primary border-primary">恭喜！您的旅行目的地已就绪</Badge>
        </div>
        <ResultCard
          :city="selectedCity"
          :is-visible="hasResult || !isMounted"
          @navigate-detail="handleNavigateToDetail"
        />
      </div>
    </section>
  </div>
</template>

<style scoped>
.border-t-12 {
  border-top-width: 12px;
}
</style>
