import "./CSS/Historia.css";
import vivi from "./Imagenes/Certificacion/Certifiacion.png";
function Historia() {
  return (
    <div className="historia-content">
      <h1 className="text-center">Nosotros</h1>
      <p className="historia-text">
        Teje Lanas Vivi nació del amor por el arte y la calidez de los hilos.
        Vivi, una apasionada tejedora de toda la vida, convirtió su talento en
        una forma de conectar con los demás. En los momentos más tranquilos del
        día, entre tazas de té y lanas de colores, tejía no solo prendas, sino
        historias, recuerdos y cariño. Con el paso del tiempo, su hija inspirada
        por la dedicación y ternura de su madre decidió unirse al proyecto.
        Juntas, madre e hija transformaron el rincón de la casa donde todo
        comenzó en una pequeña tienda llena de magia y texturas. Hoy, Teje Lanas
        Vivi es mucho más que un negocio: es un espacio donde cada tejido guarda
        un pedacito de amor familiar. Desde gorritos y chalecos hasta muñecos y
        decoraciones, cada creación refleja el esfuerzo, la paciencia y la unión
        entre generaciones.
      </p>
      <img src={vivi} alt="" />
    </div>
  );
}
export default Historia;
