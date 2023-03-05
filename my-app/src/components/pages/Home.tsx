import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import { css } from "@emotion/css";
import "font-awesome/css/font-awesome.min.css";
import Usermenu from "../Usermenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare, faCoffee } from "@fortawesome/fontawesome-free-solid";

const Home = () => {
  useEffect(() => {
    document.title = "Margot Gradina";
  }, []);

  return (
    <div className={css``}>
      <Usermenu />
      Coming soon.
    </div>
  );
};

export default Home;
