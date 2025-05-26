import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Carrusel1 from "./components/Carrusel1";
import Carrusel2 from "./components/Carrusel2";
import Banner from "./components/Banner";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="d-flex flex-column">
      <Navbar />
      <Banner />
      <div className="row">
        {/* Carrusel izquierdo */}
        <div className="col-md-4 ">
          <div className="carrusel">
            <Carrusel1 />
          </div>
        </div>
        {/* Contenido central */}
        <div className="col-md-4 mb-3 text-center">
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
        <div className="col-md-4 ">
          <div className="carrusel">
            <Carrusel2 />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
