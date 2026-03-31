<script setup>
import { Github, Linkedin, Mail } from 'lucide-vue-next'
import BaseContainer from '@/components/ui/BaseContainer.vue'
import { siteConfig } from '@/data/site'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Certification', href: '#certification' },
  { label: 'Contact', href: '#contact' },
]

const socialLinks = [
  {
    name: 'GitHub',
    href: '#',
    icon: Github,
  },
  {
    name: 'LinkedIn',
    href: '#',
    icon: Linkedin,
  },
  {
    name: 'Email',
    href: `mailto:${siteConfig.email}`,
    icon: Mail,
  },
]
</script>

<template>
  <header class="relative z-30 border-b border-text-muted/10 bg-canvas/88 backdrop-blur-md">
    <BaseContainer>
      <div class="flex min-h-16 flex-col justify-center gap-4 py-4 md:min-h-20 md:py-0">
        <div class="flex items-center justify-between gap-4">
          <RouterLink to="/" class="flex min-w-0 items-center gap-3">
            <span
              class="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-text-muted/10 bg-surface text-sm font-semibold text-text"
            >
              YN
            </span>

            <div class="min-w-0">
              <p class="truncate font-display text-sm font-semibold tracking-[0.18em] text-text">
                {{ siteConfig.name }}
              </p>
              <p class="truncate text-xs text-text-muted">
                {{ siteConfig.role }}
              </p>
            </div>
          </RouterLink>

          <div class="flex items-center gap-2">
            <a
              v-for="item in socialLinks"
              :key="item.name"
              :href="item.href"
              :aria-label="item.name"
              :title="item.name"
              class="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-text-muted/10 bg-surface text-text-muted transition-colors hover:text-text"
            >
              <component :is="item.icon" class="h-4 w-4" />
            </a>
          </div>
        </div>

        <nav class="overflow-x-auto pb-1 md:pb-0">
          <ul class="flex min-w-max items-center gap-5 text-sm text-text-muted md:min-w-0 md:gap-6">
            <li v-for="item in navItems" :key="item.label">
              <a :href="item.href" class="whitespace-nowrap transition-colors hover:text-text">
                {{ item.label }}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </BaseContainer>
  </header>
</template>
