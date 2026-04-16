<script setup>
import BaseContainer from '@/components/ui/BaseContainer.vue'
import SectionHeader from '@/components/ui/SectionHeader.vue'
import {
  Atom,
  Binary,
  Blocks,
  BrainCircuit,
  Braces,
  ChartBarBig,
  ChartColumnBig,
  ChartNoAxesColumn,
  CloudCog,
  CodeXml,
  Component,
  Database,
  Figma,
  FileCode,
  FileSpreadsheet,
  FolderCode,
  GitBranch,
  Github,
  Kanban,
  LayoutDashboard,
  MessagesSquare,
  MonitorSmartphone,
  NotebookPen,
  Paintbrush,
  Palette,
  Presentation,
  Rows3,
  ServerCog,
  Sparkles,
  SquareCode,
  TableProperties,
  Workflow,
} from 'lucide-vue-next'

const toolLogoAssets = import.meta.glob('../../assets/images/tool-logos/*', {
  eager: true,
  import: 'default',
})

const getLogo = (fileName) => toolLogoAssets[`../../assets/images/tool-logos/${fileName}`]

const createTool = (name, type, icon, options = {}) => ({ name, type, icon, ...options })

const toolGroups = [
  {
    title: 'Data & Analytics',
    direction: 'left',
    duration: '32s',
    tools: [
      createTool('Python', 'Language', SquareCode, { logo: getLogo('python2.ico') }),
      createTool('Pandas', 'Library', TableProperties, { logo: getLogo('pandas.svg') }),
      createTool('NumPy', 'Library', Binary, { logo: getLogo('numpy.svg') }),
      createTool('Scikit-learn', 'Library', BrainCircuit, { logo: getLogo('scikit.svg') }),
      createTool('Google Colab', 'Tool', NotebookPen, { logo: getLogo('googlecolab2.png') }),
      createTool('Looker Studio', 'Visualization', ChartColumnBig, {
        logo: getLogo('lookerstudio.ico'),
      }),
      createTool('Tableau', 'Visualization', ChartBarBig, { logo: getLogo('tableau.ico') }),
      createTool('Power BI', 'Visualization', ChartNoAxesColumn, { logo: getLogo('powerbi.png') }),
    ],
  },
  {
    title: 'Fullstack & Mobile',
    direction: 'right',
    duration: '40s',
    tools: [
      createTool('HTML', 'Language', CodeXml, { logo: getLogo('html.svg') }),
      createTool('CSS', 'Language', Paintbrush, { logo: getLogo('css.svg') }),
      createTool('JavaScript', 'Language', Braces, { logo: getLogo('javascript2.png') }),
      createTool('TypeScript', 'Language', FileCode, { logo: getLogo('typescript.png') }),
      createTool('PHP', 'Language', FileCode, { logo: getLogo('php.svg') }),
      createTool('Kotlin', 'Language', Binary, { logo: getLogo('kotlin2.svg') }),
      createTool('Dart', 'Language', Binary, { logo: getLogo('dart2.png') }),
      createTool('React JS', 'Framework', Atom, { logo: getLogo('react.svg') }),
      createTool('Vue.js', 'Framework', Component, { logo: getLogo('vue.svg') }),
      createTool('Tailwind CSS', 'Framework', Rows3, { logo: getLogo('tailwind2.ico') }),
      createTool('Bootstrap', 'Framework', LayoutDashboard, { logo: getLogo('bootstrap.png') }),
      createTool('Express.js', 'Framework', Workflow, { logo: getLogo('express.png') }),
      createTool('Laravel', 'Framework', Blocks, { logo: getLogo('laravel.svg') }),
      createTool('Flutter', 'Framework', MonitorSmartphone, { logo: getLogo('flutter2.png') }),
      createTool('Node.js', 'Runtime', ServerCog, { logo: getLogo('nodejs.svg') }),
      createTool('Vite', 'Tool', Sparkles, { logo: getLogo('vite.svg') }),
      createTool('Firebase', 'Tool', CloudCog, { logo: getLogo('firebase.ico') }),
      createTool('Android Studio', 'Tool', MonitorSmartphone, {
        logo: getLogo('androidstudio2.svg'),
      }),
      createTool('Visual Studio Code', 'Tool', FolderCode, { logo: getLogo('vscode.ico') }),
      createTool('MySQL', 'Database', Database, { logo: getLogo('mysql2.ico') }),
      createTool('PostgreSQL', 'Database', Database, { logo: getLogo('postgresql.png') }),
      createTool('GitHub', 'Version Control', Github, {
        logo: getLogo('github.svg'),
        logoClass: 'brightness-0 invert',
      }),
    ],
  },
  {
    title: 'Workflow & Product Tools',
    direction: 'left',
    duration: '34s',
    tools: [
      createTool('Figma', 'Tool', Figma, { logo: getLogo('figma.svg') }),
      createTool('Canva', 'Tool', Palette, { logo: getLogo('canva.ico') }),
      createTool('Microsoft Excel', 'Tool', FileSpreadsheet, { logo: getLogo('excel.png') }),
      createTool('Microsoft PowerPoint', 'Tool', Presentation, {
        logo: getLogo('powerpoint2.png'),
      }),
      createTool('Git', 'Version Control', GitBranch, { logo: getLogo('git.svg') }),
      createTool('Agile (Scrum)', 'Method', Kanban, { logo: getLogo('scrum.png') }),
      createTool('Slack', 'Tool', MessagesSquare, { logo: getLogo('slack.png') }),
    ],
  },
]

