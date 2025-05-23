import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" expand="sm">
        <Container fluid>
          <Navbar.Brand href="#Inicio">Navbar</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='bacic-navbar-nav'>
          <Nav className="ms-auto">
            <Nav.Link href="#Inicio">Inicio</Nav.Link>
            <Nav.Link href="#Servicios">Servicios</Nav.Link>
            <Nav.Link href="#Sobre_nosotros">Sobre nosotros</Nav.Link>
            <Nav.Link href="#Prueba">Prueba</Nav.Link>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;
