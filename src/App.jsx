import { useState } from "react";
/* import "../App.css"; */
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Carrusel from "./components/Carrusel";
import Banner from "./components/Banner";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <Banner />

      {/* Zona de carruseles + contenido central */}
      <div className="container my-4">
        <div className="row">
          {/* Carrusel izquierdo */}
          <div className="col-md-3 mb-3">
            <Carrusel />
          </div>

          {/* Contenido central */}
          <div className="col-md-6 mb-3 text-center">
            <h2>Información Central</h2>
            <p>
              Aquí va el texto informativo con imágenes y detalles que quieras
              mostrar.
            </p>
            <img
              src="https://via.placeholder.com/400x200"
              alt="Imagen central"
              className="img-fluid rounded"
            />
          </div>

          {/* Carrusel derecho */}
          <div className="col-md-3 mb-3">
            <Carrusel />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
