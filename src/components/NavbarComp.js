import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from 'react-scroll';

const NavbarComp = () => {
  return (
    <div className="navbar-wrapper">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="" className="fw-bold fs-4">
            <span style={{color: '#0ba7e3'}}>
              <img className="img-fluid" style={{ width: '150px' }} src="/logo-gascpns-biru.png" alt="Logo" />
            </span>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center">
              {/* <Nav.Item>
                <Link
                  to="hero"
                  smooth={true}
                  duration={500}
                  className="nav-link mx-2"
                  style={{ cursor: 'pointer' }} // Menambahkan cursor pointer
                >
                  Beranda
                </Link>
              </Nav.Item> */}
              <Nav.Item>
                <Link
                  to="content"
                  smooth={true}
                  duration={500}
                  className="nav-link mx-2"
                  style={{ cursor: 'pointer' }} // Menambahkan cursor pointer
                >
                  Fitur
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link
                  to="tryout"
                  smooth={true}
                  duration={500}
                  className="nav-link mx-2"
                  style={{ cursor: 'pointer' }} // Menambahkan cursor pointer
                >
                  Tryout
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link
                  to="testimoni"
                  smooth={true}
                  duration={500}
                  className="nav-link mx-2"
                  style={{ cursor: 'pointer' }} // Menambahkan cursor pointer
                >
                  Testimoni
                </Link>
              </Nav.Item>
              {/* nav to blog another page https://blog.gascpns.com */}
              <Nav.Item>
                <a href='https://berita.gascpns.id' 
                  target="_blank"
                  className="nav-link mx-2" style={{ cursor: 'pointer' }}>
                  Blog
                </a>
              </Nav.Item>
              {/* join our telegram */}
              <Nav.Item>
                <a href='https://t.me/gascpns2024' 
                  target="_blank"
                  className="nav-link mx-2" style={{ cursor: 'pointer' }}>
                  Gabung Grup Telegram
                </a>
              </Nav.Item>
              <a href='https://app.gascpns.id/login'>
                <Button className="text-white btn btn-info mx-2" style={{ width: "150px", borderRadius: "14px" }} >
                Dashboard
                </Button>
              </a>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComp;
