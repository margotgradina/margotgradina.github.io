import React, { useEffect, useState } from "react";
import { css } from "@emotion/css";
import "font-awesome/css/font-awesome.min.css";
import Header from "../Header";
import MenuTab from "../MenuTab";
import ContactForm from "../ContactForm";
import About from "./About";
import { useAbout } from "../../hooks/useAbout";
import { Resume } from "../../types/typesResume";
import SBlock from "../sBlocks/sBlock";

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
      case "HOME":
        setCurrentPage(page);
        break;
      default:
        break;
    }
  };

  const [order, setOrder] = useState([1, 2, 3, 4]);

  const handleClick = (index: any) => {
    const newOrder = order.slice();
    // Implement your logic to change the order based on the clicked component
    // For example, you can move the clicked component to the first position.
    newOrder.splice(0, 0, newOrder.splice(index, 1)[0]);
    setOrder(newOrder);
  };

  return (
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
          height: auto;
          width: auto;
        `}
      >
        <Header onClick={() => changePage("HOME")} />
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
              width: 5px; /* width of the entire scrollbar */
            }

            ::-webkit-scrollbar-thumb {
              background-color: #7cc0a0; /* color of the scroll thumb */
              border-radius: 20px; /* roundness of the scroll thumb */
              border: 0px solid orange; /* creates padding around scroll thumb */
            }
            /* padding-right: 1rem; */
          `}
        >
          {(currentPage == "CONTACT" && <ContactForm />) ||
            (currentPage == "ABOUT" && <About resume={resume as Resume} />) || (
              <> </>
            )}
          <SBlock
            size={4}
            sizeUnit={"em"}
            topLeftBR={true}
            topRightBR={false}
            bottomLeftBR={false}
            bottomRightBR={false}
          />
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
