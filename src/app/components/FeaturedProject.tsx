'use client'

import { useRef, useEffect, useState } from 'react'

const featuredProject = {
  title: 'Sistem Monitoring Kualitas Udara',
  role: 'Full-Stack Developer & Data Engineer',
  description:
    'Platform real-time yang mengintegrasikan data dari 200+ sensor IoT untuk memantau kualitas udara di seluruh kota. Menggunakan arsitektur event-driven yang memproses 50K+ data points per detik.',
  image: 'https://placehold.co/1200x800/1e293b/94a3b8?text=Air+Quality+Monitoring',
  tags: ['React', 'Node.js', 'TimescaleDB', 'MQTT', 'Docker'],
  metrics: [
    { label: 'Data Points', value: '50K+/dtk' },
    { label: 'Akurasi', value: '99.7%' },
    { label: 'Uptime', value: '99.99%' },
  ],
  gradient: 'from-violet-500 via-purple-500 to-indigo-600',
}

export default function FeaturedProject() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 })

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="relative overflow-hidden bg-slate-950 py-24 sm:py-32">
      {/* Background pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Glow */}
      <div className="pointer-events-none absolute -top-40 right-0 h-[800px] w-[800px] opacity-20">
        <div className="h-full w-full rounded-full bg-violet-600 blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Label section */}
        <div
          className={`mb-16 transform transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-400">
            Featured Project
          </span>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Karya Unggulan
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-400">
            Setiap proyek adalah studi kasus dalam memecahkan masalah nyata.
            Berikut adalah yang paling berdampak.
          </p>
        </div>

        {/* Main showcase */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Visual - dominant */}
          <div
            className={`group relative overflow-hidden rounded-2xl lg:col-span-7 ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-12 opacity-0'
            }`}
            style={{
              transitionDelay: '200ms',
              transitionDuration: '800ms',
            }}
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect()
              setMousePos({
                x: (e.clientX - rect.left) / rect.width,
                y: (e.clientY - rect.top) / rect.height,
              })
            }}
          >
            <div
              className="aspect-[3/2] bg-gradient-to-br bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{
                backgroundImage: `url(${featuredProject.image})`,
              }}
            />
            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </div>

          {/* Content */}
          <div
            className={`flex flex-col justify-center lg:col-span-5 ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-12 opacity-0'
            }`}
            style={{ transitionDelay: '400ms', transitionDuration: '800ms' }}
          >
            <span className="mb-3 text-sm font-medium text-violet-400">
              {featuredProject.role}
            </span>
            <h3 className="text-2xl font-bold text-white sm:text-3xl">
              {featuredProject.title}
            </h3>
            <p className="mt-4 text-base leading-relaxed text-slate-400">
              {featuredProject.description}
            </p>

            {/* Tags */}
            <div className="mt-6 flex flex-wrap gap-2">
              {featuredProject.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-slate-700/60 bg-slate-800/50 px-3 py-1 text-xs font-medium text-slate-300 backdrop-blur-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Metrics */}
            <div className="mt-8 grid grid-cols-3 gap-6 border-t border-slate-800 pt-8">
              {featuredProject.metrics.map((metric) => (
                <div key={metric.label}>
                  <div className="text-2xl font-bold text-white">
                    {metric.value}
                  </div>
                  <div className="mt-1 text-xs text-slate-500">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-8">
              <a
                href="/proyek"
                className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-5 py-2.5 text-sm font-medium text-white backdrop-blur-sm transition-all hover:bg-white/20"
              >
                Lihat Detail Proyek
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
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
