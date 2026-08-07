document.addEventListener('DOMContentLoaded', () => {

  /* --- 1. INTERNATIONALIZATION (i18n) DICTIONARY ENGINE --- */
  const translations = {
    id: {
      nav_status: "Tersedia untuk Kerja & Kolaborasi",
      nav_home: "Beranda",
      nav_about: "Tentang",
      nav_journey: "Perjalanan",
      nav_skills: "Skills",
      nav_services: "Layanan",
      nav_projects: "Proyek",
      nav_experience: "Pengalaman",
      nav_fighter: "Fighter",
      nav_achievements: "Prestasi",
      nav_faq: "FAQ",
      nav_community: "Komunitas",
      nav_contact: "Kontak",

      hero_welcome: "Senior Software Engineering",
      hero_greeting: "Halo, Saya",
      hero_full_slogan: '"Code with Purpose. Fight with Honor. Inspire with Action."',
      btn_download_cv: "Download CV",
      btn_view_projects: "Lihat Proyek",
      btn_contact_me: "Hubungi Saya",

      stat_projects: "Proyek Selesai",
      stat_certificates: "Sertifikat Diraih",
      stat_years: "Tahun Belajar",
      stat_contrib: "Kontribusi GitHub",

      about_subtitle: "TENTANG SAYA",
      about_title: "Bio, Visi, Misi & Values",
      biodata_header: "Biodata Diri",
      bio_name_lbl: "Nama Lengkap",
      bio_age_lbl: "Umur",
      bio_age_val: "22 Tahun",
      bio_loc_lbl: "Domisili",
      bio_loc_val: "Bogor, Jawa Barat",
      bio_univ_lbl: "Perguruan Tinggi",
      bio_major_lbl: "Jurusan",
      bio_major_val: "Rekayasa Perangkat Lunak",
      values_title: "Nilai Inti (Core Values)",

      about_story_header: "Perjalanan & Filosofi Hidup",
      about_story_p1: "Halo, saya Musyafa Anasrullah. Saya adalah seorang mahasiswa Software Engineering, Fighter, dan Content Creator yang memiliki semangat untuk membangun teknologi yang bermanfaat, menjalani hidup dengan disiplin, serta menginspirasi orang lain untuk terus berkembang.",
      about_story_p2: "Perjalanan saya dibentuk oleh tiga dunia yang saling melengkapi. Sebagai mahasiswa Software Engineering, saya berfokus pada pengembangan aplikasi dan solusi digital yang modern, efisien, dan berorientasi pada kebutuhan pengguna. Saya terus mempelajari berbagai teknologi terbaru, mulai dari pengembangan frontend, backend, database, hingga software architecture. Bagi saya, teknologi bukan sekadar tentang menulis kode, tetapi tentang menciptakan solusi yang mampu memberikan dampak nyata bagi banyak orang.",
      about_story_p3: "Di luar dunia teknologi, saya aktif berlatih Taekwondo, Muay Thai, dan Kickboxing. Bela diri mengajarkan saya bahwa kesuksesan dibangun melalui disiplin, konsistensi, ketangguhan mental, serta keberanian untuk menghadapi tantangan. Nilai-nilai tersebut saya terapkan tidak hanya saat berlatih, tetapi juga dalam proses belajar, bekerja, dan menjalani kehidupan sehari-hari.",
      about_story_p4: "Sebagai seorang Content Creator, saya senang mendokumentasikan perjalanan belajar, berbagi pengetahuan, serta menyampaikan konten seputar teknologi, pengembangan diri, dan produktivitas. Saya percaya bahwa ilmu akan menjadi lebih bermakna ketika dibagikan dan mampu memberikan manfaat bagi orang lain.",

      vm_vision_title: "Visi (Vision)",
      vm_vision_desc: "Menjadi seorang profesional di bidang teknologi yang menciptakan solusi digital yang bermakna, menjalani hidup dengan disiplin, serta menginspirasi banyak orang untuk terus berkembang melalui ilmu pengetahuan, ketekunan, dan tindakan positif.",
      vm_mission_title: "Misi (Mission)",
      vm_mission_desc: "Mengembangkan perangkat lunak yang inovatif dan memberikan solusi nyata bagi masyarakat, serta menginspirasi generasi muda melalui karya dan seni bela diri.",
      tagline_trans: "Menulis kode dengan tujuan. Bertarung dengan kehormatan. Menginspirasi melalui tindakan nyata.",

      journey_subtitle: "TIMELINE HIDUP",
      journey_title: "Perjalanan Pendidikan & Karakter",
      journey_item0_desc: "Mengawali perjalanan pendidikan dengan membangun fondasi karakter, kedisiplinan, rasa ingin tahu, dan semangat belajar yang menjadi bekal untuk perkembangan akademik dan pribadi di masa depan.",
      journey_item1a_desc: "Mengawali pendidikan dasar dengan mengembangkan kemampuan membaca, menulis, berhitung, serta membangun karakter dan semangat belajar sejak dini.",
      journey_item1_desc: "Melanjutkan pendidikan dasar di SDIT Amalia Cibinong (kelas 2 - 6 SD). Tempat mengenal kedisiplinan dan latihan Karate selama 5 tahun.",
      journey_item2_desc: "Mengecap pendidikan pesantren modern di Gontor 1 Ponorogo (2016 - 2023). Membentuk kepemimpinan, kedisiplinan tinggi, penguasaan bahasa (Arab & Inggris), serta latihan mendalam Muay Thai selama 3 tahun (kelas 4-6 KMI).",
      journey_item3_desc: "Melaksanakan pengabdian sebagai pengajar selama 1 tahun di Pondok An-Nibras Subang, Jawa Barat, bertugas sebagai guru bahasa (Bahasa Arab & Inggris) dan pembina santri.",
      journey_item4_desc: "Menempuh studi Rekayasa Perangkat Lunak (Software Engineering) di Universitas BSI, aktif dalam UKM Taekwondo sebagai Sekretaris, dan membangun proyek software modern.",

      skills_subtitle: "KEAHLIAN TEKNIS",
      skills_title: "Skills & Tech Stack",

      services_subtitle: "LAYANAN PROFESIONAL",
      services_title: "Layanan yang Saya Tawarkan",
      svc1_title: "Website Development",
      svc1_desc: "Pengembangan aplikasi web modern fullstack yang responsif, cepat, aman, dan dapat disesuaikan dengan kebutuhan bisnis skala besar maupun UMKM.",
      svc2_title: "UI/UX Implementation",
      svc2_desc: "Mengubah desain Figma menjadi kode frontend yang presisi pixel-perfect, interaktif, dengan animasi halus dan pengalaman pengguna yang luar biasa.",
      svc3_title: "REST API Development",
      svc3_desc: "Membangun arsitektur backend RESTful API yang kuat, aman dengan otentikasi JWT/OAuth, terintegrasi dengan database dan siap diskalakan.",
      svc4_title: "Bug Fixing & Optimization",
      svc4_desc: "Menganalisis, memperbaiki bug aplikasi, melakukan refactoring kode, serta mengoptimalkan performa kecepatan sistem agar berjalan efisien.",

      projects_subtitle: "PORTOFOLIO KARYA",
      projects_title: "Proyek Unggulan",
      filter_all: "Semua",
      filter_web: "Web Dev",
      filter_mobile: "Mobile",
      filter_ui: "UI Design",
      filter_api: "API",
      filter_dashboard: "Dashboard",

      p1_desc: "Sistem e-commerce enterprise dengan manajemen inventaris real-time, gateway pembayaran multi-channel, dan dasbor analitik penjual.",
      p2_desc: "Portal perbankan digital dengan pengolahan transaksi mikro terenkripsi, laporan keuangan otomatis, dan integrasi QRIS API.",
      p3_desc: "Aplikasi pelacak latihan seni bela diri (Taekwondo & Muay Thai), penjelajah jurnal nutrisi, dan manajemen sesi sparring.",
      p4_desc: "Layanan microservice autentikasi tersentralisasi dengan pengaman rate-limiting, otentikasi dua faktor (2FA), dan audit log otomatis.",
      p5_desc: "Sistem manajemen konsultasi dokter online, reservasi obat otomatis, dan integrasi rekam medis pasien real-time.",
      p6_desc: "Situs web portofolio profesional tingkat senior dengan mode gelap/terang, 5 bahasa (i18n), kanvas latar belakang interaktif, dan performa tinggi.",

      exp_subtitle: "PENGALAMAN KERJA & ORGANISASI",
      exp_title: "Pengalaman & Kepemimpinan",
      exp_work_title: "Pengalaman Kerja",
      exp_org_title: "Pengalaman Organisasi",
      exp_job1_desc: "Mengabdi selama 2 tahun sebagai tenaga pengajar utama bagian bahasa (Bahasa Arab dan Bahasa Inggris), membina kedisiplinan santri, dan mengkoordinasikan kegiatan kebahasaan harian.",
      exp_job2_desc: "Bekerja secara independen menyelesaikan berbagai proyek aplikasi web, integrasi REST API, pembenahan bug, dan desain UI/UX untuk klien internasional dan lokal.",
      exp_org_dbbg_desc: "Bertanggung jawab sebagai pelatih kebugaran dalam menyusun, membimbing, dan mengevaluasi program latihan fisik santri, sekaligus memotivasi peserta untuk mencapai perkembangan fisik yang optimal.",
      exp_org_diesel_desc: "Mengelola administrasi, pencatatan pemeliharaan sistem mekanikal-elektrikal, serta operasional mesin genset diesel untuk mendukung keandalan pasokan energi di lingkungan pesantren.",
      exp_org1_desc: "Bertanggung jawab penuh atas administrasi organisasi, penyusunan proposal kejuaraan, pendataan atlet, serta pengorganisasian jadwal latihan rutin unit kegiatan mahasiswa.",
      exp_org2_desc: "Memimpin komunitas pemuda dalam bidang pemrograman, membagikan modul belajar software engineering gratis, dan mengadakan sesi tanya jawab teknis berkala.",

      fighter_subtitle: "JIWA PETARUNG & BELA DIRI",
      fighter_title: "Persona Fighter & Seni Bela Diri",
      f_bg_title: "Jejak Bela Diri",
      f_sched_title: "Disiplin Latihan",
      f_sched_sub: "Disiplin latihan harian tanpa kompromi:",
      f_comp_title: "Kompetisi & Medali",
      motto_sub: "Rasa takut adalah teman. Rasa takut mengajarkan kita untuk waspada, bersiap, dan bertarung dengan fokus tertinggi.",
      f_gallery_title: "Galeri Seni Bela Diri",
      f_gallery_sub: "Klik gambar untuk melihat galeri foto latihan & kejuaraan secara penuh.",

      ach_subtitle: "PRESTASI & SERTIFIKASI",
      ach_title: "Sertifikat & Penghargaan",
      tab_cert: "Sertifikat",
      tab_piagam: "Piagam",
      tab_medals: "Medali",

      faq_subtitle: "PERTANYAAN UMUM",
      faq_title: "Frequently Asked Questions",
      faq1_q: "1. Siapa Saya?",
      faq1_a: "Saya adalah Musyafa Anasrullah, seorang mahasiswa Software Engineering, fighter, dan content creator yang memiliki passion dalam bidang teknologi, pengembangan diri, dan berbagi ilmu melalui konten yang bermanfaat.",
      faq2_q: "2. Apa fokus yang sedang Saya pelajari?",
      faq2_a: "Saat ini saya berfokus mempelajari pengembangan web modern, mulai dari frontend, backend, database, hingga berbagai teknologi pendukung seperti Git, Docker, dan cloud computing.",
      faq3_q: "3. Teknologi apa saja yang Saya kuasai?",
      faq3_a: "Saya menggunakan berbagai teknologi seperti HTML, CSS, JavaScript, Tailwind CSS, PHP, Laravel, Node.js, Express.js, MySQL, Git, GitHub, serta terus mempelajari teknologi baru sesuai perkembangan industri.",
      faq4_q: "4. Apakah Saya menerima proyek freelance atau kolaborasi?",
      faq4_a: "Ya. Saya terbuka untuk proyek freelance, kolaborasi, magang, maupun kesempatan bekerja di bidang Software Engineering dan pengembangan aplikasi web.",
      faq5_q: "5. Mengapa Saya berlatih bela diri?",
      faq5_a: "Bela diri mengajarkan saya arti disiplin, konsistensi, tanggung jawab, rasa hormat, dan ketahanan mental. Nilai-nilai tersebut saya terapkan dalam dunia teknologi maupun kehidupan sehari-hari.",
      faq6_q: "6. Mengapa Saya menjadi Content Creator?",
      faq6_a: "Saya percaya bahwa ilmu akan lebih bermanfaat ketika dibagikan. Melalui konten, saya ingin mendokumentasikan proses belajar, berbagi pengalaman, serta menginspirasi orang lain untuk terus berkembang.",
      faq7_q: "7. Apa tujuan karier Saya?",
      faq7_a: "Tujuan saya adalah menjadi seorang Software Engineer profesional yang mampu menciptakan solusi digital yang bermanfaat, terus mengembangkan diri, serta memberikan dampak positif melalui teknologi, seni bela diri, dan konten edukatif.",
      faq8_q: "8. Bagaimana cara menghubungi Saya?",
      faq8_a: "Anda dapat menghubungi saya melalui email, LinkedIn, GitHub, atau media sosial yang tersedia pada halaman Contact. Saya akan berusaha memberikan respons secepat mungkin.",

      comm_desc: "CodeWithMusyafa Community adalah komunitas yang saya bangun untuk membantu siapa saja yang ingin belajar dunia pemrograman dan teknologi. Melalui diskusi, berbagi materi, serta kolaborasi dalam berbagai proyek, saya berharap komunitas ini dapat menjadi tempat berkembang bagi programmer masa depan.",

      contact_subtitle: "HUBUNGI SAYA",
      contact_title: "Mulai Kontak & Kolaborasi",
      contact_info_title: "Informasi Kontak",
      contact_info_desc: "Mari berdiskusi mengenai proyek web, kolaborasi, atau sekadar bertukar ide seputar teknologi dan seni bela diri.",
      contact_form_title: "Kirim Pesan Langsung",
      lbl_name: "Nama Lengkap",
      lbl_email: "Alamat Email",
      lbl_subject: "Subjek",
      lbl_message: "Pesan (Message)",
      btn_send: "Kirim Pesan"
    },

    en: {
      nav_status: "Available for Hire & Collab",
      nav_home: "Home",
      nav_about: "About",
      nav_journey: "Journey",
      nav_skills: "Skills",
      nav_services: "Services",
      nav_projects: "Projects",
      nav_experience: "Experience",
      nav_fighter: "Fighter",
      nav_achievements: "Achievements",
      nav_faq: "FAQ",
      nav_community: "Community",
      nav_contact: "Contact",

      hero_welcome: "Senior Software Engineering Standard",
      hero_greeting: "Hello, I am",
      hero_full_slogan: '"Code with Purpose. Fight with Honor. Inspire with Action."',
      btn_download_cv: "Download CV",
      btn_view_projects: "View Projects",
      btn_contact_me: "Contact Me",

      stat_projects: "Projects Completed",
      stat_certificates: "Certificates Earned",
      stat_years: "Years Learning",
      stat_contrib: "GitHub Contributions",

      about_subtitle: "ABOUT ME",
      about_title: "Bio, Vision, Mission & Values",
      biodata_header: "Personal Biodata",
      bio_name_lbl: "Full Name",
      bio_age_lbl: "Age",
      bio_age_val: "22 Years Old",
      bio_loc_lbl: "Location",
      bio_loc_val: "Bogor, West Java, Indonesia",
      bio_univ_lbl: "University",
      bio_major_lbl: "Major",
      bio_major_val: "Software Engineering",
      values_title: "Core Values",

      about_story_header: "Life Journey & Philosophy",
      about_story_p1: "Hello, I am Musyafa Anasrullah. I am a Software Engineering student, Fighter, and Content Creator driven to build meaningful technology, live disciplined, and inspire others.",
      about_story_p2: "My journey is shaped by three complementary worlds. As a Software Engineering student, I focus on building modern, efficient, and user-centric digital solutions. I continuously master frontend, backend, databases, and architecture. Technology for me is about creating real impact.",
      about_story_p3: "Beyond tech, I practice Taekwondo, Muay Thai, and Kickboxing. Martial arts taught me that success is built through discipline, consistency, mental fortitude, and courage.",
      about_story_p4: "As a Content Creator, I document my learning journey, share knowledge, and educate others on technology, self-growth, and productivity.",

      vm_vision_title: "Vision",
      vm_vision_desc: "To become a tech professional creating meaningful digital solutions, living disciplined, and inspiring people through knowledge, perseverance, and action.",
      vm_mission_title: "Mission",
      vm_mission_desc: "To develop innovative software solving real-world challenges while inspiring the youth through technology and martial arts.",
      tagline_trans: "Code with Purpose. Fight with Honor. Inspire with Action.",

      journey_subtitle: "LIFE TIMELINE",
      journey_title: "Education & Character Journey",
      journey_item0_desc: "Beginning the educational journey by building character foundation, discipline, curiosity, and enthusiasm for learning as preparation for future academic and personal growth.",
      journey_item1a_desc: "Starting elementary education by developing reading, writing, counting skills, and building character and learning enthusiasm from an early age.",
      journey_item1_desc: "Continuing elementary education at SDIT Amalia Cibinong (Grades 2-6). Practiced discipline and 5 years of Karate training.",
      journey_item2_desc: "Islamic boarding school education at Gontor 1 Ponorogo (2016-2023). Built leadership, high discipline, Arabic & English mastery, and 3 years of Muay Thai training.",
      journey_item3_desc: "Service as language teacher (Arabic & English) at Pondok An-Nibras Subang, West Java for 1 year.",
      journey_item4_desc: "Studying Software Engineering at Bina Sarana Informatika University, serving as Secretary of UKM Taekwondo.",

      skills_subtitle: "TECHNICAL PROFICIENCY",
      skills_title: "Skills & Tech Stack",

      services_subtitle: "PROFESSIONAL SERVICES",
      services_title: "Services I Offer",
      svc1_title: "Website Development",
      svc1_desc: "Full-stack web application development that is fast, secure, responsive, and tailored to business needs.",
      svc2_title: "UI/UX Implementation",
      svc2_desc: "Translating Figma designs into pixel-perfect, interactive frontend code with smooth animations.",
      svc3_title: "REST API Development",
      svc3_desc: "Building robust, scalable backend RESTful APIs with secure JWT/OAuth authentication.",
      svc4_title: "Bug Fixing & Optimization",
      svc4_desc: "Debugging, code refactoring, and optimizing web performance for peak efficiency.",

      projects_subtitle: "PORTFOLIO WORKS",
      projects_title: "Featured Projects",
      filter_all: "All",
      filter_web: "Web Dev",
      filter_mobile: "Mobile",
      filter_ui: "UI Design",
      filter_api: "API",
      filter_dashboard: "Dashboard",

      p1_desc: "Enterprise e-commerce platform with real-time inventory management, multi-channel payment gateway, and analytics dashboard.",
      p2_desc: "Digital banking portal with encrypted microtransaction processing, automated financial reports, and QRIS API integration.",
      p3_desc: "Martial arts training tracker (Taekwondo & Muay Thai), nutrition log, and sparring session manager.",
      p4_desc: "Centralized authentication microservice with rate-limiting, 2FA security, and automated audit logs.",
      p5_desc: "Online telemedicine portal with doctor appointment scheduling and patient medical records integration.",
      p6_desc: "Senior-level professional portfolio website featuring dark/light mode, 5-language i18n support, and particle graphics.",

      exp_subtitle: "WORK & ORGANIZATIONAL EXPERIENCE",
      exp_title: "Experience & Leadership",
      exp_work_title: "Work Experience",
      exp_org_title: "Organization Experience",
      exp_job1_desc: "Served 2 years as head language teacher (Arabic & English) at Pondok An-Nibras Subang, managing student discipline and language activities.",
      exp_job2_desc: "Freelance web developer on Upwork & Fiverr for 2 years, building web applications, REST APIs, and UI designs for international clients.",
      exp_org_dbbg_desc: "Fitness trainer responsible for designing, guiding, and evaluating physical workout programs for students while motivating peak physical growth.",
      exp_org_diesel_desc: "Managed administration, electrical-mechanical system maintenance logs, and diesel generator operations to ensure reliable energy supply.",
      exp_org1_desc: "Secretary of Taekwondo Student Activity Unit (UKM) at UBSI for 1 year, overseeing administration, tournament proposals, and athlete registration.",
      exp_org2_desc: "Founder of CodeWithMusyafa Community, mentoring aspiring developers with free engineering modules and tech Q&A.",

      fighter_subtitle: "MARTIAL ARTS PERSONA",
      fighter_title: "Fighter Persona & Martial Arts",
      f_bg_title: "Martial Arts Track",
      f_sched_title: "Training Discipline",
      f_sched_sub: "Uncompromising daily workout schedule:",
      f_comp_title: "Competitions & Medals",
      motto_sub: "Fear is a friend. Fear keeps us alert, prepared, and focused at the highest level.",
      f_gallery_title: "Martial Arts Gallery",
      f_gallery_sub: "Click any image to open full resolution lightbox gallery.",

      ach_subtitle: "HONORS & CERTIFICATIONS",
      ach_title: "Certificates & Awards",
      tab_cert: "Certificates",
      tab_piagam: "Awards",
      tab_medals: "Medals",

      faq_subtitle: "FREQUENTLY ASKED QUESTIONS",
      faq_title: "Frequently Asked Questions",
      faq1_q: "1. Who are you?",
      faq1_a: "I am Musyafa Anasrullah, a Software Engineering student, fighter, and content creator passionate about technology, self-growth, and sharing knowledge.",
      faq2_q: "2. What are your current focus areas?",
      faq2_a: "Currently focusing on modern web development including frontend, backend, databases, Git, Docker, and cloud computing.",
      faq3_q: "3. What technologies do you use?",
      faq3_a: "HTML, CSS, JavaScript, Tailwind CSS, PHP, Laravel, Node.js, Express.js, MySQL, Git, GitHub, and expanding to modern tech stacks.",
      faq4_q: "4. Do you accept freelance projects or collaboration?",
      faq4_a: "Yes! Open for freelance projects, internships, collaborations, and software engineering opportunities.",
      faq5_q: "5. Why do you practice martial arts?",
      faq5_a: "Martial arts teaches discipline, consistency, respect, and mental toughness which I apply to technology and life.",
      faq6_q: "6. Why are you a Content Creator?",
      faq6_a: "Knowledge grows when shared. I document my learning journey to inspire and help future developers.",
      faq7_q: "7. What is your career goal?",
      faq7_a: "To become a professional Software Engineer delivering impactful digital solutions and inspiring others.",
      faq8_q: "8. How can I contact you?",
      faq8_a: "Reach out via email, LinkedIn, GitHub, or WhatsApp listed on the Contact section.",

      comm_desc: "CodeWithMusyafa Community is a space created to help anyone learn programming and technology through discussions, learning materials, and project collaboration.",

      contact_subtitle: "GET IN TOUCH",
      contact_title: "Start a Conversation",
      contact_info_title: "Contact Information",
      contact_info_desc: "Let's discuss web development projects, collaborations, or tech & martial arts ideas.",
      contact_form_title: "Send Me a Message",
      lbl_name: "Full Name",
      lbl_email: "Email Address",
      lbl_subject: "Subject",
      lbl_message: "Message",
      btn_send: "Send Message"
    },

    zh: {
      nav_status: "可接受工作与合作",
      nav_home: "首页",
      nav_about: "关于",
      nav_journey: "历程",
      nav_skills: "技能",
      nav_services: "服务",
      nav_projects: "项目",
      nav_experience: "经验",
      nav_fighter: "格斗家",
      nav_achievements: "成就",
      nav_faq: "常见问题",
      nav_community: "社区",
      nav_contact: "联系",

      hero_welcome: "高级软件工程标准",
      hero_greeting: "你好，我是",
      hero_full_slogan: '"Code with Purpose. Fight with Honor. Inspire with Action."',
      btn_download_cv: "下载简历 (CV)",
      btn_view_projects: "查看项目",
      btn_contact_me: "联系我",

      stat_projects: "已完成项目",
      stat_certificates: "获得证书",
      stat_years: "学习年限",
      stat_contrib: "GitHub 贡献",

      about_subtitle: "关于我",
      about_title: "个人简介、愿景与价值观",
      biodata_header: "个人基本信息",
      bio_name_lbl: "姓名",
      bio_age_lbl: "年龄",
      bio_age_val: "22 岁",
      bio_loc_lbl: "居住地",
      bio_loc_val: "印度尼西亚 茂物",
      bio_univ_lbl: "大学",
      bio_major_lbl: "专业",
      bio_major_val: "软件工程",
      values_title: "核心价值观",

      about_story_header: "人生历程与哲学",
      about_story_p1: "你好，我是 Musyafa Anasrullah，一名软件工程专业学生、格斗家和内容创作者。",
      about_story_p2: "我专注于构建高效、现代的全栈 Web 应用，同时深入研究软件架构与数据库。",
      about_story_p3: "在技术之外，我长期练习跆拳道、泰拳和自由搏击。武术赋予我自律与坚韧。",
      about_story_p4: "作为内容创作者，我热衷于分享技术知识与个人成长经历。",

      vm_vision_title: "愿景",
      vm_vision_desc: "成为创造有意义数字解决方案的专业技术人员，以自律与知识启发他人。",
      vm_mission_title: "使命",
      vm_mission_desc: "开发创新软件解决现实挑战，并通过技术与武术激励青年。",
      tagline_trans: "怀揣目标编码。携荣誉而战。以行动启发他人。",

      journey_subtitle: "人生时间轴",
      journey_title: "教育与性格塑造历程",
      journey_item1_desc: "SDIT Amalia Cibinong 小学教育，进行 6 年空手道训练。",
      journey_item2_desc: "Gontor 1 现代寄宿学校，建立领导力与 3 年泰拳训练。",
      journey_item3_desc: "在 Pondok An-Nibras 担任阿拉伯语与英语教师 1 年。",
      journey_item4_desc: "就读 Bina Sarana Informatika 大学软件工程专业，担任跆拳道社团秘书。",

      skills_subtitle: "技术能力",
      skills_title: "技能与技术栈",

      services_subtitle: "专业服务",
      services_title: "我提供的服务",
      svc1_title: "网站开发",
      svc1_desc: "开发高效、安全且响应式的全栈 Web 应用程序。",
      svc2_title: "UI/UX 代码实现",
      svc2_desc: "将 Figma 设计精准转化为交互式前端代码。",
      svc3_title: "REST API 开发",
      svc3_desc: "构建安全、可扩展的后端 API 接口。",
      svc4_title: "Bug 修复与性能优化",
      svc4_desc: "代码重构与网站加载速度优化。",

      projects_subtitle: "作品集",
      projects_title: "精选项目",
      filter_all: "全部",
      filter_web: "Web 开发",
      filter_mobile: "移动端",
      filter_ui: "UI 设计",
      filter_api: "API",
      filter_dashboard: "仪表盘",

      p1_desc: "具有实时库存管理和支付网关的企业级电商平台。",
      p2_desc: "具有加密交易处理与 QRIS API 集成的数字银行门户。",
      p3_desc: "武术训练追踪应用 (跆拳道与泰拳)。",
      p4_desc: "具有限流与双因素认证的高安全认证微服务。",
      p5_desc: "在线远程医疗与医生预约管理系统。",
      p6_desc: "具有 5 种语言支持的高级个人程序员作品集网站。",

      exp_subtitle: "工作与组织经验",
      exp_title: "经验与领导力",
      exp_work_title: "工作经验",
      exp_org_title: "组织经验",
      exp_job1_desc: "担任语言主讲教师 2 年，负责学生纪律与语言教学。",
      exp_job2_desc: "Upwork & Fiverr 自由职业 Web 开发者 2 年。",
      exp_org1_desc: "UBSI 跆拳道社团秘书 1 年。",
      exp_org2_desc: "CodeWithMusyafa 开发者社区创始人。",

      fighter_subtitle: "格斗家精神",
      fighter_title: "武术格斗家履历",
      f_bg_title: "武术经历",
      f_sched_title: "训练纪律",
      f_sched_sub: "严格的每日训练计划:",
      f_comp_title: "比赛与奖牌",
      motto_sub: "恐惧是朋友。恐惧使我们时刻保持警惕与专注。",
      f_gallery_title: "武术画廊",
      f_gallery_sub: "点击图片查看全屏照片。",

      ach_subtitle: "荣誉与认证",
      ach_title: "证书与奖项",
      tab_cert: "证书",
      tab_piagam: "奖状",
      tab_medals: "奖牌",

      faq_subtitle: "常见问题",
      faq_title: "Frequently Asked Questions",
      faq1_q: "1. 你是谁？",
      faq1_a: "我是 Musyafa Anasrullah，一名软件工程专业学生、格斗家和内容创作者。",
      faq2_q: "2. 你目前专注于什么？",
      faq2_a: "专注于现代 Web 前后端开发、数据库、Git 和 Docker。",
      faq3_q: "3. 你掌握哪些技术？",
      faq3_a: "HTML, CSS, JavaScript, Tailwind, PHP, Laravel, Node.js, Express, MySQL 等。",
      faq4_q: "4. 是否接受自由职业或合作？",
      faq4_a: "是的，随时欢迎项目合作与实习机会。",
      faq5_q: "5. 为什么练习武术？",
      faq5_a: "武术教会我自律、坚持与强韧的心理素质。",
      faq6_q: "6. 为什么做内容创作者？",
      faq6_a: "分享知识能创造更大价值。",
      faq7_q: "7. 职业目标是什么？",
      faq7_a: "成为一名优秀的软件工程师，创造有价值的产品。",
      faq8_q: "8. 如何联系你？",
      faq8_a: "可通过 Email, LinkedIn, GitHub 或 WhatsApp 联系我。",

      comm_desc: "CodeWithMusyafa Community 是我建立的技术交流社区，旨在帮助大家共同学习编程。",

      contact_subtitle: "联系我",
      contact_title: "开始交流与合作",
      contact_info_title: "联系方式",
      contact_info_desc: "欢迎探讨 Web 项目开发与合作意向。",
      contact_form_title: "发送消息",
      lbl_name: "姓名",
      lbl_email: "电子邮箱",
      lbl_subject: "主题",
      lbl_message: "消息内容",
      btn_send: "发送消息"
    },

    ja: {
      nav_status: "採用・コラボ受付中",
      nav_home: "ホーム",
      nav_about: "概要",
      nav_journey: "経歴",
      nav_skills: "スキル",
      nav_services: "サービス",
      nav_projects: "実績",
      nav_experience: "経験",
      nav_fighter: "格闘家",
      nav_achievements: "実績・資格",
      nav_faq: "FAQ",
      nav_community: "コミュニティ",
      nav_contact: "お問い合わせ",

      hero_welcome: "シニアソフトウェアエンジニア標準",
      hero_greeting: "こんにちは、",
      hero_full_slogan: '"Code with Purpose. Fight with Honor. Inspire with Action."',
      btn_download_cv: "CVをダウンロード",
      btn_view_projects: "プロジェクトを見る",
      btn_contact_me: "お問い合わせ",

      stat_projects: "完了プロジェクト",
      stat_certificates: "取得資格",
      stat_years: "学習年数",
      stat_contrib: "GitHub 貢献度",

      about_subtitle: "私について",
      about_title: "プロフィール・ビジョン・バリュー",
      biodata_header: "基本情報",
      bio_name_lbl: "氏名",
      bio_age_lbl: "年齢",
      bio_age_val: "22 歳",
      bio_loc_lbl: "居住地",
      bio_loc_val: "インドネシア ボゴール",
      bio_univ_lbl: "大学",
      bio_major_lbl: "専攻",
      bio_major_val: "ソフトウェア工学",
      values_title: "コアバリュー",

      about_story_header: "人生の歩みと哲学",
      about_story_p1: "こんにちは、Musyafa Anasrullahです。ソフトウェアエンジニアリング専攻の学生であり、格闘家、コンテンツクリエイターです。",
      about_story_p2: "現代的で効率的なWebアプリケーションの開発とアーキテクチャの構築に特化しています。",
      about_story_p3: "テコンドー、ムエタイ、キックボクシングを練習しており、武道から自律と精神力を学びました。",
      about_story_p4: "コンテンツクリエイターとして、学びのプロセスや技術知識を共有しています。",

      vm_vision_title: "ビジョン",
      vm_vision_desc: "価値あるデジタルソリューションを生み出し、自律と知識で人々にインスピレーションを与えるプロフェッショナル。",
      vm_mission_title: "ミッション",
      vm_mission_desc: "革新的なソフトウェアで社会的課題を解決し、技術と武道を通じて若い世代を鼓舞する。",
      tagline_trans: "目的を持ってコードを書く。名誉を持って戦う。行動でインスピレーションを与える。",

      journey_subtitle: "ライフタイムライン",
      journey_title: "教育と成長の歩み",
      journey_item1_desc: "SDIT Amalia Cibinong小学校で基礎教育。6年間の空手トレーニングを実施。",
      journey_item2_desc: "Gontor 1 現代全寮制学校でリーダーシップと3年間のムエタイを修得。",
      journey_item3_desc: "Pondok An-Nibrasにてアラビア語・英語の語学教師として1年間奉仕。",
      journey_item4_desc: "Bina Sarana Informatika大学でソフトウェア工学を学び、テコンドー部の幹事を務める。",

      skills_subtitle: "技術スキル",
      skills_title: "スキルと技術スタック",

      services_subtitle: "提供サービス",
      services_title: "提供可能なサービス",
      svc1_title: "Webサイト・アプリ開発",
      svc1_desc: "高速でセキュアなフルスタックWebアプリケーションの開発。",
      svc2_title: "UI/UX 実装",
      svc2_desc: "Figmaデザインをピクセルパーフェクトなフロントエンドコードに変換。",
      svc3_title: "REST API 開発",
      svc3_desc: "スケーラブルで堅牢なバックエンドAPIの設計と実装。",
      svc4_title: "バグ修正・最適化",
      svc4_desc: "コードのリファクタリングとWebパフォーマンスの高速化。",

      projects_subtitle: "ポートフォリオ実績",
      projects_title: "主要プロジェクト",
      filter_all: "すべて",
      filter_web: "Web開発",
      filter_mobile: "モバイル",
      filter_ui: "UIデザイン",
      filter_api: "API",
      filter_dashboard: "ダッシュボード",

      p1_desc: "リアルタイム在庫管理と決済ゲートウェイを備えたエンタープライズECプラットフォーム。",
      p2_desc: "暗号化取引処理とQRIS APIを連携させたデジタルバンキングポータル。",
      p3_desc: "格闘技（テコンドー・ムエタイ）トレーニング管理アプリ。",
      p4_desc: "レート制限と2要素認証を備えた高セキュリティ認証マイクロサービス。",
      p5_desc: "オンライン診療と医師予約管理システム。",
      p6_desc: "ダーク/ライトモードと5言語対応のシニアレベルポートフォリオWebサイト。",

      exp_subtitle: "職歴・活動経験",
      exp_title: "実務経験とリーダーシップ",
      exp_work_title: "職務経験",
      exp_org_title: "組織活動",
      exp_job1_desc: "語学主任教師として2年間勤務し、学生の規律と語学教育を統括。",
      exp_job2_desc: "Upwork & Fiverrにて2年間フリーランスWebエンジニアとして活動。",
      exp_org1_desc: "UBSIテコンドー部の幹事として組織運営を担当。",
      exp_org2_desc: "CodeWithMusyafaコミュニティの創設者として後進を育成。",

      fighter_subtitle: "格闘家スピリット",
      fighter_title: "格闘家としての歩み",
      f_bg_title: "武道経歴",
      f_sched_title: "トレーニング習慣",
      f_sched_sub: "妥協のない毎日の練習日課:",
      f_comp_title: "大会実績・メダル",
      motto_sub: "恐怖は友である。恐怖は私たちに高度な集中と警戒を与える。",
      f_gallery_title: "格闘技ギャラリー",
      f_gallery_sub: "画像をクリックすると拡大表示されます。",

      ach_subtitle: "実績と資格",
      ach_title: "資格・受賞歴",
      tab_cert: "資格証",
      tab_piagam: "賞状",
      tab_medals: "メダル",

      faq_subtitle: "よくある質問",
      faq_title: "Frequently Asked Questions",
      faq1_q: "1. あなたは誰ですか？",
      faq1_a: "Musyafa Anasrullahです。ソフトウェアエンジニア、格闘家、クリエイターとして活動しています。",
      faq2_q: "2. 現在の注力分野は？",
      faq2_a: "Web開発（フロントエンド、バックエンド、データベース、Docker）に注力しています。",
      faq3_q: "3. 扱う技術は？",
      faq3_a: "HTML, CSS, JS, Tailwind, PHP, Laravel, Node.js, MySQLなどです。",
      faq4_q: "4. 開発依頼やコラボは可能ですか？",
      faq4_a: "はい。フリーランス案件やインターンのご相談を歓迎します。",
      faq5_q: "5. なぜ格闘技をするのですか？",
      faq5_a: "規律、継続、精神的強さを養うためです。",
      faq6_q: "6. なぜ発信活動をするのですか？",
      faq6_a: "知識は共有することで価値が高まるからです。",
      faq7_q: "7. キャリアの目標は？",
      faq7_a: "優れたソフトウェアエンジニアとして社会に貢献することです。",
      faq8_q: "8. 連絡方法は？",
      faq8_a: "Email、LinkedIn、GitHub、WhatsAppからご連絡ください。",

      comm_desc: "CodeWithMusyafa Communityはプログラミングを学ぶすべての人を支援するコミュニティです。",

      contact_subtitle: "お問い合わせ",
      contact_title: "ご連絡・ご相談",
      contact_info_title: "連絡先情報",
      contact_info_desc: "Web開発プロジェクトやコラボレーションに関するご相談をお待ちしています。",
      contact_form_title: "メッセージを送信",
      lbl_name: "お名前",
      lbl_email: "メールアドレス",
      lbl_subject: "件名",
      lbl_message: "メッセージ本文",
      btn_send: "送信する"
    },

    ko: {
      nav_status: "채용 및 협업 가능",
      nav_home: "홈",
      nav_about: "소개",
      nav_journey: "여정",
      nav_skills: "기술",
      nav_services: "서비스",
      nav_projects: "프로젝트",
      nav_experience: "경력",
      nav_fighter: "파이터",
      nav_achievements: "성과",
      nav_faq: "FAQ",
      nav_community: "커뮤니티",
      nav_contact: "연락처",

      hero_welcome: "시니어 소프트웨어 엔지니어링 표준",
      hero_greeting: "안녕하세요, 저는",
      hero_full_slogan: '"Code with Purpose. Fight with Honor. Inspire with Action."',
      btn_download_cv: "이력서 다운로드",
      btn_view_projects: "프로젝트 보기",
      btn_contact_me: "문의하기",

      stat_projects: "완료된 프로젝트",
      stat_certificates: "취득 자격증",
      stat_years: "학습 경력",
      stat_contrib: "GitHub 기여 수",

      about_subtitle: "소개",
      about_title: "프로필, 비전, 미션 & 가치",
      biodata_header: "인적 사항",
      bio_name_lbl: "이름",
      bio_age_lbl: "나이",
      bio_age_val: "22 세",
      bio_loc_lbl: "거주지",
      bio_loc_val: "인도네시아 보고르",
      bio_univ_lbl: "대학교",
      bio_major_lbl: "전공",
      bio_major_val: "소프트웨어 공학",
      values_title: "핵심 가치",

      about_story_header: "삶의 여정과 철학",
      about_story_p1: "안녕하세요, Musyafa Anasrullah입니다. 소프트웨어 공학 학생이자 파이터, 콘텐츠 크리에이터입니다.",
      about_story_p2: "현대적이고 효율적인 풀스택 웹 애플리케이션 개발과 데이터베이스 시스템에 집중하고 있습니다.",
      about_story_p3: "태권도, 무에타이, 킥복싱을 수련하며 규율과 정신력을 배웠습니다.",
      about_story_p4: "크리에이터로서 학습 여정과 기술 지식을 공유하고 있습니다.",

      vm_vision_title: "비전",
      vm_vision_desc: "의미 있는 디지털 솔루션을 창조하고 절제된 삶으로 영감을 주는 엔지니어.",
      vm_mission_title: "미션",
      vm_mission_desc: "혁신적인 소프트웨어로 현실의 문제를 해결하고 젊은 세대에게 동기를 부여하는 것.",
      tagline_trans: "목적을 가지고 코딩하라. 명예롭게 싸워라. 행동으로 영감을 주라.",

      journey_subtitle: "타임라인",
      journey_title: "교육 및 성장 여정",
      journey_item1_desc: "SDIT Amalia Cibinong 초등 교육 및 6년간의 가라테 수련.",
      journey_item2_desc: "Gontor 1 기숙학교에서 리더십 함양 및 3년간 무에타이 수련.",
      journey_item3_desc: "Pondok An-Nibras에서 아랍어 및 영어 교사로 1년간 봉사.",
      journey_item4_desc: "UBSI 대학교 소프트웨어 공학 전공 및 태권도 부서 총무 역임.",

      skills_subtitle: "기술 역량",
      skills_title: "기술 스택",

      services_subtitle: "전문 서비스",
      services_title: "제공하는 서비스",
      svc1_title: "웹사이트 및 앱 개발",
      svc1_desc: "빠르고 안전한 풀스택 웹 애플리케이션 개발.",
      svc2_title: "UI/UX 구현",
      svc2_desc: "Figma 디자인을 디테일한 인터랙티브 코드 변환.",
      svc3_title: "REST API 개발",
      svc3_desc: "안전하고 확장 가능한 백엔드 RESTful API 구축.",
      svc4_title: "버그 수정 및 최적화",
      svc4_desc: "코드 리팩토링 및 웹 성능 최적화.",

      projects_subtitle: "포트폴리오",
      projects_title: "주요 프로젝트",
      filter_all: "전체",
      filter_web: "웹 개발",
      filter_mobile: "모바일",
      filter_ui: "UI 디자인",
      filter_api: "API",
      filter_dashboard: "대시보드",

      p1_desc: "실시간 재고 관리 및 결제 시스템을 갖춘 엔터프라이즈 이커머스 플랫폼.",
      p2_desc: "암호화된 금융 거래 및 QRIS API 연동 디지털 뱅킹 포털.",
      p3_desc: "무술(태권도 & 무에타이) 트레이닝 관리 앱.",
      p4_desc: "2FA 인증 및 처리량 제한 기능을 갖춘 인증 마이크로서비스.",
      p5_desc: "온라인 원격 진료 및 의사 예약 관리 시스템.",
      p6_desc: "5개 국어 지원 및 다크/라이트 모드가 적용된 시니어 포트폴리오 웹사이트.",

      exp_subtitle: "경력 및 활동",
      exp_title: "경력 및 리더십",
      exp_work_title: "직무 경력",
      exp_org_title: "조직 활동",
      exp_job1_desc: "어학 주임 교사로 2년간 근무하며 학생 지도 및 규율 관리.",
      exp_job2_desc: "Upwork & Fiverr에서 2년간 프리랜서 웹 개발자로 활동.",
      exp_org1_desc: "UBSI 태권도부 총무로 1년간 행정 및 대회 관리 총괄.",
      exp_org2_desc: "CodeWithMusyafa 개발자 커뮤니티 설립 및 멘토링.",

      fighter_subtitle: "파이터 정신",
      fighter_title: "무술 및 파이터 이력",
      f_bg_title: "무술 경력",
      f_sched_title: "훈련 일과",
      f_sched_sub: "타협 없는 매일의 훈련 루틴:",
      f_comp_title: "대회 및 메달",
      motto_sub: "두려움은 친구다. 두려움은 우리를 경계하게 만들고 최상의 집중력을 발휘하게 한다.",
      f_gallery_title: "무술 갤러리",
      f_gallery_sub: "이미지를 클릭하면 확대 갤러리가 열립니다.",

      ach_subtitle: "성과 및 자격",
      ach_title: "자격증 및 수상",
      tab_cert: "자격증",
      tab_piagam: "상장",
      tab_medals: "메달",

      faq_subtitle: "자주 묻는 질문",
      faq_title: "Frequently Asked Questions",
      faq1_q: "1. 당신은 누구인가요?",
      faq1_a: "저는 Musyafa Anasrullah이며 소프트웨어 엔지니어, 파이터, 크리에이터입니다.",
      faq2_q: "2. 현재 어떤 분야에 집중하고 있나요?",
      faq2_a: "웹 풀스택 개발, 데이터베이스, Docker 기술에 집중하고 있습니다.",
      faq3_q: "3. 주로 사용하는 기술은 무엇인가요?",
      faq3_a: "HTML, CSS, JS, Tailwind, PHP, Laravel, Node.js, MySQL 등입니다.",
      faq4_q: "4. 외주 프로젝트나 협업이 가능한가요?",
      faq4_a: "네! 프리랜서 프로젝트 및 인턴십 협업을 환영합니다.",
      faq5_q: "5. 왜 무술을 수련하나요?",
      faq5_a: "자기 관리, 절제력, 정신력을 기르기 위해서입니다.",
      faq6_q: "6. 크리에이터 활동을 하는 이유는?",
      faq6_a: "지식은 공유할 때 가치가 커지기 때문입니다.",
      faq7_q: "7. 커리어 목표는 무엇인가요?",
      faq7_a: "세상에 기여하는 뛰어난 소프트웨어 엔지니어가 되는 것입니다.",
      faq8_q: "8. 어떻게 연락할 수 있나요?",
      faq8_a: "이메일, LinkedIn, GitHub, WhatsApp을 통해 연락 주시기 바랍니다.",

      comm_desc: "CodeWithMusyafa Community는 개발을 배우는 모든 이들을 돕기 위해 만들어진 커뮤니티입니다.",

      contact_subtitle: "문의하기",
      contact_title: "대화 및 협업 시작",
      contact_info_title: "연락처 정보",
      contact_info_desc: "웹 개발 프로젝트 및 협업에 관한 의견을 나눠보세요.",
      contact_form_title: "메시지 보내기",
      lbl_name: "성함",
      lbl_email: "이메일 주소",
      lbl_subject: "제목",
      lbl_message: "메시지 내용",
      btn_send: "메시지 전송"
    },

    es: {
      nav_status: "Disponible para Trabajo & Colaboración",
      nav_home: "Inicio",
      nav_about: "Acerca",
      nav_journey: "Trayectoria",
      nav_skills: "Habilidades",
      nav_services: "Servicios",
      nav_projects: "Proyectos",
      nav_experience: "Experiencia",
      nav_fighter: "Luchador",
      nav_achievements: "Logros",
      nav_faq: "FAQ",
      nav_community: "Comunidad",
      nav_contact: "Contacto",

      hero_welcome: "Estándar de Ingeniería de Software Senior",
      hero_greeting: "Hola, soy",
      hero_full_slogan: '"Code with Purpose. Fight with Honor. Inspire with Action."',
      btn_download_cv: "Descargar CV",
      btn_view_projects: "Ver Proyectos",
      btn_contact_me: "Contáctame",

      stat_projects: "Proyectos Completados",
      stat_certificates: "Certificados Obtenidos",
      stat_years: "Años de Aprendizaje",
      stat_contrib: "Contribuciones GitHub",

      about_subtitle: "SOBRE MÍ",
      about_title: "Bio, Visión, Misión & Valores",
      biodata_header: "Datos Personales",
      bio_name_lbl: "Nombre Completo",
      bio_age_lbl: "Edad",
      bio_age_val: "22 Años",
      bio_loc_lbl: "Ubicación",
      bio_loc_val: "Bogor, Java Occidental, Indonesia",
      bio_univ_lbl: "Universidad",
      bio_major_lbl: "Carrera",
      bio_major_val: "Ingeniería de Software",
      values_title: "Valores Fundamentales",

      about_story_header: "Trayectoria de Vida & Filosofía",
      about_story_p1: "Hola, soy Musyafa Anasrullah. Soy estudiante de Ingeniería de Software, Luchador y Creador de Contenido apasionado por construir tecnología significativa, vivir con disciplina e inspirar a otros.",
      about_story_p2: "Mi trayectoria está moldeada por tres mundos complementarios. Como estudiante de Ingeniería de Software, me enfoco en desarrollar soluciones digitales modernas, eficientes y centradas en el usuario. Domino frontend, backend, bases de datos y arquitectura.",
      about_story_p3: "Más allá de la tecnología, practico Taekwondo, Muay Thai y Kickboxing. Las artes marciales me enseñaron que el éxito se construye con disciplina, consistencia y coraje.",
      about_story_p4: "Como Creador de Contenido, documento mi proceso de aprendizaje, comparto conocimiento e inspiro a futuros desarrolladores.",

      vm_vision_title: "Visión",
      vm_vision_desc: "Convertirme en un profesional tecnológico que crea soluciones digitales significativas, vive con disciplina e inspira a otros a través del conocimiento y la acción.",
      vm_mission_title: "Misión",
      vm_mission_desc: "Desarrollar software innovador que resuelva desafíos reales e inspire a la juventud a través de la tecnología y las artes marciales.",
      tagline_trans: "Codifica con Propósito. Lucha con Honor. Inspira con Acción.",

      journey_subtitle: "LÍNEA DEL TIEMPO",
      journey_title: "Trayectoria Educativa & de Carácter",
      journey_item1_desc: "Educación primaria en SDIT Amalia Cibinong. Disciplina básica y 6 años de entrenamiento de Karate.",
      journey_item2_desc: "Internado islámico en Gontor 1 Ponorogo. Liderazgo, disciplina, dominio del árabe e inglés, y 3 años de Muay Thai.",
      journey_item3_desc: "Servicio como profesor de idiomas (árabe & inglés) en Pondok An-Nibras Subang, Java Occidental durante 1 año.",
      journey_item4_desc: "Estudios de Ingeniería de Software en Universidad BSI, Secretario del Club de Taekwondo.",

      skills_subtitle: "COMPETENCIA TÉCNICA",
      skills_title: "Habilidades & Stack Tecnológico",

      services_subtitle: "SERVICIOS PROFESIONALES",
      services_title: "Servicios que Ofrezco",
      svc1_title: "Desarrollo Web",
      svc1_desc: "Desarrollo de aplicaciones web fullstack modernas, rápidas, seguras y adaptadas a las necesidades del negocio.",
      svc2_title: "Implementación UI/UX",
      svc2_desc: "Conversión de diseños Figma en código frontend interactivo con animaciones fluidas.",
      svc3_title: "Desarrollo REST API",
      svc3_desc: "Construcción de APIs backend robustas y escalables con autenticación JWT/OAuth.",
      svc4_title: "Corrección de Bugs & Optimización",
      svc4_desc: "Depuración, refactorización de código y optimización del rendimiento web.",

      projects_subtitle: "OBRAS DE PORTFOLIO",
      projects_title: "Proyectos Destacados",
      filter_all: "Todos",
      filter_web: "Desarrollo Web",
      filter_mobile: "Móvil",
      filter_ui: "UI Design",
      filter_api: "API",
      filter_dashboard: "Dashboard",

      p1_desc: "Plataforma e-commerce empresarial con gestión de inventario en tiempo real, pasarela de pago multi-canal y panel de análisis.",
      p2_desc: "Portal de banca digital con procesamiento de microtransacciones encriptadas e integración de API QRIS.",
      p3_desc: "Rastreador de entrenamiento de artes marciales (Taekwondo & Muay Thai), registro de nutrición y gestión de sparring.",
      p4_desc: "Microservicio de autenticación centralizado con limitación de velocidad, 2FA y registros de auditoría.",
      p5_desc: "Portal de telemedicina en línea con programación de citas médicas e integración de registros de pacientes.",
      p6_desc: "Sitio web de portfolio profesional de nivel senior con modo oscuro/claro, soporte de 15 idiomas y gráficos de partículas.",

      exp_subtitle: "EXPERIENCIA LABORAL & ORGANIZACIONAL",
      exp_title: "Experiencia & Liderazgo",
      exp_work_title: "Experiencia Laboral",
      exp_org_title: "Experiencia Organizacional",
      exp_job1_desc: "Servicio de 2 años como profesor principal de idiomas (árabe & inglés) en Pondok An-Nibras Subang.",
      exp_job2_desc: "Desarrollador web freelance en Upwork & Fiverr durante 2 años, construyendo aplicaciones web para clientes internacionales.",
      exp_org1_desc: "Secretario del Club de Taekwondo UBSI durante 1 año, supervisando administración y propuestas de torneos.",
      exp_org2_desc: "Fundador de CodeWithMusyafa Community, mentor de desarrolladores emergentes.",

      fighter_subtitle: "PERSONA LUCHADORA & ARTES MARCIALES",
      fighter_title: "Persona Luchadora & Artes Marciales",
      f_bg_title: "Trayectoria en Artes Marciales",
      f_sched_title: "Disciplina de Entrenamiento",
      f_sched_sub: "Horario de entrenamiento diario sin compromiso:",
      f_comp_title: "Competencias & Medallas",
      motto_sub: "El miedo es un amigo. El miedo nos mantiene alertas, preparados y enfocados al máximo nivel.",
      f_gallery_title: "Galería de Artes Marciales",
      f_gallery_sub: "Haz clic en cualquier imagen para abrir la galería en pantalla completa.",

      ach_subtitle: "HONORES & CERTIFICACIONES",
      ach_title: "Certificados & Premios",
      tab_cert: "Certificados",
      tab_piagam: "Premios",
      tab_medals: "Medallas",

      faq_subtitle: "PREGUNTAS FRECUENTES",
      faq_title: "Frequently Asked Questions",
      faq1_q: "1. ¿Quién eres?",
      faq1_a: "Soy Musyafa Anasrullah, estudiante de Ingeniería de Software, luchador y creador de contenido apasionado por la tecnología y el desarrollo personal.",
      faq2_q: "2. ¿En qué áreas te enfocas actualmente?",
      faq2_a: "Desarrollo web moderno: frontend, backend, bases de datos, Git, Docker y computación en la nube.",
      faq3_q: "3. ¿Qué tecnologías utilizas?",
      faq3_a: "HTML, CSS, JavaScript, Tailwind CSS, PHP, Laravel, Node.js, Express.js, MySQL, Git, GitHub y más.",
      faq4_q: "4. ¿Aceptas proyectos freelance o colaboraciones?",
      faq4_a: "¡Sí! Estoy abierto a proyectos freelance, pasantías y colaboraciones en ingeniería de software.",
      faq5_q: "5. ¿Por qué practicas artes marciales?",
      faq5_a: "Las artes marciales me enseñan disciplina, consistencia, respeto y fortaleza mental que aplico en la tecnología y la vida.",
      faq6_q: "6. ¿Por qué eres Creador de Contenido?",
      faq6_a: "El conocimiento crece cuando se comparte. Documento mi aprendizaje para inspirar a futuros desarrolladores.",
      faq7_q: "7. ¿Cuál es tu objetivo profesional?",
      faq7_a: "Convertirme en un Ingeniero de Software profesional que entregue soluciones digitales de impacto e inspire a otros.",
      faq8_q: "8. ¿Cómo puedo contactarte?",
      faq8_a: "Contáctame por email, LinkedIn, GitHub o WhatsApp en la sección de Contacto.",

      comm_desc: "CodeWithMusyafa Community es un espacio creado para ayudar a cualquier persona a aprender programación y tecnología mediante debates, materiales de estudio y colaboración en proyectos.",

      contact_subtitle: "CONTÁCTAME",
      contact_title: "Iniciar una Conversación",
      contact_info_title: "Información de Contacto",
      contact_info_desc: "Hablemos de proyectos de desarrollo web, colaboraciones o ideas sobre tecnología y artes marciales.",
      contact_form_title: "Envíame un Mensaje",
      lbl_name: "Nombre Completo",
      lbl_email: "Dirección de Email",
      lbl_subject: "Asunto",
      lbl_message: "Mensaje",
      btn_send: "Enviar Mensaje"
    },

    fr: {
      nav_status: "Disponible pour Emploi & Collaboration",
      nav_home: "Accueil",
      nav_about: "À Propos",
      nav_journey: "Parcours",
      nav_skills: "Compétences",
      nav_services: "Services",
      nav_projects: "Projets",
      nav_experience: "Expérience",
      nav_fighter: "Combattant",
      nav_achievements: "Réalisations",
      nav_faq: "FAQ",
      nav_community: "Communauté",
      nav_contact: "Contact",

      hero_welcome: "Standard Ingénierie Logicielle Senior",
      hero_greeting: "Bonjour, je suis",
      hero_full_slogan: '"Code with Purpose. Fight with Honor. Inspire with Action."',
      btn_download_cv: "Télécharger CV",
      btn_view_projects: "Voir les Projets",
      btn_contact_me: "Me Contacter",

      stat_projects: "Projets Réalisés",
      stat_certificates: "Certificats Obtenus",
      stat_years: "Années d'Apprentissage",
      stat_contrib: "Contributions GitHub",

      about_subtitle: "À PROPOS DE MOI",
      about_title: "Bio, Vision, Mission & Valeurs",
      biodata_header: "Données Personnelles",
      bio_name_lbl: "Nom Complet",
      bio_age_lbl: "Âge",
      bio_age_val: "22 Ans",
      bio_loc_lbl: "Localisation",
      bio_loc_val: "Bogor, Java Occidental, Indonésie",
      bio_univ_lbl: "Université",
      bio_major_lbl: "Filière",
      bio_major_val: "Génie Logiciel",
      values_title: "Valeurs Fondamentales",

      about_story_header: "Parcours de Vie & Philosophie",
      about_story_p1: "Bonjour, je suis Musyafa Anasrullah. Je suis étudiant en Génie Logiciel, Combattant et Créateur de Contenu passionné par la construction de technologies utiles, la vie disciplinée et l'inspiration des autres.",
      about_story_p2: "Mon parcours est façonné par trois mondes complémentaires. En tant qu'étudiant en Génie Logiciel, je me concentre sur le développement de solutions numériques modernes, efficaces et centrées sur l'utilisateur.",
      about_story_p3: "Au-delà de la technologie, je pratique le Taekwondo, le Muay Thai et le Kickboxing. Les arts martiaux m'ont appris que le succès se construit par la discipline, la constance et le courage.",
      about_story_p4: "En tant que Créateur de Contenu, je documente mon parcours d'apprentissage et partage mes connaissances pour inspirer les futurs développeurs.",

      vm_vision_title: "Vision",
      vm_vision_desc: "Devenir un professionnel technologique créant des solutions numériques significatives, vivant avec discipline et inspirant les autres à travers la connaissance et l'action.",
      vm_mission_title: "Mission",
      vm_mission_desc: "Développer des logiciels innovants résolvant des défis réels tout en inspirant la jeunesse par la technologie et les arts martiaux.",
      tagline_trans: "Coder avec Intention. Combattre avec Honneur. Inspirer par l'Action.",

      journey_subtitle: "CHRONOLOGIE DE VIE",
      journey_title: "Parcours Éducatif & de Caractère",
      journey_item1_desc: "Éducation primaire à SDIT Amalia Cibinong. Discipline de base et 6 ans de formation en Karaté.",
      journey_item2_desc: "Internat islamique à Gontor 1 Ponorogo. Leadership, discipline, maîtrise de l'arabe & anglais, et 3 ans de Muay Thai.",
      journey_item3_desc: "Service en tant que professeur de langues (arabe & anglais) à Pondok An-Nibras Subang, Java Occidental pendant 1 an.",
      journey_item4_desc: "Études en Génie Logiciel à l'Université BSI, Secrétaire du Club de Taekwondo.",

      skills_subtitle: "COMPÉTENCES TECHNIQUES",
      skills_title: "Compétences & Stack Technologique",

      services_subtitle: "SERVICES PROFESSIONNELS",
      services_title: "Services que je Propose",
      svc1_title: "Développement Web",
      svc1_desc: "Développement d'applications web fullstack modernes, rapides, sécurisées et adaptées aux besoins métier.",
      svc2_title: "Implémentation UI/UX",
      svc2_desc: "Transformation des designs Figma en code frontend interactif avec des animations fluides.",
      svc3_title: "Développement REST API",
      svc3_desc: "Construction d'APIs backend robustes et évolutives avec authentification JWT/OAuth.",
      svc4_title: "Correction de Bugs & Optimisation",
      svc4_desc: "Débogage, refactoring de code et optimisation des performances web.",

      projects_subtitle: "TRAVAUX DE PORTFOLIO",
      projects_title: "Projets Phares",
      filter_all: "Tous",
      filter_web: "Développement Web",
      filter_mobile: "Mobile",
      filter_ui: "Design UI",
      filter_api: "API",
      filter_dashboard: "Tableau de Bord",

      p1_desc: "Plateforme e-commerce d'entreprise avec gestion des stocks en temps réel et passerelle de paiement multi-canal.",
      p2_desc: "Portail bancaire numérique avec traitement de microtransactions chiffrées et intégration API QRIS.",
      p3_desc: "Application de suivi d'entraînement en arts martiaux (Taekwondo & Muay Thai) et gestionnaire de sparring.",
      p4_desc: "Microservice d'authentification centralisé avec limitation de débit, 2FA et journaux d'audit.",
      p5_desc: "Portail de télémédecine en ligne avec prise de rendez-vous et intégration de dossiers médicaux.",
      p6_desc: "Site web portfolio professionnel senior avec mode sombre/clair, support 15 langues et graphiques de particules.",

      exp_subtitle: "EXPÉRIENCE PROFESSIONNELLE & ORGANISATIONNELLE",
      exp_title: "Expérience & Leadership",
      exp_work_title: "Expérience Professionnelle",
      exp_org_title: "Expérience Organisationnelle",
      exp_job1_desc: "2 ans en tant que professeur principal de langues (arabe & anglais) à Pondok An-Nibras Subang.",
      exp_job2_desc: "Développeur web freelance sur Upwork & Fiverr pendant 2 ans pour des clients internationaux.",
      exp_org1_desc: "Secrétaire du Club de Taekwondo UBSI pendant 1 an, supervisant l'administration et les propositions de tournois.",
      exp_org2_desc: "Fondateur de CodeWithMusyafa Community, mentorant les développeurs en herbe.",

      fighter_subtitle: "PERSONA COMBATTANTE & ARTS MARTIAUX",
      fighter_title: "Persona Combattante & Arts Martiaux",
      f_bg_title: "Parcours en Arts Martiaux",
      f_sched_title: "Discipline d'Entraînement",
      f_sched_sub: "Programme d'entraînement quotidien sans compromis :",
      f_comp_title: "Compétitions & Médailles",
      motto_sub: "La peur est un ami. La peur nous garde alertes, préparés et concentrés au plus haut niveau.",
      f_gallery_title: "Galerie d'Arts Martiaux",
      f_gallery_sub: "Cliquez sur une image pour ouvrir la galerie en plein écran.",

      ach_subtitle: "HONNEURS & CERTIFICATIONS",
      ach_title: "Certificats & Récompenses",
      tab_cert: "Certificats",
      tab_piagam: "Récompenses",
      tab_medals: "Médailles",

      faq_subtitle: "QUESTIONS FRÉQUENTES",
      faq_title: "Frequently Asked Questions",
      faq1_q: "1. Qui êtes-vous ?",
      faq1_a: "Je suis Musyafa Anasrullah, étudiant en Génie Logiciel, combattant et créateur de contenu passionné par la technologie et le développement personnel.",
      faq2_q: "2. Sur quels domaines vous concentrez-vous actuellement ?",
      faq2_a: "Développement web moderne : frontend, backend, bases de données, Git, Docker et cloud computing.",
      faq3_q: "3. Quelles technologies utilisez-vous ?",
      faq3_a: "HTML, CSS, JavaScript, Tailwind CSS, PHP, Laravel, Node.js, Express.js, MySQL, Git, GitHub et plus.",
      faq4_q: "4. Acceptez-vous des projets freelance ou des collaborations ?",
      faq4_a: "Oui ! Je suis ouvert aux projets freelance, aux stages et aux collaborations en génie logiciel.",
      faq5_q: "5. Pourquoi pratiquez-vous les arts martiaux ?",
      faq5_a: "Les arts martiaux m'enseignent discipline, constance, respect et solidité mentale que j'applique à la technologie et à la vie.",
      faq6_q: "6. Pourquoi êtes-vous Créateur de Contenu ?",
      faq6_a: "La connaissance grandit lorsqu'elle est partagée. Je documente mon apprentissage pour inspirer les futurs développeurs.",
      faq7_q: "7. Quel est votre objectif professionnel ?",
      faq7_a: "Devenir un Ingénieur Logiciel professionnel livrant des solutions numériques à impact et inspirant les autres.",
      faq8_q: "8. Comment vous contacter ?",
      faq8_a: "Contactez-moi par email, LinkedIn, GitHub ou WhatsApp dans la section Contact.",

      comm_desc: "CodeWithMusyafa Community est un espace créé pour aider quiconque à apprendre la programmation et la technologie à travers des discussions, des matériaux d'apprentissage et la collaboration sur des projets.",

      contact_subtitle: "CONTACTEZ-MOI",
      contact_title: "Commencer une Conversation",
      contact_info_title: "Informations de Contact",
      contact_info_desc: "Discutons de projets de développement web, de collaborations ou d'idées sur la technologie et les arts martiaux.",
      contact_form_title: "Envoyez-moi un Message",
      lbl_name: "Nom Complet",
      lbl_email: "Adresse Email",
      lbl_subject: "Sujet",
      lbl_message: "Message",
      btn_send: "Envoyer le Message"
    },

    de: {
      nav_status: "Verfügbar für Arbeit & Kollaboration",
      nav_home: "Startseite",
      nav_about: "Über Mich",
      nav_journey: "Werdegang",
      nav_skills: "Fähigkeiten",
      nav_services: "Dienste",
      nav_projects: "Projekte",
      nav_experience: "Erfahrung",
      nav_fighter: "Kämpfer",
      nav_achievements: "Leistungen",
      nav_faq: "FAQ",
      nav_community: "Community",
      nav_contact: "Kontakt",

      hero_welcome: "Senior Software Engineering Standard",
      hero_greeting: "Hallo, ich bin",
      hero_full_slogan: '"Code with Purpose. Fight with Honor. Inspire with Action."',
      btn_download_cv: "Lebenslauf herunterladen",
      btn_view_projects: "Projekte ansehen",
      btn_contact_me: "Kontaktiere Mich",

      stat_projects: "Abgeschlossene Projekte",
      stat_certificates: "Erlangte Zertifikate",
      stat_years: "Jahre des Lernens",
      stat_contrib: "GitHub Beiträge",

      about_subtitle: "ÜBER MICH",
      about_title: "Bio, Vision, Mission & Werte",
      biodata_header: "Persönliche Daten",
      bio_name_lbl: "Vollständiger Name",
      bio_age_lbl: "Alter",
      bio_age_val: "22 Jahre",
      bio_loc_lbl: "Wohnort",
      bio_loc_val: "Bogor, Westjava, Indonesien",
      bio_univ_lbl: "Universität",
      bio_major_lbl: "Studiengang",
      bio_major_val: "Software Engineering",
      values_title: "Kernwerte",

      about_story_header: "Lebensweg & Philosophie",
      about_story_p1: "Hallo, ich bin Musyafa Anasrullah. Ich bin Software-Engineering-Student, Kämpfer und Content Creator mit der Leidenschaft, bedeutungsvolle Technologie zu entwickeln, diszipliniert zu leben und andere zu inspirieren.",
      about_story_p2: "Mein Werdegang wird durch drei komplementäre Welten geprägt. Als Software-Engineering-Student konzentriere ich mich auf die Entwicklung moderner, effizienter und nutzerzentrierter digitaler Lösungen.",
      about_story_p3: "Über die Technologie hinaus trainiere ich Taekwondo, Muay Thai und Kickboxen. Die Kampfkünste lehrten mich, dass Erfolg durch Disziplin, Konsequenz und Mut aufgebaut wird.",
      about_story_p4: "Als Content Creator dokumentiere ich meinen Lernweg, teile Wissen und inspiriere zukünftige Entwickler.",

      vm_vision_title: "Vision",
      vm_vision_desc: "Ein Technologiefachmann zu werden, der bedeutungsvolle digitale Lösungen schafft, diszipliniert lebt und andere durch Wissen und Handeln inspiriert.",
      vm_mission_title: "Mission",
      vm_mission_desc: "Innovative Software entwickeln, die reale Herausforderungen löst, und die Jugend durch Technologie und Kampfkünste inspirieren.",
      tagline_trans: "Mit Ziel programmieren. Mit Ehre kämpfen. Mit Handeln inspirieren.",

      journey_subtitle: "LEBENS-TIMELINE",
      journey_title: "Bildungs- & Charakterentwicklung",
      journey_item1_desc: "Grundschulausbildung an der SDIT Amalia Cibinong. Grunddisziplin und 6 Jahre Karate-Training.",
      journey_item2_desc: "Islamisches Internat an der Gontor 1 Ponorogo. Führungsqualitäten, Disziplin, Arabisch & Englisch, und 3 Jahre Muay Thai.",
      journey_item3_desc: "Dienst als Sprachlehrer (Arabisch & Englisch) an Pondok An-Nibras Subang, Westjava für 1 Jahr.",
      journey_item4_desc: "Software Engineering Studium an der BSI Universität, Sekretär des Taekwondo-Clubs.",

      skills_subtitle: "TECHNISCHE KOMPETENZ",
      skills_title: "Fähigkeiten & Tech Stack",

      services_subtitle: "PROFESSIONELLE DIENSTE",
      services_title: "Dienste, die ich anbiete",
      svc1_title: "Web-Entwicklung",
      svc1_desc: "Fullstack-Webanwendungsentwicklung, schnell, sicher, responsiv und auf Geschäftsbedürfnisse zugeschnitten.",
      svc2_title: "UI/UX Implementierung",
      svc2_desc: "Umwandlung von Figma-Designs in pixelgenauen, interaktiven Frontend-Code mit flüssigen Animationen.",
      svc3_title: "REST API Entwicklung",
      svc3_desc: "Entwicklung robuster, skalierbarer Backend-APIs mit sicherer JWT/OAuth-Authentifizierung.",
      svc4_title: "Bug-Behebung & Optimierung",
      svc4_desc: "Debugging, Code-Refactoring und Web-Performance-Optimierung für Spitzeneffizienz.",

      projects_subtitle: "PORTFOLIO-WERKE",
      projects_title: "Hauptprojekte",
      filter_all: "Alle",
      filter_web: "Web-Entwicklung",
      filter_mobile: "Mobil",
      filter_ui: "UI Design",
      filter_api: "API",
      filter_dashboard: "Dashboard",

      p1_desc: "Enterprise-E-Commerce-Plattform mit Echtzeit-Bestandsverwaltung und Multi-Channel-Zahlungsgateway.",
      p2_desc: "Digitales Bankenportal mit verschlüsselter Mikrotransaktionsverarbeitung und QRIS API-Integration.",
      p3_desc: "Kampfkunst-Training-Tracker (Taekwondo & Muay Thai), Ernährungsprotokoll und Sparring-Manager.",
      p4_desc: "Zentralisierter Authentifizierungs-Microservice mit Rate-Limiting, 2FA und automatisierten Audit-Logs.",
      p5_desc: "Online-Telemedizin-Portal mit Arztterminplanung und Patientenakte-Integration.",
      p6_desc: "Senior-Level Portfolio-Website mit Dark/Light-Modus, 15-Sprachen-i18n-Unterstützung und Partikelgrafiken.",

      exp_subtitle: "BERUFS- & ORGANISATIONSERFAHRUNG",
      exp_title: "Erfahrung & Führung",
      exp_work_title: "Berufserfahrung",
      exp_org_title: "Organisationserfahrung",
      exp_job1_desc: "2 Jahre als Hauptsprachlehrer (Arabisch & Englisch) an Pondok An-Nibras Subang tätig.",
      exp_job2_desc: "2 Jahre als freiberuflicher Webentwickler auf Upwork & Fiverr für internationale Kunden.",
      exp_org1_desc: "Sekretär des Taekwondo-Clubs UBSI für 1 Jahr, zuständig für Verwaltung und Turnieranträge.",
      exp_org2_desc: "Gründer der CodeWithMusyafa Community, Mentoring von angehenden Entwicklern.",

      fighter_subtitle: "KÄMPFER-PERSONA & KAMPFKÜNSTE",
      fighter_title: "Kämpfer-Persona & Kampfkünste",
      f_bg_title: "Kampfkunst-Werdegang",
      f_sched_title: "Trainingsdisziplin",
      f_sched_sub: "Kompromissloses tägliches Trainingsprogramm:",
      f_comp_title: "Wettkämpfe & Medaillen",
      motto_sub: "Angst ist ein Freund. Angst hält uns wachsam, vorbereitet und auf höchstem Niveau fokussiert.",
      f_gallery_title: "Kampfkunst-Galerie",
      f_gallery_sub: "Klicke auf ein Bild, um die Vollbild-Galerie zu öffnen.",

      ach_subtitle: "AUSZEICHNUNGEN & ZERTIFIZIERUNGEN",
      ach_title: "Zertifikate & Auszeichnungen",
      tab_cert: "Zertifikate",
      tab_piagam: "Auszeichnungen",
      tab_medals: "Medaillen",

      faq_subtitle: "HÄUFIG GESTELLTE FRAGEN",
      faq_title: "Frequently Asked Questions",
      faq1_q: "1. Wer sind Sie?",
      faq1_a: "Ich bin Musyafa Anasrullah, Software-Engineering-Student, Kämpfer und Content Creator mit Leidenschaft für Technologie und persönliche Entwicklung.",
      faq2_q: "2. Auf welche Bereiche konzentrieren Sie sich derzeit?",
      faq2_a: "Modernes Webentwicklung: Frontend, Backend, Datenbanken, Git, Docker und Cloud Computing.",
      faq3_q: "3. Welche Technologien verwenden Sie?",
      faq3_a: "HTML, CSS, JavaScript, Tailwind CSS, PHP, Laravel, Node.js, Express.js, MySQL, Git, GitHub und mehr.",
      faq4_q: "4. Nehmen Sie Freiberufler-Projekte oder Kooperationen an?",
      faq4_a: "Ja! Ich bin offen für freiberufliche Projekte, Praktika und Kooperationen im Software Engineering.",
      faq5_q: "5. Warum trainieren Sie Kampfkünste?",
      faq5_a: "Kampfkünste lehren Disziplin, Konsequenz, Respekt und mentale Stärke, die ich in Technologie und Leben anwende.",
      faq6_q: "6. Warum sind Sie Content Creator?",
      faq6_a: "Wissen wächst wenn es geteilt wird. Ich dokumentiere mein Lernen, um zukünftige Entwickler zu inspirieren.",
      faq7_q: "7. Was ist Ihr Karriereziel?",
      faq7_a: "Ein professioneller Software Engineer zu werden, der wirkungsvolle digitale Lösungen liefert und andere inspiriert.",
      faq8_q: "8. Wie kann ich Sie kontaktieren?",
      faq8_a: "Kontaktieren Sie mich per E-Mail, LinkedIn, GitHub oder WhatsApp im Kontaktbereich.",

      comm_desc: "CodeWithMusyafa Community ist ein Raum, der geschaffen wurde, um jedem beim Erlernen von Programmierung und Technologie durch Diskussionen, Lernmaterialien und Projektzusammenarbeit zu helfen.",

      contact_subtitle: "KONTAKTIEREN SIE MICH",
      contact_title: "Gespräch beginnen",
      contact_info_title: "Kontaktinformationen",
      contact_info_desc: "Lassen Sie uns über Webentwicklungsprojekte, Kooperationen oder Technologie- und Kampfkunstideen sprechen.",
      contact_form_title: "Senden Sie mir eine Nachricht",
      lbl_name: "Vollständiger Name",
      lbl_email: "E-Mail-Adresse",
      lbl_subject: "Betreff",
      lbl_message: "Nachricht",
      btn_send: "Nachricht senden"
    },

    pt: {
      nav_status: "Disponível para Emprego & Colaboração",
      nav_home: "Início",
      nav_about: "Sobre",
      nav_journey: "Trajetória",
      nav_skills: "Habilidades",
      nav_services: "Serviços",
      nav_projects: "Projetos",
      nav_experience: "Experiência",
      nav_fighter: "Lutador",
      nav_achievements: "Conquistas",
      nav_faq: "FAQ",
      nav_community: "Comunidade",
      nav_contact: "Contato",

      hero_welcome: "Padrão de Engenharia de Software Sênior",
      hero_greeting: "Olá, eu sou",
      hero_full_slogan: '"Code with Purpose. Fight with Honor. Inspire with Action."',
      btn_download_cv: "Baixar Currículo",
      btn_view_projects: "Ver Projetos",
      btn_contact_me: "Entre em Contato",

      stat_projects: "Projetos Concluídos",
      stat_certificates: "Certificados Conquistados",
      stat_years: "Anos de Aprendizado",
      stat_contrib: "Contribuições GitHub",

      about_subtitle: "SOBRE MIM",
      about_title: "Bio, Visão, Missão & Valores",
      biodata_header: "Dados Pessoais",
      bio_name_lbl: "Nome Completo",
      bio_age_lbl: "Idade",
      bio_age_val: "22 Anos",
      bio_loc_lbl: "Localização",
      bio_loc_val: "Bogor, Java Ocidental, Indonésia",
      bio_univ_lbl: "Universidade",
      bio_major_lbl: "Curso",
      bio_major_val: "Engenharia de Software",
      values_title: "Valores Fundamentais",

      about_story_header: "Trajetória de Vida & Filosofia",
      about_story_p1: "Olá, eu sou Musyafa Anasrullah. Sou estudante de Engenharia de Software, Lutador e Criador de Conteúdo movido a construir tecnologia significativa, viver com disciplina e inspirar outros.",
      about_story_p2: "Minha trajetória é moldada por três mundos complementares. Como estudante de Engenharia de Software, foco em desenvolver soluções digitais modernas, eficientes e centradas no usuário.",
      about_story_p3: "Além da tecnologia, pratico Taekwondo, Muay Thai e Kickboxing. As artes marciais me ensinaram que o sucesso é construído pela disciplina, constância e coragem.",
      about_story_p4: "Como Criador de Conteúdo, documento minha jornada de aprendizado, compartilho conhecimento e inspiro futuros desenvolvedores.",

      vm_vision_title: "Visão",
      vm_vision_desc: "Tornar-me um profissional de tecnologia criando soluções digitais significativas, vivendo com disciplina e inspirando outros através do conhecimento e da ação.",
      vm_mission_title: "Missão",
      vm_mission_desc: "Desenvolver software inovador que resolva desafios reais e inspire a juventude por meio da tecnologia e das artes marciais.",
      tagline_trans: "Programe com Propósito. Lute com Honra. Inspire com Ação.",

      journey_subtitle: "LINHA DO TEMPO",
      journey_title: "Trajetória Educacional & de Caráter",
      journey_item1_desc: "Educação primária na SDIT Amalia Cibinong. Disciplina básica e 6 anos de treinamento de Karatê.",
      journey_item2_desc: "Internato islâmico na Gontor 1 Ponorogo. Liderança, disciplina, domínio do árabe & inglês, e 3 anos de Muay Thai.",
      journey_item3_desc: "Serviço como professor de idiomas (árabe & inglês) no Pondok An-Nibras Subang, Java Ocidental por 1 ano.",
      journey_item4_desc: "Estudo de Engenharia de Software na Universidade BSI, Secretário do Clube de Taekwondo.",

      skills_subtitle: "PROFICIÊNCIA TÉCNICA",
      skills_title: "Habilidades & Stack Tecnológico",

      services_subtitle: "SERVIÇOS PROFISSIONAIS",
      services_title: "Serviços que Ofereço",
      svc1_title: "Desenvolvimento Web",
      svc1_desc: "Desenvolvimento de aplicações web fullstack modernas, rápidas, seguras e adaptadas às necessidades do negócio.",
      svc2_title: "Implementação UI/UX",
      svc2_desc: "Conversão de designs Figma em código frontend interativo com animações fluidas.",
      svc3_title: "Desenvolvimento REST API",
      svc3_desc: "Construção de APIs backend robustas e escaláveis com autenticação JWT/OAuth segura.",
      svc4_title: "Correção de Bugs & Otimização",
      svc4_desc: "Depuração, refatoração de código e otimização de desempenho web.",

      projects_subtitle: "OBRAS DE PORTFÓLIO",
      projects_title: "Projetos em Destaque",
      filter_all: "Todos",
      filter_web: "Desenvolvimento Web",
      filter_mobile: "Mobile",
      filter_ui: "UI Design",
      filter_api: "API",
      filter_dashboard: "Dashboard",

      p1_desc: "Plataforma e-commerce empresarial com gerenciamento de estoque em tempo real e gateway de pagamento multi-canal.",
      p2_desc: "Portal bancário digital com processamento de microtransações criptografadas e integração de API QRIS.",
      p3_desc: "Rastreador de treinamento em artes marciais (Taekwondo & Muay Thai), diário nutricional e gerenciador de sparring.",
      p4_desc: "Microsserviço de autenticação centralizado com limitação de taxa, 2FA e logs de auditoria automatizados.",
      p5_desc: "Portal de telemedicina online com agendamento de consultas médicas e integração de prontuários.",
      p6_desc: "Site de portfólio profissional sênior com modo escuro/claro, suporte a 15 idiomas e gráficos de partículas.",

      exp_subtitle: "EXPERIÊNCIA PROFISSIONAL & ORGANIZACIONAL",
      exp_title: "Experiência & Liderança",
      exp_work_title: "Experiência Profissional",
      exp_org_title: "Experiência Organizacional",
      exp_job1_desc: "2 anos como professor principal de idiomas (árabe & inglês) no Pondok An-Nibras Subang.",
      exp_job2_desc: "Desenvolvedor web freelance no Upwork & Fiverr por 2 anos, construindo aplicações para clientes internacionais.",
      exp_org1_desc: "Secretário do Clube de Taekwondo UBSI por 1 ano, supervisionando administração e propostas de torneios.",
      exp_org2_desc: "Fundador da CodeWithMusyafa Community, mentorando desenvolvedores iniciantes.",

      fighter_subtitle: "PERSONA LUTADORA & ARTES MARCIAIS",
      fighter_title: "Persona Lutadora & Artes Marciais",
      f_bg_title: "Trajetória em Artes Marciais",
      f_sched_title: "Disciplina de Treino",
      f_sched_sub: "Programação diária de treino sem compromisso:",
      f_comp_title: "Competições & Medalhas",
      motto_sub: "O medo é um amigo. O medo nos mantém alertas, preparados e focados no mais alto nível.",
      f_gallery_title: "Galeria de Artes Marciais",
      f_gallery_sub: "Clique em qualquer imagem para abrir a galeria em tela cheia.",

      ach_subtitle: "HONRARIAS & CERTIFICAÇÕES",
      ach_title: "Certificados & Prêmios",
      tab_cert: "Certificados",
      tab_piagam: "Prêmios",
      tab_medals: "Medalhas",

      faq_subtitle: "PERGUNTAS FREQUENTES",
      faq_title: "Frequently Asked Questions",
      faq1_q: "1. Quem é você?",
      faq1_a: "Sou Musyafa Anasrullah, estudante de Engenharia de Software, lutador e criador de conteúdo apaixonado por tecnologia e desenvolvimento pessoal.",
      faq2_q: "2. Em quais áreas você está focado atualmente?",
      faq2_a: "Desenvolvimento web moderno: frontend, backend, bancos de dados, Git, Docker e computação em nuvem.",
      faq3_q: "3. Quais tecnologias você usa?",
      faq3_a: "HTML, CSS, JavaScript, Tailwind CSS, PHP, Laravel, Node.js, Express.js, MySQL, Git, GitHub e mais.",
      faq4_q: "4. Você aceita projetos freelance ou colaborações?",
      faq4_a: "Sim! Estou aberto a projetos freelance, estágios e colaborações em engenharia de software.",
      faq5_q: "5. Por que você pratica artes marciais?",
      faq5_a: "As artes marciais ensinam disciplina, consistência, respeito e força mental que aplico na tecnologia e na vida.",
      faq6_q: "6. Por que você é Criador de Conteúdo?",
      faq6_a: "O conhecimento cresce quando compartilhado. Documento meu aprendizado para inspirar futuros desenvolvedores.",
      faq7_q: "7. Qual é o seu objetivo de carreira?",
      faq7_a: "Tornar-me um Engenheiro de Software profissional entregando soluções digitais impactantes e inspirando outros.",
      faq8_q: "8. Como posso entrar em contato?",
      faq8_a: "Entre em contato por e-mail, LinkedIn, GitHub ou WhatsApp na seção de Contato.",

      comm_desc: "CodeWithMusyafa Community é um espaço criado para ajudar qualquer pessoa a aprender programação e tecnologia por meio de discussões, materiais de estudo e colaboração em projetos.",

      contact_subtitle: "ENTRE EM CONTATO",
      contact_title: "Iniciar uma Conversa",
      contact_info_title: "Informações de Contato",
      contact_info_desc: "Vamos discutir projetos de desenvolvimento web, colaborações ou ideias sobre tecnologia e artes marciais.",
      contact_form_title: "Envie-me uma Mensagem",
      lbl_name: "Nome Completo",
      lbl_email: "Endereço de Email",
      lbl_subject: "Assunto",
      lbl_message: "Mensagem",
      btn_send: "Enviar Mensagem"
    },

    ar: {
      nav_status: "متاح للعمل والتعاون",
      nav_home: "الرئيسية",
      nav_about: "عن",
      nav_journey: "المسيرة",
      nav_skills: "المهارات",
      nav_services: "الخدمات",
      nav_projects: "المشاريع",
      nav_experience: "الخبرة",
      nav_fighter: "المقاتل",
      nav_achievements: "الإنجازات",
      nav_faq: "الأسئلة",
      nav_community: "المجتمع",
      nav_contact: "التواصل",

      hero_welcome: "معيار هندسة البرمجيات الأول",
      hero_greeting: "مرحباً، أنا",
      hero_full_slogan: '"Code with Purpose. Fight with Honor. Inspire with Action."',
      btn_download_cv: "تحميل السيرة الذاتية",
      btn_view_projects: "عرض المشاريع",
      btn_contact_me: "تواصل معي",

      stat_projects: "مشاريع مكتملة",
      stat_certificates: "شهادات محققة",
      stat_years: "سنوات التعلم",
      stat_contrib: "مساهمات GitHub",

      about_subtitle: "عني",
      about_title: "السيرة الذاتية، الرؤية، الرسالة والقيم",
      biodata_header: "البيانات الشخصية",
      bio_name_lbl: "الاسم الكامل",
      bio_age_lbl: "العمر",
      bio_age_val: "22 عاماً",
      bio_loc_lbl: "الموقع",
      bio_loc_val: "بوغور، جاوا الغربية، إندونيسيا",
      bio_univ_lbl: "الجامعة",
      bio_major_lbl: "التخصص",
      bio_major_val: "هندسة البرمجيات",
      values_title: "القيم الأساسية",

      about_story_header: "مسيرة الحياة والفلسفة",
      about_story_p1: "مرحباً، أنا Musyafa Anasrullah. طالب هندسة برمجيات، مقاتل، ومنشئ محتوى شغوف ببناء تكنولوجيا هادفة، والعيش بانضباط، وإلهام الآخرين.",
      about_story_p2: "تتشكل مسيرتي من ثلاثة عوالم متكاملة. كطالب هندسة برمجيات، أركز على بناء حلول رقمية حديثة وفعّالة تلبي احتياجات المستخدم.",
      about_story_p3: "خارج عالم التقنية، أتدرب على التايكوندو، الموي تاي، والكيك بوكسينج. علمتني الفنون القتالية أن النجاح يُبنى بالانضباط والمثابرة والشجاعة.",
      about_story_p4: "كمنشئ محتوى، أوثق رحلة تعلمي وأشارك المعرفة لإلهام المطورين المستقبليين.",

      vm_vision_title: "الرؤية",
      vm_vision_desc: "أن أصبح متخصصاً في التكنولوجيا يخلق حلولاً رقمية ذات معنى، يعيش بانضباط ويلهم الآخرين من خلال المعرفة والعمل.",
      vm_mission_title: "الرسالة",
      vm_mission_desc: "تطوير برمجيات مبتكرة تحل تحديات حقيقية وتلهم الشباب من خلال التكنولوجيا والفنون القتالية.",
      tagline_trans: "اكتب كوداً بهدف. قاتل بشرف. ألهم بالعمل.",

      journey_subtitle: "الجدول الزمني للحياة",
      journey_title: "مسيرة التعليم وبناء الشخصية",
      journey_item1_desc: "التعليم الابتدائي في SDIT Amalia Cibinong. الانضباط الأساسي و6 سنوات من تدريب الكاراتيه.",
      journey_item2_desc: "التعليم الديني في Gontor 1 Ponorogo. بناء القيادة والانضباط وإتقان العربية والإنجليزية و3 سنوات من الموي تاي.",
      journey_item3_desc: "الخدمة كمعلم لغات (عربي وإنجليزي) في Pondok An-Nibras Subang، جاوا الغربية لمدة عام.",
      journey_item4_desc: "دراسة هندسة البرمجيات في جامعة BSI، سكرتير نادي التايكوندو.",

      skills_subtitle: "الكفاءة التقنية",
      skills_title: "المهارات والتقنيات",

      services_subtitle: "الخدمات المهنية",
      services_title: "الخدمات التي أقدمها",
      svc1_title: "تطوير المواقع",
      svc1_desc: "تطوير تطبيقات ويب fullstack حديثة وسريعة وآمنة ومخصصة لاحتياجات الأعمال.",
      svc2_title: "تنفيذ UI/UX",
      svc2_desc: "تحويل تصاميم Figma إلى كود frontend تفاعلي دقيق مع تحريكات سلسة.",
      svc3_title: "تطوير REST API",
      svc3_desc: "بناء واجهات برمجية قوية وقابلة للتوسع مع مصادقة JWT/OAuth آمنة.",
      svc4_title: "إصلاح الأخطاء والتحسين",
      svc4_desc: "تصحيح الأخطاء وإعادة هيكلة الكود وتحسين أداء المواقع.",

      projects_subtitle: "أعمال المحفظة",
      projects_title: "المشاريع البارزة",
      filter_all: "الكل",
      filter_web: "تطوير ويب",
      filter_mobile: "موبايل",
      filter_ui: "تصميم UI",
      filter_api: "API",
      filter_dashboard: "لوحة التحكم",

      p1_desc: "منصة تجارة إلكترونية مؤسسية مع إدارة المخزون في الوقت الفعلي وبوابة دفع متعددة القنوات.",
      p2_desc: "بوابة مصرفية رقمية مع معالجة المعاملات المشفرة وتكامل QRIS API.",
      p3_desc: "متتبع تدريب الفنون القتالية (التايكوندو والموي تاي) ومدير جلسات المبارزة.",
      p4_desc: "خدمة مصادقة مركزية مع تحديد المعدل و2FA وسجلات التدقيق.",
      p5_desc: "بوابة طب عن بُعد مع جدولة المواعيد الطبية وتكامل السجلات الطبية.",
      p6_desc: "موقع محفظة احترافي بمستوى أول مع وضع داكن/فاتح، دعم 15 لغة، ورسومات الجسيمات.",

      exp_subtitle: "الخبرة المهنية والتنظيمية",
      exp_title: "الخبرة والقيادة",
      exp_work_title: "الخبرة المهنية",
      exp_org_title: "الخبرة التنظيمية",
      exp_job1_desc: "سنتان كمعلم لغات رئيسي (عربي وإنجليزي) في Pondok An-Nibras Subang.",
      exp_job2_desc: "مطور ويب مستقل في Upwork و Fiverr لمدة سنتين للعملاء الدوليين.",
      exp_org1_desc: "سكرتير نادي التايكوندو UBSI لمدة عام، يشرف على الإدارة ومقترحات البطولات.",
      exp_org2_desc: "مؤسس مجتمع CodeWithMusyafa، يرعى المطورين الطموحين.",

      fighter_subtitle: "شخصية المقاتل والفنون القتالية",
      fighter_title: "شخصية المقاتل والفنون القتالية",
      f_bg_title: "مسار الفنون القتالية",
      f_sched_title: "انضباط التدريب",
      f_sched_sub: "جدول تدريب يومي لا تنازل فيه:",
      f_comp_title: "المسابقات والميداليات",
      motto_sub: "الخوف صديق. الخوف يجعلنا متيقظين، مستعدين، ومركزين على أعلى مستوى.",
      f_gallery_title: "معرض الفنون القتالية",
      f_gallery_sub: "انقر فوق أي صورة لفتح معرض الشاشة الكاملة.",

      ach_subtitle: "الأوسمة والشهادات",
      ach_title: "الشهادات والجوائز",
      tab_cert: "الشهادات",
      tab_piagam: "الجوائز",
      tab_medals: "الميداليات",

      faq_subtitle: "الأسئلة الشائعة",
      faq_title: "Frequently Asked Questions",
      faq1_q: "1. من أنت؟",
      faq1_a: "أنا Musyafa Anasrullah، طالب هندسة برمجيات، مقاتل، ومنشئ محتوى شغوف بالتكنولوجيا والتطوير الشخصي.",
      faq2_q: "2. ما هي مجالات تركيزك الحالية؟",
      faq2_a: "تطوير الويب الحديث: frontend، backend، قواعد البيانات، Git، Docker والحوسبة السحابية.",
      faq3_q: "3. ما التقنيات التي تستخدمها؟",
      faq3_a: "HTML، CSS، JavaScript، Tailwind CSS، PHP، Laravel، Node.js، Express.js، MySQL، Git، GitHub والمزيد.",
      faq4_q: "4. هل تقبل مشاريع مستقلة أو تعاون؟",
      faq4_a: "نعم! أنا منفتح على المشاريع المستقلة والتدريب والتعاون في هندسة البرمجيات.",
      faq5_q: "5. لماذا تمارس الفنون القتالية؟",
      faq5_a: "الفنون القتالية تعلمني الانضباط والمثابرة والاحترام والقوة العقلية التي أطبقها في التكنولوجيا والحياة.",
      faq6_q: "6. لماذا أنت منشئ محتوى؟",
      faq6_a: "المعرفة تنمو عندما تُشارك. أوثق تعلمي لإلهام المطورين المستقبليين.",
      faq7_q: "7. ما هو هدفك المهني؟",
      faq7_a: "أن أصبح مهندس برمجيات محترف يقدم حلولاً رقمية مؤثرة ويلهم الآخرين.",
      faq8_q: "8. كيف يمكنني التواصل معك؟",
      faq8_a: "تواصل معي عبر البريد الإلكتروني أو LinkedIn أو GitHub أو WhatsApp في قسم التواصل.",

      comm_desc: "مجتمع CodeWithMusyafa هو مساحة أنشأتها لمساعدة أي شخص على تعلم البرمجة والتكنولوجيا من خلال النقاشات ومواد التعلم والتعاون في المشاريع.",

      contact_subtitle: "تواصل معي",
      contact_title: "ابدأ محادثة",
      contact_info_title: "معلومات التواصل",
      contact_info_desc: "لنناقش مشاريع تطوير الويب، أو التعاون، أو أفكاراً حول التكنولوجيا والفنون القتالية.",
      contact_form_title: "أرسل لي رسالة",
      lbl_name: "الاسم الكامل",
      lbl_email: "عنوان البريد الإلكتروني",
      lbl_subject: "الموضوع",
      lbl_message: "الرسالة",
      btn_send: "إرسال الرسالة"
    },

    it: {
      nav_status: "Disponibile per Lavoro & Collaborazione",
      nav_home: "Home",
      nav_about: "Chi Sono",
      nav_journey: "Percorso",
      nav_skills: "Competenze",
      nav_services: "Servizi",
      nav_projects: "Progetti",
      nav_experience: "Esperienza",
      nav_fighter: "Combattente",
      nav_achievements: "Riconoscimenti",
      nav_faq: "FAQ",
      nav_community: "Community",
      nav_contact: "Contatti",

      hero_welcome: "Standard Ingegneria del Software Senior",
      hero_greeting: "Ciao, sono",
      hero_full_slogan: '"Code with Purpose. Fight with Honor. Inspire with Action."',
      btn_download_cv: "Scarica CV",
      btn_view_projects: "Vedi Progetti",
      btn_contact_me: "Contattami",

      stat_projects: "Progetti Completati",
      stat_certificates: "Certificati Ottenuti",
      stat_years: "Anni di Apprendimento",
      stat_contrib: "Contributi GitHub",

      about_subtitle: "CHI SONO",
      about_title: "Bio, Visione, Missione & Valori",
      biodata_header: "Dati Personali",
      bio_name_lbl: "Nome Completo",
      bio_age_lbl: "Età",
      bio_age_val: "22 Anni",
      bio_loc_lbl: "Posizione",
      bio_loc_val: "Bogor, Giava Occidentale, Indonesia",
      bio_univ_lbl: "Università",
      bio_major_lbl: "Corso di Studi",
      bio_major_val: "Ingegneria del Software",
      values_title: "Valori Fondamentali",

      about_story_header: "Percorso di Vita & Filosofia",
      about_story_p1: "Ciao, sono Musyafa Anasrullah. Sono uno studente di Ingegneria del Software, Combattente e Content Creator appassionato di tecnologia utile, vita disciplinata e ispirare gli altri.",
      about_story_p2: "Il mio percorso è plasmato da tre mondi complementari. Come studente di Ingegneria del Software, mi concentro sullo sviluppo di soluzioni digitali moderne, efficienti e incentrate sull'utente.",
      about_story_p3: "Oltre la tecnologia, pratico Taekwondo, Muay Thai e Kickboxing. Le arti marziali mi hanno insegnato che il successo si costruisce con disciplina, costanza e coraggio.",
      about_story_p4: "Come Content Creator, documento il mio percorso di apprendimento, condivido conoscenze e ispiro i futuri sviluppatori.",

      vm_vision_title: "Visione",
      vm_vision_desc: "Diventare un professionista tecnologico che crea soluzioni digitali significative, vive con disciplina e ispira gli altri attraverso la conoscenza e l'azione.",
      vm_mission_title: "Missione",
      vm_mission_desc: "Sviluppare software innovativo che risolva sfide reali e ispiri i giovani attraverso la tecnologia e le arti marziali.",
      tagline_trans: "Programma con Scopo. Combatti con Onore. Ispira con l'Azione.",

      journey_subtitle: "LINEA DEL TEMPO",
      journey_title: "Percorso Educativo & di Carattere",
      journey_item1_desc: "Istruzione elementare presso SDIT Amalia Cibinong. Disciplina di base e 6 anni di allenamento in Karate.",
      journey_item2_desc: "Collegio islamico a Gontor 1 Ponorogo. Leadership, disciplina, padronanza dell'arabo & inglese, e 3 anni di Muay Thai.",
      journey_item3_desc: "Servizio come insegnante di lingue (arabo & inglese) a Pondok An-Nibras Subang, Giava Occidentale per 1 anno.",
      journey_item4_desc: "Studio di Ingegneria del Software all'Università BSI, Segretario del Club di Taekwondo.",

      skills_subtitle: "COMPETENZE TECNICHE",
      skills_title: "Competenze & Stack Tecnologico",

      services_subtitle: "SERVIZI PROFESSIONALI",
      services_title: "Servizi che Offro",
      svc1_title: "Sviluppo Web",
      svc1_desc: "Sviluppo di applicazioni web fullstack moderne, veloci, sicure e su misura per le esigenze aziendali.",
      svc2_title: "Implementazione UI/UX",
      svc2_desc: "Trasformazione di design Figma in codice frontend interattivo con animazioni fluide.",
      svc3_title: "Sviluppo REST API",
      svc3_desc: "Costruzione di API backend robuste e scalabili con autenticazione JWT/OAuth sicura.",
      svc4_title: "Correzione Bug & Ottimizzazione",
      svc4_desc: "Debug, refactoring del codice e ottimizzazione delle prestazioni web.",

      projects_subtitle: "OPERE DEL PORTFOLIO",
      projects_title: "Progetti in Evidenza",
      filter_all: "Tutti",
      filter_web: "Sviluppo Web",
      filter_mobile: "Mobile",
      filter_ui: "UI Design",
      filter_api: "API",
      filter_dashboard: "Dashboard",

      p1_desc: "Piattaforma e-commerce enterprise con gestione inventario in tempo reale e gateway di pagamento multi-canale.",
      p2_desc: "Portale bancario digitale con elaborazione di microtransazioni crittografate e integrazione QRIS API.",
      p3_desc: "Tracker di allenamento per arti marziali (Taekwondo & Muay Thai), registro nutrizionale e gestore di sparring.",
      p4_desc: "Microservizio di autenticazione centralizzato con rate-limiting, 2FA e audit log automatizzati.",
      p5_desc: "Portale di telemedicina online con prenotazioni mediche e integrazione cartelle cliniche.",
      p6_desc: "Sito portfolio professionale senior con modalità scuro/chiaro, supporto 15 lingue e grafica a particelle.",

      exp_subtitle: "ESPERIENZA LAVORATIVA & ORGANIZZATIVA",
      exp_title: "Esperienza & Leadership",
      exp_work_title: "Esperienza Lavorativa",
      exp_org_title: "Esperienza Organizzativa",
      exp_job1_desc: "2 anni come insegnante principale di lingue (arabo & inglese) a Pondok An-Nibras Subang.",
      exp_job2_desc: "Sviluppatore web freelance su Upwork & Fiverr per 2 anni per clienti internazionali.",
      exp_org1_desc: "Segretario del Club di Taekwondo UBSI per 1 anno, supervisore dell'amministrazione e delle proposte tornei.",
      exp_org2_desc: "Fondatore della CodeWithMusyafa Community, mentore di sviluppatori in erba.",

      fighter_subtitle: "PERSONA COMBATTENTE & ARTI MARZIALI",
      fighter_title: "Persona Combattente & Arti Marziali",
      f_bg_title: "Percorso nelle Arti Marziali",
      f_sched_title: "Disciplina di Allenamento",
      f_sched_sub: "Programma di allenamento giornaliero senza compromessi:",
      f_comp_title: "Competizioni & Medaglie",
      motto_sub: "La paura è un'amica. La paura ci mantiene vigili, preparati e concentrati al massimo livello.",
      f_gallery_title: "Galleria di Arti Marziali",
      f_gallery_sub: "Clicca su qualsiasi immagine per aprire la galleria a schermo intero.",

      ach_subtitle: "ONORIFICENZE & CERTIFICAZIONI",
      ach_title: "Certificati & Premi",
      tab_cert: "Certificati",
      tab_piagam: "Premi",
      tab_medals: "Medaglie",

      faq_subtitle: "DOMANDE FREQUENTI",
      faq_title: "Frequently Asked Questions",
      faq1_q: "1. Chi sei?",
      faq1_a: "Sono Musyafa Anasrullah, studente di Ingegneria del Software, combattente e content creator appassionato di tecnologia e crescita personale.",
      faq2_q: "2. Su quali aree ti concentri attualmente?",
      faq2_a: "Sviluppo web moderno: frontend, backend, database, Git, Docker e cloud computing.",
      faq3_q: "3. Quali tecnologie utilizzi?",
      faq3_a: "HTML, CSS, JavaScript, Tailwind CSS, PHP, Laravel, Node.js, Express.js, MySQL, Git, GitHub e altro.",
      faq4_q: "4. Accetti progetti freelance o collaborazioni?",
      faq4_a: "Sì! Sono aperto a progetti freelance, tirocini e collaborazioni in ingegneria del software.",
      faq5_q: "5. Perché pratichi le arti marziali?",
      faq5_a: "Le arti marziali insegnano disciplina, costanza, rispetto e forza mentale che applico nella tecnologia e nella vita.",
      faq6_q: "6. Perché sei un Content Creator?",
      faq6_a: "La conoscenza cresce quando viene condivisa. Documento il mio apprendimento per ispirare i futuri sviluppatori.",
      faq7_q: "7. Qual è il tuo obiettivo di carriera?",
      faq7_a: "Diventare un Ingegnere del Software professionista che consegna soluzioni digitali di impatto e ispira gli altri.",
      faq8_q: "8. Come posso contattarti?",
      faq8_a: "Contattami via email, LinkedIn, GitHub o WhatsApp nella sezione Contatti.",

      comm_desc: "CodeWithMusyafa Community è uno spazio creato per aiutare chiunque voglia imparare la programmazione e la tecnologia attraverso discussioni, materiali didattici e collaborazione su progetti.",

      contact_subtitle: "CONTATTAMI",
      contact_title: "Inizia una Conversazione",
      contact_info_title: "Informazioni di Contatto",
      contact_info_desc: "Parliamo di progetti di sviluppo web, collaborazioni o idee sulla tecnologia e le arti marziali.",
      contact_form_title: "Inviami un Messaggio",
      lbl_name: "Nome Completo",
      lbl_email: "Indirizzo Email",
      lbl_subject: "Oggetto",
      lbl_message: "Messaggio",
      btn_send: "Invia Messaggio"
    },

    ru: {
      nav_status: "Открыт для Работы & Сотрудничества",
      nav_home: "Главная",
      nav_about: "Обо Мне",
      nav_journey: "Путь",
      nav_skills: "Навыки",
      nav_services: "Услуги",
      nav_projects: "Проекты",
      nav_experience: "Опыт",
      nav_fighter: "Боец",
      nav_achievements: "Достижения",
      nav_faq: "FAQ",
      nav_community: "Сообщество",
      nav_contact: "Контакты",

      hero_welcome: "Стандарт Старшего Разработчика ПО",
      hero_greeting: "Привет, я",
      hero_full_slogan: '"Code with Purpose. Fight with Honor. Inspire with Action."',
      btn_download_cv: "Скачать Резюме",
      btn_view_projects: "Смотреть Проекты",
      btn_contact_me: "Связаться",

      stat_projects: "Завершённых Проектов",
      stat_certificates: "Полученных Сертификатов",
      stat_years: "Лет Обучения",
      stat_contrib: "Вклад в GitHub",

      about_subtitle: "ОБО МНЕ",
      about_title: "Биография, Видение, Миссия & Ценности",
      biodata_header: "Личные Данные",
      bio_name_lbl: "Полное Имя",
      bio_age_lbl: "Возраст",
      bio_age_val: "22 Года",
      bio_loc_lbl: "Местоположение",
      bio_loc_val: "Богор, Западная Ява, Индонезия",
      bio_univ_lbl: "Университет",
      bio_major_lbl: "Специальность",
      bio_major_val: "Разработка Программного Обеспечения",
      values_title: "Основные Ценности",

      about_story_header: "Жизненный Путь & Философия",
      about_story_p1: "Привет, я Musyafa Anasrullah. Я студент разработки программного обеспечения, боец и создатель контента, стремящийся создавать технологии с целью, жить дисциплинированно и вдохновлять других.",
      about_story_p2: "Мой путь сформирован тремя взаимодополняющими мирами. Как студент разработки ПО, я концентрируюсь на создании современных, эффективных и ориентированных на пользователя цифровых решений.",
      about_story_p3: "Помимо технологий, я тренирую Тхэквондо, Муай Тай и Кикбоксинг. Боевые искусства научили меня, что успех строится через дисциплину, последовательность и смелость.",
      about_story_p4: "Как создатель контента, я документирую свой путь обучения, делюсь знаниями и вдохновляю будущих разработчиков.",

      vm_vision_title: "Видение",
      vm_vision_desc: "Стать технологическим профессионалом, создающим значимые цифровые решения, живущим дисциплинированно и вдохновляющим других через знания и действия.",
      vm_mission_title: "Миссия",
      vm_mission_desc: "Разрабатывать инновационное ПО, решающее реальные задачи, и вдохновлять молодёжь через технологии и боевые искусства.",
      tagline_trans: "Код с Целью. Бой с Честью. Вдохновение через Действие.",

      journey_subtitle: "ВРЕМЕННАЯ ШКАЛА ЖИЗНИ",
      journey_title: "Образовательный & Характерный Путь",
      journey_item1_desc: "Начальное образование в SDIT Amalia Cibinong. Базовая дисциплина и 6 лет тренировок по карате.",
      journey_item2_desc: "Исламский интернат в Gontor 1 Ponorogo. Развитие лидерства, дисциплины, владение арабским & английским, и 3 года Муай Тай.",
      journey_item3_desc: "Служба учителем языков (арабский & английский) в Pondok An-Nibras Subang, Западная Ява в течение 1 года.",
      journey_item4_desc: "Изучение разработки ПО в Университете BSI, Секретарь клуба Тхэквондо.",

      skills_subtitle: "ТЕХНИЧЕСКАЯ КОМПЕТЕНТНОСТЬ",
      skills_title: "Навыки & Технологический Стек",

      services_subtitle: "ПРОФЕССИОНАЛЬНЫЕ УСЛУГИ",
      services_title: "Услуги, которые я Предлагаю",
      svc1_title: "Веб-Разработка",
      svc1_desc: "Разработка fullstack веб-приложений: современных, быстрых, безопасных и адаптированных к потребностям бизнеса.",
      svc2_title: "Реализация UI/UX",
      svc2_desc: "Преобразование дизайнов Figma в точный интерактивный frontend-код с плавными анимациями.",
      svc3_title: "Разработка REST API",
      svc3_desc: "Создание надёжных, масштабируемых backend-API с безопасной аутентификацией JWT/OAuth.",
      svc4_title: "Исправление Ошибок & Оптимизация",
      svc4_desc: "Отладка, рефакторинг кода и оптимизация производительности веб-сайтов.",

      projects_subtitle: "РАБОТЫ ПОРТФОЛИО",
      projects_title: "Основные Проекты",
      filter_all: "Все",
      filter_web: "Веб-Разработка",
      filter_mobile: "Мобильные",
      filter_ui: "UI Дизайн",
      filter_api: "API",
      filter_dashboard: "Панель управления",

      p1_desc: "Корпоративная e-commerce платформа с управлением запасами в реальном времени и многоканальным платёжным шлюзом.",
      p2_desc: "Цифровой банковский портал с обработкой зашифрованных микротранзакций и интеграцией QRIS API.",
      p3_desc: "Трекер тренировок по боевым искусствам (Тхэквондо & Муай Тай), журнал питания и менеджер спарринга.",
      p4_desc: "Централизованный сервис аутентификации с ограничением скорости, 2FA и автоматическими журналами аудита.",
      p5_desc: "Онлайн-телемедицинский портал с планированием приёмов и интеграцией медицинских записей.",
      p6_desc: "Профессиональный portfolio-сайт уровня senior с тёмным/светлым режимом, поддержкой 15 языков и анимацией частиц.",

      exp_subtitle: "ПРОФЕССИОНАЛЬНЫЙ & ОРГАНИЗАЦИОННЫЙ ОПЫТ",
      exp_title: "Опыт & Лидерство",
      exp_work_title: "Профессиональный Опыт",
      exp_org_title: "Организационный Опыт",
      exp_job1_desc: "2 года главным учителем языков (арабский & английский) в Pondok An-Nibras Subang.",
      exp_job2_desc: "Фриланс веб-разработчик на Upwork & Fiverr в течение 2 лет для международных клиентов.",
      exp_org1_desc: "Секретарь клуба Тхэквондо UBSI в течение 1 года, контроль администрации и предложений по турнирам.",
      exp_org2_desc: "Основатель CodeWithMusyafa Community, наставник начинающих разработчиков.",

      fighter_subtitle: "ПЕРСОНА БОЙЦА & БОЕВЫЕ ИСКУССТВА",
      fighter_title: "Персона Бойца & Боевые Искусства",
      f_bg_title: "Путь в Боевых Искусствах",
      f_sched_title: "Тренировочная Дисциплина",
      f_sched_sub: "Ежедневный тренировочный график без компромиссов:",
      f_comp_title: "Соревнования & Медали",
      motto_sub: "Страх — это друг. Страх держит нас в боевой готовности, подготовленными и сосредоточенными на высшем уровне.",
      f_gallery_title: "Галерея Боевых Искусств",
      f_gallery_sub: "Нажмите на любое изображение, чтобы открыть полноэкранную галерею.",

      ach_subtitle: "НАГРАДЫ & СЕРТИФИКАЦИИ",
      ach_title: "Сертификаты & Награды",
      tab_cert: "Сертификаты",
      tab_piagam: "Дипломы",
      tab_medals: "Медали",

      faq_subtitle: "ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ",
      faq_title: "Frequently Asked Questions",
      faq1_q: "1. Кто вы?",
      faq1_a: "Я Musyafa Anasrullah, студент разработки ПО, боец и создатель контента, увлечённый технологиями и личностным ростом.",
      faq2_q: "2. На чём вы сосредоточены сейчас?",
      faq2_a: "Современная веб-разработка: frontend, backend, базы данных, Git, Docker и облачные вычисления.",
      faq3_q: "3. Какие технологии вы используете?",
      faq3_a: "HTML, CSS, JavaScript, Tailwind CSS, PHP, Laravel, Node.js, Express.js, MySQL, Git, GitHub и другие.",
      faq4_q: "4. Принимаете ли вы фриланс-проекты или сотрудничество?",
      faq4_a: "Да! Открыт для фриланс-проектов, стажировок и сотрудничества в области разработки ПО.",
      faq5_q: "5. Зачем вы занимаетесь боевыми искусствами?",
      faq5_a: "Боевые искусства учат дисциплине, последовательности, уважению и ментальной стойкости, которые я применяю в технологиях и жизни.",
      faq6_q: "6. Зачем вы занимаетесь созданием контента?",
      faq6_a: "Знания растут, когда ими делятся. Я документирую своё обучение, чтобы вдохновить будущих разработчиков.",
      faq7_q: "7. Какова ваша карьерная цель?",
      faq7_a: "Стать профессиональным разработчиком ПО, создающим значимые цифровые решения и вдохновляющим других.",
      faq8_q: "8. Как связаться с вами?",
      faq8_a: "Свяжитесь через email, LinkedIn, GitHub или WhatsApp в разделе Контакты.",

      comm_desc: "CodeWithMusyafa Community — пространство, созданное для помощи всем желающим изучить программирование и технологии через обсуждения, учебные материалы и совместную работу над проектами.",

      contact_subtitle: "СВЯЖИТЕСЬ СО МНОЙ",
      contact_title: "Начать Разговор",
      contact_info_title: "Контактная Информация",
      contact_info_desc: "Обсудим проекты веб-разработки, сотрудничество или идеи о технологиях и боевых искусствах.",
      contact_form_title: "Отправьте мне Сообщение",
      lbl_name: "Полное Имя",
      lbl_email: "Адрес Email",
      lbl_subject: "Тема",
      lbl_message: "Сообщение",
      btn_send: "Отправить Сообщение"
    },

    tr: {
      nav_status: "İş & İşbirliği için Müsait",
      nav_home: "Ana Sayfa",
      nav_about: "Hakkımda",
      nav_journey: "Yolculuk",
      nav_skills: "Beceriler",
      nav_services: "Hizmetler",
      nav_projects: "Projeler",
      nav_experience: "Deneyim",
      nav_fighter: "Dövüşçü",
      nav_achievements: "Başarılar",
      nav_faq: "SSS",
      nav_community: "Topluluk",
      nav_contact: "İletişim",

      hero_welcome: "Kıdemli Yazılım Mühendisliği Standardı",
      hero_greeting: "Merhaba, ben",
      hero_full_slogan: '"Code with Purpose. Fight with Honor. Inspire with Action."',
      btn_download_cv: "CV İndir",
      btn_view_projects: "Projeleri Gör",
      btn_contact_me: "Bana Ulaş",

      stat_projects: "Tamamlanan Proje",
      stat_certificates: "Kazanılan Sertifika",
      stat_years: "Öğrenme Yılı",
      stat_contrib: "GitHub Katkısı",

      about_subtitle: "HAKKIMDA",
      about_title: "Bio, Vizyon, Misyon & Değerler",
      biodata_header: "Kişisel Bilgiler",
      bio_name_lbl: "Tam Ad",
      bio_age_lbl: "Yaş",
      bio_age_val: "22 Yaşında",
      bio_loc_lbl: "Konum",
      bio_loc_val: "Bogor, Batı Cava, Endonezya",
      bio_univ_lbl: "Üniversite",
      bio_major_lbl: "Bölüm",
      bio_major_val: "Yazılım Mühendisliği",
      values_title: "Temel Değerler",

      about_story_header: "Yaşam Yolculuğu & Felsefesi",
      about_story_p1: "Merhaba, ben Musyafa Anasrullah. Anlamlı teknoloji üretmeye, disiplinli yaşamaya ve başkalarına ilham vermeye tutkulu bir Yazılım Mühendisliği öğrencisi, Dövüşçü ve İçerik Üreticisiyim.",
      about_story_p2: "Yolculuğum üç tamamlayıcı dünya tarafından şekilleniyor. Yazılım Mühendisliği öğrencisi olarak, modern, verimli ve kullanıcı odaklı dijital çözümler geliştirmeye odaklanıyorum.",
      about_story_p3: "Teknolojinin ötesinde, Tekvando, Muay Thai ve Kickboks antrenmanı yapıyorum. Dövüş sanatları bana başarının disiplin, tutarlılık ve cesaret ile inşa edildiğini öğretti.",
      about_story_p4: "İçerik Üreticisi olarak, öğrenme yolculuğumu belgeliyorum, bilgi paylaşıyorum ve gelecekteki geliştiricilere ilham veriyorum.",

      vm_vision_title: "Vizyon",
      vm_vision_desc: "Anlamlı dijital çözümler yaratan, disiplinli yaşayan ve bilgi & eylemle başkalarına ilham veren bir teknoloji profesyoneli olmak.",
      vm_mission_title: "Misyon",
      vm_mission_desc: "Gerçek dünya zorluklarını çözen yenilikçi yazılımlar geliştirmek ve gençleri teknoloji & dövüş sanatlarıyla ilham almak.",
      tagline_trans: "Amaçla Kod Yaz. Onurla Savaş. Eylemle İlham Ver.",

      journey_subtitle: "YAŞAM ZAMAN ÇİZELGESİ",
      journey_title: "Eğitim & Karakter Yolculuğu",
      journey_item1_desc: "SDIT Amalia Cibinong ilköğretim eğitimi. Temel disiplin ve 6 yıllık Karate eğitimi.",
      journey_item2_desc: "Gontor 1 Ponorogo İslami yatılı okul. Liderlik, disiplin, Arapça & İngilizce hakimiyeti ve 3 yıllık Muay Thai.",
      journey_item3_desc: "Pondok An-Nibras Subang, Batı Cava'da 1 yıl boyunca dil öğretmeni (Arapça & İngilizce) olarak hizmet.",
      journey_item4_desc: "BSI Üniversitesi'nde Yazılım Mühendisliği öğrenimi, Tekvando Kulübü Sekreteri.",

      skills_subtitle: "TEKNİK YETERLİLİK",
      skills_title: "Beceriler & Teknoloji Yığını",

      services_subtitle: "PROFESYONEL HİZMETLER",
      services_title: "Sunduğum Hizmetler",
      svc1_title: "Web Geliştirme",
      svc1_desc: "Hızlı, güvenli, duyarlı ve işletme ihtiyaçlarına göre özelleştirilmiş modern fullstack web uygulaması geliştirme.",
      svc2_title: "UI/UX Uygulama",
      svc2_desc: "Figma tasarımlarını düzgün animasyonlarla piksel mükemmeliyetinde interaktif frontend koduna dönüştürme.",
      svc3_title: "REST API Geliştirme",
      svc3_desc: "Güvenli JWT/OAuth kimlik doğrulaması ile sağlam, ölçeklenebilir backend API'ları oluşturma.",
      svc4_title: "Hata Giderme & Optimizasyon",
      svc4_desc: "Hata ayıklama, kod yeniden düzenleme ve web performans optimizasyonu.",

      projects_subtitle: "PORTFOLYO ÇALIŞMALARI",
      projects_title: "Öne Çıkan Projeler",
      filter_all: "Hepsi",
      filter_web: "Web Geliştirme",
      filter_mobile: "Mobil",
      filter_ui: "UI Tasarım",
      filter_api: "API",
      filter_dashboard: "Gösterge Paneli",

      p1_desc: "Gerçek zamanlı envanter yönetimi ve çok kanallı ödeme geçidi ile kurumsal e-ticaret platformu.",
      p2_desc: "Şifreli mikro işlem ve QRIS API entegrasyonu ile dijital bankacılık portalı.",
      p3_desc: "Dövüş sanatları antrenman takipçisi (Tekvando & Muay Thai), beslenme günlüğü ve sparring yöneticisi.",
      p4_desc: "Hız sınırlama, 2FA ve otomatik denetim günlükleri ile merkezi kimlik doğrulama mikro servisi.",
      p5_desc: "Doktor randevu planlama ve hasta kayıtları entegrasyonu ile çevrimiçi telemedikal portal.",
      p6_desc: "Koyu/açık mod, 15 dil desteği ve parçacık grafikleri ile kıdemli düzey portfolyo web sitesi.",

      exp_subtitle: "İŞ & ORGANİZASYON DENEYİMİ",
      exp_title: "Deneyim & Liderlik",
      exp_work_title: "İş Deneyimi",
      exp_org_title: "Organizasyon Deneyimi",
      exp_job1_desc: "Pondok An-Nibras Subang'da 2 yıl baş dil öğretmeni (Arapça & İngilizce) olarak hizmet.",
      exp_job2_desc: "Upwork & Fiverr'da 2 yıl serbest web geliştiricisi olarak uluslararası müşteriler için çalışma.",
      exp_org1_desc: "UBSI Tekvando Kulübü Sekreteri olarak 1 yıl idare ve turnuva tekliflerini denetleme.",
      exp_org2_desc: "CodeWithMusyafa Community kurucusu, yetenekli geliştiricilere mentorlük.",

      fighter_subtitle: "DÖVÜŞÇÜ KİŞİLİĞİ & DÖVÜŞ SANATLARI",
      fighter_title: "Dövüşçü Kişiliği & Dövüş Sanatları",
      f_bg_title: "Dövüş Sanatları Geçmişi",
      f_sched_title: "Antrenman Disiplini",
      f_sched_sub: "Uzlaşmasız günlük antrenman programı:",
      f_comp_title: "Yarışmalar & Madalyalar",
      motto_sub: "Korku bir dosttur. Korku bizi uyanık, hazır ve en yüksek düzeyde odaklanmış tutar.",
      f_gallery_title: "Dövüş Sanatları Galerisi",
      f_gallery_sub: "Tam ekran galeriyi açmak için herhangi bir resme tıklayın.",

      ach_subtitle: "ONURLAR & SERTİFİKASYONLAR",
      ach_title: "Sertifikalar & Ödüller",
      tab_cert: "Sertifikalar",
      tab_piagam: "Ödüller",
      tab_medals: "Madalyalar",

      faq_subtitle: "SIK SORULAN SORULAR",
      faq_title: "Frequently Asked Questions",
      faq1_q: "1. Kimsiniz?",
      faq1_a: "Ben Musyafa Anasrullah, teknoloji ve kişisel gelişime tutkulu bir Yazılım Mühendisliği öğrencisi, dövüşçü ve içerik üreticisiyim.",
      faq2_q: "2. Şu anda hangi alanlara odaklanıyorsunuz?",
      faq2_a: "Modern web geliştirme: frontend, backend, veritabanları, Git, Docker ve bulut bilişim.",
      faq3_q: "3. Hangi teknolojileri kullanıyorsunuz?",
      faq3_a: "HTML, CSS, JavaScript, Tailwind CSS, PHP, Laravel, Node.js, Express.js, MySQL, Git, GitHub ve daha fazlası.",
      faq4_q: "4. Serbest projeler veya işbirlikleri kabul ediyor musunuz?",
      faq4_a: "Evet! Serbest projeler, stajlar ve yazılım mühendisliği alanında işbirlikleri için açığım.",
      faq5_q: "5. Neden dövüş sanatları yapıyorsunuz?",
      faq5_a: "Dövüş sanatları disiplin, tutarlılık, saygı ve zihinsel güç öğretiyor; bunları teknolojide ve yaşamda uyguluyorum.",
      faq6_q: "6. Neden İçerik Üreticisisiniz?",
      faq6_a: "Bilgi paylaşıldığında büyür. Gelecekteki geliştiricilere ilham vermek için öğrenme sürecimi belgeliyorum.",
      faq7_q: "7. Kariyer hedefiniz nedir?",
      faq7_a: "Etkili dijital çözümler sunan ve başkalarına ilham veren profesyonel bir Yazılım Mühendisi olmak.",
      faq8_q: "8. Nasıl iletişime geçebilirim?",
      faq8_a: "İletişim bölümündeki email, LinkedIn, GitHub veya WhatsApp üzerinden ulaşabilirsiniz.",

      comm_desc: "CodeWithMusyafa Community, programlama ve teknolojiyi tartışmalar, öğrenme materyalleri ve proje işbirliği aracılığıyla öğrenmek isteyen herkese yardımcı olmak için oluşturulmuş bir alan.",

      contact_subtitle: "BENIMLE İLETİŞİME GEÇİN",
      contact_title: "Bir Konuşma Başlat",
      contact_info_title: "İletişim Bilgileri",
      contact_info_desc: "Web geliştirme projeleri, işbirlikleri veya teknoloji & dövüş sanatları hakkındaki fikirlerinizi konuşalım.",
      contact_form_title: "Bana Mesaj Gönder",
      lbl_name: "Tam Ad",
      lbl_email: "E-posta Adresi",
      lbl_subject: "Konu",
      lbl_message: "Mesaj",
      btn_send: "Mesaj Gönder"
    },

    nl: {
      nav_status: "Beschikbaar voor Werk & Samenwerking",
      nav_home: "Home",
      nav_about: "Over Mij",
      nav_journey: "Reis",
      nav_skills: "Vaardigheden",
      nav_services: "Diensten",
      nav_projects: "Projecten",
      nav_experience: "Ervaring",
      nav_fighter: "Vechter",
      nav_achievements: "Prestaties",
      nav_faq: "FAQ",
      nav_community: "Community",
      nav_contact: "Contact",

      hero_welcome: "Senior Software Engineering Standaard",
      hero_greeting: "Hallo, ik ben",
      hero_full_slogan: '"Code with Purpose. Fight with Honor. Inspire with Action."',
      btn_download_cv: "CV Downloaden",
      btn_view_projects: "Projecten Bekijken",
      btn_contact_me: "Contact Opnemen",

      stat_projects: "Voltooide Projecten",
      stat_certificates: "Behaalde Certificaten",
      stat_years: "Jaar Leren",
      stat_contrib: "GitHub Bijdragen",

      about_subtitle: "OVER MIJ",
      about_title: "Bio, Visie, Missie & Waarden",
      biodata_header: "Persoonlijke Gegevens",
      bio_name_lbl: "Volledige Naam",
      bio_age_lbl: "Leeftijd",
      bio_age_val: "22 Jaar",
      bio_loc_lbl: "Locatie",
      bio_loc_val: "Bogor, West-Java, Indonesië",
      bio_univ_lbl: "Universiteit",
      bio_major_lbl: "Studierichting",
      bio_major_val: "Software Engineering",
      values_title: "Kernwaarden",

      about_story_header: "Levensreis & Filosofie",
      about_story_p1: "Hallo, ik ben Musyafa Anasrullah. Ik ben een Software Engineering student, Vechter en Content Creator gedreven door zinvolle technologie te bouwen, gedisciplineerd te leven en anderen te inspireren.",
      about_story_p2: "Mijn reis wordt gevormd door drie complementaire werelden. Als Software Engineering student focus ik op het bouwen van moderne, efficiënte en gebruikersgerichte digitale oplossingen.",
      about_story_p3: "Buiten technologie train ik Taekwondo, Muay Thai en Kickboksen. Vechtsporten leerden me dat succes wordt gebouwd door discipline, consistentie en moed.",
      about_story_p4: "Als Content Creator documenteer ik mijn leerproces, deel kennis en inspireer toekomstige ontwikkelaars.",

      vm_vision_title: "Visie",
      vm_vision_desc: "Een technologieprofessional worden die zinvolle digitale oplossingen creëert, gedisciplineerd leeft en anderen inspireert door kennis en actie.",
      vm_mission_title: "Missie",
      vm_mission_desc: "Innovatieve software ontwikkelen die echte uitdagingen oplost en de jeugd inspireren door technologie en vechtsporten.",
      tagline_trans: "Codeer met Doel. Vecht met Eer. Inspireer met Actie.",

      journey_subtitle: "LEVENSTIJDLIJN",
      journey_title: "Onderwijs & Karakterreis",
      journey_item1_desc: "Basisonderwijs aan SDIT Amalia Cibinong. Basisdiscipline en 6 jaar Karate training.",
      journey_item2_desc: "Islamitisch internaat aan Gontor 1 Ponorogo. Leiderschap, discipline, Arabisch & Engels, en 3 jaar Muay Thai.",
      journey_item3_desc: "Dienst als taalleraar (Arabisch & Engels) bij Pondok An-Nibras Subang, West-Java voor 1 jaar.",
      journey_item4_desc: "Software Engineering studie aan BSI Universiteit, Secretaris van de Taekwondo Club.",

      skills_subtitle: "TECHNISCHE VAARDIGHEID",
      skills_title: "Vaardigheden & Tech Stack",

      services_subtitle: "PROFESSIONELE DIENSTEN",
      services_title: "Diensten die ik Aanbied",
      svc1_title: "Webontwikkeling",
      svc1_desc: "Fullstack webapplicatie-ontwikkeling die snel, veilig, responsief en afgestemd op bedrijfsbehoeften is.",
      svc2_title: "UI/UX Implementatie",
      svc2_desc: "Figma-ontwerpen omzetten naar pixelperfecte, interactieve frontend-code met vloeiende animaties.",
      svc3_title: "REST API Ontwikkeling",
      svc3_desc: "Robuuste, schaalbare backend-API's bouwen met veilige JWT/OAuth authenticatie.",
      svc4_title: "Bug Oplossen & Optimalisatie",
      svc4_desc: "Debuggen, code refactoring en webprestatie-optimalisatie voor topefficiëntie.",

      projects_subtitle: "PORTFOLIO WERKEN",
      projects_title: "Uitgelichte Projecten",
      filter_all: "Alle",
      filter_web: "Webontwikkeling",
      filter_mobile: "Mobiel",
      filter_ui: "UI Ontwerp",
      filter_api: "API",
      filter_dashboard: "Dashboard",

      p1_desc: "Enterprise e-commerce platform met realtime voorraadbeheer en betaalgateway voor meerdere kanalen.",
      p2_desc: "Digitaal bankportaal met versleutelde microtransactie-verwerking en QRIS API-integratie.",
      p3_desc: "Vechtsporten trainingsvolger (Taekwondo & Muay Thai), voedingsdagboek en sparringbeheerder.",
      p4_desc: "Gecentraliseerde authenticatiemicroservice met snelheidsbeperking, 2FA en geautomatiseerde auditlogs.",
      p5_desc: "Online telemedicinaal portaal met doktersafspraakenplanning en patiëntendossierintegratie.",
      p6_desc: "Senior-level professionele portfolio-website met donkere/lichte modus, 15-talen i18n-ondersteuning en deeltjesgrafiek.",

      exp_subtitle: "WERK- & ORGANISATIE-ERVARING",
      exp_title: "Ervaring & Leiderschap",
      exp_work_title: "Werkervaring",
      exp_org_title: "Organisatie-ervaring",
      exp_job1_desc: "2 jaar als hoofd taalleraar (Arabisch & Engels) bij Pondok An-Nibras Subang.",
      exp_job2_desc: "2 jaar freelance webontwikkelaar op Upwork & Fiverr voor internationale klanten.",
      exp_org1_desc: "Secretaris van UBSI Taekwondo Club voor 1 jaar, toezicht op administratie en toernooivoorstellen.",
      exp_org2_desc: "Oprichter van CodeWithMusyafa Community, mentor voor aspirant-ontwikkelaars.",

      fighter_subtitle: "VECHTERSPERSONA & VECHTSPORTEN",
      fighter_title: "Vechterspersona & Vechtsporten",
      f_bg_title: "Vechtsport Achtergrond",
      f_sched_title: "Trainingssdiscipline",
      f_sched_sub: "Compromisloos dagelijks trainingsschema:",
      f_comp_title: "Competities & Medailles",
      motto_sub: "Angst is een vriend. Angst houdt ons alert, voorbereid en op het hoogste niveau gefocust.",
      f_gallery_title: "Vechtsporten Galerij",
      f_gallery_sub: "Klik op een afbeelding om de volledige galerie te openen.",

      ach_subtitle: "ONDERSCHEIDINGEN & CERTIFICERINGEN",
      ach_title: "Certificaten & Prijzen",
      tab_cert: "Certificaten",
      tab_piagam: "Prijzen",
      tab_medals: "Medailles",

      faq_subtitle: "VEELGESTELDE VRAGEN",
      faq_title: "Frequently Asked Questions",
      faq1_q: "1. Wie bent u?",
      faq1_a: "Ik ben Musyafa Anasrullah, een Software Engineering student, vechter en content creator gepassioneerd door technologie en persoonlijke ontwikkeling.",
      faq2_q: "2. Waarop focust u momenteel?",
      faq2_a: "Moderne webontwikkeling: frontend, backend, databases, Git, Docker en cloud computing.",
      faq3_q: "3. Welke technologieën gebruikt u?",
      faq3_a: "HTML, CSS, JavaScript, Tailwind CSS, PHP, Laravel, Node.js, Express.js, MySQL, Git, GitHub en meer.",
      faq4_q: "4. Aanvaardt u freelance projecten of samenwerking?",
      faq4_a: "Ja! Open voor freelance projecten, stages en samenwerkingen in software engineering.",
      faq5_q: "5. Waarom beoefent u vechtsporten?",
      faq5_a: "Vechtsporten leren discipline, consistentie, respect en mentale kracht die ik toepas in technologie en leven.",
      faq6_q: "6. Waarom bent u Content Creator?",
      faq6_a: "Kennis groeit wanneer het gedeeld wordt. Ik documenteer mijn leerproces om toekomstige ontwikkelaars te inspireren.",
      faq7_q: "7. Wat is uw carrièredoel?",
      faq7_a: "Een professionele Software Engineer worden die impactvolle digitale oplossingen levert en anderen inspireert.",
      faq8_q: "8. Hoe kan ik u contacteren?",
      faq8_a: "Bereik mij via e-mail, LinkedIn, GitHub of WhatsApp in de Contact-sectie.",

      comm_desc: "CodeWithMusyafa Community is een ruimte die is gecreëerd om iedereen te helpen programmeren en technologie te leren via discussies, leermateriaal en projectsamenwerking.",

      contact_subtitle: "NEEM CONTACT OP",
      contact_title: "Een Gesprek Starten",
      contact_info_title: "Contactinformatie",
      contact_info_desc: "Laten we praten over webontwikkelingsprojecten, samenwerkingen of ideeën over technologie en vechtsporten.",
      contact_form_title: "Stuur Mij een Bericht",
      lbl_name: "Volledige Naam",
      lbl_email: "E-mailadres",
      lbl_subject: "Onderwerp",
      lbl_message: "Bericht",
      btn_send: "Bericht Versturen"
    },

    hi: {
      nav_status: "काम और सहयोग के लिए उपलब्ध",
      nav_home: "होम",
      nav_about: "मेरे बारे में",
      nav_journey: "यात्रा",
      nav_skills: "कौशल",
      nav_services: "सेवाएं",
      nav_projects: "परियोजनाएं",
      nav_experience: "अनुभव",
      nav_fighter: "लड़ाकू",
      nav_achievements: "उपलब्धियां",
      nav_faq: "FAQ",
      nav_community: "समुदाय",
      nav_contact: "संपर्क",

      hero_welcome: "वरिष्ठ सॉफ्टवेयर इंजीनियरिंग मानक",
      hero_greeting: "नमस्ते, मैं हूं",
      hero_full_slogan: '"Code with Purpose. Fight with Honor. Inspire with Action."',
      btn_download_cv: "CV डाउनलोड करें",
      btn_view_projects: "परियोजनाएं देखें",
      btn_contact_me: "संपर्क करें",

      stat_projects: "पूर्ण परियोजनाएं",
      stat_certificates: "प्राप्त प्रमाण पत्र",
      stat_years: "सीखने के वर्ष",
      stat_contrib: "GitHub योगदान",

      about_subtitle: "मेरे बारे में",
      about_title: "जीव-परिचय, दृष्टि, मिशन और मूल्य",
      biodata_header: "व्यक्तिगत जानकारी",
      bio_name_lbl: "पूरा नाम",
      bio_age_lbl: "उम्र",
      bio_age_val: "22 वर्ष",
      bio_loc_lbl: "स्थान",
      bio_loc_val: "बोगोर, पश्चिम जावा, इंडोनेशिया",
      bio_univ_lbl: "विश्वविद्यालय",
      bio_major_lbl: "विशेषज्ञता",
      bio_major_val: "सॉफ्टवेयर इंजीनियरिंग",
      values_title: "मूल मूल्य",

      about_story_header: "जीवन यात्रा और दर्शन",
      about_story_p1: "नमस्ते, मैं Musyafa Anasrullah हूं। मैं एक सॉफ्टवेयर इंजीनियरिंग छात्र, लड़ाकू और कंटेंट क्रिएटर हूं जो सार्थक तकनीक बनाने, अनुशासित जीवन जीने और दूसरों को प्रेरित करने के लिए जुनूनी है।",
      about_story_p2: "मेरी यात्रा तीन पूरक दुनियाओं द्वारा आकार लेती है। सॉफ्टवेयर इंजीनियरिंग छात्र के रूप में, मैं आधुनिक, कुशल और उपयोगकर्ता-केंद्रित डिजिटल समाधान विकसित करने पर ध्यान देता हूं।",
      about_story_p3: "प्रौद्योगिकी के अलावा, मैं ताइक्वांडो, मय थाई और किकबॉक्सिंग का अभ्यास करता हूं। मार्शल आर्ट ने मुझे सिखाया कि सफलता अनुशासन, निरंतरता और साहस से बनती है।",
      about_story_p4: "कंटेंट क्रिएटर के रूप में, मैं अपनी सीखने की यात्रा का दस्तावेजीकरण करता हूं, ज्ञान साझा करता हूं और भविष्य के डेवलपर्स को प्रेरित करता हूं।",

      vm_vision_title: "दृष्टि",
      vm_vision_desc: "एक तकनीकी पेशेवर बनना जो सार्थक डिजिटल समाधान बनाता है, अनुशासित जीवन जीता है और ज्ञान और कार्य के माध्यम से दूसरों को प्रेरित करता है।",
      vm_mission_title: "मिशन",
      vm_mission_desc: "वास्तविक चुनौतियों को हल करने वाला अभिनव सॉफ्टवेयर विकसित करना और तकनीक और मार्शल आर्ट के माध्यम से युवाओं को प्रेरित करना।",
      tagline_trans: "उद्देश्य के साथ कोड करें। सम्मान के साथ लड़ें। कार्य से प्रेरित करें।",

      journey_subtitle: "जीवन टाइमलाइन",
      journey_title: "शैक्षिक और चरित्र यात्रा",
      journey_item1_desc: "SDIT Amalia Cibinong में प्राथमिक शिक्षा। मूल अनुशासन और 6 साल की कराते प्रशिक्षण।",
      journey_item2_desc: "Gontor 1 Ponorogo इस्लामिक बोर्डिंग स्कूल। नेतृत्व, अनुशासन, अरबी और अंग्रेजी दक्षता, और 3 साल का मय थाई।",
      journey_item3_desc: "Pondok An-Nibras Subang, पश्चिम जावा में 1 साल के लिए भाषा शिक्षक (अरबी और अंग्रेजी) के रूप में सेवा।",
      journey_item4_desc: "BSI विश्वविद्यालय में सॉफ्टवेयर इंजीनियरिंग की पढ़ाई, ताइक्वांडो क्लब के सचिव।",

      skills_subtitle: "तकनीकी दक्षता",
      skills_title: "कौशल और तकनीकी स्टैक",

      services_subtitle: "पेशेवर सेवाएं",
      services_title: "मेरी सेवाएं",
      svc1_title: "वेब विकास",
      svc1_desc: "आधुनिक, तेज, सुरक्षित और व्यावसायिक जरूरतों के अनुसार पूर्ण-स्टैक वेब एप्लिकेशन विकास।",
      svc2_title: "UI/UX कार्यान्वयन",
      svc2_desc: "Figma डिज़ाइन को सटीक इंटरेक्टिव फ्रंटएंड कोड में रूपांतरित करना।",
      svc3_title: "REST API विकास",
      svc3_desc: "सुरक्षित JWT/OAuth प्रमाणीकरण के साथ मजबूत, स्केलेबल बैकएंड API का निर्माण।",
      svc4_title: "बग फिक्सिंग और अनुकूलन",
      svc4_desc: "डीबगिंग, कोड रिफैक्टरिंग और वेब प्रदर्शन अनुकूलन।",

      projects_subtitle: "पोर्टफोलियो कार्य",
      projects_title: "प्रमुख परियोजनाएं",
      filter_all: "सभी",
      filter_web: "वेब विकास",
      filter_mobile: "मोबाइल",
      filter_ui: "UI डिज़ाइन",
      filter_api: "API",
      filter_dashboard: "डैशबोर्ड",

      p1_desc: "रियल-टाइम इन्वेंट्री प्रबंधन और मल्टी-चैनल पेमेंट गेटवे के साथ एंटरप्राइज ई-कॉमर्स प्लेटफॉर्म।",
      p2_desc: "एन्क्रिप्टेड माइक्रोट्रांजेक्शन और QRIS API एकीकरण के साथ डिजिटल बैंकिंग पोर्टल।",
      p3_desc: "मार्शल आर्ट प्रशिक्षण ट्रैकर (ताइक्वांडो और मय थाई), पोषण लॉग और स्पैरिंग मैनेजर।",
      p4_desc: "रेट-लिमिटिंग, 2FA और स्वचालित ऑडिट लॉग के साथ केंद्रीकृत प्रमाणीकरण माइक्रोसर्विस।",
      p5_desc: "डॉक्टर अपॉइंटमेंट शेड्यूलिंग और रोगी रिकॉर्ड एकीकरण के साथ ऑनलाइन टेलीमेडिसिन पोर्टल।",
      p6_desc: "डार्क/लाइट मोड, 15-भाषा समर्थन और पार्टिकल ग्राफिक्स के साथ वरिष्ठ स्तर का पोर्टफोलियो वेबसाइट।",

      exp_subtitle: "कार्य और संगठनात्मक अनुभव",
      exp_title: "अनुभव और नेतृत्व",
      exp_work_title: "कार्य अनुभव",
      exp_org_title: "संगठनात्मक अनुभव",
      exp_job1_desc: "Pondok An-Nibras Subang में 2 साल मुख्य भाषा शिक्षक (अरबी और अंग्रेजी) के रूप में सेवा।",
      exp_job2_desc: "अंतर्राष्ट्रीय ग्राहकों के लिए 2 साल Upwork और Fiverr पर फ्रीलांस वेब डेवलपर।",
      exp_org1_desc: "UBSI ताइक्वांडो क्लब के सचिव के रूप में 1 साल प्रशासन और टूर्नामेंट प्रस्ताव की देखरेख।",
      exp_org2_desc: "CodeWithMusyafa Community के संस्थापक, उभरते डेवलपर्स के मेंटर।",

      fighter_subtitle: "लड़ाकू व्यक्तित्व और मार्शल आर्ट",
      fighter_title: "लड़ाकू व्यक्तित्व और मार्शल आर्ट",
      f_bg_title: "मार्शल आर्ट पृष्ठभूमि",
      f_sched_title: "प्रशिक्षण अनुशासन",
      f_sched_sub: "बिना समझौते का दैनिक प्रशिक्षण कार्यक्रम:",
      f_comp_title: "प्रतियोगिताएं और पदक",
      motto_sub: "डर एक दोस्त है। डर हमें सतर्क, तैयार और उच्चतम स्तर पर केंद्रित रखता है।",
      f_gallery_title: "मार्शल आर्ट गैलरी",
      f_gallery_sub: "पूर्ण स्क्रीन गैलरी खोलने के लिए किसी भी छवि पर क्लिक करें।",

      ach_subtitle: "सम्मान और प्रमाणन",
      ach_title: "प्रमाण पत्र और पुरस्कार",
      tab_cert: "प्रमाण पत्र",
      tab_piagam: "पुरस्कार",
      tab_medals: "पदक",

      faq_subtitle: "अक्सर पूछे जाने वाले प्रश्न",
      faq_title: "Frequently Asked Questions",
      faq1_q: "1. आप कौन हैं?",
      faq1_a: "मैं Musyafa Anasrullah हूं, एक सॉफ्टवेयर इंजीनियरिंग छात्र, लड़ाकू और कंटेंट क्रिएटर जो तकनीक और व्यक्तिगत विकास के प्रति उत्साही है।",
      faq2_q: "2. आप वर्तमान में किन क्षेत्रों पर ध्यान दे रहे हैं?",
      faq2_a: "आधुनिक वेब विकास: फ्रंटएंड, बैकएंड, डेटाबेस, Git, Docker और क्लाउड कंप्यूटिंग।",
      faq3_q: "3. आप कौन सी तकनीकें उपयोग करते हैं?",
      faq3_a: "HTML, CSS, JavaScript, Tailwind CSS, PHP, Laravel, Node.js, Express.js, MySQL, Git, GitHub और अधिक।",
      faq4_q: "4. क्या आप फ्रीलांस परियोजनाएं या सहयोग स्वीकार करते हैं?",
      faq4_a: "हां! सॉफ्टवेयर इंजीनियरिंग में फ्रीलांस परियोजनाओं, इंटर्नशिप और सहयोग के लिए खुला हूं।",
      faq5_q: "5. आप मार्शल आर्ट का अभ्यास क्यों करते हैं?",
      faq5_a: "मार्शल आर्ट अनुशासन, निरंतरता, सम्मान और मानसिक शक्ति सिखाता है जो मैं तकनीक और जीवन में लागू करता हूं।",
      faq6_q: "6. आप कंटेंट क्रिएटर क्यों हैं?",
      faq6_a: "ज्ञान तब बढ़ता है जब साझा किया जाता है। मैं भविष्य के डेवलपर्स को प्रेरित करने के लिए अपना सीखना दस्तावेज़ करता हूं।",
      faq7_q: "7. आपका करियर लक्ष्य क्या है?",
      faq7_a: "एक पेशेवर सॉफ्टवेयर इंजीनियर बनना जो प्रभावशाली डिजिटल समाधान प्रदान करे और दूसरों को प्रेरित करे।",
      faq8_q: "8. मैं आपसे कैसे संपर्क कर सकता हूं?",
      faq8_a: "संपर्क अनुभाग में ईमेल, LinkedIn, GitHub या WhatsApp के माध्यम से संपर्क करें।",

      comm_desc: "CodeWithMusyafa Community एक ऐसा स्थान है जो किसी को भी चर्चाओं, सीखने की सामग्री और परियोजना सहयोग के माध्यम से प्रोग्रामिंग और तकनीक सीखने में मदद करने के लिए बनाया गया है।",

      contact_subtitle: "मुझसे संपर्क करें",
      contact_title: "बातचीत शुरू करें",
      contact_info_title: "संपर्क जानकारी",
      contact_info_desc: "वेब विकास परियोजनाओं, सहयोग, या तकनीक और मार्शल आर्ट के विचारों पर चर्चा करते हैं।",
      contact_form_title: "मुझे एक संदेश भेजें",
      lbl_name: "पूरा नाम",
      lbl_email: "ईमेल पता",
      lbl_subject: "विषय",
      lbl_message: "संदेश",
      btn_send: "संदेश भेजें"
    }
  };

  const langSelect = document.getElementById('lang-select');
  
  function applyLanguage(lang) {
    const dict = translations[lang] || translations.id;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.innerHTML = dict[key];
      }
    });
    localStorage.setItem('musyafa_lang', lang);
  }

  if (langSelect) {
    const savedLang = localStorage.getItem('musyafa_lang') || 'id';
    langSelect.value = savedLang;
    applyLanguage(savedLang);

    langSelect.addEventListener('change', (e) => {
      applyLanguage(e.target.value);
    });
  }

  /* --- 2. DARK / LIGHT THEME TOGGLE --- */
  const themeToggleBtn = document.getElementById('theme-toggle');
  const htmlTag = document.documentElement;

  const savedTheme = localStorage.getItem('musyafa_theme') || 'dark';
  htmlTag.setAttribute('data-theme', savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = htmlTag.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      htmlTag.setAttribute('data-theme', newTheme);
      localStorage.setItem('musyafa_theme', newTheme);
    });
  }

  /* --- 3. HERO TYPING ANIMATION ENGINE --- */
  const typingTextEl = document.getElementById('typing-text');
  if (typingTextEl) {
    const roles = [
      "Software Engineer",
      "Fighter & Martial Artist",
      "Content Creator",
      "Full Stack Web Developer"
    ];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
      const currentRole = roles[roleIndex];
      if (isDeleting) {
        typingTextEl.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
      } else {
        typingTextEl.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
      }

      let speed = isDeleting ? 40 : 80;

      if (!isDeleting && charIndex === currentRole.length) {
        speed = 2000; // Pause at end
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        speed = 500;
      }

      setTimeout(typeEffect, speed);
    }

    typeEffect();
  }

  /* --- 4. CYBER PARTICLE CANVAS BACKGROUND --- */
  const canvas = document.getElementById('particle-canvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    const numParticles = Math.min(Math.floor(width / 20), 70);
    const particles = [];

    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        radius: Math.random() * 2 + 1
      });
    }

    function renderParticles() {
      ctx.clearRect(0, 0, width, height);

      const isDark = htmlTag.getAttribute('data-theme') === 'dark';
      const pColor = isDark ? 'rgba(56, 189, 248, 0.4)' : 'rgba(37, 99, 235, 0.3)';
      const lColor = isDark ? 'rgba(37, 99, 235, 0.12)' : 'rgba(37, 99, 235, 0.08)';

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = pColor;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = lColor;
            ctx.lineWidth = 1 - dist / 120;
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(renderParticles);
    }

    renderParticles();
  }

  /* --- 5. NAVBAR SCROLL EFFECT & MOBILE DRAWER --- */
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const drawerClose = document.getElementById('drawer-close');
  const drawerLinks = document.querySelectorAll('.drawer-link');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }
  });

  if (hamburger && mobileDrawer) {
    hamburger.addEventListener('click', () => {
      mobileDrawer.classList.add('open');
    });
  }

  if (drawerClose && mobileDrawer) {
    drawerClose.addEventListener('click', () => {
      mobileDrawer.classList.remove('open');
    });
  }

  drawerLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileDrawer?.classList.remove('open');
    });
  });

  /* --- 6. QUICK STATS COUNTER ANIMATION --- */
  const statNumbers = document.querySelectorAll('.stat-number');
  let animatedStats = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animatedStats) {
        animatedStats = true;
        statNumbers.forEach(stat => {
          const target = parseInt(stat.getAttribute('data-target'));
          let count = 0;
          const step = Math.max(1, Math.floor(target / 40));
          const interval = setInterval(() => {
            count += step;
            if (count >= target) {
              stat.innerHTML = `${target}<span>+</span>`;
              clearInterval(interval);
            } else {
              stat.innerHTML = `${count}<span>+</span>`;
            }
          }, 30);
        });
      }
    });
  }, { threshold: 0.5 });

  const statsGrid = document.querySelector('.stats-grid');
  if (statsGrid) observer.observe(statsGrid);

  /* --- 7. PROJECT CATEGORY FILTERING --- */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const categories = card.getAttribute('data-category');
        if (filter === 'all' || categories.includes(filter)) {
          card.classList.remove('hide');
        } else {
          card.classList.add('hide');
        }
      });
    });
  });

  /* --- 8. ACHIEVEMENTS FILTER TABS --- */
  const achTabBtns = document.querySelectorAll('.ach-tab-btn');
  const achCards = document.querySelectorAll('.ach-card');

  achTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      achTabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const tab = btn.getAttribute('data-tab');

      achCards.forEach(card => {
        const type = card.getAttribute('data-type');
        if (tab === 'all' || type === tab) {
          card.classList.remove('hide');
        } else {
          card.classList.add('hide');
        }
      });
    });
  });

  /* --- 9. FAQ ACCORDION --- */
  const faqQuestions = document.querySelectorAll('.faq-question');

  faqQuestions.forEach(q => {
    q.addEventListener('click', () => {
      const faqItem = q.parentElement;
      const isOpen = faqItem.classList.contains('active');

      document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
        const ans = item.querySelector('.faq-answer');
        if (ans) ans.style.maxHeight = null;
      });

      if (!isOpen) {
        faqItem.classList.add('active');
        const answer = faqItem.querySelector('.faq-answer');
        if (answer) answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });

  /* --- 10. LIGHTBOX MODAL SYSTEM --- */
  const lightboxModal = document.getElementById('lightbox-modal');
  const lightboxClose = document.getElementById('lightbox-close');
  const lightboxGraphic = document.getElementById('lightbox-graphic');
  const lightboxCaption = document.getElementById('lightbox-caption');

  document.querySelectorAll('.lightbox-trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const caption = trigger.getAttribute('data-caption') || 'View Detail';
      lightboxCaption.textContent = caption;
      lightboxGraphic.innerHTML = `<i class="fa-solid fa-medal"></i>`;
      lightboxModal.classList.add('active');
    });
  });

  lightboxClose?.addEventListener('click', () => {
    lightboxModal.classList.remove('active');
  });

  lightboxModal?.addEventListener('click', (e) => {
    if (e.target === lightboxModal) {
      lightboxModal.classList.remove('active');
    }
  });

  /* --- 11. PROJECT DETAIL MODAL --- */
  const projectModal = document.getElementById('project-modal');
  const pModalClose = document.getElementById('p-modal-close');
  const pModalTitle = document.getElementById('p-modal-title');
  const pModalCat = document.getElementById('p-modal-cat');
  const pModalBody = document.getElementById('p-modal-body');

  const sampleProjects = {
    p1: {
      title: "NexStore E-Commerce Enterprise Platform",
      cat: "Web Development • Dashboard",
      body: "NexStore is a full-featured enterprise e-commerce system engineered for scalability. Built with Next.js and Node.js microservices, it features real-time inventory synchronization, multi-currency checkout via Stripe/Midtrans, and seller telemetry analytics."
    },
    p2: {
      title: "FinTech Core Banking & Wallet Portal",
      cat: "API • Dashboard",
      body: "A high-security digital banking dashboard supporting microtransaction ledger processing, multi-layer JWT authentication, automated financial report PDF generation, and QRIS payment gateway integration."
    },
    p3: {
      title: "FighterHub Martial Arts Training App",
      cat: "Mobile • UI Design",
      body: "A custom mobile application designed specifically for martial artists to track Taekwondo & Muay Thai training sessions, log nutrition, schedule sparring matches, and monitor recovery telemetry."
    },
    p4: {
      title: "OmniAuth Security Gateway Microservice",
      cat: "API Development",
      body: "An enterprise authentication microservice written in Python Django. Integrates Redis rate-limiting, OAuth2 / 2FA TOTP verification, and automated security audit logging."
    },
    p5: {
      title: "HealthCare Telemedicine Portal",
      cat: "Web Development • UI Design",
      body: "A telemedicine consultation system facilitating patient-doctor video sessions, automated prescription fulfillment, and real-time medical record encryption."
    },
    p6: {
      title: "Musyafa Anasrullah Personal Senior Portfolio V1",
      cat: "Web Development",
      body: "State-of-the-art personal portfolio website designed with senior software engineering standards. Features dark/light modes, 5-language internationalization, interactive cyber particle backdrop, and zero external framework dependencies."
    }
  };

  document.querySelectorAll('.demo-trigger').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const projId = trigger.getAttribute('data-proj');
      const data = sampleProjects[projId];
      if (data) {
        pModalTitle.textContent = data.title;
        pModalCat.textContent = data.cat;
        pModalBody.textContent = data.body;
        projectModal.classList.add('active');
      }
    });
  });

  pModalClose?.addEventListener('click', () => {
    projectModal.classList.remove('active');
  });

  projectModal?.addEventListener('click', (e) => {
    if (e.target === projectModal) {
      projectModal.classList.remove('active');
    }
  });

  /* --- 12. CONTACT FORM SUBMISSION & LOCALSTORAGE DATABASE --- */
  const contactForm = document.getElementById('contact-form');
  const toastContainer = document.getElementById('toast-container');

  function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<i class="fa-solid fa-circle-check"></i> <span>${message}</span>`;
    toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.remove();
    }, 4000);
  }

  contactForm?.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Save to LocalStorage Database
    const existingMsgs = JSON.parse(localStorage.getItem('musyafa_contact_messages') || '[]');
    existingMsgs.push({
      name,
      email,
      subject,
      message,
      timestamp: new Date().toISOString()
    });
    localStorage.setItem('musyafa_contact_messages', JSON.stringify(existingMsgs));

    showToast("Pesan Anda telah berhasil terkirim! Musyafa akan segera merespons.");
    contactForm.reset();
  });


  /* ============================================================
     🎯 SENIOR-LEVEL INTERACTIVITY ENGINE
     ============================================================ */

  /* --- A. CURSOR SPOTLIGHT TRACKING ON CARDS --- */
  const interactiveCards = document.querySelectorAll(
    '.glass-panel, .stat-card, .skill-card, .service-card, .project-card, .biodata-card, .story-panel, .exp-column, .ach-card, .contact-card, .contact-form-card'
  );

  interactiveCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      card.style.setProperty('--mouse-x', `${x}%`);
      card.style.setProperty('--mouse-y', `${y}%`);
    });
  });

  /* --- B. 3D TILT EFFECT ON CARDS --- */
  interactiveCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / (rect.width / 2);
      const dy = (e.clientY - cy) / (rect.height / 2);
      const tiltX = dy * -7;
      const tiltY = dx * 7;
      card.style.transform = `perspective(900px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateY(-4px) scale(1.018)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });

  /* --- C. RIPPLE CLICK EFFECT ON BUTTONS & TAGS --- */
  const rippleTargets = document.querySelectorAll(
    '.btn, .social-icon, .filter-btn, .theme-toggle, .tech-badge, .value-tag, .nav-link, .drawer-link'
  );

  rippleTargets.forEach(el => {
    el.addEventListener('click', function (e) {
      const circle = document.createElement('span');
      const diameter = Math.max(this.clientWidth, this.clientHeight);
      const radius = diameter / 2;
      const rect = this.getBoundingClientRect();

      circle.style.width = circle.style.height = `${diameter}px`;
      circle.style.left = `${e.clientX - rect.left - radius}px`;
      circle.style.top  = `${e.clientY - rect.top  - radius}px`;
      circle.classList.add('ripple');

      const existing = this.querySelector('span.ripple');
      if (existing) existing.remove();
      this.appendChild(circle);

      setTimeout(() => circle.remove(), 700);
    });
  });

  /* --- D. MAGNETIC BUTTON ATTRACTION (Hero CTAs) --- */
  const magnetBtns = document.querySelectorAll('.btn-primary, .btn-secondary, .btn-discord');
  magnetBtns.forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const dx = e.clientX - (rect.left + rect.width  / 2);
      const dy = e.clientY - (rect.top  + rect.height / 2);
      btn.style.transform = `translate(${dx * 0.22}px, ${dy * 0.22}px) scale(1.04)`;
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = '';
    });
  });

  /* --- E. SCROLL REVEAL ANIMATION --- */
  const revealEls = document.querySelectorAll(
    '.section-header, .stat-card, .skill-card, .service-card, .project-card, .timeline-item, .exp-column, .ach-card, .contact-card, .contact-form-card, .biodata-card, .story-panel, .community-content, .faq-item, .value-tag, .tech-badge'
  );

  // Inject base hidden state via JS (no layout shift)
  revealEls.forEach((el, i) => {
    el.style.opacity  = '0';
    el.style.transform = 'translateY(28px)';
    el.style.transition = `opacity 0.55s cubic-bezier(0.4,0,0.2,1) ${(i % 8) * 60}ms, transform 0.55s cubic-bezier(0.4,0,0.2,1) ${(i % 8) * 60}ms`;
  });

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity  = '1';
        entry.target.style.transform = 'translateY(0)';
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  revealEls.forEach(el => revealObserver.observe(el));

  /* --- F. ACTIVE SECTION HIGHLIGHT (Nav glow) --- */
  const sections  = document.querySelectorAll('section[id]');
  const navLinks  = document.querySelectorAll('.nav-links .nav-link, .drawer-links .drawer-link');

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          const href = link.getAttribute('href');
          link.classList.toggle('nav-active', href === `#${id}`);
        });
      }
    });
  }, { threshold: 0.35 });

  sections.forEach(s => sectionObserver.observe(s));

  /* --- G. TYPING CURSOR SHIMMER ON HERO NAME --- */
  const heroName = document.querySelector('.hero-name');
  if (heroName) {
    heroName.style.backgroundSize = '200% auto';
    let pos = 0;
    setInterval(() => {
      pos = (pos + 0.5) % 200;
      heroName.style.backgroundPosition = `${pos}% center`;
    }, 30);
  }

  /* --- H. CARD SHINE SWEEP ON HOVER --- */
  const shineCards = document.querySelectorAll('.project-card, .service-card, .ach-card');
  shineCards.forEach(card => {
    const shine = document.createElement('div');
    shine.classList.add('card-shine');
    card.appendChild(shine);
  });

  /* --- I. STATS COUNT-UP ANIMATION --- */
  const statNums = document.querySelectorAll('.stat-number');
  const countObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting || entry.target.dataset.counted) return;
      entry.target.dataset.counted = '1';
      const target = parseInt(entry.target.textContent.replace(/\D/g, ''), 10) || 0;
      const suffix = entry.target.textContent.replace(/[0-9]/g, '').trim();
      let current = 0;
      const step  = Math.max(1, Math.ceil(target / 60));
      const timer = setInterval(() => {
        current = Math.min(current + step, target);
        entry.target.textContent = current + suffix;
        if (current >= target) clearInterval(timer);
      }, 25);
    });
  }, { threshold: 0.5 });

  statNums.forEach(n => countObserver.observe(n));

});
