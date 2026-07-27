'use client'

import { useRef, useEffect, useState } from 'react'

const experiences = [
  {
    period: '2023 - Sekarang',
    company: 'TechCorp Indonesia',
    role: 'Senior Software Engineer',
    type: 'Full-time',
    description:
      'Memimpin tim 5 engineer dalam mengembangkan platform data real-time. Merancang arsitektur microservices yang mengurangi latensi sistem sebesar 60%.',
    highlights: [
      'Microservices architecture',
      'Team leadership',
      'System optimization',
    ],
  },
  {
    period: '2021 - 2023',
    company: 'DataVista Analytics',
    role: 'Data Engineer',
    type: 'Full-time',
    description:
      'Membangun data pipeline end-to-end yang memproses 10TB+ data harian. Mengimplementasikan data warehouse dan dashboard real-time untuk tim produk.',
    highlights: ['Data pipeline', 'ETL optimization', 'Dashboarding'],
  },
  {
    period: '2020 - 2021',
    company: 'StartupLab',
    role: 'Full-Stack Developer',
    type: 'Kontrak',
    description:
      'Mengembangkan MVP untuk 3 startup berbasis AI. Dari konsep hingga production dalam waktu 3 bulan per proyek.',
    highlights: ['Rapid prototyping', 'Full-stack MVP', 'AI integration'],
  },
  {
    period: '2019 - 2020',
    company: 'Universitas Jember',
    role: 'Asisten Peneliti',
    type: 'Magang',
    description:
      'Riset NLP untuk analisis sentimen teks Bahasa Indonesia. Mempublikasikan paper di konferensi nasional.',
    highlights: ['NLP research', 'Academic paper', 'Publication'],
  },
]

export default function Experience() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [visibleIndexes, setVisibleIndexes] = useState<Set<number>>(new Set())

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(
              (entry.target as HTMLElement).dataset.index || '0',
              10
            )
            setVisibleIndexes((prev) => new Set(prev).add(index))
          }
        })
      },
      { threshold: 0.25 }
    )

    if (sectionRef.current) {
      const items = sectionRef.current.querySelectorAll('[data-index]')
      items.forEach((item) => observer.observe(item))
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section className="relative bg-slate-50 py-24 sm:py-32" ref={sectionRef}>
      {/* Background subtle */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-primary-50/50 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header - full-width left-aligned, rhythm yang berbeda */}
        <div className="mb-20 max-w-xl">
          <span className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
            <span className="inline-block h-px w-8 bg-slate-300" />
            Pengalaman
          </span>
          <h2 className="mt-6 text-3xl font-bold text-slate-900 sm:text-4xl">
            Jejak Karir
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-500">
            Dari riset hingga production-grade engineering, setiap peran
            membentuk cara saya memecahkan masalah.
          </p>
        </div>

        {/* Timeline layout - bukan card grid */}
        <div className="relative">
          {/* Vertical line */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-px bg-gradient-to-b from-slate-200 via-slate-300 to-transparent lg:left-1/2 lg:-translate-x-px" />

          <div className="space-y-16 lg:space-y-24">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0
              const isVisible = visibleIndexes.has(index)

              return (
                <div
                  key={index}
                  data-index={index}
                  className={`relative transform transition-all duration-700 ${
                    isVisible
                      ? 'translate-y-0 opacity-100'
                      : 'translate-y-12 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="flex flex-col lg:flex-row lg:items-start">
                    {/* Period - sticky label */}
                    <div
                      className={`mb-4 lg:mb-0 lg:w-5/12 ${
                        isLeft ? 'lg:order-1 lg:text-right lg:pr-12' : 'lg:order-3 lg:text-left lg:pl-12'
                      }`}
                    >
                      <div
                        className={`inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 ${
                          isLeft ? '' : ''
                        }`}
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />
                        <span className="text-xs font-semibold text-slate-500">
                          {exp.period}
                        </span>
                      </div>
                    </div>

                    {/* Dot on timeline */}
                    <div className="absolute left-0 top-2 z-10 -translate-x-1/2 lg:left-1/2">
                      <div
                        className={`h-3 w-3 rounded-full border-2 transition-all duration-500 ${
                          isVisible
                            ? 'border-violet-500 bg-violet-500 shadow-lg shadow-violet-500/30'
                            : 'border-slate-300 bg-white'
                        }`}
                      />
                    </div>

                    {/* Content */}
                    <div
                      className={`lg:w-7/12 ${
                        isLeft ? 'lg:order-3 lg:pl-8' : 'lg:order-1 lg:pr-8'
                      }`}
                    >
                      <div className="group relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-slate-300 hover:shadow-md sm:p-8">
                        {/* Hover accent */}
                        <div className="absolute left-0 top-0 h-1 w-full origin-left scale-x-0 rounded-t-2xl bg-gradient-to-r from-violet-500 to-primary-500 transition-transform duration-500 group-hover:scale-x-100" />

                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="text-lg font-bold text-slate-900">
                            {exp.role}
                          </h3>
                          <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-500">
                            {exp.type}
                          </span>
                        </div>

                        <p className="mt-1 text-sm font-medium text-violet-600">
                          {exp.company}
                        </p>

                        <p className="mt-3 text-sm leading-relaxed text-slate-500">
                          {exp.description}
                        </p>

                        {/* Highlights */}
                        <div className="mt-4 flex flex-wrap gap-2">
                          {exp.highlights.map((item) => (
                            <span
                              key={item}
                              className="rounded-md bg-violet-50 px-2.5 py-1 text-xs font-medium text-violet-700 ring-1 ring-violet-200/50"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
