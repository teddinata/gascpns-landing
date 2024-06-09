import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";

const ContentComp = () => {
  return (
    <Container className="ctr">
      <Row className="crd mb-4 align-items-center">
        <Row>
          {/* <Image
            src="./Group 3.png"
            className="mb-5 mx-4"
            style={{ width: "200px", height: "150px" }}
            alt="Ornamen"
          /> */}

          <div className="content">
            <h1>Mengapa Memilih Tryout Online</h1>
            <h1>di <strong>GASCPNS</strong>?</h1>
          </div>
        </Row>

        <Col md={5}>
          <Card className="my-4 mx-2 shadow">
            <Card.Body className="d-flex align-items-center">
              <Image
                src="./iconQnA.png"
                className="mb-4 mx-3"
                style={{ width: "70px", height: "70px" }}
              />
              <div>
                <Card.Title>Soal Berkualitas</Card.Title>
                <Card.Text>
                Kami menyediakan soal-soal berkualitas yang disusun oleh tim ahli 
                berdasarkan kurikulum dan persyaratan terbaru CPNS. 
                Soal-soal kami telah dirancang untuk mempersiapkan Anda dengan baik menghadapi ujian CPNS.{" "}
                </Card.Text>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col md={5}>
          <Card className="my-4 mx-2 shadow">
            <Card.Body className="d-flex align-items-center">
              <Image
                src="./update-icon.png"
                className="mb-4 mx-3"
                style={{ width: "70px", height: "70px" }}
              />
              <div>
                <Card.Title>Terupdate</Card.Title>
                <Card.Text>
                Kami selalu memperbarui bank soal kami sesuai dengan perkembangan terbaru dalam tes CPNS. 
                Dengan mengikuti tryout online kami, Anda akan mendapatkan akses ke soal-soal yang sesuai 
                dengan format dan standar terbaru ujian CPNS.{" "}
                </Card.Text>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col md={5}>
          <Card className="my-4 mx-2 shadow">
            <Card.Body className="d-flex align-items-center">
              <Image
                src="./flexible-icon.png"
                className="mb-4 mx-3"
                style={{ width: "70px", height: "70px" }}
              />
              <div>
                <Card.Title>Fleksibilitas Waktu</Card.Title>
                <Card.Text>
                Dengan tryout online di <strong>GASCPNS</strong>, Anda dapat mengaksesnya kapan saja dan di mana saja sesuai 
                dengan jadwal Anda. Tidak perlu repot-repot datang ke tempat tertentu untuk mengikuti tryout, 
                sehingga memberikan Anda fleksibilitas 
                yang lebih besar dalam persiapan.{" "}
                </Card.Text>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col md={5}>
          <Card className="my-4 mx-2 shadow">
            <Card.Body className="d-flex align-items-center">
              <Image
                src="./monitoring-icon.png"
                className="mb-4 mx-3"
                style={{ width: "70px", height: "70px" }}
              />
              <div>
                <Card.Title>Monitoring dan Evaluasi</Card.Title>
                <Card.Text>
                Kami menyediakan fitur monitoring dan evaluasi yang membantu Anda melacak kemajuan belajar Anda. 
                Dengan demikian, Anda dapat mengidentifikasi kelemahan Anda dan fokus pada area yang perlu diperbaiki 
                untuk meningkatkan hasil ujian CPNS Anda.{" "}
                </Card.Text>
              </div>
            </Card.Body>
          </Card>
        </Col>
        {/* <Image
          src="./Group 3.png"
          className="mb-9 mx-4"
          style={{
            width: "200px",
            height: "150px",
            position: "absolute",
            bottom: 0,
            right: 0,
          }}
          alt="Ornamen"
        /> */}
      </Row>
    </Container>
  );
};

export default ContentComp;
