import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "./CSS/Banner.css";

const Banner = () => {
  return (
    <div className="banner text-center d-flex flex-column justify-content-center align-items-center">
      <div className="banner-content">
        <h1>Bienvenidos a Teje lanas Vivi</h1>
        <Link to="/talleres">
          <Button variant="dark" id="nosotros">
            Revisa nuestros talleres
          </Button>
        </Link>
      </div>
    </div>
  );
};
export default Banner;
