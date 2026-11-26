import React from "react";
import CatPreviewHookComp from "./CatPreviewHookComp";
import { trackEvent } from "../utils/tracking";
import { SUBTESTS } from "../utils/skd";

const HeroComp = () => {
  return (
    <section id="hero" className="hero">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <h1 className="hero-title">
            Di CAT BKN, satu soal cuma dapat{" "}
            <span className="mark">54 detik</span>.
          </h1>

          <p className="hero-lead">
            110 soal dalam 100 menit. Banyak peserta gugur bukan karena tidak
            belajar, tapi karena kehabisan waktu. Rasakan tekanannya sekarang:
            tiga soal TWK, TIU, dan TKP, langsung dinilai, tanpa daftar.
          </p>

          <div className="hero-actions">
            <a
              href="https://app.gascpns.id/register?utm_source=landing&utm_medium=hero&utm_campaign=cpns2027"
              className="btn btn-gold btn-lg"
              onClick={() =>
                trackEvent("tryout_cta_click", { location: "hero_primary" })
              }
            >
              Klaim tryout gratis
            </a>
            <a
              href="#simulasi-kilat"
              className="btn btn-white btn-lg hero-try"
              onClick={() =>
                trackEvent("tryout_cta_click", { location: "hero_mini_cat" })
              }
            >
              Coba 3 soal dulu
            </a>
          </div>
        </div>

        <div className="hero-exam">
          <CatPreviewHookComp />
        </div>

        <figure className="skd-strip" aria-labelledby="skd-strip-caption">
          <div className="skd-boxes" aria-hidden="true">
            {SUBTESTS.map((s) =>
              Array.from({ length: s.questions }, (_, i) => (
                <span key={`${s.key}-${i}`} className={`skd-box tone-${s.key}`} />
              ))
            )}
          </div>
          <figcaption id="skd-strip-caption" className="skd-legend">
            {SUBTESTS.map((s) => (
              <span key={s.key} className="skd-legend-item">
                <span className={`skd-swatch tone-${s.key}`} aria-hidden="true" />
                <strong>{s.key.toUpperCase()}</strong> {s.questions} soal
              </span>
            ))}
            <span className="skd-legend-note">1 kotak = 1 soal SKD</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default HeroComp;
