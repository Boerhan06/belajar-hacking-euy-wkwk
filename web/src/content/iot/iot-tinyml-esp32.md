# Klaster 2: Inti Divisi AI: TinyML & Random Forest di ESP32

## Mengapa Random Forest untuk Edge MCU?
Pada perangkat bersumber daya terbatas (*resource-constrained edge MCU*) seperti ESP32:
- Memori SRAM: 520 KB
- Memori Flash: 4 MB
- Arsitektur: Xtensa Dual-Core 240 MHz (atau RISC-V 160 MHz pada ESP32-C3)

Deep Learning seperti CNN (Convolutional Neural Networks) atau LSTM (Long Short-Term Memory) membutuhkan alokasi memori puluhan megabyte, operasi floating-point matriks masif, dan konsumsi baterai tinggi. Sebaliknya, **Random Forest** (ensemble Decision Trees):
1. Menggunakan aturan logika `if-else` diskrit berbobot kecil.
2. Waktu inferensi lokal sangat cepat: **< 10 milidetik** per window data.
3. Jejak memori RAM: **< 15 KB** setelah dikonversi ke C++ header file (`model.h`).
4. Tahan terhadap overfitting jika ditata dengan kedalaman pohon (*max_depth*) terbatas (5 s.d. 8 tingkat).

## Alur Konversi Model: Python ke C++ Header (emlearn)
```python
# 1. Training Random Forest di Python (Scikit-Learn)
from sklearn.ensemble import RandomForestClassifier
import emlearn

# Inisialisasi 10 decision trees dengan kedalaman maksimal 6
clf = RandomForestClassifier(n_estimators=10, max_depth=6, random_state=42)
clf.fit(X_train, y_train)

# 2. Konversi ke C code menggunakan emlearn
c_model = emlearn.convert(clf, method='inline')
c_model.save(file='model.h', name='sos_random_forest')
print("Model berhasil diekspor ke model.h!")
```

## Implementasi Inferensi di ESP32 (Arduino C++)
```cpp
#include "model.h"

// Array fitur masukan: [SVM_mean, SVM_max, RMS, Variance, MCR, HeartRate_BPM, SpO2]
float features[7];

void loop() {
  if (data_window_ready) {
    calculate_features(features);
    
    // Inferensi TinyML Random Forest
    int prediction = sos_random_forest_predict(features, 7);
    
    if (prediction == 1) { // 1 = Kondisi Darurat / Jatuh
      trigger_emergency_alert();
    }
  }
}
```

## Matriks Literatur Rujukan (Klaster 2)
| No | Judul Paper & Penulis | Tahun & Venue | Temuan Kunci | Relevansi Skripsi |
| :--- | :--- | :--- | :--- | :--- |
| 1 | **A Comprehensive Review of TinyML for Healthcare**<br>Baccouche et al. | 2023<br>IEEE Access | Benchmark TinyML pada mikrokontroler: Decision Tree & Random Forest paling hemat daya dan efisien di SRAM < 512KB. | **Bab 2 & Bab 3**: Landasan pemilihan Random Forest vs Deep Learning. |
| 2 | **Resource-aware Edge Deployment and Trade-off Analysis of TinyML Classifiers**<br>Sabry et al. | 2026<br>Elsevier IoT | Analisis trade-off akurasi vs latency dan memory footprint pada MCU ESP32. | **Bab 3 & Bab 4**: Metrik komparasi efisiensi TinyML di mikrokontroler. |
| 3 | **Hand Gesture Recognition on ESP32 Microcontroller Using TinyML**<br>Al-Dahhan et al. | 2026<br>Sensors MDPI | Implementasi klasifikasi gerak inersial real-time di ESP32 dengan latensi inferensi 6.8 ms dan akurasi 96.2%. | **Bab 3**: Pembuktian empiris kemampuan ESP32 menjalankan klasifikasi real-time. |
