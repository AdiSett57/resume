# Adi Setiawan — Editorial Tech Portfolio

Prototype redesign portofolio statis, responsif, dan bilingual **English (default) / Bahasa Indonesia**. Cocok untuk GitHub Pages (`/resume/`) tanpa backend, database, atau layanan terjemahan.

## Fitur

- Konsep editorial minimalis: off-white, navy, dan aksen gold.
- EN / ID switch di navbar desktop dan mobile.
- Bahasa default English; pilihan disimpan pada browser (`localStorage` key: `adi-portfolio-language`).
- Terjemahan langsung untuk section, resume, form, dan kartu project tanpa reload.
- Navigasi sticky, menu mobile, filter portfolio, dan preview dalam dialog.
- AI Integration, RAG, n8n Automation, dan Prompt Engineering.
- Form kontak berbasis **mailto:** (membuka aplikasi email, **bukan** mengirim otomatis).
- Semua asset lokal dan path relatif untuk kompatibilitas GitHub Pages.
- CSS hasil kompilasi **Tailwind CSS v4 + custom CSS**; tanpa Tailwind CDN di runtime.

## Jalankan

1. Ekstrak ZIP.
2. Buka `index.html`, atau gunakan local server:

   ```bash
   python -m http.server 8000
   ```

3. Buka `http://localhost:8000`.

## Deploy ke GitHub Pages

1. Cadangkan isi repository portofolio lama terlebih dahulu (disarankan buat branch `backup-portfolio`).
2. Salin **isi folder** `adi-portfolio-redesign` (bukan folder induknya) ke root repository `resume`.
3. Commit dan push ke branch publikasi yang digunakan.
4. Di GitHub: **Settings → Pages**; gunakan *Deploy from a branch*, lalu pilih branch dan folder **/(root)** yang sesuai.
5. Buka `https://adisett57.github.io/resume/` setelah GitHub Pages menyelesaikan publikasi.

**Catatan:** ZIP ini tidak mengubah repository atau website publik secara otomatis.

## Cara mengedit

- **Konten EN/ID dan project:** `assets/js/app.js`, objek `translations` dan array `projects`.
- **Susunan halaman:** `index.html`.
- **CSS:** `src/custom.css`; hasil build siap pakai: `assets/css/site.css`.
- **Foto & gambar:** `assets/images/`.

Untuk membangun ulang CSS setelah perubahan:

```bash
npm install
npm run build:css
```

File `assets/css/site.css` sudah tersedia sehingga **tidak perlu menjalankan npm** untuk langsung mempublikasikannya.

## Data yang perlu diperiksa sebelum dipublikasikan

Tampilan dibuat berdasarkan **screenshot website lama** karena repository/sumber halaman live tidak bisa diakses secara penuh pada sesi pembuatan.

- **Foto profil:** merupakan hasil crop dari screenshot lama, sehingga kualitasnya terbatas. Ganti `assets/images/profile-original.webp` dengan foto resolusi asli (atau sesuaikan path di HTML).
- **Project:** ada 10 gambar crop screenshot yang dipakai sebagai preview, dengan **judul deskriptif sementara**, bukan nama project yang sudah terverifikasi. Cocokkan nama, ringkasan, teknologi, dan urutan dengan data asli sebelum rilis.
- **Pengalaman:** role dan deskripsi ringkas dari screenshot dipertahankan, tetapi **nama legal perusahaan dan periode kerja belum bisa diverifikasi**. Prototype memakai `Kokola Group` sebagai nama kelompok untuk dua entry.
- **Pendidikan:** universitas, bidang, dan periode mengikuti informasi yang tampak pada screenshot; mohon cek ejaan final.
- **Sosial media:** GitHub dan WhatsApp sudah tersedia. Tambahkan URL Twitter, Facebook, Instagram, atau LinkedIn yang benar jika ingin menampilkan seluruh ikon sosial lama.
- **Kontak:** alamat email dan nomor WhatsApp diambil dari informasi yang ditampilkan dalam screenshot. Periksa kembali sebelum publikasi.
- **Form kontak:** menggunakan `mailto:` karena GitHub Pages tidak menjalankan backend. Jangan menganggap klik tombol berarti pesan sudah terkirim; user harus mengirimnya dari aplikasi email.

## QA yang dilakukan

- Render pada viewport 1440 px desktop dan 390 px mobile.
- Default EN dan switch ke ID: berfungsi.
- Semua 10 proyek muncul; filter mobile menghasilkan 2 proyek.
- Dialog project buka/tutup: berfungsi.
- Navbar mobile buka/tutup: berfungsi.
- Tidak ditemukan error JavaScript pada pengujian browser.
- Tidak ada horizontal overflow pada lebar 390 px.
- Pergantian bahasa bertahan via `localStorage` pada origin normal (mekanisme standar browser; pengujian screenshot dengan origin `about:blank` tidak dapat mensimulasikan reload origin).
