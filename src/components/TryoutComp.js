import React, { useState, useEffect } from "react";
import { Container, Card, Row, Col, Button } from "react-bootstrap";

const formatRupiah = (harga) => {
  return harga.toLocaleString("id-ID", { style: "currency", currency: "IDR" });
};

const TryoutComp = () => {
  const [tryouts, setTryouts] = useState([]);

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
      <Container>
        <div className="text-white text-center pt-5">
          <h1>Tryout</h1>
        </div>
        <Row>
          {tryouts.map((tryout, index) => (
            <Col key={index} className="col-12 col-lg-4">
              <Card className="my-4 mx-4 shadow rounded-4">
                <Card.Img variant="top" src={tryout.cover_path} />
                <Card.Body className="my-3 text-center">
                  <div>
                  <Card.Title className="mb-4">
                    <h4>{tryout.name}</h4>
                    {/* Menampilkan harga dengan format rupiah */}
                    {tryout.discount ? (
                      <div>
                        <h4 style={{ textDecoration: "line-through", color: "red" }}>
                          {formatRupiah(tryout.price)}
                        </h4>
                        <h4>{formatRupiah(tryout.discount)}</h4>
                      </div>
                    ) : (
                      <h4>{formatRupiah(tryout.price)}</h4>
                    )}
                  </Card.Title>


                    <Card.Text className="mb-5">
                      {tryout.description}
                    </Card.Text>

                    <a href="https://staging.gascpns.com">
                      <Button className="btn btn-dark">
                        Beli Soal</Button>
                    </a>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default TryoutComp;
