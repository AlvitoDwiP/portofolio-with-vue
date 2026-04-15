<script setup>
import { computed, reactive } from 'vue'
import { Github, Linkedin } from 'lucide-vue-next'
import BaseButton from '@/components/ui/BaseButton.vue'
import BaseContainer from '@/components/ui/BaseContainer.vue'
import SectionHeader from '@/components/ui/SectionHeader.vue'
import { siteConfig } from '@/data/site'

const form = reactive({
  name: '',
  email: '',
  message: '',
})

const errors = reactive({
  name: '',
  email: '',
  message: '',
})

const quickContactLinks = [
  {
    label: 'LinkedIn',
    href: siteConfig.linkedinUrl,
    icon: Linkedin,
    ariaLabel: `Buka profil LinkedIn ${siteConfig.name}`,
  },
  {
    label: 'GitHub',
    href: siteConfig.githubUrl,
    icon: Github,
    ariaLabel: `Buka profil GitHub ${siteConfig.name}`,
  },
]


const mailtoHref = computed(() => {
  const name = form.name.trim()
  const email = form.email.trim()
  const message = form.message.trim()
  const subject = encodeURIComponent(`Pesan dari Portofolio - ${name || 'Tanpa Nama'}`)
  const body = encodeURIComponent(
    `Nama: ${name || '-'}\nEmail: ${email || '-'}\n\nPesan:\n${message || '-'}`
  )

  return `mailto:${siteConfig.email}?subject=${subject}&body=${body}`
})

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const validateForm = () => {
  errors.name = form.name.trim() ? '' : 'Nama belum diisi.'
  errors.email = emailPattern.test(form.email.trim()) ? '' : 'Gunakan alamat email yang valid.'
  errors.message = form.message.trim().length >= 10 ? '' : 'Tulis pesan minimal 10 karakter.'

  return !errors.name && !errors.email && !errors.message
}

const handleSubmit = () => {
  if (!validateForm()) {
    return
  }

  window.location.href = mailtoHref.value
}
</script>

