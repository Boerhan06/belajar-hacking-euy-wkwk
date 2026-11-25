export interface CourseModule {
  slug: string;
  fileName: string;
  title: string;
  subtitle: string;
  phaseId: string;
  duration: string;
  level: 'Pemula' | 'Menengah' | 'Lanjutan';
  xp: number;
}

export interface CoursePhase {
  id: string;
  title: string;
  badge: string;
  description: string;
  color: string;
}

export interface QuizQuestion {
  id: string;
  phaseId: string;
  category: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface QAItem {
  id: string;
  category: string;
  question: string;
  answer: string;
  keyTakeaway: string;
}

export interface CheatItem {
  id: string;
  tool: string;
  category: string;
  description: string;
  command: string;
}

export const COURSE_PHASES: CoursePhase[] = [
  {
    id: 'fase-1',
    title: 'Fase 1: Fondasi & Persiapan Lab',
    badge: 'Fondasi',
    description: 'Bangun pemahaman dasar keamanan siber, jaringan, dan siapkan lab virtual yang aman.',
    color: '#FFB067',
  },
  {
    id: 'fase-2',
    title: 'Fase 2: Praktik Dasar & Eksplorasi',
    badge: 'Praktik',
    description: 'Pelajari keamanan aplikasi web, riset OSINT, keamanan password, dan kriptografi.',
    color: '#FF9472',
  },
  {
    id: 'fase-3',
    title: 'Fase 3: Spesialisasi Jalur',
    badge: 'Spesialisasi',
    description: 'Pilih jalur Red Team (Pentest), Blue Team (Defense/DFIR), atau Low-Level (RE/Malware).',
    color: '#FFD479',
  },
  {
    id: 'fase-4',
    title: 'Fase 4: Pendalaman & Karier',
    badge: 'Profesional',
    description: 'Kuasai keamanan Cloud, Container, pelaporan profesional, latihan CTF, dan strategi karier.',
    color: '#C85A3D',
  },
];

export const COURSE_MODULES: CourseModule[] = [
  // Fase 1
  {
    slug: 'Basic',
    fileName: 'Basic.md',
    title: 'Dasar Keamanan Informasi',
    subtitle: 'Konsep fundamental CIA Triad, terminologi infosec, dan pola pikir keamanan.',
    phaseId: 'fase-1',
    duration: '20 mnt',
    level: 'Pemula',
    xp: 50,
  },
  {
    slug: 'Building_A_Lab',
    fileName: 'Building_A_Lab.md',
    title: 'Membangun Lab Pengujian',
    subtitle: 'Setup VirtualBox/VMware, Kali Linux, dan target rentan secara terisolasi.',
    phaseId: 'fase-1',
    duration: '30 mnt',
    level: 'Pemula',
    xp: 60,
  },
  {
    slug: 'Network_Attacks',
    fileName: 'Network_Attacks.md',
    title: 'Serangan & Pertahanan Jaringan',
    subtitle: 'Protokol TCP/IP, MITM, ARP spoofing, sniffing, dan pengamanan jaringan.',
    phaseId: 'fase-1',
    duration: '35 mnt',
    level: 'Pemula',
    xp: 70,
  },
  {
    slug: 'sysinternals',
    fileName: 'sysinternals.md',
    title: 'Internals Sistem (Linux & Windows)',
    subtitle: 'Cara kerja proses, memori, registry, dan kernel di balik layar OS.',
    phaseId: 'fase-1',
    duration: '30 mnt',
    level: 'Pemula',
    xp: 60,
  },
  {
    slug: 'Port_List',
    fileName: 'Port_List.md',
    title: 'Daftar Port & Layanan Jaringan',
    subtitle: 'Referensi cepat port standar (SSH, HTTP, SMB, RDP, DNS) untuk enumerasi.',
    phaseId: 'fase-1',
    duration: '15 mnt',
    level: 'Pemula',
    xp: 40,
  },

  // Fase 2
  {
    slug: 'Web',
    fileName: 'Web.md',
    title: 'Keamanan Aplikasi Web (Web AppSec)',
    subtitle: 'OWASP Top 10, XSS, SQL Injection, SSRF, CSRF, hingga Bug Bounty.',
    phaseId: 'fase-2',
    duration: '45 mnt',
    level: 'Menengah',
    xp: 90,
  },
  {
    slug: 'Osint',
    fileName: 'Osint.md',
    title: 'OSINT (Intelijen Sumber Terbuka)',
    subtitle: 'Teknik pengumpulan informasi publik dari domain, metadata, dan media sosial.',
    phaseId: 'fase-2',
    duration: '25 mnt',
    level: 'Pemula',
    xp: 60,
  },
  {
    slug: 'Passwords',
    fileName: 'Passwords.md',
    title: 'Keamanan Password & Cracking',
    subtitle: 'Hashing, salting, manajemen kredensial, serta penggunaan Hashcat & John.',
    phaseId: 'fase-2',
    duration: '25 mnt',
    level: 'Menengah',
    xp: 60,
  },
  {
    slug: 'CandE',
    fileName: 'CandE.md',
    title: 'Kriptografi & Enkripsi',
    subtitle: 'Enkripsi simetris/asimetris, TLS/SSL, PKI, dan kelemahan implementasi kripto.',
    phaseId: 'fase-2',
    duration: '30 mnt',
    level: 'Menengah',
    xp: 70,
  },

  // Fase 3
  {
    slug: 'RT',
    fileName: 'RT.md',
    title: 'Red Teaming & Penetration Testing',
    subtitle: 'Metodologi pentest, C2 framework, pivoting, dan simulasi serangan nyata.',
    phaseId: 'fase-3',
    duration: '45 mnt',
    level: 'Lanjutan',
    xp: 100,
  },
  {
    slug: 'Active_Directory',
    fileName: 'Active_Directory.md',
    title: 'Menyerang & Mengamankan Active Directory',
    subtitle: 'BloodHound, Kerberoasting, Pass-the-Hash, dan pertahanan domain Windows.',
    phaseId: 'fase-3',
    duration: '50 mnt',
    level: 'Lanjutan',
    xp: 100,
  },
  {
    slug: 'PrivescPostEx',
    fileName: 'PrivescPostEx.md',
    title: 'Privilege Escalation & Post-Exploitation',
    subtitle: 'Teknik eskalasi hak akses di Linux, Windows, dan macOS setelah akses awal.',
    phaseId: 'fase-3',
    duration: '40 mnt',
    level: 'Menengah',
    xp: 90,
  },
  {
    slug: 'Defense',
    fileName: 'Defense.md',
    title: 'Pertahanan Sistem (Blue Team)',
    subtitle: 'Hardening OS, arsitektur Zero Trust, manajemen aset, dan baseline keamanan.',
    phaseId: 'fase-3',
    duration: '35 mnt',
    level: 'Menengah',
    xp: 80,
  },
  {
    slug: 'L-SM-TH',
    fileName: 'L-SM-TH.md',
    title: 'Logging, Monitoring & Threat Hunting',
    subtitle: 'SIEM (ELK/Splunk), Sysmon, aturan Sigma/YARA, dan perburuan ancaman aktif.',
    phaseId: 'fase-3',
    duration: '40 mnt',
    level: 'Menengah',
    xp: 85,
  },
  {
    slug: 'DFIR',
    fileName: 'DFIR.md',
    title: 'Forensik Digital & Incident Response',
    subtitle: 'Analisis memori, artefak disk, penanganan insiden, dan timeline forensik.',
    phaseId: 'fase-3',
    duration: '40 mnt',
    level: 'Lanjutan',
    xp: 90,
  },
  {
    slug: 'RE',
    fileName: 'RE.md',
    title: 'Reverse Engineering',
    subtitle: 'Disassembly & decompilation menggunakan Ghidra, IDA, x64dbg, dan Radare2.',
    phaseId: 'fase-3',
    duration: '45 mnt',
    level: 'Lanjutan',
    xp: 100,
  },
  {
    slug: 'Malware',
    fileName: 'Malware.md',
    title: 'Analisis Malware',
    subtitle: 'Analisis statis dan dinamis malware di sandbox terisolasi.',
    phaseId: 'fase-3',
    duration: '40 mnt',
    level: 'Lanjutan',
    xp: 95,
  },

  // Fase 4
  {
    slug: 'Cloud',
    fileName: 'Cloud.md',
    title: 'Keamanan Cloud (AWS, Azure, GCP)',
    subtitle: 'IAM misconfigurations, S3 bucket security, dan arsitektur cloud aman.',
    phaseId: 'fase-4',
    duration: '35 mnt',
    level: 'Menengah',
    xp: 80,
  },
  {
    slug: 'Containers',
    fileName: 'Containers.md',
    title: 'Keamanan Container & Kubernetes',
    subtitle: 'Docker hardening, isolasi namespace, dan keamanan cluster Kubernetes.',
    phaseId: 'fase-4',
    duration: '35 mnt',
    level: 'Menengah',
    xp: 80,
  },
  {
    slug: 'Docs_and_Reports',
    fileName: 'Docs_and_Reports.md',
    title: 'Dokumentasi & Pelaporan Pentest',
    subtitle: 'Menyusun laporan temuan kerentanan yang jelas, profesional, dan berdampak.',
    phaseId: 'fase-4',
    duration: '20 mnt',
    level: 'Pemula',
    xp: 50,
  },
  {
    slug: 'CTFs_Wargames',
    fileName: 'CTFs_Wargames.md',
    title: 'CTFs & Wargames (Latihan Legal)',
    subtitle: 'Platform latihan interaktif seperti Hack The Box, TryHackMe, dan OverTheWire.',
    phaseId: 'fase-4',
    duration: '15 mnt',
    level: 'Pemula',
    xp: 50,
  },
  {
    slug: 'Career',
    fileName: 'Career.md',
    title: 'Karier di Dunia InfoSec',
    subtitle: 'Tips wawancara, jalur sertifikasi, membangun portofolio, dan perkembangan karier.',
    phaseId: 'fase-4',
    duration: '20 mnt',
    level: 'Pemula',
    xp: 50,
  },
  {
    slug: 'AnonOpSecPrivacy',
    fileName: 'AnonOpSecPrivacy.md',
    title: 'Anonimitas, OpSec & Privasi',
    subtitle: 'Menjaga keamanan operasional pribadi dan perlindungan data sensitif.',
    phaseId: 'fase-4',
    duration: '25 mnt',
    level: 'Pemula',
    xp: 55,
  },
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'q1',
    phaseId: 'fase-1',
    category: 'Fondasi & Lab',
    question: 'Mengapa saat membangun lab pengujian penetrasi kita wajib menggunakan jaringan Virtual Machine terisolasi (Host-Only / Internal Network)?',
    options: [
      'Agar koneksi internet VM menjadi jauh lebih cepat',
      'Untuk mencegah malware atau trafik pengujian bocor ke jaringan utama/publik',
      'Karena VirtualBox tidak mendukung jaringan NAT sama sekali',
      'Agar RAM laptop tidak terpakai oleh sistem operasi tamu',
    ],
    correctIndex: 1,
    explanation: 'Jaringan terisolasi (Host-Only / Internal Network) menjaga agar skrip eksploitasi atau sampel yang diuji di dalam lab tidak menyebar ke jaringan rumah/kantor maupun ke perangkat laptop utama.',
  },
  {
    id: 'q2',
    phaseId: 'fase-1',
    category: 'Jaringan & Port',
    question: 'Port standar manakah yang digunakan oleh protokol SSH (Secure Shell) dan SMB (Server Message Block)?',
    options: [
      'Port 21 (SSH) dan Port 80 (SMB)',
      'Port 22 (SSH) dan Port 445 (SMB)',
      'Port 23 (SSH) dan Port 3389 (SMB)',
      'Port 25 (SSH) dan Port 443 (SMB)',
    ],
    correctIndex: 1,
    explanation: 'SSH berjalan secara default pada TCP port 22, sedangkan SMB modern (yang sering menjadi target enumerasi Windows/Active Directory) berjalan pada TCP port 445.',
  },
  {
    id: 'q3',
    phaseId: 'fase-1',
    category: 'Fondasi InfoSec',
    question: 'Dalam konsep CIA Triad, aspek apa yang dilanggar jika penyerang berhasil mengubah isi saldo pada database tanpa izin?',
    options: [
      'Confidentiality (Kerahasiaan)',
      'Integrity (Integritas)',
      'Availability (Ketersediaan)',
      'Non-repudiation (Nir-sangkal)',
    ],
    correctIndex: 1,
    explanation: 'Integrity (Integritas) menjamin bahwa data tidak diubah atau dimanipulasi oleh pihak yang tidak berwenang. Pengubahan data tanpa izin adalah pelanggaran integritas.',
  },
  {
    id: 'q4',
    phaseId: 'fase-2',
    category: 'Web Security',
    question: 'Apa mekanisme pertahanan paling efektif dan utama untuk mencegah kerentanan SQL Injection (SQLi)?',
    options: [
      'Menyembunyikan nama tabel database di kode HTML',
      'Menggunakan Parameterized Queries / Prepared Statements',
      'Memblokir semua karakter tanda kutip hanya di sisi JavaScript browser',
      'Mengganti metode HTTP dari GET menjadi POST',
    ],
    correctIndex: 1,
    explanation: 'Prepared Statements (Parameterized Queries) memisahkan struktur perintah SQL dari data input pengguna, sehingga input pengguna tidak akan pernah dieksekusi sebagai kode SQL.',
  },
  {
    id: 'q5',
    phaseId: 'fase-2',
    category: 'Web Security',
    question: 'Apa perbedaan utama antara Reflected XSS dan Stored XSS?',
    options: [
      'Reflected XSS hanya menyerang server Linux, Stored XSS menyerang Windows',
      'Stored XSS menyimpan payload berbahaya di database server, sedangkan Reflected XSS memantulkan payload langsung melalui parameter permintaan (seperti URL)',
      'Reflected XSS jauh lebih berbahaya karena tidak membutuhkan interaksi pengguna',
      'Tidak ada perbedaan, keduanya hanya istilah berbeda untuk CSRF',
    ],
    correctIndex: 1,
    explanation: 'Pada Stored XSS, payload tersimpan secara permanen di server (misalnya di kolom komentar) dan dieksekusi tiap kali korban membuka halaman tersebut. Pada Reflected XSS, payload dikirim lewat tautan khusus.',
  },
  {
    id: 'q6',
    phaseId: 'fase-2',
    category: 'Password & Kripto',
    question: 'Mengapa penambahan "Salt" yang unik sangat penting sebelum melakukan hashing pada password pengguna?',
    options: [
      'Agar panjang password selalu menjadi tepat 8 karakter',
      'Untuk mencegah serangan Rainbow Table dan memastikan password yang sama menghasilkan hash yang berbeda',
      'Supaya admin bisa mendekripsi password pengguna saat lupa',
      'Agar proses login menjadi 100x lebih cepat di server',
    ],
    correctIndex: 1,
    explanation: 'Salt menambahkan string acak unik ke setiap password sebelum di-hash. Ini menggagalkan serangan precomputed Rainbow Table dan membuat dua pengguna dengan password sama memiliki hash berbeda.',
  },
  {
    id: 'q7',
    phaseId: 'fase-2',
    category: 'OSINT',
    question: 'Informasi apa yang paling sering ditemukan saat melakukan analisis metadata (misalnya EXIF) pada file gambar atau dokumen PDF publik?',
    options: [
      'Password akun bank pemilik file',
      'Nama penulis, jenis perangkat lunak pembuat, tanggal pembuatan, hingga koordinat GPS',
      'Kunci privat SSH milik server web',
      'Riwayat penjelajahan browser seluruh karyawan perusahaan',
    ],
    correctIndex: 1,
    explanation: 'Metadata dokumen dan foto (EXIF) sering menyimpan nama pembuat/username internal, versi OS/aplikasi, timestamp, dan terkadang lokasi GPS jika tidak dibersihkan sebelum dipublikasikan.',
  },
  {
    id: 'q8',
    phaseId: 'fase-3',
    category: 'Active Directory',
    question: 'Apa tujuan utama dari teknik serangan "Kerberoasting" di lingkungan Active Directory?',
    options: [
      'Mematikan layanan DNS pada Domain Controller secara paksa',
      'Meminta tiket TGS untuk Service Principal Name (SPN) dan melakukan cracking hash secara offline untuk mendapatkan password akun layanan',
      'Menghapus seluruh log keamanan di Windows Event Viewer',
      'Mengenkripsi seluruh file di server menggunakan ransomware',
    ],
    correctIndex: 1,
    explanation: 'Kerberoasting memanfaatkan fitur Kerberos di mana pengguna domain biasa bisa meminta TGS untuk layanan (SPN) yang dienkripsi dengan hash NTLM akun layanan tersebut, lalu me-crack-nya secara offline.',
  },
  {
    id: 'q9',
    phaseId: 'fase-3',
    category: 'Blue Team & DFIR',
    question: 'Manakah di antara berikut ini yang merupakan fungsi utama dari sistem SIEM (Security Information and Event Management)?',
    options: [
      'Menggantikan peran antivirus di setiap komputer pengguna',
      'Mengumpulkan, mengkorelasikan, dan menganalisis log keamanan dari berbagai sumber secara terpusat untuk mendeteksi ancaman',
      'Melakukan brute-force otomatis terhadap server lawan',
      'Menyimpan cadangan file desain grafis perusahaan',
    ],
    correctIndex: 1,
    explanation: 'SIEM mengumpulkan log dari firewall, server, endpoint, dan aplikasi, lalu melakukan korelasi aturan untuk mendeteksi pola serangan dan memicu peringatan bagi tim SOC/Blue Team.',
  },
  {
    id: 'q10',
    phaseId: 'fase-3',
    category: 'Privilege Escalation',
    question: 'Di sistem Linux, perintah apa yang paling umum dijalankan pertama kali untuk mengecek perintah apa saja yang bisa dijalankan pengguna saat ini dengan hak akses root?',
    options: [
      'ls -la /etc/shadow',
      'sudo -l',
      'ping -c 4 127.0.0.1',
      'chmod 777 /root',
    ],
    correctIndex: 1,
    explanation: 'Perintah `sudo -l` menampilkan daftar perintah yang diizinkan dijalankan menggunakan `sudo` oleh pengguna saat ini, yang sering menjadi jalan pintas Privilege Escalation jika ada konfigurasi keliru.',
  },
  {
    id: 'q11',
    phaseId: 'fase-4',
    category: 'Cloud & Containers',
    question: 'Mengapa menjalankan container Docker dengan flag `--privileged` dianggap sangat berisiko dalam lingkungan produksi?',
    options: [
      'Karena container tidak akan bisa mengakses internet',
      'Karena container mendapatkan hampir semua kapabilitas kernel host, sehingga mempermudah container escape ke sistem host',
      'Karena ukuran image Docker menjadi 10 kali lebih besar',
      'Karena flag tersebut menghapus semua volume data secara otomatis',
    ],
    correctIndex: 1,
    explanation: 'Mode `--privileged` menonaktifkan isolasi keamanan penting dan memberi akses penuh ke perangkat host, membuat penyerang yang berhasil masuk ke container dapat mengambil alih mesin host.',
  },
  {
    id: 'q12',
    phaseId: 'fase-4',
    category: 'Dokumentasi & Etika',
    question: 'Bagian apa yang paling krusial bagi eksekutif/manajemen saat membaca laporan hasil Penetration Testing?',
    options: [
      'Potongan output mentah dari Nmap sepanjang 50 halaman',
      'Ringkasan Eksekutif (Executive Summary) yang menjelaskan dampak bisnis, tingkat risiko, dan prioritas perbaikan',
      'Daftar lengkap seluruh alamat IP yang tidak memiliki celah sama sekali',
      'Riwayat chat tim pentester selama pengujian berlangsung',
    ],
    correctIndex: 1,
    explanation: 'Pihak manajemen membutuhkan pemahaman jelas tentang dampak bisnis, tingkat keparahan risiko (Critical/High/Medium/Low), dan langkah remediasi prioritas dalam Executive Summary.',
  },
];

