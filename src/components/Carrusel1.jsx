import Carousel from "react-bootstrap/Carousel";
import "./CSS/Carrusel.css";
function Carrusel1() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="carrusel-img" src="" alt="Trabajo1" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p className="texto">
            Nulla vitae elit libero, a pharetra augue mollis interdum.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="carrusel-img" src="" alt="Trabajo2" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p className="texto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="carrusel-img" src="" alt="Trabajo3" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p className="texto">
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="carrusel-img" src="" alt="Trabajo4" />
        <Carousel.Caption>
          <h3>Fourth slide label</h3>
          <p className="texto">
            Nulla vitae elit libero, a pharetra augue mollis interdum.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="carrusel-img" src="" alt="Trabajo5" />
        <Carousel.Caption>
          <h3>Fifth slide label</h3>
          <p className="texto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="carrusel-img" src="" alt="Trabajo6" />
        <Carousel.Caption>
          <h3>Sixth slide label</h3>
          <p className="texto">
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrusel1;
