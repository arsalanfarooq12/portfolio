import "./App.css";
import * as React from "react";
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
//   Navigate,
// } from "react-router-dom";
import "./index.css";
import Navbar from "./components/Navbar";
// import ErrorPage from "./ErrorPage";
import About from "./routes/About";
import Resume from "./routes/Resume";

import Footer from "./components/Footer";
import Projects from "./routes/Projects";
import LightRays from "./components/LightRays";

const App = () => {
  return (
    <>
      <div style={{ width: "100%", height: "600px", position: "relative" }}>
        <LightRays
          raysOrigin="top-center"
          raysColor="#00ffff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays"
        />

        <Navbar />
        {/* Each section gets its own unique ID for anchor navigation */}
        <section id="about">
          <About />
        </section>

        <section id="resume">
          <Resume />
        </section>
        <section id="projects">
          <Projects />
        </section>

        <Footer />
      </div>
    </>
  );
};

export default App;
