# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Calon peserta seleksi CPNS 2027 di Indonesia yang mulai bersiap sebelum pengumuman resmi BKN. Tiga segmen yang sudah dipakai tim marketing:

- Fresh graduate S1/D3: belum pernah merasakan CAT BKN, bingung mulai dari mana.
- Karyawan swasta / pindah karier: waktu belajar sempit (malam, sela kerja), mayoritas akses dari HP.
- Peserta rematch: pernah lolos passing grade tapi kalah peringkat, butuh selisih skor yang konkret.

Pekerjaan mereka di landing: memahami seberapa jauh posisi mereka dari target SKD, lalu mulai latihan (daftar akun tryout gratis, gabung Telegram, atau kirim data ke admin WhatsApp).

## Product Purpose

GASCPNS adalah platform tryout CAT SKD (TWK, TIU, TKP) dengan simulasi bertimer dan pembahasan. Aplikasi utama ada di app.gascpns.id; landing gascpns.id bertugas mengubah pengunjung dari iklan/sosial menjadi akun terdaftar dan lead WhatsApp untuk kampanye CPNS 2027.

## Positioning

Landing ini membuktikan, bukan menjanjikan: pengunjung langsung mengerjakan soal ala CAT dan menghitung jarak skornya ke zona aman instansi sebelum diminta mendaftar.

## Operating Context

- Trafik utama dari TikTok, Instagram Reels/Ads, dan Telegram dengan parameter UTM `utm_campaign=cpns2027`.
- Event `dataLayer` (GTM `GTM-PGPSZPRL`, GA4 `G-HK02RGWEX6`, Google Ads `AW-358020386`): `cat_hook_complete`, `score_calc_used`, `early_bird_lead_submit`, `tryout_cta_click`, lewat `src/utils/tracking.js`.
- Paket tryout dimuat dari `https://api.gascpns.id/api/v1/tryout/on-sale`.
- Folder `build/` di-commit dan dipakai untuk deploy.

## Capabilities and Constraints

- Stack: Create React App (react-scripts 5), React 18.
- Fitur landing: Simulasi Kilat 3 soal (TWK, TIU, TKP), Kalkulator SKD dengan ambang batas dan zona aman per jenis instansi, roadmap 4 fase, form lead (nama, WhatsApp, segmen) yang diteruskan ke WhatsApp admin, daftar paket tryout dari API, testimoni alumni.
- Format CAT SKD: 110 soal dalam 100 menit (TWK 30, TIU 35, TKP 45), skor maksimal 550 (150/175/225).
- Ambang batas yang dipakai: TWK 65, TIU 80, TKP 166 (seleksi CPNS terakhir). Ambang 2027 belum diumumkan.
- Zona aman (Pusat 425, Pemda 395, Teknis/Kesehatan/Guru 405) berasal dari rekap skor nyata, dikonfirmasi pemilik produk 2026-11-26.
- Form lead belum punya backend: submit hanya validasi + tracking + tautan WhatsApp prefilled.

## Brand Commitments

- Nama: GASCPNS. Logo biru (`public/logo-gascpns-biru.png`) dan putih (`public/logo-gascpns-putih.png`).
- Palet yang wajib dipertahankan: cyan `#0ba7e3`, biru `#0066cc`, emas `#ffd700`, navy `#293149`, tinta `#0b0707`.
- Gaya visual dipin pemilik: neobrutalism, tetapi tidak kaku dan tidak melelahkan mata.
- Foto tutor berseragam ASN: `public/pramana-transparent.png`, `public/pramana-tita.PNG`.
- Bahasa: Indonesia, sapaan "kamu", istilah peserta: "pejuang NIP".

## Evidence on Hand

- Testimoni alumni nyata (dikonfirmasi 2026-11-26): Amelia P. (Kemenkeu 2024), Budi S. (ATR/BPN 2024), Siti N. (Kemendikbud 2024), Ahmad F. (Kemenkes 2024), beserta capaian masing-masing. Tidak ada foto; avatar ilustrasi bukan foto mereka.
- Angka 10.000+ pengguna, 95% lolos passing grade, dan rating 4.9/5 BELUM terverifikasi: jangan ditampilkan sampai ada sumber.
- Kontak: Instagram @gascpns, Telegram t.me/gascpns2024, WhatsApp 6285155095022 dan 6285183002434, alamat Jl. Bawean no. 119, Gunungsimping, Cilacap Tengah, Cilacap.

## Product Principles

1. Coba dulu, daftar kemudian: setiap ajakan daftar didahului sesuatu yang bisa dikerjakan di halaman.
2. Angka hanya dari sumber: aturan BKN, rekap skor nyata, atau tidak ditampilkan.
3. Ramah HP dan sesi singkat: pengunjung datang dari feed sosial dan bisa pergi kapan saja.
4. Jarak skor yang konkret mengalahkan motivasi umum.

## Accessibility & Inclusion

WCAG 2.2 AA. Banyak pengunjung memakai HP kelas menengah di jaringan seluler: halaman harus ringan dan bisa dipakai dengan satu jempol.
