# Panduan Preservasi dan Pemrosesan Non-Teks

Panduan ini mengatur preservasi artikel web dan gambar artikel ke dalam format WARC, serta menempatkan PDF, video, slide, audio, dan sumber daya non-teks lainnya ke dalam antrean untuk akuisisi/ekstraksi di masa mendatang. Menyimpan halaman arahan (*landing page*) video tidak serta-merta menyimpan berkas videonya. Belum ada akuisisi media massal, OCR, transkripsi, atau pengindeksan konten hasil ekstraksi yang dijalankan.

**Status Saat Ini — 26 Oktober 2026:** Kumpulan penangkapan lokal (*local capture batches*) dan pengiriman ke Internet Archive sedang dijeda selagi peningkatan navigasi ditinjau. Alur kerja untuk tautan tambahan hanya bersifat manual; membuka/memperbarui PR atau mendorong perubahan sumber daya tidak akan mengirimkan URL secara otomatis. Arsip dan bukti penerimaan (*receipts*) yang sudah ada tetap tersedia. Perintah di bawah ini mendokumentasikan langkah yang dapat digunakan saat pengarsipan dilanjutkan, dan bukan merupakan prasyarat wajib untuk mengajukan PR.

## Perintah

- `npm run resources:generate`: menghasilkan kembali inventaris bersama dan tampilan berkas non-teks terpisah.
- `npm run external:check -- --limit 100 --offset 0 --output external-report.json`: memeriksa ketersediaan secara terbatas; satu batch bukan merupakan audit lengkap.
- `npm run archive:plan -- --evidence external-report.json --output archive-plan.json`: menyusun rute baris inventaris menggunakan bukti respons opsional. Perencanaan tidak melakukan capture atau verifikasi byte.
- `npm run archive:pilot -- --url https://danluu.com/sounds-easy/ --limit 1`: menangkap URL inventaris yang ada. Tanpa `--url`, baris dipilih menggunakan `--offset`; `--limit` default bernilai 3 dan mengizinkan 1–10 baris.
- `npm run archive:verify -- archive-data/PILOT/ATTEMPT`: memeriksa kembali objek yang ada dan bukti pemutaran ulang luring (*offline replay*), menambahkan metadata baru tanpa mengambil ulang atau mengganti rekaman sebelumnya.

## Tautan Baru pada Perubahan dan PR

Pemicunya adalah perubahan pada repositori, bukan saat membuka halaman di peramban. Perintah membandingkan tautan sumber daya di `README.md` dan `Draft/**/*.md` terhadap basis Git. Indeks hasil generasi, referensi gambar, dan contoh kode dikecualikan. Perubahan yang hanya berupa fragmen serta tautan yang dipindahkan atau diulang tidak akan membuat tugas baru; kueri yang berbeda akan diproses. Tautan yang dihapus tidak akan ditangkap.

```sh
# Pratinjau penambahan yang belum atau sudah dikomit relatif terhadap main, tanpa permintaan jaringan:
npm run archive:changes -- --base main

# Tangkap secara lokal dan kirim hingga tiga URL tambahan ke Internet Archive:
npm run archive:changes -- --base main --execute --limit 3

# Lanjutkan tugas Wayback yang ada tanpa pengiriman ulang atau penangkapan lokal baru:
npm run archive:changes -- --resume --execute --wayback-only
```

Repositori lokal ini saat ini menamai cabang utamanya `master`, sehingga gantilah `--base main` menjadi `--base master` untuk contoh di atas sampai ada penggantian nama cabang. Perintah manual menerima referensi perbandingan melalui input `base`.

Gunakan `--base HEAD` (default) untuk perubahan yang belum dikomit, atau `--base BASE_SHA --head HEAD_SHA` untuk perubahan yang sudah dikomit. Ulangi perbandingan yang sama untuk memproses tautan lainnya, maksimal 10 tautan per batch. Penangkapan lokal yang sudah terverifikasi akan dihitung ulang hash-nya dan digunakan kembali tanpa mengklaim preservasi permanen. Upaya yang gagal atau selesai sebagian akan tetap dicatat dan tidak diulang secara otomatis; gunakan `archive:pilot -- --url URL` setelah memeriksa penyebab kendalanya. Sumber daya non-teks tetap berada di antrean pemrosesannya masing-masing dan tidak diubah menjadi penangkapan artikel lokal.

