# Smart Wearable IoT untuk Deteksi Jatuh dan Pemantauan Kesehatan Lansia Secara Real-Time

> **Klaster Literatur:** Klaster 5: Integrasi IoT, Firebase, & Notifikasi Caregiver  
> **Penulis:** Hanif Rahman Lubis, Mhd. Basri  
> **Tahun Publikasi:** 2026  
> **Publikasi / Jurnal:** JOURNAL SAINS STUDENT RESEARCH  
> **Tautan Resmi (DOI / URL):** [https://openalex.org/W7221287714](https://openalex.org/W7221287714)  

---

## 📌 Abstrak / Intisari Ilmiah
The elderly population is highly susceptible to fall risks and requires continuous health monitoring. Limitations in manual monitoring can lead to delayed emergency responses, while existing visual monitoring solutions often present privacy concerns. This study aims to design and develop an Internet of Things (IoT)-based smart wearable device to detect fall events and monitor heart rate in real time without utilizing visual cameras, thereby safeguarding user privacy. The system employs an ESP32-C3 microcontroller as the central control unit, integrated with an MPU6050 sensor to measure tri-axial acceleration and orientation changes for fall detection, alongside a MAX30102 sensor for heart rate monitoring in beats per minute (BPM). Processed sensor data is transmitted via Wi-Fi to Firebase Realtime Database for web dashboard display, while emergency fall alerts trigger an on-board buzzer and automated Telegram notifications to caregivers. Experimental results across 60 trial activities demonstrate that the MPU6050 sensor accurately classifies 58 activities with an average fall detection latency of 3.93 seconds. The MAX30102 sensor requires an average stabilization time of 8.8 seconds for reliable BPM readings, and Telegram alerts achieve an average response latency of 4.2 seconds. The developed system effectively enhances elderly safety, maintains user privacy, and accelerates emergency response intervention. Populasi lansia sangat rentan terhadap risiko jatuh dan membutuhkan pemantauan kesehatan secara terus-menerus. Keterbatasan pemantauan manual dapat menyebabkan keterlambatan penanganan darurat, sementara solusi pemantauan visual sering kali menimbulkan masalah privasi. Penelitian ini bertujuan untuk merancang dan mengembangkan perangkat wearable cerdas berbasis Internet of Things (IoT) untuk mendeteksi kejadian jatuh dan memantau detak jantung secara real-time tanpa menggunakan kamera visual sehingga privasi pengguna tetap terjaga. Sistem ini menggunakan mikrokontroler ESP32-C3 sebagai unit kontrol utama yang diintegrasikan dengan sensor MPU6050 untuk mengukur percepatan tri-aksial dan perubahan orientasi guna mendeteksi jatuh, serta sensor MAX30102 untuk pemantauan detak jantung dalam satuan beats per minute (BPM). Data sensor yang diproses dikirimkan melalui Wi-Fi ke Firebase Realtime Database untuk ditampilkan pada dashboard web, sedangkan peringatan darurat saat jatuh akan mengaktifkan buzzer dan notifikasi Telegram otomatis kepada pengasuh. Hasil pengujian pada 60 skenario aktivitas menunjukkan bahwa sensor MPU6050 berhasil mengklasifikasikan 58 aktivitas dengan rata-rata latensi deteksi jatuh sebesar 3,93 detik. Sensor MAX30102 membutuhkan waktu stabilisasi rata-rata 8,8 detik untuk pembacaan BPM yang stabil, dan peringatan Telegram mencapai latensi respons rata-rata 4,2 detik. Sistem yang dikembangkan ini efektif meningkatkan keselamatan lansia, menjaga privasi, dan mempercepat intervensi penanganan darurat.

---

## 📖 Isi Dokumen / Ekstraksi Teks Lengkap
### Halaman 1

KAMPUS AKADEMIK PUBLISING 
 
 
 
 Jurnal Sains Student Research (JSSR) 
 Vol.4, No.6  Desember 2026 
e-ISSN: 3025-9851, p-ISSN : 3025-986X, Hal 503-510 
DOI : https://doi.org/10.61722/jssr.v4i6.12949  
Naskah Masuk:01  Oktober 2026;  Revisi: 02 Oktober 2026;  Diterima: 04 Oktober 2026;   Terbit: 07 
Oktober   2026 
Smart Wearable IoT untuk Deteksi Jatuh dan Pemantauan Kesehatan 
Lansia Secara Real-Time 
 
Hanif Rahman Lubis1*, Mhd. Basri2 
1Fakultas Ilmu Komputer dan Teknologi Informasi, Universitas Muhammadiyah 
Sumatera Utara Jl.Kapten Muchtar Basri No.3, Glugur Darat II, Kec. Medan Timur, 
Medan, Sumatera Utara, Indonesia, 20238 
 2Universitas Muhammadiyah Sumatera Utara Jl.Kapten Muchtar Basri No.3, Glugur 
Darat II, Kec. Medan Timur, Medan, Sumatera Utara, Indonesia, 20238  
*Penulis Korespondensi: hanifrahman581@gmail.com  
 
Abstract. The elderly population is highly susceptible to fall risks and requires continuous health 
monitoring. Limitations in manual monitoring can lead to delayed emergency responses, while existing 
visual monitoring solutions often present privacy concerns. This study aims to design and develop an 
Internet of Things (IoT)-based smart wearable device to detect fall events and monitor heart rate in real 
time without utilizing visual cameras, thereby safeguarding user privacy. The system employs an ESP32-
C3 microcontroller as the central control unit, integrated with an MPU6050 sensor to measure tri-axial 
acceleration and orientation changes for fall detection, alongside a MAX30102 sensor for heart rate 
monitoring in beats per minute (BPM). Processed sensor data is transmitted via Wi-Fi to Firebase Realtime 
Database for web dashboard display, while emergency fall alerts trigger an on-board buzzer and 
automated Telegram notifications to caregivers. Experimental results across 60 trial activities demonstrate 
that the MPU6050 sensor accurately classifies 58 activities with an average fall detection latency of 3.93 
seconds. The MAX30102 sensor requires an average stabilization time of 8.8 seconds for reliable BPM 
readings, and Telegram alerts achieve an average response latency of 4.2 seconds. The developed system 
effectively enhances elderly safety, maintains user privacy, and accelerates emergency response 
intervention. 
Keywords: Elderly Safety; Fall Detection; Health Monitoring; Internet of Things (IoT); Smart Wearable. 
 
Abstrak. Populasi lansia sangat rentan terhadap risiko jatuh dan membutuhkan pemantauan kesehatan 
secara terus-menerus. Keterbatasan pemantauan manual dapat menyebabkan keterlambatan penanganan 
darurat, sementara solusi pemantauan visual sering kali menimbulkan masalah privasi. Penelitian ini 
bertujuan untuk merancang dan mengembangkan perangkat wearable cerdas berbasis Internet of Things 
(IoT) untuk mendeteksi kejadian jatuh dan memantau detak jantung secara real-time tanpa menggunakan 
kamera visual sehingga privasi pengguna tetap terjaga. Sistem ini menggunakan mikrokontroler ESP32-C3 
sebagai unit kontrol utama yang diintegrasikan dengan sensor MPU6050 untuk mengukur percepatan tri-
aksial dan perubahan orientasi guna mendeteksi jatuh, serta sensor MAX30102 untuk pemantauan detak 
jantung dalam satuan beats per minute (BPM). Data sensor yang diproses dikirimkan melalui Wi-Fi ke 
Firebase Realtime Database untuk ditampilkan pada dashboard web, sedangkan peringatan darurat saat 
jatuh akan mengaktifkan buzzer dan notifikasi Telegram otomatis kepada pengasuh. Hasil pengujian pada 
60 skenario aktivitas menunjukkan bahwa sensor MPU6050 berhasil mengklasifikasikan 58 aktivitas 
dengan rata-rata latensi deteksi jatuh sebesar 3,93 detik. Sensor MAX30102 membutuhkan waktu stabilisasi 
rata-rata 8,8 detik untuk pembacaan BPM yang stabil, dan peringatan Telegram mencapai latensi respons 
rata-rata 4,2 detik. Sistem yang dikembangkan ini efektif meningkatkan keselamatan lansia, menjaga 
privasi, dan mempercepat intervensi penanganan darurat. 
Kata kunci: Deteksi Jatuh; Internet of Things (IoT); Keselamatan Lansia; Pemantauan Kesehatan; Smart 
Wearable. 
 
1. LATAR BELAKANG 
Peningkatan populasi lansia secara global memberikan tantangan besar bagi sistem 
pelayanan kesehatan, terutama terkait penurunan fungsi motorik dan kerentanan fisik

---

### Halaman 2

Smart Wearable IoT untuk Deteksi Jatuh dan Pemantauan  
Kesehatan Lansia Secara Real-Time 
 
 
 
 
 
504            JSSR - VOLUME 4, NO. 6, Desember 2027  
 
 
(WHO, 2021). Di antara berbagai risiko kesehatan yang dihadapi lansia, insiden jatuh 
merupakan salah satu ancaman paling kritis yang sering mengakibatkan cedera serius, 
perawatan rumah sakit yang lama, hingga disabilitas permanen jika tidak mendapatkan 
penanganan medis secara cepat (Ariyanti et al., 2025; Pilastri et al., 2025). Oleh karena 
itu, sistem pemantauan fisiologis dan peringatan darurat otomatis yang berkelanjutan 
menjadi sangat penting untuk menjamin keselamatan dan kesejahteraan mereka. 
Pengawasan tradisional sangat bergantung pada pengawasan manual oleh anggota 
keluarga atau petugas kesehatan (Idris et al., 2023). Namun, pengawasan manual 
memiliki keterbatasan fisik dan rentan terhadap kelalaian manusia, terutama pada situasi 
darurat yang terjadi di luar jam perawatan aktif. Di sisi lain, meskipun sistem deteksi jatuh 
berbasis visi menggunakan kamera pengawas menawarkan kemampuan deteksi yang 
tinggi (Bakti et al., 2023), sistem tersebut sangat mengganggu privasi pengguna sehingga 
tidak cocok diterapkan pada ruang pribadi seperti kamar tidur atau kamar mandi.  
Untuk 
mengatasi 
kendala 
privasi 
tersebut, 
berbagai 
penelitian 
mulai 
mengeksplorasi pendekatan sensor non-visual menggunakan teknologi Internet of Things 
(IoT) dan perangkat wearable (Kartikasari et al., 2023; Syahfitri, 2025). Meskipun 
demikian, sebagian besar perangkat yang ada masih memiliki keterbatasan: berfokus 
secara terpisah pada deteksi jatuh saja (Fitriandini & Sari, 2025) atau pemantauan detak 
jantung saja (Bent et al., 2021), belum memiliki sinkronisasi data cloud secara real-time, 
atau memiliki latensi notifikasi yang tinggi. Hal ini menjadi celah penelitian (gap 
analysis) untuk mengembangkan satu perangkat wearable berdaya rendah yang mampu 
melakukan pemantauan multi-parameter sekaligus memberikan peringatan instan. 
Untuk mengisi celah tersebut, penelitian ini bertujuan merancang dan 
mengimplementasikan perangkat smart wearable berbasis IoT yang dikendalikan oleh 
mikrokontroler ESP32-C3. Sistem ini mengintegrasikan sensor gerak 6-sumbu MPU6050 
(akselerometer dan giroskop) untuk deteksi jatuh serta sensor photoplethysmography 
(PPG) MAX30102 untuk pengukuran detak jantung. Data diproses secara lokal dan 
disinkronkan dengan Firebase Realtime Database untuk pemantauan web, serta 
peringatan jatuh dikirim secara otomatis melalui Telegram API. Kebaruan (novelty) dari 
penelitian ini terletak pada penggabungan penginderaan ganda non-invasif dalam satu

---

### Halaman 3

Smart Wearable IoT untuk Deteksi Jatuh dan Pemantauan  
Kesehatan Lansia Secara Real-Time 
 
 
 
 
 
 
505            JSSR - VOLUME 4, NO. 6, Desember 2027  
 
 
 
bentuk perangkat gelang pergelangan tangan yang ringkas, dilengkapi notifikasi multi-
saluran berlatensi rendah tanpa bergantung pada kamera visual. 
2. KAJIAN TEORITIS 
Penerapan Internet of Things (IoT) dalam bidang kesehatan terus berkembang pesat 
untuk mendukung pemantauan kondisi pasien secara jarak jauh (Kartikasari et al., 2023; 
Wu et al., 2023). Pada pemantauan keselamatan lansia, penggunaan sensor pergerakan 
seperti akselerometer dan giroskop menjadi pendekatan utama untuk mengukur 
perubahan percepatan linier dan kecepatan sudut tubuh secara mendadak (Hutagalung & 
Fahruzi, 2025; Rahagung et al., 2023). Pendekatan algoritma berbasis ambang batas 
(thresholding) yang dipadukan dengan Finite State Machine (FSM) terbukti efektif dalam 
membedakan pergerakan aktivitas sehari-hari dengan kejadian jatuh yang sebenarnya. 
Selain deteksi gerak, pemantauan parameter vital seperti detak jantung 
menggunakan teknologi optik photoplethysmography (PPG) memungkinkan pengukuran 
perubahan volume darah arteri secara non-invasif (Bent et al., 2021; Gu et al., 2026). 
Penggabungan kedua parameter ini memberikan gambaran kondisi fisik lansia secara 
lebih komprehensif saat terjadi insiden darurat. Sinkronisasi data menuju database cloud 
secara real-time serta integrasi dengan layanan perpesanan instan (seperti Telegram API) 
menjadi landasan penting untuk mempercepat respons penanganan darurat dari pihak 
pengasuh atau keluarga (Karar & Shehata, 2022; Tseng et al., 2025). 
3. METODE PENELITIAN 
Metode penelitian ini menggunakan alur kerja rekayasa sistem yang terstruktur, 
meliputi analisis kebutuhan, perakitan perangkat keras, pengembangan perangkat lunak, 
perancangan algoritma state machine deteksi jatuh, dan pengujian eksperimental secara 
kuantitatif.  
Arsitektur sistem terdiri dari tiga subsistem utama: 
1. Mikrokontroler ESP32-C3: Berfungsi sebagai unit pemrosesan pusat yang 
dilengkapi dengan konektivitas Wi-Fi terintegrasi.  
2. Sensor MPU6050: Mengukur percepatan linier tri-aksial (𝑎௫, 𝑎௬, 𝑎௭) dan 
kecepatan sudut untuk menangkap benturan fisik mendadak serta perubahan 
orientasi tubuh.

---

### Halaman 4

Smart Wearable IoT untuk Deteksi Jatuh dan Pemantauan  
Kesehatan Lansia Secara Real-Time 
 
 
 
 
 
506            JSSR - VOLUME 4, NO. 6, Desember 2027  
 
 
3. Sensor 
MAX30102: 
Menggunakan 
photoplethysmography 
optik 
untuk 
mendeteksi perubahan volume darah arteri guna menghitung Beats Per Minute 
(BPM).  
4. Buzzer & Modul TP4056: Menyediakan alarm suara lokal saat terjadi jatuh dan 
mengelola pengisian daya baterai Li-ion.  
5. Firebase & Telegram API: Firebase Realtime Database menyimpan telemetri 
berkelanjutan, sedangkan Telegram API mengirimkan peringatan darurat ke 
smartphone pengasuh.  
Mekanisme deteksi jatuh mengevaluasi besaran vektor total dari percepatan linier 
(a_total), yang dihitung berdasarkan akar kuadrat dari penjumlahan kuadrat percepatan 
sumbu x, y, dan z. Algoritma deteksi jatuh beroperasi pada Finite State Machine (FSM) 
yang terdiri dari empat status: IDLE, IMPACT, MOTIONLESS, dan CONFIRMED. 
Pada status IDLE, sistem terus memantau a_total. Jika a_total melebihi ambang batas 
benturan tinggi (TH_IMPACT=29,0〖" m/s" 〗^2), status berpindah ke IMPACT. Jika 
a_total 
kemudian 
turun 
di 
bawah 
ambang 
batas 
pasca-benturan 
(TH_MOTIONLESS=12,0〖" 
m/s" 
〗^2) 
dalam 
rentang 
waktu 
tertentu 
(TO_IMPACT_MAX=600" ms" ), FSM berpindah ke MOTIONLESS. Jika pengguna 
tetap diam selama TO_MOTIONLESS=3000" ms" , status jatuh dikonfirmasi 
(CONFIRMED), yang kemudian memicu buzzer lokal dan pengiriman notifikasi. 
Pengukuran detak jantung dari sensor PPG MAX30102 memanfaatkan puncak 
penyerapan cahaya inframerah. Interval waktu antara puncak denyut jantung berturut-
turut menentukan detak jantung mentah. Untuk mengurangi artefak gerakan, filter 
Exponential Moving Average (EMA) diterapkan untuk menghaluskan fluktuasi BPM. 
4. HASIL DAN PEMBAHASAN  
Bagian ini memuat proses pengumpulan data, rentang waktu dan lokasi penelitian, 
dan hasil analisis data (yang dapat didukung dengan ilustrasi dalam bentuk tabel atau 
gambar, bukan data mentah, serta bukan dalam bentuk printscreen hasil analisis), ulasan 
tentang keterkaitan antara hasil dan konsep dasar, dan atau hasil pengujian hipotesis (jika 
ada), serta kesesuaian atau pertentangan dengan hasil penelitian sebelumnya, beserta 
interpretasinya masing-masing. Bagian ini juga dapat memuat implikasi hasil penelitian, 
baik secara teoritis maupun terapan. Setiap gambar dan tabel yang digunakan harus diacu

---

### Halaman 5

Smart Wearable IoT untuk Deteksi Jatuh dan Pemantauan  
Kesehatan Lansia Secara Real-Time 
 
 
 
 
 
 
507            JSSR - VOLUME 4, NO. 6, Desember 2027  
 
 
 
dan diberikan penjelasan di dalam teks, serta diberikan penomoran dan sumber acuan. 
Berikut ini diberikan contoh tata cara penulisan subjudul, sub-subjudul, sub-sub-subjdul, 
dan seterusnya. 
A. Implementasi Perangkat Keras 
Prototipe wearable berhasil difabrikasi ke dalam bentuk gelang tangan yang 
ringkas. Seluruh modul elektronik ditempatkan di dalam selungkup yang ringan sehingga 
nyaman digunakan selama aktivitas sehari-hari tanpa mengganggu pergerakan lansia. 
B. Kinerja Deteksi Jatuh MPU6050 
Keandalan sistem dievaluasi melalui 60 skenario pengujian fisik pada 6 kategori 
aktivitas yang berbeda (masing-masing 10 kali pengujian). Hasil pengujian dirangkum 
pada Tabel 1. 
Tabel 1. Hasil Klasifikasi Gerak MPU6050 dan Latensi Deteksi Jatuh 
No
Skenario Aktivitas 
Jumlah 
Pengujian 
Identifikasi 
Berhasil 
Rata-rata Latensi 
(detik) 
1 
Berdiri Normal 
10 
10 
- 
2 
Berjalan Normal 
10 
10 
- 
3 
Duduk Normal 
10 
10 
- 
4 
Simulasi Jatuh ke Depan 
10 
9 
3.8 
5 
Simulasi Jatuh ke 
Samping 
10 
10 
4.1 
6 
Simulasi Jatuh ke 
Belakang 
10 
9 
3.9 
Total / Rata-rata 
60 
58 (96.67%) 
3.93 
Dari 60 kali pengujian, algoritma FSM berhasil mengklasifikasikan 58 aktivitas 
dengan tepat, mencapai tingkat akurasi keseluruhan sebesar 96,67% dan rata-rata latensi 
deteksi jatuh sebesar 3,93 detik dari benturan awal hingga konfirmasi status.

---

### Halaman 6

Smart Wearable IoT untuk Deteksi Jatuh dan Pemantauan  
Kesehatan Lansia Secara Real-Time 
 
 
 
 
 
508            JSSR - VOLUME 4, NO. 6, Desember 2027  
 
 
C. Stabilisasi Detak Jantung dan Latensi Peringatan 
Pengujian eksperimental pada sensor PPG MAX30102 menunjukkan waktu 
stabilisasi awal rata-rata selama 8,8 detik sebelum menghasilkan pembacaan BPM yang 
konsisten. Selain itu, pengiriman peringatan darurat melalui Telegram API mencatat rata-
rata latensi respons sebesar 4,2 detik untuk seluruh peristiwa jatuh yang terkonfirmasi. 
D. Pembahasan 
Evaluasi eksperimental mengonfirmasi bahwa penggabungan ambang batas 
percepatan dengan FSM secara signifikan mengurangi alarm palsu (false alarm) yang 
disebabkan oleh aktivitas harian seperti duduk dengan cepat. Dibandingkan dengan solusi 
berbasis visual, arsitektur wearable non-visual ini berhasil menjaga privasi penuh 
pengguna sambil mempertahankan akurasi deteksi yang tinggi dan latensi pengiriman 
peringatan yang singkat (< 5 detik). 
 
5. KESIMPULAN DAN SARAN 
Sistem smart wearable berbasis IoT untuk deteksi jatuh dan pemantauan detak 
jantung lansia telah berhasil dirancang, dibuat, dan dievaluasi. Sistem ini mencapai 
akurasi sebesar 96,67% dari 60 skenario pengujian dengan latensi deteksi jatuh rata-rata 
3,93 detik. Sensor PPG membutuhkan waktu stabilisasi 8,8 detik, dan notifikasi darurat 
Telegram berhasil terkirim dengan rata-rata waktu 4,2 detik. Perangkat ini terbukti 
mampu meningkatkan keselamatan lansia dan menjaga privasi tanpa menggunakan 
kamera.    
Saran untuk pengembangan penelitian selanjutnya adalah menambahkan modul 
GPS untuk pelacakan lokasi di luar ruangan (outdoor) serta mengoptimalkan konsumsi 
daya agar masa pakai baterai menjadi lebih lama. Keterbatasan penelitian ini meliputi 
ukuran sampel pengujian simulasi jatuh yang masih dapat diperluas pada lansia secara 
langsung di lingkungan klinis terawasi. 
UCAPAN TERIMA KASIH 
Penulis menyampaikan terima kasih kepada Program Studi Teknologi Informasi, 
Fakultas Ilmu Komputer dan Teknologi Informasi, Universitas Muhammadiyah Sumatera

---

### Halaman 7

Smart Wearable IoT untuk Deteksi Jatuh dan Pemantauan  
Kesehatan Lansia Secara Real-Time 
 
 
 
 
 
 
509            JSSR - VOLUME 4, NO. 6, Desember 2027  
 
 
 
Utara (UMSU) atas penyediaan fasilitas laboratorium dan dukungan teknis selama 
penelitian ini berlangsung. 
 
DAFTAR REFERENSI 
S. Ariyanti, F. Pramudia, and H. I. Fahreza, "Efektivitas Otago Home Exercise 
Programme Terhadap Risiko Jatuh Pada Lansia Di Daerah Perbatasan Indonesia 
Malaysia," Jurnal NERS (Research & Learning in Nursing Science), vol. 8, pp. 
1209–1215, 2025. 
G. Bakti, P. Putra, P. H. Suputra, N. W. Marti, and K. F. Sugiantari, "Deteksi Jatuh Lansia 
Berbasis Landmark Sendi Pada Model LSTM," JIP (Jurnal Informatika Polinema), 
pp. 261–266, 2023. 
B. Bent, B. A. Goldstein, W. A. Kibbe, and J. P. Dunn, "Investigating sources of 
inaccuracy in wearable optical heart rate sensors," Npj Digital Medicine, vol. 4, no. 
1, pp. 1–9, 2021. 
M. Fernandes, V. Sousa, E. B. Cruz, J. P. Vilas-boas, and A. S. P. Sousa, "Differences in 
Trapezius Muscle H-Reflex between Asymptomatic Subjects and Symptomatic 
Shoulder Pain Subjects," Sensors, vol. 23, no. 5, p. 2541, 2023. 
L. Fitriandini and K. Sari, "Fall Detector pada Lansia berbasis IoT Menggunakan Sensor 
MPU-6050 dan Sensor GPS Neo 6M," Journal of Telecommunication, Electronics, 
and Control Engineering (JTECE), vol. 8, no. 1, pp. 10–22, 2025. 
B. Gu, H. S. Kim, H. Kim, and J. Yoo, "Advancements in Wearable Sensor Technologies 
for Health Monitoring in Terms of Clinical Applications, Rehabilitation, and 
Disease Risk Assessment: Systematic Review," JMIR Mhealth Uhealth, vol. 14, p. 
e76084, 2026. 
Y. K. Hutagalung and I. Fahruzi, "Pengukuran Sinyal dari Sensor Accelerometer dan 
Gyroscope untuk Menentukan Gerak Jatuh pada Lansia Menggunakan Metode 
Ambang Batas (Threshold)," Jurnal ELEMENTER (Elektro Dan Mesin Terapan), 
vol. 11, pp. 77–86, 2025. 
F. Idris, D. Tri, P. Yanto, and M. Yuhendri, "Rancang Bangun Pemantauan Pergerakan 
Orang Lanjut Usia Berbasis Mikrokontroller," JTEIN: Jurnal Teknik Elektro 
Indonesia, vol. 4, no. 2, pp. 601–608, 2023. 
M. E. Karar and H. I. Shehata, "A Survey of IoT-Based Fall Detection for Aiding Elderly 
Care: Sensors, Methods, Challenges and Future Trends," Applied Sciences, vol. 12, 
no. 14, p. 7182, 2022. 
D. P. Kartikasari, T. Syahvina, R. Dini, P. S. Alhirani, and P. Mina, "Pengaruh Internet 
of Things (IoT) Dalam Bidang Kesehatan Terhadap Masyarakat Umum," IJESPG 
Journal, vol. 1, no. 3, pp. 21–26, 2023. 
O. Manchadi et al., "An Internet of Things-based Predictive Maintenance Architecture 
for Intensive Care Unit Ventilators," International Journal of Advanced Computer 
Science and Applications (IJACSA), vol. 15, no. 2, pp. 102–110, 2024. 
Nofita, T. Wahyuningsih, E. Vilianti, and R. Astuti, "Penerapan Latihan Keseimbangan 
Dalam Menurunkan Risiko Jatuh Pada Lansia Di Desa Galanggang 2023," Jurnal 
Keperawatan Budi Luhur, vol. 24, pp. 1–9, 2023.

---

### Halaman 8

Smart Wearable IoT untuk Deteksi Jatuh dan Pemantauan  
Kesehatan Lansia Secara Real-Time 
 
 
 
 
 
510            JSSR - VOLUME 4, NO. 6, Desember 2027  
 
 
F. B. Pilastri, J. F. Lopez, E. N. Boateng, and N. R. Marques, "What to Know About Falls 
in Older Adults? Risk Factors, Predictors, and Therapeutic Interventions," 
Healthcare, vol. 13, no. 2, pp. 1–16, 2025. 
H. Putra, Alimuddin, Suhartini, and W. Rizki, "Pengembangan Sistem Wearable Sensors 
untuk Digital Health Technology," Jurnal Teknologi Kesehatan, vol. 5, no. 2, pp. 
1–10, 2025. 
A. Syahfitri, "Internet of Things (IoT), Sejarah, Teknologi, dan Penerapannya," 
URANUS: Jurnal Ilmiah Teknik Elektro, Sains Dan Informatika, vol. 3, no. 1, pp. 
15–24, 2025. 
A. Syahri and M. Basri, "Perancangan Sistem Keamanan untuk Deteksi Pencurian 
Menggunakan Sensor Magnetic dan RFID Berbasis Internet of Things," Hello 
World Jurnal Ilmu Komputer, vol. 4, no. 1, pp. 45–52, 2025. 
N. Thombare, S. S. Kuber, V. Dhaigude, and P. Wale, "IoT Based Fall Detection and 
Alert System for Elderly People," International Journal of Scientific Research in 
Computer Science, Engineering and Information Technology (IJSRCSEIT), vol. 11, 
no. 1, pp. 47–53, 2025. 
J. Wu, Y. Wang, H. D. Wang, and L. Liao, "IoT-based wearable health monitoring device 
and its validation for potential critical and emergency applications," Frontiers in 
Public Health, vol. 11, p. 1188304, 2023. 
World 
Health 
Organization, 
"Falls," 
2021. 
[Online]. 
Available: 
https://www.who.int/news-room/fact-sheets/detail/falls. 
Y. Yau, "The Technology Acceptance Model and Older Adults' Exercise Intentions — A 
Systematic Literature Review," International Journal of Environmental Research 
and Public Health, vol. 19, no. 12, pp. 1–15, 2022. 
R. Rahagung, F. Gumilang, and A. Rahmawati, "Prototype Alat Pendeteksi Gerakan Jatuh 
Untuk Lansia Menggunakan Sensor Accelerometer MPU6050 Berbasis Internet Of 
Things," Jurnal Pendidikan Vokasional Teknik Elektro (JVOTE), vol. 8, no. 1, pp. 
18–25, 2023.  
I. P. Sari, I. H. Batubara, M. Basri, and A. H. Hazidar, "Implementasi Deteksi dan 
Identifikasi Lokasi Kecelakaan pada Lansia berbasis Internet of Things (IoT)," 
Infotek: Jurnal Informatika Dan Teknologi, vol. 8, no. 1, pp. 102–111, 2025.  
C. Tseng, S. Huang, and L. Kau, "Wearable Fall Detection System with Real-Time 
Localization and Notification Capabilities," IEEE Access, vol. 13, pp. 12450–
12462, 2025. 
X. Wang et al., "Development of Broadband High-Frequency Piezoelectric 
Micromachined Ultrasonic Transducer Array," IEEE Transactions on Ultrasonics, 
Ferroelectrics, and Frequency Control, vol. 68, no. 9, pp. 2950–2958, 2021. 
A. Kartikasari et al., "Wearable Sensors for Digital Health Technology: A Review," 
Sensors, vol. 23, no. 12, pp. 5410–5428, 2023.
