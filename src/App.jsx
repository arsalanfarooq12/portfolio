import "./App.css";
import * as React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./index.css";
import Navbar from "./components/Navbar";
import ErrorPage from "./ErrorPage";
import About from "./routes/About";
import Resume from "./routes/Resume";

import Footer from "./components/Footer";
import Projects from "./routes/Projects";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          {/* <Route exact path="/" Component={Home} /> */}
          <Route path="/" Component={About} />
          <Route path="/projects" Component={Projects} />
          <Route path="/resume" Component={Resume} />
          {/* This will catch all unmatched routes */}
          <Route path="*" element={ErrorPage} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
};

export default App;