<template>
  <section
    id="kontak"
    class="section-theme section-theme-contact section-spacing scroll-mt-24 bg-[#E8DACA]"
  >
    <BaseContainer
      v-motion
      :initial="{ opacity: 0, y: 14 }"
      :visible-once="{ opacity: 1, y: 0, transition: { duration: 360 } }"
      class="space-y-10 sm:space-y-12"
    >
      <SectionHeader
        eyebrow="Kontak"
        title="Hubungi saya untuk peran, proyek, atau diskusi yang relevan."
        :description="contactDescription"
        class="mx-auto max-w-3xl text-center"
      />

      <div
        class="contact-card section-panel mx-auto w-full max-w-[46rem] rounded-[1.75rem] p-5 sm:p-6 lg:p-7"
      >
        <div class="contact-card__glow absolute inset-x-8 top-0 h-24 blur-3xl sm:inset-x-16" />

        <div class="relative space-y-7">
          <div class="mx-auto max-w-2xl space-y-2 text-center">
            <p class="section-eyebrow text-xs font-medium uppercase tracking-[0.18em]">
              Kirim Pesan
            </p>
            <p class="section-muted mx-auto max-w-2xl text-sm leading-7 sm:text-base">
              <span class="block">Tulis pesan Anda di bawah.</span>
              <span class="block">Email akan terbuka untuk ditinjau sebelum dikirim.</span>
            </p>
          </div>

          <form class="space-y-5" novalidate @submit.prevent="handleSubmit">
            <div class="space-y-2">
              <label for="contact-name" class="contact-label">Nama</label>
              <input
                id="contact-name"
                v-model="form.name"
                type="text"
                name="name"
                autocomplete="name"
                class="contact-input"
                :aria-invalid="Boolean(errors.name)"
                :aria-describedby="errors.name ? 'contact-name-error' : undefined"
                placeholder="Nama Anda"
              />
              <p v-if="errors.name" id="contact-name-error" class="contact-error">
                {{ errors.name }}
              </p>
            </div>

            <div class="space-y-2">
              <label for="contact-email" class="contact-label">Email</label>
              <input
                id="contact-email"
                v-model="form.email"
                type="email"
                name="email"
                autocomplete="email"
                class="contact-input"
                :aria-invalid="Boolean(errors.email)"
                :aria-describedby="errors.email ? 'contact-email-error' : undefined"
                placeholder="nama@perusahaan.com"
              />
              <p v-if="errors.email" id="contact-email-error" class="contact-error">
                {{ errors.email }}
              </p>
            </div>

            <div class="space-y-2">
              <label for="contact-message" class="contact-label">Pesan</label>
              <textarea
                id="contact-message"
                v-model="form.message"
                name="message"
                rows="6"
                class="contact-input contact-textarea"
                :aria-invalid="Boolean(errors.message)"
                :aria-describedby="errors.message ? 'contact-message-error' : undefined"
                placeholder="Tulis pesan singkat Anda."
              />
              <p v-if="errors.message" id="contact-message-error" class="contact-error">
                {{ errors.message }}
              </p>
            </div>

            <div class="space-y-3 pt-1">
              <BaseButton
                type="submit"
                variant="primary"
                class="w-full justify-center py-3 text-base"
              >
                <span>Lanjutkan ke Email</span>
              </BaseButton>
              <p class="section-muted text-center text-xs leading-6 sm:text-sm">
                Email akan terbuka dengan subjek dan isi pesan.
              </p>
            </div>
          </form>

          <div class="contact-divider pt-6">
            <p class="section-muted text-center text-xs uppercase tracking-[0.16em]">
              Profil lainnya
            </p>

            <div class="mt-4 flex flex-wrap items-center justify-center gap-3">
              <a
                v-for="item in quickContactLinks"
                :key="item.label"
                :href="item.href"
                :aria-label="item.ariaLabel"
                target="_blank"
                rel="noreferrer"
                class="section-button-secondary inline-flex min-w-[9.5rem] items-center justify-center gap-2 rounded-xl border-[rgba(216,203,184,0.88)] bg-[rgba(251,246,238,0.92)] px-4 py-3 text-sm font-medium text-textPrimary transition-[transform,background-color,border-color,color,box-shadow] duration-200 hover:-translate-y-0.5 hover:border-[rgba(31,92,76,0.18)] hover:bg-[rgba(220,233,226,0.58)] hover:text-accent"
              >
                <component :is="item.icon" class="h-4 w-4" />
                <span>{{ item.label }}</span>
              </a>
            </div>

            <p class="section-muted mt-4 text-center text-sm leading-7">
              {{ siteConfig.availability }}
            </p>
          </div>
        </div>
      </div>
    </BaseContainer>
  </section>
</template>

<style scoped>
.contact-card {
  overflow: hidden;
}

.contact-card__glow {
  background: radial-gradient(circle, rgba(220, 233, 226, 0.28), transparent 72%);
  pointer-events: none;
}

.contact-label {
  display: inline-block;
  color: var(--color-text-primary);
  font-size: 0.95rem;
  font-weight: 500;
  letter-spacing: -0.015em;
}

.contact-input {
  width: 100%;
  border: 1px solid rgba(216, 203, 184, 0.9);
  border-radius: 1rem;
  background: linear-gradient(180deg, rgba(251, 246, 238, 0.98), rgba(239, 228, 211, 0.96));
  color: var(--color-text-primary);
  padding: 0.95rem 1rem;
  transition:
    border-color 200ms ease,
    box-shadow 200ms ease,
    background-color 200ms ease;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.24);
}

.contact-input:focus {
  outline: none;
  border-color: rgb(var(--section-accent-rgb) / 0.42);
  box-shadow:
    0 0 0 3px rgb(var(--section-accent-rgb) / 0.12),
    0 10px 28px rgba(62, 52, 43, 0.12);
}

.contact-textarea {
  min-height: 10rem;
  resize: vertical;
}

.contact-error {
  color: rgba(111, 101, 91, 0.94);
  font-size: 0.82rem;
  line-height: 1.5;
}

.contact-divider {
  border-top: 1px solid rgba(216, 203, 184, 0.9);
}
</style>
