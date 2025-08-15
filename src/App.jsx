import "./App.css";
import * as React from "react";

import "./index.css";
import Navbar from "./components/Navbar";

import About from "./routes/About";

import Footer from "./components/Footer";
import Projects from "./routes/Projects";
import LightRays from "./components/LightRays";
import Home from "./routes/Home";

const App = () => {
  return (
    <>
      {/* ---navigation bar----- */}
      <div className="sticky bg-zinc-950">
        <Navbar />

        {/* ----------backdrop from reactbits------- */}
        <div className="w-full h-full bg-zinc-950 flex  justify-center   ">
          {/* componenets which has background from reactbits should have absolute position */}

          <div style={{ width: "100%", height: "600px", position: "relative" }}>
            <LightRays
              raysOrigin="top-center"
              raysColor="#00ffff"
              raysSpeed={2}
              lightSpread={0.8}
              rayLength={1.2}
              followMouse={true}
              mouseInfluence={0.1}
              noiseAmount={0.1}
              distortion={0.05}
              className="custom-rays -z-1 absolute"
            />
          </div>

          <section id="home" className="absolute">
            <Home />
          </section>
        </div>
        {/* ------------other components------ */}
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Footer />
        </section>
      </div>
    </>
  );
};

export default App;
