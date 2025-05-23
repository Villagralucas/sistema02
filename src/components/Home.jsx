import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import 'animate.css';

const Home = () => {
  const navigate = useNavigate();

  const handleClick = (tipo) => {
    navigate("/turnos");
  };

  return (
    <div className="home-container">
      <div className="home-header">
        <h1 className="home-title animate__animated animate__bounceInRight">
  Sistema de <span className="home-title-green">Turnos</span>
</h1>

      </div>
      <div className="home-btns-row">
        <button
          className="home-btn-transparent animate__animated animate__bounceIn"
          onClick={() => handleClick("barberia")}
        >
          BARBERÍA
        </button>
      
      </div>
    </div>
  );
};

export default Home;
