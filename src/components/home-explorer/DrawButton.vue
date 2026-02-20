
<script setup lang="ts">
import { Button } from '@/components/ui/button'
import SafeIcon from '@/components/common/SafeIcon.vue'

interface Props {
  isSpinning: boolean
}

defineProps<Props>()

const emit = defineEmits<{
  draw: []
}>()

const handleClick = () => {
  emit('draw')
}
</script>

<template>
  <Button
    size="lg"
    class="relative px-8 py-6 text-lg font-bold rounded-full shadow-card hover:shadow-hover transition-all"
    :disabled="isSpinning"
    @click="handleClick"
  >
    <span v-if="!isSpinning" class="flex items-center gap-2">
      <SafeIcon name="Zap" :size="20" />
      开始抽取
    </span>
    <span v-else class="flex items-center gap-2">
      <SafeIcon name="Loader2" :size="20" class="animate-spin" />
      转盘中...
    </span>
  </Button>
</template>
