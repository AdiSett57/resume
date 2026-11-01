'use strict';

const translations = {
  en: {
    metaDescription: 'Adi Setiawan — Full-Stack Developer specializing in information systems, AI integration and workflow automation.',
    skip: 'Skip to content', navAbout: 'About', navSkills: 'Skills', navAi: 'AI & Automation', navExperience: 'Experience', navWork: 'Work', navContact: 'Contact', navLetsTalk: "Let's talk ",
    heroEyebrow: 'FULL-STACK DEVELOPER · AI & AUTOMATION',
    heroHeadline: 'Designing smarter<br>digital <em>experiences.</em>',
    heroDescription: "Hi, I'm Adi Setiawan. I build reliable web applications, information systems, and practical AI-powered solutions that simplify the way people work.",
    heroButtonWork: 'Explore my work', heroButtonContact: 'Get in touch', heroLocation: 'Based in Gresik, East Java, Indonesia', floatingNote: 'Making technology useful.',
    sectionAbout: 'ABOUT ME', aboutTitle: 'A thoughtful approach<br>to <em>building things.</em>',
    aboutP1: "I'm an IT programmer and Full-Stack Web Developer with experience building and maintaining web-based applications, information systems, and digital solutions for business operations.",
    aboutP2: 'I work across backend development, frontend interfaces, database management, and system integration. I enjoy learning new technologies, working with teams, and turning complex challenges into practical solutions.',
    factLocation: 'LOCATION', factDegree: 'EDUCATION', factDegreeValue: 'Informatics Engineering', factBirthday: 'BIRTHDAY', factBirthdayValue: '5 December 1997', factFreelance: 'FREELANCE', factFreelanceValue: 'Available',
    sectionSkills: 'TECHNICAL SKILLS', skillsSide: 'TECHNOLOGIES & CAPABILITIES', skillsTitle: 'A versatile<br><em>technical toolkit.</em>', skillsIntro: 'The technologies I use to build reliable, efficient, and maintainable digital products.',
    skillBackend: 'Backend & Development', skillFrontend: 'Frontend & Web', skillData: 'Data & Infrastructure',
    sectionAI: 'AI & AUTOMATION', aiTitle: 'Intelligence that<br><em>solves real problems.</em>', aiIntro: 'Applying AI and automation to connect information, streamline workflows, and help systems work smarter.',
    aiSkill1: 'AI Integration', aiSkill1Desc: 'Building AI-powered features with LLMs and APIs.',
    aiSkill2: 'RAG & Knowledge Systems', aiSkill2Desc: 'Connecting AI responses with structured knowledge and trusted documents.',
    aiSkill3: 'Workflow Automation', aiSkill3Desc: 'Automating multi-step processes and integrating business systems.',
    aiSkill4: 'Prompt Engineering', aiSkill4Desc: 'Designing reliable instructions and structured outputs for AI workflows.',
    aiBottom: 'FROM IDEAS TO IMPLEMENTATION',
    sectionExperience: 'EXPERIENCE & EDUCATION', experienceTitle: 'The journey<br><em>so far.</em>', experienceIntro: 'Experience across enterprise web development and a foundation in informatics engineering.',
    experienceWork: 'WORK EXPERIENCE', experienceEducation: 'EDUCATION', experienceCompany1: 'Kokola Group', experienceCompany2: 'Kokola Group',
    experienceRole1: 'Developing and maintaining web-based applications, collaborating with teams to deliver solutions based on department requirements.',
    experienceRole2: 'Analyzing business needs and building integrated, optimized web and mobile applications to support operational processes.',
    degreeName: 'Bachelor of Informatics Engineering', schoolName: 'Universitas Muhammadiyah Gresik', educationDesc: 'Undergraduate studies in informatics engineering.',
    resumeQuote: 'Always learning, always building, and always improving the way technology supports people.',
    sectionWork: 'SELECTED WORK', workSide: 'A GLIMPSE INTO MY PROJECTS', workTitle: 'Projects made<br><em>with purpose.</em>', workIntro: 'A selection of web applications, information systems, and mobile interfaces from my original portfolio.',
    filterAll: 'All projects', filterWeb: 'Web apps', filterSystems: 'Information systems', filterMobile: 'Mobile', filterAutomation: 'Automation', filterDevops: 'DevOps', workNote: 'Project images are extracted from the existing portfolio screenshot. Original high-resolution images and confirmed project titles can be added later.',
    projectView: 'Preview project', projectCategories: { web: 'WEB APPLICATION', systems: 'INFORMATION SYSTEM', mobile: 'MOBILE APPLICATION', automation: 'AUTOMATION', devops: 'DEVOPS' },
    sectionContact: 'GET IN TOUCH', contactTitle: 'Have an idea?<br><em>Let’s build it.</em>', contactIntro: "Have a project in mind or want to connect? I'd be glad to hear from you.",
    formTitle: 'SEND A MESSAGE', formName: 'Your name', formEmail: 'Email address', formSubject: 'Subject', formMessage: 'Your message', formNamePlaceholder: 'What should I call you?', formEmailPlaceholder: 'you@example.com', formSubjectPlaceholder: 'What is this about?', formMessagePlaceholder: 'Tell me more about your project...',
    formSend: 'Open email to send', formWhatsapp: 'Chat on WhatsApp', waMessage: 'Hi Adi, I found your portfolio and would like to talk about a project.', formHint: 'This opens your email application. No message is stored on this website.',
    footerText: 'Crafted with intention. Built to keep evolving.', backTop: 'Back to top', menuOpen: 'Open menu', menuClose: 'Close menu', dialogClose: 'Close project preview',
  },
  id: {
    metaDescription: 'Adi Setiawan — Full-Stack Developer dengan keahlian sistem informasi, integrasi AI, dan otomatisasi workflow.',
    skip: 'Lewati ke konten', navAbout: 'Tentang', navSkills: 'Keahlian', navAi: 'AI & Otomatisasi', navExperience: 'Pengalaman', navWork: 'Portofolio', navContact: 'Kontak', navLetsTalk: 'Hubungi saya ',
    heroEyebrow: 'FULL-STACK DEVELOPER · AI & OTOMATISASI',
    heroHeadline: 'Membangun solusi<br>digital yang <em>bermakna.</em>',
    heroDescription: 'Halo, saya Adi Setiawan. Saya mengembangkan aplikasi web, sistem informasi, dan solusi berbasis AI yang andal untuk menyederhanakan proses kerja.',
    heroButtonWork: 'Lihat portofolio', heroButtonContact: 'Hubungi saya', heroLocation: 'Berdomisili di Gresik, Jawa Timur, Indonesia', floatingNote: 'Teknologi yang memberi manfaat.',
    sectionAbout: 'TENTANG SAYA', aboutTitle: 'Pendekatan yang tepat<br>untuk <em>setiap solusi.</em>',
    aboutP1: 'Saya adalah IT Programmer dan Full-Stack Web Developer yang berpengalaman mengembangkan serta memelihara aplikasi web, sistem informasi, dan solusi digital untuk kebutuhan operasional bisnis.',
    aboutP2: 'Saya bekerja di bidang backend, antarmuka frontend, pengelolaan database, dan integrasi sistem. Saya senang mempelajari teknologi baru, berkolaborasi, serta mengubah tantangan yang kompleks menjadi solusi yang praktis.',
    factLocation: 'LOKASI', factDegree: 'PENDIDIKAN', factDegreeValue: 'Teknik Informatika', factBirthday: 'TANGGAL LAHIR', factBirthdayValue: '5 Desember 1997', factFreelance: 'FREELANCE', factFreelanceValue: 'Tersedia',
    sectionSkills: 'KEAHLIAN TEKNIS', skillsSide: 'TEKNOLOGI & KEMAMPUAN', skillsTitle: 'Keahlian teknis<br>yang <em>beragam.</em>', skillsIntro: 'Teknologi yang saya gunakan untuk membuat produk digital yang andal, efisien, dan mudah dipelihara.',
    skillBackend: 'Backend & Pengembangan', skillFrontend: 'Frontend & Web', skillData: 'Data & Infrastruktur',
    sectionAI: 'AI & OTOMATISASI', aiTitle: 'AI yang membantu<br><em>menyelesaikan masalah.</em>', aiIntro: 'Menggunakan AI dan otomatisasi untuk menghubungkan informasi, menyederhanakan alur kerja, serta meningkatkan efektivitas sistem.',
    aiSkill1: 'Integrasi AI', aiSkill1Desc: 'Mengembangkan fitur berbasis AI menggunakan LLM dan API.',
    aiSkill2: 'RAG & Sistem Pengetahuan', aiSkill2Desc: 'Menghubungkan jawaban AI dengan basis pengetahuan dan dokumen terpercaya.',
    aiSkill3: 'Otomatisasi Workflow', aiSkill3Desc: 'Mengotomatiskan proses bertahap dan mengintegrasikan sistem bisnis.',
    aiSkill4: 'Prompt Engineering', aiSkill4Desc: 'Merancang instruksi yang andal dan keluaran terstruktur untuk workflow AI.',
    aiBottom: 'DARI IDE MENJADI IMPLEMENTASI',
    sectionExperience: 'PENGALAMAN & PENDIDIKAN', experienceTitle: 'Perjalanan<br><em>karier saya.</em>', experienceIntro: 'Pengalaman pengembangan aplikasi web perusahaan dengan dasar pendidikan teknik informatika.',
    experienceWork: 'PENGALAMAN KERJA', experienceEducation: 'PENDIDIKAN', experienceCompany1: 'Kokola Group', experienceCompany2: 'Kokola Group',
    experienceRole1: 'Mengembangkan dan memelihara aplikasi web serta berkolaborasi dengan tim untuk memberikan solusi sesuai kebutuhan departemen.',
    experienceRole2: 'Menganalisis kebutuhan bisnis dan membangun aplikasi web maupun mobile yang terintegrasi dan optimal untuk mendukung operasional.',
    degreeName: 'Sarjana Teknik Informatika', schoolName: 'Universitas Muhammadiyah Gresik', educationDesc: 'Pendidikan sarjana di bidang teknik informatika.',
    resumeQuote: 'Senantiasa belajar, berkarya, dan meningkatkan peran teknologi dalam membantu kehidupan manusia.',
    sectionWork: 'PORTOFOLIO', workSide: 'SEBAGIAN PROYEK YANG DIKERJAKAN', workTitle: 'Proyek yang dibuat<br><em>dengan tujuan.</em>', workIntro: 'Pilihan aplikasi web, sistem informasi, dan antarmuka mobile dari portofolio saya sebelumnya.',
    filterAll: 'Semua proyek', filterWeb: 'Aplikasi web', filterSystems: 'Sistem informasi', filterMobile: 'Mobile', filterAutomation: 'Otomatisasi', filterDevops: 'DevOps', workNote: 'Gambar proyek diambil dari screenshot portofolio lama. Gambar resolusi asli dan judul proyek yang terkonfirmasi dapat ditambahkan kemudian.',
    projectView: 'Lihat proyek', projectCategories: { web: 'APLIKASI WEB', systems: 'SISTEM INFORMASI', mobile: 'APLIKASI MOBILE', automation: 'OTOMATISASI', devops: 'DEVOPS' },
    sectionContact: 'HUBUNGI SAYA', contactTitle: 'Punya ide?<br><em>Mari kita wujudkan.</em>', contactIntro: 'Punya proyek atau ingin berdiskusi? Silakan hubungi saya.',
    formTitle: 'KIRIM PESAN', formName: 'Nama Anda', formEmail: 'Alamat email', formSubject: 'Subjek', formMessage: 'Pesan Anda', formNamePlaceholder: 'Siapa nama Anda?', formEmailPlaceholder: 'anda@contoh.com', formSubjectPlaceholder: 'Apa yang ingin dibahas?', formMessagePlaceholder: 'Ceritakan kebutuhan proyek Anda...',
    formSend: 'Buka email untuk mengirim', formWhatsapp: 'Chat lewat WhatsApp', waMessage: 'Halo Adi, saya melihat portofolio Anda dan ingin berdiskusi tentang sebuah proyek.', formHint: 'Form ini membuka aplikasi email Anda. Pesan tidak disimpan di website.',
    footerText: 'Dibuat dengan perhatian pada detail. Terus berkembang.', backTop: 'Kembali ke atas', menuOpen: 'Buka menu', menuClose: 'Tutup menu', dialogClose: 'Tutup pratinjau proyek',
  }
};

