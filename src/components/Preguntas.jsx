import { Container } from "react-bootstrap";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./CSS/Preguntas.css";
import { useEffect, useState } from "react";

const API_PREGUNTAS =
  "https://www.clinicatecnologica.cl/ipss/tejelanasVivi/api/v1/faq";
function Preguntas() {
  const [preguntas, setPreguntas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    document.body.classList.add("preguntas-bg");
    return () => {
      document.body.classList.remove("preguntas-bg");
    };
  }, []);
  useEffect(() => {
    const traerPreguntas = async () => {
      try {
        const headers = { Authorization: "Bearer ipss.get" };
        const proxy = "https://cors-anywhere.herokuapp.com/";
        const response = await fetch(proxy + API_PREGUNTAS, { headers });
        if (!response.ok) {
          throw new Error("Error al cargar la información");
        }
        const result = await response.json();
        setPreguntas(result.data); // Guarda el array de preguntas directamente
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    traerPreguntas();
  }, []);
  if (loading) return <div className="loading">Cargando Datos...</div>;
  if (error) return <div>{error}</div>;
  return (
    <>
      <Navbar />
      <Container className="preguntas-container d-flex flex-column min-vh-100 justify-content-center align-items-center">
        <div className="preguntas text-center">
          <h1>Preguntas Frecuentes</h1>
          {preguntas.map((item) => (
            <div key={item.id} className="pregunta-item">
              <p className="pregunta">
                <strong>{item.titulo}</strong>
              </p>
              <p>{item.respuesta}</p>
              <br />
              {preguntas.length === 0 && (
                <p>No hay preguntas frecuentes disponibles.</p>
              )}
            </div>
          ))}
        </div>
      </Container>
      <Footer></Footer>
    </>
  );
}
export default Preguntas;
