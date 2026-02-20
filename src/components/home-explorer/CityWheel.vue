
<script setup lang="ts">
import { computed } from 'vue'
import type { CityDetailModel } from '@/data/city'
import SafeIcon from '@/components/common/SafeIcon.vue'

interface Props {
  cities: CityDetailModel[]
  rotation: number
  isSpinning: boolean
}

const props = defineProps<Props>()

const displayCities = computed(() => {
  // Show up to 8 cities on the wheel
  return props.cities.slice(0, 8)
})

const segmentAngle = computed(() => {
  return 360 / displayCities.value.length
})

const wheelStyle = computed(() => {
  return {
    transform: `rotate(${props.rotation}deg)`,
    transition: props.isSpinning ? 'transform 3s cubic-bezier(0.25, 0.46, 0.45, 0.94)' : 'none',
  }
})

const getSegmentStyle = (index: number) => {
  const angle = (index * segmentAngle.value) * (Math.PI / 180)
  const radius = 120 // Distance from center
  const x = Math.cos(angle - Math.PI / 2) * radius
  const y = Math.sin(angle - Math.PI / 2) * radius
  
  return {
    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) rotate(${index * segmentAngle.value}deg)`,
  }
}
</script>

<template>
  <div class="relative w-full h-full flex items-center justify-center">
    <!-- Wheel Background -->
    <div class="absolute inset-0 rounded-full bg-gradient-warm shadow-card opacity-10"></div>
    
    <!-- Wheel Container -->
    <div 
      class="relative w-full h-full rounded-full border-8 border-primary/20 flex items-center justify-center"
      :style="wheelStyle"
    >
      <!-- Center Circle -->
      <div class="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-gradient-warm shadow-card flex items-center justify-center z-20">
        <SafeIcon name="Compass" :size="32" color="white" />
      </div>
      
      <!-- City Segments -->
      <div 
        v-for="(city, index) in displayCities"
        :key="city.id"
        class="absolute w-20 h-20 flex items-center justify-center"
        :style="getSegmentStyle(index)"
      >
        <div class="w-full h-full rounded-lg bg-white shadow-card flex flex-col items-center justify-center p-2 hover:shadow-hover transition-shadow cursor-pointer group">
          <img 
            :src="city.previewImageUrl"
            :alt="city.name"
            class="w-full h-full object-cover rounded-md group-hover:opacity-75 transition-opacity"
          />
          <div class="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/20 transition-colors rounded-lg">
            <span class="text-white font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
              {{ city.name }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Smooth rotation animation */
@keyframes wheelSpin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(1800deg);
  }
}
</style>
