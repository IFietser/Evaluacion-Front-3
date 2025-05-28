import Carousel from "react-bootstrap/Carousel";
import trabajo1 from "./Imagenes/Trabajos/trabajos1.png";
import trabajo2 from "./Imagenes/Trabajos/trabajos2.png";
import trabajo3 from "./Imagenes/Trabajos/trabajos3.png";
import trabajo4 from "./Imagenes/Trabajos/trabajos4.png";
import trabajo5 from "./Imagenes/Trabajos/trabajos5.png";
import "./CSS/Carrusel.css";
function Carrusel1() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="carrusel-img" src={trabajo1} alt="Trabajo1" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="carrusel-img" src={trabajo2} alt="Trabajo2" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="carrusel-img" src={trabajo3} alt="Trabajo3" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="carrusel-img" src={trabajo4} alt="Trabajo4" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="carrusel-img" src={trabajo5} alt="Trabajo5" />
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrusel1;
