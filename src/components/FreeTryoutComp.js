import React, { useEffect, useState } from "react";
import { trackEvent } from "../utils/tracking";
import { readSessionHint } from "../utils/sessionHint";

const FEED = "https://api.gascpns.id/api/v1/tryout/on-sale?type=free&per_page=10";
const APP = "https://app.gascpns.id";
const utm = "utm_source=landing&utm_medium=free_hook&utm_campaign=cpns2027";

const hasCover = (src) => Boolean(src) && !/\/storage\/?$/.test(src);

// The hook only renders while the panel has an open free package, so the page never promises one that is gone.
const FreeTryoutComp = () => {
  const [pkg, setPkg] = useState(null);
  const [total, setTotal] = useState(0);
  const [signedIn, setSignedIn] = useState(false);

  useEffect(() => {
    setSignedIn(Boolean(readSessionHint()));
    let active = true;
    fetch(FEED)
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        const list = data?.data?.data || [];
        if (active && list[0]) {
          setPkg(list[0]);
          setTotal(Number(data?.data?.total) || list.length);
        }
      })
      .catch(() => {});
    return () => {
      active = false;
    };
  }, []);

  if (!pkg) return null;

  const questions = Number(pkg.total_question) || 110;
  const minutes = Number(pkg.total_duration) || 100;
  const title = String(pkg.name || "").replace(/^SKD HOTS 2027\s*/, "");
  const href = signedIn ? `${APP}/member/latihan-soal?${utm}` : `${APP}/register?${utm}`;

  return (
    <section id="tryout-gratis" className="band free-band" aria-labelledby="free-title">
      <div className="wrap free-grid">
        <div className="free-copy">
          <p className="free-kicker">
            <span className="free-price">Rp0</span>
            Tanpa kartu, tanpa pembayaran
          </p>
          <h2 id="free-title" className="section-title">
            {total > 1
              ? `${total} tryout SKD lengkap, gratis. Mulai ukur skormu.`
              : "Ukur skormu dulu dengan satu tryout SKD lengkap. Gratis."}
          </h2>
          <p className="section-lead">
            {total > 1 ? `Mulai dari ${title}. Setiap paket` : `${title}:`} {questions} soal HOTS dalam {minutes} menit, dinilai
            otomatis dengan bobot SKD BKN, lengkap dengan pembahasan setiap soal.
          </p>
          <ul className="free-list">
            <li><strong>{questions} soal</strong> TWK, TIU, dan TKP</li>
            <li><strong>{minutes} menit</strong> dengan timer seperti CAT</li>
            <li><strong>Skor per subtes</strong> dibandingkan passing grade</li>
            <li><strong>Pembahasan</strong> untuk setiap soal</li>
          </ul>
          <div className="free-actions">
            <a
              href={href}
              className="btn btn-gold btn-lg"
              onClick={() => trackEvent("tryout_cta_click", { location: "free_hook", signed_in: signedIn })}
            >
              {signedIn ? "Kerjakan tryout gratis" : "Daftar dan klaim gratis"}
            </a>
            <a
              href="#simulasi-kilat"
              className="btn btn-white btn-lg"
              onClick={() => trackEvent("tryout_cta_click", { location: "free_hook_mini_cat" })}
            >
              Coba 3 soal dulu
            </a>
          </div>
          {!signedIn && (
            <p className="free-note">Setelah daftar, buka menu Tryout gratis di aplikasi lalu tekan Klaim.</p>
          )}
        </div>
        {hasCover(pkg.cover_path) && (
          <figure className="free-cover">
            <img src={pkg.cover_path} alt={`Sampul ${title}`} width="1280" height="720" loading="lazy" />
          </figure>
        )}
      </div>
    </section>
  );
};

export default FreeTryoutComp;
