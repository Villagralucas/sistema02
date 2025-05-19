import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { validarPaso } from "../utils/validacionesTurno";
import { formatearCelular } from "../utils/formatearCelular";
import "./StepperVertical.css";

const steps = [
  { title: "Paso 1", description: "Datos personales" },
  { title: "Paso 2", description: "Detalles del turno" },
  { title: "Paso 3", description: "Confirmar" },
];

const initialData = {
  nombre: "",
  email: "",
  celular: "",
  servicio: "",
  fecha: "",
  hora: "",
};

const horariosDisponibles = [
  { hora: "09:00", disponible: true },
  { hora: "10:00", disponible: false },
  { hora: "11:00", disponible: true },
  { hora: "12:00", disponible: true },
  { hora: "13:00", disponible: false },
  { hora: "14:00", disponible: true },
];

const StepperVertical = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState(initialData);
  const [showTicket, setShowTicket] = useState(false);
  const [errores, setErrores] = useState({});

  // Actualiza datos y limpia errores al editar
  const handleChange = (e) => {
    let { name, value } = e.target;
    if (name === "nombre") {
      // Elimina números y símbolos, deja solo letras, tildes y espacios. Máximo 16.
      value = value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, "").slice(0, 16);
    }
    if (name === "celular") {
      // Sólo números, máximo 11 dígitos, con formateo argentino
      value = formatearCelular(value);
    }
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrores((prev) => ({ ...prev, [name]: false }));
  };

  const handleHoraClick = (hora, disponible) => {
    if (disponible) {
      setFormData((prev) => ({
        ...prev,
        hora: hora,
      }));
      setErrores((prev) => ({ ...prev, hora: false }));
    }
  };

  // Avanzar paso con validación EXTERNA
  const handleNext = () => {
    const nuevosErrores = validarPaso(formData, activeStep);
    setErrores(nuevosErrores);
    if (Object.keys(nuevosErrores).length !== 0) {
      toast.error("Por favor, completá todos los campos correctamente.");
      return;
    }
    setActiveStep((prev) => prev + 1);
  };

  // Confirmar con validación EXTERNA
  const handleConfirmar = () => {
    const nuevosErrores = validarPaso(formData, 1);
    setErrores(nuevosErrores);
    if (Object.keys(nuevosErrores).length !== 0) {
      setActiveStep(1);
      toast.error("Faltan completar campos en el paso anterior.");
      return;
    }
    setShowTicket(true);
    toast.success("¡Turno reservado con éxito!");
  };

  const handleNuevoTurno = () => {
    setShowTicket(false);
    setActiveStep(0);
    setFormData(initialData);
    setErrores({});
  };

  return (
    <div className="stepper-vertical-container">
      <ToastContainer position="top-right" autoClose={2000} />
      <div className="stepper-vertical">
        {steps.map((step, idx) => (
          <div
            className={`step-vertical-card ${
              activeStep === idx ? "active" : activeStep > idx ? "done" : ""
            }`}
            key={idx}
          >
            <div className="stepper-vertical-header">
              <div className={`circle-vertical ${activeStep === idx ? "active" : ""}`}>{idx + 1}</div>
              <div>
                <div className="stepper-title">{step.title}</div>
                <div className="stepper-desc">{step.description}</div>
              </div>
            </div>
            {activeStep === idx && !showTicket && (
              <div className="stepper-vertical-content">
                {/* Paso 1 */}
                {idx === 0 && (
                  <div className="step-content-grid">
                    <input
                      name="nombre"
                      type="text"
                      placeholder="Nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      maxLength={16}
                      style={{
                        border: errores.nombre ? "2px solid red" : undefined,
                      }}
                    />
                    {errores.nombre && (
                      <div style={{ color: "red", fontSize: "0.95rem" }}>{errores.nombre}</div>
                    )}

                    <input
                      name="email"
                      type="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      style={{
                        border: errores.email ? "2px solid red" : undefined,
                      }}
                    />
                    {errores.email && (
                      <div style={{ color: "red", fontSize: "0.95rem" }}>{errores.email}</div>
                    )}

                    <input
                      name="celular"
                      type="tel"
                      placeholder="Celular"
                      value={formData.celular}
                      onChange={handleChange}
                      maxLength={13} // incluye guiones
                      style={{
                        border: errores.celular ? "2px solid red" : undefined,
                      }}
                      autoComplete="off"
                      inputMode="numeric"
                    />
                    {errores.celular && (
                      <div style={{ color: "red", fontSize: "0.95rem" }}>{errores.celular}</div>
                    )}
                  </div>
                )}
                {/* Paso 2 */}
                {idx === 1 && (
                  <>
                    <div className="step-content-grid">
                      <select
                        name="servicio"
                        value={formData.servicio}
                        onChange={handleChange}
                        style={{
                          border: errores.servicio ? "2px solid red" : undefined,
                        }}
                      >
                        <option value="">Elegí tu servicio</option>
                        <option value="Corte">Corte</option>
                        <option value="Afeitado">Afeitado</option>
                      </select>
                      {errores.servicio && (
                        <div style={{ color: "red", fontSize: "0.95rem" }}>{errores.servicio}</div>
                      )}

                      <input
                        name="fecha"
                        type="date"
                        value={formData.fecha}
                        onChange={handleChange}
                        style={{
                          border: errores.fecha ? "2px solid red" : undefined,
                        }}
                      />
                      {errores.fecha && (
                        <div style={{ color: "red", fontSize: "0.95rem" }}>{errores.fecha}</div>
                      )}
                    </div>
                    <div className="horarios-grid">
                      {horariosDisponibles.map((h, i) => (
                        <div
                          key={i}
                          className={`horario-card ${!h.disponible ? "ocupado" : ""} ${formData.hora === h.hora ? "selected" : ""}`}
                          onClick={() => handleHoraClick(h.hora, h.disponible)}
                          style={{
                            border: errores.hora && !formData.hora && i === 0 ? "2px solid red" : undefined,
                          }}
                        >
                          {h.hora}
                          {!h.disponible && <span className="ocupado-text">Ocupado</span>}
                        </div>
                      ))}
                    </div>
                    {errores.hora && (
                      <div style={{ color: "red", fontSize: "0.95rem" }}>{errores.hora}</div>
                    )}
                  </>
                )}
                {/* Paso 3 */}
                {idx === 2 && (
                  <div className="step-content-grid">
                    <div>
                      <strong>Nombre:</strong> {formData.nombre || "-"}
                    </div>
                    <div>
                      <strong>Email:</strong> {formData.email || "-"}
                    </div>
                    <div>
                      <strong>Celular:</strong> {formData.celular || "-"}
                    </div>
                    <div>
                      <strong>Servicio:</strong> {formData.servicio || "-"}
                    </div>
                    <div>
                      <strong>Fecha:</strong> {formData.fecha || "-"}
                    </div>
                    <div>
                      <strong>Hora:</strong> {formData.hora || "-"}
                    </div>
                  </div>
                )}
                <div className="stepper-buttons-vertical">
                  <button
                    onClick={() => setActiveStep((prev) => prev - 1)}
                    disabled={activeStep === 0}
                  >
                    Atrás
                  </button>
                  {idx < steps.length - 1 && (
                    <button
                      onClick={handleNext}
                    >
                      Siguiente
                    </button>
                  )}
                  {idx === steps.length - 1 && (
                    <button
                      className="confirmar"
                      onClick={handleConfirmar}
                    >
                      Confirmar
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      {/* TICKET FINAL */}
      {showTicket && (
        <div className="ticket-card">
          <div className="ticket-title">🎟️ Ticket de Turno</div>
          <div className="ticket-info">
            <div><strong>Nombre:</strong> {formData.nombre}</div>
            <div><strong>Email:</strong> {formData.email}</div>
            <div><strong>Celular:</strong> {formData.celular}</div>
            <div><strong>Servicio:</strong> {formData.servicio}</div>
            <div><strong>Fecha:</strong> {formData.fecha}</div>
            <div><strong>Hora:</strong> {formData.hora}</div>
          </div>
          <button className="nuevo-turno" onClick={handleNuevoTurno}>Nuevo turno</button>
        </div>
      )}
    </div>
  );
};

export default StepperVertical;
