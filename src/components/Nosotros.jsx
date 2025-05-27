import { Container } from "react-bootstrap";
import Navbar from "./Navbar";
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
    document.body.classList.add("productos-bg");
    return () => {
      document.body.classList.remove("productos-bg");
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
  if (loading) return <div className="loading">Cargando Quienes somos</div>;
  if (error) return <div>{error}</div>;

  return (
    <>
      <Navbar />
      <Container className="nosotros-container d-flex flex-column justify-content-center align-items-center">
        <div className="nosotros text-center">
          <h1>Quienes Somos</h1>
          <p>{nosotros}</p>
          <br />
          <img src={vivi} alt="" />
        </div>
      </Container>
    </>
  );
}

export default Nosotros;
