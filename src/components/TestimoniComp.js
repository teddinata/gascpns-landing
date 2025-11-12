import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const TestimoniComp = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Avatar SVG Components
  const Avatar1 = () => (
    <svg viewBox="0 0 200 200" className="avatar-illustration">
      <circle cx="100" cy="100" r="90" fill="#E8F4FF"/>
      <circle cx="100" cy="80" r="35" fill="#0066CC"/>
      <path d="M 50 150 Q 100 120, 150 150" fill="#0066CC"/>
      <circle cx="85" cy="75" r="5" fill="white"/>
      <circle cx="115" cy="75" r="5" fill="white"/>
      <path d="M 85 90 Q 100 95, 115 90" stroke="white" strokeWidth="3" fill="none"/>
    </svg>
  );

  const Avatar2 = () => (
    <svg viewBox="0 0 200 200" className="avatar-illustration">
      <circle cx="100" cy="100" r="90" fill="#FFF4E6"/>
      <circle cx="100" cy="80" r="35" fill="#FF9800"/>
      <rect x="70" y="115" width="60" height="40" rx="5" fill="#FF9800"/>
      <circle cx="85" cy="75" r="5" fill="white"/>
      <circle cx="115" cy="75" r="5" fill="white"/>
      <path d="M 85 90 Q 100 95, 115 90" stroke="white" strokeWidth="3" fill="none"/>
    </svg>
  );

  const Avatar3 = () => (
    <svg viewBox="0 0 200 200" className="avatar-illustration">
      <circle cx="100" cy="100" r="90" fill="#F3E5F5"/>
      <circle cx="100" cy="80" r="35" fill="#9C27B0"/>
      <ellipse cx="100" cy="130" rx="45" ry="35" fill="#9C27B0"/>
      <circle cx="85" cy="75" r="5" fill="white"/>
      <circle cx="115" cy="75" r="5" fill="white"/>
      <path d="M 80 85 Q 100 92, 120 85" stroke="white" strokeWidth="3" fill="none"/>
    </svg>
  );

  const Avatar4 = () => (
    <svg viewBox="0 0 200 200" className="avatar-illustration">
      <circle cx="100" cy="100" r="90" fill="#E8F5E9"/>
      <circle cx="100" cy="80" r="35" fill="#4CAF50"/>
      <path d="M 60 120 L 100 140 L 140 120 L 140 160 L 60 160 Z" fill="#4CAF50"/>
      <circle cx="85" cy="75" r="5" fill="white"/>
      <circle cx="115" cy="75" r="5" fill="white"/>
      <path d="M 85 90 Q 100 85, 115 90" stroke="white" strokeWidth="3" fill="none"/>
    </svg>
  );

  // Data testimoni dengan avatar components
  const testimonials = [
    {
      id: 1,
      name: "Amelia P.",
      role: "Lulus CPNS Kemenkeu 2024",
      avatar: <Avatar1 />,
      rating: 5,
      text: "Min saya mau mengucapkan terimakasih banyak kepada para tutor dan yang memiliki platform GASCPNS. Berkat bimbel ini, saya LULUS CPNS di Kementerian Keuangan. Semoga saya bisa lancar pemberkasan hingga tahap akhir dan penetapan NIP. Sekali lagi terimakasih banyak min!",
      achievement: "Ranking 5 Nasional",
      color: "#0066CC"
    },
    {
      id: 2,
      name: "Budi S.",
      role: "Lulus CPNS ATR/BPN 2024",
      avatar: <Avatar2 />,
      rating: 5,
      text: "Alhamdulillah berkat tryout GASCPNS yang soalnya mirip dengan ujian asli, saya bisa lulus CPNS di Kementerian ATR/BPN. Pembahasannya sangat detail dan membantu saya memahami konsep dengan baik. Terima kasih GASCPNS!",
      achievement: "Skor TWK 95",
      color: "#FF9800"
    },
    {
      id: 3,
      name: "Siti N.",
      role: "Lulus CPNS Kemendikbud 2024",
      avatar: <Avatar3 />,
      rating: 5,
      text: "Platform GASCPNS sangat membantu persiapan saya. Soal-soalnya up to date dan sistemnya user-friendly. Saya berhasil lulus CPNS Kemendikbud dengan passing grade tinggi. Recommended banget untuk yang mau persiapan CPNS!",
      achievement: "Passing Grade 420",
      color: "#9C27B0"
    },
    {
      id: 4,
      name: "Ahmad F.",
      role: "Lulus CPNS Kemenkes 2024",
      avatar: <Avatar4 />,
      rating: 5,
      text: "Tryout online GASCPNS benar-benar membantu saya dalam persiapan CPNS. Analisis hasil yang detail membuat saya tahu kelemahan dan bisa fokus belajar. Alhamdulillah lulus di Kementerian Kesehatan. Terima kasih GASCPNS!",
      achievement: "Skor TIU 100",
      color: "#4CAF50"
    }
  ];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="testimoni-section">
      <Container>
        {/* Section Header */}
        <div className="testimoni-header">
          <div className="header-badge">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
            Testimoni
          </div>
          <h2 className="section-title">Kata Mereka yang Sudah Lulus</h2>
          <p className="section-subtitle">
            Ribuan peserta telah berhasil lulus CPNS dengan bantuan GASCPNS
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="testimonial-carousel">
          <Row className="align-items-center">
            {/* Avatar Section */}
            <Col lg={5} className="mb-4 mb-lg-0">
              <div className="testimonial-avatar-wrapper">
                <div 
                  className="avatar-decoration"
                  style={{ background: `linear-gradient(135deg, ${testimonials[activeIndex].color}20 0%, ${testimonials[activeIndex].color}40 100%)` }}
                ></div>
                <div className="avatar-container">
                  {testimonials[activeIndex].avatar}
                </div>
                <div className="achievement-badge" style={{ borderColor: testimonials[activeIndex].color }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  {testimonials[activeIndex].achievement}
                </div>
              </div>
            </Col>

            {/* Content Section */}
            <Col lg={7}>
              <div className="testimonial-content">
                {/* Rating Stars */}
                <div className="rating-stars">
                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                    <svg key={i} width="24" height="24" viewBox="0 0 24 24" fill="#FFD700" stroke="#FFD700" strokeWidth="2">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                  ))}
                </div>

                {/* Quote Icon */}
                <div className="quote-icon" style={{ color: `${testimonials[activeIndex].color}20` }}>
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
                  </svg>
                </div>

                {/* Testimonial Text */}
                <p className="testimonial-text" style={{ borderLeftColor: testimonials[activeIndex].color }}>
                  {testimonials[activeIndex].text}
                </p>

                {/* Author Info */}
                <div className="author-info">
                  <div className="author-details">
                    <h4 className="author-name">{testimonials[activeIndex].name}</h4>
                    <p className="author-role" style={{ color: testimonials[activeIndex].color }}>
                      {testimonials[activeIndex].role}
                    </p>
                  </div>
                  <div className="verified-badge" style={{ 
                    background: `${testimonials[activeIndex].color}15`,
                    color: testimonials[activeIndex].color 
                  }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    Verified
                  </div>
                </div>

                {/* Navigation Controls */}
                <div className="carousel-controls">
                  <button className="control-btn prev-btn" onClick={prevSlide}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                  </button>
                  
                  <div className="carousel-dots">
                    {testimonials.map((item, index) => (
                      <button
                        key={index}
                        className={`dot ${activeIndex === index ? 'active' : ''}`}
                        onClick={() => goToSlide(index)}
                        style={{ 
                          background: activeIndex === index ? item.color : '#d0d0d0' 
                        }}
                      />
                    ))}
                  </div>

                  <button className="control-btn next-btn" onClick={nextSlide}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </div>

        {/* Stats Section */}
        <div className="testimonial-stats">
          <div className="stat-item">
            <div className="stat-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <div className="stat-number">10,000+</div>
            <div className="stat-label">Peserta Lulus</div>
          </div>
          <div className="stat-item">
            <div className="stat-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
            </div>
            <div className="stat-number">4.9/5</div>
            <div className="stat-label">Rating Kepuasan</div>
          </div>
          <div className="stat-item">
            <div className="stat-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
            <div className="stat-number">95%</div>
            <div className="stat-label">Success Rate</div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TestimoniComp;