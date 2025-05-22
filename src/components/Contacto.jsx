import React, { useState } from "react";

const contactos = [
  {
    tipo: "Teléfono / WhatsApp",
    valor: "+54 9 221 123-4567",
    icono: "fa-brands fa-whatsapp",
    link: "https://wa.me/542211234567"
  },
  {
    tipo: "Email",
    valor: "turnofacil@barber.com",
    icono: "fa-solid fa-envelope",
    link: "mailto:turnofacil@barber.com"
  }
];

const labelStyle = {
  fontSize: 22,
  fontWeight: 700,
  letterSpacing: 1,
  marginBottom: 5,
  color: "var(--color-active)"
};

const Contacto = () => {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    mensaje: ""
  });
  const [enviado, setEnviado] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setEnviado(true);
    setTimeout(() => setEnviado(false), 3200);
    setForm({ nombre: "", email: "", mensaje: "" });
  };

  return (
    <section style={{
        width: "100%",
  maxWidth: 1050,
  margin: "0 auto",
  marginTop: 54,
  padding: "34px 12px",
  minHeight: "68vh",
  display: "flex",
  flexWrap: "wrap",
  gap: 40,
  justifyContent: "center",
  alignItems: "flex-start"
    }}>
      {/* Formulario */}
      <form
        onSubmit={handleSubmit}
        style={{
          flex: "1 1 350px",
          minWidth: 320,
          background: "var(--color-card)",
          border: "1px solid var(--color-card-border)",
          borderRadius: "var(--radius-card)",
          boxShadow: "0 4px 18px rgba(0,0,0,0.08)",
          padding: "32px 24px",
          display: "flex",
          flexDirection: "column",
          gap: 20,
          maxWidth: 480
        }}
      >
        <h1 style={{ fontSize: 42, color: "var(--color-active)", marginBottom: 8, letterSpacing: 2 }}>Consulta</h1>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor="nombre" style={labelStyle}>Nombre completo</label>
          <input
            id="nombre"
            type="text"
            name="nombre"
            placeholder="Ej: Lucas Fernández"
            value={form.nombre}
            onChange={handleChange}
            required
            style={{
              padding: "12px 14px",
              fontSize: 19,
              borderRadius: 8,
              border: "1px solid var(--color-card-border)",
              fontFamily: "'Bebas Neue', cursive"
            }}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor="email" style={labelStyle}>Correo electrónico</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Ej: nombre@email.com"
            value={form.email}
            onChange={handleChange}
            required
            style={{
              padding: "12px 14px",
              fontSize: 19,
              borderRadius: 8,
              border: "1px solid var(--color-card-border)",
              fontFamily: "'Bebas Neue', cursive"
            }}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor="mensaje" style={labelStyle}>Tu consulta</label>
          <textarea
            id="mensaje"
            name="mensaje"
            placeholder="¿En qué te podemos ayudar?"
            value={form.mensaje}
            onChange={handleChange}
            required
            rows={5}
            style={{
              padding: "12px 14px",
              fontSize: 19,
              borderRadius: 8,
              border: "1px solid var(--color-card-border)",
              fontFamily: "'Bebas Neue', cursive",
              resize: "vertical"
            }}
          />
        </div>
        <button
          type="submit"
          style={{
            background: "var(--color-active)",
            color: "#fff",
            border: "none",
            borderRadius: 8,
            fontSize: 23,
            padding: "12px",
            cursor: "pointer",
            fontFamily: "'Bebas Neue', cursive",
            letterSpacing: 2
          }}
        >
          Enviar consulta
        </button>
        {enviado && (
          <div style={{
            background: "var(--color-done)",
            color: "#fff",
            padding: "10px 0",
            borderRadius: 6,
            textAlign: "center",
            fontSize: 21,
            marginTop: 5
          }}>
            ¡Consulta enviada! Te vamos a responder pronto.
          </div>
        )}
      </form>

      {/* Contactos al costado */}
      <div style={{
        display: "flex",
        flexDirection: "column",
        gap: 22,
        flex: "1 1 220px",
        minWidth: 220,
        maxWidth: 310
      }}>
        {contactos.map((c, i) => (
          <a
            key={i}
            href={c.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "var(--color-card)",
              border: "1.5px solid var(--color-active)",
              borderRadius: "var(--radius-card)",
              boxShadow: "0 4px 18px rgba(24,131,88,0.05)",
              padding: "30px 22px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 9,
              textDecoration: "none",
              color: "var(--color-text)",
              transition: "transform .18s, box-shadow .18s"
            }}
            className="contacto-card"
          >
            <i className={c.icono} style={{
              fontSize: 36,
              color: "var(--color-active)",
              marginBottom: 6
            }}></i>
            <span style={{
              fontSize: 23,
              fontWeight: 700,
              color: "var(--color-active)",
              letterSpacing: 1,
              marginBottom: 2
            }}>{c.tipo}</span>
            <span style={{
              fontSize: 19,
              letterSpacing: 1
            }}>{c.valor}</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contacto;
