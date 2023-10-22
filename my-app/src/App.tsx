import React, { useEffect } from "react";
import "./App.css";
import { Routes, Route, Router } from "react-router-dom";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import { css } from "@emotion/css";
import { useAbout } from "./hooks/useAbout";
import ThankYou from "./components/pages/ThankYou";
import { Resume } from "./types/typesResume";
import Header from "./components/Header";

const App = () => {
  const { onLoad, resume } = useAbout();

  useEffect(() => {
    onLoad();
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About resume={resume as Resume} />} />
        <Route
          path="/contact"
          element={<Contact resume={resume as Resume} />}
        />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
    </>
  );
};

export default App;
