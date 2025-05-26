import Carousel from "react-bootstrap/Carousel";
import goku from "./Imagenes/goku.jpeg";
import eren from "./Imagenes/eren.jpeg";
import "./CSS/Carrusel.css";
function Carrusel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="carrusel-img" src={goku} alt="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p className="texto">
            Nulla vitae elit libero, a pharetra augue mollis interdum.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="carrusel-img" src={eren} alt="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p className="texto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="carrusel-img" src={goku} alt="Third slide" />{" "}
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p className="texto">
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrusel;
