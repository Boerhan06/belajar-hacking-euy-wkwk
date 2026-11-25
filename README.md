<div align="center">

<img src="web/public/logo.jpg" width="140" alt="StarSec Fast-Track Logo" style="border-radius: 24px;">

# 🛡️ StarSec Fast-Track — Kursus & Referensi Keamanan Siber

**Platform Pembelajaran Keamanan Informasi (InfoSec) Lokal Berbasis Next.js, Tailwind CSS, & Koleksi Referensi Terkurasi**

[![License: MIT](https://img.shields.io/badge/License-MIT-FFB067?style=for-the-badge)](LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js_16-1E1B18?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-FF9472?style=for-the-badge&logo=tailwind-css&logoColor=1E1B18)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-FFD479?style=for-the-badge&logo=typescript&logoColor=1E1B18)](https://www.typescriptlang.org/)

[🚀 Jalankan Web](#-cara-menjalankan-secara-lokal) · [🗺️ Fitur Kursus](#-fitur-web-pembelajaran) · [📚 Kurikulum](#-kurikulum-4-fase-belajar-cepat) · [⚖️ Lisensi & Atribusi](#-atribusi--lisensi-mit)

</div>

---

> [!IMPORTANT]
> **Etika & Keamanan Belajar:** Seluruh materi, kuis, dan perintah di dalam proyek ini dibuat **khusus untuk tujuan edukasi, riset, dan pertahanan sistem**. Jangan pernah mencoba teknik pengujian keamanan pada sistem atau jaringan tanpa izin tertulis yang sah. Gunakan selalu **Virtual Machine (VM) terisolasi** atau platform latihan legal (*TryHackMe, Hack The Box, OverTheWire*).

---

## 📌 Keterangan Modifikasi & Sumber Asli

Proyek ini merupakan **hasil modifikasi dan pengembangan** dari repositori sumber terbuka **[rmusser01/Infosec_Reference](https://github.com/rmusser01/Infosec_Reference)** karya **Robert Musser** (berlisensi **MIT License**).

### Apa Saja yang Dimodifikasi & Ditambahkan?
1. **Lokalisasi Bahasa Indonesia**: Penerjemahan seluruh berkas `README.md`, panduan kontribusi (`CONTRIBUTING.md`), serta dokumentasi teknis (`docs/navigation.md`, `docs/archiving.md`, dll.) agar mudah dipelajari.
2. **Aplikasi Web Kursus Lokal (`web/`)**: Pembangunan antarmuka pembelajaran interaktif menggunakan **Next.js (TypeScript)**, **Tailwind CSS**, **Lucide Icons**, dan **Framer Motion** dengan desain *Flat Bento* bertema *Orange Pastel*.
3. **Kurikulum Belajar Cepat (*Fast-Track*)**: Penyusunan ulang 50+ topik menjadi **4 Fase Terstruktur**, dilengkapi ringkasan pelajaran inti bahasa Indonesia, kuis interaktif, tanya jawab/catatan lokal, serta contekan perintah terminal.

Seluruh hak cipta dan pemberitahuan lisensi asli tetap dipertahankan sepenuhnya sesuai ketentuan **MIT License** (lihat [LICENSE](LICENSE)).

---

## ✨ Fitur Web Pembelajaran

| Halaman | Fungsi Utama |
| :--- | :--- |
| **🏠 Beranda Bento (`/`)** | Pelacak target harian (*Daily Goal* Sen–Min), penghitung *Streak* & XP, serta progres bar untuk setiap fase belajar. |
| **📖 Materi & Reader (`/materi`)** | Membaca langsung 50+ berkas Markdown dari `Infosec_Reference/Draft/` dengan mode **Ringkasan Pelajaran Inti** & **Daftar Referensi Lengkap**. |
| **❓ Kuis Interaktif (`/kuis`)** | Soal latihan pilihan ganda per fase kurikulum lengkap dengan koreksi instan, pembahasan bahasa Indonesia, dan skor terbaik. |
| **💬 Tanya Jawab (`/tanya-jawab`)** | Kumpulan FAQ esensial keamanan siber + fitur simpan pertanyaan & catatan pribadimu di browser. |
| **⌨️ Contekan Cepat (`/contekan`)** | Kumpulan perintah penting (`Nmap`, `ffuf`, `SQLMap`, `Linux Privesc`, `Hashcat`, `Tcpdump`) dengan tombol salin sekali klik. |

---

## 🗺️ Kurikulum 4 Fase Belajar Cepat

1. **Fase 1 — Fondasi & Lab**: Dasar InfoSec, Membangun Lab VM Aman, Serangan & Pertahanan Jaringan, System Internals, Daftar Port.
2. **Fase 2 — Praktik Dasar**: Keamanan Aplikasi Web (OWASP), OSINT, Keamanan Password, Kriptografi & Enkripsi.
3. **Fase 3 — Spesialisasi Jalur**: Red Teaming & Active Directory, Privilege Escalation, Blue Team Defense, Threat Hunting & DFIR, Reverse Engineering & Malware.
4. **Fase 4 — Pendalaman & Karier**: Keamanan Cloud & Containers, Pelaporan Pentest, Latihan CTF Legal, dan Strategi Karier InfoSec.

---

## 🚀 Cara Menjalankan Secara Lokal

Pastikan **Node.js** (disarankan v20+ atau v24) sudah terpasang di laptop Anda.

### 1. Jalankan Web Pembelajaran
```bash
# Masuk ke direktori proyek
cd belajar-hacking-euy-wkwk

# Install dependensi web (cukup sekali di awal)
npm --prefix web install

# Jalankan mode development
npm run dev

# Atau build & jalankan mode production (lebih cepat)
npm run build
npm run start
```
Buka browser dan kunjungi **[http://localhost:3000](http://localhost:3000)**.

### 2. Push Pembaruan ke GitHub
```bash
npm run push
# atau dengan pesan commit khusus:
npm run push -- "Update catatan belajar"
```

---

## ⚖️ Atribusi & Lisensi (MIT)

- **Repositori Asli**: [rmusser01/Infosec_Reference](https://github.com/rmusser01/Infosec_Reference) — *Copyright (c) 2017 Robert Musser*
- **Lisensi**: Dirilis di bawah **[MIT License](LICENSE)** — bebas digunakan, dimodifikasi, dan dibagikan untuk tujuan pembelajaran dengan tetap menyertakan atribusi dan pemberitahuan lisensi asli.
- **Situs Resmi Referensi Asli**: [rmusser.net/docs](https://rmusser.net/docs)
