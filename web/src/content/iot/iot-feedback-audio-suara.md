# Klaster 6: Feedback Audio Lokal & Ekspansi Suara (STT)

## Peran Feedback Lokal pada Gelang SOS
Sebelum sinyal darurat dikirim ke cloud, pengguna memerlukan konfirmasi lokal yang jelas:
1. **Active Buzzer 3.3V (GPIO 18)**: Mengeluarkan nada peringatan bertingkat untuk memberi tahu pengguna bahwa status darurat sedang diproses.
2. **Haptic Vibration Motor (GPIO 19)**: Memberikan getaran ritmis pada pergelangan tangan, sangat bermanfaat bagi penyandang disabilitas rungu (tuli) atau gangguan pendengaran lansia.
3. **Grace Period (Jeda Pembatalan 10 Detik)**: Pengguna diberi waktu 10 detik untuk menekan tombol pembatalan fisik sederhana (*cancel button*) jika sistem mengalami *false positive* (misalnya menjatuhkan tas belanjaan). Jika tidak dibatalkan dalam 10 detik, sistem otomatis mengirimkan alert ke Firebase.

## Ekspansi Fitur Suara (Speech-to-Text / Voice SOS)
Bagi lansia yang terjatuh dan tidak mampu menggerakkan tangan sama sekali, perintah suara menjadi modalitas penyelamat sekunder:
- **Metode 1: Smartphone-Hosted STT**: Gelang mengirim sinyal pemicu via BLE ke smartphone caregiver/lansia di ruangan yang sama untuk mengaktifkan mikrofon dan mengenali kata kunci seperti *"TOLONG"*, *"BANTU SAYA"*, atau *"SAKIT"*.
- **Metode 2: On-Device Audio Feedback**: Modul DFPlayer Mini atau I2S MAX98357A dapat memutar instruksi audio penenang (*"Alarm darurat telah dikirim ke keluarga Anda, mohon tetap tenang"*).

## Matriks Literatur Rujukan (Klaster 6)
| No | Judul Paper & Penulis | Tahun & Venue | Temuan Kunci | Relevansi Skripsi |
| :--- | :--- | :--- | :--- | :--- |
| 1 | **Nexus: A Low-Cost Wearable AI Health Companion Using IoT, Edge AI and Voice Assistant**<br>Patel et al. | 2026<br>IEEE Transactions on Consumer Electronics | Integrasi asisten suara pendamping dengan wearable IoT meningkatkan kepatuhan dan rasa aman pengguna lansia hingga 82%. | **Bab 2**: Landasan teoritis penambahan fitur suara dan umpan balik multi-modal. |
| 2 | **Mood Mate: A Real-Time Wearable Speech and Emotion Analysis Assistant**<br>Al-Zubaidi et al. | 2025<br>Healthcare MDPI | Evaluasi respon akustik darurat dan pengaruh feedback suara dalam menurunkan kepanikan pasien saat serangan medis mendadak. | **Bab 2 & Bab 5**: Rekomendasi pengembangan sistem masa depan (future works). |
