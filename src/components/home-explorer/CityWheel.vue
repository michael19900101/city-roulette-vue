
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
  return props.cities.slice(0, 20) // Support up to 20 cities
})

const segmentAngle = computed(() => 360 / displayCities.value.length)

const wheelStyle = computed(() => ({
  transform: `rotate(${props.rotation}deg)`,
  transition: props.isSpinning ? 'transform 4s cubic-bezier(0.15, 0, 0.15, 1)' : 'transform 0.5s ease-out',
}))

const getSegmentColor = (index: number) => {
  const colors = [
    'fill-primary/90', 'fill-secondary/90', 'fill-accent/90', 
    'fill-primary/70', 'fill-secondary/70', 'fill-accent/70'
  ]
  return colors[index % colors.length]
}

// Generate SVG pie sectors
const sectors = computed(() => {
  const count = displayCities.value.length
  const angle = 360 / count
  return displayCities.value.map((city, i) => {
    const startAngle = i * angle
    const endAngle = (i + 1) * angle
    
    // SVG large-arc-flag calculation
    const x1 = 50 + 50 * Math.cos((Math.PI * (startAngle - 90)) / 180)
    const y1 = 50 + 50 * Math.sin((Math.PI * (startAngle - 90)) / 180)
    const x2 = 50 + 50 * Math.cos((Math.PI * (endAngle - 90)) / 180)
    const y2 = 50 + 50 * Math.sin((Math.PI * (endAngle - 90)) / 180)
    
    return {
      d: `M 50 50 L ${x1} ${y1} A 50 50 0 0 1 ${x2} ${y2} Z`,
      textRotation: startAngle + angle / 2,
      color: getSegmentColor(i),
      name: city.name
    }
  })
})
</script>

<template>
  <div class="relative w-full h-full flex items-center justify-center select-none">
    <!-- External Glowing Ring -->
    <div class="absolute inset-[-10px] rounded-full border-[12px] border-primary/10 animate-pulse shadow-[0_0_30px_rgba(var(--primary),0.2)]"></div>
    
    <!-- Wheel SVG Container -->
    <div 
      class="relative w-full h-full rounded-full shadow-2xl overflow-hidden border-4 border-white"
      :style="wheelStyle"
    >
      <svg viewBox="0 0 100 100" class="w-full h-full transform-gpu">
        <g v-for="(sector, index) in sectors" :key="index">
          <path :d="sector.d" :class="sector.color" stroke="white" stroke-width="0.5" />
<text
            :x="50"
            :y="25"
            :transform="`rotate(${sector.textRotation}, 50, 50)`"
            fill="white"
            :font-size="displayCities.length > 12 ? 3.5 : 5"
            font-weight="bold"
            text-anchor="middle"
            class="drop-shadow-sm pointer-events-none"
          >
            {{ sector.name }}
          </text>
        </g>
      </svg>
    </div>

    <!-- Center Hub -->
    <div class="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white shadow-lg flex items-center justify-center z-20 border-4 border-primary/20">
      <div class="w-10 h-10 rounded-full bg-gradient-warm flex items-center justify-center text-white shadow-inner">
        <SafeIcon name="Compass" :size="20" />
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
