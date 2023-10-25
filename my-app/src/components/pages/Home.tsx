import React, {useEffect, useState} from "react";
import {css} from "@emotion/css";
import "font-awesome/css/font-awesome.min.css";
import Header from "../general/Header";
import MenuTab from "../general/MenuTab";
import About from "./about/About";
import Contact from "./contact/Contact";

const Home = () => {
  // const [currentPage, setCurrentPage] = useState<string>("HOME");

  // //changes the page
  // const changePage = (page: string) => {
  //   const pagesArray = ["ABOUT", "WORK", "CONTACT", "RESUME", "PROJECTS", "HOME"];

  //   if (pagesArray.includes(page)) {
  //     setCurrentPage(page);
  //   }
  // };

  return (
    <>
      {/* <div
        className={css`
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1000;
          background-color: red;
        `}
      ></div> */}
    </>
  );
};

export default Home;
