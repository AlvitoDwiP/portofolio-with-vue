'use client'

import { useRef, useEffect, useState } from 'react'

const projects = [
  {
    id: 'ecommerce-analytics',
    title: 'E-Commerce Analytics Dashboard',
    shortDesc: 'Dashboard real-time yang memproses 1M+ transaksi per hari.',
    category: 'Data Engineering',
    image: 'https://placehold.co/800x600/0f172a/64748b?text=Analytics',
    tags: ['Python', 'Apache Spark', 'dbt', 'Metabase'],
    impact: 'Menurunkan latensi laporan dari 4 jam menjadi 12 detik.',
  },
  {
    id: 'smart-farm-iot',
    title: 'Smart Farm IoT Platform',
    shortDesc: 'Sistem monitoring pertanian dengan 5.000+ sensor tersebar.',
    category: 'IoT & Backend',
    image: 'https://placehold.co/800x600/0f172a/64748b?text=Farm+IoT',
    tags: ['Golang', 'InfluxDB', 'LoRaWAN', 'Grafana'],
    impact: 'Efisiensi irigasi meningkat 40% di 15 peternakan.',
  },
  {
    id: 'fintech-mobile',
    title: 'Aplikasi Fintech Mikro',
    shortDesc: 'Platform pinjaman mikro untuk UMKM dengan AI credit scoring.',
    category: 'Mobile & ML',
    image: 'https://placehold.co/800x600/0f172a/64748b?text=Fintech',
    tags: ['Flutter', 'FastAPI', 'TensorFlow', 'PostgreSQL'],
    impact: 'Menyalurkan Rp 2,5M pinjaman dalam 3 bulan pertama.',
  },
  {
    id: 'sentiment-analysis',
    title: 'Sentiment Analysis Engine',
    shortDesc: 'Analisis opini publik dari media sosial untuk riset pasar.',
    category: 'NLP & Data Science',
    image: 'https://placehold.co/800x600/0f172a/64748b?text=Sentiment',
    tags: ['Python', 'BERT', 'Kafka', 'Elasticsearch'],
    impact: '98% akurasi dalam 5 bahasa daerah.',
  },
  {
    id: 'hospital-queue',
    title: 'Sistem Antrean RS',
    shortDesc: 'Platform manajemen antrean real-time untuk 5 rumah sakit.',
    category: 'Full-Stack',
    image: 'https://placehold.co/800x600/0f172a/64748b?text=Hospital',
    tags: ['Next.js', 'WebSocket', 'Redis', 'Docker'],
    impact: 'Mengurangi waktu tunggu rata-rata dari 45 ke 12 menit.',
  },
  {
    id: 'energy-monitor',
    title: 'Energy Grid Monitor',
    shortDesc: 'Monitoring konsumsi energi gedung dengan prediksi AI.',
    category: 'Data Pipeline',
    image: 'https://placehold.co/800x600/0f172a/64748b?text=Energy',
    tags: ['Rust', 'TimescaleDB', 'React', 'WebAssembly'],
    impact: 'Hemat biaya listrik 25% untuk 12 gedung perkantoran.',
  },
]

export default function ProjectList() {
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
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      const items = sectionRef.current.querySelectorAll('[data-index]')
      items.forEach((item) => observer.observe(item))
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section className="relative bg-white py-24 sm:py-32" ref={sectionRef}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header - compact berbeda dari Featured */}
        <div className="mb-16 flex items-baseline justify-between border-b border-slate-100 pb-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              Project List
            </span>
            <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
              Proyek Lainnya
            </h2>
          </div>
          <span className="hidden text-sm text-slate-400 sm:inline">
            {projects.length} proyek
          </span>
        </div>

        {/* Project rows - staggered list, not a grid */}
        <div className="space-y-6">
          {projects.map((project, index) => {
            const isLast = index === projects.length - 1
            const isEven = index % 2 === 0
            const isVisible = visibleIndexes.has(index)

            return (
              <div
                key={project.id}
                data-index={index}
                className={`group relative transform transition-all duration-700 ${
                  isVisible
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative grid grid-cols-1 gap-0 overflow-hidden rounded-xl border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:border-slate-200 hover:shadow-md lg:grid-cols-12">
                  {/* Number accent bar */}
                  <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-violet-500/40 to-primary-500/40" />

                  {/* Image - left side for even, right for odd (visual variety) */}
                  <div
                    className={`relative aspect-[16/9] overflow-hidden bg-slate-100 lg:aspect-auto lg:col-span-5 ${
                      isEven ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    <div
                      className="h-full bg-cover bg-center transition-all duration-500 group-hover:scale-105"
                      style={{ backgroundImage: `url(${project.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-transparent to-transparent lg:from-white/60" />
                  </div>

                  {/* Content */}
                  <div
                    className={`flex flex-col justify-center p-6 lg:col-span-7 lg:p-8 ${
                      isEven ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    <span className="text-xs font-semibold uppercase tracking-wider text-violet-600">
                      {project.category}
                    </span>
                    <h3 className="mt-2 text-lg font-bold text-slate-900 sm:text-xl">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-500">
                      {project.shortDesc}
                    </p>

                    {/* Tags */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-500 ring-1 ring-slate-200/50"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Impact */}
                    <div className="mt-4 flex items-center gap-2 text-sm text-slate-600">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="text-green-500"
                      >
                        <path d="M7 1v12M3 9l4 4 4-4" />
                      </svg>
                      <span className="italic">{project.impact}</span>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