// Titles are deliberately descriptive until original project names are confirmed.
const projects = [
  { id: 1, image: 'project-01.webp', category: 'web', title: { en: 'Kokola E-Recruitment', id: 'Kokola E-Recruitment' }, description: { en: 'Public job portal with vacancy search and candidate qualifications.', id: 'Portal lowongan kerja publik dengan pencarian posisi dan kualifikasi kandidat.' } },
  { id: 2, image: 'project-01a.webp', category: 'systems', title: { en: 'Recruitment (PTK) Dashboard', id: 'Dashboard Rekrutmen (PTK)' }, description: { en: 'HR dashboard tracking manpower requests, promotions and applicants by plant, department and month.', id: 'Dashboard HR untuk memantau permintaan tenaga kerja, promosi, dan pelamar per plant, departemen, dan bulan.' } },
  { id: 3, image: 'project-11.webp', category: 'web', title: { en: 'Kokola Corporate Website', id: 'Website Perusahaan Kokola' }, description: { en: 'Corporate website with product showcase, campaigns and online store links.', id: 'Website perusahaan dengan katalog produk, kampanye, dan tautan toko online.' } },
  { id: 4, image: 'project-12.webp', category: 'systems', title: { en: 'E-Payroll Dashboard', id: 'Dashboard E-Payroll' }, description: { en: 'Payroll dashboard with process flow, run history, composition and per-plant summaries.', id: 'Dashboard penggajian dengan alur proses, riwayat run, komposisi, dan ringkasan per plant.' } },
  { id: 5, image: 'portfolio-3.webp', category: 'systems', title: { en: 'Location-Based Attendance', id: 'Absensi Berbasis Lokasi' }, description: { en: 'Attendance system with map positioning and distance validation to the work area.', id: 'Sistem absensi dengan peta posisi dan validasi jarak terhadap area kerja.' } },
  { id: 6, image: 'portfolio-4.webp', category: 'systems', title: { en: 'E-Procurement', id: 'E-Procurement' }, description: { en: 'Procurement system for purchase requests, vendors and SPPH processing.', id: 'Sistem pengadaan untuk permintaan pembelian, vendor, dan proses SPPH.' } },
  { id: 7, image: 'portfolio-6.webp', category: 'systems', title: { en: 'Production OEE Dashboard', id: 'Dashboard OEE Produksi' }, description: { en: 'Real-time production monitoring with OEE, waste, over-weight and NCP trending.', id: 'Pemantauan produksi real-time dengan OEE, waste, over weight, dan tren NCP.' } },
  { id: 8, image: 'portfolio-9.webp', category: 'systems', title: { en: 'Project Management Dashboard', id: 'Dashboard Manajemen Proyek' }, description: { en: 'Project and budget monitoring by status, owner, executor and monthly realization.', id: 'Pemantauan proyek dan anggaran berdasarkan status, owner, executor, dan realisasi bulanan.' } },
  { id: 9, image: 'portofolio-10.webp', category: 'systems', title: { en: 'Sales Monitoring Dashboard', id: 'Dashboard Monitoring Penjualan' }, description: { en: 'Sales analytics by region, product focus and quantity with monthly achievement.', id: 'Analitik penjualan per wilayah, produk fokus, dan kuantitas dengan capaian bulanan.' } },
  { id: 10, image: 'portfolio-2.webp', category: 'web', title: { en: 'Lontar Sewu Tourism Website', id: 'Website Wisata Lontar Sewu' }, description: { en: 'Public tourism website featuring attractions, culinary and photo spots.', id: 'Website wisata dengan informasi wahana, kuliner, dan spot foto.' } },
  { id: 11, image: 'portfolio-8.webp', category: 'web', title: { en: 'Lontar Sewu Admin Panel', id: 'Admin Panel Lontar Sewu' }, description: { en: 'Content management dashboard for headings, gallery, users and visitor traffic.', id: 'Dashboard pengelolaan konten untuk heading, galeri, pengguna, dan trafik pengunjung.' } },
  { id: 12, image: 'project-14.webp', category: 'web', title: { en: 'CekUntung Financial Tools', id: 'CekUntung - Tools Finansial' }, description: { en: 'Landing page for SME financial calculators such as pricing, break-even and margin.', id: 'Landing page kalkulator finansial UMKM seperti harga jual, BEP, dan margin.' } },
  { id: 13, image: 'project-15.webp', category: 'web', title: { en: 'CekUntung Blog', id: 'Blog CekUntung' }, description: { en: 'Content blog with featured articles and categories for SME guidance.', id: 'Blog konten dengan artikel pilihan dan kategori panduan UMKM.' } },
  { id: 14, image: 'project-n8n.webp', category: 'automation', title: { en: 'WhatsApp Customer Care Bot', id: 'Bot Customer Care WhatsApp' }, description: { en: 'n8n automation for message handling, knowledge learning and AI auto-answers.', id: 'Otomatisasi n8n untuk pemrosesan pesan, pembelajaran pengetahuan, dan jawaban otomatis AI.' } },
  { id: 15, image: 'project-n8n-2.webp', category: 'automation', title: { en: 'WhatsApp Group Report Automation', id: 'Otomatisasi Laporan Grup WhatsApp' }, description: { en: 'n8n workflow turning group messages into PDF reports delivered through Drive and WhatsApp.', id: 'Workflow n8n yang mengubah pesan grup menjadi laporan PDF melalui Drive dan WhatsApp.' } },
  { id: 16, image: 'portofolio_ai.webp', category: 'automation', title: { en: 'Kokola Smart AI', id: 'Kokola Smart AI' }, description: { en: 'Internal AI chat assistant (EAPPS-Agent) for the company.', id: 'Asisten AI internal (EAPPS-Agent) untuk perusahaan.' } },
  { id: 17, image: 'portofolio_ai2.webp', category: 'mobile', title: { en: 'Kokola Smart AI Mobile', id: 'Kokola Smart AI Mobile' }, description: { en: 'Mobile view of the internal AI chat assistant.', id: 'Tampilan mobile asisten AI internal.' } },
  { id: 18, image: 'portfolio-5.webp', category: 'mobile', title: { en: 'E-Apps Mobile Login', id: 'Login Aplikasi Mobile E-Apps' }, description: { en: 'Mobile app login screen for employee access.', id: 'Layar login aplikasi mobile untuk akses karyawan.' } },
  { id: 19, image: 'portfolio-7.webp', category: 'mobile', title: { en: 'Partner Kokola Mobile', id: 'Partner Kokola Mobile' }, description: { en: 'Partner login screen of the Kokola mobile application.', id: 'Layar login partner pada aplikasi mobile Kokola.' } },
  { id: 20, image: 'project-13.webp', category: 'mobile', title: { en: 'Moneyflow Dashboard', id: 'Dashboard Moneyflow' }, description: { en: 'Personal finance app home with assets, income, expenses and savings.', id: 'Beranda aplikasi keuangan pribadi dengan aset, pemasukan, pengeluaran, dan tabungan.' } },
  { id: 21, image: 'project-13-a.webp', category: 'mobile', title: { en: 'Moneyflow Login', id: 'Login Moneyflow' }, description: { en: 'Login screen with username/email and Google sign-in.', id: 'Layar login dengan username/email dan masuk dengan Google.' } },
  { id: 22, image: 'project-14a.webp', category: 'mobile', title: { en: 'CekUntung Mobile', id: 'CekUntung Mobile' }, description: { en: 'Responsive mobile view of the CekUntung landing page.', id: 'Tampilan mobile responsif landing page CekUntung.' } },
  { id: 23, image: 'project-15a.webp', category: 'mobile', title: { en: 'CekUntung Blog Mobile', id: 'Blog CekUntung Mobile' }, description: { en: 'Responsive article view of the CekUntung blog.', id: 'Tampilan artikel responsif pada blog CekUntung.' } },
  { id: 24, image: 'Netdata-Console-11-01-2026_12_32_PM_part1.webp', category: 'devops', title: { en: 'Netdata Server Monitoring', id: 'Monitoring Server Netdata' }, description: { en: 'Infrastructure monitoring console covering CPU, memory, disk, network and services.', id: 'Konsol monitoring infrastruktur yang mencakup CPU, memori, disk, jaringan, dan layanan.' } },
  { id: 25, image: 'codebase-memory.webp', category: 'automation', title: { en: 'Codebase Knowledge Graph', id: 'Graf Pengetahuan Kode' }, description: { en: 'Interactive graph explorer that maps code structure, architecture and relationships for AI-assisted development.', id: 'Penjelajah graf interaktif yang memetakan struktur, arsitektur, dan relasi kode untuk pengembangan berbantuan AI.' } },
  { id: 26, image: 'project-9-router.webp', category: 'automation', title: { en: '9Router AI Gateway', id: '9Router AI Gateway' }, description: { en: 'AI request router dashboard with provider routing, token usage and cost analytics.', id: 'Dashboard router permintaan AI dengan pengaturan provider, penggunaan token, dan analitik biaya.' } },
  { id: 27, image: 'project-hermes.webp', category: 'automation', title: { en: 'Hermes AI Agent', id: 'Hermes AI Agent' }, description: { en: 'Self-hosted AI agent workspace with tools, skills, scheduled tasks and Telegram sessions.', id: 'Workspace agen AI self-hosted dengan tools, skills, tugas terjadwal, dan sesi Telegram.' } },
  { id: 28, image: 'project-parental-status.webp', category: 'mobile', title: { en: 'Parental Control - Device Status', id: 'Parental Control - Status Perangkat' }, description: { en: 'Child device overview with battery, storage, lock and alarm actions and recent command history.', id: 'Ringkasan perangkat anak dengan baterai, penyimpanan, aksi kunci dan alarm, serta riwayat perintah terbaru.' } },
  { id: 29, image: 'project-parental-location.webp', category: 'mobile', title: { en: 'Parental Control - Live Location', id: 'Parental Control - Lokasi Langsung' }, description: { en: 'Live map with location history and safe-zone management.', id: 'Peta lokasi langsung dengan riwayat rute dan pengelolaan zona aman.' } },
  { id: 30, image: 'project-parental-screentime.webp', category: 'mobile', title: { en: 'Parental Control - Screen Time', id: 'Parental Control - Waktu Layar' }, description: { en: 'Weekly screen-time summary with daily chart and most-used apps.', id: 'Ringkasan waktu layar mingguan dengan grafik harian dan aplikasi paling banyak digunakan.' } },
  { id: 31, image: 'project-parental-camera.webp', category: 'mobile', title: { en: 'Parental Control - Camera Monitoring', id: 'Parental Control - Pemantauan Kamera' }, description: { en: 'Remote camera feed with front/rear selection and start/stop controls.', id: 'Tampilan kamera jarak jauh dengan pilihan kamera depan/belakang dan kontrol mulai/berhenti.' } },
  { id: 32, image: 'project-ponytail.webp', category: 'automation', title: { en: 'Ponytail Usage Board', id: 'Ponytail Usage Board' }, description: { en: 'Local dashboard tracking AI coding sessions: agent time, cost, tokens and activity per project.', id: 'Dashboard lokal untuk memantau sesi coding berbantuan AI: waktu agen, biaya, token, dan aktivitas per proyek.' } },
];

