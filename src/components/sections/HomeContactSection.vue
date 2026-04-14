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

const contactDescription =
  'Tulis pesan singkat di bawah, lalu lanjutkan percakapan melalui aplikasi email default Anda. Website ini tidak mengirim email secara langsung.'

const mailtoHref = computed(() => {
  const name = form.name.trim()
  const email = form.email.trim()
  const message = form.message.trim()
  const subject = encodeURIComponent(`Pesan dari Portfolio - ${name || 'Tanpa Nama'}`)
  const body = encodeURIComponent(
    `Nama: ${name || '-'}\nEmail: ${email || '-'}\n\nPesan:\n${message || '-'}`
  )

  return `mailto:${siteConfig.email}?subject=${subject}&body=${body}`
})

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const validateForm = () => {
  errors.name = form.name.trim() ? '' : 'Nama lengkap masih kosong.'
  errors.email = emailPattern.test(form.email.trim()) ? '' : 'Masukkan alamat email yang valid.'
  errors.message = form.message.trim().length >= 10 ? '' : 'Pesan singkat minimal 10 karakter.'

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
  <section id="kontak" class="section-theme section-theme-contact section-spacing scroll-mt-24">
    <BaseContainer
      v-motion
      :initial="{ opacity: 0, y: 14 }"
      :visible-once="{ opacity: 1, y: 0, transition: { duration: 360 } }"
      class="space-y-10 sm:space-y-12"
    >
      <SectionHeader
        eyebrow="Kontak"
        title="Mari mulai percakapan yang jelas, singkat, dan langsung ke konteksnya."
        :description="contactDescription"
        class="mx-auto max-w-3xl text-center"
      />

      <div
        class="contact-card section-panel mx-auto w-full max-w-[46rem] rounded-[1.75rem] p-5 sm:p-6 lg:p-7"
      >
        <div class="contact-card__glow absolute inset-x-8 top-0 h-24 blur-3xl sm:inset-x-16" />

        <div class="relative space-y-7">
          <div class="space-y-2">
            <p class="section-eyebrow text-xs font-medium uppercase tracking-[0.18em]">
              Kirim Pesan
            </p>
            <p class="section-muted max-w-2xl text-sm leading-7 sm:text-base">
              Isi detail pentingnya dulu. Saat Anda menekan tombol di bawah, kami akan membuka email
              client agar Anda bisa meninjau dan mengirim pesannya sendiri.
            </p>
          </div>

          <form class="space-y-5" novalidate @submit.prevent="handleSubmit">
            <div class="space-y-2">
              <label for="contact-name" class="contact-label">Full Name</label>
              <input
                id="contact-name"
                v-model="form.name"
                type="text"
                name="name"
                autocomplete="name"
                class="contact-input"
                :aria-invalid="Boolean(errors.name)"
                :aria-describedby="errors.name ? 'contact-name-error' : undefined"
                placeholder="Nama lengkap Anda"
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
                placeholder="nama@email.com"
              />
              <p v-if="errors.email" id="contact-email-error" class="contact-error">
                {{ errors.email }}
              </p>
            </div>

            <div class="space-y-2">
              <label for="contact-message" class="contact-label">Message</label>
              <textarea
                id="contact-message"
                v-model="form.message"
                name="message"
                rows="6"
                class="contact-input contact-textarea"
                :aria-invalid="Boolean(errors.message)"
                :aria-describedby="errors.message ? 'contact-message-error' : undefined"
                placeholder="Ceritakan konteks, kebutuhan, atau ide kolaborasi Anda."
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
                Tombol ini akan membuka aplikasi email default Anda dengan subject dan isi pesan
                yang sudah disiapkan.
              </p>
            </div>
          </form>

          <div class="contact-divider pt-6">
            <p class="section-muted text-center text-xs uppercase tracking-[0.16em]">
              lihat profil saya juga di:
            </p>

            <div class="mt-4 flex flex-wrap items-center justify-center gap-3">
              <a
                v-for="item in quickContactLinks"
                :key="item.label"
                :href="item.href"
                :aria-label="item.ariaLabel"
                target="_blank"
                rel="noreferrer"
                class="section-button-secondary inline-flex min-w-[9.5rem] items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-medium transition-[transform,background-color,border-color,color,box-shadow] duration-200 hover:-translate-y-0.5"
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
  background: radial-gradient(circle, rgb(56 189 248 / 0.16), transparent 72%);
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
  border: 1px solid rgb(148 163 184 / 0.14);
  border-radius: 1rem;
  background: linear-gradient(180deg, rgb(15 23 42 / 0.72), rgb(15 23 42 / 0.52));
  color: var(--color-text-primary);
  padding: 0.95rem 1rem;
  transition:
    border-color 200ms ease,
    box-shadow 200ms ease,
    background-color 200ms ease;
  box-shadow: inset 0 1px 0 rgb(255 255 255 / 0.03);
}

.contact-input:focus {
  outline: none;
  border-color: rgb(var(--section-accent-rgb) / 0.42);
  box-shadow:
    0 0 0 3px rgb(var(--section-accent-rgb) / 0.12),
    0 10px 28px rgb(15 23 42 / 0.18);
}

.contact-textarea {
  min-height: 10rem;
  resize: vertical;
}

.contact-error {
  color: rgb(248 113 113 / 0.95);
  font-size: 0.82rem;
  line-height: 1.5;
}

.contact-divider {
  border-top: 1px solid rgb(148 163 184 / 0.12);
}
</style>
