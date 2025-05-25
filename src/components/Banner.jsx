import Button from "react-bootstrap/Button";
import "./CSS/Banner.css";

const Banner = () => {
  return (
    <div className="banner text-center d-flex flex-column justify-content-center align-items-center">
      <div className="banner-content">
        <h1>Bienvenidos a Teje lanas Vivi</h1>
        <p>Revisa todo nuestro catalogo y nuestros clientes satisfechos</p>
        <Button variant="dark">Descubre mas</Button>
      </div>
    </div>
  );
};
export default Banner;
