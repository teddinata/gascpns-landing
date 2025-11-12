import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const HeroComp = () => {
  return (
    <div className="hero">
      {/* Decorative animated elements */}
      <div className="hero-decoration hero-decoration-1"></div>
      <div className="hero-decoration hero-decoration-2"></div>
      <div className="hero-decoration hero-decoration-3"></div>
      
      <Container>
        <Row>
          <Col className="col-lg-7 col-12 pb-5">
            {/* Badge */}
            <div className="hero-badge">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
              Platform Tryout CPNS Terpercaya #10 di Indonesia
            </div>

            <h1>
              Ujian <span>CPNS</span> Lebih Mudah Dengan Tryout Online di <strong>GASCPNS</strong>!
            </h1>

            <p>
              Melalui Platform Tryout Kami, Ujian CPNS Menjadi lebih mudah
              diatasi. Dapatkan pengalaman mirip Ujian sesungguhnya dan evaluasi
              hasil dengan cepat untuk perbaikan lebih lanjut.
            </p>

            {/* Stats */}
            <div className="hero-stats">
              <div className="hero-stat-item">
                <div className="hero-stat-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <div>
                  <div className="hero-stat-number">10,000+</div>
                  <div className="hero-stat-label">Pengguna Aktif</div>
                </div>
              </div>
              <div className="hero-stat-item">
                <div className="hero-stat-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                </div>
                <div>
                  <div className="hero-stat-number">4.9/5</div>
                  <div className="hero-stat-label">Rating Pengguna</div>
                </div>
              </div>
              <div className="hero-stat-item">
                <div className="hero-stat-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <div>
                  <div className="hero-stat-number">95%</div>
                  <div className="hero-stat-label">Tingkat Kelulusan</div>
                </div>
              </div>
            </div>

            <div className="hero-buttons">
              <a href="https://app.gascpns.id/register" className="btn-link">
                <Button className="btn btn-primary btn-hero">
                  Daftar Sekarang
                  
                </Button>
              </a>
              <a href="https://app.gascpns.id/login" className="btn-link">
                <Button className="btn btn-outline-light btn-hero">
                  Masuk
                </Button>
              </a>
            </div>
          </Col>

          <Col className="col-lg-5 col-12">
            <div className="hero-image-wrapper">
              <img src="./pramana-transparent.png" alt="GASCPNS" className="img-cover" />
              {/* Floating icons around image */}
              <div className="floating-icon floating-icon-1">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                </svg>
              </div>
              <div className="floating-icon floating-icon-2">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <div className="floating-icon floating-icon-3">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
              </div>
              <div className="floating-icon floating-icon-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                </svg>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroComp;