# Systematic Literature Review untuk Identifikasi Penggunaan Sensor dalam Deteksi Rasa Sakit

> **Klaster Literatur:** Klaster 1: Latar Belakang & Use-Case (Gelang SOS untuk Lansia & Disabilitas)  
> **Penulis:** Priskila Veronika Giawa, Devi Yohana Samosir, Jesi Romaito pane, Elvin Josafat Silaban, Abdi Dharma  
> **Tahun Publikasi:** 2025  
> **Publikasi / Jurnal:** Jurnal Algoritma  
> **Tautan Resmi (DOI / URL):** [https://doi.org/10.33364/algoritma/v.22-2.2544](https://doi.org/10.33364/algoritma/v.22-2.2544)  

---

## 📌 Abstrak / Intisari Ilmiah
Deteksi nyeri secara objektif merupakan tantangan penting dalam bidang medis karena nyeri bersifat subjektif dan sulit diukur secara akurat, terutama pada pasien yang tidak mampu berkomunikasi. Penelitian ini bertujuan mengidentifikasi dan menganalisis jenis teknologi sensor dan non-sensor yang digunakan dalam deteksi nyeri serta mengevaluasi tren perkembangan teknologi dalam mendeteksi nyeri. Metodologi yang digunakan adalah studi literatur sistematis (Systematic Literature Review) dengan protokol PRISMA, melibatkan pencarian dan seleksi ketat dari database Scopus, PubMed, dan Google Scholar. Dari total 3.559 artikel yang diidentifikasi, 130 studi dipilih setelah melalui proses penyaringan dan penilaian kualitas. Semua artikel yang lolos kemudian dianalisis dengan mengekstrak informasi yang relevan dengan topik penelitian. Hasil penelitian menunjukkan bahwa sensor fisiologis seperti EDA, ECG, EMG, dan EEG, serta teknologi non-sensor seperti analisis ekspresi wajah dan pendekatan kombinasi antara sensor fisiologis dan non-sensor, merupakan pendekatan utama dalam deteksi nyeri. Tren terkini meliputi penggunaan wearable devices, federated learning, dan explainable AI. Selain itu, teknologi sensor berperan penting dalam layanan kesehatan karena mampu mengintegrasikan berbagai data fisiologis dan perilaku untuk mendukung pengambilan keputusan otomatis, sehingga meningkatkan efisiensi dan akurasi dalam diagnosis nyeri. Penelitian ini merekomendasikan pengembangan sistem deteksi nyeri yang lebih akurat, adaptif, dan etis, serta pengujian di lingkungan klinis nyata untuk meningkatkan validitas dan penerimaan teknologi ini dalam praktik medis.

---

## 📖 Isi Dokumen / Ekstraksi Teks Lengkap
### Halaman 1

https://jurnal.itg.ac.id/index.php/algoritma 
DOI: 10.33364/algoritma/v.22-2.2544 
 
 
 
336 
 
Systematic Literature Review untuk Identifikasi Penggunaan Sensor 
dalam Deteksi Rasa Sakit 
 
Priskila Veronika Giawa1, Devi Yohana Samosir2, Jesi Romaito pane3, Elvin Josafat Silaban4, Abdi 
Dharma5* 
1,2,3,4, Mahasiswa Program Studi Teknik Inforatika, Fakultas Sains dan Teknologi, Universitas Prima 
Indonesia, Indonesia 
5 PUI Deteksi Nyeri, Program Studi Sarjana Teknik Informatika, Fakultas Sains dan Teknologi, Universitas 
Prima Indonesia, Indonesia 
 
*email: abdidharma@unprimdn.ac.id 
 
Info Artikel 
 
ABSTRAK 
Dikirim: 24 Juli 2025 
Diterima: 7 Augustus 2025 
Diterbitkan: 30 November 2025 
 
Deteksi nyeri secara objektif merupakan tantangan penting dalam 
bidang medis karena nyeri bersifat subjektif dan sulit diukur secara 
akurat, terutama pada pasien yang tidak mampu berkomunikasi. 
Penelitian ini bertujuan mengidentifikasi dan menganalisis jenis 
teknologi sensor dan non-sensor yang digunakan dalam deteksi nyeri 
serta mengevaluasi tren perkembangan teknologi dalam mendeteksi 
nyeri. Metodologi yang digunakan adalah studi literatur sistematis 
(Systematic Literature Review) dengan protokol PRISMA, 
melibatkan pencarian dan seleksi ketat dari database Scopus, 
PubMed, dan Google Scholar. Dari total 3.559 artikel yang 
diidentifikasi, 130 studi dipilih setelah melalui proses penyaringan 
dan penilaian kualitas. Semua artikel yang lolos kemudian dianalisis 
dengan mengekstrak informasi yang relevan dengan topik penelitian. 
Hasil penelitian menunjukkan bahwa sensor fisiologis seperti EDA, 
ECG, EMG, dan EEG, serta teknologi non-sensor seperti analisis 
ekspresi wajah dan pendekatan kombinasi antara sensor fisiologis 
dan non-sensor, merupakan pendekatan utama dalam deteksi nyeri. 
Tren terkini meliputi penggunaan wearable devices, federated 
learning, dan explainable AI. Selain itu, teknologi sensor berperan 
penting dalam layanan kesehatan karena mampu mengintegrasikan 
berbagai data fisiologis dan perilaku untuk mendukung pengambilan 
keputusan otomatis, sehingga meningkatkan efisiensi dan akurasi 
dalam 
diagnosis 
nyeri. 
Penelitian 
ini 
merekomendasikan 
pengembangan sistem deteksi nyeri yang lebih akurat, adaptif, dan 
etis, serta pengujian di lingkungan klinis nyata untuk meningkatkan 
validitas dan penerimaan teknologi ini dalam praktik medis. 
Kata kunci: 
Deteksi Nyeri;  
Diagnosa; 
Kecerdasan Buatan; 
Multimodal; 
Penilaian Nyeri. 
 
 
1. 
PENDAHULUAN  
 
Nyeri atau rasa sakit merupakan pengalaman subjektif bersifat kompleks yang dialami secara primer sebagai 
suatu pengalaman psikologis, yang disampaikan oleh pasien saat mengakses layanan kesehatan[1]. Namun, 
deteksi rasa sakit secara obyektif masih menjadi tantangan besar dalam dunia media. Ketergantungan pada 
laporan verbal pasien atau penialian subjektif tenaga medis sering kali menghasilkan interpretasi yang tidak 
akurat, terutama pada kelompok populasi yang memiliki keterbatasan dalam mengkomunikasikan rasa sakit, 
seperti anak-anak, lansia, pasien dengan gangguan neurologis, atau individu dalam kondisi kritis[2]. Hal ini

---

### Halaman 2

Dharma, dkk. 
Jurnal Algoritma | Vol. 22 No. 2 | November 2025 | Hal 336-357 
 
 
337 
 
mendorong kebutuhan akan pendekatan objektif berbasis teknologi, khususnya memanfaatkan sensor untuk 
mendeteksi rasa sakit secara akurat. Terdapat kesenjangan dalam pemahaman dan penanganan rasa sakit di 
tingkat sistem kesehatan, yang sering dipengaruhi oleh sterotip atau bias, seperti persepsi bahwa rasa sakit pada 
lansia adalah bagian alami dari proses penuaan[3]. Ketidakadilan dalam penanganan ini tidak hanya 
menimbulkan penderitaan yang tidak perlu tetapi juga mencerminkan tantangan etis dalam praktik medis. Saat 
ini, metode deteksi rasa sakit masih didominasi oleh pendekatan subjektif, seperti laporan verbal dari pasien 
ata penialian visual oleh tenaga medis. Pendekatan ini sering tidak akurat, terutama pada pasien yang tidak 
mampu berkomunikasi[4]. Oleh karena itu, pengembangan alat yang dapat mendeteksi rasa sakit secara 
obyektif sangat diperlukan untuk mendukung pengambilan keputusan klinis yang lebih baik. Dalam beberapa 
tahun terakhir, penelitian telah mengembangkan metode obyektif berbasis teknologi, termasuk penggunaan 
sinyal EEG[5],[6] melaporkan hasil yang akurat mencapai 97% hingga 99% khususnya pada pengukuran nyeri 
kronis dan stimulus termal. Sementara itu, pengenalan ekspresi wajah[7],[8] menunjukkan performa yang 
menjanjikan, dengan akurasi klasifikasi antara 89% hingga 92%, serta AUC mencapai 98,4% pada beberapa 
dataset uji. Teknologi ini memungkinkan deteksi nyeri secara otomatis dan real-time tanpa kontak langsung, 
dan dinilai efektif terutama pada populasi yang sulit berkomunikasi seperti bayi dan lansia. Pengukuran tanda-
tanda fisiologis[9], serta algoritma berbasis machine learning untuk menganalisis data [10],[11] menunjukkan 
performa yang kompetitif dalam deteksi nyeri, dengan beberapa studi melaporkan F1 score sebesar 81,9% 
untuk model kompleks dan 79,4% untuk model ringan. Teknologi ini menawarkan deteksi otomatis dan real-
time, serta dapat diintegrasikan dalam sistem klinis maupun aplikasi lapangan. Selain itu, pendekatan teknologi 
non-sensor juga muncul, seperti pemrosesan suara, analisis teks narasi pasien, analisis perilaku, dan 
penggunaan gambar medis atau sistem penglihatan komputer yang tidak bergantung pada perangkat sensor 
langsung tetapi tetap berkontribusi pada deteksi nyeri otomatis. Kemajuan pesat dalam kecerdasan buatan dan 
penambangan data juga memperluas cakupan solusi, dengan banyak studi mengeksplorasi kombinasi data 
multimodal dari sumber sensor dan non-sensor sebagai pendekatan integratif. 
 
Meskipun deteksi nyeri berbasis sensor telah berkembang pesat, kajian sistematis yang secara khusus 
memetakan jenis sensor, pola penggunaan, dan tantangan implementasinya masih terbatas. Studi ini bertujuan 
mengisi celah tersebut melalui identifikasi menyeluruh terhadap jenis sensor yang digunakan, pengelompokan 
pendekatan berdasarkan karakteristik teknologi sensorik, serta analisis tren dan hambatan implementasi dari 
sisi teknis dan klinis. Penelitian ini menggunakan pendekatan Systematic Literature Review (SLR) yang 
berfokus pada pemetaan perkembangan terkini dalam teknologi deteksi rasa sakit berbasis sensor. Studi ini 
bertujuan untuk mengidentifikasi berbagai jenis teknologi yang telah digunakan dalam studi sebelumnya untuk 
mendeteksi nyeri secara objektif, baik berbasis sensor maupun non-sensor. Selain itu, studi ini berusaha 
menggambarkan tren perkembangan teknologi-teknologi tersebut dalam beberapa tahun terakhir, serta 
mengungkap berbagai tantangan dan keterbatasan yang dihadapi dalam penerapan teknologi tersebut di bidang 
medis. 
 
Hasil studi ini diharapkan dapat memberikan kontribusi signifikan bagi pengembangan teknologi medis, 
khususnya dalam menciptakan pendekatan yang lebih akurat dan objektif dalam deteksi nyeri. Studi ini juga 
diharapkan dapat menjadi acuan bagi peneliti dan tenaga medis dalam memahami penggunaan teknologi 
deteksi nyeri secara lebih luas, terutama bagi pasien dengan keterbatasan komunikasi. Selain itu, penelitian ini 
berpotensi mendorong pengembangan sistem dukungan keputusan klinis yang mengintegrasikan teknologi 
sensor dan non-sensor, serta kecerdasan buatan, yang dapat meningkatkan kualitas layanan medis secara 
keseluruhan. 
 
2. 
METODE PENELITIAN 
 
Penelitian ini menerapkan metode Systematic Literature Review (SLR) untuk mengeksplorasi topik deteksi 
nyeri menggunakan sensor dan teknologi non-sensor. SLR merupakan metode kualitatif yang sistematis dan 
terstruktur untuk mengidentifikasi, mengevaluasi, dan menginterpretasikan literatur terkini terkait suatu topik 
penelitian guna menjawab pertanyaan penelitian yang telah ditentukan[12]. Proses SLR mencakup tahapan 
identifikasi, penyaringan, penilaian kelayakan, dan inklusi studi, sebagaimana ditunjukkan pada Gambar 1.

---

### Halaman 3

Dharma, dkk. 
Jurnal Algoritma | Vol. 22 No. 2 | November 2025 | Hal 336-357 
 
 
338 
 
SLR memungkinkan peneliti untuk memperoleh gambaran yang komprehensif tentang status terkini dari 
pengetahuan, metode, dan hasil dalam suatu bidang kajian tertentu. 
 
 
Gambar 2 Diagram Alur PRISMA 
 
2.1 Pertanyaan Penelitian 
 
Pada tahap ini penentuan relevansi jurnal terhadap pertanyaan yang sesuai dengan topik penelitian. Berikut 
beberapa pertanyaan peneliti terhadap penelitian ini: 
1. RQ1. Bagaimana jenis-jenis sensor dan teknologi non-sensor yang telah digunakan untuk mendeteksi   
rasa sakit secara obyektif dalam penelitian-penelitian terdahulu? 
2. RQ2. Bagaimana tren perkembangan penggunaan teknologi sensor dan teknologi non-sensor dalam  
deteksi rasa sakit? 
3. RQ3. Apa saja tantangan dan keterbatasan yang dihadapi dalam pemanfaatab teknologi sensor dan  
teknologi non-sensor untuk deteksi rasa sakit? 
 
2.2 Sumber Data 
 
Pencarian sumber data dilakukan berdasarkan pertanyaan penelitian yang telah dirumuskan sebelumnya. 
Proses ini menggunakan beberapa basis data ilmiah terkemuka yang diakui secara luas oleh komunitas 
akademik, yaitu Scopus, PubMed, dan Google Scholar. Pemilihan basis data tersebut didasarkan pada reputasi 
dan kredibilitas nya dalam menyediakan literatur ilmiah yang terindeks, terverifikasi, serta relevan dengan 
bidang kajian. Diharapkan pemanfaatan basis data ini dapat menghasilkan kajian literatur yang valid, 
komprehensif, dan mendukung tujuan penelitian secara metodologis. 
 
2.3 Strategi Pencarian 
 
Peneliti merumuskan empat kata kunci utama untuk menemukan artikel yang relevan, dengan memastikan 
cakupannya mencakup seluruh literatur yang sesuai. Operator Boolean seperti AND dan OR digunakan untuk 
memperluas atau mempersempit hasil pencarian secara efektif. Rincian kata kunci yang digunakan dalam 
proses pencarian literatur secara sistematis dapat dilihat pada Tabel 1. 
 
2.4 Kriteria Inklusi dan Ekslusi 
 
Kriteria inklusi dan eksklusi dalam penelitian ini ditetapkan berdasarkan kerangka PICO (Population, 
Intervention, Comparison, Outcome) yang telah dirumuskan pada Tabel 1. Selain itu, pembatasan juga 
diterapkan pada tahun terbit, desain penelitian, jenis dokumen, dan aksesibilitas artikel, dengan mengecualikan 
artikel berbayar untuk memastikan bahwa seluruh data yang terkumpul dapat diakses dengan mudah oleh 
peneliti. 
 
Tabel 2. Kerangka PICO 
Pico 
Component 
Inclusion Criteria 
Exclusion Criteria 
Population 
Studi yang melibatkan manusia sebagai subjek 
Studi dengan populasi bukan manusia 
Intervention Studi yang membahas Deteksi nyeri menggunakan sensor dan teknologi 
non-sensor 
Studi yang tidak membahas pendeteksi nyeri 
atau tidak memakai teknologi dalam 
pendeteksian nyeri. 
Comparator Tidak berlaku studi tanpa pembanding tetap disertakan. 
- 
Outcome 
 
Studi yang melaporkan hasil terkait kemampuan teknologi (sensor atau 
non-sensor) dalam mendeteksi atau mengidentifikasi nyeri, baik dalam 
Studi yang tidak menyampaikan hasil atau 
luaran terkait proses atau kemampuan deteksi

---

### Halaman 4

Dharma, dkk. 
Jurnal Algoritma | Vol. 22 No. 2 | November 2025 | Hal 336-357 
 
 
339 
 
Pico 
Component 
Inclusion Criteria 
Exclusion Criteria 
bentuk kategori nyeri (ringan, sedang, berat), kehadiran nyeri, atau 
respons fisiologis/emosional yang berkaitan dengan nyeri. 
nyeri, atau hanya membahas teknologi tanpa 
mengaitkannya dengan konteks nyeri. 
 
2.5 Proses Seleksi  
 
Setelah proses pencarian literatur selesai, dilakukan penyaringan awal berdasarkan judul dan abstrak untuk 
mengidentifikasi artikel yang berpotensi relevan. Selanjutnya, evaluasi kelayakan dilakukan secara 
menyeluruh melalui pembacaan teks lengkap guna memastikan bahwa artikel memenuhi kriteria inklusi dan 
eksklusi yang telah ditetapkan. 
 
2.6 Ekstraksi dan Sintesis Data 
 
Ekstraksi data dilakukan terhadap artikel yang telah lolos proses seleksi, dengan mengacu pada rumusan 
pertanyaan penelitian sebagai dasar penentuan informasi yang relevan. Data yang diekstraksi mencakup jenis 
sensor yang digunakan untuk mendeteksi rasa sakit, tren perkembangan teknologi sensor, serta tantangan dan 
keterbatasan yang dihadapi dalam penerapan nya. Selain itu, informasi tambahan seperti desain penelitian, 
karakteristik populasi, metode pengukuran, dan hasil utama juga dikumpulkan. Seluruh data dimasukkan ke 
dalam lembar kerja Excel secara sistematis untuk memudahkan proses sintesis dan analisis tematik, sehingga 
memungkinkan peneliti menyusun ringkasan temuan secara terstruktur dan komprehensif. 
 
2.7 Penilaian Kualitas Studi 
 
Penilaian kualitas artikel dilakukan dengan menggunakan Mixed Methods Appraisal Tool (MMAT), yang 
dirancang untuk mengevaluasi berbagai jenis metode penelitian, baik kualitatif, kuantitatif, maupun 
campuran[13]. Instrumen ini terdiri dari dua pertanyaan penyaring umum dan lima kriteria spesifik untuk setiap 
jenis studi. Evaluasi dilakukan secara sistematis terhadap aspek validitas, ketepatan desain, dan relevansi hasil, 
guna memastikan hanya studi dengan kualitas metodologis memadai yang dianalisis lebih lanjut, sebagaimana 
ditunjukkan pada Gambar 3. 
 
 
Gambar 4 Diagram penilaian kualitas 
 
3. 
HASIL DAN PEMBAHASAN 
 
3.1 Hasil 
 
3.1.1 Hasil pencarian Literature 
 
Penerapan string pencarian pada tiga basis data ilmiah, yaitu Google Scholar, PubMed, dan Scopus, 
menghasilkan total 3.559 artikel. Rincian jumlah artikel yang ditemukan dari masing-masing database adalah 
sebagai berikut: Google Scholar sebanyak 2.000 artikel, Scopus sebanyak 926 artikel, dan PubMed sebanyak 
633 artikel. Distribusi hasil pencarian ini disajikan pada Tabel 3, yang menunjukkan variasi jumlah artikel 
berdasarkan database.

---

### Halaman 5

Dharma, dkk. 
Jurnal Algoritma | Vol. 22 No. 2 | November 2025 | Hal 336-357 
 
 
340 
 
 
Tabel 4 Hasil Pencarian Literature 
 
Temuan ini menunjukkan bahwa strategi pencarian yang diterapkan mampu menjangkau sejumlah besar 
publikasi yang berpotensi relevan, serta menegaskan pentingnya perancangan kata kunci yang sistematis dalam 
tahap awal studi literatur. 
 
3.1.2 Inklusi dan Eksklusi Kriteria 
 
Proses pencarian literatur dilakukan melalui tiga basis data utama, yaitu Google Scholar, Google Scholar 
Scopus, dan PubMed, yang menghasilkan total sebanyak 3.559 artikel. Tahap awal seleksi mencakup proses 
identifikasi dan penghapusan duplikasi, yang mengeliminasi sebanyak 948 artikel. Dari 2.611 artikel yang 
tersisa, dilakukan penyaringan berdasarkan judul dan abstrak untuk menilai kesesuaian awal terhadap topik 
penelitian. Pada tahap ini, sebanyak 2.046 artikel dikeluarkan karena tidak memenuhi kriteria relevansi. 
Selanjutnya, 565 artikel yang lolos ke tahap berikutnya dievaluasi lebih lanjut melalui pembacaan teks lengkap. 
Proses ini mengacu pada kriteria inklusi dan eksklusi yang telah ditentukan sebelumnya berdasarkan kerangka 
PICO (Population, Intervention, Comparison, Outcome) sebagaimana dijelaskan pada Tabel 3 dan 
divisualisasikan secara sistematis dalam Gambar  5. Berdasarkan hasil evaluasi menyeluruh terhadap teks 
lengkap, sebanyak 418 artikel dieliminasi karena berbagai alasan, antara lain artikel bersifat berbayar (n = 182), 
berasal dari sumber yang tidak kredibel seperti bagian dari buku atau artikel dengan jumlah sitasi yang rendah 
(n = 162), serta artikel dengan hasil yang tidak sesuai atau menyimpang dari fokus penelitian (n = 74). Sebanyak 
147 artikel yang memenuhi seluruh kriteria inklusi kemudian menjalani proses penilaian kualitas. Namun, 
sebanyak 17 artikel dikeluarkan karena tidak memenuhi standar kualitas metodologis yang telah ditetapkan. 
Dengan demikian, total sebanyak 130 artikel dinyatakan memenuhi seluruh kriteria dan disertakan dalam tahap 
analisis akhir. 
Search Query 
Google 
Scholar 
PubMed 
Scopus 
("pain detection*" OR "pain assessment*" OR "nociception assessment*" OR "pain 
recognition*") 
500 
599 
200 
("pain detection*" OR "pain assessment*" OR "nociception assessment*" OR "pain 
recognition*") AND ("physiological sensor*" OR "biosensor*" OR "wearable 
sensor*" OR "electrophysiological sensor*" OR "biometric sensor*") 
500 
5 
33 
("pain detection*" OR "pain assessment*" OR "nociception assessment*" OR "pain 
recognition*") AND ("acute pain" OR "short-term pain" OR "sudden pain" OR 
"transient pain" OR "chronic pain" OR "persistent pain" OR "long-term pain" OR 
"ongoing pain") 
500 
199 
200 
("pain detection*" OR "pain assessment*" OR "nociception assessment*" OR "pain 
recognition*") AND ("machine learning*" OR "deep learning*") 
500 
123 
200 
Total 
 
3559

---

### Halaman 6

Dharma, dkk. 
Jurnal Algoritma | Vol. 22 No. 2 | November 2025 | Hal 336-357 
 
 
341 
 
 
Gambar 6 Diagram Alir PRISMA 
 
3.1.3 Quality Assesment 
 
Dari total 147 studi yang telah diekstraksi, dilakukan penilaian kualitas menggunakan Mixed Methods 
Appraisal Tool (MMAT) versi 2018. Berdasarkan hasil penilaian tersebut, sebanyak 17 studi tidak disertakan 
dalam tahap analisis selanjutnya karena tidak memenuhi standar kualitas. Dengan demikian, sebanyak 130 
studi yang dinilai relevan dan sesuai dengan fokus kajian disertakan dalam analisis akhir yang dapat dilihat 
pada Gambar 7. 
 
 
Gambar 8 Diagram Hasil Penilaian Kualitas 
 
3.1.4 Analisis Data  
 
Setelah artikel yang relevan dikumpulkan melalui proses penyaringan dan penilaian kualitas (Quality 
Assessment), analisis data dilakukan berdasarkan hasil ekstraksi informasi dari setiap artikel sebagaimana 
ditampilkan pada Tabel 5. Data yang dikumpulkan kemudian diklasifikasikan dan disusun sesuai dengan fokus 
masing-masing pertanyaan penelitian (Research Questions), sehingga memungkinkan identifikasi temuan 
utama yang berkaitan dengan tujuan studi. 
 
Tabel 6. Hasil Analisis Studi 
Author, Tahun 
Jenis sensor 
Tantangan & Hambatan 
Saranya Devi 
Subramaniam & 
Brindha Dass[14] , 
2021 
Ecg Dan Eda 
Tantangan 
Teknis 
Dan 
Kendala 
Implementasi Klinis Dan Realtime. 
Javier O. Pinzon-
Arenas et al[15], 2023 
Electrodermal Activity (EDA) 
Tantangan Metodologis Dan Kendala 
Implementasi Klinis Dan Realtime. 
Brent D. Winslow et 
al[10], 2022 
Electrocardiography (ECG) 
Kendala 
Implementasi 
Klinis 
Dan 
Realtime.

---

### Halaman 7

Dharma, dkk. 
Jurnal Algoritma | Vol. 22 No. 2 | November 2025 | Hal 336-357 
 
 
342 
 
Author, Tahun 
Jenis sensor 
Tantangan & Hambatan 
Fatemehpouromran et 
al [16], 2021 
Electrodermal Activity (EDA), Electrocardiogram (ECG), 
Dan Electromyogram (EMG) 
Tantangan 
Teknis 
Tantangan 
Metodologis 
Tantangan 
Etis 
Dan 
Privasi 
Kendala 
Implementasi 
Klinis 
Dan 
Realtime 
Busra T. Susam et 
al[17] , 2021 
Electrodermal Activity (EDA) Dari Sensor Affectiva Q 
Tantangan 
Teknis 
Dan 
Tantangan 
Metodologis 
Hugof. Posada 
Quintero et al[18], 
2021 
Electrodermal Activity (EDA) 
Tantangan Metodologis 
Mahmut Emin 
Çelik[19], 2023 
Kamera  
Tantangan Etis Dan Privasi , Kendala 
Implementasi Klinis Dan Realtime 
Álvaro Sabater-Gárriz 
et al [20], 2024 
 
 
Kamera  
Tantangan 
Teknis,Tantangan 
Metodologis,Tantangan Etis Dan Privasi, 
Dan Kendala Implementasi Klinis Dan 
Realtime 
Wei-Horng Jean et al 
[21], 2022 
ECG Dan HRV 
Tantangan Metodologis 
Jihong Fang et al[22], 
2023 
Sensor Pengenalan Ekspresi Wajah 
Tantangan 
Teknis,Tantangan 
Metodologis Dan Kendala Implementasi 
Klinis Dan Realtime 
Philip Gouverneur et 
al [23], 2023 
 
Electrodermal Activity (EDA), Blood Volume Pulse (BVP), 
Inter-Beats-Interval (IBI), Heart Rate (HR), Skin 
Temperature, Electrocardiogram (ECG), Dan 
Electromyogram (EMG) 
Tantangan Etis Dan Privasi 
S. Walter et al[24], 
2020 
 Ecg, Emg, Eda, Dan Ppg  
Tantangan Etis Dan Privasi , Kendala 
Implementasi Klinis Dan Realtime 
Insun Park et al[25], 
2024 
Kamera  
Tantangan 
Metodologis, 
 
Kendala 
Implementasi Klinis Dan Realtime 
Emad Kasaeyan 
Naeini et al[26], 2021 
ECG, TENS  
Tantangan Teknis 
Ahmad Al-Qerem 
[27], 2020 
 Emg, Scl, Dan Ecg 
Tantangan 
Teknis 
Dan 
Tantangan 
Metodologis. 
Raul Fernandez Rojas 
et al [28], 2023 
EDA, PPG, Dan RESP  
Kendala 
Implementasi 
Klinis 
Dan 
Realtime 
Boluwatife E. Faremi 
et al [29], 2023 
 
Sensor Electrodermal Activity (EDA) Dengan Elektroda Agcl 
Dan Sensor Exosomatic Direct Current (DC) 
 
Tantangan Metodologis 
Noemi Gozzi et al[30], 
2024 
 PATHWAY Pain & Sensory Evaluation System Dengan 
Thermode,EEG (Electroencephalography), EDA 
(Electrodermal Activity). 
Tantangan 
Metodologis, 
Kendala 
Implementasi Klinis Dan Realtime 
Mihaela Ghita et 
al[31], 2023 
Bioimpedance Monitor Prototype Anspec-PRO 
Kendala 
Implementasi 
Klinis 
Dan 
Realtime 
Peter Bellmann et al 
[32], 2022 
ECG, EDA, Dan EMG 
Tantangan Metodologis 
Seyed Amir Hossein 
Aqajari et al[33], 2021 
Empatica E4 Wristband Yang Mengukur Galvanic Skin 
Response (GSR) Atau Electrodermal Activity (EDA)  
Tantangan 
Teknis 
Dan 
Tantangan 
Metodologis 
Abdul Rahaman 
Wahab Sait & Ashit 
Kumar Dutta [34], 
2024 
Kamera  
Tantangan Teknis 
Tyler Mari et al[35], 
2023 
EEG (Electroencephalography) 
Tantangan Metodologis  
Noor Tashtoush et al 
[36], 2024 
Sensor Pada Smartwatch Dynasynq VR 
Tantangan Etis Dan Privasi Serta Kendala 
Implementasi Klinis Dan Realtime. 
Fatemeh Pouromran et 
al [37], 2022 
Blood Volume Pulse (BVP), Electrodermal Activity (EDA), 
Electrocardiography (ECG), Dan Electromyography (EMG)  
Kendala 
Implementasi 
Klinis 
Dan 
Realtime. 
Manuel Benavent-
Lledo et al[38], 2023 
Sensor Biomedical Seperti Galvanic Skin Response (GSR), 
Sensor Aktivitas Otak, Aktivitas Kardiovaskular, Dan Sensor 
Ekspresi Wajah Menggunakan Computer Vision 
Tantangan Metodologis 
Jeffery David Hughes 
et al [39], 2023 
Kamera  
 
Kendala 
Implementasi 
Klinis 
Dan 
Realtime 
Kornprom Pikulkaew 
et al [40], 2021 
Kamera 2D 
Tantangan 
Teknis, 
Dan 
Kendala 
Implementasi Klinis Dan Realtime.

---

### Halaman 8

Dharma, dkk. 
Jurnal Algoritma | Vol. 22 No. 2 | November 2025 | Hal 336-357 
 
 
343 
 
Author, Tahun 
Jenis sensor 
Tantangan & Hambatan 
Raul Fernandez Rojas 
et al[41], 2024 
Functional Near-Infrared Spectroscopy (Fnirs) 
Tantangan Metodologis 
M. S. Patil & H. D. 
Patil [42], 2024 
Elektrocardiogram (Ecg) Dan Elektrodermal Activity (Eda) . 
Tantangan Metodologis 
Raihan Islamadina et 
al[43], 2024 
Kamera Thermal 
Tantangan Teknis 
Syed Ashque MD 
Khaled and Norsinnira 
Zainul Azlan [44], 
2024 
ECG (AD8232), EEG, Dan EMG (Bitalino Sensor Kit) . 
Kendala 
Implementasi 
Klinis 
Dan 
Realtime 
Chieh-Liang Wu et 
al[45], 2022 
Kamera Portabel 
Tantangan 
Teknis 
Dan 
Tantangan 
Metodologis 
Wafaa Salem 
Almuhammadi et 
al[46], 2022 
Inertial Measurement Unit (IMU) 
Tantangan 
Teknis 
Dan 
Tantangan 
Metodologis 
Kim Nganphan et 
al[47], 2023 
EDA (Electrodermal Activity), ECG (Electrocardiogram), 
Dan EMG (Electromyogram)  
Tantangan 
Teknis 
Dan 
Tantangan 
Metodologis 
Pooja Prajod et al[48], 
2024 
Functional Near-Infrared Spectroscopy (Fnirs) Headset Dan 
Kamera Video Wajah Logitech Streamcam. 
Tantangan Teknis 
Fei Zhao et al[49], 
2024 
Sensor Detak Jantung, Variabilitas Detak Jantung, 
Elektromiografi Mulut, Dan Kamera Untuk Pengambilan 
Ekspresi Wajah Neonatus 
Tantangan 
Teknis 
Dan 
Tantangan 
Metodologis 
Anay Ghosh et al[50], 
2022 
Sensor Iot Low-Power 
Tantangan 
Teknis 
Dan 
Kendala 
Implementasi Klinis Dan Realtime. 
Raul Fernandez Rojas 
et al[51], 2020 
Functional Near-Infrared Spectroscopy (Fnirs)  
 
Tantangan 
Metodologis, 
Kendala 
Implementasi Klinis Dan Realtime 
Sherly Alphonse et 
al[52], 2024 
Kamera Digital  
Tantangan Teknis 
Neeru Rathee et al[53], 
2021 
 EEG, ECG, SCL, EMG, Serta Fnir Spectroscopy 
Kendala 
Implementasi 
Klinis 
Dan 
Realtime 
Duo Chen et al[54], 
2022 
Electroencephalogram (EEG) 
Tantangan Teknis 
Ruicong Zhi et al[55], 
2021 
EMG, ECG, Konduktansi Kulit (SCL/GSR), Dan Kamera 
Untuk Ekspresi Wajah 
Tantangan 
Teknis 
Dan 
Tantangan 
Metodologis 
Muhammad Umar 
Khan et al[56], 2023 
Photoplethysmography (PPG) 
Tantangan 
Metodologis, 
Kendala 
Implementasi Klinis Dan Realtime 
Philip Gouverneur et 
al[57], 2024 
 
EDA, ECG, EMG, Resp, Dan BVP 
Tantangan 
Teknis,Tantangan 
Metodologis,Kendala 
Implementasi 
Klinis Dan Realtime 
Pu Yin et al [58], 2022 
SCL (Skin Conductance Level), ECG , EMG , EEG , Serta 
Kamera 
Tantangan 
Teknis 
Dan 
Tantangan 
Metodologis. 
Zhenyuan Lu et al[59], 
2023 
EDA, ECG, Dan EMG 
Kendala 
Implementasi 
Klinis 
Dan 
Realtime 
Mahmoud Elsayed et 
al[60], 2020 
EEG 
Tantangan Etis Dan Privasi 
Burak Erdoğan & 
Hasan Oğul[61], 2020 
Sensor Wearable 
Tantangan 
Teknis 
Dan 
Tantangan 
Metodologis 
Kim Nganphan et 
al[62], 2021 
EDA,ECG,EMG,Kamera 
Tantangan 
Teknis 
Dan 
Tantangan 
Metodologis. 
Reyhane Shafiee & 
Mohammad Reza 
Daliri[63], 2024 
Eeg 
Tantangan 
Teknis 
Dan 
Tantangan 
Metodologis. 
Muhammadumarkhan 
et al[64], 2024 
Fnirs (Functional Near-Infrared Spectroscopy) 
Tantangan 
Teknis 
Dan 
Tantangan 
Metodologis 
Raul Fernandez Rojas 
et al[65], 2020 
Functional Near-Infrared Spectroscopy (Fnirs)  
Tantangan 
Teknis 
Dan 
Tantangan 
Metodologis 
Fatemeh Pouromran et 
al[66], 2022 
ECG, EMG, EDA/GSR , RSP, EEG, Dan PPG  
Tantangan Metodologis Dan Tantangan 
Teknis 
Stefanos Gkikas & 
Manolis Tsiknakis[67], 
2024 
Fnirs  
Kendala 
Implementasi 
Klinis 
Dan 
Realtime 
Hsiang Kao et al[68], 
2024 
Kamera 
Tantangan 
Teknis 
Dan 
Kendala 
Implementasi Klinis Dan Realtime 
Rommel Gutierrez et 
al[69], 2024 
Sensor Multimodal Yang Menggabungkan Analisis Gestur 
Wajah Dan Paralanguage Suara 
Tantangan 
Teknis 
Tantangan 
Metodologis

---

### Halaman 9

Dharma, dkk. 
Jurnal Algoritma | Vol. 22 No. 2 | November 2025 | Hal 336-357 
 
 
344 
 
Author, Tahun 
Jenis sensor 
Tantangan & Hambatan 
  
Tantangan Etis Dan PrivasiKendala 
Implementasi Klinis Dan Realtime 
Ashish Semwal & 
Narendra D. 
Londhe[70], 2024 
Kamera Video 
Tantangan Etis Dan Privasi , Kendala 
Implementasi Klinis Dan Realtime  
Youngsun Kong et 
al[71], 2021 
EDA 
Tantangan 
Teknis,Tantangan 
Metodologis Dan Kendala Implementasi 
Klinis Dan Real-Time 
Yingzi Lin et al[72], 
2022 
EMG, EEG, Facial Expressions, Eye Movement, Skin 
Conductance, Blood Volume Pulse, Respiration Rate, Skin 
Temperature, Dan Blood Pressure  
Tantangan Metodologis Dan Kendala 
Implementasi Klinis Dan Realtime. 
Nadeen Shoukry et 
al[73], 2020 
 Elektromyografi (EMG), Elektrodermal Activity (EDA), 
Sensor Suhu, Dan Sensor Respirasi  
Kendala 
Implementasi 
Klinis 
Dan 
Realtime. 
Mehdi Snene et al[74], 
2024 
Electrodermal Activity (EDA), Suhu Kulit, Detak Jantung 
(HR), Blood Volume Pulse (BVP), Interbeat Interval (IBI), 
Dan Akselerometer (ACC) 
Tantangan 
Metodologis, 
Kendala 
Implementasi Klinis Dan Realtime 
Md Sirajus Salekin et 
al[75], 2021 
Kamera Video (Wajah Dan Tubuh), Mikrofon (Suara 
Tangisan), Dan Monitor Fisiologis (Detak Jantung, Tekanan 
Darah, Saturasi Oksigen) 
Tantangan Metodologis Dan Kendala 
Implementasi Klinis Dan Realtime. 
 
Yuan-Chia Chu et 
al[76], 2024 
Sensor Noninvasif  
Tantangan 
Metodologis,Kendala 
Implementasi Klinis Dan Realtime 
H. M. Mohan and S. 
Anitha[77], 2022 
Ecg, Emg, Eda, Serta Audio Dan Video Dari Kamera  
 
Kendala 
Implementasi 
Klinis 
Dan 
Realtime 
Rgnana Praveen et 
al[78], 2020 
Kamera Video 
Tantangan Metodologis 
Prabal Datta Barua et 
al[79], 2022 
Kamera  
Tantangan Metodologis 
Rizka Hadelina et 
al[80], 2023 
Facial Expression Image Sensor 
Tantangan Teknis,Kendala Implementasi 
Klinis Dan Realtime 
Ehsan Othman et 
al[81], 2023 
Video Kamera 
Tantangan Metodologis 
Jinu Rim et al[82], 
2023 
Kamera Termal Inframerah 
Tantangan 
Metodologis 
, 
Kendala 
Implementasi Klinis Dan Realtime 
Hannah Dorris et 
al[83], 2024 
Accelerometer  
Tantangan Metodologis 
Manisha Shantaram 
Patil & Hitendra 
Dhansing Patil et 
al[84], 2024 
Electromyography (EMG), Electrodermal Activity (EDA), 
Dan Electrocardiogram (ECG)  
Tantangan Metodologis Dan Kendala 
Implementasi Klinis Dan Realtime. 
Safaa El Morabit et 
al[85], 2021 
Kamera  
Tantangan Metodologis 
Cao Zhang et al[86], 
2024 
Sistem Docare Yang Merekam Data Vital 
Tantangan 
Teknis, 
Dan 
Tantangan 
Metodologis 
Youngsun Kong et 
al[87], 2023 
Electrodermal Activity (EDA) 
Tantangan 
Metodologis, 
Kendala 
Implementasi Klinis Dan Realtime  
Ruijie Fang et al[88], 
2022 
ECG (Elektrokardiogram), Respiratory Rate, Spo2, Pupil 
Size, Galvanic Skin Response (GSR), Dan Electromyography 
(EMG) 
Tantangan Metodologis 
Mohan H. M. et al[89], 
2022 
Sensor Ekspresi Wajah, Sensor Gerakan Tubuh, Sensor 
Vokalisasi Paralingual, Serta Sensor Fisiologis Seperti 
Elektrodermal, ECG, Dan EEG  
Tantangan 
Teknis 
Dan 
Tantangan 
Metodologis 
Yang Shuang et al[90], 
2024 
Kamera  
Tantangan Teknis,Tantangan Etis Dan 
Privasi,Kendala Implementasi Klinis Dan 
Realtime 
Yubo Li et al [91], 
2023 
Skin Potential (SP) 
Tantangan Metodologis Dan Kendala 
Implementasi Klinis Dan Realtime. 
Rui Cao et al[92], 
2021 
Sensor Photoplethysmography (PPG)  
Tantangan 
Teknis 
Dan 
Tantangan 
Metodologis 
Siavash Rezaei et 
al[93], 2021 
Kamera  
Tantangan 
Teknis 
Tantangan 
Metodologis 
Tantangan 
Etis 
Dan 
Privasi 
Kendala 
Implementasi 
Klinis 
Dan 
Realtime 
Ahmed M. Anter & 
Zhang Li [94], 2020 
Fmri (Functional Magnetic Resonance Imaging) 
Tantangan 
Teknis 
Dan 
Tantangan 
Metodologis.

---

### Halaman 10

Dharma, dkk. 
Jurnal Algoritma | Vol. 22 No. 2 | November 2025 | Hal 336-357 
 
 
345 
 
Author, Tahun 
Jenis sensor 
Tantangan & Hambatan 
Roschelle L. Fritz et 
al[95], 2020 
Sensor Pasif Inframerah (Passive Infrared Motion) Dan 
Sensor Penggunaan Pintu (Door Use)  
Tantangan Metodologis,Tantangan Etis 
Dan Privasi,Kendala Implementasi Klinis 
Dan Realtime 
Anay Ghosh et al[96], 
2023 
Kamera  
Tantangan 
Teknis 
Dan 
Tantangan 
Metodologis 
Denis G. Patterson et 
al[97], 2023 
Wearable Device 
Tantangan 
Teknis 
Dan 
Tantangan 
Metodologis 
Stefanos Gkikas et 
al[98], 2022 
 
Electrocardiography (ECG), Electrodermal Activity (EDA), 
Electromyography (EMG), Dan Electroencephalography 
(EEG)  
Kendala 
Implementasi 
Klinis 
Dan 
Realtime.  
Leah Shafran Topaz et 
al[99], 2022 
Elektroensefalografi (EEG) 
Tantangan 
Metodologis 
, 
Kendala 
Implementasi Klinis Dan Realtime 
Amleset Kelati et 
al[100], 2022 
Electromyography (EMG) Permukaan (Semg) 
Kendala 
Implementasi 
Klinis 
Dan 
Realtime 
Xiaoya Wei et al[101], 
2022 
MRI (Magnetic Resonance Imaging),  Fmri 
Tantangan Metodologis 
Guanghao Sun et 
al[102], 2021 
 
EEG (Electroencephalography) 
Tantangan 
Teknis,Tantangan 
Metodologis,Kendala 
Implementasi 
Klinis Dan Realtime 
Arie Kusumaningrum 
et al[103], 2023 
Sensor Konduktansi Kulit (Skin Conductance) 
Tantangan Teknis 
Li Feng et al[104], 
2023 
EEG (Electroencephalography) 
Tantangan Metodologis,Tantangan Etis 
Dan Privasi 
Juliegendras et 
al[105], 2021 
NIPE® Monitor Dan Pain Monitor Leads, Serta Pengukuran 
Konduktansi Kulit (SCR) 
Tantangan Metodologis 
J. Sofia Bobby et 
al[106], 2023 
Eeg (Electroencephalogram) 
Tantangan 
Teknis 
Dan 
Kendala 
Implementasi Klinis Dan Realtime. 
Martine Neckebroek et 
al[107], 2020 
Sensor Bioimpedansi Frekuensi-Modulasi 
Tantangan Metodologis Dan Kendala 
Implementasi Klinis Dan Realtime 
Janika Krafthöfer et 
al[108], 2024 
Pupillometer  
Tantangan Metodologis 
Marcus Orzabal et 
al[109], 2022 
Covidien Max-Fast Sensor Dan Cerevu Wireless Forehead 
Sensor 
Tantangan 
Metodologis, 
Kendala 
Implementasi Klinis Dan Realtime 
Eva Favre, RN, PhD et 
al[110], 2024 
Pupillometer/Videopupillometer 
Tantangan 
Teknis, 
Tantangan 
Metodologis, 
Tantangan 
Etis 
Dan 
Privasi, 
Kendala 
Implementasi 
Klinis 
Dan 
Realtime 
Jose Uberos, MD, PhD 
et al[111], 2022 
ECG Dan Sensor Konduktansi Kulit (Painmonitor) 
Tantangan Metodologis Dan Tantangan 
Etis Dan Privasi. 
Mustafa Atee et 
al[112], 2022 
Kamera  
Tantangan Metodologis,Tantangan Etis 
Dan Privasi,Kendala Implementasi Klinis 
Dan Realtime 
Céline Gélinas et 
al[113], 2021 
Probe Non-Invasif 
Tantangan 
Teknis, 
Dan 
Tantangan 
Metodologis 
Mihaela Ghita et 
al[114], 2021 
Elektroda  
Tantangan 
Metodologis 
Kendala 
Implementasi Klinis Dan Realtime 
Bao-Kai Wang et 
al[115], 2020 
Elektroda Disposable 
Tantangan Metodologis 
Li Wang et al[116], 
2020 
Electroencephalogram (EEG)  
Tantangan Metodologis 
Aleksandra Badura et 
al[117], 2024 
EDA (Electrodermal Activity) Dan BVP (Blood Volume 
Pulse) Serta Hand Dynamometer 
Tantangan Metodologis 
Colince Meli Segning 
et al[118], 2024 
EEG Dan Thermode  
Tantangan 
Metodologis,Kendala 
Implementasi Klinis Dan Realtime 
Florin Allmendinger et 
al[119], 2024 
 EEG Dan EOG 
 
Tantangan Metodologis 
Dogukan Baran 
Gungormus et al[120], 
2024 
Empatica E4 Wristband Serta Hand-Held Dial Pressure 
Algometer 
Kendala 
Implementasi 
Klinis 
Dan 
Realtime 
 
Olof Skogberg et 
al[121], 2023 
Computerized Cuff Pressure Algometry (CPA) Dengan 
Double-Chamber Tourniquet Cuff, Kompresor Udara, Dan 
Visual Analogue Scale Elektronik 
Tantangan Metodologis 
Fei Wang et al[122], 
2023 
Painvision PS-2100 (Nipro Corporation, Osaka, Japan)  
 
Tantangan Metodologis

---

### Halaman 11

Dharma, dkk. 
Jurnal Algoritma | Vol. 22 No. 2 | November 2025 | Hal 336-357 
 
 
346 
 
Author, Tahun 
Jenis sensor 
Tantangan & Hambatan 
Raquel Lucas et 
al[123], 2024 
Cuff Pressure Algometry 
Tantangan Metodologis 
Andrew J. Furman et 
al[124], 2020 
Thermal Contact Heat Stimulator (Medoc Pathway CHEPS 
Peltier Device)  
Tantangan Metodologis 
Lee B. Kislera et 
al[125], 2020 
EEG Dan MEG  
Tantangan Teknis 
Mihaela Ghita et 
al[126], 2020 
Sensor Bioimpedani Kulit 
Tantangan 
Metodologis,Kendala 
Implementasi Klinis Dan Realtime 
Veronica Dudarev et 
al[127], 2022 
Wearable Sensor Berbasis Detak Jantung 
Tantangan 
Teknis, 
Tantangan 
Metodologis 
Michael Morimoto et 
al[128], 2024 
Photoplethysmography (PPG) 
Tantangan Metodologis, 
Xin Gao et al[129], 
2021 
Model Artificial Neural Network (ANN) 
Tantangan 
Teknis 
Dan 
Kendala 
Implementasi Klinis Dan Realtime. 
Fernando Villalba-
Meneses et al[130], 
2024 
Inertial Measurement Units (IMU)  
Tantangan Metodologis, Tantangan Etis 
Dan Privasi 
Md-Billal Hossain et 
al[131], 2021 
EDA 
Tantangan 
Teknis,Tantangan 
Metodologis,Kendala 
Implementasi 
Klinis Dan Realtime 
Mamoun T. Mardini et 
al[132], 2021 
Sensor Pada Smartwatch 
Tantangan Metodologis 
Awais, M. et al[133], 
2020 
Sensor Citra Berbasis Intensitas Dan Pose Estimation 
 
Tantangan Teknis 
Da’ad Albahdal et 
al[134], 2024 
ECG (Elektrokardiogram), EDA/GSR (Aktivitas 
Elektrodermal/Konduktansi Kulit), EMG (Elektromiografi), 
Respirasi, Dan Sensor Detak Jantung  
Tantangan 
Metodologis, 
Kendala 
Implementasi Klinis Dan Realtime 
Yassine Bouteraa et 
al[135], 2021 
EMG Sensor, Current Sensor, Dan Position Encoder . 
Tantangan 
Teknis 
Dan 
Kendala 
Implementasi Klinis Dan Realtime. 
Mahmpud A. M. 
Alshewimy et al [136], 
2021 
Kamera  
 
 
Kendala 
Implementasi 
Klinis 
Dan 
Realtime 
Mingxin Yua et 
al[137], 2020 
Electroencephalogram (EEG) 
 
Tantangan Metodologis 
Mathieu Bellal et 
al[138], 2024 
Analisis Wajah Otomatis Berbasis AI  
Tantangan 
Teknis, 
Tantangan 
Metodologis , Kendala Implementasi 
Klinis Dan Realtime 
Takahiro Yamada et 
al[139], 2024 
Surface Electromyography (Semg) 
Tantangan Metodologis 
Antonio Scarano et 
al[140], 2020 
Kamera Inframerah Digital 14-Bit (FLIR SC660 QWIP)  
Tantangan 
Teknis, 
Dan 
Kendala 
Implementasi Klinis Dan Realtime. 
Daniel Teichmann et 
al[141], 2020 
ECG, PPG, Dan Sensor Usaha Pernapasan 
Tantangan 
Teknis 
Dan 
Tantangan 
Metodologis 
Jian-Ming Yue et 
al[142], 2024 
Kamera 
Tantangan 
Teknis, 
Tantangan 
Metodologis, 
Tantangan 
Etis 
Dan 
Privasi, 
Kendala 
Implementasi 
Klinis 
Dan 
Realtime 
 
3.2 Pembahasan 
 
3.2.1 Jenis Teknologi Sensor dan teknologi Non-Sensor dalam Deteksi Rasa Sakit (RQ1) 
 
Berdasarkan hasil ekstraksi data dari berbagai studi, terdapat dua pendekatan utama yang digunakan dalam 
teknologi deteksi rasa sakit, yaitu teknologi berbasis sensor dan teknologi non-sensor. Teknologi sensor 
melibatkan penggunaan perangkat yang secara langsung mengukur parameter fisiologis tubuh untuk 
mendeteksi respons terhadap nyeri. Sensor-sensor yang paling banyak digunakan dalam studi meliputi 
electrodermal activity (EDA) untuk mengukur konduktansi kulit[14], [15], [16], [17], [18], [23], [24], [28], 
[47], [57], [59], [62], [66], [71], [73], [84], [87], [117], [131], [134], electrocardiogram (ECG)untuk merekam 
aktivitas jantung[14], [10], [21], [23], [26], [27], [32], [37], [44], [47], [53], [55], [57], [58], [59], [62], [66], 
[84], [111], electromyogram (EMG) untuk mencatat aktivitas otot[23]-[24], [27], [32], [37], [44], [47], [53],

---

### Halaman 12

Dharma, dkk. 
Jurnal Algoritma | Vol. 22 No. 2 | November 2025 | Hal 336-357 
 
 
347 
 
[72], [100], serta electroencephalography (EEG) untuk mengamati aktivitas listrik otak[35], [44], [53],[54], 
[58], [60], [63], [66], [102], [104], [116], [137]. Selain itu, teknologi seperti functional near-infrared 
spectroscopy (fNIRS) [41], 62], [51], [65], [67] dan functional magnetic resonance imaging (fMRI)[94] juga 
digunakan untuk memantau perubahan hemodinamik otak yang berkaitan dengan rasa sakit. Beberapa studi 
memanfaatkan sensor wearable seperti smartwatch atau gelang pintar (misalnya Empatica E4) yang dilengkapi 
dengan sensor detak jantung, tekanan darah, dan akselerometer untuk pemantauan nyeri secara kontinu. 
Visualisasi distribusi penggunaan masing-masing pendekatan teknologi dalam studi deteksi nyeri ditunjukkan 
pada Gambar 9. 
 
 
Gambar 10 Diagram Teknologi Dalam Deteksi Nyeri 
 
Di sisi lain, teknologi non-sensor merujuk pada pendekatan yang tidak bergantung pada perangkat fisiologis, 
melainkan pada analisis data visual, audio, atau tekstual. Contoh teknologi ini adalah pemanfaatan pengolahan 
citra wajah digital, video ekspresi wajah, dan komputer vision untuk menganalisis ekspresi pasien sebagai 
indikator nyeri [19], [20], [25], [32], [39], [40], [45]. Selain itu, banyak studi yang menerapkan model deep 
learning dan machine learning untuk mendeteksi dan mengklasifikasikan tingkat nyeri berdasarkan ekspresi 
wajah, suara pasien, atau kombinasi multimodal lainnya. Pendekatan non-sensor juga kerap digunakan dalam 
kondisi klinis tertentu yang memerlukan metode non-invasif, terutama pada populasi rentan seperti bayi dan 
pasien kritis. Beberapa studi bahkan menggabungkan kedua pendekatan tersebut, menciptakan sistem 
multimodal yang mengintegrasikan data dari sensor fisiologis dan citra visual untuk meningkatkan akurasi 
deteksi nyeri. Dengan demikian, baik teknologi sensor maupun teknologi non-sensor memiliki peran penting 
dalam upaya objektivisasi penilaian rasa sakit, dengan keunggulan masing-masing sesuai konteks dan 
kebutuhan klinis. 
 
3.2.2 Tren Perkembangan Teknologi Deteksi Rasa Sakit (RQ2) 
 
Berdasarkan data publikasi dari tahun 2020 hingga 2024, terlihat adanya tren pertumbuhan yang signifikan dan 
konsisten dalam bidang teknologi deteksi rasa sakit. Tahun 2020 mencatat sebanyak 20 publikasi yang 
menandai awal mula eksplorasi aktif terhadap topik ini, sekaligus menjadi fase transisi dari riset yang bersifat 
konseptual menuju pengembangan sistem nyata untuk pendeteksian nyeri secara otomatis. Tren tersebut terus 
berlanjut pada tahun-tahun berikutnya, dengan masing-masing 24 publikasi pada 2021, 23 pada 2022, dan 25 
pada 2023. Peningkatan paling mencolok terjadi pada tahun 2024, di mana jumlah publikasi mencapai 38, 
menandakan puncak perhatian terhadap topik ini dalam kurun waktu lima tahun terakhir. Pertumbuhan ini 
mencerminkan meningkatnya minat dari komunitas ilmiah dan praktisi, baik dalam konteks akademik maupun 
implementasi klinis. Kenaikan tajam pada tahun 2024 kemungkinan besar didorong oleh kemajuan dalam 
teknologi pemrosesan sinyal, semakin terbukanya akses terhadap dataset publik, serta kebutuhan yang kian 
mendesak terhadap sistem pemantauan nyeri secara real-time, terutama bagi pasien yang tidak mampu 
mengekspresikan rasa sakit secara verbal. Detail dari data jumlah publikasi tiap tahun dapat dilihat pada Tabel 
7 di bagian analisis data sementara tren visual pertumbuhannya dapat dilihat pada Gambar 11.

---

### Halaman 13

Dharma, dkk. 
Jurnal Algoritma | Vol. 22 No. 2 | November 2025 | Hal 336-357 
 
 
348 
 
 
Gambar 12 Diagram Perkembangan Teknologi Deteksi Nyeri 
 
Tren teknologi deteksi nyeri menunjukkan pergeseran dari pendekatan sederhana berbasis single-sensor dan 
rekayasa fitur manual menuju metode multimodal dan berbasis deep learning. Pada fase awal, penelitian 
banyak menggunakan sensor tunggal seperti EDA atau EEG, namun kini semakin banyak menggabungkan 
sinyal fisiologis (EDA, EEG, ECG, HRV) dengan data visual seperti ekspresi wajah. Pendekatan deep learning 
mulai menggantikan algoritma tradisional seperti SVM dan random forest karena kemampuannya 
mengekstraksi pola kompleks dari data mentah. Selain itu, integrasi dengan perangkat wearable dan sistem 
kamera non-kontak semakin berkembang untuk memenuhi kebutuhan solusi deteksi nyeri yang non-invasif 
dan aplikatif secara klinis. 
 
Inovasi-inovasi terkini dalam bidang ini juga menunjukkan perhatian terhadap penerapan teknologi secara 
praktis dan etis. Salah satu arah pengembangan yang menonjol adalah penggunaan perangkat komputasi tepi 
(edge computing) seperti Raspberry Pi dan Jetson Nano, yang memungkinkan sistem deteksi nyeri bekerja 
secara lokal tanpa ketergantungan pada pengolahan berbasis server. Di sisi lain, perhatian terhadap 
perlindungan privasi dan keamanan data semakin meningkat, sebagaimana ditunjukkan oleh penerapan 
pendekatan federated learning yang memungkinkan pelatihan model secara terdistribusi tanpa memindahkan 
data mentah pasien. Sejumlah penelitian juga mulai memanfaatkan teknik explainable artificial intelligence 
(XAI), seperti Grad-CAM dan SHAP, guna meningkatkan transparansi, akuntabilitas, dan kepercayaan 
terhadap hasil deteksi yang dihasilkan oleh model. 
 
Dengan perkembangan tersebut, arah penelitian dalam bidang ini telah bergeser dari pertanyaan mendasar 
seperti “apakah nyeri dapat dideteksi secara otomatis?” menjadi fokus yang lebih aplikatif dan etis, yaitu 
“bagaimana mendeteksi nyeri secara akurat, instan, dan etis di lingkungan nyata.” Pergeseran ini menandai 
transformasi dari eksperimen laboratorium menuju pengembangan solusi teknologi yang siap 
diimplementasikan secara luas dalam praktik pelayanan kesehatan. 
 
3.2.3 Tantangan dan Keterbatasan Teknologi Deteksi Rasa Sakit (RQ3) 
 
Teknologi deteksi rasa sakit, meskipun menunjukkan kemajuan signifikan dalam beberapa tahun terakhir, 
masih menghadapi berbagai tantangan dan keterbatasan yang kompleks. Dari sisi teknis, tantangan utama 
terletak pada kualitas sinyal yang sering kali terganggu oleh noise, serta ketidakstabilan data fisiologis yang 
diperoleh dari sensor. Kondisi ini berdampak langsung terhadap akurasi sistem dalam mendeteksi rasa sakit 
secara real-time. Selain itu, banyak sensor yang digunakan masih memiliki keterbatasan dalam hal sensitivitas 
dan daya tahan terhadap gangguan lingkungan, sehingga menghambat konsistensi hasil pengukuran. Dari aspek 
metodologis, permasalahan utama muncul akibat sifat subjektif dari rasa sakit itu sendiri. Nyeri merupakan 
pengalaman personal yang dipengaruhi oleh berbagai faktor biologis, psikologis, dan sosial, sehingga sulit 
diukur secara objektif menggunakan pendekatan berbasis teknologi. Kurangnya standar validasi yang universal 
dan adanya variasi respons fisiologis antarpasien juga memperumit proses pengembangan model deteksi yang 
dapat diaplikasikan secara luas di berbagai populasi. 
 
Di samping itu, aspek etis dan privasi menjadi perhatian penting dalam implementasi teknologi ini. Data 
fisiologis yang dikumpulkan, seperti detak jantung, aktivitas otot, dan sinyal saraf, termasuk dalam kategori 
data sensitif yang menuntut perlindungan tinggi terhadap privasi individu. Dalam konteks penelitian dan 
penerapan klinis, terutama pada kelompok rentan seperti anak-anak atau pasien dengan keterbatasan

---

### Halaman 14

Dharma, dkk. 
Jurnal Algoritma | Vol. 22 No. 2 | November 2025 | Hal 336-357 
 
 
349 
 
komunikasi, tantangan etis terkait persetujuan dan perlindungan hak pasien menjadi semakin kompleks. 
Kekhawatiran terhadap potensi penyalahgunaan data serta kurangnya kebijakan yang mengaturnya menambah 
lapisan hambatan dalam pengembangan teknologi deteksi nyeri. Kendala lainnya juga ditemukan dalam aspek 
implementasi di lingkungan klinis atau dalam pemantauan secara real-time. Integrasi sistem deteksi ke dalam 
praktik medis yang sudah mapan sering kali menemui resistensi, baik dari sisi teknis maupun operasional. 
Fluktuasi sinyal secara langsung dalam pemantauan real-time dapat menyebabkan interpretasi yang tidak 
konsisten, sementara kesiapan infrastruktur rumah sakit dan tenaga medis dalam menggunakan teknologi ini 
juga masih terbatas. Oleh karena itu, meskipun teknologi deteksi nyeri memiliki potensi besar dalam 
meningkatkan kualitas pelayanan kesehatan, berbagai tantangan tersebut perlu diselesaikan melalui pendekatan 
multidisipliner dan kolaboratif agar teknologi ini dapat diadopsi secara efektif dan etis dalam praktik klinis. 
Detail tantangan dari masing-masing studi dapat dilihat pada Tabel 8 di bagian analisis data. 
 
4. 
KESIMPULAN  
 
Berdasarkan hasil tinjauan sistematis terhadap 130 studi, berbagai jenis sensor seperti electrodermal activity 
(EDA), electroencephalography (EEG), electromyography (EMG), electrocardiography (ECG), serta kamera 
wajah merupakan perangkat yang paling umum digunakan untuk mendeteksi nyeri secara objektif. Teknologi 
non-sensor seperti analisis ekspresi wajah dan suara juga terbukti efektif, terutama pada pasien dengan 
keterbatasan komunikasi. Tren penelitian sejak 2020 hingga 2024 menunjukkan peningkatan signifikan dalam 
penggunaan pendekatan multimodal, metode deep learning, pengembangan perangkat wearable, serta 
teknologi yang lebih adaptif dan non-invasif. Namun, deteksi nyeri masih menghadapi tantangan teknis, 
metodologis, dan etis, termasuk gangguan sinyal, subjektivitas pengalaman nyeri, serta perlindungan privasi 
dan implementasi klinis. 
 
Sehubungan dengan itu, terdapat beberapa saran untuk pengembangan sistem deteksi nyeri ke depan. Inovasi 
teknologi adaptif diperlukan guna mengatasi variabilitas sinyal fisiologis antarindividu. Standar protokol 
evaluasi internasional juga penting agar sistem memiliki validitas dan reliabilitas tinggi. Aspek etika dan 
privasi data perlu diutamakan melalui pendekatan seperti federated learning dan explainable AI. Kolaborasi 
multidisipliner antara ilmuwan data, tenaga medis, dan ahli etika sangat dibutuhkan agar sistem yang 
dikembangkan relevan secara klinis. Selain itu, penelitian empiris di lingkungan nyata perlu dilakukan, 
khususnya pada pasien dengan keterbatasan komunikasi. Penelitian mendatang juga dapat mengeksplorasi 
kombinasi baru antara sensor fisiologis dan teknologi non-sensor seperti pemrosesan bahasa alami dan 
pengenalan gestur untuk meningkatkan akurasi deteksi nyeri dalam berbagai kondisi. 
 
REFERENSI  
 
[1] M. T. Ellexson, Pain And Disability: Clinical, Behavioral, And Public Policy Perspectives, Vol. 43, No. 
1. 1989. Doi: 10.5014/Ajot.43.1.58a. 
[2] B. Rybojad, D. Sieniawski, P. Rybojad, M. Samardakiewicz, And A. Aftyka, “Pain Evaluation In The 
Paediatric Emergency Department: Differences In Ratings By Patients, Parents And Nurses,” Int. J. 
Environ. Res. Public Health, Vol. 19, No. 4, 2022, Doi: 10.3390/Ijerph19042489. 
[3] B. R. Levy, R. H. Pietrzak, And M. D. Slade, “Societal Impact On Older Persons’ Chronic Pain: Roles 
Of Age Stereotypes, Age Attribution, And Age Discrimination,” Soc. Sci. Med., Vol. 323, Pp. 1–14, 2023, 
Doi: 10.1016/J.Socscimed.2023.115772. 
[4] N. Felton, J. S. Lewis, S. J. Cockburn, M. Hodgson, And S. Dawson, “Pain Assessment For Individuals 
With Advanced Dementia In Care Homes: A Systematic Review,” Geriatr., Vol. 6, No. 4, Pp. 1–22, 2021, 
Doi: 10.3390/Geriatrics6040101. 
[5] J. Miller Et Al., “Development Of Machine Learning Algorithms Using Eeg Data To Detect The Presence 
Of 
Chronic 
Pain,” 
Medrxiv, 
P. 
2024.09.18.24313903, 
2024, 
[Online]. 
Available: 
Https://Www.Medrxiv.Org/Content/10.1101/2024.09.18.24313903v1%0ahttps://Www.Medrxiv.Org/Co
ntent/10.1101/2024.09.18.24313903v1.Abstract 
[6] Y. Han, E. Valentini, And S. Halder, “Validation Of Cross-Individual Pain Assessment With Individual 
Recognition Model From Electroencephalogram,” Proc. Annu. Int. Conf. Ieee Eng. Med. Biol. Soc. Embs,

---

### Halaman 15

Dharma, dkk. 
Jurnal Algoritma | Vol. 22 No. 2 | November 2025 | Hal 336-357 
 
 
350 
 
Pp. 1–4, 2023, Doi: 10.1109/Embc40787.2023.10340607. 
[7] D. A. Anwar, “Real Time Pain Detection Using Facial Action Units In Telehealth System,” Zanco J. Pure 
Appl. Sci., Vol. 33, No. 5, Pp. 31–42, 2021, Doi: 10.21271/Zjpas.33.5.4. 
[8] G. Bargshady, X. Zhou, R. C. Deo, J. Soar, F. Whittaker, And H. Wang, “Enhanced Deep Learning 
Algorithm Development To Detect Pain Intensity From Facial Expression Images,” Expert Syst. Appl., 
Vol. 149, P. 113305, 2020, Doi: 10.1016/J.Eswa.2020.113305. 
[9] H. Aloulou, B. Abdulrazak, A. De Marassé-Enouf, And G. Goos, Participative Urban Health And 
Healthy Aging In The Age Of Ai, Vol. 13287. 2022. Doi: 10.1007/978-3-031-09593-1. 
[10] B. D. Winslow, R. Kwasinski, K. Whirlow, E. Mills, J. Hullfish, And M. Carroll, “Automatic Detection 
Of Pain Using Machine Learning,” Front. Pain Res., Vol. 3, No. November, Pp. 1–10, 2022, Doi: 
10.3389/Fpain.2022.1044518. 
[11] T. K. Alkan And N. Taşdemir, “Testing Machine Learning-Based Pain Assessment For Postoperative 
Geriatric Patients,” Cin - Comput. Informatics Nurs., Vol. 00, No. 00, Pp. 1–6, 2025, Doi: 
10.1097/Cin.0000000000001248. 
[12] G. Lame, “Systematic Literature Reviews: An Introduction,” Proc. Des. Soc. Int. Conf. Eng. Des., Vol. 
2019-Augus, No. July, Pp. 1633–1642, 2019, Doi: 10.1017/Dsi.2019.169. 
[13] Q. N. Hong Et Al., “Mixed Methods Appraisal Tool (Mmat) Version 2018. Appraisal Tool (Mmat), 
Version 2018. Registration Of Copyright (#1148552), Canadian Intellectual Property Office, Industry 
Canada,” User Guid., Vol. User Guid., Pp. 1–10, 2018. 
[14] S. D. Subramaniam And B. Dass, “Automated Nociceptive Pain Assessment Using Physiological Signals 
And A Hybrid Deep Learning Network,” Ieee Sens. J., Vol. 21, No. 3, Pp. 3335–3343, 2021, Doi: 
10.1109/Jsen.2020.3023656. 
[15] J. O. Pinzon-Arenas, Y. Kong, K. H. Chon, And H. F. Posada-Quintero, “Design And Evaluation Of Deep 
Learning Models For Continuous Acute Pain Detection Based On Phasic Electrodermal Activity,” Ieee 
J. Biomed. Heal. Informatics, Vol. 27, No. 9, Pp. 4250–4260, 2023, Doi: 10.1109/Jbhi.2023.3291955. 
[16] F. Pouromran, S. Radhakrishnan, And S. Kamarthi, “Exploration Of Physiological Sensors, Features, And 
Machine Learning Models For Pain Intensity Estimation,” Plos One, Vol. 16, No. 7 July, Pp. 1–17, 2021, 
Doi: 10.1371/Journal.Pone.0254108. 
[17] B. Susam Et Al., “Automated Pain Assessment In Children Using Electrodermal Activity And Video Data 
Fusion Via Machine Learning,” Ieee Trans. Biomed. Eng., Vol. 69, No. 1, Pp. 422–431, 2022, Doi: 
10.1109/Tbme.2021.3096137. 
[18] H. F. Posada-Quintero, Y. Kong, And K. H. Chon, “Objective Pain Stimulation Intensity And Pain 
Sensation Assessment Using Machine Learning Classification And Regression Based On Electrodermal 
Activity,” Am. J. Physiol. - Regul. Integr. Comp. Physiol., Vol. 321, No. 2, Pp. R186–R196, 2021, Doi: 
10.1152/Ajpregu.00094.2021. 
[19] M. E. Çelik, “A Novel Deep Learning Model For Pain Intensity Evaluation,” Int. J. Comput. Exp. Sci. 
Eng., Vol. 9, No. 4, Pp. 325–330, 2023, Doi: 10.22399/Ijcesen.1372628. 
[20] Á. Sabater-Gárriz, F. X. Gaya-Morey, J. M. Buades-Rubio, C. Manresa-Yee, P. Montoya, And I. 
Riquelme, “Automated Facial Recognition System Using Deep Learning For Pain Assessment In Adults 
With Cerebral Palsy,” Digit. Heal., Vol. 10, 2024, Doi: 10.1177/20552076241259664. 
[21] W. H. Jean, P. Sutikno, S. Z. Fan, M. F. Abbod, And J. S. Shieh, “Comparison Of Deep Learning 
Algorithms In Predicting Expert Assessments Of Pain Scores During Surgical Operations Using 
Analgesia Nociception Index,” Sensors, Vol. 22, No. 15, 2022, Doi: 10.3390/S22155496. 
[22] J. Fang, W. Wu, J. Liu, And S. Zhang, “Deep Learning-Guided Postoperative Pain Assessment In 
Children,” Pain, Vol. 164, No. 9, Pp. 2029–2035, 2023, Doi: 10.1097/J.Pain.0000000000002900. 
[23] P. Gouverneur Et Al., “Automated Pain Recognition,” Pp. 1–30, 2023. 
[24] S. Walter, A. Al-Hamadi, S. Gruss, S. Frisch, H. C. Traue, And P. Werner, “Multimodal Recognition Of 
Pain Intensity And Pain Modality With Machine Learning,” Schmerz, Vol. 34, No. 5, Pp. 400–409, 2020, 
Doi: 10.1007/S00482-020-00468-8. 
[25] I. Park Et Al., “Machine Learning Model Of Facial Expression Outperforms Models Using Analgesia 
Nociception Index And Vital Signs To Predict Postoperative Pain Intensity: A Pilot Study,” Korean J. 
Anesthesiol., Vol. 77, No. 2, Pp. 195–204, 2024, Doi: 10.4097/Kja.23583. 
[26] E. K. Naeini Et Al., “Pain Recognition With Electrocardiographic Features In Postoperative Patients:

---

### Halaman 16

Dharma, dkk. 
Jurnal Algoritma | Vol. 22 No. 2 | November 2025 | Hal 336-357 
 
 
351 
 
Method Validation Study,” J. Med. Internet Res., Vol. 23, No. 5, Pp. 1–13, 2021, Doi: 10.2196/25079. 
[27] A. Al-Qerem, “An Efficient Machine-Learning Model Based On Data Augmentation For Pain Intensity 
Recognition”. 
[28] R. Fernandez Rojas Et Al., “Multimodal Physiological Sensing For The Assessment Of Acute Pain,” 
Front. Pain Res., Vol. 4, No. June, Pp. 1–11, 2023, Doi: 10.3389/Fpain.2023.1150264. 
[29] B. E. Faremi, J. Stavres, N. Oliveira, Z. Zhou, And A. H. Sung, “Enhancing Machine Learning 
Performance With Continuous In-Session Ground Truth Scores: Pilot Study On Objective Skeletal 
Muscle Pain Intensity Prediction”. 
[30] N. Gozzi Et Al., “Unraveling The Physiological And Psychosocial Signatures Of Pain By Machine 
Learning,” Med, Vol. 5, No. 12, Pp. 1495-1509.E5, 2024, Doi: 10.1016/J.Medj.2024.07.016. 
[31] M. Ghita, I. R. Birs, D. Copot, C. I. Muresan, M. Neckebroek, And C. M. Ionescu, “Parametric Modeling 
And Deep Learning For Enhancing Pain Assessment In Postanesthesia,” Ieee Trans. Biomed. Eng., Vol. 
70, No. 10, Pp. 2991–3002, 2023, Doi: 10.1109/Tbme.2023.3274541. 
[32] P. Bellmann, P. Thiam, H. A. Kestler, And F. Schwenker, “Machine Learning-Based Pain Intensity 
Estimation: Where Pattern Recognition Meets Chaos Theory - An Example Based On The Biovid Heat 
Pain Database,” Ieee Access, Vol. 10, No. September, Pp. 102770–102777, 2022, Doi: 
10.1109/Access.2022.3208905. 
[33] S. A. H. Aqajari Et Al., “Pain Assessment Tool With Electrodermal Activity For Postoperative Patients: 
Method Validation Study,” Jmir Mhealth Uhealth, Vol. 9, No. 5, Pp. 1–11, 2021, Doi: 10.2196/25258. 
[34] A. R. Wahab Sait And A. K. Dutta, “Developing A Pain Identification Model Usina Deep Learning 
Technique,” J. Disabil. Res., Vol. 3, No. 3, Pp. 1–9, 2024, Doi: 10.57197/Jdr-2024-0028. 
[35] T. Mari Et Al., “External Validation Of Binary Machine Learning Models For Pain Intensity Perception 
Classification From Eeg In Healthy Individuals,” Sci. Rep., Vol. 13, No. 1, Pp. 1–13, 2023, Doi: 
10.1038/S41598-022-27298-1. 
[36] N. Tashtoush, A. Al-Ghraibah, S. Azhar Syed Sulaiman, F. Anis Amran, S. Khairizan Rahim, And S. 
Noor Harun, “Cancer Pain Detection Based On Physiological Parameters And Machine Learning,” 
Cogent Eng., Vol. 11, No. 1, P., 2024, Doi: 10.1080/23311916.2024.2431581. 
[37] F. Pouromran, Y. Lin, And S. Kamarthi, “Automatic Pain Recognition From Blood Volume Pulse (Bvp) 
Signal Using Machine Learning Techniques,” Arxiv, Pp. 1–20, 2023. 
[38] M. Benavent-Lledo Et Al., “A Comprehensive Study On Pain Assessment From Multimodal Sensor 
Data,” Sensors, Vol. 23, No. 24, Pp. 1–18, 2023, Doi: 10.3390/S23249675. 
[39] J. D. Hughes, P. Chivers, And K. Hoti, “The Clinical Suitability Of An Artificial Intelligence-Enabled 
Pain Assessment Tool For Use In Infants: Feasibility And Usability Evaluation Study,” J. Med. Internet 
Res., Vol. 25, Pp. 1–14, 2023, Doi: 10.2196/41992. 
[40] K. Pikulkaew, W. Boonchieng, E. Boonchieng, And V. Chouvatut, “2d Facial Expression And Movement 
Of Motion For Pain Identification With Deep Learning Methods,” Ieee Access, Vol. 9, Pp. 109903–
109914, 2021, Doi: 10.1109/Access.2021.3101396. 
[41] R. Fernandez Rojas, C. Joseph, G. Bargshady, And K. L. Ou, “Empirical Comparison Of Deep Learning 
Models 
For 
Fnirs 
Pain 
Decoding,” 
Front. 
Neuroinform., 
Vol. 
18, 
2024, 
Doi: 
10.3389/Fninf.2024.1320189. 
[42] M. S. Patil And H. D. Patil, “Towards An Automatic Pain Intensity Levels Evaluation From Multimodal 
Physiological Signal Using Machine Learning Approaches,” Niger. J. Technol., Vol. 43, No. 4, Pp. 763–
771, 2024, Doi: 10.4314/Njt.V43i4.16. 
[43] Raihan Islamadina Et Al., “Learning Rate Analysis For Pain Recognition Through Viola-Jones And Deep 
Learning Methods,” J. Nas. Tek. Elektro Dan Teknol. Inf., Vol. 13, No. 2, Pp. 77–83, 2024, Doi: 
10.22146/Jnteti.V13i2.9466. 
[44] N. Z. A. Samd Khaled, “Automatic Pain Recognition System For Dental Patients Using Machine 
Learning”. 
[45] C. L. Wu Et Al., “Deep Learning-Based Pain Classifier Based On The Facial Expression In Critically Ill 
Patients,” Front. Med., Vol. 9, No. March, Pp. 1–8, 2022, Doi: 10.3389/Fmed.2022.851690. 
[46] W. S. Almuhammadi, E. Agu, J. King, And P. Franklin, “Oa-Pain-Sense: Machine Learning Prediction 
Of Hip And Knee Osteoarthritis Pain From Imu Data,” Informatics, Vol. 9, No. 4, Pp. 1–28, 2022, Doi: 
10.3390/Informatics9040097.

---

### Halaman 17

Dharma, dkk. 
Jurnal Algoritma | Vol. 22 No. 2 | November 2025 | Hal 336-357 
 
 
352 
 
[47] K. N. Phan, N. K. Iyortsuun, S. Pant, H. J. Yang, And S. H. Kim, “Pain Recognition With Physiological 
Signals Using Multi-Level Context Information,” Ieee Access, Vol. 11, No. March, Pp. 20114–20127, 
2023, Doi: 10.1109/Access.2023.3248654. 
[48] P. Prajod, D. Schiller, D. W. Don, And E. Andre, “Faces Of Experimental Pain: Transferability Of Deep-
Learned Heat Pain Features To Electrical Pain,” Proc. - 2024 12th Int. Conf. Affect. Comput. Intell. 
Interact. Work. Demos, Aciiw 2024, Pp. 31–38, 2024, Doi: 10.1109/Aciiw63320.2024.00009. 
[49] F. Zhao, C. Zhang, K. M. Dudding, A. N. Sanders, P. Lewis-Chumley, And L. Kathryn, “Neonatal Pain 
Detection From Facial Expressions Using Deep Learning,” Res. Sq., Pp. 1–16, 2024. 
[50] A. Ghosh, S. Umer, M. K. Khan, R. K. Rout, And B. C. Dhara, “Smart Sentiment Analysis System For 
Pain Detection Using Cutting Edge Techniques In A Smart Healthcare Framework,” Cluster Comput., 
Vol. 26, No. 1, Pp. 119–135, 2023, Doi: 10.1007/S10586-022-03552-Z. 
[51] R. F. Rojas, J. Romero, J. Lopez-Aparicio, And K. L. Ou, “Pain Assessment Based On Fnirs Using Bi-
Lstm Rnns,” Int. Ieee/Embs Conf. Neural Eng. Ner, Vol. 2021-May, No. May, Pp. 399–402, 2021, Doi: 
10.1109/Ner49283.2021.9441384. 
[52] S. Alphonse, S. Abinaya, And N. Kumar, “Pain Assessment From Facial Expression Images Utilizing 
Statistical Frei-Chen Mask (Sfcm)-Based Features And Densenet,” J. Cloud Comput., Vol. 13, No. 1, 
2024, Doi: 10.1186/S13677-024-00706-9. 
[53] N. Rathee, S. Pahal, And P. Sheoran, “Pain Detection From Facial Expressions Using Domain Adaptation 
Technique,” Pattern Anal. Appl., Vol. 25, No. 3, Pp. 567–574, 2022, Doi: 10.1007/S10044-021-01025-
4. 
[54] D. Chen Et Al., “Scalp Eeg-Based Pain Detection Using Convolutional Neural Network,” Ieee Trans. 
Neural Syst. Rehabil. Eng., Vol. 30, Pp. 274–285, 2022, Doi: 10.1109/Tnsre.2022.3147673. 
[55] R. Zhi, C. Zhou, J. Yu, T. Li, And G. Zamzmi, “Multimodal-Based Stream Integrated Neural Networks 
For Pain Assessment,” Ieice Trans. Inf. Syst., Vol. E104d, No. 12, Pp. 2184–2194, 2021, Doi: 
10.1587/Transinf.2021edp7065. 
[56] M. U. Khan, S. Aziz, N. Hirachan, C. Joseph, J. Li, And R. Fernandez-Rojas, “Experimental Exploration 
Of Multilevel Human Pain Assessment Using Blood Volume Pulse (Bvp) Signals,” Sensors, Vol. 23, No. 
8, 2023, Doi: 10.3390/S23083980. 
[57] P. Gouverneur Et Al., “An Experimental And Clinical Physiological Signal Dataset For Automated Pain 
Recognition,” Sci. Data, Vol. 11, No. 1, Pp. 1–13, 2024, Doi: 10.1038/S41597-024-03878-W. 
[58] P. Yin, X. Zhang, And L. Hao, “Deep Learning Assessment Method For Postoperative Pain Based On 
Facial Video Data,” J. Phys. Conf. Ser., Vol. 2356, No. 1, 2022, Doi: 10.1088/1742-6596/2356/1/012052. 
[59] Z. Lu, B. Ozek, And S. Kamarthi, “Transformer Encoder With Multiscale Deep Learning For Pain 
Classification Using Physiological Signals,” Front. Physiol., Vol. 14, No. December, Pp. 1–15, 2023, 
Doi: 10.3389/Fphys.2023.1294577. 
[60] M. Elsayed, K. S. Sim, And S. C. Tan, “A Novel Approach To Objectively Quantify The Subjective 
Perception Of Pain Through Electroencephalogram Signal Analysis,” Ieee Access, Vol. 8, Pp. 199920–
199930, 2020, Doi: 10.1109/Access.2020.3032153. 
[61] B. Erdoǧan And H. Oǧul, “Objective Pain Assessment Using Vital Signs,” Procedia Comput. Sci., Vol. 
170, Pp. 947–952, 2020, Doi: 10.1016/J.Procs.2020.03.103. 
[62] K. N. Phan, G. S. Lee, H. J. Yang, And ..., “Deep Learning Network Approach For Pain Recognition 
Using Physiological Signals,” Proc. Korea …, Pp. 2–5, 2021. 
[63] R. Shafiee And M. R. Daliri, “Decoding Of Pain During Heel Lancing In Human Neonates With Eeg 
Signal And Machine Learning Approach,” Sci. Rep., Vol. 14, No. 1, Pp. 1–11, 2024, Doi: 
10.1038/S41598-024-82631-0. 
[64] M. S. Mu Khan  N Hirachan, C Joseph, ..., “Multilevel Pain Assessment With Functional Near-Infrared 
Spectroscopy: Evaluating Δhbo2 And Δhhb Measures For Comprehensive Analysis”. 
[65] R. F. Rojas, J. Romero, J. Lopez-Aparicio, And K.-L. Ou, “Pain Assessment Based On Fnirs Using 
Bidirectional Lstms,” Pp. 5–8, 2020. 
[66] F. Pouromran, Y. Lin, And S. Kamarthi, “Personalized Deep Bi-Lstm Rnn Based Model For Pain 
Intensity Classification Using Eda Signal,” Sensors, Vol. 22, No. 21, 2022, Doi: 10.3390/S22218087. 
[67] S. Gkikas And M. Tsiknakis, “Twins-Painvit: Towards A Modality-Agnostic Vision Transformer 
Framework For Multimodal Automatic Pain Assessment Using Facial Videos And Fnirs,” Proc. - 2024

---

### Halaman 18

Dharma, dkk. 
Jurnal Algoritma | Vol. 22 No. 2 | November 2025 | Hal 336-357 
 
 
353 
 
12th Int. Conf. Affect. Comput. Intell. Interact. Work. Demos, Aciiw 2024, Pp. 13–21, 2024, Doi: 
10.1109/Aciiw63320.2024.00007. 
[68] H. Kao Et Al., “The Potential For High-Priority Care Based On Pain Through Facial Expression Detection 
With Patients Experiencing Chest Pain,” Diagnostics, Vol. 15, No. 1, Pp. 1–17, 2025, Doi: 
10.3390/Diagnostics15010017. 
[69] R. Gutierrez, J. Garcia-Ortiz, And W. Villegas-Ch, “Multimodal Ai Techniques For Pain Detection: 
Integrating Facial Gesture And Paralanguage Analysis,” Front. Comput. Sci., Vol. 6, No. July, Pp. 1–14, 
2024, Doi: 10.3389/Fcomp.2024.1424935. 
[70] A. Semwal And N. D. Londhe, “A Multi-Stream Spatio-Temporal Network Based Behavioural 
Multiparametric Pain Assessment System,” Biomed. Signal Process. Control, Vol. 90, No. November 
2023, P. 105820, 2024, Doi: 10.1016/J.Bspc.2023.105820. 
[71] Y. Kong, H. F. Posada-Quintero, And K. H. Chon, “Real-Time High-Level Acute Pain Detection Using 
A Smartphone And A Wrist-Worn Electrodermal Activity Sensor,” Sensors, Vol. 21, No. 12, 2021, Doi: 
10.3390/S21123956. 
[72] Y. Lin Et Al., “Experimental Exploration Of Objective Human Pain Assessment Using Multimodal 
Sensing 
Signals,” 
Front. 
Neurosci., 
Vol. 
16, 
No. 
February, 
Pp. 
1–14, 
2022, 
Doi: 
10.3389/Fnins.2022.831627. 
[73] N. Shoukry, O. Elkilany, P. Thiam, V. Kessler, And F. Schwenker, “Subject-Independent Pain 
Recognition Using Physiological Signals And Para-Linguistic Vocalizations,” Int. Conf. Pattern 
Recognit. Appl. Methods, Vol. 1, No. January, Pp. 142–150, 2020, Doi: 10.5220/0008912201420150. 
[74] M. Snene, C. Graf, P. Vayne-Bossert, And S. Pautex, “Pain Assessment For Patients With Dementia And 
Communication Impairment: Feasibility Study Of The Usage Of Artificial Intelligence-Enabled 
Wearables,” Sensors, Vol. 24, No. 19, 2024, Doi: 10.3390/S24196298. 
[75] G. Z. M Sirajus Salekin  D Goldgof, ..., “Multimodal Spatio-Temporal Deep Learning Approach For 
Neonatal Postoperative Pain Assessment”. 
[76] Y. C. Chu, S. S. S. Chen, K. B. Chen, J. S. Sun, T. K. Shen, And L. K. Chen, “Enhanced Labor Pain 
Monitoring Using Machine Learning And Ecg Waveform Analysis For Uterine Contraction-Induced 
Pain,” Biodata Min., Vol. 17, No. 1, 2024, Doi: 10.1186/S13040-024-00383-Z. 
[77] H. M. Mohan, “Real Time Audio-Based Distress Signal Detection As Vital Signs Of Myocardial 
Infarction Using Convolutional Neural Networks,” Vol. 13, No. 2, Doi: 10.12720/Jait.13.2.106-116. 
[78] G. P. R, E. Granger, And P. Cardinal, “Deep Da For Ordinal Regression Of Pain Intensity Estimation 
Using Weakly-Labeled Videos,” Pp. 1–12, 2020. 
[79] P. D. Barua Et Al., “Automated Detection Of Pain Levels Using Deep Feature Extraction From Shutter 
Blinds-Based Dynamic-Sized Horizontal Patches With Facial Images,” Sci. Rep., Vol. 12, No. 1, Pp. 1–
13, 2022, Doi: 10.1038/S41598-022-21380-4. 
[80] R. Hadelina, M. I. Rusydi, M. Firza, And O. W. Samuel, “Ann Models For Shoulder Pain Detection Based 
On Human Facial Expression Covered By Mask,” Jitce (Journal Inf. Technol. Comput. Eng., Vol. 7, No. 
01, Pp. 49–55, 2023, Doi: 10.25077/Jitce.7.01.49-55.2023. 
[81] E. Othman, P. Werner, F. Saxen, A. Al-Hamadi, S. Gruss, And S. Walter, “Classification Networks For 
Continuous Automatic Pain Intensity Monitoring In Video Using Facial Expression On The X-Ite Pain 
Database,” J. Vis. Commun. Image Represent., Vol. 91, No. January, P. 103743, 2023, Doi: 
10.1016/J.Jvcir.2022.103743. 
[82] J. Rim, S. Ryu, H. Jang, H. Zhang, And Y. Cho, “Machine Learning-Based Pain Severity Classification 
Of Lumbosacral Radiculopathy Using Infrared Thermal Imaging,” Appl. Sci., Vol. 13, No. 6, 2023, Doi: 
10.3390/App13063541. 
[83] H. Dorris, J. Oh, And N. Jacobson, “Wearable Movement Data As A Potential Digital Biomarker For 
Chronic Pain: An Investigation Using Deep Learning,” Phys. Act. Heal., Vol. 8, No. 1, Pp. 83–92, 2024, 
Doi: 10.5334/Paah.329. 
[84] M. S. Patil And H. D. Patil, “Logistic Regression Based Model For Pain Intensity Level Detection From 
Biomedical Signal,” Int. Res. J. Multidiscip. Scope, Vol. 5, No. 2, Pp. 652–662, 2024, Doi: 
10.47857/Irjms.2024.V05i02.0595. 
[85] S. El Morabit, A. Rivenq, M. E. N. Zighem, A. Hadid, A. Ouahabi, And A. Taleb-Ahmed, “Automatic 
Pain Estimation From Facial Expressions: A Comparative Analysis Using Off-The-Shelf Cnn

---

### Halaman 19

Dharma, dkk. 
Jurnal Algoritma | Vol. 22 No. 2 | November 2025 | Hal 336-357 
 
 
354 
 
Architectures,” Electron., Vol. 10, No. 16, Pp. 0–12, 2021, Doi: 10.3390/Electronics10161926. 
[86] C. Zhang Et Al., “Deep Learning Models For The Prediction Of Acute Postoperative Pain In Pacu For 
Video‐Assisted Thoracoscopic Surgery,” Bmc Med. Res. Methodol., Vol. 24, No. 1, 2024, Doi: 
10.1186/S12874-024-02357-5. 
[87] Y. Kong Et Al., “Differentiating Between Stress- And Ept-Induced Electrodermal Activity During Dental 
Examination,” 
Comput. Biol. Med., Vol. 155, No. February, P. 106695, 2023, Doi: 
10.1016/J.Compbiomed.2023.106695. 
[88] R. Fang Et Al., “Pain Level Modeling Of Intensive Care Unit Patients With Machine Learning Methods: 
An Effective Congeneric Clustering-Based Approach,” Acm Int. Conf. Proceeding Ser., Pp. 89–95, 2022, 
Doi: 10.1145/3524086.3524100. 
[89] H. M. Mohan, H. C. S. Kumara, S. H. Mallikarjun, And A. Y. Prasad, “Edge Artificial Intelligence-Based 
Facial Pain Recognition During Myocardial Infarction,” J. Autom. Mob. Robot. Intell. Syst., Vol. 16, No. 
3, Pp. 40–55, 2022, Doi: 10.14313/Jamris/3-2022/23. 
[90] Y. Shuang Et Al., “Classification Of Pain Expression Images In Elderly With Hip Fractures Based On 
Improved Resnet50 Network,” Front. Med., Vol. 11, No. July, Pp. 1–11, 2024, Doi: 
10.3389/Fmed.2024.1421800. 
[91] Y. Li Et Al., “Children’s Pain Identification Based On Skin Potential Signal,” Sensors, Vol. 23, No. 15, 
Pp. 1–11, 2023, Doi: 10.3390/S23156815. 
[92] R. Cao, S. A. H. Aqajari, E. Kasaeyan Naeini, And A. M. Rahmani, “Objective Pain Assessment Using 
Wrist-Based Ppg Signals: A Respiratory Rate Based Method,” Proc. Annu. Int. Conf. Ieee Eng. Med. 
Biol. Soc. Embs, Vol. 2021-Janua, Pp. 1164–1167, 2021, Doi: 10.1109/Embc46164.2021.9630002. 
[93] S. Rezaei, A. Moturu, S. Zhao, K. M. Prkachin, T. Hadjistavropoulos, And B. Taati, “Unobtrusive Pain 
Monitoring In Older Adults With Dementia Using Pairwise And Contrastive Training,” Ieee J. Biomed. 
Heal. Informatics, Vol. 25, No. 5, Pp. 1450–1462, 2021, Doi: 10.1109/Jbhi.2020.3045743. 
[94] A. M. Anter, G. Huang, L. Li, L. Zhang, Z. Liang, And Z. Zhang, “A New Type Of Fuzzy-Rule-Based 
System With Chaotic Swarm Intelligence For Multiclassification Of Pain Perception From Fmri,” Ieee 
Trans. Fuzzy Syst., Vol. 28, No. 6, Pp. 1096–1109, 2020, Doi: 10.1109/Tfuzz.2020.2979150. 
[95] R. L. Fritz, M. Wilson, G. Dermody, M. Schmitter-Edgecombe, And D. J. Cook, “Automated Smart Home 
Assessment To Support Pain Management: Multiple Methods Analysis,” J. Med. Internet Res., Vol. 22, 
No. 11, Pp. 1–12, 2020, Doi: 10.2196/23943. 
[96] A. Ghosh, “A Multimodal Sentiment Analysis System For Recognizing Person Aggressiveness In Pain 
Based On Textual And Visual Information,” Vol. 14, No. 4, Doi: 10.1007/S12652-023-04567-Z. 
[97] D. G. Patterson, “Objective Wearable Measures Correlate With Self-Reported Chronic Pain Levels In 
People With Spinal Cord Stimulation Systems,” Vol. 6, No. 1, Doi: 10.1038/S41746-023-00892-X. 
[98] S. Gkikas, C. Chatzaki, E. Pavlidou, F. Verigou, K. Kalkanis, And M. Tsiknakis, “Automatic Pain 
Intensity Estimation Based On Electrocardiogram And Demographic Factors,” Int. Conf. Inf. Commun. 
Technol. Ageing Well E-Health, Ict4awe - Proc., No. July, Pp. 155–162, 2022, Doi: 
10.5220/0010971700003188. 
[99] L. S. Topaz Et Al., “Electroencephalography Functional Connectivity—A Biomarker For Painful 
Polyneuropathy,” Eur. J. Neurol., Vol. 30, No. 1, Pp. 204–214, 2023, Doi: 10.1111/Ene.15575. 
[100] 
A. Kelati, E. Nigussie, I. Ben Dhaou, J. Plosila, And H. Tenhunen, “Real-Time Classification Of Pain 
Level Using Zygomaticus And Corrugator Emg Features,” Electron., Vol. 11, No. 11, 2022, Doi: 
10.3390/Electronics11111671. 
[101] 
X. Wei, “Identifying The Neural Marker Of Chronic Sciatica Using Multimodal Neuroimaging And 
Machine Learning Analyses,” Vol. 16, Doi: 10.3389/Fnins.2022.1036487. 
[102] 
Z. W. G Sun  D Ok, L Doan, J Wang, ..., “Detecting Acute Pain Signals From Human Eeg”. 
[103] 
A. Kusumaningrum, Y. Rustina, T. Abuzairi, N. Ibrahim, N. Widanti, And G. R. Lestari, “Analysis 
Of The Infant’s Acute Pain Assessment Using Developed Conductance Skin Electric Instrument 
Compared To The Behavioural And Faces Pain Scale In Painful Injected Vaccine,” Pediatr. Medica E 
Chir., Vol. 45, No. S1, Pp. 1–6, 2023, Doi: 10.4081/Pmc.2023.312. 
[104] 
L. Feng, H. Li, H. Cui, X. Xie, S. Xu, And Y. Hu, “Low Back Pain Assessment Based On Alpha 
Oscillation Changes In Spontaneous Electroencephalogram (Eeg),” Neural Plast., Vol. 2021, 2021, Doi: 
10.1155/2021/8537437.

---

### Halaman 20

Dharma, dkk. 
Jurnal Algoritma | Vol. 22 No. 2 | November 2025 | Hal 336-357 
 
 
355 
 
[105] 
J. Gendras Et Al., “The Newborn Infant Parasympathetic Evaluation Index For Acute Procedural Pain 
Assessment In Preterm Infants,” Pediatr. Res., Vol. 89, No. 7, Pp. 1840–1847, 2021, Doi: 
10.1038/S41390-020-01152-4. 
[106] 
J. Sofia Bobby, B. Suresh Chander Kapali, U. S. Kumar, And M. A. Femina, “Qcbo-Wsvm: Quantum 
Chaos Butterfly Optimization-Based Weighted Support Vector Machine For Neuropathic Pain Detection 
From Eeg Signal,” Int. J. Imaging Syst. Technol., Vol. 33, No. 5, Pp. 1606–1620, 2023, Doi: 
10.1002/Ima.22882. 
[107] 
M. Neckebroek, M. Ghita, M. Ghita, D. Copot, And C. M. Ionescu, “Pain Detection With 
Bioimpedance Methodology From 3-Dimensional Exploration Of Nociception In A Postoperative 
Observational Trial,” J. Clin. Med., Vol. 9, No. 3, 2020, Doi: 10.3390/Jcm9030684. 
[108] 
J. Krafthöfer, S. C. Fabig, R. Baron, And J. Gierthmühlen, “Pupillometry As A Potential Objective 
Measurement Of Pain Assessment In Healthy Volunteers,” J. Pain Res., Vol. 17, Pp. 2037–2042, 2024, 
Doi: 10.2147/Jpr.S461906. 
[109] 
M. Orzabal, R. Naidu, K. Amirdelfan, And A. Akhbardeh, “A Forehead Wearable Sensor For The 
Objective Measurement Of Chronic Pain,” Int. J. Environ. Res. Public Health, Vol. 19, No. 24, 2022, 
Doi: 10.3390/Ijerph192417041. 
[110] 
E. Favre Et Al., “Nociception Assessment With Videopupillometry In Deeply Sedated Intensive Care 
Patients: Discriminative And Criterion Validations,” Aust. Crit. Care, Vol. 37, No. 1, Pp. 84–90, 2024, 
Doi: 10.1016/J.Aucc.2023.07.038. 
[111] 
J. Uberos, A. Campos-Martinez, A. Ruiz-López, E. Fernandez-Marín, And J. L. García-Serrano, 
“Sensitivity And Specificity Of The Newborn Infant Parasympathetic Evaluation Index In Pain 
Assessment Of Very Low Birth Weight Infants,” Am. J. Perinatol., Vol. 41, Pp. E430–E434, 2024, Doi: 
10.1055/S-0042-1755464. 
[112] 
M. Atee, K. Hoti, P. Chivers, And J. D. Hughes, “Faces Of Pain In Dementia: Learnings From A 
Real-World Study Using A Technology-Enabled Pain Assessment Tool,” Front. Pain Res., Vol. 3, No. 
February, Pp. 1–11, 2022, Doi: 10.3389/Fpain.2022.827551. 
[113] 
C. Gélinas Et Al., “Exploration Of A Multi-Parameter Technology For Pain Assessment In 
Postoperative Patients After Cardiac Surgery In The Intensive Care Unit: The Nociception Level Index 
(Nol)Tm,” J. Pain Res., Vol. 14, Pp. 3723–3731, 2021, Doi: 10.2147/Jpr.S332845. 
[114] 
M. Ghita, N. Jalilian, D. Copot, C. M. Ionescu, And M. Neckebroek, “Modeling And Analysis Of 
Monitored Vs. Self-Reported Postsurgical Acute Pain In A Clinical Trial,” Ifac-Papersonline, Vol. 54, 
No. 15, Pp. 67–72, 2021, Doi: 10.1016/J.Ifacol.2021.10.233. 
[115] 
B. K. Wang, T. H. Liu, F. Xie, And Y. Q. Liu, “Pain Vision System For Evaluating Chronic Pain: A 
Comparison With Vas Scoring,” Pain Res. Manag., Vol. 2020, Pp. 7–10, 2020, Doi: 
10.1155/2020/6312581. 
[116] 
L. Wang, Y. Xiao, R. D. Urman, And Y. Lin, “Cold Pressor Pain Assessment Based On Eeg Power 
Spectrum,” Sn Appl. Sci., Vol. 2, No. 12, Pp. 1–8, 2020, Doi: 10.1007/S42452-020-03822-8. 
[117] 
A. Badura, M. Bieńkowska, A. Myśliwiec, A. J. Owczarek, And E. Piętka, “Physiological Response 
To Pain In Patients With Temporomandibular Joint Disorders During Physiotherapy,” Sci. Rep., Vol. 14, 
No. 1, Pp. 1–15, 2024, Doi: 10.1038/S41598-024-74084-2. 
[118] 
C. M. Segning, R. A. Da Silva, And S. Ngomo, “An Innovative Eeg-Based Pain Identification And 
Quantification: A Pilot Study,” Sensors, Vol. 24, No. 12, Pp. 1–19, 2024, Doi: 10.3390/S24123873. 
[119] 
F. Allmendinger Et Al., “Contact-Heat Evoked Potentials: Insights Into Pain Processing In Crps Type 
I,” J. Pain Res., Vol. 17, Pp. 989–1003, 2024, Doi: 10.2147/Jpr.S436645. 
[120] 
D. B. Gungormus Et Al., “A Semi-Automatic Mhealth System Using Wearable Devices For 
Identifying Pain-Related Parameters In Elderly Individuals,” Int. J. Med. Inform., Vol. 184, No. January, 
2024, Doi: 10.1016/J.Ijmedinf.2024.105371. 
[121] 
O. Skogberg, L. Karlsson, E. Bäckryd, And D. Lemming, “Tonic Cuff Pressure Pain Sensitivity In 
Chronic Pain Patients And Its Relation To Self-Reported Physical Activity,” Scand. J. Pain, Vol. 24, No. 
1, Pp. 1–10, 2024, Doi: 10.1515/Sjpain-2023-0033. 
[122] 
F. Wang, M. C. Ou, Y. H. Zhu, T. Zhu, And X. C. Hao, “Trajectory Of Pain Threshold And Its 
Association With Acute Pain After Thoracic Surgery: A Prospective Observational Study,” J. 
Cardiothorac. Surg., Vol. 18, No. 1, Pp. 1–11, 2023, Doi: 10.1186/S13019-023-02424-W.

---

### Halaman 21

Dharma, dkk. 
Jurnal Algoritma | Vol. 22 No. 2 | November 2025 | Hal 336-357 
 
 
356 
 
[123] 
R. Lucas, M. Talih, S. Soares, And S. Fraga, “Bullying Involvement And Physical Pain Between Ages 
10 And 13 Years: Reported History And Quantitative Sensory Testing In A Population-Based Cohort,” 
J. Pain, Vol. 25, No. 4, Pp. 1012–1023, 2024, Doi: 10.1016/J.Jpain.2023.10.022. 
[124] 
A. J. Furman, “Sensorimotor Peak Alpha Frequency Is A Reliable Biomarker Of Prolonged Pain 
Sensitivity,” Vol. 30, No. 12, Doi: 10.1093/Cercor/Bhaa124. 
[125] 
L. B. Kisler Et Al., “Abnormal Alpha Band Power In The Dynamic Pain Connectome Is A Marker Of 
Chronic Pain With A Neuropathic Component,” Neuroimage Clin., Vol. 26, No. December 2019, P. 
102241, 2020, Doi: 10.1016/J.Nicl.2020.102241. 
[126] 
M. Ghita, “Bioimpedance Sensor And Methodology For Acute Pain Monitoring,” Vol. 20, No. 23, 
Doi: 10.3390/S20236765. 
[127] 
V. Dudarev, C. Zhang, O. Barral, G. Davis, And J. T. Enns, “Night-Time Cardiac Metrics From A 
Wearable Sensor Predict Intensity Of Next-Day Chronic Pain,” Procedia Comput. Sci., Vol. 206, Pp. 34–
44, 2022, Doi: 10.1016/J.Procs.2022.09.083. 
[128] 
M. Morimoto, A. Nawari, R. Savic, And M. Marmor, “Exploring The Potential Of A Smart Ring To 
Predict Postoperative Pain Outcomes In Orthopedic Surgery Patients,” Sensors, Vol. 24, No. 15, Pp. 1–
14, 2024, Doi: 10.3390/S24155024. 
[129] 
X. Gao, X. Xin, Z. Li, And W. Zhang, “Predicting Postoperative Pain Following Root Canal 
Treatment By Using Artificial Neural Network Evaluation,” Sci. Rep., Vol. 11, No. 1, Pp. 1–8, 2021, Doi: 
10.1038/S41598-021-96777-8. 
[130] 
F. Villalba-Meneses Et Al., “Classification Of The Pathological Range Of Motion In Low Back Pain 
Using Wearable Sensors And Machine Learning,” Sensors, Vol. 24, No. 3, Pp. 1–15, 2024, Doi: 
10.3390/S24030831. 
[131] 
M. B. Hossain Et Al., “Prediction Of Central Nervous System Oxygen Toxicity Symptoms Using 
Electrodermal Activity And Machine Learning,” Biocybern. Biomed. Eng., Vol. 44, No. 2, Pp. 304–311, 
2024, Doi: 10.1016/J.Bbe.2024.03.004. 
[132] 
M. T. Mardini Et Al., “The Temporal Relationship Between Ecological Pain And Life-Space Mobility 
In Older Adults With Knee Osteoarthritis: A Smartwatch-Based Demonstration Study,” Jmir Mhealth 
Uhealth, Vol. 9, No. 1, Pp. 1–14, 2021, Doi: 10.2196/19609. 
[133] 
M. Awais Et Al., “Novel Framework: Face Feature Selection Algorithm For Neonatal Facial And 
Related Attributes Recognition,” Ieee Access, Vol. 8, No. 2020, Pp. 59100–59113, 2020, Doi: 
10.1109/Access.2020.2982865. 
[134] 
D. Albahdal, “Painmeter: Automatic Assessment Of Pain Intensity Levels From Multiple 
Physiological Signals Using Machine Learning,” Vol. 12, Doi: 10.1109/Access.2024.3384359. 
[135] 
Y. Bouteraa, I. Ben Abdallah, K. Alnowaiser, And A. Ibrahim, “Smart Solution For Pain Detection 
In Remote Rehabilitation,” Alexandria Eng. J., Vol. 60, No. 4, Pp. 3485–3500, 2021, Doi: 
10.1016/J.Aej.2021.02.001. 
[136] 
F. Elgendy, M. Alshewimy, And A. Sarhan, “Pain Detection/Classification Framework Including 
Face Recognition Based On The Analysis Of Facial Expressions For E-Health Systems,” Int. Arab J. Inf. 
Technol., Vol. 18, No. 1, Pp. 125–132, 2021, Doi: 10.34028/Iajit/18/1/14. 
[137] 
M. Yu Et Al., “Eeg-Based Tonic Cold Pain Assessment Using Extreme Learning Machine,” Intell. 
Data Anal., Vol. 24, No. 1, Pp. 163–182, 2020, Doi: 10.3233/Ida-184388. 
[138] 
M. Bellal Et Al., “Calibration Trial Of An Innovative Medical Device (Nevva©) For The Evaluation 
Of Pain In Non-Communicating Patients In The Intensive Care Unit,” Front. Med., Vol. 11, No. June, 
2024, Doi: 10.3389/Fmed.2024.1309720. 
[139] 
T. Yamada, H. Yajima, M. Takayama, K. Imanishi, And N. Takakura, “Corrugator Muscle Activity 
Associated With Pressure Pain In Adults With Neck/Shoulder Pain,” Med., Vol. 60, No. 2, 2024, Doi: 
10.3390/Medicina60020223. 
[140] 
A. Scarano, F. Carinci, V. Candotto, And F. Lorusso, “Eradication Of Benign Skin Lesions Of The 
Face By Voltaic Arc Dermabrasion (Atmospheric Plasma): Postoperative Pain Assessment By Thermal 
Infrared Imaging,” Aesthetic Plast. Surg., Vol. 44, No. 6, Pp. 2277–2285, 2020, Doi: 10.1007/S00266-
020-01891-Z. 
[141] 
D. Teichmann, A. Hallmann, S. Wolfart, And M. Teichmann, “Identification Of Dental Pain Sensation 
Based On Cardiorespiratory Signals,” Biomed. Tech., Vol. 66, No. 2, Pp. 159–165, 2021, Doi:

---

### Halaman 22

Dharma, dkk. 
Jurnal Algoritma | Vol. 22 No. 2 | November 2025 | Hal 336-357 
 
 
357 
 
10.1515/Bmt-2020-0047. 
[142] 
Q. W. Jm Yue  B Liu, L Zhou, “Postoperative Accurate Pain Assessment Of Children And Artificial 
Intelligence: A Medical Hypothesis And Planned Study”.
