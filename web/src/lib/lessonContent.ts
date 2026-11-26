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

  // ==========================================
  // JALUR IOT & TINYML (PROYEK GELANG SOS)
  // ==========================================
  'iot-arsitektur-sos': {
    slug: 'iot-arsitektur-sos',
    summary:
      'Memahami urgensi medis dan arsitektur hardware-software Gelang Darurat SOS untuk lansia dan disabilitas berbasis ESP32, sensor inersial MPU6050, dan oximeter MAX30102.',
    objectives: [
      'Memahami urgensi pemantauan pasif lansia/disabilitas tanpa bergantung tombol manual.',
      'Menguasai arsitektur kolaborasi Edge-Cloud (ESP32 -> TinyML -> Firebase -> Caregiver < 5s).',
      'Memetakan pinout perangkat keras: I2C (GPIO21/22), Buzzer (GPIO18), Haptic (GPIO19), dan catu daya Li-Po 3.7V.',
    ],
    sections: [
      {
        heading: '1. Urgensi Medis: Kegagalan Tombol Darurat Manual',
        body: 'Studi literatur Moreno (2024) terhadap 1.563 penelitian membuktikan bahwa 88% lansia dan penderita demensia/stroke tidak mampu menekan tombol darurat fisik kecil saat terjatuh atau mengalami serangan mendadak. Oleh karena itu, gelang SOS harus memiliki kecerdasan buatan terdistribusi (Edge AI) yang mengenali anomali secara otomatis tanpa partisipasi aktif korban.',
      },
      {
        heading: '2. Arsitektur Kolaborasi Edge-Cloud',
        body: 'Sistem dirancang dengan pembagian tugas yang efisien:',
        bullets: [
          'Edge Unit (Gelang): Melakukan sampling sensor pada 50 Hz, menghitung fitur sliding window 2 detik, dan menjalankan inferensi TinyML Random Forest secara lokal (< 10 ms).',
          'Feedback Lokal: Mengaktifkan buzzer dan haptic motor selama 10 detik sebagai jeda pembatalan (grace period) jika terjadi alarm palsu.',
          'Cloud Broker: Jika tidak dibatalkan, ESP32 mengaktifkan Wi-Fi untuk mengirim payload darurat ke Firebase Realtime Database via koneksi aman HTTPS/TLS.',
          'Caregiver Receiver: Aplikasi smartphone keluarga/perawat menerima push notification darurat dengan latensi total < 5 detik.',
        ],
      },
      {
        heading: '3. Spesifikasi Komponen & Skema Daya',
        body: 'Komponen yang digunakan meliputi ESP32 (SRAM 520KB, Flash 4MB), modul MPU6050 (akselerasi & gyro), MAX30102 (pulse oximeter), modul charger TP4056 dengan baterai Li-Po 500mAh, serta regulator LDO 3.3V hemat daya untuk memastikan daya tahan operasional di atas 18 jam.',
      },
    ],
    labPractice:
      'Buat sketsa Arduino I2C Scanner sederhana untuk mendeteksi apakah sensor MPU6050 (0x68) dan MAX30102 (0x57) terhubung dengan baik pada pin SDA (GPIO 21) dan SCL (GPIO 22) ESP32.',
    checklist: [
      'Saya paham alasan ilmiah mengapa tombol panic button manual tidak efektif untuk lansia.',
      'Saya sudah memverifikasi alamat I2C MPU6050 (0x68) dan MAX30102 (0x57).',
      'Saya siap menyusun Bab 1 dan Bab 2 Skripsi dengan sitasi Moreno (2024) dan Carvalho (2026).',
    ],
  },

  'iot-tinyml-esp32': {
    slug: 'iot-tinyml-esp32',
    summary:
      'Menerapkan algoritma TinyML Random Forest pada mikrokontroler ESP32: alasan keunggulan dibanding Deep Learning, alur ekspor Scikit-Learn ke C++ header (emlearn), dan inferensi berkecepatan tinggi.',
    objectives: [
      'Memahami perbandingan komputasi, memori, dan daya antara Random Forest vs CNN/LSTM.',
      'Melatih model Random Forest di Python dan mengekspornya menjadi berkas header C++ (`model.h`) menggunakan emlearn.',
      'Mengintegrasikan model.h ke dalam program ESP32 Arduino dan mengukur waktu inferensi lokal.',
    ],
    sections: [
      {
        heading: '1. Mengapa Random Forest untuk Edge MCU?',
        body: 'Mikrokontroler ESP32 memiliki SRAM terbatas (520 KB). Deep Learning (CNN/LSTM) membutuhkan puluhan MB memori dan operasi floating-point matriks berat. Sebaliknya, Random Forest (ensemble Decision Trees) hanya berupa percabangan logika if-else berbobot ringan, dengan waktu inferensi < 10 ms dan kebutuhan RAM < 15 KB.',
      },
      {
        heading: '2. Alur Pelatihan & Konversi emlearn di Python',
        body: 'Gunakan Scikit-Learn untuk melatih 10 Decision Trees dengan kedalaman maksimal (max_depth) 6 agar model tidak overfitting:',
        bullets: [
          'Kumpulkan dataset fitur: SVM mean, SVM max, RMS, Variance, MCR, Heart Rate, SpO2.',
          'Latih RandomForestClassifier(n_estimators=10, max_depth=6).',
          'Ekspor ke C++ menggunakan: `c_model = emlearn.convert(clf, method="inline"); c_model.save("model.h")`.',
        ],
      },
      {
        heading: '3. Inferensi Real-Time di ESP32',
        body: 'Sertakan `#include "model.h"` di Arduino IDE. Panggil fungsi `int hasil = sos_random_forest_predict(features, 7);` setiap window data selesai diproses. Jika mengembalikan nilai 1 (anomali darurat), picu alarm.',
      },
    ],
    labPractice:
      'Gunakan Python untuk mengekspor model Random Forest sederhana dengan emlearn, lalu uji waktu eksekusi fungsi prediksinya di ESP32 menggunakan fungsi `micros()` untuk membuktikan latensi < 10 ms.',
    checklist: [
      'Paham perbandingan Random Forest vs Deep Learning di mikrokontroler.',
      'Berhasil menghasilkan berkas model.h dari dataset latihan.',
      'Inferensi C++ di ESP32 berhasil dijalankan dengan latensi di bawah 10 milidetik.',
    ],
  },

  'iot-ekstraksi-fitur': {
    slug: 'iot-ekstraksi-fitur',
    summary:
      'Pemrosesan sinyal digital untuk deteksi anomali: sampling 50 Hz, circular buffer 2 detik (100 sampel) dengan overlap 50%, serta ekstraksi fitur domain waktu untuk mereduksi alarm palsu dari aktivitas harian (ADL).',
    objectives: [
      'Menerapkan sampling data akselerometer 50 Hz stabil menggunakan timer non-blocking.',
      'Menghitung fitur statistik: SVM (Signal Vector Magnitude), RMS, Variance, dan Mean Crossing Rate (MCR).',
      'Menerapkan filter post-impact inactivity untuk membedakan jatuh nyata dari aktivitas harian seperti tepuk tangan atau mengetik.',
    ],
    sections: [
      {
        heading: '1. Sampling 50 Hz & Sliding Window 2 Detik',
        body: 'Panjang window 2 detik (100 sampel pada 50 Hz) dengan overlap 50% (50 sampel / 1 detik) terbukti secara empiris (Casilari et al., 2022) memberikan waktu pengenalan paling cepat tanpa kehilangan pola pre-impact, impact peak, dan post-impact.',
      },
      {
        heading: '2. Formulasi Fitur Domain Waktu',
        body: 'Fitur-fitur utama yang diekstraksi dari data percepatan:',
        bullets: [
          'SVM (Signal Vector Magnitude): sqrt(Ax^2 + Ay^2 + Az^2). Mengukur percepatan skalar tanpa dipengaruhi orientasi tangan.',
          'RMS (Root Mean Square): Mengukur energi kinetik dinamis selama jendela 2 detik.',
          'Variance (Varians): Mengukur dispersi getaran gerak pergelangan tangan.',
          'MCR (Mean Crossing Rate): Menghitung frekuensi sinyal memotong nilai rata-rata untuk membedakan gerak berulang (berjalan) dari benturan tunggal.',
        ],
      },
      {
        heading: '3. Reduksi False Alarm ADL (Activities of Daily Living)',
        body: 'Aktivitas seperti bertepuk tangan atau meletakkan cangkir menghasilkan impact peak sesaat, tetapi tangan segera bergerak kembali. Pada jatuh nyata, impact peak selalu diikuti oleh fase tidak bergerak (post-impact inactivity) selama 1.5 - 2 detik. Kombinasi SVM dan analisis kestabilan orientasi menurunkan false alarm hingga < 3%.',
      },
    ],
    labPractice:
      'Implementasikan circular buffer berkapasitas 100 sampel float di ESP32, lalu cetak nilai SVM dan RMS ke Serial Plotter saat tangan digerakkan normal vs saat disimulasikan hentakan jatuh.',
    checklist: [
      'Timer sampling 50 Hz (interval 20 ms) berjalan presisi di ESP32.',
      'Fungsi perhitungan SVM, RMS, dan Varians menghasilkan nilai yang terverifikasi akurat.',
      'Filter post-impact inactivity berhasil membatalkan alarm pada gerakan tepuk tangan.',
    ],
  },

  'iot-multi-sensor-fusion': {
    slug: 'iot-multi-sensor-fusion',
    summary:
      'Integrasi multi-sensor fusion: menggabungkan data kinetik inersial (MPU6050) dengan parameter fisiologis denyut nadi & saturasi oksigen (MAX30102) serta opsi sensor gestur lekukan jari (Flex Sensor).',
    objectives: [
      'Mengonfigurasi komunikasi I2C bersama (shared bus) antara MPU6050 dan MAX30102 pada pin GPIO21/22.',
      'Membaca denyut nadi (BPM) dan SpO2 secara real-time dengan penanganan motion artifact.',
      'Menyusun logika fusi multi-modal untuk mendeteksi darurat medis non-kinetik (takikardia panik > 115 BPM atau henti detak).',
    ],
    sections: [
      {
        heading: '1. Arsitektur Shared I2C Bus',
        body: 'ESP32 berkomunikasi dengan MPU6050 (0x68) dan MAX30102 (0x57) pada jalur I2C yang sama (SDA GPIO21, SCL GPIO22) dengan resistor pull-up 4.7kΩ ke 3.3V. Pembacaan dilakukan secara terjadwal agar pembacaan optik LED MAX30102 tidak terinterupsi oleh pembacaan register IMU.',
      },
      {
        heading: '2. Pembacaan PPG Fisiologis & Mitigasi Noise',
        body: 'MAX30102 memancarkan sinar Red (660nm) dan Infrared (880nm). Sensor menghitung Heart Rate via peak detection dan SpO2 via rasio serapan AC/DC. Gerakan tangan (motion artifact) disaring dengan hanya memperbarui nilai denyut nadi saat akselerometer menunjukkan tangan dalam kondisi relatif stabil.',
      },
      {
        heading: '3. Logika Fusi Multi-Sensor untuk Keputusan Darurat',
        body: 'Kombinasi data meningkatkan akurasi sistem:',
        bullets: [
          'Hentakan Terdeteksi + Denyut Nadi Melonjak (> 110 BPM): Indikasi panik akibat jatuh darurat (Konfirmasi Critical Alert).',
          'Tidak Ada Hentakan + Denyut Nadi Mendadak Hilang/Sangat Rendah (< 40 BPM): Indikasi pingsan atau aritmia akut (Medical Distress Alert).',
          'Flex Sensor (Opsional di GPIO34 ADC): Menangkap tekukan jari membentuk isyarat SOS saat korban sadar namun lumpuh bicara.',
        ],
      },
    ],
    labPractice:
      'Sambungkan MPU6050 dan MAX30102 ke ESP32, lalu buat program pembacaan simultan yang menampilkan nilai akselerasi (g) dan Heart Rate (BPM) pada Serial Monitor secara stabil.',
    checklist: [
      'Kedua sensor beroperasi normal pada shared I2C bus tanpa crash atau freezing.',
      'Nilai BPM dan SpO2 terbaca stabil dan noise gerakan berhasil disaring.',
      'Logika fusi multi-modal terbukti menaikkan tingkat keyakinan (confidence) prediksi anomali.',
    ],
  },

  'iot-firebase-caregiver': {
    slug: 'iot-firebase-caregiver',
    summary:
      'Integrasi konektivitas cloud IoT: komunikasi aman TLS/HTTPS ke Firebase Realtime Database, perancangan skema payload telemetri JSON, dan pengiriman notifikasi darurat ke smartphone caregiver dengan target latensi < 5 detik.',
    objectives: [
      'Menghubungkan ESP32 ke jaringan Wi-Fi lokal dengan protokol keamanan TLS.',
      'Mengirimkan data anomali darurat ke Firebase Realtime Database menggunakan REST API / Firebase-ESP32 library.',
      'Menguji dan memverifikasi latensi transmisi end-to-end dari deteksi di gelang hingga notifikasi diterima smartphone < 5 detik.',
    ],
    sections: [
      {
        heading: '1. Koneksi Wi-Fi & Keamanan TLS',
        body: 'Untuk menghemat konsumsi daya baterai, modem Wi-Fi ESP32 berada dalam mode standby/modem-sleep saat kondisi normal, dan hanya melakukan transmisi penuh saat terdeteksi anomali atau saat mengirim data telemetri berkala (heartbeat 15 menit). Semua pengiriman data menggunakan enkripsi TLS/HTTPS port 443.',
      },
      {
        heading: '2. Skema Data Realtime Database',
        body: 'Data darurat disimpan pada node `/emergency_alerts/{alert_id}`:',
        bullets: [
          'timestamp: Waktu kejadian berbasis NTP Epoch time.',
          'status: "CRITICAL_FALL" atau "PHYSIOLOGICAL_DISTRESS".',
          'confidence: Skor keyakinan model TinyML (misal 0.962).',
          'telemetry: { impact_g: 3.84, heart_rate_bpm: 118, spo2: 96 }.',
          'caregiver_ack: Status konfirmasi penerimaan oleh keluarga (boolean).',
        ],
      },
      {
        heading: '3. Push Notification ke Smartphone Caregiver',
        body: 'Perubahan pada node database Firebase otomatis memicu Cloud Messaging (FCM) berprioritas tinggi. Aplikasi pendamping Android caregiver akan menyalakan layar, membunyikan nada alarm darurat terus-menerus, dan menampilkan tombol panggilan darurat medis 112 / RS terdekat.',
      },
    ],
    labPractice:
      'Buat proyek Firebase Realtime Database gratis, masukkan URL database dan auth secret ke sketch ESP32, lalu kirim payload darurat simulasi dan ukur latensinya menggunakan fungsi `millis()`.',
    checklist: [
      'ESP32 berhasil terhubung ke Firebase via HTTPS/TLS.',
      'Payload JSON darurat tersimpan rapi pada Realtime Database.',
      'Latensi pengiriman terbukti di bawah 5 detik (rata-rata 3.2 detik).',
    ],
  },

  'iot-feedback-audio-suara': {
    slug: 'iot-feedback-audio-suara',
    summary:
      'Umpan balik audio & taktil lokal: pengendalian Active Buzzer 3.3V dan Haptic Vibration Motor dengan protokol grace period pembatalan 10 detik, serta arsitektur ekspansi asisten suara darurat (Speech-to-Text).',
    objectives: [
      'Memprogram pola nada peringatan Active Buzzer (SOS Morse Code) dan getaran taktil haptic motor.',
      'Menerapkan protokol jeda pembatalan (grace period) 10 detik untuk mencegah kepanikan keluarga akibat alarm palsu.',
      'Memahami integrasi fitur ekspansi suara darurat (Voice SOS / Speech-to-Text) berbasis smartphone companion.',
    ],
    sections: [
      {
        heading: '1. Rangkaian Pengendali Buzzer & Motor Getar',
        body: 'Buzzer dan motor getar membutuhkan arus 30-50 mA, melebihi batas aman arus pin GPIO ESP32 (maks 12 mA). Gunakan transistor NPN (2N2222 atau SS8050) sebagai saklar elektronik (driver) dengan resistor basis 1kΩ dan diode flyback (1N4148) untuk meredam lonjakan tegangan induktif kumparan motor.',
      },
      {
        heading: '2. Protokol Grace Period 10 Detik',
        body: 'Saat TinyML mendeteksi anomali, sistem TIDAK langsung mengirim sinyal ke cloud:',
        bullets: [
          'Detik 0 - 10: Buzzer berbunyi bip berulang dan motor bergetar memberi sinyal ke pengguna.',
          'Jika pengguna masih sadar dan baik-baik saja (misal tersandung ringan), pengguna dapat menekan tombol pembatalan fisik (*cancel button*) pada gelang.',
          'Jika tombol ditekan dalam 10 detik, status alarm dibatalkan dan sistem kembali ke mode monitoring normal.',
          'Jika tidak ada pembatalan setelah 10 detik, sistem mengonfirmasi bahaya nyata dan segera menyalakan Wi-Fi untuk push ke Firebase.',
        ],
      },
      {
        heading: '3. Ekspansi Suara Asistif (Voice SOS Companion)',
        body: 'Berdasarkan literatur Patel et al. (Nexus, 2026), fitur suara menjadi rujukan masa depan: gelang dapat memicu asisten suara pada smartphone melalui BLE untuk mengenali teriakan minta tolong ("TOLONG", "BANTU SAYA") saat tangan sama sekali tidak dapat digerakkan.',
      },
    ],
    labPractice:
      'Tulis kode Arduino yang membunyikan buzzer pola SOS (`... --- ...`) selama 10 detik dengan interupsi tombol tombol pembatalan di GPIO 0/35 untuk membatalkan proses transmisi cloud.',
    checklist: [
      'Buzzer dan motor getar merespons perintah GPIO dengan driver transistor yang aman.',
      'Logika countdown grace period 10 detik berfungsi sempurna dengan tombol cancel.',
      'Literatur penunjang asisten suara (Nexus 2026 / Mood Mate 2025) siap disitasi untuk Bab 2 & Bab 5.',
    ],
  },

  'iot-pengujian-sinta': {
    slug: 'iot-pengujian-sinta',
    summary:
      'Metodologi pengujian menyeluruh, perhitungan Confusion Matrix (Akurasi, Sensitivitas, False Alarm Rate), pemetaan sitasi 7 klaster ke Bab 1 s.d. Bab 5 Skripsi, dan rujukan jurnal nasional terindeks SINTA.',
    objectives: [
      'Merancang skenario pengujian prototipe (20 uji jatuh, 50 uji ADL normal, dan uji latensi jaringan).',
      'Menghitung matriks evaluasi: Akurasi (> 95%), Sensitivitas/Recall (> 96%), dan False Alarm Rate (< 4%).',
      'Memetakan seluruh literatur 7 klaster ke dalam Bab 1, 2, 3, 4, dan 5 Skripsi / Laporan Tugas Akhir.',
    ],
    sections: [
      {
        heading: '1. Desain Skenario Pengujian Empiris',
        body: 'Pengujian prototipe harus dirancang secara sistematis dengan protokol keamanan:',
        bullets: [
          'Skenario Jatuh (Fall Scenarios): Jatuh ke depan (trip fall), jatuh ke belakang (slip fall), dan jatuh ke samping (syncope fall) menggunakan matras pengaman busa tebal.',
          'Skenario ADL (Activities of Daily Living): Berjalan normal, menaiki/menuruni tangga, duduk cepat di kursi, bertepuk tangan, mengetik keyboard, dan mengayun tangan saat mengambil barang.',
          'Uji Latensi Jaringan: Mengukur waktu respon dari 3 kondisi koneksi (Wi-Fi dekat router, Wi-Fi terhalang tembok, dan tethering 4G).',
        ],
      },
      {
        heading: '2. Perhitungan Confusion Matrix',
        body: 'Hitung metrik ilmiah untuk Bab 4:',
        bullets: [
          'TP (True Positive): Kejadian jatuh yang berhasil dideteksi sistem.',
          'TN (True Negative): Aktivitas harian ADL yang benar-benar tidak memicu alarm.',
          'FP (False Positive): Aktivitas normal yang salah dideteksi sebagai jatuh (False Alarm).',
          'FN (False Negative): Kejadian jatuh nyata yang gagal dideteksi (Paling berbahaya).',
          'Sensitivitas / Recall = TP / (TP + FN) (Target: > 96%).',
          'False Alarm Rate (FAR) = FP / (FP + TN) (Target: < 4%).',
        ],
      },
      {
        heading: '3. Pemetaan Sitasi ke Bab Skripsi 1 s.d. 5',
        body: 'Gunakan matriks ini saat menyusun draf naskah skripsi:',
        bullets: [
          'Bab 1: Moreno (2024), Carvalho (2026), Giawa (2025) untuk latar belakang urgensi lansia.',
          'Bab 2: Baccouche (2023), Sabry (2026), Kumar (2026), Doukaga (2024) untuk teori TinyML dan sensor fusion.',
          'Bab 3: Casilari (2022), Wang (2025), Santos (2021) untuk metodologi circular buffer dan rumus SVM/RMS.',
          'Bab 4: Siddiqui (2026), Hidayat (2026) untuk benchmark perbandingan hasil pengujian.',
          'Bab 5: Patel (2026), Al-Zubaidi (2025) untuk kesimpulan dan saran BLE Long Range / Voice Assistant.',
        ],
      },
    ],
    labPractice:
      'Gunakan spreadsheet atau script Python untuk memasukkan data 50 uji coba prototipe, lalu hitung nilai Confusion Matrix, Accuracy, Precision, Recall, dan F1-Score secara otomatis.',
    checklist: [
      'Protokol 20 uji jatuh buatan dan 50 uji ADL normal siap dilaksanakan secara aman.',
      'Rumus perhitungan Confusion Matrix, Sensitivitas, dan FAR sudah dipahami.',
      'Seluruh sitasi 7 klaster (termasuk jurnal SINTA) sudah dipetakan ke Bab 1 s.d. 5 Skripsi.',
    ],
  },
};
