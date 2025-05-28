import { Container } from "react-bootstrap";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./CSS/Productos.css";
import { useEffect, useState } from "react";

const API_PRODUCTOS =
  "https://www.clinicatecnologica.cl/ipss/tejelanasVivi/api/v1/products-services";

function Productos() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    document.body.classList.add("productos-bg");
    return () => {
      document.body.classList.remove("productos-bg");
    };
  }, []);

  useEffect(() => {
    const traerProductos = async () => {
      try {
        const headers = { Authorization: "Bearer ipss.get" };
        const proxy = "https://cors-anywhere.herokuapp.com/";
        const response = await fetch(proxy + API_PRODUCTOS, { headers });
        if (!response.ok) {
          throw new Error("Error al cargar los productos");
        }
        const result = await response.json();
        setProductos(result.data.productos);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    traerProductos();
  }, []);

  if (loading) return <div className="loading">Cargando productos...</div>;
  if (error) return <div>{error}</div>;

  return (
    <>
      <Navbar />
      <Container className="productos-container d-flex flex-column min-vh-100 justify-content-center align-items-center">
        <div className="productos text-center">
          <h1>Nuestros Productos</h1>
          {productos.length === 0 && (
            <p>No hay productos disponibles en este momento.</p>
          )}
          {productos.map((item) => (
            <div key={item.id} className="producto-item">
              <p className="producto-nombre">
                <strong>{item.nombre}</strong>
              </p>
              <p className="descripcion">{item.descripcion}</p>
              <p>
                Tallas:{" "}
                {item.tallas && item.tallas.length > 0
                  ? item.tallas.join(", ")
                  : "No disponible"}
              </p>
              <p>
                Colores:{" "}
                {item.colores && item.colores.length > 0
                  ? item.colores.join(", ")
                  : "No disponible"}
              </p>
              <p>Precio: ${item.precio}</p>
              {item.imgs && item.imgs.length > 0 && (
                <img
                  src={item.imgs[0]}
                  alt={item.nombre}
                  className="producto-imagen"
                />
              )}
              <hr />
            </div>
          ))}
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default Productos;
