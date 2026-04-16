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
    class="sticky top-0 z-40 border-b border-[rgba(221,227,240,1)] bg-[rgba(255,255,255,0.55)] backdrop-blur-glass"
  >
    <BaseContainer class="py-3">
      <div class="flex min-h-12 items-center justify-between gap-3 sm:gap-5">
        <nav class="hidden md:flex md:flex-1 md:justify-center">
          <ul class="flex items-center gap-7 text-sm text-text-muted">
            <li v-for="item in navItems" :key="item.label">
              <a
                :href="createSectionHref(item.href)"
                :aria-current="activeHash === item.href ? 'page' : undefined"
                class="navbar-link inline-flex items-center rounded-full px-4 py-2 font-medium transition-all duration-300 ease-in-out"
                :class="
                  activeHash === item.href
                    ? 'navbar-link-active text-textPrimary'
                    : 'navbar-link-idle text-textSecondary'
                "
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
            class="navbar-icon inline-flex h-8 w-8 items-center justify-center rounded-full border border-[rgba(221,227,240,1)] bg-[rgba(239,243,251,0.94)] text-[#2D6A4F] shadow-[0_8px_18px_rgba(26,26,46,0.04),inset_0_1px_0_rgba(255,255,255,0.82)] transition-all duration-300 ease-in-out hover:scale-[1.03] hover:bg-[rgba(239,243,251,1)] hover:shadow-[0_12px_22px_rgba(26,26,46,0.06),inset_0_1px_0_rgba(255,255,255,0.9)] sm:h-9 sm:w-9"
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
              class="navbar-link inline-flex whitespace-nowrap rounded-full px-4 py-2 font-medium transition-all duration-300 ease-in-out"
              :class="
                activeHash === item.href
                  ? 'navbar-link-active text-textPrimary'
                  : 'navbar-link-idle text-textSecondary'
              "
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

<style scoped>
.navbar-link-active {
  background: rgba(239, 243, 251, 0.98);
  border: 1px solid rgba(221, 227, 240, 1);
  box-shadow:
    0 8px 20px rgba(26, 26, 46, 0.05),
    inset 0 1px 0 rgba(255, 255, 255, 0.88);
}

.navbar-link-idle {
  border: 1px solid transparent;
}

.navbar-link-idle:hover {
  background: rgba(239, 243, 251, 0.72);
  border-color: rgba(221, 227, 240, 0.92);
  color: #1a1a2e;
  box-shadow:
    0 6px 16px rgba(26, 26, 46, 0.035),
    inset 0 1px 0 rgba(255, 255, 255, 0.8);
}

.navbar-icon:hover {
  border-color: rgba(221, 227, 240, 1);
}
</style>
