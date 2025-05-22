import React from "react";

const servicios = [
  {
    titulo: "Corte + Barba",
    desc: "El clásico combo, full style: corte de pelo a máquina o tijera + perfilado y arreglo de barba.",
    icono: "fa-solid fa-scissors"
  },
  {
    titulo: "Perfilado de cejas",
    desc: "Detalle y prolijidad: perfilamos tus cejas para un look limpio y moderno.",
    icono: "fa-solid fa-eye"
  },
  {
    titulo: "Coloración",
    desc: "Renová tu imagen con un color que va con vos. Cabello o barba, te asesoramos.",
    icono: "fa-solid fa-paint-brush"
  },
  {
    titulo: "Bebidas",
    desc: "Disfrutá de café, agua y otras bebidas de cortesía mientras te atendemos.",
    icono: "fa-solid fa-mug-hot"
  }
];

const cardStyle = {
  background: "var(--color-card)",
  border: "1px solid var(--color-card-border)",
  borderRadius: "var(--radius-card)",
  padding: "22px",
  margin: "14px",
  flex: "1 1 210px",
  maxWidth: "310px",
  minWidth: "200px",
  boxShadow: "0 4px 18px rgba(0,0,0,0.08)",
  transition: "transform .15s",
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
};

const iconStyle = {
  fontSize: 38,
  color: "var(--color-active)",
  marginBottom: 14
};

const Servicios = () => (
  <section style={{ width: "100%", maxWidth: 1100, margin: "0 auto", padding: "32px 8px" }}>
    <h1 style={{ fontSize: 44, letterSpacing: 2, color: "var(--color-active)", marginBottom: 22 }}>Servicios</h1>
    <div style={{
      display: "flex",
      flexWrap: "wrap",
      gap: "22px",
      justifyContent: "center"
    }}>
      {servicios.map((s, i) => (
        <div
          key={i}
          style={cardStyle}
          className="servicio-card"
        >
          <i className={s.icono} style={iconStyle}></i>
          <h2 style={{ fontSize: 28, margin: 0 }}>{s.titulo}</h2>
          <p style={{
            fontSize: 18,
            color: "var(--color-text)",
            marginTop: 12,
            textAlign: "center"
          }}>{s.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Servicios;
