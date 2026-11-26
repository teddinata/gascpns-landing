import React, { useEffect, useState } from "react";
import { trackEvent } from "../utils/tracking";
import { readSessionHint, dashboardUrl } from "../utils/sessionHint";

const LINKS = [
  { href: "#simulasi-kilat", label: "Simulasi Kilat" },
  { href: "#kalkulator-skd", label: "Kalkulator SKD" },
  { href: "#roadmap-2027", label: "Roadmap 2027" },
  { href: "#tryout", label: "Paket Tryout" },
  { href: "#testimoni", label: "Alumni" },
];

const NavbarComp = () => {
  const [open, setOpen] = useState(false);
  const [hint, setHint] = useState(null);

  useEffect(() => setHint(readSessionHint()), []);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="site-header">
      <a href="#main-content" className="skip-link">
        Langsung ke konten utama
      </a>

      <div className="wrap nav-bar">
        <a href="#hero" className="nav-logo" aria-label="GASCPNS, ke atas halaman">
          <img
            src="/logo-gascpns-biru-480.png"
            alt="GASCPNS"
            width="140"
            height="40"
          />
        </a>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="nav-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="nav-toggle-bars" aria-hidden="true" />
          {open ? "Tutup" : "Menu"}
        </button>

        <nav
          id="nav-menu"
          className={`nav-menu ${open ? "is-open" : ""}`}
          aria-label="Navigasi utama"
        >
          <ul className="nav-links">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="https://berita.gascpns.id"
                target="_blank"
                rel="noopener noreferrer"
              >
                Info ASN
              </a>
            </li>
          </ul>

          <div className="nav-actions">
            {hint ? (
              <a
                href={`${dashboardUrl(hint)}?utm_source=landing&utm_medium=navbar&utm_campaign=cpns2027`}
                className="btn btn-gold btn-sm nav-account"
                onClick={() => trackEvent("tryout_cta_click", { location: "navbar_account" })}
              >
                <span className="nav-account-initial" aria-hidden="true">
                  {hint.name.charAt(0).toUpperCase()}
                </span>
                <span className="nav-account-name">{hint.name}</span>
                <span className="visually-hidden">, buka dasbor</span>
              </a>
            ) : (
              <>
                <a
                  href="https://app.gascpns.id/login?utm_source=landing&utm_medium=navbar&utm_campaign=cpns2027"
                  className="nav-login"
                  onClick={() =>
                    trackEvent("tryout_cta_click", { location: "navbar_dashboard" })
                  }
                >
                  Masuk
                </a>
                <a
                  href="https://app.gascpns.id/register?utm_source=landing&utm_medium=navbar&utm_campaign=cpns2027"
                  className="btn btn-gold btn-sm"
                  onClick={() =>
                    trackEvent("tryout_cta_click", { location: "navbar_register" })
                  }
                >
                  Daftar gratis
                </a>
              </>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default NavbarComp;
