
<script setup lang="ts">
import { computed } from 'vue'
import type { CityDetailModel } from '@/data/city'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import SafeIcon from '@/components/common/SafeIcon.vue'

interface Props {
  city: CityDetailModel
  isVisible: boolean
}

const props = defineProps<Props>()

const emit = defineEmits<{
  navigateDetail: []
}>()

const ratingStars = computed(() => {
  return Math.round(props.city.rating)
})
</script>

<template>
  <Card 
class="overflow-hidden transition-all duration-700 shadow-hover"
    :class="isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'"
  >
    <div class="grid grid-cols-1 md:grid-cols-3 gap-0">
      <!-- Image -->
      <div class="md:col-span-1 h-48 md:h-auto overflow-hidden">
        <img 
          :src="city.previewImageUrl"
          :alt="city.name"
          class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      <!-- Content -->
      <div class="md:col-span-2 flex flex-col">
        <CardHeader class="pb-3">
          <div class="flex items-start justify-between gap-4">
            <div class="flex-1">
              <CardTitle class="text-2xl mb-2">{{ city.name }}</CardTitle>
              <CardDescription class="text-base">{{ city.shortDescription }}</CardDescription>
            </div>
            <Badge variant="secondary" class="whitespace-nowrap">
              {{ city.region }}
            </Badge>
          </div>
        </CardHeader>
        
        <CardContent class="flex-1 flex flex-col justify-between">
          <!-- Rating -->
          <div class="flex items-center gap-2 mb-4">
            <div class="flex gap-1">
              <SafeIcon 
                v-for="i in 5"
                :key="i"
                name="Star"
                :size="16"
                :class="i <= ratingStars ? 'fill-accent text-accent' : 'text-muted-foreground'"
              />
            </div>
            <span class="text-sm font-semibold">{{ city.rating }}</span>
          </div>
          
          <!-- Description -->
          <p class="text-sm text-muted-foreground mb-4 line-clamp-2">
            {{ city.fullDescription }}
          </p>
          
          <!-- Action Button -->
          <Button 
            class="w-full md:w-auto"
            @click="emit('navigateDetail')"
          >
            <SafeIcon name="ArrowRight" :size="16" />
            查看详情
          </Button>
        </CardContent>
      </div>
    </div>
  </Card>
</template>
