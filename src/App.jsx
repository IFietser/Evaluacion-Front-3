import { useState } from "react";
/*import ././App.css"; */
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Carrusel from "./components/Carrusel";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <Carrusel />
      <Footer />
    </div>
  );
}

export default App;
