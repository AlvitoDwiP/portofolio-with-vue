'use client'

import { useEffect, useRef } from 'react'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProofSection />
    </>
  )
}

function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const countersRef = useRef<(HTMLSpanElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounters()
          }
        })
      },
      { threshold: 0.3 },
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const animateCounters = () => {
    countersRef.current.forEach((counter, idx) => {
      if (!counter) return
      const target = parseInt(counter.dataset.target || '0', 10)
      const duration = 1500
      const startTime = performance.now()

      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime
        const progress = Math.min(elapsed / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 3)

        if (idx === 2) {
          counter.textContent = `${(eased * target).toFixed(0)}+`
        } else {
          counter.textContent = `${(eased * target).toFixed(0)}`
        }

        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }

      requestAnimationFrame(animate)
    })
  }

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen overflow-hidden pt-24 sm:pt-28"
      aria-label="Hero section"
    >
      {/* Gradient background effect */}
      <div
        className="pointer-events-none absolute -top-40 right-0 h-[600px] w-[600px] opacity-[0.03]"
        aria-hidden="true"
      >
        <div className="h-full w-full rounded-full bg-violet-600 blur-[120px]" />
      </div>
      <div
        className="pointer-events-none absolute -bottom-40 left-0 h-[400px] w-[400px] opacity-[0.02]"
        aria-hidden="true"
      >
        <div className="h-full w-full rounded-full bg-blue-600 blur-[100px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Value Grid - 2 column asymmetric layout */}
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-16">
          {/* Left: Value proposition - dominant */}
          <div className="relative lg:col-span-7">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-xs font-medium text-slate-500">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>
              Tersedia untuk kolaborasi
            </div>

            {/* Brand statement */}
            <h1 className="text-4xl font-bold leading-[1.08] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Saya membantu{' '}
              <span className="gradient-text">produk digital</span>
              <br />
              menjadi lebih berdampak
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-slate-500">
              Software Engineer & Data Analyst dengan fokus pada pengembangan
              aplikasi yang tidak hanya berfungsi, tetapi juga memberikan value
              nyata bagi pengguna dan bisnis.
            </p>

            {/* CTA area */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="/proyek"
                className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/20 transition-all hover:bg-slate-700 hover:shadow-xl hover:shadow-slate-900/25"
              >
                Lihat Proyek
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </a>
              <a
                href="/tentang"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-medium text-slate-600 shadow-sm transition-all hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900"
              >
                Tentang Saya
              </a>
            </div>

            {/* Impact metrics */}
            <div className="mt-12 grid grid-cols-3 gap-8 border-t border-slate-100 pt-8">
              {[
                { value: '12', label: 'Proyek Selesai' },
                { value: '4', label: 'Tahun Pengalaman' },
                { value: '6', label: 'Klien & Startup' },
              ].map((stat, idx) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-slate-900 sm:text-3xl">
                    <span
                      ref={(el) => {
                        countersRef.current[idx] = el
                      }}
                      data-target={stat.value}
                    >
                      0
                    </span>
                  </div>
                  <div className="mt-1 text-xs font-medium uppercase tracking-wider text-slate-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Impact visualization - secondary */}
          <div className="hidden lg:col-span-5 lg:block">
            <div className="sticky top-28">
              <div className="relative overflow-hidden rounded-2xl border border-slate-100 bg-gradient-to-b from-slate-50 to-white p-8 shadow-sm">
                {/* Testimonial / value highlight */}
                <blockquote className="relative">
                  <svg
                    className="mb-4 h-8 w-8 text-slate-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151C7.563 6.068 6 8.789 6 11h4v10H0z" />
                  </svg>
                  <p className="text-base leading-relaxed text-slate-600">
                    &ldquo;Alvito mampu menerjemahkan kebutuhan kompleks menjadi
                    solusi teknis yang elegan. Pendekatan data-driven-nya
                    membuat setiap keputusan pengembangan memiliki dasar yang
                    kuat.&rdquo;
                  </p>
                  <footer className="mt-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-200 text-xs font-semibold text-slate-500">
                      RK
                    </div>
                    <div>
                      <div className="text-sm font-medium text-slate-900">
                        Rekan Kerja
                      </div>
                      <div className="text-xs text-slate-400">
                        Tech Lead, Startup Teknologi
                      </div>
                    </div>
                  </footer>
                </blockquote>

                {/* Tech stack quick pills */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {['React', 'Next.js', 'TypeScript', 'Python', 'SQL'].map(
                    (tech) => (
                      <span
                        key={tech}
                        className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-500"
                      >
                        {tech}
                      </span>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 flex justify-center">
          <div className="flex flex-col items-center gap-2 text-xs font-medium uppercase tracking-widest text-slate-300">
            <span>Scroll</span>
            <svg
              width="16"
              height="24"
              viewBox="0 0 16 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="animate-bounce"
            >
              <rect x="1" y="1" width="14" height="22" rx="7" />
              <circle cx="8" cy="8" r="2" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}

function ProofSection() {
  return (
    <section className="border-t border-slate-100 bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-slate-400">
            How I Work
          </span>
          <h2 className="mt-4 text-2xl font-bold text-slate-900 sm:text-3xl">
            Dari data menuju dampak
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-slate-500">
            Setiap proyek dimulai dengan pemahaman mendalam, dieksekusi dengan
            presisi, dan diukur dari hasil nyata.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              number: '01',
              title: 'Analisis & Riset',
              desc: 'Memahami masalah, data, dan konteks sebelum menulis satu baris kode.',
            },
            {
              number: '02',
              title: 'Desain & Arsitektur',
              desc: 'Membangun fondasi yang scalable dengan prinsip engineering yang solid.',
            },
            {
              number: '03',
              title: 'Eksekusi & Iterasi',
              desc: 'Mengirimkan solusi secara incremental dengan feedback loop yang cepat.',
            },
          ].map((step) => (
            <div
              key={step.number}
              className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-slate-300 hover:shadow-md"
            >
              <span className="text-sm font-bold text-violet-600">
                {step.number}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
