import React from "react";
import Navbar from "./components/Navbar";
import StepperVertical from "./components/StepperVertical";
import Footer from "./components/Footer";

function App() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
    }}>
      <Navbar />

      {/* Contenido principal */}
      <main style={{
        flex: 1,
        width: '100%',
        maxWidth: 500,
        margin: '0 auto',
        padding: "8px 0 8px 0", // menos padding arriba/abajo
      }}>
        <StepperVertical />
      </main>

      <Footer />
    </div>
  );
}

export default App;
