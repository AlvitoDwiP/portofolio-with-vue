export const projects = [
  {
    id: 1,
    slug: 'dashboard-insight-penjualan',
    title: 'Dashboard Insight Penjualan',
    category: 'Data Analytics',
    shortDescription:
      'Tim penjualan kesulitan melihat pola penurunan omzet bulanan. Dashboard ini merapikan data transaksi dan menampilkan metrik utama agar evaluasi bisa dilakukan lebih cepat.',
    overview:
      'Project ini berfokus pada analisis data penjualan dari beberapa file mentah yang formatnya belum konsisten. Saya membersihkan data, menyusun metrik inti, lalu menyajikannya dalam dashboard yang mudah dibaca untuk kebutuhan monitoring mingguan.',
    problem: [
      'Data transaksi tersebar di beberapa file dengan format yang tidak seragam.',
      'Tim belum memiliki ringkasan omzet, kategori, dan cabang dalam satu tampilan.',
      'Proses evaluasi mingguan masih bergantung pada rekap manual.',
    ],
    approach: [
      'Membersihkan dan menggabungkan data transaksi dengan Python dan Pandas.',
      'Menyusun query SQL untuk metrik omzet, produk, dan performa cabang.',
      'Membuat dashboard ringkas untuk monitoring mingguan.',
    ],
    tools: ['Python', 'SQL', 'Pandas', 'Tableau'],
    output:
      'Hasil akhirnya adalah dashboard penjualan dengan filter dasar dan ringkasan KPI yang bisa dipakai untuk review rutin.',
    insights:
      'Setelah data dirapikan, terlihat bahwa penurunan omzet paling sering terjadi pada kategori tertentu dan di cabang dengan repeat order rendah.',
    cover: '/images/projects/dashboard-insight-penjualan.jpg',
    links: {
      github: 'https://github.com/AlvitoDwiP/dashboard-insight-penjualan',
    },
  },
  {
    id: 2,
    slug: 'analisis-churn-pelanggan',
    title: 'Analisis Churn Pelanggan',
    category: 'Data Analytics',
    shortDescription:
      'Retensi pelanggan menurun tetapi tim belum tahu pola utamanya. Analisis ini membantu mengidentifikasi faktor yang paling sering muncul sebelum pelanggan berhenti berlangganan.',
    overview:
      'Saya mengolah dataset pelanggan untuk mencari hubungan antara churn dengan durasi langganan, jenis paket, dan frekuensi komplain. Hasil analisis dirangkum dalam visual yang sederhana agar tim non-teknis bisa langsung menggunakannya.',
    problem: [
      'Tim hanya melihat total churn tanpa segmentasi yang jelas.',
      'Data komplain dan data paket belum pernah dianalisis bersamaan.',
      'Prioritas tindak lanjut retensi masih berdasarkan asumsi.',
    ],
    approach: [
      'Menggabungkan data pelanggan, paket, dan komplain ke satu dataset analisis.',
      'Membuat segmentasi sederhana berdasarkan masa aktif dan jenis paket.',
      'Menyusun dashboard untuk melihat pola churn yang paling sering muncul.',
    ],
    tools: ['Python', 'SQL', 'Pandas', 'Looker Studio'],
    output:
      'Output project ini berupa laporan analisis dan dashboard ringkas untuk membantu prioritas tindak lanjut retensi.',
    insights:
      'Pelanggan dengan masa aktif pendek dan frekuensi komplain lebih tinggi menunjukkan risiko churn yang paling jelas.',
    cover: '/images/projects/analisis-churn-pelanggan.jpg',
    links: {
      github: 'https://github.com/AlvitoDwiP/analisis-churn-pelanggan',
      demo: 'https://lookerstudio.google.com/reporting/analisis-churn-pelanggan',
    },
  },
  {
    id: 3,
    slug: 'aplikasi-alur-inventaris',
    title: 'Aplikasi Alur Inventaris',
    category: 'Fullstack',
    shortDescription:
      'Pencatatan stok barang masih dilakukan manual dan sering terlambat diperbarui. Aplikasi ini membantu input barang masuk, barang keluar, dan melihat stok aktif dalam satu tempat.',
    overview:
      'Project ini dibuat untuk kebutuhan operasional skala kecil yang membutuhkan alur inventaris sederhana namun rapi. Fokus utamanya ada pada form input yang cepat, pencarian data, dan tampilan stok yang mudah dipahami.',
    problem: [
      'Riwayat perubahan stok sulit dilacak saat pencatatan masih di spreadsheet.',
      'Admin perlu waktu lama untuk mengecek stok terbaru sebelum pengiriman.',
      'Barang masuk dan keluar belum memiliki alur pencatatan yang konsisten.',
    ],
    approach: [
      'Membangun backend CRUD sederhana untuk data barang dan transaksi.',
      'Menyusun relasi stok masuk, stok keluar, dan stok aktif.',
      'Membuat antarmuka ringkas untuk input dan pencarian data.',
    ],
    tools: ['Vue 3', 'Node.js', 'Express', 'MySQL'],
    output:
      'Hasilnya adalah aplikasi inventaris sederhana dengan alur input stok yang lebih cepat dan riwayat transaksi yang lebih jelas.',
    insights:
      'Masalah utama bukan pada jumlah data, tetapi pada konsistensi input dan visibilitas perubahan stok harian.',
    cover: '/images/projects/aplikasi-alur-inventaris.jpg',
    links: {
      github: 'https://github.com/AlvitoDwiP/aplikasi-alur-inventaris',
      demo: 'https://aplikasi-alur-inventaris.vercel.app',
    },
  },
  {
    id: 4,
    slug: 'aplikasi-pembukuan-usaha',
    title: 'Aplikasi Pembukuan Usaha',
    category: 'Fullstack',
    shortDescription:
      'Usaha kecil sering punya catatan pemasukan dan pengeluaran yang tersebar. Web app ini merapikan pencatatan kas harian dan menampilkan ringkasan bulanan secara sederhana.',
    overview:
      'Saya membuat aplikasi pencatatan keuangan dasar untuk membantu pemilik usaha memantau arus kas tanpa sistem yang rumit. Fitur utamanya mencakup input transaksi, kategori, dan ringkasan bulanan yang bisa langsung dibaca.',
    problem: [
      'Catatan keuangan tersimpan di chat dan spreadsheet yang terpisah.',
      'Pemilik usaha sulit melihat total pengeluaran per kategori.',
      'Rekap bulanan membutuhkan pengecekan manual yang berulang.',
    ],
    approach: [
      'Merancang struktur transaksi yang sederhana untuk pemasukan dan pengeluaran.',
      'Membuat filter bulanan dan kategori untuk memudahkan pencarian.',
      'Menyusun ringkasan saldo bersih dan total transaksi per periode.',
    ],
    tools: ['Laravel', 'MySQL', 'Blade', 'Chart.js'],
    output:
      'Output project ini adalah aplikasi pencatatan kas dengan ringkasan transaksi yang bisa dipakai untuk kebutuhan operasional harian.',
    insights:
      'Kategori pengeluaran kecil yang sering berulang ternyata memberi dampak cukup besar pada total biaya bulanan.',
    cover: '/images/projects/aplikasi-pembukuan-usaha.jpg',
    links: {
      github: 'https://github.com/AlvitoDwiP/aplikasi-pembukuan-usaha',
    },
  },
  {
    id: 5,
    slug: 'platform-pelacak-lamaran',
    title: 'Platform Pelacak Lamaran',
    category: 'Fullstack',
    shortDescription:
      'Pelacakan lamaran kerja sering tercecer di banyak tab dan catatan pribadi. Project ini membantu menyimpan status aplikasi, jadwal interview, dan catatan follow-up dalam satu dashboard.',
    overview:
      'Aplikasi ini dibuat untuk kebutuhan personal agar proses pencarian kerja lebih terstruktur dan tidak mengandalkan catatan manual. Fokusnya ada pada alur input yang ringan, filtering status, dan halaman detail yang mudah dibaca.',
    problem: [
      'Informasi lowongan dan status aplikasi tersebar di banyak tempat.',
      'Jadwal interview dan follow-up mudah terlewat.',
      'Progres pencarian kerja sulit dipantau dalam satu tampilan.',
    ],
    approach: [
      'Membuat dashboard ringkas untuk daftar aplikasi dan statusnya.',
      'Menyiapkan form input cepat untuk lowongan, catatan, dan jadwal.',
      'Menyimpan riwayat aplikasi dengan backend ringan.',
    ],
    tools: ['React', 'Node.js', 'Express', 'PostgreSQL'],
    output:
      'Hasil akhirnya adalah platform kecil untuk mencatat proses lamaran dan menjaga tindak lanjut tetap teratur.',
    insights:
      'Dengan status yang konsisten, progres aplikasi jauh lebih mudah dipantau dibanding catatan manual yang tersebar.',
    cover: '/images/projects/platform-pelacak-lamaran.jpg',
    links: {
      github: 'https://github.com/AlvitoDwiP/platform-pelacak-lamaran',
      demo: 'https://platform-pelacak-lamaran.vercel.app',
    },
  },
  {
    id: 6,
    slug: 'monitor-aduan-layanan-publik',
    title: 'Monitor Aduan Layanan Publik',
    category: 'Data Analytics',
    shortDescription:
      'Data aduan layanan publik tersedia, tetapi sulit dibaca secara cepat oleh tim internal. Dashboard ini merangkum jenis aduan, waktu respons, dan tren kanal pelaporan.',
    overview:
      'Project ini menyusun ulang data aduan dari beberapa kanal agar lebih mudah dianalisis. Saya fokus pada pembersihan data, kategorisasi sederhana, dan visual monitoring yang relevan untuk evaluasi layanan.',
    problem: [
      'Data aduan datang dari beberapa kanal dengan format berbeda.',
      'Tim belum memiliki ringkasan kategori aduan dan waktu respons.',
      'Evaluasi bulanan masih bergantung pada rekap manual.',
    ],
    approach: [
      'Menstandardisasi data aduan dari beberapa sumber.',
      'Membuat agregasi berdasarkan kategori, kanal, dan waktu respons.',
      'Menyusun dashboard monitoring untuk evaluasi bulanan.',
    ],
    tools: ['Python', 'SQL', 'Pandas', 'Tableau'],
    output:
      'Output project ini berupa dashboard monitoring layanan publik dengan ringkasan metrik yang bisa dipakai untuk evaluasi bulanan.',
    insights:
      'Aduan dengan volume tinggi tidak selalu memiliki waktu respons terlama, sehingga prioritas perbaikan perlu dilihat dari dua sisi sekaligus.',
    cover: '/images/projects/monitor-aduan-layanan-publik.jpg',
    links: {
      github: 'https://github.com/AlvitoDwiP/monitor-aduan-layanan-publik',
    },
  },
]
