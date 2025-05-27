import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Carrusel1 from "./components/Carrusel1";
import Carrusel2 from "./components/Carrusel2";
import Banner from "./components/Banner";
import info from "./components/Imagenes/Informacion.png";
import Talleres from "./components/Talleres";
import Productos from "./components/Productos";
import Nosotros from "./components/Nosotros";
import Preguntas from "./components/Preguntas";
import "./components/CSS/App.css";

function Home() {
  return (
    <div className="d-flex flex-column">
      <Navbar />
      <Banner />
      <div className="row">
        {/* Carrusel izquierdo */}
        <div className="col-md-4 mb-3">
          <h2 className="text-center">Nuestros Trabajos</h2>
          <div className="carrusel">
            <Carrusel1 />
          </div>
        </div>
        {/* Contenido central */}
        <div className="col-md-4 mb-3">
          <h2 className="text-center">Información Central</h2>
          <div className="carrusel">
            <img className="info-img" src={info} alt="Trabajo1" />
          </div>
        </div>
        {/* Carrusel derecho */}
        <div className="col-md-4 mb-3">
          <h2 className="text-center">Tienda</h2>
          <div className="carrusel">
            <Carrusel2 />
          </div>
        </div>
      </div>
      <div id="footer">
        <Footer />
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/talleres" element={<Talleres />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/preguntas" element={<Preguntas />} />
      </Routes>
    </Router>
  );
}

export default App;
