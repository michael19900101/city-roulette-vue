
<script setup lang="ts">
import { ref } from 'vue'
import { REGION_FILTERS, CLIMATE_FILTERS, BUDGET_FILTERS } from '@/data/filter'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import SafeIcon from '@/components/common/SafeIcon.vue'

const emit = defineEmits<{
  filterChange: [filterId: string, isChecked: boolean]
}>()

const isExpanded = ref(false)
const selectedFilters = ref<Set<string>>(new Set())

const handleFilterChange = (filterId: string, isChecked: boolean) => {
  if (isChecked) {
    selectedFilters.value.add(filterId)
  } else {
    selectedFilters.value.delete(filterId)
  }
  emit('filterChange', filterId, isChecked)
}

const filterGroups = [
  REGION_FILTERS,
  CLIMATE_FILTERS,
  BUDGET_FILTERS,
]
</script>

<template>
<div class="w-full border-b bg-background/95 backdrop-blur-md sticky top-16 z-10 shadow-sm">
<div class="container mx-auto px-4">
      <Accordion type="single" collapsible class="w-full">
        <AccordionItem value="filters" class="border-0">
          <AccordionTrigger class="py-1 hover:no-underline">
            <div class="flex items-center gap-2">
              <SafeIcon name="Filter" :size="20" />
              <span class="font-semibold">筛选条件</span>
              <span v-if="selectedFilters.size > 0" class="ml-2 px-2 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium">
                {{ selectedFilters.size }}
              </span>
            </div>
          </AccordionTrigger>
          
          <AccordionContent class="pb-4">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div v-for="group in filterGroups" :key="group.id" class="space-y-3">
                <h3 class="font-semibold text-sm text-foreground">{{ group.title }}</h3>
                <div class="space-y-2">
                  <div v-for="option in group.options" :key="option.id" class="flex items-center gap-2">
                    <Checkbox 
                      :id="`filter-${option.id}`"
                      :checked="selectedFilters.has(option.id)"
                      @update:checked="(checked) => handleFilterChange(option.id, checked)"
                    />
                    <Label 
                      :for="`filter-${option.id}`"
                      class="flex items-center gap-2 cursor-pointer text-sm font-normal"
                    >
                      <SafeIcon :name="option.iconName" :size="16" class="text-muted-foreground" />
                      {{ option.label }}
                    </Label>
                  </div>
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  </div>
</template>
