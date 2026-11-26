import React from "react";
import { trackEvent } from "../utils/tracking";

const CONTACTS = [
  { href: "https://www.instagram.com/gascpns/", label: "Instagram @gascpns" },
  { href: "https://t.me/gascpns2024", label: "Telegram GASCPNS" },
  { href: "https://wa.me/6285155095022", label: "WhatsApp admin 1" },
  { href: "https://wa.me/6285183002434", label: "WhatsApp admin 2" },
];

const PAGE_LINKS = [
  { href: "#simulasi-kilat", label: "Simulasi Kilat CAT" },
  { href: "#kalkulator-skd", label: "Kalkulator SKD" },
  { href: "#roadmap-2027", label: "Roadmap 2027" },
  { href: "#tryout", label: "Paket tryout" },
  { href: "#testimoni", label: "Alumni" },
];

const FooterComp = () => {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="closing">
          <h2 className="closing-title">
            Pendaftaran CPNS 2027 belum dibuka. Latihanmu bisa mulai malam ini.
          </h2>
          <a
            href="https://app.gascpns.id/register?utm_source=landing&utm_medium=footer_cta&utm_campaign=cpns2027"
            className="btn btn-gold btn-lg"
            onClick={() => trackEvent("tryout_cta_click", { location: "footer_cta" })}
          >
            Buat akun gratis
          </a>
        </div>

        <div className="footer-grid">
          <div className="footer-brand">
            <img
              src="/logo-gascpns-putih-480.png"
              alt="GASCPNS"
              width="160"
              height="46"
              loading="lazy"
            />
            <p>
              Tryout CAT BKN dan persiapan SKD CPNS 2027: soal TWK, TIU, TKP
              dengan pembahasan lengkap dan analisis hasil.
            </p>
          </div>

          <nav aria-label="Bagian halaman">
            <h3 className="footer-heading">Di halaman ini</h3>
            <ul className="footer-links">
              {PAGE_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="footer-heading">Hubungi kami</h3>
            <ul className="footer-links">
              {CONTACTS.map((c) => (
                <li key={c.href}>
                  <a href={c.href} target="_blank" rel="noopener noreferrer">
                    {c.label}
                  </a>
                </li>
              ))}
            </ul>
            <address className="footer-address">
              Jl. Bawean no. 119, Gunungsimping, Cilacap Tengah, Cilacap, Jawa
              Tengah
            </address>
          </div>
        </div>

        <p className="footer-copy">© {new Date().getFullYear()} GASCPNS Indonesia</p>
      </div>
    </footer>
  );
};

export default FooterComp;