const storageKey = 'adi-portfolio-language';
let language = 'en';
let activeFilter = 'all';
const $ = (selector, parent = document) => parent.querySelector(selector);
const $$ = (selector, parent = document) => [...parent.querySelectorAll(selector)];

function safeStoredLanguage() {
  try { return localStorage.getItem(storageKey) === 'id' ? 'id' : 'en'; }
  catch { return 'en'; }
}
function rememberLanguage(value) {
  try { localStorage.setItem(storageKey, value); } catch { /* Private browsing may disable storage. */ }
}
function renderProjects() {
  const dictionary = translations[language];
  const matching = projects.filter(item => activeFilter === 'all' || item.category === activeFilter);
  const grid = $('#project-grid');
  grid.replaceChildren(...matching.map(project => {
    const card = document.createElement('article');
    card.className = 'project-card';
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'project-preview';
    button.setAttribute('aria-label', `${dictionary.projectView}: ${project.title[language]}`);
    const image = document.createElement('img');
    image.src = `./assets/images/${project.image}`;
    image.alt = project.title[language];
    image.loading = 'eager';
    image.decoding = 'async';
    const overlay = document.createElement('span');
    overlay.className = 'project-overlay';
    overlay.textContent = '↗';
    button.append(image, overlay);
    button.addEventListener('click', () => openProject(project));
    const footer = document.createElement('div');
    footer.className = 'project-info';
    const left = document.createElement('div');
    const category = document.createElement('span');
    category.className = 'project-category';
    category.textContent = dictionary.projectCategories[project.category];
    const title = document.createElement('h3');
    title.textContent = project.title[language];
    left.append(category, title);
    const number = document.createElement('span');
    number.className = 'project-number';
    number.textContent = String(project.id).padStart(2, '0');
    footer.append(left, number);
    card.append(button, footer);
    return card;
  }));
}
function setLanguage(value) {
  language = value === 'id' ? 'id' : 'en';
  const dictionary = translations[language];
  document.documentElement.lang = language;
  $$('[data-i18n]').forEach(node => {
    const key = node.dataset.i18n;
    if (dictionary[key] !== undefined) {
      // Keep the arrow in the navbar CTA untouched.
      if (key === 'navLetsTalk') node.firstChild.textContent = dictionary[key];
      else node.textContent = dictionary[key];
    }
  });
  $$('[data-i18n-html]').forEach(node => { node.innerHTML = dictionary[node.dataset.i18nHtml]; });
  $$('[data-i18n-placeholder]').forEach(node => { node.placeholder = dictionary[node.dataset.i18nPlaceholder]; });
  $$('.lang-btn').forEach(node => {
    const selected = node.dataset.lang === language;
    node.classList.toggle('active', selected);
    node.setAttribute('aria-pressed', String(selected));
  });
  $('#wa-button').href = `https://wa.me/6281331895078?text=${encodeURIComponent(dictionary.waMessage)}`;
  $('#meta-description').content = dictionary.metaDescription;
  $('#menu-toggle').setAttribute('aria-label', dictionary.menuOpen);
  $('#dialog-close').setAttribute('aria-label', dictionary.dialogClose);
  $('#scroll-top').setAttribute('aria-label', dictionary.backTop);
  rememberLanguage(language);
  renderProjects();
}
function openProject(project) {
  const dialog = $('#project-dialog');
  $('#dialog-image').src = `./assets/images/${project.image}`;
  $('#dialog-image').alt = project.title[language];
  $('#dialog-category').textContent = translations[language].projectCategories[project.category];
  $('#dialog-title').textContent = project.title[language];
  $('#dialog-description').textContent = project.description[language];
  if (typeof dialog.showModal === 'function') dialog.showModal();
}
function setMenu(open) {
  const toggle = $('#menu-toggle');
  $('#mobile-nav').hidden = !open;
  toggle.setAttribute('aria-expanded', String(open));
  toggle.classList.toggle('is-open', open);
  toggle.setAttribute('aria-label', translations[language][open ? 'menuClose' : 'menuOpen']);
}