export const QA_ITEMS: QAItem[] = [
  {
    id: 'qa-1',
    category: 'Pemula & Lab',
    question: 'Saya benar-benar pemula, urutan belajar paling efektif menggunakan materi di sini bagaimana?',
    answer: 'Mulailah dari Fase 1: baca Dasar Keamanan Informasi, lalu pahami cara kerja Jaringan (TCP/IP & Port) dan cara kerja Linux/Windows. Setelah itu bangun Lab VM (VirtualBox/VMware + Kali Linux), lalu masuk ke Fase 2 dengan mencoba Web Security dan latihan legal di TryHackMe atau OverTheWire.',
    keyTakeaway: 'Jangan langsung loncat ke tool canggih tanpa paham jaringan dan sistem operasi.',
  },
  {
    id: 'qa-2',
    category: 'Web Security',
    question: 'Apa perbedaan antara Authentication (AuthN) dan Authorization (AuthZ)?',
    answer: 'Authentication (AuthN) memverifikasi SIAPA Anda (misalnya login pakai username & password/MFA). Authorization (AuthZ) memverifikasi APA yang boleh Anda lakukan setelah masuk (misalnya user biasa tidak boleh mengakses halaman admin). Celah pada AuthZ sering memicu kerentanan IDOR atau Broken Access Control.',
    keyTakeaway: 'AuthN = Identitas ("Siapa kamu?"), AuthZ = Hak Akses ("Apa yang boleh kamu lakukan?").',
  },
  {
    id: 'qa-3',
    category: 'Web Security',
    question: 'Apa bedanya XSS (Cross-Site Scripting) dan CSRF (Cross-Site Request Forgery)?',
    answer: 'XSS memungkinkan penyerang menyisipkan dan menjalankan kode JavaScript jahat di browser korban (kepercayaan pengguna terhadap situs). CSRF memaksa browser korban yang sudah login untuk mengirimkan permintaan HTTP tanpa sepengetahuan korban ke situs target (kepercayaan situs terhadap browser korban).',
    keyTakeaway: 'XSS mengeksekusi skrip di browser korban; CSRF memalsukan aksi atas nama korban.',
  },
  {
    id: 'qa-4',
    category: 'Jaringan & Pentest',
    question: 'Mengapa enumerasi lebih penting daripada langsung menjalankan eksploitasi?',
    answer: 'Sebagian besar kegagalan pentest terjadi karena kurangnya informasi. Enumerasi yang teliti mengungkap versi layanan yang tepat, direktori tersembunyi, kredensial default, dan celah konfigurasi. Dengan informasi akurat, eksploitasi menjadi terarah dan tidak merusak target.',
    keyTakeaway: '80% keberhasilan pentesting berasal dari enumerasi yang teliti.',
  },
  {
    id: 'qa-5',
    category: 'Blue Team',
    question: 'Jika ingin masuk ke jalur Blue Team / SOC Analyst, skill teknis apa yang harus diprioritaskan?',
    answer: 'Fokus pada analisis log jaringan dan endpoint (Windows Event Logs, Sysmon, HTTP access logs), pemahaman dasar protokol TCP/IP, penggunaan tool SIEM (seperti Splunk atau ELK Stack), serta memahami kerangka kerja MITRE ATT&CK untuk mengenali pola serangan.',
    keyTakeaway: 'Kuasai cara membaca log, jaringan dasar, dan taktik penyerang lewat MITRE ATT&CK.',
  },
  {
    id: 'qa-6',
    category: 'Active Directory',
    question: 'Kenapa Active Directory (AD) sering jadi target utama di jaringan perusahaan?',
    answer: 'Karena Active Directory adalah pusat otentikasi dan manajemen identitas di hampir semua perusahaan besar. Jika penyerang berhasil menguasai Domain Admin di AD, mereka otomatis memiliki kendali penuh atas ribuan komputer dan server di dalam organisasi tersebut.',
    keyTakeaway: 'Menguasai Active Directory berarti menguasai kunci utama seluruh jaringan perusahaan.',
  },
  {
    id: 'qa-7',
    category: 'Keamanan Belajar',
    question: 'Apakah aman belajar dan menyimpan materi hacking di laptop pribadi?',
    answer: 'Membaca catatan, dokumentasi, dan markdown referensi sepenuhnya aman. Namun, jika Anda mulai menjalankan tool eksploitasi, analisis malware, atau mencoba target rentan, WAJIB lakukan di dalam Virtual Machine (VM) yang jaringannya terisolasi dan gunakan snapshot agar laptop utama tetap bersih.',
    keyTakeaway: 'Selalu pisahkan lingkungan kerja harian dan lingkungan eksperimen menggunakan VM.',
  },
];

