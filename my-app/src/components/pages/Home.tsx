import React, { useEffect, useState } from "react";
import { css } from "@emotion/css";
import "font-awesome/css/font-awesome.min.css";
import Header from "../Header";
import MenuTab from "../MenuTab";
import ContactForm from "../ContactForm";
import About from "./About";
import { useAbout } from "../../hooks/useAbout";
import { Resume } from "../../types/typesResume";

const Home = () => {
  const { onLoad, resume } = useAbout();

  useEffect(() => {
    onLoad();
  }, []);
  const [currentPage, setCurrentPage] = useState<string>("HOME");
  useEffect(() => {
    document.title = "Margot Gradina";
  }, []);

  const changePage = (page: string) => {
    switch (page) {
      case "ABOUT":
        setCurrentPage(page);
        break;
      case "WORK":
        setCurrentPage(page);
        break;
      case "CONTACT":
        setCurrentPage(page);
        break;
      case "RESUME":
        setCurrentPage(page);
        break;
      default:
        break;
    }
  };

  return (
    <div
      className={css`
        display: flex;
        font-family: "Raleway";
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        overflow-x: hidden;
        overflow-y: hidden;
        /* gap: 10rem; */
        /* cursor: url("cursor.cur"), auto; */
      `}
    >
      <div
        key="headerDiv"
        className={css`
          height: auto;
        `}
      >
        <Header />
      </div>
      <div
        key="contentDiv"
        className={css`
          display: flex;
          flex: 1;
          /* border: 1px dashed #7cc0a0; */
          flex-direction: row;
          align-items: flex-end;
          justify-content: flex-end;
          width: ${window.innerWidth + "px"};
          gap: 0.5rem;
        `}
      >
        <div
          key="contentBlock"
          className={css`
            display: flex;
            border-right: 1px dashed #7cc0a0;
            height: 100%;
            flex: 1;
            /* padding-right: 1rem; */
          `}
        >
          {(currentPage == "CONTACT" && <ContactForm />) ||
            (currentPage == "ABOUT" && <About resume={resume as Resume} />) || (
              <> </>
            )}
        </div>
        <MenuTab
          tabName="ABOUT"
          onClick={() => {
            changePage("ABOUT");
          }}
        />
        <MenuTab
          tabName="RESUME"
          onClick={() => {
            changePage("RESUME");
          }}
        />
        <MenuTab
          tabName="CONTACT"
          onClick={() => {
            changePage("CONTACT");
          }}
        />
      </div>
    </div>
  );
};

export default Home;
