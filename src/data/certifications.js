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
      'Program intensif 1 minggu untuk memahami fundamental data analytics, simulasi praktik, case study, dan bagaimana data diterjemahkan menjadi keputusan bisnis.',
    skills: ['Data Analytics', 'Business Case Study', 'Career Preparation'],
    thumbnail: revouLogo,
    thumbnailAlt: 'Logo RevoU',
  },
  {
    id: 'dsarea-bootcamp-data-analytics-visualization',
    title: 'Bootcamp Data Analytics & Visualization',
    provider: 'Dsarea',
    description:
      'Bootcamp intensif dengan hasil grade A yang berfokus pada pengolahan data, visualisasi, analisis statistik, dan penyusunan insight untuk keputusan berbasis data.',
    skills: ['Excel', 'SQL', 'Python', 'Power BI'],
    thumbnail: dsareaLogo,
    thumbnailAlt: 'Logo Dsarea',
  },
  {
    id: 'associate-data-scientist',
    title: 'Associate Data Scientist',
    provider: 'Digital Talent Academy',
    description:
      'Mendalami fondasi data science untuk membangun alur analisis yang rapi, terukur, dan relevan untuk kebutuhan bisnis.',
    skills: ['Data Science', 'Analytics Thinking'],
    thumbnail: digitalTalentAcademyLogo,
    thumbnailAlt: 'Logo Digital Talent Academy',
  },
  {
    id: 'natural-language-processing',
    title: 'Natural Language Processing',
    provider: 'Udemy',
    description:
      'Mengenal konsep pemrosesan teks, workflow NLP, dan cara mengubah data bahasa menjadi insight yang dapat diolah.',
    skills: ['NLP', 'Text Processing'],
    thumbnail: udemyLogo,
    thumbnailAlt: 'Logo Udemy',
  },
  {
    id: 'microsoft-excel-advanced',
    title: 'Microsoft Excel Advanced',
    provider: 'Udemy',
    description:
      'Memperkuat teknik pengolahan data lanjutan di Excel untuk reporting, cleaning, dan analisis yang lebih efisien.',
    skills: ['Excel', 'Reporting'],
    thumbnail: udemyLogo,
    thumbnailAlt: 'Logo Udemy',
  },
  {
    id: 'fullstack-devops',
    title: 'Fullstack DevOps',
    provider: 'Udemy',
    description:
      'Menambah pemahaman tentang workflow pengembangan modern, deployment, dan kolaborasi antara development dan operations.',
    skills: ['DevOps', 'Deployment'],
    thumbnail: udemyLogo,
    thumbnailAlt: 'Logo Udemy',
  },
  {
    id: 'data-science-mastery',
    title: 'Data Science Mastery',
    provider: 'Udemy',
    description:
      'Memperluas pendekatan data science dari eksplorasi, analisis, hingga penyampaian insight yang lebih terstruktur.',
    skills: ['Data Science', 'Insight Generation'],
    thumbnail: udemyLogo,
    thumbnailAlt: 'Logo Udemy',
  },
  {
    id: 'ai-engineer-explorer',
    title: 'AI Engineer Explorer',
    provider: 'Udemy',
    description:
      'Mengeksplorasi dasar peran AI engineer, use case praktis, dan pola implementasi teknologi AI dalam produk digital.',
    skills: ['AI Fundamentals', 'Applied AI'],
    thumbnail: udemyLogo,
    thumbnailAlt: 'Logo Udemy',
  },
  {
    id: 'sql-complete-guide',
    title: 'SQL Complete Guide',
    provider: 'Udemy',
    description:
      'Mengasah kemampuan query, filtering, agregasi, dan analisis data relasional untuk kebutuhan eksplorasi maupun reporting.',
    skills: ['SQL', 'Relational Data'],
    thumbnail: udemyLogo,
    thumbnailAlt: 'Logo Udemy',
  },
  {
    id: 'python-data-analysis',
    title: 'Python Data Analysis',
    provider: 'MySkill',
    description:
      'Berfokus pada penggunaan Python untuk cleaning, eksplorasi data, dan menyiapkan dataset agar siap dianalisis lebih lanjut.',
    skills: ['Python', 'Data Analysis'],
    thumbnail: myskillLogo,
    thumbnailAlt: 'Logo MySkill',
  },
  {
    id: 'python-fundamental',
    title: 'Python Fundamental',
    provider: 'MySkill',
    description:
      'Menguatkan dasar pemrograman Python sebagai fondasi untuk automasi, analisis data, dan pengembangan workflow kerja.',
    skills: ['Python', 'Programming Basics'],
    thumbnail: myskillLogo,
    thumbnailAlt: 'Logo MySkill',
  },
  {
    id: 'data-science-data-analysis',
    title: 'Data Science & Data Analysis',
    provider: 'MySkill',
    description:
      'Menyatukan pemahaman data analysis dan data science untuk membangun keputusan yang lebih terarah dari data yang tersedia.',
    skills: ['Data Analysis', 'Decision Making'],
    thumbnail: myskillLogo,
    thumbnailAlt: 'Logo MySkill',
  },
]

export const certificationAttachment = {
  title: 'Lampiran Sertifikat',
  description: 'Lihat seluruh sertifikat lengkap melalui LinkedIn',
  ctaLabel: 'Lihat Sertifikat',
  ctaUrl: 'https://www.linkedin.com/in/alvito-dwinova-permana-90a7b82ab/details/certifications/',
}
