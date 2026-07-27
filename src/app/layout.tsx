import type { Metadata, Viewport } from 'next'
import { Inter, Source_Sans_3, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-source-sans',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains-mono',
})

export const metadata: Metadata = {
  title: {
    default: 'Alvito Dwi Pramarta',
    template: '%s | Alvito Dwi Pramarta',
  },
  description:
    'Software Engineer & Data Analyst. Membangun insight yang jelas dan aplikasi yang dapat langsung dipakai.',
  keywords: [
    'portfolio',
    'software engineer',
    'data analyst',
    'react',
    'next.js',
    'typescript',
  ],
  authors: [{ name: 'Alvito Dwi Pramarta' }],
  creator: 'Alvito Dwi Pramarta',
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    siteName: 'Alvito Dwi Pramarta',
    title: 'Alvito Dwi Pramarta',
    description:
      'Software Engineer & Data Analyst. Membangun insight yang jelas dan aplikasi yang dapat langsung dipakai.',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="id"
      className={`${inter.variable} ${sourceSans.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen bg-white text-slate-800 antialiased">
        <Navbar />
        <main id="main-content" className="relative">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

// Navbar inline component (premium, terinspirasi Linear & Stripe)
function Navbar() {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200/60 bg-white/80 backdrop-blur-xl"
      role="banner"
    >
      <nav
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label="Navigasi utama"
      >
        {/* Logo / Nama */}
        <a
          href="/"
          className="text-sm font-semibold tracking-tight text-slate-900 transition-colors hover:text-slate-600"
        >
          Alvito<span className="text-violet-600">.</span>
        </a>

        {/* Navigasi tengah (desktop) */}
        <div className="hidden items-center gap-8 md:flex">
          {[
            { href: '/tentang', label: 'Tentang' },
            { href: '/proyek', label: 'Proyek' },
            { href: '/pengalaman', label: 'Pengalaman' },
            { href: '/kontak', label: 'Kontak' },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-500 transition-colors hover:text-slate-900"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* CTA kanan */}
        <div className="flex items-center gap-3">
          <a
            href="/kontak"
            className="hidden rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-slate-700 sm:inline-flex"
          >
            Hubungi Saya
          </a>
          {/* Mobile menu button */}
          <button
            className="inline-flex items-center justify-center rounded-md p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-900 md:hidden"
            aria-label="Buka menu navigasi"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M2.5 5h15M2.5 10h15M2.5 15h15" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  )
}

function Footer() {
  return (
    <footer className="border-t border-slate-200/60 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-slate-400">
            &copy; {new Date().getFullYear()} Alvito Dwi Pramarta. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6">
            {[
              { href: 'https://github.com/AlvitoDwiP', label: 'GitHub' },
              {
                href: 'https://linkedin.com/in/alvito-dwi-pramarta',
                label: 'LinkedIn',
              },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-slate-400 transition-colors hover:text-slate-700"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
