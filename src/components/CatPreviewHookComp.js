import React, { useEffect, useRef, useState } from "react";
import { trackEvent } from "../utils/tracking";
import { renderScoreCard } from "../utils/scoreCard";
import { SECONDS_PER_QUESTION } from "../utils/skd";

const MINI_QUESTIONS = [
  {
    id: 1,
    tone: "twk",
    label: "TWK",
    category: "TWK · Integritas dan bela negara",
    question:
      "Seorang pejabat pengadaan barang mengetahui rekan kuliahnya ikut menawar tender proyek di instansinya dengan spesifikasi yang sebenarnya sedikit di bawah standar. Agar tetap menjaga integritas ASN dan profesionalisme pelayanan publik, sikap paling tepat adalah...",
    options: [
      { key: "A", text: "Meloloskan tahap administrasi dulu sebagai bentuk solidaritas alumni.", points: 0 },
      { key: "B", text: "Menolak penawaran tersebut secara objektif sesuai dokumen evaluasi dan melaporkan potensi benturan kepentingan.", points: 5 },
      { key: "C", text: "Meminta rekannya memperbaiki dokumen secara diam-diam setelah batas waktu penutupan.", points: 0 },
      { key: "D", text: "Mengundurkan diri dari panitia tanpa memberikan catatan evaluasi agar tidak menyakiti rekan.", points: 0 },
    ],
    explanation:
      "Sesuai nilai dasar ASN BerAKHLAK (Akuntabel dan Loyal), penilaian pengadaan wajib objektif tanpa konflik kepentingan dan dilaporkan secara transparan.",
  },
  {
    id: 2,
    tone: "tiu",
    label: "TIU",
    category: "TIU · Penalaran logis (silogisme)",
    question:
      "Semua peserta yang lolos SKD wajib mengikuti tes SKB. Sebagian pendaftar instansi pusat berhasil lolos SKD. Kesimpulan yang paling tepat berdasarkan premis tersebut adalah...",
    options: [
      { key: "A", text: "Semua pendaftar instansi pusat wajib mengikuti tes SKB.", points: 0 },
      { key: "B", text: "Sebagian pendaftar instansi pusat tidak perlu mengikuti tes SKB meski lolos SKD.", points: 0 },
      { key: "C", text: "Sebagian pendaftar instansi pusat wajib mengikuti tes SKB.", points: 5 },
      { key: "D", text: "Semua peserta tes SKB adalah pendaftar instansi pusat.", points: 0 },
    ],
    explanation:
      "Premis partikular (sebagian pendaftar pusat lolos SKD) digabung premis universal (semua yang lolos SKD wajib SKB) menghasilkan kesimpulan partikular: sebagian pendaftar instansi pusat wajib mengikuti SKB.",
  },
  {
    id: 3,
    tone: "tkp",
    label: "TKP",
    category: "TKP · Pelayanan publik (skor 1 sampai 5)",
    question:
      "Loket layanan masyarakat sedang padat antrean ketika sistem verifikasi digital tiba-tiba melambat. Seorang pemohon lansia tampak kebingungan dan mulai cemas. Tindakan Anda sebagai petugas pelayanan adalah...",
    options: [
      { key: "A", text: "Meminta pemohon tersebut menunggu di kursi tanpa kepastian hingga sistem kembali normal.", points: 2 },
      { key: "B", text: "Menjelaskan kondisi gangguan secara ramah, membantu memeriksa kelengkapan berkas manualnya lebih dulu, dan memberi estimasi antrean yang jelas.", points: 5 },
      { key: "C", text: "Menyuruh pemohon pulang dan mendaftar ulang esok hari agar antrean cepat berkurang.", points: 1 },
      { key: "D", text: "Mengalihkan pemohon ke petugas keamanan karena antrean sudah penuh.", points: 3 },
    ],
    explanation:
      "Di TKP pelayanan publik, poin 5 memprioritaskan empati, solusi proaktif tanpa melanggar prosedur, dan komunikasi yang menenangkan pengguna layanan.",
  },
];

const MAX_SCORE = MINI_QUESTIONS.length * 5;
const BUDGET = SECONDS_PER_QUESTION * MINI_QUESTIONS.length;
const SHARE_URL =
  "https://gascpns.id/?utm_source=share&utm_medium=score_card&utm_campaign=cpns2027#simulasi-kilat";

