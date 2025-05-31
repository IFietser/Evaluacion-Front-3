import Navbar from "./Navbar";
import Footer from "./Footer";
import Banner from "./Banner";
import crochet from "./Imagenes/Talleres/Tallerdecrochet.png";
import tejido from "./Imagenes/Talleres/Tallerdetejido .png";
import telar from "./Imagenes/Talleres/TallerTelar.png";
import "./CSS/Talleres.css";
import { Container } from "react-bootstrap";

function Talleres() {
  return (
    <>
      <Navbar />
      <Banner />
      <Container className="talleres-container d-flex flex-column min-vh-100 justify-content-center align-items-center">
        <br />
        <div
          className="Talleres-content d-flex flex-column justify-content-center align-items-center"
          style={{ minHeight: "20vh" }}
        >
          <h1 className="text-fluid">Tejidos Lana Vivi</h1>
          <p className="text-center">
            Aqui se mostraran los talleres que se realizan en la tienda
          </p>
        </div>
        <div className="row justify-content-center">
          {/* Taller 1 */}
          <div className="col-md-4 mb-3">
            <h2 className="text-center">Taller de crochet</h2>
            <div className="carrusel">
              <img className="Talleres-img" src={crochet} alt="crochet" />
            </div>
          </div>
          {/* Taller 2 */}
          <div className="col-md-4 mb-3">
            <h2 className="text-center">Taller de tejido </h2>
            <div className="carrusel">
              <img className="Talleres-img" src={tejido} alt="Tejido" />
            </div>
          </div>
          {/* Taller 3 */}
          <div className="col-md-4 mb-3">
            <h2 className="text-center">Taller de Telar</h2>
            <div className="carrusel">
              <img className="Talleres-img" src={telar} alt="Telar" />
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default Talleres;
