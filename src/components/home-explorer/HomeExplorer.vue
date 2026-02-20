
<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { CITIES } from '@/data/city'
import type { CityDetailModel } from '@/data/city'
import FilterPanel from './FilterPanel.vue'
import CityWheel from './CityWheel.vue'
import DrawButton from './DrawButton.vue'
import ResultCard from './ResultCard.vue'

// Client state (SSR-safe: false during build/SSR, true after hydration)
 const isClient = ref(false)

// Data state
const selectedCity = ref<CityDetailModel>(CITIES[0])
const selectedFilters = ref<Set<string>>(new Set())
const isSpinning = ref(false)
const wheelRotation = ref(0)

// Computed
const filteredCities = computed(() => {
  if (selectedFilters.size === 0) return CITIES
  
  return CITIES.filter(city => {
    for (const filter of selectedFilters.value) {
      // Check if filter matches city region or other attributes
      if (city.region === filter) return true
    }
    return false
  })
})

// Methods
const handleFilterChange = (filterId: string, isChecked: boolean) => {
  if (isChecked) {
    selectedFilters.value.add(filterId)
  } else {
    selectedFilters.value.delete(filterId)
  }
}

const handleDraw = () => {
  if (isSpinning.value) return
  
  isSpinning.value = true
  
  // Calculate random rotation (at least 5 full rotations + random offset)
  const randomRotation = Math.random() * 360 + 1800
  wheelRotation.value = randomRotation
  
  // Simulate spin duration (3 seconds)
  setTimeout(() => {
    // Select random city from filtered list
    const pool = filteredCities.value.length > 0 ? filteredCities.value : CITIES
    const randomIndex = Math.floor(Math.random() * pool.length)
    selectedCity.value = pool[randomIndex]
    
    isSpinning.value = false
  }, 3000)
}

const handleNavigateToDetail = () => {
  // Navigation will be handled by the ResultCard component
  window.location.href = `./destination-detail.html?id=${selectedCity.value.id}`
}

// SSG/Hydration lifecycle
 onMounted(() => {
   isClient.value = true
 })
</script>

<template>
  <div class="w-full min-h-screen flex flex-col">
    <!-- Filter Panel -->
<FilterPanel 
       @filter-change="handleFilterChange"
     />
    
    <!-- Wheel Section -->
    <section class="flex-1 flex flex-col items-center justify-center py-8 px-4">
      <div class="w-full max-w-2xl flex flex-col items-center gap-8">
        <!-- Wheel Container -->
        <div class="relative w-full aspect-square max-w-md">
          <CityWheel 
            :cities="filteredCities.length > 0 ? filteredCities : CITIES"
            :rotation="wheelRotation"
            :is-spinning="isSpinning"
          />
          
          <!-- Pointer (top center) -->
          <div class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 z-10">
            <div class="w-0 h-0 border-l-8 border-r-8 border-t-12 border-l-transparent border-r-transparent border-t-primary"></div>
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
    <section class="py-8 px-4 bg-white/50 backdrop-blur-sm">
      <div class="container mx-auto max-w-2xl">
        <ResultCard 
          :city="selectedCity"
          :is-visible="!isSpinning || isClient"
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
