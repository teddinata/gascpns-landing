import React from "react";
import { SUBTESTS } from "../utils/skd";

const FEATURES = [
  {
    key: "A",
    title: "Tryout TWK, TIU, TKP dengan penilaian otomatis",
    description:
      "Kerjakan dengan timer, lalu skormu langsung dihitung tanpa menunggu koreksi manual.",
  },
  {
    key: "B",
    title: "Soal dari tim ahli, dengan pembahasan lengkap",
    description:
      "Soal disusun tim ahli mengikuti format dan persyaratan CPNS terbaru, dan setiap soal dibahas.",
  },
  {
    key: "C",
    title: "Monitoring dan evaluasi",
    description:
      "Lacak kemajuanmu dari tryout ke tryout dan temukan area terlemah yang perlu diperbaiki.",
  },
  {
    key: "D",
    title: "Dari HP atau laptop, jam berapa pun",
    description:
      "Bank soal terus diperbarui. Tidak perlu datang ke tempat tertentu, cocok untuk yang masih kuliah atau bekerja.",
  },
];

const ANSWERED = 41;

const ContentComp = () => {
  let n = 0;
  return (
    <section id="content" className="band band-white" aria-labelledby="content-title">
      <div className="wrap features-grid">
        <div className="features-head">
          <h2 id="content-title" className="section-title">
            Yang kamu kerjakan setelah daftar.
          </h2>
          <p className="section-lead">
            Simulasi kilat tadi hanya 3 soal; SKD asli berisi 110. Di
            aplikasi, kamu mengerjakan tryout lengkap dengan pembahasan dan
            analisis hasil.
          </p>
        </div>

        <div className="sheet">
          <div className="sheet-head">
            <span className="sheet-title">Tryout SKD · 110 soal</span>
            <span className="exam-timer">
              <span className="exam-timer-label">Sisa</span>
              <span className="num">63:12</span>
            </span>
          </div>

          <div className="sheet-grid" aria-hidden="true">
            {SUBTESTS.map((s) =>
              Array.from({ length: s.questions }, () => {
                n += 1;
                const state = n <= ANSWERED ? "is-done" : n === ANSWERED + 1 ? "is-current" : "";
                return (
                  <span key={n} className={`sheet-box ${state}`}>
                    {n}
                  </span>
                );
              })
            )}
          </div>
          <p className="sheet-caption">
            Ilustrasi format SKD, bukan tangkapan layar aplikasi: 41 soal terjawab, sisa 69 soal dalam 63 menit.
          </p>

          <ul className="sheet-features">
            {FEATURES.map((f) => (
              <li key={f.key} className="sheet-feature">
                <span className="option-key" aria-hidden="true">
                  {f.key}
                </span>
                <div>
                  <h3 className="feature-title">{f.title}</h3>
                  <p className="feature-text">{f.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ContentComp;
