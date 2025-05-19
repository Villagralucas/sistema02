import React from "react";
const Footer = () => (
  <footer
    style={{
      background: "var(--color-footer)",
      color: "var(--color-footer-text)",
      padding: "20px 0",
      textAlign: "center",
      position: "relative",
      left: 0,
      width: "100%",
      boxShadow: "0 -2px 10px rgba(0,0,0,0.15)",
      transition: "background 0.3s, color 0.3s"
    }}
  >
    <div>
      &copy; {new Date().getFullYear()} Sistema de Turnos | Hecho con ❤️ por Bro
    </div>
    <div style={{ marginTop: 8 }}>
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          color: "var(--color-footer-text)",
          margin: "0 10px",
          textDecoration: "none"
        }}
      >
        Facebook
      </a>
      <a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          color: "var(--color-footer-text)",
          margin: "0 10px",
          textDecoration: "none"
        }}
      >
        Twitter
      </a>
      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          color: "var(--color-footer-text)",
          margin: "0 10px",
          textDecoration: "none"
        }}
      >
        LinkedIn
      </a>
    </div>
  </footer>
);
export default Footer;
