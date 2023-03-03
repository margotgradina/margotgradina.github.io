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

const App = () => {
  const { onLoad, resume } = useAbout();

  useEffect(() => {
    onLoad();
  }, []);

  return (
    <div
      className={css`
        width: 100%;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        // height: ${window.innerHeight - 40 + "px"};
      `}
    >
      <div
        className={css`
          margin-top: 5vh;
          margin-bottom: 1vh;
          width: 80%;
          height: 90vh;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          border: 1px solid;
          // height: ${window.innerHeight - 40 + "px"};
        `}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About resume={resume as Resume} />} />
          <Route
            path="/contact"
            element={<Contact resume={resume as Resume} />}
          />
          <Route path="/thank-you" element={<ThankYou />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
