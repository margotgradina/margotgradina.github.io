import {useEffect} from "react";
import "./App.css";
import {Routes, Route, useNavigate} from "react-router-dom";
import About from "./components/pages/about/About";
import Home from "./components/pages/Home";
import Contact from "./components/pages/contact/Contact";
import ThankYou from "./components/pages/contact/ThankYou";
import {css} from "@emotion/css";
import Header from "./components/general/Header";
import MenuTab from "./components/general/MenuTab";
import Projects from "./components/pages/projects/Projects";
import SBlocksPage from "./components/pages/projects/SBlocksPage";

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Margot Gradina";
  }, []);

  return (
    <>
      <div
        className={css`
          display: flex;
          font-family: "Raleway";
          flex-direction: column;
          align-items: center;
          height: 100vh;
          width: 100vw;
          justify-content: center;
          border: 0px solid yellow;
          overflow-x: hidden;
          overflow-y: hidden;
        `}
      >
        <div
          key="headerDiv"
          className={css`
            height: 5vh;
            min-height: 4vh;
            width: auto;
          `}
        >
          <Header onClick={() => navigate("/")} />
        </div>

        <div
          key="contentDiv"
          className={css`
            display: flex;
            /* visibility: hidden; //TODO REMOVE */
            flex: 1;
            /* border: 1px dashed #7cc0a0; */
            flex-direction: row;
            align-items: flex-end;
            justify-content: flex-end;
            width: 100vw;
            gap: 0.5rem;
          `}
        >
          <div
            key="contentBlock"
            className={css`
              display: flex;
              /* border-right: 1px dashed #7cc0a0; */
              height: 100%;
              flex: 1;
              overflow-y: auto;
              ::-webkit-scrollbar {
                width: 5px;
              }

              ::-webkit-scrollbar-thumb {
                background-color: #7cc0a0;
                border-radius: 20px;
                border: 0px solid orange; /* creates padding around scroll thumb */
              }
              /* padding-right: 1rem; */
            `}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/sBlocks" element={<SBlocksPage />} />
              <Route path="/thank-you" element={<ThankYou />} />
            </Routes>
          </div>

          <MenuTab
            tabName="ABOUT"
            onClick={() => {
              navigate("/about");
            }}
          />

          <MenuTab
            tabName="PROJECTS"
            onClick={() => {
              navigate("/projects");
            }}
          />
          <MenuTab
            tabName="CONTACT"
            onClick={() => {
              navigate("/contact");
            }}
          />
        </div>
      </div>
    </>
  );
};

export default App;
