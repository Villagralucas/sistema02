import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // 👈 Importante para navegar sin recargar
import "./Navbar.css";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <nav className="navbar">
  <div className="navbar-logo">
        <i className="fa-solid fa-clock-rotate-left" style={{ marginRight: 10, fontSize: "1.25em" }}></i>
        Turno Facil
      </div>

      <ul className="navbar-links">
        <li>
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            Inicio
          </Link>
        </li>
        <li>
          <Link to="/turnos" style={{ textDecoration: "none", color: "inherit" }}>
            Servicios
          </Link>
        </li>
        <li>
          <a href="#">Turnos</a>
        </li>
        <li>
          <a href="#">Contacto</a>
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
