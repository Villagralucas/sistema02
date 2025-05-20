import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  const handleClick = (tipo) => {
    navigate("/turnos");
  };

  return (
    <div className="home-container">
      <div className="home-header">
        <h1 className="home-title">
  Sistema de <span className="home-title-green">Turnos</span>
</h1>

      </div>
      <div className="home-btns-row">
        <button
          className="home-btn-transparent"
          onClick={() => handleClick("barberia")}
        >
          BARBERÍA
        </button>
        <button
          className="home-btn-transparent"
          onClick={() => handleClick("tattoo")}
        >
          TATTOO
        </button>
        <button
          className="home-btn-transparent"
          onClick={() => handleClick("piercing")}
        >
          PIERCING
        </button>
      </div>
    </div>
  );
};

export default Home;
