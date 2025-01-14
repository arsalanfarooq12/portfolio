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
import ErrorPage from "./error-page";
import About from "./routes/About";
import Resume from "./routes/Resume";
import Home from "./routes/Home";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route path="/about" Component={About} />
          {/* <Route path="/projects" component={Projects} /> */}
          <Route path="/resume" Component={Resume} />
          <Route Component={ErrorPage} />{" "}
          {/* This will catch all unmatched routes */}
          <Route path="*" element={<Navigate to="/" />} />{" "}
          {/* Redirect to home if no match */}
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
