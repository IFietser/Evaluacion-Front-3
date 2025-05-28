import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import whatsapp from "./Imagenes/whatsapp.png";
import facebook from "./Imagenes/Facebook.png";
import instagram from "./Imagenes/Instagram.png";
import "./CSS/Footer.css";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-auto">
      <Container>
        <Row>
          <Col md={4} className="text-center mb-3">
            <h5>Contacto</h5>
            <div>
              <div className="red-social mb-2">
                <span className="icon-bg">
                  <img
                    src={whatsapp}
                    alt="whatsapp"
                    style={{
                      width: "32px",
                      height: "32px",
                      marginBottom: "5px",
                    }}
                  />
                </span>
                <div>
                  <a
                    className="whatsapp"
                    href="https://wa.me/56976322314?text=Quisiera%20informacion"
                  >
                    Whatsapp
                  </a>
                </div>
              </div>
            </div>
          </Col>
          <Col md={4} className="text-center mb-3">
            <h5>Teje Lanas Vivi &reg;</h5>
            <h5>Viviana Mendez Orrego</h5>
            <h6>Carlos Leon Briceño #1002 local 4, Laguna.</h6>
            <p>© {new Date().getFullYear()} Todos los derechos reservados.</p>
          </Col>
          <Col md={4} className="text-center mb-3">
            <h5>Redes Sociales</h5>
            <div>
              <div className="red-social mb-2">
                <span className="icon-bg">
                  <img
                    src={facebook}
                    alt="facebook"
                    style={{
                      width: "32px",
                      height: "32px",
                      marginBottom: "5px",
                    }}
                  />
                </span>
                <div>
                  <a
                    className="facebook"
                    href="https://web.facebook.com/viviana.m.orrego.5/"
                  >
                    Facebook
                  </a>
                </div>
              </div>
              <div>
                <span className="icon-bg">
                  <img
                    src={instagram}
                    alt="instagram"
                    style={{
                      width: "32px",
                      height: "32px",
                      marginBottom: "5px",
                    }}
                  />
                </span>
                <div>
                  <a
                    className="instagram"
                    href="https://www.instagram.com/teje_lanas.vivi/"
                  >
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