document.addEventListener('DOMContentLoaded', () => {
  $('#year').textContent = new Date().getFullYear();
  setLanguage(safeStoredLanguage());
  $$('.lang-btn').forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.lang)));
  $$('.filter-btn').forEach(button => button.addEventListener('click', () => {
    activeFilter = button.dataset.filter;
    $$('.filter-btn').forEach(item => {
      const selected = item === button;
      item.classList.toggle('active', selected);
      item.setAttribute('aria-pressed', String(selected));
    });
    renderProjects();
  }));
  const skills = $('#skills');
  const scrollTop = $('#scroll-top');
  // Appears once the Technical Skills section enters the viewport and stays for the rest of the page.
  const toggleScrollTop = () => scrollTop.classList.toggle('is-visible', skills.getBoundingClientRect().top < window.innerHeight);
  window.addEventListener('scroll', toggleScrollTop, { passive: true });
  toggleScrollTop();
  scrollTop.addEventListener('click', () => window.scrollTo({ top: 0 }));
  $('#menu-toggle').addEventListener('click', () => setMenu($('#mobile-nav').hidden));
  $$('#mobile-nav a').forEach(link => link.addEventListener('click', () => setMenu(false)));
  $('#dialog-close').addEventListener('click', () => $('#project-dialog').close());
  $('#project-dialog').addEventListener('click', event => { if (event.target === event.currentTarget) event.currentTarget.close(); });
  $('#contact-form').addEventListener('submit', event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(String(data.get('subject')).trim());
    const body = encodeURIComponent(`Name: ${String(data.get('name')).trim()}\nEmail: ${String(data.get('email')).trim()}\n\n${String(data.get('message')).trim()}`);
    window.location.href = `mailto:adisett57@gmail.com?subject=${subject}&body=${body}`;
  });
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
    }), { threshold: 0.06, rootMargin: '0px 0px 60px 0px' });
    $$('.section-reveal').forEach(element => observer.observe(element));
  } else $$('.section-reveal').forEach(element => element.classList.add('is-visible'));
});