const marqueeRows = toolGroups
const tools = toolGroups.flatMap((group) => group.tools)
</script>

<template>
  <section
    id="tentang-saya"
    class="section-theme section-theme-about scroll-mt-24 pb-20 pt-20 sm:pb-24 sm:pt-24 lg:pb-28 lg:pt-28"
  >
    <div
      class="pointer-events-none absolute inset-x-0 top-0 h-32 bg-[linear-gradient(180deg,rgba(108,99,255,0.12),rgba(108,99,255,0.06)_48%,rgba(108,99,255,0))] sm:h-40"
    />
    <div
      class="pointer-events-none absolute inset-x-0 top-12 h-40 bg-[radial-gradient(circle_at_top,rgba(216,243,220,0.18),transparent_68%)] sm:top-16 sm:h-48"
    />

    <BaseContainer
      v-motion
      class="pt-4 sm:pt-6"
      :initial="{ opacity: 0, y: 14 }"
      :visible-once="{ opacity: 1, y: 0, transition: { duration: 360 } }"
    >
      <div class="space-y-10 lg:space-y-12">
        <div
          class="max-w-4xl space-y-6 rounded-[1.75rem] border border-[rgba(221,227,240,0.88)] bg-[rgba(255,255,255,0.96)] px-5 py-5 shadow-[0_18px_36px_rgba(26,26,46,0.06)] sm:px-6 sm:py-6"
        >
          <SectionHeader
            eyebrow="who am i?"
            title="Tentang Saya."
            class="mx-auto max-w-3xl text-center"
          />

          <p class="section-muted text-justify text-sm leading-8 sm:text-base">
            Saya merupakan lulusan Teknologi Informasi dari Universitas Jember dengan IPK 3.76/4.00.
            Saya berfokus pada analisis data dan pemecahan masalah berbasis data dengan pengalaman
            dalam mengolah data mentah menjadi insight yang terstruktur untuk mendukung pengambilan
            keputusan. Saya memulai dari memahami kebutuhan yang nyata kemudian merapikan informasi dan
            mengubahnya menjadi analisis atau solusi yang dapat digunakan. Dalam prosesnya, saya
            tidak hanya berhenti pada insight tetapi juga mengembangkan aplikasi berbasis web untuk
            menyajikan data secara lebih terstruktur dan mudah diakses.
          </p>

          <p class="section-muted text-justify text-sm leading-8 sm:text-base">
            Selama masa studi saya membangun dasar yang kuat dalam data analytics, machine
            learning, dan data processing melalui proyek akademik dan praktik langsung. Saya juga
            pernah berperan sebagai Asisten Dosen di Laboratorium GIS serta Asisten
            Laboratorium Smart Agriculture. Saya membantu sesi praktikum, membimbing
            mahasiswa, dan menjelaskan konsep teknis seperti sistem operasi dan penerapan IoT.
            Melalui pengalaman magang dan berbagai proyek, saya terbiasa menyusun alur kerja yang
            rapi, memahami konteks kebutuhan, serta memastikan solusi yang dibangun tetap relevan
            dan dapat digunakan secara nyata.
          </p>

          <p class="section-muted text-justify text-sm leading-8 sm:text-base">
            Saya tertarik pada peran Data Analyst dan Data Science yang dimana saya dapat menganalisis
            data, menemukan pola, dan menghasilkan insight yang berdampak. Saya juga terus
            mengembangkan kemampuan dengan mengerjakan dataset nyata, membangun proyek analisis,
            serta mengembangkan sistem sederhana yang menghubungkan data dengan aplikasi.
          </p>
        </div>

        <div
          class="glass glass-panel relative overflow-hidden rounded-[28px] border border-[rgba(221,227,240,0.88)] bg-[rgba(255,255,255,0.98)] px-4 py-5 shadow-[0_20px_60px_rgba(26,26,46,0.08)] sm:px-6 sm:py-6 lg:px-7 lg:py-7"
        >
          <div
            class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(216,243,220,0.16),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(239,243,251,0.14),transparent_28%)]"
          />

          <div class="relative">
            <div class="max-w-xl space-y-2">
              <h3 class="text-lg font-semibold tracking-[-0.03em] text-textPrimary sm:text-xl">
                Tools dan Teknologi
              </h3>
              <p class="section-muted text-sm leading-7">
                Tools yang paling sering saya gunakan saat mengolah data, membangun aplikasi, dan
                menyiapkan output kerja.
              </p>
            </div>

            <div class="mt-5 grid grid-cols-2 gap-3 sm:mt-6 sm:gap-4 md:grid-cols-3 lg:hidden">
              <article
                v-for="tool in tools"
                :key="tool.name"
                class="glass glass-panel glass-hover group relative flex min-h-[5.75rem] items-start gap-3 overflow-hidden rounded-[18px] border-[rgba(221,227,240,0.88)] bg-[rgba(255,255,255,0.98)] px-3.5 py-3.5 hover:border-[rgba(108,99,255,0.24)] hover:bg-[rgba(239,243,251,0.98)]"
              >
                <div
                  class="pointer-events-none absolute inset-x-0 top-0 h-14 bg-[radial-gradient(circle_at_top_left,rgba(216,243,220,0.14),transparent_72%)] opacity-80"
                />

                <div
                  class="glass-chip relative flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl text-[rgb(var(--section-accent-rgb)_/_0.94)] transition-colors duration-200 group-hover:bg-[rgba(216,243,220,0.72)]"
                >
                  <img
                    v-if="tool.logo"
                    :src="tool.logo"
                    :alt="`${tool.name} logo`"
                    :class="['h-5 w-5 object-contain', tool.logoClass]"
                    decoding="async"
                    loading="lazy"
                    draggable="false"
                  />
                  <component :is="tool.icon" v-else :size="18" :stroke-width="1.9" />
                </div>

                <div class="relative min-w-0 space-y-1">
                  <h4
                    class="truncate text-sm font-semibold leading-snug tracking-[-0.02em] text-textPrimary"
                  >
                    {{ tool.name }}
                  </h4>
                  <p class="text-[10px] font-medium uppercase tracking-[0.16em] text-textMuted">
                    {{ tool.type }}
                  </p>
                </div>
              </article>
            </div>

            <div class="about-tools-marquee mt-6 hidden space-y-3 lg:block">
              <div
                v-for="(row, rowIndex) in marqueeRows"
                :key="`marquee-row-${rowIndex}`"
                class="space-y-2.5"
              >
                <p
                  class="section-eyebrow px-1 text-[0.68rem] font-semibold uppercase tracking-[0.22em]"
                >
                  {{ row.title }}
                </p>

                <div class="about-tools-marquee-row">
                  <div
                    class="about-tools-marquee-track"
                    :class="
                      row.direction === 'right'
                        ? 'about-tools-marquee-track-right'
                        : 'about-tools-marquee-track-left'
                    "
                    :style="{ '--marquee-duration': row.duration }"
                  >
                    <div class="about-tools-marquee-group">
                      <article
                        v-for="tool in row.tools"
                        :key="`${rowIndex}-${tool.name}`"
                        class="glass glass-panel glass-hover about-tool-card group relative flex h-[5.75rem] w-[13.5rem] items-start gap-3 overflow-hidden rounded-[18px] border-[rgba(221,227,240,0.88)] bg-[rgba(255,255,255,0.98)] px-3.5 py-3.5 hover:border-[rgba(108,99,255,0.24)] hover:bg-[rgba(239,243,251,0.98)] xl:w-[14.25rem]"
                      >
                        <div
                          class="pointer-events-none absolute inset-x-0 top-0 h-14 bg-[radial-gradient(circle_at_top_left,rgba(216,243,220,0.14),transparent_72%)] opacity-80"
                        />
                        <div
                          class="glass-chip relative flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl text-[rgb(var(--section-accent-rgb)_/_0.94)] transition-colors duration-200 group-hover:bg-[rgba(216,243,220,0.72)]"
                        >
                          <img
                            v-if="tool.logo"
                            :src="tool.logo"
                            :alt="`${tool.name} logo`"
                            :class="['h-5 w-5 object-contain', tool.logoClass]"
                            decoding="async"
                            loading="lazy"
                            draggable="false"
                          />
                          <component :is="tool.icon" v-else :size="18" :stroke-width="1.9" />
                        </div>

                        <div class="relative min-w-0 space-y-1">
                          <h4
                            class="truncate text-sm font-semibold leading-snug tracking-[-0.02em] text-textPrimary"
                          >
                            {{ tool.name }}
                          </h4>
                          <p
                            class="text-[10px] font-medium uppercase tracking-[0.16em] text-textMuted"
                          >
                            {{ tool.type }}
                          </p>
                        </div>
                      </article>
                    </div>

                    <div class="about-tools-marquee-group marquee-duplicate" aria-hidden="true">
                      <article
                        v-for="tool in row.tools"
                        :key="`${rowIndex}-${tool.name}-clone`"
                        class="glass glass-panel about-tool-card relative flex h-[5.75rem] w-[13.5rem] items-start gap-3 overflow-hidden rounded-[18px] border-[rgba(221,227,240,0.88)] bg-[rgba(255,255,255,0.98)] px-3.5 py-3.5 xl:w-[14.25rem]"
                      >
                        <div
                          class="pointer-events-none absolute inset-x-0 top-0 h-14 bg-[radial-gradient(circle_at_top_left,rgba(216,243,220,0.14),transparent_72%)] opacity-80"
                        />
                        <div
                          class="glass-chip relative flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl text-[rgb(var(--section-accent-rgb)_/_0.94)]"
                        >
                          <img
                            v-if="tool.logo"
                            :src="tool.logo"
                            :alt="`${tool.name} logo`"
                            :class="['h-5 w-5 object-contain', tool.logoClass]"
                            decoding="async"
                            loading="lazy"
                            draggable="false"
                          />
                          <component :is="tool.icon" v-else :size="18" :stroke-width="1.9" />
                        </div>

                        <div class="relative min-w-0 space-y-1">
                          <h4
                            class="truncate text-sm font-semibold leading-snug tracking-[-0.02em] text-textPrimary"
                          >
                            {{ tool.name }}
                          </h4>
                          <p
                            class="text-[10px] font-medium uppercase tracking-[0.16em] text-textMuted"
                          >
                            {{ tool.type }}
                          </p>
                        </div>
                      </article>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BaseContainer>
  </section>
