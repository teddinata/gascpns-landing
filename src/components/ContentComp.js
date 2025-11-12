import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";

const ContentComp = () => {
  const features = [
    {
      icon: "./iconQnA.png",
      title: "Soal Berkualitas",
      description: "Kami menyediakan soal-soal berkualitas yang disusun oleh tim ahli berdasarkan kurikulum dan persyaratan terbaru CPNS. Soal-soal kami telah dirancang untuk mempersiapkan Anda dengan baik menghadapi ujian CPNS.",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
      icon: "./update-icon.png",
      title: "Terupdate",
      description: "Kami selalu memperbarui bank soal kami sesuai dengan perkembangan terbaru dalam tes CPNS. Dengan mengikuti tryout online kami, Anda akan mendapatkan akses ke soal-soal yang sesuai dengan format dan standar terbaru ujian CPNS.",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    },
    {
      icon: "./flexible-icon.png",
      title: "Fleksibilitas Waktu",
      description: "Dengan tryout online di GASCPNS, Anda dapat mengaksesnya kapan saja dan di mana saja sesuai dengan jadwal Anda. Tidak perlu repot-repot datang ke tempat tertentu untuk mengikuti tryout, sehingga memberikan Anda fleksibilitas yang lebih besar dalam persiapan.",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    },
    {
      icon: "./monitoring-icon.png",
      title: "Monitoring dan Evaluasi",
      description: "Kami menyediakan fitur monitoring dan evaluasi yang membantu Anda melacak kemajuan belajar Anda. Dengan demikian, Anda dapat mengidentifikasi kelemahan Anda dan fokus pada area yang perlu diperbaiki untuk meningkatkan hasil ujian CPNS Anda.",
      gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
    }
  ];

  return (
    <section className="content-section py-5" style={{ background: "linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%)" }}>
      <Container className="py-4">
        <div className="text-center mb-5">
          <span className="badge bg-primary bg-opacity-10 text-primary px-4 py-2 rounded-pill mb-3" style={{ fontSize: "0.9rem", fontWeight: "600" }}>
            Keunggulan Kami
          </span>
          <h2 className="display-5 fw-bold mb-3" style={{ color: "#1a1a1a" }}>
            Mengapa Memilih Tryout Online
          </h2>
          <h2 className="display-5 fw-bold mb-3" style={{ 
            background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text"
          }}>
            di <strong>GASCPNS</strong>?
          </h2>
          <p className="text-muted" style={{ maxWidth: "600px", margin: "0 auto" }}>
            Platform tryout online terlengkap dengan berbagai keunggulan untuk kesuksesan ujian CPNS Anda
          </p>
        </div>

        <Row className="g-4 justify-content-center">
          {features.map((feature, index) => (
            <Col md={6} lg={6} key={index}>
              <Card 
                className="h-100 border-0 shadow-sm hover-card"
                style={{
                  transition: "all 0.3s ease",
                  borderRadius: "20px",
                  overflow: "hidden"
                }}
              >
                <Card.Body className="p-4">
                  <div className="d-flex align-items-start gap-3">
                    <div 
                      className="icon-wrapper d-flex align-items-center justify-content-center flex-shrink-0"
                      style={{
                        width: "70px",
                        height: "70px",
                        borderRadius: "16px",
                        background: feature.gradient,
                        padding: "12px"
                      }}
                    >
                      <Image
                        src={feature.icon}
                        style={{ 
                          width: "40px", 
                          height: "40px",
                          filter: "brightness(0) invert(1)"
                        }}
                        alt={feature.title}
                      />
                    </div>
                    <div>
                      <Card.Title className="fw-bold mb-2" style={{ fontSize: "1.25rem", color: "#1a1a1a" }}>
                        {feature.title}
                      </Card.Title>
                      <Card.Text className="text-muted" style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>
                        {feature.description}
                      </Card.Text>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <style jsx>{`
        .hover-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1) !important;
        }
        
        .icon-wrapper {
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </section>
  );
};

export default ContentComp;