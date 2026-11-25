export interface LessonSection {
  heading: string;
  body: string;
  bullets?: string[];
}

export interface ModuleLesson {
  slug: string;
  summary: string;
  objectives: string[];
  sections: LessonSection[];
  labPractice: string;
  checklist: string[];
}

export const MODULE_LESSONS: Record<string, ModuleLesson> = {
  Basic: {
    slug: 'Basic',
    summary:
      'Memahami fondasi utama keamanan informasi (CIA Triad), pola pikir keamanan (adversarial thinking), serta peran tim Red, Blue, dan Purple.',
    objectives: [
      'Memahami konsep Confidentiality, Integrity, dan Availability (CIA Triad).',
      'Mengenal perbedaan peran Red Team, Blue Team, dan Purple Team.',
      'Memahami konsep risiko, ancaman (threat), kerentanan (vulnerability), dan dampak.',
    ],
    sections: [
      {
        heading: '1. Tiga Pilar Utama: CIA Triad',
        body: 'Setiap sistem keamanan informasi bertumpu pada tiga prinsip utama:',
        bullets: [
          'Confidentiality (Kerahasiaan): Memastikan data hanya bisa diakses oleh pihak yang berwenang (contoh: enkripsi, kontrol akses, MFA).',
          'Integrity (Integritas): Menjamin keaslian data agar tidak diubah tanpa izin selama penyimpanan maupun pengiriman (contoh: hashing SHA-256, digital signature).',
          'Availability (Ketersediaan): Memastikan layanan dan data selalu tersedia saat dibutuhkan pengguna sah (contoh: backup, redundansi, mitigasi DDoS).',
        ],
      },
      {
        heading: '2. Perbedaan Threat, Vulnerability, dan Risk',
        body: 'Dalam dunia InfoSec, tiga istilah ini tidak boleh tertukar:',
        bullets: [
          'Vulnerability (Kerentanan): Celah atau kelemahan pada sistem/aplikasi (misalnya SQL Injection atau password lemah).',
          'Threat (Ancaman): Pihak atau kejadian yang berpotensi mengeksploitasi celah tersebut (misalnya peretas atau ransomware).',
          'Risk (Risiko): Potensi kerugian bisnis akibat bertemunya ancaman dengan kerentanan.',
        ],
      },
      {
        heading: '3. Pola Pikir Tim Keamanan',
        body: 'Profesional keamanan terbagi dalam beberapa peran utama yang saling melengkapi:',
        bullets: [
          'Red Team (Offense): Mensimulasikan serangan nyata untuk menguji kesiapan pertahanan.',
          'Blue Team (Defense): Membangun pertahanan, memantau log (SOC), dan merespons insiden.',
          'Purple Team: Menjembatani Red dan Blue agar temuan serangan langsung menjadi aturan deteksi.',
        ],
      },
    ],
    labPractice:
      'Buka terminal di laptopmu, cek sistem operasi dan layanan yang aktif (`netstat -ano` di Windows atau `ss -tulnp` di Linux), lalu identifikasi 3 port terbuka yang tidak kamu kenali.',
    checklist: [
      'Saya bisa menjelaskan CIA Triad dengan contoh nyata.',
      'Saya paham beda Vulnerability, Threat, dan Risk.',
      'Saya sudah menentukan minat awal (Red Team / Blue Team).',
    ],
  },

  Building_A_Lab: {
    slug: 'Building_A_Lab',
    summary:
      'Cara menyiapkan lingkungan belajar hacking yang aman dan terisolasi menggunakan Virtual Machine (VM) agar laptop utama tetap terlindungi.',
    objectives: [
      'Memasang VirtualBox atau VMware dengan isolasi jaringan yang benar.',
      'Menyiapkan mesin penyerang (Kali Linux / Parrot OS) dan mesin target rentan.',
      'Membiasakan penggunaan Snapshot sebelum melakukan eksperimen berisiko.',
    ],
    sections: [
      {
        heading: '1. Arsitektur Lab yang Aman',
        body: 'Jangan pernah menguji tool eksploitasi langsung dari OS utama laptop. Gunakan topologi virtual:',
        bullets: [
          'Hypervisor: VirtualBox (gratis) atau VMware Workstation Player.',
          'Mesin Penyerang: Kali Linux atau Parrot Security OS (minimal 2 vCPU, 4 GB RAM).',
          'Mesin Target: Metasploitable 2/3, OWASP Juice Shop, atau DVWA untuk latihan legal.',
        ],
      },
      {
        heading: '2. Pengaturan Jaringan (Network Isolation)',
        body: 'Pemilihan mode jaringan VM menentukan keamanan lab:',
        bullets: [
          'Host-Only / Internal Network: Paling aman untuk pengujian malware atau eksploitasi karena VM tidak bisa keluar ke internet maupun jaringan Wi-Fi rumah.',
          'NAT Network: Digunakan agar sesama VM di lab bisa berkomunikasi sementara tetap tersembunyi dari jaringan LAN luar.',
        ],
      },
    ],
    labPractice:
      'Buat 1 VM Kali Linux dan 1 container/VM OWASP Juice Shop di jaringan lokal terisolasi, ambil Snapshot awal ("Clean State"), lalu pastikan keduanya bisa saling `ping`.',
    checklist: [
      'Hypervisor sudah terpasang di laptop.',
      'Mode jaringan VM menggunakan NAT Network / Host-Only.',
      'Snapshot bersih sudah dibuat sebelum mulai praktik.',
    ],
  },

  Network_Attacks: {
    slug: 'Network_Attacks',
    summary:
      'Memahami cara kerja protokol jaringan (TCP/IP, ARP, DNS, HTTP) serta teknik serangan dan pertahanan di level jaringan.',
    objectives: [
      'Memahami alur TCP 3-Way Handshake dan cara kerja paket jaringan.',
      'Mengenal teknik enumerasi jaringan dengan Nmap dan analisis paket dengan Wireshark.',
      'Memahami mekanisme serangan MITM, ARP Spoofing, dan cara memitigasinya.',
    ],
    sections: [
      {
        heading: '1. Dasar Paket & 3-Way Handshake',
        body: 'Sebelum data HTTP atau SSH dikirim, TCP membangun koneksi melalui 3 tahap: SYN -> SYN-ACK -> ACK. Nmap memanfaatkan perilaku ini untuk mendeteksi apakah sebuah port terbuka (open), tertutup (closed), atau disaring firewall (filtered).',
      },
      {
        heading: '2. Serangan Umum di Jaringan Lokal',
        body: 'Pada jaringan lokal (LAN) yang tidak diamankan, penyerang dapat melakukan:',
        bullets: [
          'ARP Spoofing / MITM: Menipu router dan korban agar trafik melewati mesin penyerang.',
          'DNS Spoofing: Mengarahkan permintaan domain tertentu ke alamat IP palsu.',
          'Sniffing: Menyadap lalu lintas tidak terenkripsi (HTTP, Telnet, FTP) menggunakan Wireshark/Tcpdump.',
        ],
      },
      {
        heading: '3. Pertahanan Jaringan',
        body: 'Langkah mitigasi standar industri meliputi penggunaan enkripsi transport (TLS/HTTPS, SSH), segmentasi VLAN, Dynamic ARP Inspection (DAI) di switch, serta firewall dengan prinsip default-deny.',
      },
    ],
    labPractice:
      'Jalankan `nmap -sC -sV <IP_TARGET_LAB>` pada mesin lab virtualmu, lalu tangkap trafiknya dengan Wireshark dan amati paket SYN/SYN-ACK.',
    checklist: [
      'Paham alur TCP 3-Way Handshake.',
      'Bisa membaca hasil scan port Nmap dasar.',
      'Mengerti kenapa protokol plaintext (HTTP/FTP/Telnet) berbahaya.',
    ],
  },

  Web: {
    slug: 'Web',
    summary:
      'Menguasai kerentanan aplikasi web paling umum berdasarkan standar OWASP Top 10 serta cara pencegahannya di kode aplikasi.',
    objectives: [
      'Memahami alur HTTP Request & Response (Headers, Cookies, Methods).',
      'Mengenal celah SQL Injection, XSS, CSRF, SSRF, dan Broken Access Control (IDOR).',
      'Menggunakan proxy intercept seperti Burp Suite atau OWASP ZAP di lab.',
    ],
    sections: [
      {
        heading: '1. Broken Access Control & IDOR',
        body: 'Kerentanan nomor 1 di OWASP Top 10. Terjadi ketika aplikasi gagal memeriksa apakah pengguna yang login benar-benar berhak mengakses data tertentu — misalnya mengganti parameter `?user_id=101` menjadi `?user_id=102` dan berhasil melihat profil orang lain.',
      },
      {
        heading: '2. Injection (SQL Injection & Command Injection)',
        body: 'Terjadi saat input pengguna langsung digabungkan ke query database atau perintah OS tanpa sanitasi/parameterisasi. Solusi mutlak untuk SQLi adalah menggunakan Prepared Statements / Parameterized Queries.',
      },
      {
        heading: '3. Cross-Site Scripting (XSS)',
        body: 'Penyerang menyisipkan JavaScript berbahaya ke halaman web yang dilihat korban (Reflected, Stored, atau DOM-based XSS). Mitigasi utama: context-aware output encoding dan Content Security Policy (CSP).',
      },
    ],
    labPractice:
      'Buka OWASP Juice Shop di lab lokalmu, aktifkan Burp Suite Community Edition sebagai proxy, lalu coba temukan 2 celah tingkat pemula (seperti Score Board atau SQLi login bypass).',
    checklist: [
      'Paham struktur HTTP Request/Response.',
      'Bisa membedakan AuthN vs AuthZ serta XSS vs CSRF.',
      'Tahu cara mencegah SQLi menggunakan Prepared Statement.',
    ],
  },

  Osint: {
    slug: 'Osint',
    summary:
      'Teknik mengumpulkan intelijen dari sumber informasi publik secara legal (Open Source Intelligence) sebelum pengujian sistem.',
    objectives: [
      'Menggunakan teknik Google Dorking secara efektif.',
      'Mengumpulkan informasi domain, subdomain, DNS, dan sertifikat SSL.',
      'Memeriksa kebocoran metadata (EXIF) pada dokumen atau gambar publik.',
    ],
    sections: [
      {
        heading: '1. Recon Pasif vs Aktif',
        body: 'OSINT berfokus pada pengumpulan data pasif tanpa menyentuh server target secara langsung — memanfaatkan mesin pencari, arsip web (Wayback Machine), catatan Certificate Transparency (`crt.sh`), dan data WHOIS.',
      },
      {
        heading: '2. Google Dorking & Metadata',
        body: 'Operator pencarian seperti `site:target.com filetype:pdf` atau `inurl:admin` membantu menemukan dokumen sensitif yang tidak sengaja terindeks. Dokumen publik sering kali masih menyimpan nama pembuat internal atau path server di metadatanya.',
      },
    ],
    labPractice:
      'Gunakan `crt.sh` atau pencarian Google Dork pada domain milikmu sendiri (atau domain latihan legal) untuk melihat daftar subdomain publik yang tercatat.',
    checklist: [
      'Paham perbedaan recon pasif dan aktif.',
      'Menguasai minimal 4 operator Google Dork.',
      'Tahu cara membersihkan metadata EXIF sebelum mengunggah file.',
    ],
  },

  Active_Directory: {
    slug: 'Active_Directory',
    summary:
      'Memahami arsitektur Windows Active Directory, protokol Kerberos/LDAP, jalur eskalasi hak akses domain, dan pertahanannya.',
    objectives: [
      'Memahami komponen AD: Domain Controller, Forest, OU, GPO, dan Kerberos.',
      'Mengenal teknik enumerasi dengan BloodHound serta serangan Kerberoasting & AS-REP Roasting.',
      'Mengetahui langkah hardening AD (Tiering, gMSA, dan perlindungan kredensial).',
    ],
    sections: [
      {
        heading: '1. Mengapa Active Directory Krusial?',
        body: 'Di mayoritas perusahaan, AD mengatur otentikasi seluruh karyawan dan server. Mengamankan AD berarti menjaga batas kepercayaan seluruh jaringan internal.',
      },
      {
        heading: '2. Teknik Serangan & Pertahanan Populer',
        body: 'Serangan AD umumnya mengeksploitasi salah konfigurasi izin (ACL) dan desain protokol lama:',
        bullets: [
          'Kerberoasting: Meminta TGS untuk akun layanan ber-SPN lalu cracking secara offline. Mitigasi: password panjang acak (25+ karakter) atau gunakan gMSA.',
          'Pass-the-Hash (PtH): Menggunakan hash NTLM langsung tanpa perlu tahu plaintext password.',
          'BloodHound: Memetakan jalur serangan grafis dari user biasa menuju Domain Admin.',
        ],
      },
    ],
    labPractice:
      'Pelajari diagram alur otentikasi Kerberos (AS-REQ -> AS-REP -> TGS-REQ -> TGS-REP) dan praktikkan di lab AD legal seperti TryHackMe Attacktive Directory.',
    checklist: [
      'Paham alur dasar tiket Kerberos (TGT & TGS).',
      'Mengerti cara kerja Kerberoasting & mitigasinya.',
      'Tahu fungsi BloodHound dalam audit AD.',
    ],
  },

  Defense: {
    slug: 'Defense',
    summary:
      'Strategi pertahanan sistem berlapis (Defense in Depth), hardening sistem operasi, manajemen aset, dan arsitektur Zero Trust.',
    objectives: [
      'Menerapkan prinsip Least Privilege dan Defense in Depth.',
      'Melakukan hardening dasar pada server Linux dan Windows.',
      'Memahami pentingnya inventaris aset dan patch management.',
    ],
    sections: [
      {
        heading: '1. Defense in Depth & Least Privilege',
        body: 'Jangan pernah bergantung pada satu lapis pertahanan saja (misalnya hanya firewall). Gabungkan kontrol jaringan, hardening OS, EDR di endpoint, MFA pada identitas, dan enkripsi data. Setiap akun dan layanan hanya boleh memiliki hak akses minimum yang dibutuhkan.',
      },
      {
        heading: '2. Langkah Hardening Cepat',
        body: 'Tindakan yang paling berdampak mengurangi risiko serangan:',
        bullets: [
          'Nonaktifkan layanan dan port yang tidak dipakai.',
          'Wajibkan SSH Key authentication dan matikan root login langsung.',
          'Terapkan pembaruan keamanan (patching) secara rutin dan otomatis untuk kerentanan kritis.',
        ],
      },
    ],
    labPractice:
      'Audit pengaturan keamanan pada salah satu VM Linux lab milikmu menggunakan `lynis audit system` dan periksa 3 rekomendasi perbaikan prioritas.',
    checklist: [
      'Paham konsep Defense in Depth.',
      'Mengerti cara kerja prinsip Least Privilege.',
      'Tahu langkah hardening dasar server.',
    ],
  },
};
