import React, { useState } from "react";
import "./CSS/Formulario.css";

function Formulario() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [errores, setErrores] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });
  const [formMensaje, setFormMensaje] = useState("");

  function validarEmail(correo) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(correo);
  }

  function validarFormulario() {
    let valido = true;
    const nuevosErrores = { nombre: "", email: "", mensaje: "" };

    if (nombre.trim() === "") {
      nuevosErrores.nombre = "Por favor, ingrese su nombre.";
      valido = false;
    }
    if (!validarEmail(email.trim())) {
      nuevosErrores.email = "Ingrese un correo electrónico válido.";
      valido = false;
    }
    if (mensaje.trim() === "") {
      nuevosErrores.mensaje = "Por favor, escriba un mensaje.";
      valido = false;
    }
    setErrores(nuevosErrores);
    return valido;
  }

  function handleSubmit(e) {
    e.preventDefault();
    setFormMensaje("");
    if (validarFormulario()) {
      setFormMensaje("Mensaje enviado correctamente.");
      setNombre("");
      setEmail("");
      setMensaje("");
      setErrores({ nombre: "", email: "", mensaje: "" });
    }
  }

  return (
    <section id="formulario-contacto" className="text-center">
      <div className="container">
        <div className="mx-auto" style={{ maxWidth: "600px" }}>
          <h5 className="auto mb-4">CONTÁCTANOS</h5>
          <form id="contacto-form" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="nombre" className="form-label">
                Nombre:
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                className="form-control"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
              />
              <small className="error" id="error-nombre">
                {errores.nombre}
              </small>
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Correo electrónico:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <small className="error" id="error-email">
                {errores.email}
              </small>
            </div>
            <div className="mb-3">
              <label htmlFor="mensaje" className="form-label">
                Mensaje:
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                rows={5}
                className="form-control"
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
                required
              ></textarea>
              <small className="error" id="error-mensaje">
                {errores.mensaje}
              </small>
            </div>
            <button type="submit" className="auto btn-primary">
              Enviar
            </button>
            <p id="form-mensaje" className="success">
              {formMensaje}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Formulario;
