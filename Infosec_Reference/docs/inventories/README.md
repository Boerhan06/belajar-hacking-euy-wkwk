# Inventarisasi Pemrosesan Sumber Daya

Dapat digenerasi ulang menggunakan perintah `npm run resources:generate`. Perbarui status pemrosesan di `navigation/resource-progress.json`; tampilan hasil generasi tidak diedit secara manual.

Inventarisasi ini memisahkan sumber daya non-teks dari alur kerja (*pipeline*) WARC halaman web. Daftar ini merupakan hasil pemindaian URL awal, bukan klasifikasi MIME yang terverifikasi ataupun perayapan media yang menyeluruh.

- [Berkas PDF](pdfs.md): disiapkan untuk ekstraksi teks di tahap selanjutnya, dilengkapi OCR jika diperlukan.
- [Video](videos.md): disiapkan untuk ekstraksi metadata/takarir (*caption*) atau transkripsi mendatang; stempel waktu dipertahankan untuk hasil pencarian.
- [Sumber daya non-teks lainnya](other-nontext.md): diarahkan berdasarkan tipe berkas terkonfirmasi, seperti slide presentasi, rekaman audio, kumpulan data (*datasets*), rekaman paket jaringan (*packet captures*), dan berkas arsip.
- [Inventaris lengkap yang dapat dibaca mesin](resource-inventory.jsonl): mencakup URL yang belum teridentifikasi untuk klasifikasi bertahap, URL unduhan yang telah dide-duplikasi, serta seluruh referensi sumber.

Target berupa PDF, video, dan berkas non-teks lainnya ditempatkan dalam antrean pemrosesan bertahap dan tidak diunduh/diarsipkan secara otomatis saat ini. Pertahankan struktur HTML/teks artikel dan gambar artikel di dalam alur WARC. Jangan mengeksekusi biner yang ditautkan. Keberhasilan penangkapan halaman arahan (*landing page*) tidak menandakan bahwa berkas media di dalamnya telah selesai diproses.

Status klasifikasi, status pemrosesan, dan ketersediaan berkas merupakan hal yang terpisah. Konfirmasikan tipe konten menggunakan header/konten serta metadata host media saat validasi; jangan hanya mengandalkan ekstensi berkas semata. Pemindaian sumber melewatkan blok kode contoh dan sintaks gambar sebaris (*inline*), tetapi mungkin masih menyertakan URL contoh mentah dan melewatkan sematan Markdown kompleks atau sematan runtime. Pertahankan bukti sumber dan tinjau kembali sebelum melakukan penangkapan.

Catatan ekstraksi di masa mendatang harus mencakup ID sumber daya, URL asli, judul, penulis/tanggal jika tersedia, lokasi sumber, asal-usul akuisisi (*provenance*), versi modul ekstraktor, status ekstraksi, serta nomor halaman atau stempel waktu untuk setiap segmen teks yang dapat diindeks. Simpan hash berkas asli dan hash teks hasil ekstraksi setelah data byte fisik tersedia; jangan mengarang nilai hash untuk sumber daya yang masih mengantre. Jangan menyatakan kesiapan pencarian sebelum proses ekstraksi dan pengindeksan berhasil diverifikasi.
