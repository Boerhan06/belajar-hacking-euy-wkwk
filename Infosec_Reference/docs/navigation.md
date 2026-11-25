# Panduan Pemeliharaan Navigasi Referensi

Konten Markdown tetap menjadi sumber utama yang otoritatif. Edit berkas `navigation/topics.json` untuk menambahkan topik utama atau subjek/alias menurut urutan alfabet. Jalur topik bersifat relatif terhadap direktori utama repositori; fragmen subjek harus benar-benar ada di halaman target. Setiap halaman memiliki satu catatan topik kanonikal. Alias digunakan untuk menyediakan label penemuan alternatif.

Gunakan judul (*heading*) asli untuk subjek yang dapat dinavigasi dan poin-poin (*bullet points*) untuk entri sumber daya. Pertahankan `id` eksplisit yang stabil pada setiap judul yang dimigrasi; pertahankan *anchor* lama saat mengganti nama judul. ID eksplisit ini digunakan untuk menjaga kompatibilitas antara GitHub dan perender Docsify bawaan. Hindari penggunaan ID ganda (*duplicate IDs*). Jangan memberi nomor ulang pada ID `ref-*` yang sudah ada ketika menyisipkan judul baru; buatlah ID unik baru sebagai gantinya.

Daftar isi (ToC) disusun mengikuti urutan dan kedalaman dokumen, sedangkan indeks subjek disusun berdasarkan urutan alfabetis. Label umum dapat tetap berada di ToC lokal, namun sebaiknya tidak dimasukkan ke dalam indeks subjek agar tidak menumpuk.

## Perintah

Memerlukan rilis Node.js yang didukung: versi 22.22.2+ pada cabang 22, 24.15.0+ pada cabang 24, atau 26+. Versi ini cocok dengan dependensi runtime pengujian yang dikunci. Implementasi awal diuji menggunakan Node.js 24.22.1; kelanjutan desktop menggunakan Node.js 24.18.0, yang telah dikunci di berkas `.nvmrc`. Jika nvm terpasang, jalankan `nvm install && nvm use` sebelum menjalankan perintah di bawah ini.

```sh
npm ci
npm test
npm run nav:audit
npm run nav:generate
npm run nav:check
```

- `nav:audit`: mencetak temuan tanpa melakukan *fetch* ke URL eksternal.
- `nav:generate`: hanya mengedit blok yang ditandai dan berkas-berkas yang digenerasi secara otomatis.
- `nav:check`: tidak pernah menulis berkas; perintah ini memeriksa kesegaran luaran (*output freshness*) dan membandingkan galat internal dengan data acuan (*baseline*) historis.

Jangan mengedit manual berkas `Draft/_sidebar.md`, `Draft/Subject_Index.md`, `Draft/search-paths.js`, atau teks di antara penanda `nav:*:start` dan `nav:*:end`. Penanda yang hilang atau ganda akan menghentikan seluruh proses penulisan berkas otomatis.

README di direktori utama, beranda situs web, bilah sisi (*sidebar*), dan setiap halaman di `tocPages` pada `navigation/topics.json` harus bebas dari galat navigasi internal. Hasil penerapan akhir tidak memiliki galat internal dan `navigation/legacy-errors.json` berstatus kosong. Kerusakan baru akan menggagalkan pemeriksaan. Mekanisme baseline mendukung utang historis per kemunculan: menambahkan kemunculan baru akan gagal meskipun targetnya dikecualikan, dan pengecualian yang sudah kedaluwarsa juga akan memicu kegagalan. Pertahankan baseline kosong alih-alih mengecualikan kerusakan baru.

## Inventarisasi Pemrosesan Sumber Daya

```sh
npm run resources:generate
```

Parser bersama (*shared parser*) menangani tautan sebaris (*inline links*), tautan gaya referensi (*reference-style links*), tautan HTML, dan URL telanjang format GFM. Parser ini mengecualikan contoh kode berpagar (*fenced code blocks*) dan gambar sebaris. URL contoh mentah mungkin masih memerlukan tinjauan penyuntingan. Daftar berkas PDF/video/lainnya digenerasi dari inventaris bersama; sumber daya tanpa ekstensi atau yang belum pasti tetap berada di inventaris mesin untuk konfirmasi tipe.

Simpan perubahan pemrosesan di berkas `navigation/resource-progress.json`, dengan kunci berupa ID sumber daya, sebagai contoh:

```json
{"resource-id-from-inventory": {"processing_status": "extracted"}}
```

Status yang diizinkan meliputi: `pending`, `acquired`, `extracted`, `indexed`, `failed`, dan `deferred`. Proses generasi ulang akan mempertahankan status-status tersebut dari catatan terpisah ini. Jangan menyimpulkan keberhasilan ekstraksi atau pengindeksan hanya berdasarkan ketersediaan berkas.

## Penyesuaian Kompatibilitas Docsify

Aset Docsify 4.12.1 yang sudah ada tetap dipertahankan. Konfigurasi disatukan, jalur pencarian otomatis diset sebagai nilai string, dan berkas `Draft/search-paths.js` menyediakan rute eksplisit untuk semua halaman Markdown referensi, termasuk halaman anak di dalam direktori.

Perender judul Markdown yang telah dikonfigurasi akan memanggil perender bawaan terlebih dahulu, kemudian memindahkan alias eksplisit kosong ke luar tautan permanennya (*permalink*) serta menghapus atribut alias yang menduplikasi ID judul. Langkah ini menjaga judul tetap rapi dan mudah dibaca, mempertahankan tujuan legacy huruf besar/kecil yang presisi, dan menyatukan rute otomatis asli. Ini bergantung pada markup judul perender yang tersimpan; pembaruan versi harus lolos pemeriksaan kompilator terkait ID unik, permalink yang tidak kosong, pemformatan, dan alias legacy, serta uji runtime perutean/pencarian.

Plugin pencarian bawaan memiliki perbaikan lokal: isi judul kosong tidak lagi menyebabkan galat pada pembuatan cuplikan (*snippet*); tag HTML pada judul dihapus dari judul hasil pencarian; ID judul eksplisit digunakan sebagai tujuan pencarian; dan kegagalan kuota *cache* tetap mempertahankan indeks pencarian di memori. Data *cache* yang tidak lengkap akan memicu pembangunan ulang indeks, bukan menonaktifkan fitur pencarian. Korpus yang lebih besar dari kapasitas penyimpanan peramban akan dimuat ulang saat halaman di-refresh. Pertahankan perbaikan ini atau jalankan kembali uji regresi runtime saat memperbarui plugin.

Pengujian menjalankan kompilator yang ada dan aplikasi di bawah `/docs/` menggunakan jsdom. Pengujian ini memverifikasi bilah sisi/perutean mendalam dan berbagai frasa pencarian. Ini merupakan verifikasi fungsional DOM, bukan bukti penerapan di lingkungan produksi. Peninjauan melalui Chromium desktop juga telah memverifikasi destinasi pencarian percontohan, pemuatan ulang rute mendalam, serta perutean ToC Cloud/Containers di bawah `/docs/`.

Berkas navigasi yang dikelola beserta direktori induknya harus berupa jalur repositori reguler. Input Markdown berupa tautan simbolik (*symlink*) dan output kelolaan berupa tautan simbolik akan ditolak sebelum proses baca/tulis; generasi tidak boleh mengikuti tautan ke berkas yang tidak terkait. ID tujuan pencarian eksplisit mempertahankan besar-kecil huruf aslinya meskipun perender Docsify bawaan biasanya mengubah nilai kueri yang diserialisasi menjadi huruf kecil.
