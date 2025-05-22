import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  const location = useLocation();

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  // Función para resaltar el link activo
  const getLinkStyle = (path) => ({
    color: location.pathname === path ? "var(--color-active)" : "inherit",
    textDecoration: "none",
    letterSpacing: "2px"
  });

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <i className="fa-solid fa-clock-rotate-left" style={{ marginRight: 10, fontSize: "1.25em" }}></i>
        Turno Facil
      </div>

      <ul className="navbar-links">
        <li>
          <Link to="/" style={getLinkStyle("/")}>
            Inicio
          </Link>
        </li>
        <li>
          <Link to="/servicios" style={getLinkStyle("/servicios")}>
            Servicios
          </Link>
        </li>
        <li>
          <Link to="/turnos" style={getLinkStyle("/turnos")}>
            Turnos
          </Link>
        </li>
        <li>
          <Link to="/contacto" style={getLinkStyle("/contacto")}>
            Contacto
          </Link>
        </li>
      </ul>
      <button
        className="theme-toggle"
        onClick={() => setDarkMode((prev) => !prev)}
        aria-label="Cambiar tema"
      >
        {darkMode ? "🌙" : "☀️"}
      </button>
    </nav>
  );
};

export default Navbar;
