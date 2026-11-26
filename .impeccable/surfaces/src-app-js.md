---
version: 1
slug: "src-app-js"
primary_target: "src/App.js"
related_targets: ["src/components"]
---

# Landing gascpns.id (CPNS 2027)

Scope: seluruh landing single-page (`src/App.js` dan komponen di `src/components/`). Mode: Persuade.

Audience & job: calon peserta CPNS 2027 dari feed TikTok/IG/Telegram, mayoritas di HP. Aksi utama: daftar akun tryout gratis di app.gascpns.id; aksi kedua: kirim data ke WhatsApp admin, gabung Telegram.
Proof: format resmi CAT (110 soal, 100 menit, ambang 65/80/166), zona aman dari rekap skor nyata, 4 testimoni alumni nyata. Tidak ada statistik pengguna.
Constraints: palet GASCPNS (cyan, biru, emas, navy, tinta) dan gaya neobrutalism dipin pemilik; keluhan: versi lama terlalu kaku dan warnanya melelahkan. Event tracking wajib tetap jalan.

## Direction contract

THESIS: Halaman dibuka dengan soal, bukan janji. Pengunjung mengerjakan soal CAT bertimer 54 detik di viewport pertama, lalu mengukur jarak skornya. Menolak susunan kategori: headline + statistik besar + grid fitur + carousel testimoni.

OWN-WORLD: Lembar ujian CAT yang ramah: dasar kertas dingin (#f5f8fa) dan putih, garis tinta 2px, bayangan blok 4px hanya pada yang bisa ditekan atau diangkat. Kotak nomor soal CAT adalah motif: persegi bernomor, terisi biru saat terjawab. Warna subtes konsisten: TWK biru, TIU cyan, TKP emas. Emas hanya untuk aksi utama, stabilo pada angka penting, dan warna subtes TKP; status terpilih memakai biru. Navy hanya untuk dua bidang: kalkulator (angka di atas gelap) dan footer penutup. Bayangan blok dipakai pada permukaan kerja yang berisi kontrol (kartu soal, hasil kalkulator, form) dan tombol; kartu statis datar. Archivo lebar-berat untuk judul, Archivo normal untuk teks, JetBrains Mono hanya untuk timer dan skor.

STORY: Paham bahwa CAT itu soal kecepatan (54 detik/soal) -> merasakan sendiri lewat 3 soal -> lihat jarak skor ke zona aman instansi -> ikuti 4 fase dan klaim tryout gratis / kirim data ke admin -> yakin karena alumni nyata.

FIRST VIEWPORT: Desktop dua kolom. Kiri (5/12): judul besar "Di CAT BKN, satu soal cuma dapat 54 detik." dengan stabilo emas pada "54 detik", subjudul, dua aksi (emas: klaim tryout gratis; putih: coba 3 soal), lalu pita 110 kotak format SKD. Kanan (7/12): kartu Simulasi Kilat yang benar-benar bisa dikerjakan di atas bidang cyan, timer mundur 54 detik per soal. Mobile: judul, aksi, lalu kartu soal langsung di bawahnya.

FORM: Neobrutalism lunak berbasis lembar jawaban CAT, arah dipin pemilik (bukan hasil roll). Signature interaction: timer mundur per soal + kotak nomor soal yang terisi, ditutup cap skor yang jatuh dan kartu skor yang bisa dibagikan ke WhatsApp/IG Story. seed: none (not rolled). Owner pinned the direction in the original request, 2026-11-26: "redesign tampilan landing page gascpns ini menggunakan tema neobrutalism dengan tetap menggunakan color pallete saat ini". SKILL.md: "Honor pinned aesthetics ... palettes"; new-work: "a user- or brief-pinned direction beats the roll, always."

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Unresolved

- Ambang batas resmi 2027 belum ada; angka 65/80/166 diberi label seleksi terakhir.
