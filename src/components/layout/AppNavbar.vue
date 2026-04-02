<script setup>
import { computed } from 'vue'
import { Github, Linkedin, Mail } from 'lucide-vue-next'
import { useSectionNavigation } from '@/composables/useSectionNavigation'
import BaseContainer from '@/components/ui/BaseContainer.vue'
import { siteConfig } from '@/data/site'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Proyek', href: '#proyek' },
  { label: 'Pengalaman', href: '#pengalaman' },
  { label: 'Tentang Saya', href: '#tentang-saya' },
  { label: 'Sertifikasi', href: '#sertifikasi' },
  { label: 'Kontak', href: '#kontak' },
]

const socialLinks = [
  {
    name: 'GitHub',
    href: siteConfig.githubUrl,
    icon: Github,
  },
  {
    name: 'LinkedIn',
    href: siteConfig.linkedinUrl,
    icon: Linkedin,
  },
  {
    name: 'Email',
    href: `mailto:${siteConfig.email}`,
    icon: Mail,
  },
]

const initials = computed(() =>
  siteConfig.name
    .split(' ')
    .filter(Boolean)
    .map((part) => part[0])
    .join('')
    .toUpperCase()
)

const { activeHash, createSectionHref, navigateToSection } = useSectionNavigation(
  navItems.map((item) => item.href)
)
</script>

<template>
  <header
    data-site-header
    class="sticky top-0 z-40 border-b border-white/10 bg-[rgba(15,17,21,0.8)] backdrop-blur-xl"
  >
    <BaseContainer class="py-3">
      <div class="flex min-h-12 items-center justify-between gap-3 sm:gap-5">
        <RouterLink to="/" class="flex min-w-0 items-center gap-3">
          <span
            class="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-[0.72rem] font-semibold tracking-[0.18em] text-text"
          >
            {{ initials }}
          </span>

          <div class="min-w-0">
            <p class="truncate font-display text-sm font-semibold tracking-[0.14em] text-text">
              {{ siteConfig.brandName ?? siteConfig.name }}
            </p>
            <p class="hidden truncate text-xs text-text-muted sm:block">
              {{ siteConfig.role }}
            </p>
          </div>
        </RouterLink>

        <nav class="hidden md:flex md:flex-1 md:justify-center">
          <ul class="flex items-center gap-7 text-sm text-text-muted">
            <li v-for="item in navItems" :key="item.label">
              <a
                :href="createSectionHref(item.href)"
                :aria-current="activeHash === item.href ? 'page' : undefined"
                class="transition duration-200 hover:text-text"
                :class="activeHash === item.href ? 'text-text' : 'text-text-muted'"
                @click.prevent="navigateToSection(item.href)"
              >
                {{ item.label }}
              </a>
            </li>
          </ul>
        </nav>

        <div class="flex items-center gap-1.5 sm:gap-2">
          <a
            v-for="item in socialLinks"
            :key="item.name"
            :href="item.href"
            :aria-label="item.name"
            :title="item.name"
            :target="item.href.startsWith('mailto:') ? undefined : '_blank'"
            :rel="item.href.startsWith('mailto:') ? undefined : 'noreferrer'"
            class="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-text-muted transition duration-200 hover:border-white/15 hover:bg-white/[0.06] hover:text-text sm:h-9 sm:w-9"
          >
            <component :is="item.icon" class="h-4 w-4" />
          </a>
        </div>
      </div>

      <nav class="overflow-x-auto pb-1 pt-2.5 md:hidden">
        <ul class="flex min-w-max items-center gap-4 text-sm text-text-muted">
          <li v-for="item in navItems" :key="item.label">
            <a
              :href="createSectionHref(item.href)"
              :aria-current="activeHash === item.href ? 'page' : undefined"
              class="whitespace-nowrap transition duration-200 hover:text-text"
              :class="activeHash === item.href ? 'text-text' : 'text-text-muted'"
              @click.prevent="navigateToSection(item.href)"
            >
              {{ item.label }}
            </a>
          </li>
        </ul>
      </nav>
    </BaseContainer>
  </header>
</template>
