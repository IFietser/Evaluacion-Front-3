import { useState } from "react";
/*import ././App.css"; */
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
      <Carrusel />
      <Footer />
    </div>
  );
}

export default App;
