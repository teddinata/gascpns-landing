import React, { useState, useEffect } from "react";
import { Container, Card, Row, Col, Button, ProgressBar } from "react-bootstrap";

const formatRupiah = (harga) => {
  return harga.toLocaleString("id-ID", { style: "currency", currency: "IDR" });
};

const calculateDiscountPercentage = (originalPrice, discountPrice) => {
  return ((originalPrice - discountPrice) / originalPrice * 100).toFixed(0);
};

const cardStyle = {
  border: '1px solid #e0e0e0',
  borderRadius: '10px',
  overflow: 'hidden',
  transition: 'transform 0.3s',
};

const cardHoverStyle = {
  transform: 'scale(1.05)',
};

const imageStyle = {
  height: '200px',
  objectFit: 'cover',
};

const descriptionStyle = {
  color: '#555',
};

const buttonBlockStyle = {
  display: 'block',
  width: '100%',
  fontWeight: 'bold',
};

const progressBarStyle = {
  height: '20px',
  fontSize: '14px',
  lineHeight: '20px',
};

const priceWrapperStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
};

const originalPriceStyle = {
  textDecoration: "line-through",
  fontSize: "0.8em",
  color: "red",
  animation: "blink 1s infinite",  // Menambahkan animasi berkedip
};

const discountPercentageStyle = {
  backgroundColor: '#ff4d4d',
  color: 'white',
  padding: '2px 5px',
  borderRadius: '5px',
  fontSize: '0.8em',
  marginBottom: '10px',
};

const newPriceStyle = {
  fontSize: "1em",
  fontWeight: "bold",
  marginRight: "10px",
  marginLeft: "5px",
  marginBottom: "10px",
};

const emptyContainerStyle = {
  maxWidth: '600px',
  minHeight: '300px',
  margin: '0 auto',
  paddingTop: '50px',
  textAlign: 'center',
};

const TryoutComp = () => {
  const [tryouts, setTryouts] = useState([]);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("https://api-cpns.creazylab.works/api/v1/tryout/on-sale");
      const data = await response.json();
      setTryouts(data.data.data);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  return (
    <div className="tryout min-vh-100 wh-100 pb-5">
      <Container style={tryouts.length === 0 ? emptyContainerStyle : {}}>
        <div className="text-center pt-5">
          <h1>Tryout</h1>
        </div>
        {tryouts.length === 0 ? (
          <div className="text-center mt-5">
            <h1>Tryout belum tersedia</h1>
            <h4>Daftar dan klaim gratismu dulu di sini yuk!</h4>
            <a href="https://app.gascpns.com" target="_blank" rel="noopener noreferrer">
              <Button className="btn btn-primary mt-4">
                Daftar Sekarang!
              </Button>
            </a>
          </div>
        ) : (
          <Row>
            {tryouts.map((tryout, index) => (
              <Col key={index} className="col-12 col-lg-4">
                <Card 
                  className="my-4 mx-4 shadow rounded-4" 
                  style={{...cardStyle, ...(hoveredCard === index && cardHoverStyle)}} 
                  onMouseEnter={() => setHoveredCard(index)} 
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <Card.Img variant="top" src={tryout.cover_path} style={imageStyle} />
                  <Card.Body className="my-3 text-center">
                    <Card.Title className="mb-4">
                      <h4>{tryout.name}</h4>
                    </Card.Title>
                    <ProgressBar now={60} variant="danger" className="mb-3" style={progressBarStyle} label="Kuota Terbatas!" />
                    <Card.Text className="mb-2" style={descriptionStyle}>
                      {tryout.description}
                    </Card.Text>
                    <div style={priceWrapperStyle}>
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <h6 style={originalPriceStyle}>
                          {formatRupiah(tryout.price)}
                        </h6>
                        {tryout.discount && (
                          <h6 style={newPriceStyle}>{formatRupiah(tryout.discount)}</h6>
                        )}
                      </div>
                      {tryout.discount && (
                        <span style={discountPercentageStyle}>
                          Diskon {calculateDiscountPercentage(tryout.price, tryout.discount)}%
                        </span>
                      )}
                    </div>
                    <a href="https://app.gascpns.com" target="_blank" rel="noopener noreferrer">
                      <Button className="btn btn-primary" style={buttonBlockStyle}>
                        Daftar Sekarang!
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
