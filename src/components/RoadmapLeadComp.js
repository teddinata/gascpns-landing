import React, { useRef, useState } from "react";
import { trackEvent } from "../utils/tracking";

const PHASES = [
  {
    title: "Audit skor awal",
    desc: "Kerjakan satu tryout gratis untuk tahu posisi TWK, TIU, dan TKP-mu sebelum menyusun jadwal belajar.",
  },
  {
    title: "Drilling materi berbobot tinggi",
    desc: "Silogisme, numerik cepat, penalaran UUD 1945 dan Pancasila, serta pola jawaban TKP poin 5.",
  },
  {
    title: "Tahan 100 menit penuh",
    desc: "Biasakan memutuskan di bawah 54 detik per soal supaya tidak panik di 20 soal terakhir.",
  },
  {
    title: "Ukur ulang, lalu pilih formasi",
    desc: "Bandingkan skor tryout terakhirmu dengan zona aman tiap jenis instansi di Kalkulator SKD, lalu pilih formasi yang paling realistis.",
  },
];

const SEGMENTS = [
  "Fresh graduate S1/D3",
  "Karyawan swasta, mau pindah karier",
  "Pernah ikut CPNS, mau coba lagi di 2027",
];

const WA_PATTERN = /^(\+62|62|0)8[1-9][0-9]{7,11}$/;

const RoadmapLeadComp = () => {
  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [segment, setSegment] = useState(SEGMENTS[0]);
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const nameRef = useRef(null);
  const waRef = useRef(null);

  const cleanWa = whatsapp.replace(/[\s-]/g, "");
  const nameInvalid = name.trim().length < 2;
  const waInvalid = !WA_PATTERN.test(cleanWa);
  const nameError = touched.name && nameInvalid ? "Tulis nama lengkap, minimal 2 huruf." : "";
  const waError =
    touched.whatsapp && waInvalid
      ? "Nomor belum valid. Pakai nomor WhatsApp Indonesia, contoh 081234567890."
      : "";

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched({ name: true, whatsapp: true });
    if (nameInvalid) {
      nameRef.current?.focus();
      return;
    }
    if (waInvalid) {
      waRef.current?.focus();
      return;
    }
    setSubmitted(true);
    trackEvent("early_bird_lead_submit", { segment });
  };

  const waMessage = encodeURIComponent(
    `Halo Admin GASCPNS! Saya ${name.trim()} (${segment}), nomor ${cleanWa}. Saya mau tanya persiapan CPNS 2027 dan akses tryout gratis.`
  );

  return (
    <section id="roadmap-2027" className="band band-paper" aria-labelledby="roadmap-title">
      <div className="wrap roadmap-grid">
        <div className="roadmap">
          <h2 id="roadmap-title" className="section-title">
            Empat fase sebelum pendaftaran 2027 dibuka.
          </h2>
          <p className="section-lead">
            Jangan menunggu pengumuman formasi baru mulai belajar. Saat
            pendaftaran dibuka, skormu seharusnya sudah di atas 420.
          </p>

          <ol className="phases">
            {PHASES.map((p, i) => (
              <li key={p.title} className="phase">
                <span className="numbox numbox-static" aria-hidden="true">
                  {i + 1}
                </span>
                <div>
                  <h3 className="phase-title">
                    <span className="visually-hidden">Fase {i + 1}: </span>
                    {p.title}
                  </h3>
                  <p className="phase-text">{p.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="lead">
          <img
            className="lead-tutors"
            src="/tutor-duo.png"
            alt="Dua tutor GASCPNS berseragam ASN, berdiri bersedekap"
            width="529"
            height="760"
            loading="lazy"
          />
          <div className="lead-card">
            <h3 className="lead-title">Tanya admin soal persiapan CPNS 2027</h3>
            <p className="lead-text">
              Isi data singkat ini, lalu lanjutkan percakapan dengan admin
              GASCPNS lewat WhatsApp untuk info persiapan CPNS 2027 dan akses
              tryout gratis.
            </p>

            {!submitted ? (
              <form onSubmit={handleSubmit} noValidate aria-label="Data untuk admin GASCPNS">
                <div className="field">
                  <label htmlFor="lead-name">Nama lengkap</label>
                  <input
                    ref={nameRef}
                    id="lead-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    onBlur={() => setTouched((t) => ({ ...t, name: true }))}
                    aria-invalid={nameError ? "true" : undefined}
                    aria-describedby={nameError ? "lead-name-error" : undefined}
                    placeholder="Nama sesuai KTP"
                  />
                  {nameError && (
                    <p id="lead-name-error" className="field-error">
                      {nameError}
                    </p>
                  )}
                </div>

                <div className="field">
                  <label htmlFor="lead-wa">Nomor WhatsApp</label>
                  <input
                    ref={waRef}
                    id="lead-wa"
                    name="tel"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    required
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    onBlur={() => setTouched((t) => ({ ...t, whatsapp: true }))}
                    aria-invalid={waError ? "true" : undefined}
                    aria-describedby={waError ? "lead-wa-hint lead-wa-error" : "lead-wa-hint"}
                    placeholder="08xxxxxxxxxx"
                  />
                  <p id="lead-wa-hint" className="field-hint">
                    Hanya untuk info tryout dan jadwal CPNS 2027.
                  </p>
                  {waError && (
                    <p id="lead-wa-error" className="field-error">
                      {waError}
                    </p>
                  )}
                </div>

                <fieldset className="field segments">
                  <legend>Kamu yang mana?</legend>
                  {SEGMENTS.map((s) => (
                    <label key={s} className={`segment ${segment === s ? "is-active" : ""}`}>
                      <input
                        type="radio"
                        name="cpns_segment"
                        value={s}
                        checked={segment === s}
                        onChange={(e) => setSegment(e.target.value)}
                      />
                      <span>{s}</span>
                    </label>
                  ))}
                </fieldset>

                <button type="submit" className="btn btn-blue btn-lg btn-block">
                  Lanjut ke WhatsApp admin
                </button>
              </form>
            ) : (
              <div className="lead-done" role="status">
                <h4 className="lead-done-title">Satu langkah lagi, {name.trim()}.</h4>
                <p>
                  Datamu belum terkirim ke kami. Tekan tombol di bawah untuk
                  mengirim pesan ke admin lewat WhatsApp.
                </p>
                <a
                  href={`https://wa.me/6285155095022?text=${waMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-gold btn-lg btn-block"
                  onClick={() => trackEvent("tryout_cta_click", { location: "lead_whatsapp" })}
                >
                  Kirim pesan ke admin via WhatsApp
                </a>
                <a
                  href="https://app.gascpns.id/register?utm_source=landing&utm_medium=lead_magnet&utm_campaign=cpns2027"
                  className="btn btn-white btn-block"
                  onClick={() => trackEvent("tryout_cta_click", { location: "lead_register" })}
                >
                  Atau langsung buat akun tryout
                </a>
                <button type="button" className="link-btn" onClick={() => setSubmitted(false)}>
                  Ubah data
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapLeadComp;
