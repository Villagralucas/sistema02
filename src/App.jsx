import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import StepperVertical from "./components/StepperVertical";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Navbar />

        <Routes>
          {/* Pantalla de inicio (Home) */}
          <Route path="/" element={<Home />} />

          {/* Pantalla de turnos, igual que tu layout original */}
          <Route
            path="/turnos"
            element={
              <>
              
                <main
                  style={{
                    flex: 1,
                    width: "100%",
                    maxWidth: 500,
                    margin: "0 auto",
                    padding: "8px 0 8px 0",
                  }}
                >
                  <StepperVertical />
                  <div
                    style={{
                      height: "3px",
                      width: "38%",
                      minWidth: "120px",
                      maxWidth: "220px",
                      background: "var(--color-active)",
                      borderRadius: 6,
                      margin: "0 auto 18px auto",
                      opacity: 0.17,
                      transition: "background 0.3s",
                    }}
                  />
                </main>
              </>
            }
          />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
