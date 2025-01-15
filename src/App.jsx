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
import Home from "./routes/Home";
import Footer from "./components/Footer";
import Projects from "./routes/Projects";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route index path="/" Component={Home} />
          <Route path="/about" Component={About} />
          <Route path="/projects" Component={Projects} />
          <Route path="/resume" Component={Resume} />
          {/* This will catch all unmatched routes */}
          <Route path="*" element={ErrorPage} />
          {/* Redirect to home if no match */}
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
