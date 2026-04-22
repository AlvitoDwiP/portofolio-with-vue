import { createAssetUrl } from '@/utils/createAssetUrl'

export const siteConfig = {
  name: 'Alvito Dwinova Permana',
  brandName: 'Alvito',
  role: 'Data Analyst & Fullstack Developer',
  location: 'Indonesia',
  email: 'vdwinova@gmail.com',
  githubUrl: 'https://github.com/AlvitoDwiP',
  linkedinUrl: 'https://www.linkedin.com/in/alvito-dwinova-permana-90a7b82ab',
  resumeDownloads: {
    buttonLabel: 'Unduh Resume (Data Analyst)',
    options: [
      {
        id: 'id',
        label: 'Download Indonesia',
        url: createAssetUrl('resume-data-analyst-id.pdf'),
        downloadName: 'Alvito Dwinova - Resume.pdf',
      },
      {
        id: 'en',
        label: 'Download English',
        url: createAssetUrl('resume-data-analyst-en.pdf'),
        downloadName: 'Alvito Dwinova P. - Resume.pdf',
      },
    ],
  },
  portrait: {
    src: createAssetUrl('profile-photo-hero.jpg'),
    alt: 'Foto profesional Alvito Dwinova Permana',
  },
  eyebrow: 'Portofolio',
  headline: 'Saya mengerjakan analisis data dan pengembangan aplikasi untuk kebutuhan yang jelas',
  summary:
    'Saya mengolah data menjadi insight untuk pengambilan keputusan dan membangun aplikasi untuk menyajikannya secara terstruktur.',
  description:
    'Portofolio Alvito Dwinova Permana yang memuat proyek analisis data, pengembangan aplikasi, dan pengalaman kerja yang relevan.',
  availability: 'Terbuka untuk peran tetap, freelance, dan kolaborasi yang relevan.',
  stack: ['Python', 'SQL', 'Tableau', 'Laravel', 'Vue'],
}
