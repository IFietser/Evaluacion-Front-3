import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import banner from "./Imagenes/banner.png";
import "./CSS/Banner.css";

const Banner = () => {
  return (
    <div className="banner text-center d-flex flex-column justify-content-center align-items-center">
      <div className="banner-content">
        <img src={banner} alt="" className="img-fluid" />
      </div>
    </div>
  );
};
export default Banner;
