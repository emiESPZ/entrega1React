import React from "react";
import { Container, Nav, Navbar, NavDropdown, Button } from "react-bootstrap";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import { useContext } from "react";
import useCartContext from "../store/CartContext";

const NavBar = () => {
  const { contextFunction } = useCartContext();
  contextFunction();
  return (
    <>
      {" "}
      <Navbar bg="light" expand="lg">
        <Container>
          <Link to="/productos" style={{ textDecoration: "none" }}>
            <Navbar.Brand
              className="me-5"
              style={{ marginLeft: "-15rem", textDecoration: "none" }}
            >
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
              <Link
                to="/productos"
                style={{
                  textDecoration: "none",
                  color: "black",
                  textAlign: "center",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "0.5rem",
                }}
              >
                Home
              </Link>
              <Link
                to="/instrument/Guitarra"
                style={{
                  textDecoration: "none",
                  color: "black",
                  textAlign: "center",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "0.5rem",
                }}
              >
                Guitarra
              </Link>
              <Link
                to="/instrument/Bajo"
                style={{
                  textDecoration: "none",
                  color: "black",
                  textAlign: "center",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "0.5rem",
                }}
              >
                Bajo
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
              <Button
                href="/cart"
                style={{ marginLeft: "5rem", marginRight: "-15rem" }}
              >
                <CartWidget />
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
