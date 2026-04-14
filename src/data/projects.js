export const projects = [
  {
    id: 1,
    slug: 'global-video-game-market-analysis-dashboard',
    title: 'Global Video Game Market Analysis Dashboard',
    category: 'Data Analytics',
    shortDescription:
      'Analisis pasar video game global untuk melihat platform yang dominan, perbedaan selera genre antarwilayah, dan pola siklus hidup tiap platform.',
    overview:
      'Proyek ini membaca pasar video game global dari data penjualan lintas platform, genre, dan wilayah. Fokusnya adalah melihat siapa yang paling dominan, bagaimana preferensi genre berubah antarwilayah, dan kapan sebuah platform mulai tumbuh, mencapai puncak, lalu menurun.',
    problem: [
      'Pasar video game terlihat besar, tetapi strukturnya tidak mudah dibaca hanya dari total penjualan.',
      'Setiap wilayah memiliki komposisi genre yang berbeda, sehingga angka global saja tidak cukup untuk menjelaskan perilaku pasar.',
      'Performa platform berubah dari waktu ke waktu, sehingga momentum pasar perlu dibaca dalam konteks siklus hidupnya.',
    ],
    approach: [
      'Membersihkan dan menstandardisasi dataset agar perbandingan antarplatform, genre, dan wilayah bisa dibaca dengan konsisten.',
      'Menganalisis struktur pasar untuk melihat distribusi penjualan dan konsentrasi platform utama.',
      'Membandingkan komposisi genre di tiap wilayah untuk melihat perbedaan selera pasar.',
      'Membaca pola pertumbuhan, puncak, dan penurunan platform dari waktu ke waktu.',
    ],
    tools: ['Python', 'Google Colab', 'Looker Studio'],
    output:
      'Proyek ini menghasilkan notebook analisis, dataset yang sudah dibersihkan, data agregat untuk visualisasi, dashboard interaktif di Looker Studio, dan dokumentasi proses di GitHub.',
    insights:
      'Hasil analisis menunjukkan bahwa pasar video game terkonsentrasi pada beberapa platform besar, dengan PS2 sebagai platform paling dominan. Preferensi genre juga berbeda antarwilayah. Jepang lebih kuat pada Role-Playing, sedangkan wilayah lain lebih didominasi Action. Dari sisi waktu, tiap platform memiliki pola siklus hidup yang berbeda, sehingga pembacaan pasar tidak bisa disamaratakan.',
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
        'Case study ini membaca pasar video game global dari tiga sisi yang paling menentukan, yaitu struktur platform, preferensi genre per wilayah, dan pola siklus hidup tiap platform. Hasilnya membantu pembacaan pasar menjadi lebih jelas dan lebih mudah dipakai.',
      context: [
        'Pasar video game global terlihat sangat besar, tetapi pola di dalamnya tidak sederhana. Platform, genre, dan wilayah membentuk perilaku pasar yang berbeda, sehingga angka total penjualan sering menutupi hal yang lebih penting.',
        'Karena itu, analisis perlu melihat pasar dari beberapa sudut sekaligus. Dengan cara ini, konsentrasi pasar, perbedaan selera wilayah, dan momentum tiap platform dapat dibaca dalam konteks yang lebih utuh.',
      ],
      problemHighlights: [
        {
          title: 'Dominasi pasar tidak langsung terlihat',
          description:
            'Banyaknya platform membuat persaingan tampak merata, padahal volume pasar hanya terkonsentrasi pada beberapa nama besar.',
          implication:
            'Tanpa pembacaan struktur pasar, fokus analisis mudah menyebar ke terlalu banyak platform yang dampaknya kecil.',
        },
        {
          title: 'Preferensi wilayah tidak sama',
          description:
            'Genre yang kuat di satu wilayah belum tentu menunjukkan performa yang sama di wilayah lain.',
          implication:
            'Jika hanya mengandalkan angka global, peluang dan risiko di tiap pasar lokal menjadi kurang terlihat.',
        },
        {
          title: 'Performa platform berubah dari waktu ke waktu',
          description: 'Setiap platform memiliki fase tumbuh, puncak, dan penurunan yang berbeda.',
          implication:
            'Tanpa melihat siklus hidup, pembacaan momentum pasar mudah terlambat atau terlalu bergantung pada angka historis.',
        },
      ],
      approachGroups: [
        {
          title: 'Data Preparation',
          description:
            'Dataset dirapikan lebih dulu agar perbandingan lintas platform, genre, dan wilayah bisa dibaca dengan dasar yang konsisten.',
        },
        {
          title: 'Market Structure Analysis',
          description:
            'Distribusi penjualan tiap platform dibaca untuk melihat siapa yang benar-benar memegang porsi pasar terbesar.',
        },
        {
          title: 'Regional Genre Analysis',
          description:
            'Komposisi genre dibandingkan antarwilayah untuk melihat perbedaan selera yang tidak terlihat dari total global.',
        },
        {
          title: 'Platform Lifecycle Analysis',
          description:
            'Performa platform dibaca sepanjang waktu untuk melihat fase pertumbuhan, puncak, dan penurunannya.',
        },
      ],
      insightHighlights: [
        {
          eyebrow: 'Struktur Pasar',
          title: 'Pasar terkonsentrasi pada sedikit platform besar',
          description:
            'Penjualan global tidak tersebar merata. Sebagian besar volume pasar hanya berada pada beberapa platform utama, dengan PS2 sebagai yang paling dominan.',
          implication:
            'Pembacaan kompetisi lebih efektif bila dimulai dari platform yang benar-benar menggerakkan pasar.',
        },
        {
          eyebrow: 'Perilaku Wilayah',
          title: 'Selera genre berubah antarwilayah',
          description:
            'Jepang menunjukkan kekuatan pada genre Role-Playing, sementara wilayah lain cenderung lebih kuat pada Action.',
          implication:
            'Strategi konten atau pembacaan permintaan perlu dibedakan per pasar, bukan disamaratakan dari tren global.',
        },
        {
          eyebrow: 'Pola Waktu',
          title: 'Setiap platform punya ritme performa yang berbeda',
          description: 'Tidak semua platform tumbuh, memuncak, dan menurun dalam pola yang sama.',
          implication:
            'Evaluasi pasar akan lebih akurat jika mempertimbangkan momentum waktu, bukan hanya total penjualan.',
        },
      ],
      impact: [
        'Analisis ini membantu menentukan platform mana yang paling layak menjadi fokus saat membaca struktur pasar video game global.',
        'Perbedaan genre antarwilayah memberi dasar yang lebih kuat untuk memahami kebutuhan pasar secara lokal.',
        'Pembacaan siklus hidup platform membantu melihat apakah pasar sedang tumbuh, stabil, atau mulai menurun.',
      ],
    },
  },
  {
    id: 2,
    slug: 'analisis-customer-churn-strategi-retensi-bisnis-subscription',
    title: 'Analisis Customer Churn untuk Strategi Retensi Bisnis Subscription',
    category: 'Data Analytics',
    shortDescription:
      'Analisis customer churn pada bisnis subscription untuk menemukan segmen dengan risiko tertinggi dan faktor layanan yang paling berpengaruh.',
    overview:
      'Proyek ini menganalisis customer churn pada bisnis subscription menggunakan dataset Telco Customer Churn. Fokus utamanya adalah melihat segmen pelanggan yang paling rentan berhenti berlangganan dan memahami faktor layanan yang paling berkaitan dengan keputusan tersebut.',
    problem: [
      'Churn tidak terjadi merata pada seluruh pelanggan, sehingga pendekatan retensi yang terlalu umum sering kurang tepat.',
      'Perusahaan perlu mengetahui kelompok pelanggan yang paling berisiko agar intervensinya lebih terarah.',
      'Tanpa pembacaan faktor layanan yang relevan, strategi retensi mudah berhenti pada asumsi.',
    ],
    approach: [
      'Melakukan quality check agar data siap dibaca dengan konsisten.',
      'Menganalisis churn berdasarkan kontrak, layanan internet, dan kelompok pelanggan.',
      'Membandingkan churn dengan tenure, monthly charges, TechSupport, dan OnlineSecurity untuk melihat faktor yang paling kuat.',
    ],
    tools: ['Python', 'Jupyter Notebook', 'Tableau'],
    output:
      'Proyek ini menghasilkan dataset bersih, notebook analisis untuk segmentasi churn, visualisasi utama, dan executive summary yang dapat dipakai sebagai dasar evaluasi retensi.',
    insights:
      'Analisis menunjukkan churn rate berada di kisaran 26 persen. Risiko tertinggi muncul pada pelanggan dengan kontrak month-to-month dan pengguna layanan fiber optic. Pelanggan yang churn juga cenderung memiliki tenure lebih pendek dan biaya bulanan lebih tinggi. Selain itu, ketiadaan TechSupport dan OnlineSecurity berkaitan kuat dengan churn yang lebih tinggi.',
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
      'Sistem web internal untuk mengelola data pegawai, penugasan, dan aktivitas kerja dalam satu alur administrasi yang rapi.',
    overview:
      'SIPANDA-KPH adalah aplikasi web internal berbasis Laravel yang dipakai untuk mengelola data kepegawaian, penugasan, dan pelaporan aktivitas kerja. Sistem ini menyatukan akun pengguna, data pegawai, monitoring tugas, dan kontrol akses berdasarkan peran dalam satu tempat.',
    problem: [
      'Data pengguna, data pegawai, dan proses pelaporan sebelumnya belum terhubung dalam satu sistem yang tertata.',
      'Kondisi ini membuat verifikasi akun, pemantauan penugasan, dan pengawasan aktivitas kerja menjadi lebih lambat.',
      'Diperlukan sistem internal yang bisa menjaga data, alur kerja, dan hak akses tetap konsisten.',
    ],
    approach: [
      'Membangun aplikasi dengan arsitektur monolitik berbasis Laravel agar alur administrasi dapat dikelola dalam satu codebase.',
      'Memisahkan hak akses untuk admin, pegawai, dan KPH melalui middleware serta status akun.',
      'Menghubungkan data akun, pegawai, riwayat kepegawaian, penugasan, dan catatan kegiatan melalui relasi yang jelas.',
      'Menyiapkan lingkungan pengembangan dengan Docker agar setup lebih konsisten.',
    ],
    tools: ['Laravel', 'Blade', 'MySQL', 'Docker'],
    output:
      'Proyek ini menghasilkan aplikasi internal dengan dashboard berbasis peran, manajemen akun, data pegawai, referensi master, penugasan kerja, pencatatan kegiatan, log aktivitas, dan ekspor PDF untuk kebutuhan pelaporan.',
    insights:
      'Proyek ini menunjukkan bahwa sistem internal perlu kuat pada pengaturan peran dan relevansi alur kerja. Pemisahan dashboard dan middleware membantu menjaga keamanan akses sekaligus membuat tiap pengguna melihat fungsi yang memang mereka butuhkan. Saat modul kepegawaian, penugasan, dan pelaporan disatukan, proses administrasi menjadi lebih rapi dan lebih mudah dipantau.',
    cover: '/images/projects/sipanda-admin-dashboard.png',
    links: {
      github: 'https://github.com/AlvitoDwiP/sipanda-kph.git',
    },
    caseStudy: {
      heroSummary:
        'SIPANDA-KPH dirancang sebagai sistem internal berbasis peran yang menghubungkan login, dashboard operasional, penugasan, dan validasi catatan kegiatan dalam satu alur administrasi yang lebih mudah dipantau.',
      context: [
        'Sebelum sistem disatukan, proses verifikasi akun, pencatatan pegawai, dan pemantauan tugas cenderung tersebar di beberapa alur terpisah. Akibatnya, admin sulit menjaga konsistensi data, pegawai tidak selalu melihat status kerja yang paling relevan, dan pimpinan unit membutuhkan waktu lebih lama untuk membaca progres keseluruhan.',
        'SIPANDA-KPH dibangun untuk merapikan titik-titik itu dalam satu aplikasi Laravel. Fokusnya bukan hanya menyimpan data, tetapi membuat tiap peran melihat informasi yang sesuai dengan kebutuhan kerjanya: admin untuk kontrol operasional, pegawai untuk eksekusi tugas dan laporan, serta KPH untuk monitoring lintas unit.',
      ],
      problemHighlights: [
        {
          title: 'Alur administrasi belum menyatu',
          description:
            'Akun pengguna, data pegawai, penugasan, dan laporan kegiatan sebelumnya belum berada dalam satu alur yang konsisten.',
        },
        {
          title: 'Setiap peran membutuhkan konteks yang berbeda',
          description:
            'Admin, pegawai, dan KPH tidak membutuhkan tampilan yang sama, sehingga dashboard generik berisiko membuat informasi penting tertutup.',
        },
        {
          title: 'Validasi dan monitoring butuh visibilitas yang cepat',
          description:
            'Tanpa ringkasan status dan akses cepat ke tindakan utama, proses verifikasi dan pemantauan progres menjadi lebih lambat.',
        },
      ],
      approachGroups: [
        {
          title: 'Role-based Information Architecture',
          description:
            'Struktur navigasi dipisahkan berdasarkan peran agar admin, pegawai, dan KPH langsung masuk ke konteks kerja masing-masing tanpa perlu menyaring menu yang tidak relevan.',
        },
        {
          title: 'Dashboard Ringkas untuk Keputusan Cepat',
          description:
            'Setiap dashboard dirancang dengan kartu ringkasan, grafik status, tabel aktivitas, dan shortcut aksi untuk mempercepat pembacaan kondisi sistem.',
        },
        {
          title: 'Alur Validasi Catatan Kegiatan',
          description:
            'Modul catatan kegiatan menampilkan status pengajuan, persetujuan, penolakan, dan ekspor PDF agar proses review administratif lebih jelas dan terdokumentasi.',
        },
        {
          title: 'Implementasi Laravel Monolith',
          description:
            'Laravel, Blade, dan MySQL dipakai untuk menjaga relasi antarentitas tetap sederhana, aman, dan mudah dirawat dalam satu codebase internal.',
        },
      ],
      insightHighlights: [
        {
          eyebrow: 'Akses Awal',
          title: 'Login dibuat bersih dan langsung ke tujuan',
          description:
            'Halaman login memakai pola sederhana dengan fokus tunggal pada autentikasi agar pengguna internal bisa masuk tanpa distraksi.',
          implication:
            'Untuk sistem operasional, kejelasan alur awal sering lebih penting daripada dekorasi visual yang berlebihan.',
        },
        {
          eyebrow: 'Dashboard Peran',
          title: 'Satu sistem, tetapi tiga sudut pandang kerja yang berbeda',
          description:
            'Admin melihat verifikasi akun dan aktivitas terbaru, pegawai melihat progres tugas pribadi, sedangkan KPH membaca monitoring lintas unit kerja.',
          implication:
            'Pemecahan dashboard berbasis peran membantu tiap pengguna menangkap informasi inti lebih cepat karena yang tampil memang sesuai tanggung jawabnya.',
        },
        {
          eyebrow: 'Pengawasan',
          title: 'Status dan tindakan dibuat terlihat dalam satu layar',
          description:
            'Daftar catatan kegiatan memadukan status pengajuan, tautan detail, dan unduhan PDF sehingga review administrasi tidak perlu berpindah konteks terlalu jauh.',
          implication:
            'Visibilitas status yang baik mengurangi friksi saat memvalidasi pekerjaan dan memudahkan pelacakan dokumen pendukung.',
        },
      ],
      impact: [
        'Admin mendapat kontrol yang lebih rapi untuk verifikasi akun, pengelolaan data pegawai, penugasan, dan validasi catatan dalam satu sistem.',
        'Pegawai dapat melihat tugas aktif, status progres, dan akses cepat ke pembaruan tugas serta pencatatan kegiatan dari dashboard yang lebih terarah.',
        'KPH memperoleh ringkasan kondisi lintas unit kerja melalui dashboard monitoring yang menampilkan status tugas, keterlambatan, dan tingkat penyelesaian.',
      ],
      appPreview: {
        imageSrc: '/images/projects/sipanda-admin-dashboard.png',
        imageAlt: 'Dashboard admin SIPANDA-KPH',
        description:
          'Galeri ini menampilkan alur utama SIPANDA-KPH mulai dari login hingga dashboard dan halaman operasional untuk tiap peran.',
        images: [
          {
            src: '/images/projects/sipanda-login.png',
            alt: 'Halaman login SIPANDA-KPH',
            label: 'Login',
            caption:
              'Halaman masuk dengan form sederhana, fokus visual pada autentikasi, dan CTA utama yang jelas untuk pengguna internal.',
          },
          {
            src: '/images/projects/sipanda-admin-dashboard.png',
            alt: 'Dashboard admin SIPANDA-KPH',
            label: 'Dashboard Admin',
            caption:
              'Admin melihat ringkasan pegawai aktif, akun menunggu verifikasi, tugas berjalan, catatan menunggu validasi, serta shortcut tindakan utama.',
          },
          {
            src: '/images/projects/sipanda-catatan-validasi.png',
            alt: 'Halaman validasi catatan kegiatan pegawai SIPANDA-KPH',
            label: 'Validasi Catatan',
            caption:
              'Tabel catatan kegiatan memusatkan status pengajuan, detail dokumen, dan unduhan PDF untuk membantu proses review administratif.',
          },
          {
            src: '/images/projects/sipanda-pegawai-dashboard.png',
            alt: 'Dashboard pegawai SIPANDA-KPH',
            label: 'Dashboard Pegawai',
            caption:
              'Pegawai mendapat ringkasan tugas pribadi, progres bulanan, dan akses cepat untuk memperbarui status tugas atau membuat catatan kegiatan.',
          },
          {
            src: '/images/projects/sipanda-kph-dashboard.png',
            alt: 'Dashboard KPH SIPANDA-KPH',
            label: 'Dashboard KPH',
            caption:
              'KPH memantau performa lintas unit lewat ringkasan tugas, distribusi status keseluruhan, dan tabel monitoring tingkat penyelesaian.',
          },
        ],
      },
    },
  },
  {
    id: 4,
    slug: 'acc-carbon-emissions-analysis-dashboard',
    title: 'ACC - Carbon Emissions Analysis and Prediction',
    category: 'Data Analytics',
    shortDescription:
      'Analisis emisi CO2 di ASEAN untuk melihat pola historis, faktor yang berkaitan dengan cumulative CO2, dan proyeksi tren awal.',
    overview:
      'ACC atau Asian Carbon Counter adalah proyek analisis emisi CO2 di negara-negara ASEAN pada periode 1900 sampai 2020. Fokusnya adalah membaca pola emisi, melihat faktor yang paling berkaitan dengan cumulative CO2, memetakan segmentasi negara, dan menyiapkan proyeksi tren awal untuk beberapa tahun berikutnya.',
    problem: [
      'Data emisi karbon di ASEAN tersebar dalam rentang waktu panjang dan dipengaruhi banyak faktor.',
      'Perlu diketahui variabel mana yang paling berkaitan dengan cumulative CO2 agar pembacaan emisi tidak berhenti pada tren permukaan.',
      'Tanpa analisis yang rapi, data historis sulit diterjemahkan menjadi dasar pembacaan tren berikutnya.',
    ],
    approach: [
      'Mengumpulkan dan memfilter data negara ASEAN untuk periode 1900 sampai 2020, termasuk penanganan missing values dan penyederhanaan variabel.',
      'Melakukan exploratory data analysis untuk melihat distribusi data dan karakteristik emisi tiap negara.',
      'Menganalisis korelasi untuk mencari faktor yang paling berkaitan dengan cumulative CO2.',
      'Membangun model regresi, melakukan clustering, dan menyusun proyeksi awal tren emisi periode 2021 sampai 2025.',
    ],
    tools: ['Python', 'Google Colab', 'Scikit-learn', 'Looker Studio'],
    output:
      'Proyek ini menghasilkan dataset yang telah dibersihkan, visualisasi exploratory data analysis, analisis korelasi, model untuk membaca hubungan antarvariabel, segmentasi negara, proyeksi tren emisi, dan dashboard interaktif di Looker Studio.',
    insights:
      'Analisis menunjukkan bahwa cumulative CO2 di negara-negara ASEAN paling kuat berkaitan dengan population, total CO2 emissions, dan land use. Model regresi juga menunjukkan bahwa faktor waktu ikut berperan dalam perubahan emisi. Selain itu, hasil clustering membagi negara ASEAN ke dalam dua kelompok utama, yaitu emisi rendah dan emisi tinggi, yang menunjukkan distribusi emisi kawasan ini tidak merata.',
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
      'Sistem web internal untuk mencatat transaksi, komisi, payroll, stok, dan laporan operasional hair studio.',
    overview:
      'Proyek ini adalah aplikasi web berbasis Laravel 11 yang dipakai untuk mengelola operasional hair studio dalam satu sistem. Fungsinya mencakup transaksi harian, payroll pegawai tetap dan freelance, komisi, pengeluaran, stok produk, serta laporan usaha.',
    problem: [
      'Operasional hair studio skala kecil sering tersebar di catatan manual, chat, atau spreadsheet.',
      'Akibatnya, transaksi harian sulit direkap, komisi rawan salah hitung, stok mudah tidak sinkron, dan laporan usaha memakan waktu.',
      'Diperlukan sistem yang bisa merapikan alur operasional dalam satu tempat.',
    ],
    approach: [
      'Menyesuaikan alur aplikasi dengan kebutuhan usaha kecil, termasuk pencatatan transaksi melalui daily batch input.',
      'Menyimpan item transaksi sebagai historical snapshot agar data lama tetap konsisten meskipun master data berubah.',
      'Menerapkan payroll berbasis open dan closed period agar transaksi yang sudah final tidak mudah diubah.',
      'Memindahkan logika bisnis utama ke service layer agar kode lebih terstruktur dan mudah dirawat.',
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
      'Proyek ini menghasilkan aplikasi internal yang membantu owner mengelola pegawai, layanan, produk, pengeluaran, transaksi harian, komisi, payroll, dan laporan operasional. Sistem juga mendukung ekspor laporan ke CSV untuk kebutuhan rekap.',
    insights:
      'Proyek ini menunjukkan bahwa sistem untuk usaha kecil tidak perlu rumit, tetapi harus tepat pada alur bisnisnya. Historical snapshot menjadi penting karena menjaga data transaksi dan payroll tetap konsisten. Pendekatan single owner juga membuat autentikasi dan permission bisa dibuat lebih sederhana, sehingga aplikasi tetap fokus pada pekerjaan inti.',
    cover: '/images/projects/hair-studio-dashboard.png',
    links: {
      github: 'https://github.com/AlvitoDwiP/barber-management.git',
    },
    caseStudy: {
      heroSummary:
        'Sistem Operasional Hair Studio dirancang sebagai back-office internal untuk membantu owner mencatat transaksi, memantau performa usaha, menghitung payroll, dan mengelola pengeluaran dari satu dashboard yang lebih terstruktur.',
      context: [
        'Operasional usaha jasa seperti hair studio biasanya bergerak cepat dan penuh detail kecil, mulai dari transaksi layanan, penjualan produk, komisi barber, sampai pengeluaran harian. Jika alurnya tersebar di catatan manual atau spreadsheet terpisah, owner akan lebih sulit memastikan angka operasional tetap konsisten.',
        'Aplikasi ini dibangun untuk menyatukan titik-titik itu ke dalam satu sistem Laravel yang fokus pada pekerjaan inti owner. Pendekatannya bukan membuat ERP yang rumit, tetapi merancang alur transaksi, payroll, pengeluaran, dan laporan yang cukup ringkas untuk dipakai setiap hari.',
      ],
      problemHighlights: [
        {
          title: 'Data operasional mudah terpencar',
          description:
            'Transaksi, komisi, payroll, stok, dan pengeluaran memiliki ritme pencatatan yang berbeda, sehingga rawan tercerai jika tidak disatukan dalam satu sistem.',
        },
        {
          title: 'Perhitungan komisi dan payroll butuh konsistensi',
          description:
            'Begitu transaksi sudah tercatat, angka layanan, produk, dan komisi perlu tetap stabil meskipun master data di belakangnya berubah.',
        },
        {
          title: 'Owner perlu ringkasan cepat, bukan laporan yang bertele-tele',
          description:
            'Sistem operasional harian harus membantu membaca kondisi bisnis dengan cepat agar keputusan tidak tertunda oleh proses administrasi.',
        },
      ],
      approachGroups: [
        {
          title: 'Daily Transaction Workflow',
          description:
            'Alur transaksi dibuat dengan model input harian agar owner bisa merekam layanan dan penjualan produk dalam blok transaksi yang mudah dicek kembali.',
        },
        {
          title: 'Historical Snapshot for Payroll',
          description:
            'Item transaksi disimpan sebagai snapshot historis supaya perhitungan komisi dan payroll tetap konsisten walaupun data master layanan atau produk berubah.',
        },
        {
          title: 'Owner-first Dashboard and Monitoring',
          description:
            'Dashboard menampilkan ringkasan harian, bulanan, statistik bisnis, dan akses cepat ke modul penting sehingga owner langsung melihat angka yang paling relevan.',
        },
        {
          title: 'Service Layer for Business Rules',
          description:
            'Logika bisnis utama dipisahkan ke service layer agar aturan payroll, komisi, transaksi, dan laporan lebih mudah dirawat saat aplikasi berkembang.',
        },
      ],
      insightHighlights: [
        {
          eyebrow: 'Akses Awal',
          title: 'Login disederhanakan untuk satu konteks owner',
          description:
            'Halaman login memakai visual yang tenang dan langsung menegaskan bahwa sistem dipakai untuk transaksi, payroll, laporan, dan pengaturan aplikasi.',
          implication:
            'Untuk aplikasi internal single-owner, kejelasan konteks lebih penting daripada kompleksitas fitur autentikasi di permukaan.',
        },
        {
          eyebrow: 'Operasional',
          title: 'Transaksi dirancang agar tetap nyaman dipakai setiap hari',
          description:
            'Daftar transaksi, input item, dan ringkasan cepat diletakkan dalam alur yang dekat, sehingga pencatatan harian dan pengecekan hasilnya terasa menyambung.',
          implication:
            'Saat frekuensi input tinggi, UI yang menekan perpindahan konteks bisa sangat membantu menjaga disiplin pencatatan.',
        },
        {
          eyebrow: 'Kontrol Bisnis',
          title: 'Payroll dan pengeluaran dibuat transparan dalam satu layar',
          description:
            'Owner bisa melihat periode payroll, status terbuka atau tertutup, rincian komisi pegawai, serta daftar pengeluaran tanpa harus menyusun ulang angka secara manual.',
          implication:
            'Visibilitas yang baik pada angka operasional membantu owner mengecek kesehatan bisnis lebih cepat dan mengurangi risiko salah hitung.',
        },
      ],
      impact: [
        'Owner dapat memusatkan transaksi layanan, penjualan produk, pengeluaran, komisi, payroll, dan laporan usaha dalam satu aplikasi internal.',
        'Alur payroll menjadi lebih aman karena angka komisi dibaca dari historical snapshot transaksi, bukan hanya dari master data yang bisa berubah.',
        'Dashboard dan modul operasional yang ringkas membantu pembacaan kondisi bisnis harian maupun bulanan tanpa perlu rekap manual berulang.',
      ],
      appPreview: {
        imageSrc: '/images/projects/hair-studio-dashboard.png',
        imageAlt: 'Dashboard Sistem Operasional Hair Studio',
        description:
          'Galeri ini menampilkan alur utama Sistem Operasional Hair Studio dari login owner sampai transaksi, payroll, dan pengeluaran.',
        images: [
          {
            src: '/images/projects/hair-studio-login.png',
            alt: 'Halaman login owner Sistem Operasional Hair Studio',
            label: 'Login Owner',
            caption:
              'Halaman masuk menegaskan konteks penggunaan untuk owner yang mengakses transaksi, payroll, laporan, dan pengaturan aplikasi.',
          },
          {
            src: '/images/projects/hair-studio-dashboard.png',
            alt: 'Dashboard Sistem Operasional Hair Studio',
            label: 'Dashboard',
            caption:
              'Dashboard merangkum kas masuk harian, performa bulanan, laba operasional, pegawai paling produktif, dan produk paling laku dalam satu layar.',
          },
          {
            src: '/images/projects/hair-studio-transaksi-list.png',
            alt: 'Daftar transaksi Sistem Operasional Hair Studio',
            label: 'Daftar Transaksi',
            caption:
              'Halaman transaksi memperlihatkan filter, ringkasan cepat hari ini, serta daftar transaksi tersimpan yang masih bisa dicek atau dikoreksi sebelum payroll final.',
          },
          {
            src: '/images/projects/hair-studio-input-transaksi.png',
            alt: 'Form input transaksi Sistem Operasional Hair Studio',
            label: 'Input Transaksi',
            caption:
              'Form input harian memadukan pegawai, metode pembayaran, item layanan atau produk, dan total transaksi dalam satu blok kerja yang mudah dipantau.',
          },
          {
            src: '/images/projects/hair-studio-payroll.png',
            alt: 'Detail payroll Sistem Operasional Hair Studio',
            label: 'Payroll',
            caption:
              'Owner dapat meninjau periode payroll, status periode, jumlah transaksi yang masuk, dan hasil komisi per pegawai dari satu halaman ringkas.',
          },
          {
            src: '/images/projects/hair-studio-pengeluaran.png',
            alt: 'Halaman pengeluaran Sistem Operasional Hair Studio',
            label: 'Pengeluaran',
            caption:
              'Modul pengeluaran menampilkan total expense, nominal akumulasi, tanggal terakhir dicatat, dan daftar pengeluaran yang siap diedit atau dihapus.',
          },
        ],
      },
    },
  },
  {
    id: 6,
    slug: 'analisis-efisiensi-ongkir-risiko-pembatalan-ecommerce-indonesia',
    title: 'Analisis Efisiensi Ongkir dan Risiko Pembatalan Transaksi E-Commerce Indonesia',
    category: 'Data Analytics',
    shortDescription:
      'Analisis biaya kirim, subsidi ongkir, dan risiko pembatalan transaksi untuk membaca efisiensi operasional e-commerce di Indonesia.',
    overview:
      'Proyek ini menganalisis biaya pengiriman, subsidi ongkir, dan risiko pembatalan transaksi pada operasional e-commerce di Indonesia. Analisis menggunakan 20.848 data transaksi untuk melihat efisiensi logistik, dominasi program gratis ongkir, dan segmen subsidi yang paling berisiko membebani biaya operasional.',
    problem: [
      'Efisiensi e-commerce tidak hanya dipengaruhi volume transaksi, tetapi juga biaya pengiriman dan kualitas transaksi yang dihasilkan.',
      'Perlu diketahui struktur ongkir aktual pada transaksi berbayar dan seberapa besar dominasi gratis ongkir dalam total transaksi.',
      'Segmen subsidi dengan risiko pembatalan tertinggi perlu dipetakan agar evaluasi kebijakan ongkir lebih tepat.',
    ],
    approach: [
      'Melakukan preprocessing dan feature engineering, termasuk pembuatan cancel_flag, konversi berat, dan perhitungan ongkir_per_kg.',
      'Memisahkan transaksi free shipping dan paid shipping agar pola keduanya bisa dibaca dengan lebih jelas.',
      'Menganalisis struktur ongkir aktual, beban subsidi, simulasi penghematan, dan segmentasi risiko pembatalan.',
    ],
    tools: ['Python', 'Pandas', 'Jupyter Notebook', 'Tableau'],
    output:
      'Proyek ini menghasilkan dataset hasil preprocessing, data transaksi paid shipping dan free shipping, data agregat untuk visualisasi, notebook analisis, dan dashboard interaktif di Tableau Public.',
    insights:
      'Analisis menunjukkan bahwa gratis ongkir mendominasi 69,80 persen dari seluruh transaksi. Pada transaksi berbayar, median ongkir per kilogram berada di angka Rp10.000 dan memberi gambaran baseline biaya logistik aktual. Dari sisi risiko, segmen subsidi tinggi memiliki cancellation rate 24,81 persen, lebih tinggi dibanding segmen subsidi rendah yang berada di 15,26 persen. Beban subsidi juga banyak terkonsentrasi di Jawa Barat, Banten, dan DKI Jakarta.',
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
      'Aplikasi mobile untuk mencari mitra usaha kopi, melihat informasi produk, dan menelusuri lokasi dalam satu alur.',
    overview:
      'FindFe adalah aplikasi mobile berbasis Flutter yang saya kerjakan sebagai tugas akhir mata kuliah Pemrograman Berbasis Mobile. Aplikasi ini memusatkan pencarian mitra usaha kopi, informasi produk, data lokasi, dan konten artikel dalam satu pengalaman yang ringkas.',
    problem: [
      'Pengguna di bidang kopi sering harus berpindah tempat saat mencari mitra usaha, informasi produk, dan data lokasi.',
      'Data produk dan informasi pendukung kerap tersebar, sehingga kurang praktis untuk dipantau.',
      'Diperlukan aplikasi yang bisa menyatukan kebutuhan tersebut dalam alur yang sederhana.',
    ],
    approach: [
      'Menyusun alur aplikasi yang sederhana agar pengguna bisa berpindah antarfitur tanpa kebingungan.',
      'Membangun antarmuka mobile dengan Flutter agar pengalaman penggunaan tetap ringan dan konsisten.',
      'Menghubungkan autentikasi dan penyimpanan data dengan Firebase, lalu menambahkan fitur peta untuk pencarian lokasi.',
      'Menambahkan artikel sebagai konten pendukung agar aplikasi tidak berhenti pada fungsi pencarian saja.',
    ],
    tools: ['Flutter', 'Firebase', 'Flutter Map', 'Dart'],
    output:
      'Proyek ini menghasilkan aplikasi mobile yang mendukung login dan registrasi, pencarian serta penelusuran mitra kopi, pengelolaan data produk, informasi berbasis lokasi, dan artikel seputar kopi dengan penyimpanan data online melalui Firebase.',
    insights:
      'Proyek ini menunjukkan bahwa kebutuhan pengguna tidak hanya berhenti pada pencarian mitra. Mereka juga perlu informasi produk, lokasi, dan konten pendukung dalam alur yang ringkas. Nilai utama aplikasi ini ada pada cara beberapa fungsi berbeda disatukan dalam pengalaman mobile yang tetap mudah dipahami.',
    cover: '/images/projects/findfe-aplikasi-mobile-pencarian-mitra-dan-informasi-produk-kopi.jpg',
    links: {
      github: 'https://github.com/AlvitoDwiP/AplikasiCariMitraKopi-main',
    },
    caseStudy: {
      appPreview: {
        imageSrc: '/images/projects/findfe-ui.png',
        imageAlt: 'Preview fitur utama aplikasi FindFe dalam beberapa layar',
        description:
          'Preview ini menunjukkan alur utama aplikasi, mulai dari pencarian mitra, informasi produk kopi, sampai penelusuran lokasi dalam satu tampilan yang mudah diikuti.',
      },
    },
  },
]
