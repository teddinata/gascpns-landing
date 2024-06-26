import React from "react";
import { Col, Row } from "react-bootstrap";
// import { Container, Row, Col, Card, Image } from "react-bootstrap";

const FooterComp = () => {
  return (
    <footer className="ftr py-5 mt-4">
      <div className="container">
        <div className="row justify-cotent-center m-0 ms-3">
          <Row className="justify-content-between">
            <Col className="col-lg-5 col-12">
              <h2 className="text-white fw-bold">
                Dapatkan Info Terupdate bersama GASCPNS
              </h2>
            </Col>
            <Col className="col-lg-6 col-12">
              <form className="bg-white rounded d-flex justify-content-end p-2">
                <div className="w-100">
                  <input
                    type="text"
                    className="form-control border-0"
                    id="search"
                    placeholder=""
                  />
                </div>
                <div className="col-auto">
                  <a href="https://app.gascpns.com/login">
                    <button type="submit" className="btn btn-dark text-white">
                      Mulai Sekarang
                    </button>
                  </a>
                </div>
              </form>
            </Col>
          </Row>

          <Row
            className="py-5 justify-content-between"
            style={{ borderBottom: "2px white solid" }}
          >
            <div className="col-md-4 col-sm-12">
              <div className="row">
                <div className="col">
                  <a
                    className="d-inline-flex align-items-center mb-2 text-body-emphasis text-decoration-none"
                    href="/"
                    aria-label="Bootstrap"
                  >
                    <img
                      className="img-fluid"
                      src="/logo-gascpns-putih.png"
                      alt="Logo"
                    />
                    <span className="fs-5"></span>
                  </a>
                  <ul className="list-unstyled small text-white">
                    <li className="mb-2">
                      Aplikasi Tryout CPNS terpercaya yang bisa membantu kalian
                      dalam pengerjaan ujian dalam tes CPNS
                    </li>
                    <li className="mb-2">&copy; 2024 GASCPNS.</li>
                    <li className="mb-2">V. 1.5.1</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-7 text-white">
              <div className="row">
                <div className="col-4">
                  <h4 className="fw-bold pb-2">Beranda</h4>
                  <ul className="list-unstyled">
                    <li className="mb-2">
                      <a href="/" className="text-decoration-none text-white">
                        Kebijakan Layanan
                      </a>
                    </li>
                    <li className="mb-2">
                      <a href="/" className="text-decoration-none text-white">
                        Career
                      </a>
                    </li>
                    <li className="mb-2">
                      <a
                        href="/testimoni"
                        className="text-decoration-none text-white"
                      >
                        Testimoni
                      </a>
                    </li>
                    <li className="mb-2">
                      <a href="/" className="text-decoration-none text-white">
                        Daftar Kelas
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="col-4">
                  <h4 className="fw-bold pb-2">Kontak</h4>
                  <ul className="list-unstyled">
                    <li className="mb-2">
                      <a
                        href="https://www.instagram.com/gascpns/"
                        className="text-decoration-none text-white"
                      >
                        Instagram
                      </a>
                    </li>
                    <li className="mb-2">
                      <a href="https://t.me/gascpns2024" 
                        target="_blank"
                        className="text-decoration-none text-white">
                        Telegram GASCPNS
                      </a>
                    </li>
                    <li className="mb-2">
                      <a
                        href="https://wa.me/6285155095022"
                        className="text-decoration-none text-white"
                      >
                        Whatsapp 1
                      </a>
                    </li>
                    <li className="mb-2">
                      <a
                        href="https://wa.me/6285183002434"
                        className="text-decoration-none text-white"
                      >
                        Whatsapp 2
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="col-4">
                  <h4 className="fw-bold pb-2">Alamat</h4>
                  <ul className="list-unstyled">
                    <li className="mb-2">
                    Jl. Bawean no. 119, Gunungsimping, Cilacap Tengah,
                        Cilacap, Jawa Tengah
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Row>

          <Row className="text-center text-white p-5">
            <div className="col-12">
              <p>
                &copy; 2024 GASCPNS. All rights reserved. | Designed by{" "}
                <a
                  href="https://www.instagram.com/gascpns/"
                  className="text-white"
                >
                  GASCPNS Indonesia
                </a>
              </p>
            </div>
          </Row>
        </div>
      </div>
    </footer>
  );
};

export default FooterComp;
