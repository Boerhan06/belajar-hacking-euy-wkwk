# Panduan Kontribusi

Jika Anda ingin berkontribusi, cukup lakukan *fork* pada proyek ini, tambahkan tautan/informasi/halaman Anda, lalu buat *pull request* (PR). 
Selama tautan yang ditambahkan tidak berbahaya (*non-malicious*), kemungkinan besar pull request Anda akan diterima. Segala bentuk bantuan dan kontribusi sangat disambut baik.

Untuk perubahan yang berkaitan dengan navigasi, gunakan versi Node.js yang ditentukan dalam `.nvmrc` (`nvm install && nvm use`), kemudian jalankan `npm ci --ignore-scripts`, `npm run nav:generate`, `npm test`, dan `npm run nav:check`. Lihat [Panduan Pemeliharaan Navigasi Referensi](docs/navigation.md) untuk mempelajari berkas otoritatif, indeks yang dihasilkan otomatis, serta konvensi subjek/alias.

Rangkaian pengujian (*test suite*) juga memerlukan Python 3 untuk pemeriksaan kebijakan pengarsipan (*archive-policy*) menggunakan pustaka standar. Docker hanya diperlukan untuk penangkapan arsip (*archive capture*) dan pengujian runtime terpisah; silakan lihat [Panduan Pengarsipan](docs/archiving.md). Pengujian navigasi rutin tidak mengunduh gambar ataupun menangkap situs web eksternal.

Pengarsipan tautan saat ini sedang dijeda selagi peningkatan navigasi ditinjau. Alur kerja pengarsipan tautan baru bersifat manual, dan proses capture/pengiriman tautan tidak diwajibkan sebelum membuka sebuah PR. Perintah `npm run archive:changes -- --base master` menyediakan pratinjau lokal tanpa perlu membuat permintaan jaringan. Lihat [Panduan Pengarsipan](docs/archiving.md) untuk perintah opsional yang dapat digunakan saat pengarsipan dilanjutkan kembali; abaikan berkas capture mentah dan lakukan commit hanya pada metadata serta katalog arsip yang digenerasi.
