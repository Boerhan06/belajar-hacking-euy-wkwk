<div align="center">

<img src="public/logo.jpg" width="120" alt="NikoCode Logo">

# 🐱 NikoCode Web (`web/`)

**Antarmuka Kursus Keamanan Siber Lokal — Next.js · TypeScript · Tailwind CSS · Lucide · Framer Motion**

</div>

---

## 📌 Tentang Aplikasi Ini

Folder `web/` adalah aplikasi pembelajaran interaktif yang dibangun sebagai antarmuka kursus modern untuk membaca dan mempelajari materi dari repositori **[rmusser01/Infosec_Reference](https://github.com/rmusser01/Infosec_Reference)** (berlisensi **MIT License**).

### Fitur Utama:
- **Dashboard Bento**: Target harian (*Daily Goal*), *Streak*, total XP, dan progress bar 4 fase belajar.
- **Pembaca Materi (`/materi`)**: Tab **Ringkasan & Pelajaran Inti** berbahasa Indonesia + Tab **Daftar Referensi Lengkap** langsung dari berkas Markdown `../Infosec_Reference/Draft/*.md`.
- **Kuis Interaktif (`/kuis`)**: Latihan soal pilihan ganda dengan pembahasan langsung.
- **Tanya Jawab (`/tanya-jawab`)**: FAQ keamanan siber + catatan Q&A pribadi (*localStorage*).
- **Contekan Cepat (`/contekan`)**: Perintah terminal siap salin untuk latihan di lab VM.

---

## 🚀 Perintah Menjalankan

```bash
# Install dependensi
npm install

# Jalankan mode development
npm run dev

# Build production & jalankan
npm run build
npm run start
```

Lalu buka **[http://localhost:3000](http://localhost:3000)** di browser Anda.

---

## ⚖️ Lisensi & Atribusi

Materi referensi yang ditampilkan berasal dari **[rmusser01/Infosec_Reference](https://github.com/rmusser01/Infosec_Reference)** (*Copyright (c) 2017 Robert Musser*, **MIT License**). Seluruh modifikasi dilakukan untuk kepentingan pembelajaran pribadi dan komunitas sesuai ketentuan lisensi MIT.
