import React, { useState } from "react";
import { trackEvent } from "../utils/tracking";
import { SUBTESTS, SKD_MAX } from "../utils/skd";

const FORMASI_TARGETS = [
  {
    id: "pusat",
    label: "Kementerian / pusat",
    safeScore: 425,
    note: "Persaingan paling ketat: Kemenkeu, Kemenkumham, Kejaksaan, dan sejenisnya.",
  },
  {
    id: "pemda",
    label: "Pemprov / pemkab",
    safeScore: 395,
    note: "Target agar masuk 3x jumlah formasi menuju SKB.",
  },
  {
    id: "teknis",
    label: "Teknis, kesehatan, guru",
    safeScore: 405,
    note: "Ranking biasanya dikunci di TIU dan TKP.",
  },
];

const INITIAL = { twk: 85, tiu: 110, tkp: 185 };

const Icon = ({ pass }) =>
  pass ? (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="square" aria-hidden="true">
      <polyline points="4 12 10 18 20 6" />
    </svg>
  ) : (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="square" aria-hidden="true">
      <line x1="6" y1="6" x2="18" y2="18" />
      <line x1="18" y1="6" x2="6" y2="18" />
    </svg>
  );

const ScoreCalculatorComp = () => {
  const [targetId, setTargetId] = useState("pusat");
  const [scores, setScores] = useState(INITIAL);

  const target = FORMASI_TARGETS.find((t) => t.id === targetId) || FORMASI_TARGETS[0];
  const total = scores.twk + scores.tiu + scores.tkp;
  const rows = SUBTESTS.map((s) => ({ ...s, value: scores[s.key], pass: scores[s.key] >= s.min }));
  const passAll = rows.every((r) => r.pass);
  const gap = target.safeScore - total;
  const weakest = [...rows].sort((a, b) => a.value / a.max - b.value / b.max)[0];
  const firstFail = rows.find((r) => !r.pass);
  const focus = firstFail || weakest;

  const choose = (id) => {
    setTargetId(id);
    trackEvent("score_calc_used", { target_formasi: id, total_score: total });
  };

  return (
    <section id="kalkulator-skd" className="band band-navy" aria-labelledby="calc-title">
      <div className="wrap">
        <div className="calc-head">
          <h2 id="calc-title" className="section-title">
            Lolos ambang batas belum tentu lolos ranking.
          </h2>
          <p className="section-lead">
            Yang masuk SKB hanya peringkat teratas, maksimal 3x jumlah formasi.
            Geser skor tryout terakhirmu dan lihat berapa poin lagi menuju zona
            aman instansi incaranmu.
          </p>
        </div>

        <div className="calc-grid">
          <div className="calc-panel">
            <fieldset className="calc-targets">
              <legend className="calc-step">Instansi incaran</legend>
              <div className="target-list">
                {FORMASI_TARGETS.map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    className={`target ${targetId === t.id ? "is-active" : ""}`}
                    aria-pressed={targetId === t.id}
                    onClick={() => choose(t.id)}
                  >
                    <span className="target-name">{t.label}</span>
                    <span className="target-score">
                      Aman <span className="num">{t.safeScore}+</span>
                    </span>
                  </button>
                ))}
              </div>
              <p className="calc-note">{target.note}</p>
            </fieldset>

            <p className="calc-step">Skor tryout terakhirmu</p>
            {rows.map((r) => (
              <div key={r.key} className={`slider tone-${r.key}`}>
                <div className="slider-top">
                  <label htmlFor={`range-${r.key}`}>
                    <strong>{r.key.toUpperCase()}</strong> <span className="slider-name">{r.name}</span>
                  </label>
                  <output htmlFor={`range-${r.key}`} className="slider-value num">
                    {r.value}
                    <small>/{r.max}</small>
                  </output>
                </div>
                <div className="slider-track-wrap">
                  <input
                    id={`range-${r.key}`}
                    type="range"
                    min="0"
                    max={r.max}
                    step={r.step}
                    value={r.value}
                    onChange={(e) => setScores((s) => ({ ...s, [r.key]: Number(e.target.value) }))}
                    className="range"
                    style={{ "--fill": `${(r.value / r.max) * 100}%` }}
                    aria-describedby={`pg-${r.key}`}
                  />
                  <span
                    className="slider-threshold"
                    style={{ left: `${(r.min / r.max) * 100}%` }}
                    aria-hidden="true"
                  />
                </div>
                <p id={`pg-${r.key}`} className="slider-pg">
                  Ambang batas <span className="num">{r.min}</span>
                </p>
              </div>
            ))}
            <p className="calc-source">
              Ambang batas 65/80/166 dari seleksi CPNS terakhir; angka 2027
              menunggu pengumuman resmi. Zona aman dari rekap skor peserta
              GASCPNS yang lolos ke SKB.
            </p>

            <div className="calc-mini" aria-hidden="true">
              <span>
                Total <strong className="num">{total}</strong>
              </span>
              <span>
                {!passAll
                  ? `Belum lolos ${firstFail.key.toUpperCase()}`
                  : gap > 0
                  ? `Kurang ${gap} ke zona aman`
                  : "Zona aman"}
              </span>
            </div>
          </div>

          <div className="calc-result" aria-live="polite">
            <p className="calc-total-label">Total SKD</p>
            <p className="calc-total num">
              {total}
              <small>/{SKD_MAX}</small>
            </p>

            <div className="safe-meter" aria-hidden="true">
              <span className="safe-meter-fill" style={{ width: `${Math.min((total / SKD_MAX) * 100, 100)}%` }} />
              <span className="safe-meter-mark" style={{ left: `${(target.safeScore / SKD_MAX) * 100}%` }}>
                <span>{target.safeScore}</span>
              </span>
            </div>

            <ul className="pg-list">
              {rows.map((r) => (
                <li key={r.key} className={r.pass ? "is-pass" : "is-fail"}>
                  <span>
                    <strong>{r.key.toUpperCase()}</strong> min. {r.min}
                  </span>
                  <span className="pg-state">
                    <Icon pass={r.pass} />
                    {r.pass ? "Lolos" : `Kurang ${r.min - r.value}`}
                  </span>
                </li>
              ))}
            </ul>

            <div className="diagnosis">
              {!passAll ? (
                <p>
                  Belum lolos ambang batas di <strong>{firstFail.key.toUpperCase()}</strong>.
                  Satu subtes gagal berarti gugur, berapa pun totalnya. Kejar ini dulu.
                </p>
              ) : gap > 0 ? (
                <p>
                  Ambang batas aman. Untuk zona aman <strong>{target.label.toLowerCase()}</strong>{" "}
                  kamu butuh <span className="mark-dark num">+{gap} poin</span> lagi.
                  Paling murah dikejar di <strong>{weakest.key.toUpperCase()}</strong>.
                </p>
              ) : (
                <p>
                  Skor ini sudah di zona aman {target.label.toLowerCase()} ({target.safeScore}+).
                  Tugasmu sekarang menjaganya stabil di setiap tryout.
                </p>
              )}
            </div>

            <a
              href={`https://app.gascpns.id/register?utm_source=landing&utm_medium=score_calc&utm_campaign=cpns2027&focus=${focus.key.toUpperCase()}`}
              className="btn btn-gold btn-lg btn-block"
              onClick={() =>
                trackEvent("tryout_cta_click", {
                  location: "score_calculator",
                  total_score: total,
                  weakest: focus.key.toUpperCase(),
                })
              }
            >
              Latih {focus.key.toUpperCase()} di GASCPNS
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScoreCalculatorComp;
