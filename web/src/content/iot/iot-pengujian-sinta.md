# Klaster 7: Metodologi Pengujian, Pemetaan Skripsi & Rujukan SINTA

## Metodologi Pengujian Prototipe
Pengujian prototipe Gelang Pintar SOS dilakukan melalui 3 tahap eksperimen:
1. **Pengujian Fungsionalitas Hardware**: Verifikasi stabilitas bus I2C (MPU6050 + MAX30102), konsumsi arus baterai (Sleep: 15 mA, Sampling 50Hz: 35 mA, Wi-Fi TX: 120 mA), dan durasi baterai (> 18 jam operasional).
2. **Pengujian Kinerja Algoritma (Confusion Matrix)**: Melibatkan 100 skenario uji (50 kejadian jatuh buatan dengan matras pengaman dan 50 aktivitas ADL normal seperti berjalan, bertepuk tangan, duduk cepat, dan mengetik).
3. **Pengujian Latensi End-to-End**: Pengukuran waktu dari terjadinya benturan fisik hingga notifikasi muncul di smartphone caregiver.

### Matriks Evaluasi Kinerja:
$$\text{Accuracy} = \frac{TP + TN}{TP + TN + FP + FN}$$
$$\text{Sensitivity / Recall} = \frac{TP}{TP + FN}$$
$$\text{Specificity} = \frac{TN}{TN + FP}$$
$$\text{False Alarm Rate (FAR)} = \frac{FP}{FP + TN}$$

Target luaran: Akurasi $> 95\%$, Sensitivitas $> 96\%$, dan FAR $< 4\%$.

## Matriks Pemetaan Sitasi ke Bab Skripsi (Bab 1 s.d. Bab 5)
| Bab Skripsi | Fokus & Konten | Paper Kunci yang Disitasi |
| :--- | :--- | :--- |
| **Bab 1: Pendahuluan** | Latar belakang urgensi lansia, demensia, kegagalan panic button fisik, batasan masalah gelang tangan. | Moreno (2024), Carvalho (2026), Giawa (2025), Al-Khafaji (2025). |
| **Bab 2: Tinjauan Pustaka** | Teori TinyML, perbandingan Random Forest vs CNN/LSTM, multi-sensor fusion IMU + PPG, cloud IoT. | Baccouche (2023), Sabry (2026), Kumar (2026), Doukaga (2024), Rathan (2025). |
| **Bab 3: Metodologi Penelitian** | Desain rangkaian ESP32, sampling 50Hz, circular buffer, ekstraksi fitur SVM/RMS, ekspor `model.h`. | Casilari (2022), Wang (2025), Santos (2021), Al-Dahhan (2026). |
| **Bab 4: Hasil & Pembahasan** | Confusion Matrix, perbandingan akurasi, grafik latensi Firebase, pengujian daya baterai Li-Po. | Siddiqui (2026), Hidayat (2026), Deepa (2026). |
| **Bab 5: Kesimpulan & Saran** | Ringkasan pencapaian prototipe, batasan bentuk fisik, saran BLE Long Range dan integrasi STT. | Patel (2026), Al-Zubaidi (2025). |

## Rujukan Jurnal Nasional Indonesia (SINTA)
1. **Jurnal Algoritma (SINTA 3)**: Giawa et al. (2025) - Identifikasi Penggunaan Sensor dalam Deteksi Rasa Sakit dan Anomali Pasien Non-Verbal.
2. **Jurnal Rekayasa Elektrika (SINTA 2)**: Pratama et al. (2025) - Implementasi Edge AI pada Mikrokontroler ESP32 untuk Klasifikasi Aktivitas Manusia.
3. **Jurnal Teknologi Informasi & Ilmu Komputer (JTIIK - SINTA 2)**: Hidayat et al. (2026) - Smart Wearable IoT untuk Deteksi Jatuh Lansia Real-Time Berbasis Firebase.
4. **Jurnal RESTI (SINTA 2)**: Santoso et al. (2026) - Optimasi Algoritma Random Forest pada Sistem Embedded Berdaya Rendah.
