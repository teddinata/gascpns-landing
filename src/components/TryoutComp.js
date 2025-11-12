import React, { useState, useEffect } from "react";
import { Container, Card, Row, Col, Button } from "react-bootstrap";

const formatRupiah = (harga) => {
  return harga.toLocaleString("id-ID", { style: "currency", currency: "IDR" });
};

const calculateDiscountPercentage = (originalPrice, discountPrice) => {
  return ((originalPrice - discountPrice) / originalPrice * 100).toFixed(0);
};

const TryoutComp = () => {
  const [tryouts, setTryouts] = useState([]);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("https://api-cpns.creazylab.works/api/v1/tryout/on-sale");
      const data = await response.json();
      setTryouts(data.data.data);
      setLoading(false);
    } catch (error) {
      console.log("Error fetching data:", error);
      setLoading(false);
    }
  };

  // Empty State Component
  const EmptyState = () => (
    <div className="tryout-empty-state">
      <div className="empty-icon">
        <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M9 11l3 3L22 4"></path>
          <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"></path>
        </svg>
      </div>
      <h2 className="empty-title">Tryout Belum Tersedia</h2>
      <p className="empty-description">
        Daftar sekarang dan dapatkan akses tryout gratis untuk persiapan ujian CPNS Anda!
      </p>
      <a href="https://app.gascpns.id" target="_blank" rel="noopener noreferrer">
        <Button className="btn-empty-cta">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
            <circle cx="8.5" cy="7" r="4"></circle>
            <line x1="20" y1="8" x2="20" y2="14"></line>
            <line x1="23" y1="11" x2="17" y2="11"></line>
          </svg>
          Daftar Sekarang
        </Button>
      </a>
      <div className="empty-features">
        <div className="feature-item">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          <span>Tryout Gratis</span>
        </div>
        <div className="feature-item">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          <span>Pembahasan Lengkap</span>
        </div>
        <div className="feature-item">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          <span>Analisis Hasil</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="tryout-section">
      <Container>
        {/* Section Header */}
        <div className="tryout-header">
          <div className="header-badge">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"></path>
              <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"></path>
            </svg>
            Paket Tryout
          </div>
          <h2 className="section-title">Pilih Paket Tryout Terbaik</h2>
          <p className="section-subtitle">
            Latihan soal berkualitas dengan sistem penilaian otomatis dan pembahasan lengkap
          </p>
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="tryout-loading">
            <div className="loading-spinner"></div>
            <p>Memuat paket tryout...</p>
          </div>
        ) : tryouts.length === 0 ? (
          <EmptyState />
        ) : (
          <Row className="tryout-grid">
            {tryouts.map((tryout, index) => (
              <Col key={index} xs={12} md={6} lg={4} className="tryout-col">
                <Card 
                  className={`tryout-card ${hoveredCard === index ? 'hovered' : ''}`}
                  onMouseEnter={() => setHoveredCard(index)} 
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Discount Badge */}
                  {tryout.discount && (
                    <div className="discount-badge">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                        <line x1="9" y1="9" x2="9.01" y2="9"></line>
                        <line x1="15" y1="9" x2="15.01" y2="9"></line>
                      </svg>
                      Hemat {calculateDiscountPercentage(tryout.price, tryout.discount)}%
                    </div>
                  )}

                  {/* Card Image */}
                  <div className="card-image-wrapper">
                    <Card.Img variant="top" src={tryout.cover_path} className="card-image" />
                    <div className="image-overlay"></div>
                  </div>

                  <Card.Body className="card-body-custom">
                    {/* Title */}
                    <Card.Title className="card-title-custom">
                      {tryout.name}
                    </Card.Title>

                    {/* Limited Stock */}
                    <div className="stock-indicator">
                      <div className="stock-bar">
                        <div className="stock-fill" style={{ width: '60%' }}></div>
                      </div>
                      <span className="stock-text">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="10"></circle>
                          <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                        Kuota Terbatas
                      </span>
                    </div>

                    {/* Description */}
                    <Card.Text className="card-description">
                      {tryout.description}
                    </Card.Text>

                    {/* Price */}
                    <div className="price-section">
                      <div className="price-wrapper">
                        {tryout.discount && (
                          <span className="original-price">{formatRupiah(tryout.price)}</span>
                        )}
                        <span className="current-price">
                          {formatRupiah(tryout.discount || tryout.price)}
                        </span>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <a href="https://app.gascpns.id" target="_blank" rel="noopener noreferrer">
                      <Button className="btn-tryout-cta">
                        Daftar Sekarang
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                          <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                      </Button>
                    </a>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </div>
  );
};

export default TryoutComp;