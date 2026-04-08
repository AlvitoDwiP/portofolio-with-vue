export const projects = [
  {
    id: 1,
    slug: 'global-video-game-market-analysis-dashboard',
    title: 'Global Video Game Market Analysis Dashboard',
    category: 'Data Analytics',
    shortDescription:
      'Analisis ini mengkaji struktur pasar video game global lintas platform, genre, dan region untuk memahami dominasi pasar, perbedaan preferensi regional, serta pola lifecycle platform secara deskriptif.',
    overview:
      'Project ini merupakan analisis pasar video game menggunakan data penjualan global lintas platform, genre, dan region. Fokus utamanya adalah memahami struktur pasar, perbedaan komposisi genre antar region, serta pola lifecycle platform secara deskriptif.',
    problem: [
      'Industri video game memiliki banyak platform, genre, dan pasar regional, sehingga pola dominasi pasar tidak selalu terlihat secara langsung.',
      'Perbedaan komposisi genre antar region membuat interpretasi pasar tidak cukup jika hanya melihat total penjualan global.',
      'Performa tiap platform berubah sepanjang siklus hidupnya, sehingga perlu dianalisis untuk memahami fase pertumbuhan, puncak, dan penurunannya.',
    ],
    approach: [
      'Membersihkan dan menstandardisasi dataset agar siap dipakai untuk analisis lintas platform, genre, dan region.',
      'Melakukan market structure analysis untuk melihat distribusi penjualan dan tingkat konsentrasi platform.',
      'Melakukan regional genre analysis untuk membandingkan proporsi genre antar region utama.',
      'Melakukan platform lifecycle analysis untuk mengamati pola pertumbuhan, puncak, dan penurunan performa platform dari waktu ke waktu.',
    ],
    tools: ['Python', 'pandas', 'numpy', 'matplotlib', 'Google Colab', 'Looker Studio', 'GitHub'],
    output:
      'Project ini menghasilkan notebook analisis, dataset hasil preprocessing, dataset agregasi untuk visualisasi, dashboard interaktif di Looker Studio, dan repository GitHub untuk dokumentasi proses analisis.',
    insights:
      'Analisis menunjukkan bahwa pasar video game terkonsentrasi pada beberapa platform besar, dengan PS2 sebagai platform paling dominan. Pola genre juga berbeda antar region, di mana Jepang lebih kuat pada Role-Playing, sementara region lain lebih didominasi Action. Dari sisi waktu, setiap platform memiliki pola lifecycle yang berbeda, sehingga pertumbuhan, puncak, dan penurunannya tidak bisa disamaratakan.',
    cover: '/images/projects/global-video-game-market-analysis-dashboard.jpg',
    links: {
      github: 'https://github.com/AlvitoDwiP/video-game-sales',
      demo: 'https://lookerstudio.google.com/reporting/9d6051e1-6eea-484f-af4f-5affd78f5353',
      demoLabel: 'Looker Studio',
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
    slug: 'analisis-efisiensi-ongkir-risiko-pembatalan-ecommerce-indonesia',
    title: 'Analisis Efisiensi Ongkir dan Risiko Pembatalan Transaksi E-Commerce Indonesia',
    category: 'Data Analytics',
    shortDescription:
      'Analisis biaya pengiriman, subsidi ongkir, dan risiko pembatalan transaksi untuk mengevaluasi efisiensi operasional e-commerce di Indonesia.',
    overview:
      'Proyek ini menganalisis biaya pengiriman, subsidi ongkir, dan risiko pembatalan transaksi pada operasional e-commerce di Indonesia. Analisis menggunakan 20.848 data transaksi untuk memahami efisiensi logistik, dampak dominasi program gratis ongkir, dan segmen subsidi yang paling berisiko membebani biaya operasional.',
    problem: [
      'Operasional e-commerce tidak hanya dipengaruhi volume transaksi, tetapi juga efisiensi biaya pengiriman dan kualitas transaksi yang dihasilkan.',
      'Tantangan utamanya adalah memahami struktur ongkir aktual pada transaksi berbayar dan mengukur dominasi program gratis ongkir dalam total transaksi.',
      'Segmen subsidi dengan risiko pembatalan tertinggi perlu diidentifikasi agar kebijakan ongkir dapat dievaluasi secara lebih tepat dan hemat biaya.',
    ],
    approach: [
      'Melakukan data preprocessing dan feature engineering melalui standarisasi kolom, pembuatan cancel_flag, konversi berat ke kilogram, perhitungan ongkir_per_kg, serta pemisahan transaksi free shipping dan paid shipping.',
      'Melakukan exploratory data analysis berorientasi bisnis untuk membaca struktur ongkir aktual pada transaksi berbayar dan mengevaluasi dominasi subsidi ongkir.',
      'Menyusun estimasi beban subsidi, simulasi potensi penghematan, dan segmentasi risiko berdasarkan tingkat biaya subsidi untuk mendukung evaluasi kebijakan operasional.',
    ],
    tools: ['Python', 'Pandas', 'Jupyter Notebook', 'Tableau Public', 'CSV'],
    output:
      'Proyek ini menghasilkan dataset hasil preprocessing, dataset transaksi paid shipping dan free shipping, dataset agregasi untuk visualisasi, notebook analisis, serta dashboard interaktif di Tableau Public untuk mengeksplorasi pola ongkir, subsidi, dan risiko pembatalan transaksi.',
    insights:
      'Analisis menunjukkan bahwa program gratis ongkir mendominasi 69,80% dari seluruh transaksi sehingga kebijakan subsidi memegang peran besar dalam struktur biaya operasional. Pada transaksi berbayar, median ongkir per kilogram sebesar Rp10.000.- memberi gambaran baseline biaya logistik aktual. Dari sisi risiko, segmen subsidi biaya tinggi memiliki cancellation rate 24,81% lebih tinggi dibanding segmen subsidi biaya rendah sebesar 15,26%. Temuan ini menunjukkan bahwa subsidi besar tidak selalu menghasilkan transaksi yang lebih aman justru dapat meningkatkan potensi pemborosan biaya operasional. Beban subsidi juga terkonsentrasi di Jawa Barat, Banten, dan DKI Jakarta, sehingga wilayah ini layak menjadi prioritas evaluasi kebijakan ongkir.',
    cover: '/images/projects/analisis-efisiensi-ongkir-risiko-pembatalan-ecommerce-indonesia.jpg',
    links: {
      github: 'https://github.com/AlvitoDwiP/operasional_ecommers_indo',
      demo: 'https://public.tableau.com/app/profile/alvito.dwinova.permana/vizzes',
      demoLabel: 'Tableau Public',
    },
  },
]
