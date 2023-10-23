import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@material-ui/core";
import { css } from "@emotion/css";

const Usermenu = () => {
  const navigate = useNavigate();

  const handleNavigate = (url: string) => {
    navigate(url);
  };

  return (
    <div
      className={css`
        display: flex;
        flex-direction: column;
      `}
    >
      <Button onClick={() => handleNavigate("/")}> Home </Button>
      <Button onClick={() => handleNavigate("/about")}> About </Button>
      <Button onClick={() => handleNavigate("/contact")}> Contact </Button>
    </div>
  );
};

export default Usermenu;
