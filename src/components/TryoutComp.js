import React, { useEffect, useState } from "react";
import { trackEvent } from "../utils/tracking";

const formatRupiah = (value) =>
  Number(value).toLocaleString("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  });

const discountPct = (price, discount) => {
  if (!price || !discount || price <= discount) return 0;
  return Math.round(((price - discount) / price) * 100);
};

const Cover = ({ src }) => {
  const [failed, setFailed] = useState(false);
  if (failed) return null;
  return (
    <div className="tryout-cover">
      <img src={src} alt="" width="640" height="360" loading="lazy" onError={() => setFailed(true)} />
    </div>
  );
};

const hasCover = (src) => Boolean(src) && !/\/storage\/?$/.test(src);

const APP = "https://app.gascpns.id";
const effectivePrice = (p) => Number(p.discount || p.price || 0);

// Bundles come from the same on-sale feed; the block only renders when the panel has published one.
const BundleCard = ({ b }) => {
  const items = Array.isArray(b.bundle_items) ? b.bundle_items : [];
  const count = b.bundle_items_count || items.length;
  const normal = Number(b.bundle_normal_price || 0);
  const price = effectivePrice(b);
  const saving = Math.max(0, Number(b.bundle_saving || 0));
  const shown = items.slice(0, 4);
  const href = `${APP}/member/paket/detail/${encodeURIComponent(b.slug || "")}?utm_source=landing&utm_medium=bundle_card&utm_campaign=cpns2027`;
  return (
    <li className="tryout-card bundle-card">
      <div className="tryout-body">
        <span className="bundle-chip">Bundle · {count} paket</span>
        <h3 className="tryout-name">{b.name}</h3>
        {shown.length > 0 && (
          <ul className="bundle-items">
            {shown.map((it) => (
              <li key={it.id}>{it.name}</li>
            ))}
            {items.length > shown.length && <li className="bundle-more">dan {items.length - shown.length} paket lainnya</li>}
          </ul>
        )}
        <p className="tryout-price">
          {normal > price && <s>{formatRupiah(normal)}</s>}
          <span>{formatRupiah(price)}</span>
        </p>
        {saving > 0 && <p className="bundle-saving">Hemat {formatRupiah(saving)} dibanding beli satuan</p>}
        <a
          href={href}
          className="btn btn-gold btn-block"
          onClick={() => trackEvent("tryout_cta_click", { location: "bundle_card", package_name: b.name })}
        >
          Lihat isi bundle
          <span className="visually-hidden">: {b.name}</span>
        </a>
      </div>
    </li>
  );
};

const EarlyBird = ({ failed }) => (
  <div className="tryout-fallback">
    {failed && (
      <p className="tryout-error" role="alert">
        Daftar paket belum bisa dimuat dari server. Paket terbaru tetap bisa
        kamu lihat langsung di aplikasi.
      </p>
    )}
    <div className="earlybird">
      <h3 className="earlybird-title">
        Daftar sekarang, dapatkan akses tryout gratis
      </h3>
      <p>
        Buat akun GASCPNS untuk mulai latihan CPNS 2027 dengan sistem
        penilaian otomatis.
      </p>
      <ul className="earlybird-list">
        <li>Tryout gratis</li>
        <li>Pembahasan lengkap</li>
        <li>Analisis hasil</li>
      </ul>
      <a
        href="https://app.gascpns.id/register?utm_source=landing&utm_medium=tryout_fallback&utm_campaign=cpns2027"
        className="btn btn-gold btn-lg"
        onClick={() => trackEvent("tryout_cta_click", { location: "early_bird_fallback" })}
      >
        Daftar dan coba tryout gratis
      </a>
    </div>
    <div className="telegram-card">
      <h3 className="telegram-title">Ikuti info CPNS 2027 lewat Telegram</h3>
      <p>
        Gabung grup Telegram GASCPNS untuk kabar persiapan dan tryout terbaru.
      </p>
      <a
        href="https://t.me/gascpns2024"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-white"
        onClick={() => trackEvent("tryout_cta_click", { location: "telegram_group" })}
      >
        Gabung grup Telegram
      </a>
    </div>
  </div>
);

const TryoutComp = () => {
  const [tryouts, setTryouts] = useState([]);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    let active = true;
    fetch("https://api.gascpns.id/api/v1/tryout/on-sale")
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data) => {
        if (!active) return;
        const list = data?.data?.data || [];
        setTryouts(list);
        setStatus(list.length ? "ready" : "empty");
      })
      .catch(() => {
        if (active) setStatus("error");
      });
    return () => {
      active = false;
    };
  }, []);

  const bundles = tryouts.filter((t) => t.is_bundle);
  const singles = tryouts.filter((t) => !t.is_bundle);

  return (
    <section id="tryout" className="band band-paper" aria-labelledby="tryout-title">
      <div className="wrap">
        <div className="tryout-head">
          <div>
            <h2 id="tryout-title" className="section-title">
              Paket tryout CAT CPNS 2027
            </h2>
            <p className="section-lead">
              Penilaian otomatis mengikuti bobot SKD BKN, dengan pembahasan
              untuk setiap soal.
            </p>
          </div>
          <a
            href="https://app.gascpns.id?utm_source=landing&utm_medium=tryout_header&utm_campaign=cpns2027"
            className="btn btn-white"
            onClick={() => trackEvent("tryout_cta_click", { location: "tryout_header" })}
          >
            Lihat semua di aplikasi
          </a>
        </div>

        {status === "loading" && (
          <div className="tryout-loading" role="status">
            <span className="loader" aria-hidden="true" />
            Memuat paket tryout terbaru...
          </div>
        )}

        {(status === "empty" || status === "error") && <EarlyBird failed={status === "error"} />}

        {status === "ready" && bundles.length > 0 && (
          <div className="bundle-block" aria-labelledby="bundle-title">
            <h3 id="bundle-title" className="bundle-title">Bundle hemat</h3>
            <p className="bundle-lead">Beberapa paket tryout sekaligus dengan harga lebih ringan daripada membeli satu per satu.</p>
            <ul className="tryout-list">
              {bundles.map((b, i) => (
                <BundleCard key={b.id || `b${i}`} b={b} />
              ))}
            </ul>
          </div>
        )}

        {status === "ready" && singles.length > 0 && (
          <ul className={`tryout-list ${singles.length === 1 ? "is-single" : ""}`}>
            {singles.map((t, i) => {
              const pct = discountPct(t.price, t.discount);
              return (
                <li key={t.id || i} className="tryout-card">
                  {hasCover(t.cover_path) && <Cover src={t.cover_path} />}
                  <div className="tryout-body">
                    {pct > 0 && <span className="tryout-save-inline">Hemat {pct}%</span>}
                    <h3 className="tryout-name">{t.name}</h3>
                    {t.description && <p className="tryout-desc">{t.description}</p>}
                    <p className="tryout-price">
                      {t.discount ? (
                        <>
                          <s>{formatRupiah(t.price)}</s>
                          <span>{formatRupiah(t.discount)}</span>
                        </>
                      ) : (
                        <span>{formatRupiah(t.price)}</span>
                      )}
                    </p>
                    <a
                      href="https://app.gascpns.id?utm_source=landing&utm_medium=tryout_card&utm_campaign=cpns2027"
                      className="btn btn-blue btn-block"
                      onClick={() =>
                        trackEvent("tryout_cta_click", {
                          location: "tryout_card",
                          package_name: t.name,
                        })
                      }
                    >
                      Ambil paket ini
                      <span className="visually-hidden">: {t.name}</span>
                    </a>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </section>
  );
};

export default TryoutComp;