const fmt = (secs) => {
  const s = Math.max(0, Math.abs(secs));
  return `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;
};

const pointsFor = (q, key) => {
  const chosen = q.options.find((o) => o.key === key);
  return chosen ? chosen.points : 0;
};

const verdict = (score) => {
  if (score >= 13) return "Insting CAT kamu tajam. Sekarang uji di tryout lengkap.";
  if (score >= 8) return "Lumayan, tapi belum aman. Di SKD asli, selisih kecil ini menentukan ranking.";
  return "Pola soalnya belum terbaca. Itu wajar di awal, dan justru itu yang dilatih.";
};

const CatPreviewHookComp = () => {
  const [phase, setPhase] = useState("cover");
  const [idx, setIdx] = useState(0);
  const [answers, setAnswers] = useState({});
  const [elapsed, setElapsed] = useState({});
  const [shareMsg, setShareMsg] = useState("");
  const [sharing, setSharing] = useState(false);
  const questionRef = useRef(null);
  const resultRef = useRef(null);
  const moveFocus = useRef(false);

  const q = MINI_QUESTIONS[idx];
  const selected = answers[q.id];
  const answeredCount = Object.keys(answers).length;
  const allAnswered = answeredCount === MINI_QUESTIONS.length;
  const spent = elapsed[q.id] || 0;
  const remaining = SECONDS_PER_QUESTION - spent;
  const overtime = remaining < 0;
  const totalTime = MINI_QUESTIONS.reduce((acc, item) => acc + (elapsed[item.id] || 0), 0);
  const score = MINI_QUESTIONS.reduce((acc, item) => acc + pointsFor(item, answers[item.id]), 0);

  useEffect(() => {
    if (phase !== "exam" || selected) return undefined;
    const t = setInterval(() => {
      setElapsed((prev) => ({ ...prev, [q.id]: (prev[q.id] || 0) + 1 }));
    }, 1000);
    return () => clearInterval(t);
  }, [phase, selected, q.id]);

  useEffect(() => {
    if (!moveFocus.current) return;
    moveFocus.current = false;
    if (phase === "exam") questionRef.current?.focus();
    if (phase === "result") resultRef.current?.focus();
  }, [phase, idx]);

  const go = (nextPhase, nextIdx = idx) => {
    moveFocus.current = true;
    setPhase(nextPhase);
    setIdx(nextIdx);
  };

  const choose = (key) => {
    if (selected) return;
    const next = { ...answers, [q.id]: key };
    setAnswers(next);
    if (Object.keys(next).length === MINI_QUESTIONS.length) {
      const finalScore = MINI_QUESTIONS.reduce((acc, item) => acc + pointsFor(item, next[item.id]), 0);
      trackEvent("cat_hook_complete", {
        score: finalScore,
        max_score: MAX_SCORE,
        duration_seconds: totalTime,
      });
    }
  };

  const nextUnanswered = () => {
    const after = MINI_QUESTIONS.findIndex((item, i) => i > idx && !answers[item.id]);
    if (after !== -1) return after;
    return MINI_QUESTIONS.findIndex((item) => !answers[item.id]);
  };

  const reset = () => {
    setAnswers({});
    setElapsed({});
    setShareMsg("");
    go("exam", 0);
  };

  const results = MINI_QUESTIONS.map((item) => ({
    label: item.label,
    points: pointsFor(item, answers[item.id]),
  }));

  const shareCard = async () => {
    setSharing(true);
    setShareMsg("");
    try {
      const blob = await renderScoreCard({
        score,
        max: MAX_SCORE,
        time: fmt(totalTime),
        budget: fmt(BUDGET),
        results,
      });
      if (!blob) throw new Error("render");
      const file = new File([blob], "skor-simulasi-kilat-gascpns.png", { type: "image/png" });
      const text = `Skor Simulasi Kilat CAT aku ${score}/${MAX_SCORE} dalam ${fmt(totalTime)}. Coba kalahkan: ${SHARE_URL}`;
      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        await navigator.share({ files: [file], text });
        trackEvent("score_card_share", { method: "native", score });
        setShareMsg("Kartu skor terkirim.");
      } else {
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = file.name;
        document.body.appendChild(a);
        a.click();
        a.remove();
        setTimeout(() => URL.revokeObjectURL(url), 2000);
        trackEvent("score_card_share", { method: "download", score });
        setShareMsg("Kartu skor tersimpan. Unggah ke IG Story dan tag @gascpns.");
      }
    } catch (err) {
      if (err && err.name === "AbortError") {
        setShareMsg("");
      } else {
        setShareMsg("Kartu skor gagal dibuat. Coba lagi, atau pakai tombol WhatsApp.");
      }
    } finally {
      setSharing(false);
    }
  };

  const waText = encodeURIComponent(
    `Aku dapat ${score}/${MAX_SCORE} di Simulasi Kilat CAT GASCPNS dalam ${fmt(totalTime)}. Satu soal cuma dapat 54 detik. Berani coba? ${SHARE_URL}`
  );

  return (
    <div id="simulasi-kilat" className="exam" aria-labelledby="exam-title">
      <div className="exam-head">
        <h2 id="exam-title" className="exam-title">
          Simulasi Kilat
        </h2>
        <ol className="exam-boxes" aria-label="Nomor soal">
          {MINI_QUESTIONS.map((item, i) => {
            const done = Boolean(answers[item.id]);
            const current = phase === "exam" && i === idx;
            return (
              <li key={item.id}>
                <button
                  type="button"
                  className={`numbox ${done ? "is-done" : ""} ${current ? "is-current" : ""}`}
                  aria-current={current ? "step" : undefined}
                  aria-label={`Soal ${i + 1}${done ? ", sudah dijawab" : ""}`}
                  onClick={() => go("exam", i)}
                >
                  {i + 1}
                </button>
              </li>
            );
          })}
        </ol>
        <div className={`exam-timer ${overtime && phase === "exam" ? "is-over" : ""}`}>
          <span className="exam-timer-label">
            {phase === "result" ? "Waktu" : phase === "exam" && overtime ? "Lewat" : "Sisa"}
          </span>
          <span className="num">
            {phase === "result"
              ? fmt(totalTime)
              : phase === "exam"
              ? `${overtime ? "+" : ""}${fmt(remaining)}`
              : fmt(SECONDS_PER_QUESTION)}
          </span>
        </div>
      </div>

      {phase === "exam" && (
        <div className="exam-bar" aria-hidden="true">
          <span
            className={`exam-bar-fill ${overtime ? "is-over" : ""}`}
            style={{ transform: `scaleX(${Math.min(spent / SECONDS_PER_QUESTION, 1)})` }}
          />
        </div>
      )}

      {phase === "cover" && (
        <div className="exam-body exam-cover">
          <p className="exam-cover-big">
            3 soal. <span className="num">54</span> detik per soal.
          </p>
          <ul className="exam-cover-list">
            <li>
              <span className="tone-dot tone-twk" aria-hidden="true" />
              TWK: integritas pejabat pengadaan
            </li>
            <li>
              <span className="tone-dot tone-tiu" aria-hidden="true" />
              TIU: silogisme tentang SKD dan SKB
            </li>
            <li>
              <span className="tone-dot tone-tkp" aria-hidden="true" />
              TKP: loket pelayanan yang macet
            </li>
          </ul>
          <p className="exam-cover-note">
            Timer jalan begitu kamu mulai. Tanpa daftar, tanpa login.
          </p>
          <button type="button" className="btn btn-blue btn-lg exam-start" onClick={() => go("exam", 0)}>
            Mulai soal 1
          </button>
        </div>
      )}

      {phase === "exam" && (
        <div className="exam-body">
          <div className="exam-meta">
            <span className={`tag tone-${q.tone}`}>{q.category}</span>
            <span className="exam-meta-points">Maks. 5 poin</span>
          </div>

          <h3 className="exam-question" tabIndex={-1} ref={questionRef}>
            <span className="visually-hidden">Soal {idx + 1} dari {MINI_QUESTIONS.length}. </span>
            {q.question}
          </h3>

          <div className="options" role="group" aria-label="Pilihan jawaban">
            {q.options.map((opt) => {
              const isSel = selected === opt.key;
              const isBest = opt.points === 5;
              let state = "";
              if (selected) {
                if (isBest) state = "is-best";
                else if (isSel) state = opt.points > 0 ? "is-part" : "is-miss";
                else state = "is-dim";
              }
              return (
                <button
                  key={opt.key}
                  type="button"
                  className={`option ${state}`}
                  aria-pressed={isSel}
                  disabled={Boolean(selected) && !isSel && !isBest}
                  onClick={() => choose(opt.key)}
                >
                  <span className="option-key">{opt.key}</span>
                  <span className="option-text">
                    {opt.text}
                    {selected && isBest && (
                      <strong className="option-verdict">Jawaban terbaik, +5 poin</strong>
                    )}
                    {selected && isSel && !isBest && (
                      <strong className="option-verdict">Pilihanmu, +{opt.points} poin</strong>
                    )}
                  </span>
                </button>
              );
            })}
          </div>

          <div aria-live="polite">
            {selected && (
              <div className="exam-explain">
                <strong>Pembahasan singkat.</strong> {q.explanation}
                {spent > SECONDS_PER_QUESTION && (
                  <p className="exam-explain-time">
                    Kamu butuh {fmt(spent)} untuk soal ini, lewat {spent - SECONDS_PER_QUESTION} detik dari jatah.
                    Di CAT asli, waktu itu dipotong dari soal-soal terakhir.
                  </p>
                )}
              </div>
            )}
          </div>

          <div className="exam-nav">
            <button
              type="button"
              className="btn btn-white"
              disabled={idx === 0}
              onClick={() => go("exam", idx - 1)}
            >
              Soal sebelumnya
            </button>
            {allAnswered ? (
              <button type="button" className="btn btn-blue" onClick={() => go("result")}>
                Lihat skor
              </button>
            ) : (
              <button
                type="button"
                className="btn btn-blue"
                disabled={!selected}
                onClick={() => go("exam", nextUnanswered())}
              >
                Soal berikutnya
              </button>
            )}
          </div>
        </div>
      )}

      {phase === "result" && (
        <div className="exam-body exam-result" tabIndex={-1} ref={resultRef} aria-label="Hasil simulasi kilat">
          <div className="result-top">
            <div className="stamp">
              <span className="stamp-label">Skor</span>
              <span className="stamp-score num">
                {score}
                <small>/{MAX_SCORE}</small>
              </span>
            </div>
            <div className="result-copy">
              <p className="result-verdict">{verdict(score)}</p>
              <p className="result-time">
                Waktu <span className="num">{fmt(totalTime)}</span> dari jatah{" "}
                <span className="num">{fmt(BUDGET)}</span>
                {totalTime > BUDGET ? `, lewat ${totalTime - BUDGET} detik.` : "."}
              </p>
              <ul className="result-boxes" aria-label="Poin per soal">
                {results.map((r) => (
                  <li key={r.label} className={`result-box ${r.points === 5 ? "is-full" : r.points > 0 ? "is-part" : ""}`}>
                    <span>{r.label}</span>
                    <span className="num">+{r.points}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <a
            href="https://app.gascpns.id/register?utm_source=landing&utm_medium=cat_hook_result&utm_campaign=cpns2027"
            className="btn btn-gold btn-lg btn-block"
            onClick={() =>
              trackEvent("tryout_cta_click", { location: "cat_hook_result", mini_score: score })
            }
          >
            Lanjut ke tryout gratis
          </a>

          <div className="share-row">
            <button type="button" className="btn btn-white" onClick={shareCard} disabled={sharing}>
              {sharing ? "Membuat kartu skor..." : "Bagikan kartu skor"}
            </button>
            <a
              href={`https://wa.me/?text=${waText}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-white"
              onClick={() => trackEvent("score_card_share", { method: "whatsapp", score })}
            >
              Tantang teman di WhatsApp
            </a>
          </div>
          <p className="share-msg" role="status">
            {shareMsg}
          </p>

          <button type="button" className="link-btn" onClick={reset}>
            Ulangi dari soal 1
          </button>
        </div>
      )}
    </div>
  );
};

export default CatPreviewHookComp;
