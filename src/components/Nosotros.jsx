import { Container } from "react-bootstrap";
import Navbar from "./Navbar";
import Footer from "./Footer";
import vivi from "./Imagenes/Certificacion/Certifiacion.png";
import "./CSS/Nosotros.css";
import { useEffect, useState } from "react";

const API_NOSOTROS =
  "https://www.clinicatecnologica.cl/ipss/tejelanasVivi/api/v1/about-us";
function Nosotros() {
  const [nosotros, setNosotros] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    document.body.classList.add("nosotros-bg");
    return () => {
      document.body.classList.remove("nosotros-bg");
    };
  }, []);
  useEffect(() => {
    const traerNosotros = async () => {
      try {
        const headers = { Authorization: "Bearer ipss.get" };
        const proxy = "https://cors-anywhere.herokuapp.com/";
        const response = await fetch(proxy + API_NOSOTROS, { headers });
        if (!response.ok) {
          throw new Error("Error al cargar la información");
        }
        const result = await response.json();
        setNosotros(result.data); // Guarda el string directamente
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    traerNosotros();
  }, []);
  if (loading) return <div className="loading">Cargando Datos...</div>;
  if (error) return <div>{error}</div>;

  return (
    <>
      <Navbar />
      <Container className="nosotros-container d-flex flex-column min-vh-100 justify-content-center align-items-center">
        <div className="nosotros text-center">
          <h2 className="mt-5">Quienes Somos</h2>
          <p className="nosotros">{nosotros}</p>
          <br />
          <img src={vivi} alt="" className="img-fluid" />
        </div>
        <br />
      </Container>
      <Footer></Footer>
    </>
  );
}

export default Nosotros;