Fitur *Save Page Now* merupakan pengiriman publik terpisah atas URL sumber, bukan proses unggah berkas WARC lokal. Cakupan penangkapannya dikendalikan oleh Internet Archive dan tidak bergantung pada penyaringan lokal artikel saja. Protokol anonim ini mengikuti standar [ekstensi resmi Internet Archive](https://github.com/internetarchive/wayback-machine-webextension/blob/master/webextension/scripts/background.js). Tidak diperlukan kunci akun atau *cookie* peramban. ID tugas yang dikirimkan dicatat sebelum dilakukan pemungutan suara (*polling*); status berhasil dengan URL yang cocok (atau URL final dari penangkapan lokal) beserta stempel waktu snapshot akan menghasilkan URL Wayback yang terkonfirmasi. Snapshot kanonikal mempertahankan URL arsip aslinya sementara katalog tetap menampilkan referensi repositori asli. URL berbeda tanpa bukti pengalihan (*redirect*) lokal tetap berstatus belum terkonfirmasi. Batas laju (*rate limit*) menyimpan waktu coba lagi, tugas yang tertunda dilanjutkan berdasarkan ID, dan pengiriman yang meragukan tidak akan diulang secara membabi buta. Tinjau rekaman yang tidak pasti/gagal sebelum mencoba kembali secara eksplisit. Halaman login HTTP 200 atau hasil ketersediaan yang sudah ada sebelumnya tidak dianggap sebagai penyimpanan baru yang berhasil.

Lakukan komit pada berkas `navigation/archive-captures.jsonl`, `navigation/wayback-captures.jsonl`, dan [katalog arsip](archives/README.md) yang digenerasi bersamaan dengan perubahan tautan. Pembaca dapat memanfaatkan katalog dari README repositori apabila tautan asli tidak lagi dapat diakses. Berkas objek lokal tetap berada di dalam direktori `archive-data/` yang diabaikan git; katalog tidak mengekspos tautan sistem berkas lokal.

Alur kerja penambahan tautan hanya tersedia melalui pengiriman manual (*manual dispatch*). Jika dijalankan secara eksplisit, alur ini mengirimkan hingga sepuluh URL baru secara anonim dan mempublikasikan ringkasan tugas beserta tanda terima yang dapat diunduh. Alur ini menggunakan izin repositori baca-saja (*read-only*), tanpa rahasia (*secrets*), dan tanpa eksekusi `pull_request_target`. CI tidak menyimpan WARC lokal ataupun melakukan komit hasil secara otomatis: salin metadata/katalog artefak kembali ke PR dengan menjaga rekaman lokal, atau jalankan perintah secara lokal sebelum melakukan komit. Artefak kedaluwarsa setelah 30 hari; lakukan komit referensi yang telah dikonfirmasi agar tetap dapat ditemukan. Memproses lebih dari sepuluh tautan memerlukan *batch* lokal tambahan. Tugas CI yang tertunda mengharuskan Anda melakukan komit tanda terima dan melanjutkannya secara lokal. Alur kerja arsip ini belum dieksekusi di GitHub Actions; statusnya tetap dijeda untuk PR ini.

## Batasan dan Runtime Penangkapan

Docker diperlukan untuk penangkapan (*capture*), bukan untuk navigasi. Pengembangan desktop telah memasang Browsertrix Crawler 1.15.0 dan mitmproxy 12.3.0. Berkas `navigation/archive-runtime.json` mengunci *digest image* peramban; `tools/archive/Proxy.Dockerfile` mengunci *digest base image* proxy dan warcio 1.8.1. ID *image* fisik dicatat per setiap percobaan penangkapan. Bangun *image* proxy/verifier terlebih dahulu:

```sh
docker build -f tools/archive/Proxy.Dockerfile -t infosec-archive-proxy:12.3.0-warcio1.8.1 tools/archive
npm run archive:pilot -- --url https://danluu.com/sounds-easy/ --limit 1
```

Setiap percobaan memiliki direktori `archive-data/` unik yang diabaikan git. Setelah tahap QA, sistem menyimpan WARC terkompresi asli (HTML, teks artikel, gambar terpilih, dan dependensi rendering yang diperlukan), indeks CDXJ, `capture/article.json` yang berisi teks artikel hasil ekstraksi, serta ringkasan asal-usul/QA kecil. Bundel WACZ ganda, arsip pemutaran ulang (*replay*), luaran penemuan, profil, log, serta sertifikat/kunci proxy sementara akan dibuang. WARC lokal tidak pernah diunggah oleh perintah ini (`publishCaptures: false`); klien Wayback terpisah hanya mengirimkan URL sumber. CA proxy hanya dipercaya di dalam kontainer penangkapan dan tidak pernah dipasang pada sistem operasi induk (*host*).

Kontainer perayapan (*crawl*) menggunakan jaringan internal Docker tanpa port yang dipublikasikan. Satu-satunya proxy keluar (*egress proxy*) menolak alamat non-publik/alamat terjemahan dan mengunci jawaban DNS yang telah diperiksa sembari mempertahankan verifikasi TLS hulu. Pemeriksaan ini mencakup pengalihan dan dependensi berkas. Hanya permintaan GET/HEAD tanpa otentikasi yang diizinkan dalam batas yang telah ditentukan. Pemeriksaan MIME, termasuk bodi pengalihan, memblokir muatan non-teks sebelum perekam menerimanya. Sumber daya yang diblokir tetap menyimpan bukti antrean/asal-usul.

Tahap penemuan (*discovery*) memblokir konten gambar dan mengidentifikasi teks artikel/utama, satu elemen mikrodata eksplisit `articleBody`, atau satu elemen legacy `.post` yang langsung mengikuti `.post-title` dengan judul h1/h2, URL gambar terpilih, gambar SVG, latar belakang gambar, dan sematan media. Penangkapan mengizinkan gambar artikel tersebut, termasuk gambar pemuatan lambat (*lazy loading*), sembari menolak gambar yang tidak terkait, bingkai (*frames*), dan media lainnya. Permintaan skrip/gaya/font/data dibatasi secara ketat hanya pada domain asal artikel; aset pelacak (*tracking*) yang dikenal akan diblokir. Dependensi rendering pihak ketiga yang tidak dikenal dan tata letak yang ambigu memerlukan tinjauan manual. Pendekatan ini merupakan heuristik berbasis DOM/tanda tangan, bukan pengklasifikasi semantik umum. Artikel warisan ganda dan kontainer umum tanpa judul tetap menjadi kasus peninjauan manual; judul galat warisan yang berdekatan diperiksa sebelum menerima konten artikel.

Setelah tahap penemuan selesai, penangkapan dimulai pada URL HTTP(S) final yang tervalidasi. URL asli dan rantai pengalihan yang diamati tetap dicatat dalam data asal-usul. Hal ini menghindari catatan pengalihan Browsertrix yang bodinya dihilangkan namun header Content-Length aslinya tetap ada; pemeriksaan ketat panjang muatan (*payload-length*) tetap aktif. Pemeriksaan ulang menggunakan benih (*seed*) penangkapan aktual yang tercatat dalam snapshot untuk metadata teks.

Uji percontohan (*pilot*) menggunakan satu navigasi peramban berurutan, satu navigasi per host, maksimal 120 detik per fase crawl/QA, dan batas total batch 1 GiB yang digunakan bersama oleh penemuan/penangkapan/pemutaran ulang. Luaran menggunakan tmpfs dengan batas ukuran dan pengambilan *streaming* eksplisit karena perintah salin Docker melewatkan *mount* tmpfs. Ukuran respons, byte jaringan, jumlah permintaan, dan metadata proxy dibatasi secara independen. Pemasangan *image* berada di luar anggaran penangkapan ini. CLI yang disediakan adalah percontohan berbatas, bukan peluncur perayapan skala penuh.

## Verifikasi dan Penyimpanan

Pustaka `warcio` memverifikasi rekaman WARC yang dapat dibaca, digest yang dicatat, dan panjang muatan; *trailer* gzip dan HTTP Content-Length juga diperiksa. Seluruh objek memiliki nilai *checksum* SHA-256. Verifikasi konten memerlukan keberhasilan HTML, kecocokan teks artikel yang diarsipkan, dan setiap gambar yang terpilih. QA Browsertrix berjalan dengan jaringan Docker dinonaktifkan, memerlukan pemutaran ulang teks yang presisi dan respons artikel/gambar yang berhasil. Pelacak yang sengaja dikecualikan mungkin gagal saat luring; kegagalan tersebut tetap dicatat secara transparan. Pengujian ini tidak menguji kesesuaian visual (piksel per piksel). Kegagalan penyaringan/anggaran tidak dapat diselesaikan hanya dengan memeriksa ulang.

Jaga agar status ketersediaan, penangkapan, integritas/konten, pemutaran ulang, penyimpanan lokal, dan Wayback tetap independen satu sama lain. Halaman galat/login/batas laju yang diketahui bukanlah artikel yang lengkap. Upaya yang gagal/sebagian tetap terlihat; upaya coba lagi akan membuat rekaman percobaan baru. CLI penangkapan awal hanya melewati penangkapan yang lengkap, terverifikasi, dan tahan lama setelah menghitung ulang hash objeknya; perintah perubahan juga menggunakan kembali penangkapan lokal yang terverifikasi untuk perubahan tersebut. Pertahankan referensi asli, fragmen, dan pembeda kueri. Perhitungan inventaris lengkap tidak berarti preservasi telah berhasil.

Berkas `retained.json` adalah manifes objek ringkas saat ini; rekaman upaya/verifikasi sebelumnya tetap dicatat sebagai riwayat. Pemeriksaan ulang menghitung hash semua objek yang dipertahankan, memverifikasi kembali WARC utama, dan membandingkan teks/gambar yang diarsipkan. Perintah melaporkan `replayEvidenceSource: recorded-offline-qa`: QA dijalankan sebelum pembersihan dan hasilnya terikat pada hash objek yang dipertahankan. Pemeriksaan ulang tidak menjalankan kembali peramban terhadap arsip QA yang telah dihapus. Objek utama yang berubah atau hilang akan membatalkan integritas dan klaim pemutaran ulang. Pengujian runtime sintetis membuang muatan arsipnya setelah pengujian selesai dan hanya menyimpan ringkasannya.

Belum ada destinasi penyimpanan permanen (*durable destination*) yang dikonfigurasi. Opsi `--primary PATH --backup PATH` memverifikasi salinan kekal eksklusif dan *checksum* pengambilan, menghasilkan `copyState: verified` dan `storageState: copied`; ini belum memenuhi syarat untuk melewati penangkapan preservasi. Jalur objek relatif mempertahankan tata letak CDXJ/arsip. Kelayakan permanen juga memerlukan `durableDestination` yang dikonfigurasi operator dengan `primary`, `backup`, dan `confirmedDurable: true`; adaptor sistem berkas ini memerlukan sistem berkas terpasang (*mounted*) yang berbeda. Fitur ini memverifikasi byte yang diambil, bukan independensi cadangan fisik atau operasi pencadangan. Unggahan ke penyimpanan objek jarak jauh (*remote object store*) belum diimplementasikan. Jangan pernah menetapkan direktori pengujian sementara sebagai penyimpanan permanen.

Batch perubahan lokal saat ini dijeda. Saat dilanjutkan kembali, sistem akan melaporkan `storageState: local`, bukan preservasi permanen. Sebelum menjalankan pengumpulan penuh, tentukan destinasi persisten, verifikasi pemulihan/pemutaran ulang dari objek yang disimpan, dan ukur kapasitas penyimpanan dengan sampel representatif. Pertahankan salinan kedua yang independen atau cadangan yang dapat dipulihkan. Artefak CI yang memiliki masa kedaluwarsa tidak memadai untuk penyimpanan jangka panjang. Lihat `docs/archive-execution.md` untuk hasil dan kasus peninjauan yang belum terselesaikan.

## Pengujian dan Referensi

Perintah `npm test` mencakup pengujian navigasi/arsip dan memerlukan Python 3 untuk pengujian kebijakan pustaka standar saja. Perintah ini tidak mengunduh gambar atau merayap situs langsung. Perintah `npm run archive:test-runtime` secara terpisah menguji artikel statis/JavaScript sintetis, gambar versus iklan/media, pengalihan, dinding akses, pengalihan privat, perutean MIME, dan pemutaran ulang luring melalui kontainer aktual. URL sintetis disajikan secara lokal sebelum resolusi hulu; destinasi privat tidak menerima pengecualian perlindungan produksi. Jalankan pengujian kerusakan/pemotongan berkas warcio asli secara luring:

```sh
docker run --rm --network none --entrypoint python3 -v "$PWD/tools/archive:/tools:ro" -v "$PWD/tests/archive:/tests:ro" infosec-archive-proxy:12.3.0-warcio1.8.1 -B /tests/verify_test.py
```

Antarmuka diperiksa terhadap sumber resmi: [Rilis Browsertrix](https://github.com/webrecorder/browsertrix-crawler/releases/tag/v1.15.0), [Dukungan proxy](https://crawler.docs.browsertrix.com/user-guide/proxies/), [QA Luring](https://crawler.docs.browsertrix.com/user-guide/qa/), [Hook mitmproxy](https://docs.mitmproxy.org/stable/api/events.html), dan [warcio](https://github.com/webrecorder/warcio/releases/tag/v1.8.1).

## Pemrosesan Pencarian Lanjutan

- Berkas PDF: ekstraksi teks dengan nomor halaman dan OCR bila diperlukan.
- Video: peroleh takarir (*captions*) atau transkrip yang tersedia dan pertahankan stempel waktu; tambahkan transkripsi manual jika diperlukan.
- Format lain: konfirmasi tipe berkas dan arahkan ke ekstraktor yang sesuai tanpa mengeksekusi biner yang tidak tepercaya.
- Pertahankan URL asli, semua referensi repositori, asal-usul akuisisi, hash setelah akuisisi, versi ekstraktor, serta referensi halaman/stempel waktu per segmen. Kesiapan pencarian memerlukan verifikasi ekstraksi dan pengindeksan yang tervalidasi, bukan sekadar URL yang dimasukkan ke dalam antrean.

Alur kerja eksternal adalah sampel bergilir mingguan hingga 1.000 baris inventaris, atau batch yang dipilih secara manual. Laporannya mencakup offset yang diperiksa dan ukuran inventaris; ini bukan audit tautan mingguan yang lengkap. Retensi artefak adalah 30 hari khusus untuk laporan ketersediaan ini, bukan untuk preservasi berkas WARC.
