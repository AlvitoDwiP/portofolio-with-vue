import { createAssetUrl } from '@/utils/createAssetUrl'

export const siteConfig = {
  name: 'Alvito Dwinova Permana',
  brandName: 'Alvito',
  role: 'Data Analyst & Fullstack Developer',
  location: 'Indonesia',
  email: 'vdwinova@gmail.com',
  githubUrl: 'https://github.com/AlvitoDwiP',
  linkedinUrl: 'https://www.linkedin.com/in/alvito-dwinova-permana-90a7b82ab',
  resumeUrl: createAssetUrl('alvito-dwinova-permana-cv.pdf'),
  portrait: {
    src: createAssetUrl('profile-photo-hero.jpg'),
    alt: 'Foto profesional Alvito Dwinova Permana',
  },
  eyebrow: 'Portofolio Personal',
  headline: 'Saya mengerjakan analisis data dan pengembangan aplikasi untuk kebutuhan yang jelas',
  summary:
    'Saya bekerja di persimpangan analisis data dan pengembangan aplikasi. Fokus saya adalah merapikan informasi, lalu menerjemahkannya menjadi sistem atau output yang bisa dipakai.',
  description:
    'Portofolio Alvito Dwinova Permana yang memuat proyek analisis data, pengembangan aplikasi, dan pengalaman kerja yang relevan.',
  availability: 'Terbuka untuk peran tetap, freelance, dan kolaborasi yang relevan.',
  stack: ['Python', 'SQL', 'Tableau', 'Laravel', 'Vue'],
}