export const CHEAT_ITEMS: CheatItem[] = [
  {
    id: 'c1',
    tool: 'Nmap',
    category: 'Enumerasi Jaringan',
    description: 'Scan cepat semua port TCP beserta deteksi versi layanan dan skrip default.',
    command: 'nmap -sC -sV -T4 -p- -oN scan_lengkap.txt <TARGET_IP>',
  },
  {
    id: 'c2',
    tool: 'ffuf',
    category: 'Web Fuzzing',
    description: 'Mencari direktori atau file tersembunyi pada aplikasi web menggunakan wordlist.',
    command: 'ffuf -u http://target.local/FUZZ -w /usr/share/wordlists/dirb/common.txt -mc 200,301,302',
  },
  {
    id: 'c3',
    tool: 'SQLMap',
    category: 'Web Exploitation',
    description: 'Menguji dan mengenumerasi database secara otomatis pada parameter rentan SQLi (khusus lab!).',
    command: 'sqlmap -u "http://target.local/item?id=1" --batch --dbs',
  },
  {
    id: 'c4',
    tool: 'Linux Privesc',
    category: 'Post-Exploitation',
    description: 'Cek hak akses sudo, file SUID, dan informasi sistem dasar pada target Linux.',
    command: 'id && sudo -l && find / -perm -4000 2>/dev/null',
  },
  {
    id: 'c5',
    tool: 'Netcat',
    category: 'Listener / Reverse Shell',
    description: 'Membuka listener di mesin penyerang untuk menangkap koneksi reverse shell di lab.',
    command: 'nc -lvnp 4444',
  },
  {
    id: 'c6',
    tool: 'Python HTTP Server',
    category: 'Transfer File',
    description: 'Menyalakan web server sementara di port 8000 untuk memindahkan tool ke mesin lab.',
    command: 'python3 -m http.server 8000',
  },
  {
    id: 'c7',
    tool: 'Hashcat',
    category: 'Password Auditing',
    description: 'Menguji kekuatan hash MD5 menggunakan daftar kata rockyou.txt.',
    command: 'hashcat -m 0 -a 0 hashes.txt /usr/share/wordlists/rockyou.txt',
  },
  {
    id: 'c8',
    tool: 'Tcpdump',
    category: 'Blue Team / Packet Capture',
    description: 'Merekam trafik jaringan pada antarmuka eth0 ke dalam berkas .pcap untuk dianalisis.',
    command: 'sudo tcpdump -i eth0 -w capture_lab.pcap',
  },
];
