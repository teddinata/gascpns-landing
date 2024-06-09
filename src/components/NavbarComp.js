import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";

const NavbarComp = () => {
  return (
    <div className="navbar-wrapper">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="" className="fw-bold fs-4">
          <span style={{color: '#0ba7e3'}} className="">
            <img className="img-fluid" style={{ width: '150px' }} src="/logo-gascpns-biru.png" alt="Logo" />
          </span>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="https://staging.gascpns.com/login" className="mx-2">
                Beranda
              </Nav.Link>
              <Nav.Link href="https://staging.gascpns.com/login" className="mx-2">
                Fitur
              </Nav.Link>
              <Nav.Link href="https://staging.gascpns.com/login" className="mx-2">
                Tryout
              </Nav.Link>
              <Nav.Link href="https://staging.gascpns.com/login" className="mx-2">
                Testimoni
              </Nav.Link>
              <Nav.Link href="https://staging.gascpns.com/login" className="mx-2">
                Dashboard
              </Nav.Link>

              <a href='https://staging.gascpns.com/login'>
              <Button className="text-white btn-sm btn-info m-2" style={{ width: "100px", borderRadius: "14px" }}>Masuk</Button>
              </a>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComp;
