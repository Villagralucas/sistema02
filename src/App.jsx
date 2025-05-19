import React from "react";
import Navbar from "./components/Navbar";
import StepperVertical from "./components/StepperVertical";
import Footer from "./components/Footer";

function App() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh'
    }}>
      <Navbar />

      {/* Contenido principal */}
      <main style={{
        flex: 1,
        width: '100%',
        maxWidth: 600,
        margin: '0 auto',
        padding: '32px 0'
      }}>
        <StepperVertical />
      </main>

      <Footer />
    </div>
  );
}

export default App;
