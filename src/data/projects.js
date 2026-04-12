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
    tools: ['Python', 'Google Colab', 'Looker Studio'],
    output:
      'Project ini menghasilkan notebook analisis, dataset hasil preprocessing, dataset agregasi untuk visualisasi, dashboard interaktif di Looker Studio, dan repository GitHub untuk dokumentasi proses analisis.',
    insights:
      'Analisis menunjukkan bahwa pasar video game terkonsentrasi pada beberapa platform besar, dengan PS2 sebagai platform paling dominan. Pola genre juga berbeda antar region, di mana Jepang lebih kuat pada Role-Playing, sementara region lain lebih didominasi Action. Dari sisi waktu, setiap platform memiliki pola lifecycle yang berbeda, sehingga pertumbuhan, puncak, dan penurunannya tidak bisa disamaratakan.',
    cover: '/images/projects/global-video-game-market-analysis-dashboard.jpg',
    links: {
      github: 'https://github.com/AlvitoDwiP/video-game-sales',
      demo: 'https://lookerstudio.google.com/reporting/9d6051e1-6eea-484f-af4f-5affd78f5353',
      demoLabel: 'Looker Studio',
      ppt: 'https://canva.link/2qgzeyf9kds8lz8',
      pptLabel: 'PPT Canva',
    },
    caseStudy: {
      heroSummary:
        'Case study ini membaca pasar video game global dari tiga sudut yang paling menentukan: struktur platform, preferensi genre per region, dan pola lifecycle tiap platform. Hasilnya adalah analisis yang membantu insight pasar menjadi lebih cepat dipahami dan lebih mudah dipakai sebagai dasar keputusan.',
      context: [
        'Pasar video game global terlihat besar dari luar, tetapi struktur di dalamnya sangat terfragmentasi. Platform, genre, dan region membentuk pola permintaan yang berbeda-beda, sehingga membaca pasar hanya dari angka penjualan total sering menghasilkan kesimpulan yang terlalu dangkal.',
        'Karena itu, analisis lintas platform, genre, dan region dibutuhkan untuk melihat di mana konsentrasi pasar terjadi, bagaimana selera pemain berubah antar wilayah, dan kapan sebuah platform berada pada fase tumbuh, matang, atau menurun.',
      ],
      problemHighlights: [
        {
          title: 'Dominasi pasar tidak langsung terlihat',
          description:
            'Banyaknya platform membuat peta persaingan terlihat ramai, padahal tidak semua platform memegang peran yang sama dalam penjualan global.',
          implication:
            'Tanpa pembacaan struktur pasar, prioritas analisis bisa bias dan keputusan strategi mudah tersebar ke terlalu banyak fokus.',
        },
        {
          title: 'Preferensi region tidak bisa disamaratakan',
          description:
            'Genre yang kuat di satu region belum tentu punya performa yang sama di region lain.',
          implication:
            'Jika hanya mengandalkan total global, peluang dan risiko di tiap pasar lokal menjadi sulit dibaca secara akurat.',
        },
        {
          title: 'Performa platform berubah sepanjang waktu',
          description:
            'Setiap platform memiliki pola pertumbuhan, puncak, dan penurunan yang berbeda.',
          implication:
            'Tanpa analisis lifecycle, pembacaan terhadap momentum pasar berisiko terlambat atau terlalu bergantung pada performa historis total.',
        },
      ],
      approachGroups: [
        {
          title: 'Data Preparation',
          description:
            'Dataset dibersihkan dan distandardisasi lebih dulu agar perbandingan lintas platform, genre, dan region bisa dibaca secara konsisten.',
        },
        {
          title: 'Market Structure Analysis',
          description:
            'Penjualan tiap platform dipetakan untuk melihat distribusi pasar dan tingkat konsentrasi di antara pemain utama.',
        },
        {
          title: 'Regional Genre Analysis',
          description:
            'Komposisi genre dibandingkan antar region utama untuk menangkap perbedaan selera pasar yang tidak terlihat dari angka global saja.',
        },
        {
          title: 'Platform Lifecycle Analysis',
          description:
            'Performa platform dibaca sepanjang waktu untuk memahami kapan sebuah platform bertumbuh, mencapai puncak, lalu menurun.',
        },
      ],
      insightHighlights: [
        {
          eyebrow: 'Market Structure',
          title: 'Pasar terkonsentrasi pada sedikit platform besar',
          description:
            'Penjualan global tidak tersebar merata. PS2 tampil sebagai platform paling dominan, menandakan bahwa kekuatan pasar terkonsentrasi pada beberapa pemain inti.',
          implication:
            'Analisis kompetisi dan peluang tidak perlu dimulai dari semua platform sekaligus, tetapi dari platform yang benar-benar mengendalikan volume pasar.',
        },
        {
          eyebrow: 'Regional Behavior',
          title: 'Preferensi genre berubah antar region',
          description:
            'Jepang menunjukkan kekuatan pada genre Role-Playing, sementara region lain cenderung lebih kuat pada Action.',
          implication:
            'Strategi konten, positioning, dan pembacaan demand perlu dibedakan per pasar, bukan digeneralisasi dari tren global.',
        },
        {
          eyebrow: 'Lifecycle Pattern',
          title: 'Setiap platform punya siklus performa yang berbeda',
          description:
            'Pertumbuhan, puncak, dan penurunan platform tidak terjadi dengan pola yang sama dari satu platform ke platform lain.',
          implication:
            'Evaluasi pasar perlu mempertimbangkan momentum waktu agar keputusan tidak hanya bergantung pada total penjualan historis.',
        },
      ],
      impact: [
        'Hasil analisis ini membantu memprioritaskan platform mana yang paling relevan untuk dibaca lebih dalam ketika menilai struktur pasar video game global.',
        'Perbedaan genre antar region memberi dasar yang lebih kuat untuk membaca kebutuhan pasar secara lokal, terutama saat mengevaluasi peluang distribusi atau positioning konten.',
        'Pembacaan lifecycle platform membantu melihat kapan momentum pasar berada pada fase tumbuh, matang, atau menurun sehingga keputusan analitis menjadi lebih kontekstual.',
      ],
      visualOutputs: [
        {
          label: 'Interactive Output',
          title: 'Looker Studio Dashboard',
          description:
            'Dashboard interaktif untuk mengeksplorasi struktur pasar, komposisi genre antar region, dan pola lifecycle platform secara cepat.',
          href: 'https://lookerstudio.google.com/reporting/9d6051e1-6eea-484f-af4f-5affd78f5353',
          ctaLabel: 'View Dashboard',
          previewType: 'dashboard',
        },
        {
          label: 'Presentation Deck',
          title: 'Canva Project Presentation',
          description:
            'Deck presentasi yang merangkum alur analisis, temuan utama, dan implikasi hasil dalam format yang lebih ringkas untuk stakeholder.',
          href: 'https://canva.link/2qgzeyf9kds8lz8',
          ctaLabel: 'View PPT',
          previewType: 'presentation',
        },
      ],
    },
  },
  {
    id: 2,
    slug: 'analisis-customer-churn-strategi-retensi-bisnis-subscription',
    title: 'Analisis Customer Churn untuk Strategi Retensi Bisnis Subscription',
    category: 'Data Analytics',
    shortDescription:
      'Analisis customer churn untuk mengidentifikasi segmen berisiko tinggi dan mendukung strategi retensi yang lebih tepat sasaran pada bisnis subscription.',
    overview:
      'Proyek ini menganalisis customer churn pada bisnis subscription menggunakan dataset publik Telco Customer Churn. Fokus utamanya adalah mengidentifikasi segmen customer dengan risiko churn tinggi dan memahami faktor layanan yang paling berkaitan dengan churn untuk mendukung strategi retensi yang lebih tepat sasaran.',
    problem: [
      'Bisnis subscription sering kehilangan customer, tetapi churn tidak terjadi secara merata pada semua segmen.',
      'Tantangan utamanya adalah mengetahui kelompok customer yang paling berisiko churn dan memahami faktor layanan yang berkaitan dengan keputusan mereka untuk berhenti berlangganan.',
      'Tanpa analisis ini, strategi retensi cenderung terlalu umum dan kurang efektif.',
    ],
    approach: [
      'Melakukan data overview dan quality check untuk memastikan dataset siap dianalisis secara konsisten.',
      'Menganalisis churn berdasarkan segmen manajerial seperti jenis kontrak, layanan internet, dan kelompok customer.',
      'Memperdalam analisis hubungan churn dengan tenure, monthly charges, TechSupport, dan OnlineSecurity untuk mengidentifikasi faktor risiko utama.',
    ],
    tools: ['Python', 'Jupyter Notebook', 'Tableau'],
    output:
      'Proyek ini menghasilkan dataset bersih, notebook analisis untuk data overview dan segmentasi churn, visualisasi utama untuk mengeksplorasi pola churn, serta executive summary yang dapat digunakan sebagai dasar rekomendasi strategi retensi.',
    insights:
      'Analisis menunjukkan bahwa churn rate keseluruhan berada di kisaran 26 persen. Risiko churn tertinggi ditemukan pada customer dengan kontrak month-to-month dan pengguna layanan fiber optic. Customer yang churn juga cenderung memiliki tenure lebih pendek dan monthly charges lebih tinggi. Selain itu, ketiadaan layanan TechSupport dan OnlineSecurity berkaitan kuat dengan peningkatan churn. Temuan ini menunjukkan bahwa customer berisiko tinggi umumnya adalah customer baru dengan kontrak jangka pendek, biaya bulanan tinggi, dan tanpa layanan pendukung.',
    cover: '/images/projects/analisis-customer-churn-strategi-retensi-bisnis-subscription.jpg',
    links: {
      github: 'https://github.com/AlvitoDwiP/churn-analysis',
    },
  },
  {
    id: 3,
    slug: 'sipanda-kph-sistem-informasi-kepegawaian-dan-monitoring-penugasan',
    title: 'SIPANDA-KPH (Sistem Informasi Kepegawaian dan Monitoring Penugasan)',
    category: 'Fullstack',
    shortDescription:
      'Aplikasi web internal untuk mengelola data kepegawaian, monitoring penugasan, pelaporan aktivitas kerja, dan kontrol akses berbasis peran dalam satu sistem terpusat.',
    overview:
      'SIPANDA-KPH adalah aplikasi web berbasis Laravel yang dirancang untuk mendukung pengelolaan data kepegawaian, penugasan, dan pelaporan aktivitas kerja dalam lingkungan KPH. Sistem ini mengintegrasikan administrasi pengguna, data pegawai, monitoring tugas, pencatatan kegiatan, dan kontrol akses berbasis peran dalam satu platform terpusat.',
    problem: [
      'Pengelolaan data kepegawaian dan aktivitas kerja sering menghadapi kendala karena data pengguna, data pegawai, dan proses pelaporan tidak terhubung dalam satu sistem yang rapi.',
      'Kondisi ini membuat verifikasi akun, pemantauan penugasan, dan pengawasan aktivitas pegawai menjadi kurang efisien.',
      'Dibutuhkan sistem internal yang mampu mengelola data, proses kerja, dan hak akses secara lebih terstruktur.',
    ],
    approach: [
      'Aplikasi dikembangkan dengan arsitektur monolitik berbasis Laravel dan pemisahan akses berdasarkan peran pengguna.',
      'Sistem dirancang untuk membedakan alur kerja admin, pegawai, dan KPH melalui middleware dan kontrol status akun.',
      'Relasi data digunakan untuk menghubungkan akun pengguna, data pegawai, riwayat kepegawaian, penugasan, dan catatan kegiatan.',
      'Lingkungan pengembangan juga disiapkan dengan Docker agar instalasi dan menjalankan layanan menjadi lebih konsisten.',
    ],
    tools: ['Laravel', 'Blade', 'MySQL', 'Docker'],
    output:
      'Proyek ini menghasilkan aplikasi web internal dengan dashboard berbasis peran untuk admin, pegawai, dan KPH. Fitur utamanya mencakup manajemen akun pengguna, pengelolaan data pegawai, referensi master, penugasan kerja, pencatatan kegiatan, notifikasi administratif, log aktivitas sistem, dan ekspor dokumen PDF untuk kebutuhan pelaporan.',
    insights:
      'Proyek ini menekankan pentingnya role-based access control dalam sistem internal yang melibatkan banyak alur kerja. Pemisahan dashboard dan middleware per peran membantu menjaga keamanan akses sekaligus membuat pengalaman pengguna lebih relevan. Integrasi modul kepegawaian, penugasan, dan pelaporan dalam satu sistem juga membantu proses administrasi dan monitoring menjadi lebih terstruktur.',
    cover: '/images/projects/sipanda-kph-sistem-informasi-kepegawaian-dan-monitoring-penugasan.jpg',
    links: {
      github: 'https://github.com/AlvitoDwiP/sipanda-kph.git',
    },
  },
  {
    id: 4,
    slug: 'acc-carbon-emissions-analysis-dashboard',
    title: 'ACC - Carbon Emissions Analysis and Prediction',
    category: 'Data Analytics',
    shortDescription:
      'Proyek data science untuk menganalisis faktor emisi CO2 di ASEAN, memetakan segmentasi negara, dan menyusun prediksi tren emisi.',
    overview:
      'ACC - Carbon Emissions Analysis and Prediction merupakan proyek final dari kegiatan MBKM-SIB di Zenius. ACC sendiri merupakan singkatan dari Asian Carbon Counter. Proyek ini berfokus pada analisis emisi CO2 di negara-negara ASEAN pada periode 1900 sampai 2020 untuk memahami pola emisi, mengidentifikasi faktor yang berkaitan dengan cumulative CO2, memetakan segmentasi negara, dan menyusun prediksi awal tren emisi pada beberapa tahun berikutnya. Analisis dilakukan menggunakan Python di Google Colab, lalu hasil utamanya divisualisasikan dalam dashboard agar insight lebih mudah dipahami dan dieksplorasi.',
    problem: [
      'Emisi CO2 di kawasan ASEAN terus berkembang seiring pertumbuhan penduduk, aktivitas ekonomi, dan perubahan penggunaan lahan.',
      'Tantangan utamanya adalah memahami faktor mana yang paling berkaitan dengan cumulative CO2 dan melihat perbedaan pola emisi antar negara.',
      'Tanpa analisis yang terstruktur, data historis emisi sulit diterjemahkan menjadi insight yang relevan maupun pembacaan awal terhadap tren emisi di masa dekat.',
    ],
    approach: [
      'Mengumpulkan data dari sumber publik lalu memfilter negara-negara ASEAN untuk periode 1900 sampai 2020, termasuk penanganan missing values, penyederhanaan variabel, dan capping outlier agar data lebih stabil untuk dianalisis.',
      'Melakukan exploratory data analysis untuk melihat distribusi data, pola hubungan antar variabel, dan karakteristik emisi pada masing-masing negara.',
      'Melakukan correlation analysis untuk mengidentifikasi faktor yang paling berkaitan dengan cumulative CO2.',
      'Membangun model multiple linear regression untuk melihat kemampuan beberapa variabel dalam menjelaskan cumulative CO2, lalu melanjutkannya dengan clustering dan proyeksi awal tren emisi periode 2021 sampai 2025.',
    ],
    tools: ['Python', 'Google Colab', 'Scikit-learn', 'Looker Studio'],
    output:
      'Proyek ini menghasilkan dataset yang telah dibersihkan, visualisasi exploratory data analysis, analisis korelasi antar variabel, model untuk membaca hubungan variabel terhadap cumulative CO2, segmentasi negara berdasarkan tingkat emisi, prediksi awal tren emisi untuk beberapa tahun setelah 2020, serta dashboard interaktif di Looker Studio untuk mendukung eksplorasi hasil secara visual.',
    insights:
      'Analisis menunjukkan bahwa cumulative CO2 di negara-negara ASEAN paling kuat berkaitan dengan population, total CO2 emissions, dan land use. Model regresi juga menunjukkan bahwa faktor waktu ikut berperan dalam menjelaskan perubahan emisi. Selain itu, hasil clustering membagi negara ASEAN ke dalam dua kelompok utama, yaitu negara dengan level emisi rendah dan tinggi, yang menunjukkan bahwa distribusi emisi di kawasan ini tidak merata. Temuan ini membantu membaca emisi karbon ASEAN tidak hanya sebagai tren historis, tetapi juga sebagai pola yang dipengaruhi faktor demografis, aktivitas energi, dan perubahan penggunaan lahan.',
    cover: '/images/projects/acc-carbon-emissions-analysis-dashboard.jpg',
    links: {
      demo: 'https://lookerstudio.google.com/reporting/87cd1be2-40f6-4b0d-bc5e-974eb00e00c3',
      demoLabel: 'Looker Studio',
      notebook:
        'https://colab.research.google.com/drive/1_mOJTAeSPt1V0neNWeSkZKvGqCnNI8qI?usp=sharing',
      notebookLabel: 'Google Colab',
    },
  },
  {
    id: 5,
    slug: 'sistem-operasional-hair-studio-transaksi-payroll-dan-laporan',
    title: 'Sistem Operasional Hair Studio',
    category: 'Fullstack',
    shortDescription:
      'Aplikasi web internal untuk mengelola transaksi, payroll, komisi, stok, dan laporan operasional hair studio dalam satu sistem terpusat.',
    overview:
      'Proyek ini adalah aplikasi web berbasis Laravel 11 yang dirancang untuk membantu pemilik hair studio mengelola operasional usaha dalam satu sistem terpusat. Fungsinya mencakup transaksi harian, payroll pegawai tetap dan freelance, komisi, pengeluaran, stok produk, serta laporan usaha. Sistem ini difokuskan pada kebutuhan single owner agar alur operasional lebih sederhana, rapi, dan mudah dikontrol.',
    problem: [
      'Operasional hair studio skala kecil sering masih tersebar di catatan manual, chat, atau spreadsheet, sehingga pencatatan usaha menjadi tidak konsisten.',
      'Kondisi ini membuat transaksi harian sulit direkap, komisi pegawai rawan salah hitung, payroll sulit ditutup per periode, stok produk mudah tidak sinkron, dan laporan usaha membutuhkan waktu lebih lama untuk disusun.',
      'Dibutuhkan sistem internal yang mampu menyatukan proses operasional tersebut dalam satu alur yang lebih tertata.',
    ],
    approach: [
      'Aplikasi ini dibangun dengan pendekatan yang menyesuaikan kebutuhan usaha kecil. Transaksi utama dicatat melalui daily batch input, bukan POS real-time, agar lebih sederhana dan relevan dengan pola operasional hair studio.',
      'Setiap item transaksi disimpan sebagai historical snapshot untuk menjaga integritas data lama saat master data berubah.',
      'Payroll dirancang dengan konsep open dan closed period agar transaksi yang sudah final tidak mudah diubah.',
      'Perhitungan komisi dan stok diproses otomatis saat transaksi dicatat, sementara logika bisnis utama dipisahkan ke service layer agar kode lebih terstruktur dan mudah dirawat.',
    ],
    tools: [
      'PHP',
      'Laravel',
      'Blade',
      'Laravel Breeze',
      'Tailwind CSS',
      'Alpine.js',
      'Vite',
      'MySQL',
    ],
    output:
      'Proyek ini menghasilkan aplikasi internal yang memungkinkan owner mengelola pegawai, layanan, produk, pengeluaran, transaksi harian, komisi, payroll, serta laporan operasional dalam satu sistem. Aplikasi juga mendukung ekspor laporan ke CSV untuk kebutuhan rekap dan evaluasi usaha.',
    insights:
      'Proyek ini menunjukkan bahwa sistem operasional untuk usaha kecil tidak selalu membutuhkan arsitektur yang kompleks, tetapi harus kuat pada akurasi proses bisnis. Keputusan menggunakan historical snapshot menjadi bagian penting karena menjaga konsistensi data transaksi dan payroll dari perubahan master data. Pendekatan single owner juga membuat alur autentikasi dan permission lebih sederhana, sehingga sistem lebih fokus pada kebutuhan operasional inti. Selain itu, pemisahan logika ke service layer menunjukkan bahwa aplikasi ini dirancang lebih dari sekadar CRUD, karena sudah mengakomodasi aturan bisnis yang spesifik.',
    cover: '/images/projects/sistem-operasional-hair-studio-transaksi-payroll-dan-laporan.jpg',
    links: {
      github: 'https://github.com/AlvitoDwiP/barber-management.git',
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
    tools: ['Python', 'Pandas', 'Jupyter Notebook', 'Tableau'],
    output:
      'Proyek ini menghasilkan dataset hasil preprocessing, dataset transaksi paid shipping dan free shipping, dataset agregasi untuk visualisasi, notebook analisis, serta dashboard interaktif di Tableau Public untuk mengeksplorasi pola ongkir, subsidi, dan risiko pembatalan transaksi.',
    insights:
      'Analisis menunjukkan bahwa program gratis ongkir mendominasi 69,80% dari seluruh transaksi sehingga kebijakan subsidi memegang peran besar dalam struktur biaya operasional. Pada transaksi berbayar, median ongkir per kilogram sebesar Rp10.000.- memberi gambaran baseline biaya logistik aktual. Dari sisi risiko, segmen subsidi biaya tinggi memiliki cancellation rate 24,81% lebih tinggi dibanding segmen subsidi biaya rendah sebesar 15,26%. Temuan ini menunjukkan bahwa subsidi besar tidak selalu menghasilkan transaksi yang lebih aman justru dapat meningkatkan potensi pemborosan biaya operasional. Beban subsidi juga terkonsentrasi di Jawa Barat, Banten, dan DKI Jakarta, sehingga wilayah ini layak menjadi prioritas evaluasi kebijakan ongkir.',
    cover: '/images/projects/analisis-efisiensi-ongkir-risiko-pembatalan-ecommerce-indonesia.jpg',
    links: {
      github: 'https://github.com/AlvitoDwiP/operasional_ecommers_indo',
      demo: 'https://public.tableau.com/views/E-commersShipping/Dashboard2?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link',
      demoLabel: 'Tableau Public',
    },
  },
  {
    id: 7,
    slug: 'findfe-aplikasi-mobile-pencarian-mitra-dan-informasi-produk-kopi',
    title: 'FindFe - Aplikasi Mobile Pencarian Mitra dan Informasi Produk Kopi',
    category: 'Fullstack',
    displayCategory: 'MOBILE APPS',
    cardVariant: 'mobile',
    cardBadgeLabel: 'APP',
    cardCoverLabel: 'Mobile Product',
    cardSummaryLabel: 'MOBILE APPS',
    shortDescription:
      'Aplikasi mobile berbasis Flutter untuk mencari mitra usaha kopi, mengakses informasi produk, dan menjelajahi data berbasis lokasi dalam satu platform.',
    overview:
      'Project ini merupakan tugas akhir dari mata kuliah Pemrograman Berbasis Mobile. FindFe adalah aplikasi mobile berbasis Flutter yang dirancang untuk membantu pengguna mencari mitra usaha di bidang kopi, mengakses informasi produk kopi, dan mengelola data terkait dalam satu platform. Aplikasi ini menggabungkan fitur pencarian mitra, pengelolaan data, informasi lokasi, dan konten edukatif agar proses pencarian dan eksplorasi informasi kopi menjadi lebih praktis dan terstruktur.',
    problem: [
      'Pengguna di bidang kopi sering menghadapi kesulitan saat mencari mitra usaha atau sumber informasi yang relevan dalam satu tempat.',
      'Data produk kopi juga sering dikelola secara terpisah, sehingga kurang efisien untuk dipantau.',
      'Selain itu, informasi lokasi mitra dan konten edukatif seputar kopi belum selalu mudah diakses melalui satu aplikasi yang sederhana dan terintegrasi.',
    ],
    approach: [
      'Aplikasi ini dikembangkan dengan pendekatan mobile app terintegrasi yang berfokus pada kebutuhan pengguna.',
      'Prosesnya dimulai dari perancangan alur aplikasi yang sederhana, lalu dilanjutkan dengan pembangunan antarmuka menggunakan Flutter.',
      'Sistem kemudian diintegrasikan dengan Firebase untuk autentikasi dan penyimpanan data, serta dilengkapi fitur lokasi dan peta untuk membantu pencarian mitra.',
      'Fitur artikel juga ditambahkan untuk memberi nilai informasi tambahan di luar fungsi pencarian dan pengelolaan data.',
    ],
    tools: ['Flutter', 'Firebase', 'Flutter Map', 'Dart'],
    output:
      'Proyek ini menghasilkan aplikasi mobile yang mendukung login dan registrasi pengguna, pencarian dan penelusuran data mitra kopi, pengelolaan data produk kopi, akses informasi berbasis lokasi, konten artikel seputar kopi, serta penyimpanan data online melalui Firebase.',
    insights:
      'Proyek ini menunjukkan bahwa kebutuhan pengguna di bidang kopi tidak berhenti pada pencarian mitra, tetapi juga membutuhkan akses data, lokasi, dan informasi pendukung dalam satu alur yang ringkas. Nilai utama aplikasi bukan pada banyaknya fitur, tetapi pada integrasi fungsi pencarian, informasi, dan pengelolaan data dalam satu pengalaman mobile yang sederhana dan mudah digunakan.',
    cover: '/images/projects/findfe-aplikasi-mobile-pencarian-mitra-dan-informasi-produk-kopi.jpg',
    links: {
      github: 'https://github.com/AlvitoDwiP/AplikasiCariMitraKopi-main',
    },
  },
]
