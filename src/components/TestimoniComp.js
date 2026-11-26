import React from "react";

// Verbatim alumni quotes as supplied by the owner; do not paraphrase.
const TESTIMONIALS = [
  {
    name: "Amelia P.",
    role: "Lulus CPNS Kemenkeu 2024",
    achievement: "Ranking 5 Nasional",
    text: "Min saya mau mengucapkan terimakasih banyak kepada para tutor dan yang memiliki platform GASCPNS. Berkat bimbel ini, saya LULUS CPNS di Kementerian Keuangan. Semoga saya bisa lancar pemberkasan hingga tahap akhir dan penetapan NIP. Sekali lagi terimakasih banyak min!",
  },
  {
    name: "Budi S.",
    role: "Lulus CPNS ATR/BPN 2024",
    achievement: "Skor TWK 95",
    text: "Alhamdulillah berkat tryout GASCPNS yang soalnya mirip dengan ujian asli, saya bisa lulus CPNS di Kementerian ATR/BPN. Pembahasannya sangat detail dan membantu saya memahami konsep dengan baik. Terima kasih GASCPNS!",
  },
  {
    name: "Siti N.",
    role: "Lulus CPNS Kemendikbud 2024",
    achievement: "Passing Grade 420",
    text: "Platform GASCPNS sangat membantu persiapan saya. Soal-soalnya up to date dan sistemnya user-friendly. Saya berhasil lulus CPNS Kemendikbud dengan passing grade tinggi. Recommended banget untuk yang mau persiapan CPNS!",
  },
  {
    name: "Ahmad F.",
    role: "Lulus CPNS Kemenkes 2024",
    achievement: "Skor TIU 100",
    text: "Tryout online GASCPNS benar-benar membantu saya dalam persiapan CPNS. Analisis hasil yang detail membuat saya tahu kelemahan dan bisa fokus belajar. Alhamdulillah lulus di Kementerian Kesehatan. Terima kasih GASCPNS!",
  },
];

const initials = (name) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .replace(/[^A-Z]/gi, "")
    .slice(0, 2);

const Quote = ({ t, featured }) => (
  <figure className={`quote ${featured ? "quote-featured" : ""}`}>
    <span className="quote-achievement">{t.achievement}</span>
    <blockquote>
      <p>{t.text}</p>
    </blockquote>
    <figcaption>
      <span className="quote-initials" aria-hidden="true">
        {initials(t.name)}
      </span>
      <span>
        <strong>{t.name}</strong>
        <span className="quote-role">{t.role}</span>
      </span>
    </figcaption>
  </figure>
);

const TestimoniComp = () => {
  const [first, ...rest] = TESTIMONIALS;
  return (
    <section id="testimoni" className="band band-white" aria-labelledby="testi-title">
      <div className="wrap">
        <h2 id="testi-title" className="section-title testi-title">
          Mereka berlatih di sini, lalu lulus CPNS 2024.
        </h2>
        <div className="testi-grid">
          <Quote t={first} featured />
          {rest.map((t) => (
            <Quote key={t.name} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimoniComp;
