import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom"; // Cambia Link por NavLink
import "bootstrap/dist/css/bootstrap.min.css";

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" expand="sm">
        <Container fluid>
          <Navbar.Brand>Tejidos Vivi</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={NavLink} to="/" end>
                Inicio
              </Nav.Link>
              <Nav.Link as={NavLink} to="/talleres">
                Talleres
              </Nav.Link>
              <Nav.Link as={NavLink} to="/productos">
                Productos
              </Nav.Link>
              <Nav.Link as={NavLink} to="/nosotros">
                Quienes Somos
              </Nav.Link>
              <Nav.Link as={NavLink} to="/preguntas">
                Preguntas Frecuentes
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;
