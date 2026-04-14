import digitalTalentAcademyLogo from '@/assets/images/certifications/digital-talent-academy-logo.png'
import dsareaLogo from '@/assets/images/certifications/dsarea-logo.jpeg'
import myskillLogo from '@/assets/images/certifications/myskill-logo.jpg'
import revouLogo from '@/assets/images/certifications/revou-logo.png'
import udemyLogo from '@/assets/images/certifications/udemy-logo.jpg'

export const certifications = [
  {
    id: 'revou-data-analytics-mini-course',
    title: 'Data Analytics Mini Course',
    provider: 'RevoU',
    description:
      'Program singkat yang memperkuat dasar analisis data, studi kasus, dan cara membaca data dalam konteks keputusan bisnis.',
    skills: ['Data Analytics', 'Business Case Study', 'Career Preparation'],
    thumbnail: revouLogo,
    thumbnailAlt: 'Logo RevoU',
  },
  {
    id: 'dsarea-bootcamp-data-analytics-visualization',
    title: 'Bootcamp Data Analytics & Visualization',
    provider: 'Dsarea',
    description:
      'Bootcamp intensif yang membahas pengolahan data, visualisasi, analisis statistik, dan penyusunan insight yang lebih terarah.',
    skills: ['Excel', 'SQL', 'Python', 'Power BI'],
    thumbnail: dsareaLogo,
    thumbnailAlt: 'Logo Dsarea',
  },
  {
    id: 'associate-data-scientist',
    title: 'Associate Data Scientist',
    provider: 'Digital Talent Academy',
    description:
      'Program ini memperdalam fondasi data science dan cara menyusun alur analisis yang rapi untuk kebutuhan kerja.',
    skills: ['Data Science', 'Analytics Thinking'],
    thumbnail: digitalTalentAcademyLogo,
    thumbnailAlt: 'Logo Digital Talent Academy',
  },
  {
    id: 'natural-language-processing',
    title: 'Natural Language Processing',
    provider: 'Udemy',
    description:
      'Materi ini memperkenalkan pemrosesan teks, alur kerja NLP, dan cara membaca data bahasa secara lebih terstruktur.',
    skills: ['NLP', 'Text Processing'],
    thumbnail: udemyLogo,
    thumbnailAlt: 'Logo Udemy',
  },
  {
    id: 'microsoft-excel-advanced',
    title: 'Microsoft Excel Advanced',
    provider: 'Udemy',
    description:
      'Fokus pada teknik Excel lanjutan untuk cleaning, reporting, dan analisis data yang lebih rapi.',
    skills: ['Excel', 'Reporting'],
    thumbnail: udemyLogo,
    thumbnailAlt: 'Logo Udemy',
  },
  {
    id: 'fullstack-devops',
    title: 'Fullstack DevOps',
    provider: 'Udemy',
    description:
      'Materi ini memperluas pemahaman saya tentang alur pengembangan modern, deployment, dan kerja lintas pengembangan serta operasional.',
    skills: ['DevOps', 'Deployment'],
    thumbnail: udemyLogo,
    thumbnailAlt: 'Logo Udemy',
  },
  {
    id: 'data-science-mastery',
    title: 'Data Science Mastery',
    provider: 'Udemy',
    description:
      'Materi ini memperluas pendekatan saya dalam eksplorasi data, analisis, dan penyampaian insight yang lebih terarah.',
    skills: ['Data Science', 'Insight Generation'],
    thumbnail: udemyLogo,
    thumbnailAlt: 'Logo Udemy',
  },
  {
    id: 'ai-engineer-explorer',
    title: 'AI Engineer Explorer',
    provider: 'Udemy',
    description:
      'Program ini mengenalkan dasar peran AI engineer, contoh penggunaan praktis, dan pola penerapannya pada produk digital.',
    skills: ['AI Fundamentals', 'Applied AI'],
    thumbnail: udemyLogo,
    thumbnailAlt: 'Logo Udemy',
  },
  {
    id: 'sql-complete-guide',
    title: 'SQL Complete Guide',
    provider: 'Udemy',
    description:
      'Fokus pada query, filtering, agregasi, dan pembacaan data relasional untuk kebutuhan eksplorasi maupun reporting.',
    skills: ['SQL', 'Relational Data'],
    thumbnail: udemyLogo,
    thumbnailAlt: 'Logo Udemy',
  },
  {
    id: 'python-data-analysis',
    title: 'Python Data Analysis',
    provider: 'MySkill',
    description:
      'Materi ini membahas penggunaan Python untuk cleaning, eksplorasi data, dan penyiapan dataset sebelum analisis.',
    skills: ['Python', 'Data Analysis'],
    thumbnail: myskillLogo,
    thumbnailAlt: 'Logo MySkill',
  },
  {
    id: 'python-fundamental',
    title: 'Python Fundamental',
    provider: 'MySkill',
    description:
      'Program ini menguatkan dasar Python sebagai fondasi untuk automasi, analisis data, dan alur kerja yang lebih efisien.',
    skills: ['Python', 'Programming Basics'],
    thumbnail: myskillLogo,
    thumbnailAlt: 'Logo MySkill',
  },
  {
    id: 'data-science-data-analysis',
    title: 'Data Science & Data Analysis',
    provider: 'MySkill',
    description:
      'Materi ini mempertemukan dasar data analysis dan data science untuk membantu pembacaan data yang lebih terarah.',
    skills: ['Data Analysis', 'Decision Making'],
    thumbnail: myskillLogo,
    thumbnailAlt: 'Logo MySkill',
  },
]

export const certificationAttachment = {
  title: 'Lampiran Sertifikat',
  description: 'Seluruh sertifikat dapat dilihat melalui profil LinkedIn saya.',
  ctaLabel: 'Lihat Sertifikat',
  ctaUrl: 'https://www.linkedin.com/in/alvito-dwinova-permana-90a7b82ab/details/certifications/',
}
