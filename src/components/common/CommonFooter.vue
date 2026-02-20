
<script setup lang="ts">
import SafeIcon from '@/components/common/SafeIcon.vue'
import { Button } from '@/components/ui/button'

const currentYear = 2024

const socialLinks = [
  { icon: 'Github', href: '#', label: 'GitHub' },
  { icon: 'Twitter', href: '#', label: 'Twitter' },
  { icon: 'Mail', href: 'mailto:contact@example.com', label: '联系我们' },
]
</script>

<template>
  <footer class="mt-auto border-t bg-background">
    <div class="container mx-auto px-4 py-6">
      <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
        <!-- Copyright -->
        <p class="text-sm text-muted-foreground text-center sm:text-left">
          © {{ currentYear }} 城市转盘. 探索中国之美.
        </p>

        <!-- Social Links -->
        <div class="flex items-center gap-1">
          <Button
            v-for="social in socialLinks"
            :key="social.label"
            variant="ghost"
            size="icon"
            :aria-label="social.label"
            as="a"
            :href="social.href"
            target="_blank"
            rel="noopener noreferrer"
            class="h-8 w-8"
          >
            <SafeIcon :name="social.icon" :size="16" />
          </Button>
        </div>
      </div>
    </div>
  </footer>
</template>
