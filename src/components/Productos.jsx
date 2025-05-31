import { Container } from "react-bootstrap";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./CSS/Productos.css";
import { useEffect, useState } from "react";

const API_PRODUCTOS =
  "https://www.clinicatecnologica.cl/ipss/tejelanasVivi/api/v1/products-services";

function Productos() {
  const [productos, setProductos] = useState([]);
  const [servicios, setServicios] = useState([]);
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
        setServicios(result.data.servicios); // Guardar servicios
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
          <h2 className="mt-5">Nuestros Productos</h2>
          {productos.length === 0 && (
            <p>No hay productos disponibles en este momento.</p>
          )}
          {productos.map((item) => (
            <div key={item.id} className="producto-item">
              <p className="producto-nombre">
                <strong>{item.nombre}</strong>
              </p>
              <p className="descripcion">{item.descripcion}</p>
              {/* Mostrar tallas solo si existen */}
              {item.tallas && item.tallas.length > 0 && (
                <p className="tallas">Tallas: {item.tallas.join(", ")}</p>
              )}
              {/* Mostrar colores solo si existen */}
              {item.colores && item.colores.length > 0 && (
                <p className="colores">Colores: {item.colores.join(", ")}</p>
              )}
              {/* Mostrar precio si existe */}
              {"precio" in item && (
                <p className="precio">Precio: ${item.precio}</p>
              )}
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

          {/* Mostrar servicios */}
          <h2 className="mt-5">Talleres y Servicios</h2>
          {servicios.length === 0 && (
            <p>No hay talleres/servicios disponibles en este momento.</p>
          )}
          {servicios.map((servicio) => (
            <div key={servicio.id} className="producto-item">
              <p className="producto-nombre">
                <strong>{servicio.nombre}</strong>
              </p>
              <p className="ubicacion">Ubicación: {servicio.ubicacion}</p>
              <p className="cupos">Cupos: {servicio.cupos}</p>
              <p className="fecha">Fecha: {servicio.fecha}</p>
              {servicio.imgs && servicio.imgs.length > 0 && (
                <img
                  src={servicio.imgs[0]}
                  alt={servicio.nombre}
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