</template>

<style scoped>
.about-tools-marquee {
  position: relative;
}

.about-tools-marquee-row {
  overflow: hidden;
  mask-image: linear-gradient(to right, transparent, black 7%, black 93%, transparent);
  -webkit-mask-image: linear-gradient(to right, transparent, black 7%, black 93%, transparent);
}

.about-tools-marquee-track {
  display: flex;
  width: max-content;
  will-change: transform;
}

.about-tools-marquee-track-left {
  animation: about-tools-marquee-left var(--marquee-duration, 36s) linear infinite;
}

.about-tools-marquee-track-right {
  animation: about-tools-marquee-right var(--marquee-duration, 36s) linear infinite;
}

.about-tools-marquee-row:hover .about-tools-marquee-track {
  animation-play-state: paused;
}

.about-tools-marquee-group {
  display: flex;
  gap: 0.875rem;
  padding-right: 0.875rem;
}

.about-tool-card {
  box-shadow:
    0 10px 28px rgba(26, 26, 46, 0.12),
    inset 0 1px 0 rgba(255, 255, 255, 0.16);
}

@keyframes about-tools-marquee-left {
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    transform: translate3d(-50%, 0, 0);
  }
}

@keyframes about-tools-marquee-right {
  from {
    transform: translate3d(-50%, 0, 0);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
}

@media (prefers-reduced-motion: reduce) {
  .about-tools-marquee-row {
    overflow: visible;
    mask-image: none;
    -webkit-mask-image: none;
  }

  .about-tools-marquee-track {
    width: 100%;
    flex-wrap: wrap;
    animation: none;
    transform: none;
  }

  .about-tools-marquee-group {
    width: 100%;
    flex-wrap: wrap;
  }

  .marquee-duplicate {
    display: none;
  }
}
</style>
