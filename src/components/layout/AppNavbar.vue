<script setup>
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

const { activeHash, createSectionHref, navigateToSection } = useSectionNavigation(
  navItems.map((item) => item.href)
)
</script>

<template>
  <header
    data-site-header
    class="sticky top-0 z-40 border-b border-[color:var(--glass-border)] bg-[rgba(244,235,221,0.88)] backdrop-blur-glass"
  >
    <BaseContainer class="py-3">
      <div class="flex min-h-12 items-center justify-between gap-3 sm:gap-5">
        <nav class="hidden md:flex md:flex-1 md:justify-center">
          <ul class="flex items-center gap-7 text-sm text-text-muted">
            <li v-for="item in navItems" :key="item.label">
              <a
                :href="createSectionHref(item.href)"
                :aria-current="activeHash === item.href ? 'page' : undefined"
                class="font-medium transition duration-200 hover:text-accent"
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
            class="glass-chip glass-hover inline-flex h-8 w-8 items-center justify-center rounded-card text-textSecondary sm:h-9 sm:w-9"
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
              class="whitespace-nowrap font-medium transition duration-200 hover:text-accent"
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
