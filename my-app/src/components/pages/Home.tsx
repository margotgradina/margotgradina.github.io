import React, {useEffect, useState} from "react";
import {css} from "@emotion/css";
import "font-awesome/css/font-awesome.min.css";
import Header from "../general/Header";
import MenuTab from "../general/MenuTab";
import About from "./about/About";
import Contact from "./contact/Contact";

const Home = () => {
  const [currentPage, setCurrentPage] = useState<string>("HOME");

  //changes the page
  const changePage = (page: string) => {
    const pagesArray = ["ABOUT", "WORK", "CONTACT", "RESUME", "PROJECTS", "HOME"];

    if (pagesArray.includes(page)) {
      setCurrentPage(page);
    }
  };

  return (
    <></>
    // <div
    //   className={css`
    //     display: flex;
    //     font-family: "Raleway";
    //     flex-direction: column;
    //     align-items: center;
    //     height: 100vh;
    //     width: 100vw;
    //     justify-content: center;
    //     border: 0px solid yellow;
    //     overflow-x: hidden;
    //     overflow-y: hidden;
    //   `}
    // >
    //   <div
    //     key="headerDiv"
    //     className={css`
    //       height: auto;
    //       width: auto;
    //     `}
    //   >
    //     <Header onClick={() => changePage("HOME")} />
    //   </div>

    //   <div
    //     key="contentDiv"
    //     className={css`
    //       display: flex;
    //       /* visibility: hidden; //TODO REMOVE */
    //       flex: 1;
    //       /* border: 1px dashed #7cc0a0; */
    //       flex-direction: row;
    //       align-items: flex-end;
    //       justify-content: flex-end;
    //       width: 100vw;
    //       gap: 0.5rem;
    //     `}
    //   >
    //     <div
    //       key="contentBlock"
    //       className={css`
    //         display: flex;
    //         /* border-right: 1px dashed #7cc0a0; */
    //         height: 100%;
    //         flex: 1;
    //         overflow-y: auto;
    //         ::-webkit-scrollbar {
    //           width: 5px; /* width of the entire scrollbar */
    //         }

    //         ::-webkit-scrollbar-thumb {
    //           background-color: #7cc0a0; /* color of the scroll thumb */
    //           border-radius: 20px; /* roundness of the scroll thumb */
    //           border: 0px solid orange; /* creates padding around scroll thumb */
    //         }
    //         /* padding-right: 1rem; */
    //       `}
    //     >
    //       {(currentPage == "CONTACT" && <Contact />) || (currentPage == "ABOUT" && <About />) || <> </>}
    //     </div>

    //     <MenuTab
    //       tabName="ABOUT"
    //       onClick={() => {
    //         changePage("ABOUT");
    //       }}
    //     />
    //     <MenuTab
    //       tabName="RESUME"
    //       onClick={() => {
    //         changePage("RESUME");
    //       }}
    //     />
    //     <MenuTab
    //       tabName="CONTACT"
    //       onClick={() => {
    //         changePage("CONTACT");
    //       }}
    //     />
    //   </div>
    // </div>
  );
};

export default Home;
