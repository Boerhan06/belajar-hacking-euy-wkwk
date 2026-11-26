# Deteksi Gempa Bumi Real-Time Menggunakan Sensor MPU6050 dengan Koreksi Drift Adaptif dan Sistem ESP32 Berbasis IoT

> **Klaster Literatur:** Klaster 7: Keyword Bahasa Indonesia (Jurnal Nasional SINTA, Garuda, & Scholar ID)  
> **Penulis:** Nadila Gusriyani, Maria Evita  
> **Tahun Publikasi:** 2026  
> **Publikasi / Jurnal:** Jurnal Fisika Unand  
> **Tautan Resmi (DOI / URL):** [https://doi.org/10.25077/jfu.15.4.414-422.2026](https://doi.org/10.25077/jfu.15.4.414-422.2026)  

---

## 📌 Abstrak / Intisari Ilmiah
<jats:p>Indonesia terletak pada wilayah paling aktif secara seismik di dunia, sehingga membuat kebutuhan mendesak akan sistem pemantauan gempa bumi yang terjangkau. Penelitian ini menyajikan sistem deteksi peristiwa gempa bumi secara real-time berdasarkan akselerometer MEMS (Micro-Electro-Mechanical System) MPU6050 dengan koreksi drift adaptif yang diintegrasikan dengan mikrokontroler ESP32 dan transmisi data berbasis Internet of Things (IoT). Sistem mengakuisisi percepatan tanah tiga sumbu secara real-time, kompensasi bias adaptif, penekanan drift menggunakan pembaruan kecepatan nol (Zero-Velocity Update/ZUPT), dan deteksi peristiwa berdasarkan ambang batas adaptif relatif terhadap garis dasar noise lokal. Parameter seismik utama, termasuk Percepatan Tanah Puncak (Peak Ground Acceleration/PGA) dan Kecepatan Tanah Puncak (Peak Ground Velocity/PGV), dihitung secara real-time, sementara karakterisasi domain frekuensi dilakukan secara luring menggunakan analisis Fast Fourier Transform (FFT). Pengukuran stasioner jangka panjang selama sekitar 60 menit menunjukkan karakteristik noise yang stabil, dengan tingkat noise RMS (root mean square) sebesar 0,0067 m/s², 0,0039 m/s², dan 0,0027 m/s² pada sumbu X, Y, dan Z. Sistem menunjukkan stabilitas garis dasar yang sangat baik, dengan variasi PGA hanya 0,7% dan laju drift terukur sebesar 0,00088 m/s² per jam. Validasi komparatif terhadap sensor referensi berbasis smartphone menunjukkan tingkat deteksi peristiwa 100%, dan kesalahan estimasi PGA ±2%, dengan linearitas melebihi koefisien determinasi 0,99.
 
Kata Kunci: akselerometer, ESP32, kecepatan tanah puncak, MPU6050, percepatan tanah puncak</jats:p>

---

## 📖 Isi Dokumen / Ekstraksi Teks Lengkap
**Abstrak Dokumen:**

<jats:p>Indonesia terletak pada wilayah paling aktif secara seismik di dunia, sehingga membuat kebutuhan mendesak akan sistem pemantauan gempa bumi yang terjangkau. Penelitian ini menyajikan sistem deteksi peristiwa gempa bumi secara real-time berdasarkan akselerometer MEMS (Micro-Electro-Mechanical System) MPU6050 dengan koreksi drift adaptif yang diintegrasikan dengan mikrokontroler ESP32 dan transmisi data berbasis Internet of Things (IoT). Sistem mengakuisisi percepatan tanah tiga sumbu secara real-time, kompensasi bias adaptif, penekanan drift menggunakan pembaruan kecepatan nol (Zero-Velocity Update/ZUPT), dan deteksi peristiwa berdasarkan ambang batas adaptif relatif terhadap garis dasar noise lokal. Parameter seismik utama, termasuk Percepatan Tanah Puncak (Peak Ground Acceleration/PGA) dan Kecepatan Tanah Puncak (Peak Ground Velocity/PGV), dihitung secara real-time, sementara karakterisasi domain frekuensi dilakukan secara luring menggunakan analisis Fast Fourier Transform (FFT). Pengukuran stasioner jangka panjang selama sekitar 60 menit menunjukkan karakteristik noise yang stabil, dengan tingkat noise RMS (root mean square) sebesar 0,0067 m/s², 0,0039 m/s², dan 0,0027 m/s² pada sumbu X, Y, dan Z. Sistem menunjukkan stabilitas garis dasar yang sangat baik, dengan variasi PGA hanya 0,7% dan laju drift terukur sebesar 0,00088 m/s² per jam. Validasi komparatif terhadap sensor referensi berbasis smartphone menunjukkan tingkat deteksi peristiwa 100%, dan kesalahan estimasi PGA ±2%, dengan linearitas melebihi koefisien determinasi 0,99.
 
Kata Kunci: akselerometer, ESP32, kecepatan tanah puncak, MPU6050, percepatan tanah puncak</jats:p>

**Catatan Akses:**
Artikel ini berstatus akses melalui portal jurnal/DOI penerbit (https://doi.org/10.25077/jfu.15.4.414-422.2026).
