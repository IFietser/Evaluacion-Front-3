import Carousel from "react-bootstrap/Carousel";
import "./CSS/Carrusel.css";
import Tienda1 from "./Imagenes/Tienda/Tienda1.png";
import Tienda2 from "./Imagenes/Tienda/Tienda2 .png";
import Tienda3 from "./Imagenes/Tienda/Tienda3.png";
import Tienda4 from "./Imagenes/Tienda/Tienda4.png";
import Tienda5 from "./Imagenes/Tienda/Tienda5.png";

function Carrusel2() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="carrusel-img" src={Tienda1} alt="Tienda1" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="carrusel-img" src={Tienda2} alt="Tienda2" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="carrusel-img" src={Tienda3} alt="Tienda3" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="carrusel-img" src={Tienda4} alt="Tienda4" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="carrusel-img" src={Tienda5} alt="Tienda5" />
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrusel2;
