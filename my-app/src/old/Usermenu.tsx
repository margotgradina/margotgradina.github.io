import React from "react";
import {Link, useNavigate} from "react-router-dom";
import {Button} from "@material-ui/core";
import {css} from "@emotion/css";

const Usermenu = () => {
  const navigate = useNavigate();

  const handleNavigate = (url: string) => {
    navigate(url);
  };

  return (
    <div
      className={css`
        padding-bottom: 50px;
      `}
    >
      <h1 className={css``}>M A R G O T &nbsp; G R A D I N A</h1>

      <div className={css``}>
        <div
          className={css`
            display: flex;
            flex-direction: row;
            justify-items: center;
          `}
        >
          <div
            className={css`
              border-bottom: 1px solid #000;
              width: 100px;
              height: 18px;
            `}
          />
          <Button onClick={() => handleNavigate("/")}> Home </Button>
          <div
            className={css`
              border-bottom: 1px solid #000;
              width: 30px;
              height: 18px;
            `}
          />
          <Button onClick={() => handleNavigate("/about")}> About </Button>
          <div
            className={css`
              border-bottom: 1px solid #000;
              width: 30px;
              height: 18px;
            `}
          />
          <Button onClick={() => handleNavigate("/contact")}> Contact </Button>
          <div
            className={css`
              border-bottom: 1px solid #000;
              width: 100px;
              height: 18px;
            `}
          />
        </div>
      </div>
    </div>
  );
};

export default Usermenu;
