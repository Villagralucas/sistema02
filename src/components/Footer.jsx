import React from "react";

const Footer = () => (
  <footer
    style={{
      background: "var(--color-footer)",
      color: "var(--color-footer-text)",
      padding: "34px 0 22px 0",
      fontSize: "1.08rem",
      textAlign: "center",
      width: "100%",
      boxShadow: "0 -2px 16px rgba(0,0,0,0.16)",
      transition: "background 0.3s, color 0.3s",
      marginTop: "18px"
    }}
  >
    <div style={{
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "flex-start",
      gap: "38px",
      marginBottom: "18px"
    }}>
      {/* SECCIÓN SISTEMA */}
      <div style={{ minWidth: 200, maxWidth: 260 }}>
        <div style={{ fontWeight: 700, fontSize: "1.3rem", marginBottom: 6 }}>
          Sistema de Turnos | BRO
        </div>
        <div style={{ fontSize: "1.02rem", opacity: 0.88 }}>
          Gestionado por la Dirección de Informática <br />
          Servicio Penitenciario Bonaerense
        </div>
      </div>
      {/* SECCIÓN CONTACTOS */}
      <div style={{ minWidth: 180, maxWidth: 220 }}>
        <div style={{ fontWeight: 600, marginBottom: 6 }}>
          Contacto Directo
        </div>
        <div>
          Director: <a href="tel:2211234567" style={{ color: "var(--color-active)", textDecoration: "none" }}>221-123-4567</a>
        </div>
        <div>
          Mesa de Ayuda: <a href="tel:2217654321" style={{ color: "var(--color-active)", textDecoration: "none" }}>221-765-4321</a>
        </div>
        <div>
          Recursos Humanos: <a href="tel:2214445555" style={{ color: "var(--color-active)", textDecoration: "none" }}>221-444-5555</a>
        </div>
        <div style={{ marginTop: 4, fontSize: "0.95rem" }}>
          Email: <a href="mailto:informatica@spb.gba.gov.ar" style={{ color: "var(--color-active)", textDecoration: "none" }}>informatica@spb.gba.gov.ar</a>
        </div>
      </div>
      {/* SECCIÓN REDES */}
      <div style={{ minWidth: 180, maxWidth: 220 }}>
        <div style={{ fontWeight: 600, marginBottom: 8 }}>
          Redes Sociales
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: "18px" }}>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-footer-text)", fontSize: "1.4rem" }}>
            <i className="fab fa-facebook-f"></i> Facebook
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-footer-text)", fontSize: "1.4rem" }}>
            <i className="fab fa-twitter"></i> Twitter
          </a>
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: "18px", marginTop: 6 }}>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-footer-text)", fontSize: "1.4rem" }}>
            <i className="fab fa-instagram"></i> Instagram
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-footer-text)", fontSize: "1.4rem" }}>
            <i className="fab fa-linkedin-in"></i> LinkedIn
          </a>
        </div>
      </div>
    </div>
    <div style={{ borderTop: "1.5px solid var(--color-card-border)", margin: "10px auto 0 auto", maxWidth: 900, opacity: 0.6, paddingTop: 12 }}>
      &copy; {new Date().getFullYear()} Servicio Penitenciario Bonaerense · Todos los derechos reservados.
    </div>
  </footer>
);

export default Footer;
