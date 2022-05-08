import React from "react";
import { Container, Nav, Navbar, NavDropdown, Button } from "react-bootstrap";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      {" "}
      <Navbar bg="light" expand="lg">
        <Container>
          <Link to="/">
            <Navbar.Brand className="me-5" href="#home">
              <img
                className="h-6"
                style={{ width: "35px" }}
                src={require("../img/guitar.png")}
                alt="guitarra"
              />
              MusicalInstruments
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link to="/">
                <Nav.Link href="#home">Home</Nav.Link>
              </Link>
              <Link to="/productos">
                <Nav.Link href="#link">Instrumentos</Nav.Link>
              </Link>
              <Link to="/instrumento/guitarra">
                <Nav.Link href="#link">Guitarra</Nav.Link>
              </Link>
              <Link to="/instrumento/bajo">
                <Nav.Link href="#link">Bajo</Nav.Link>
              </Link>
              <NavDropdown title="Accesorios" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <Button href="#">
                <CartWidget />
              </Button>{" "}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
