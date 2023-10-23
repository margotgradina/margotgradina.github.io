import React from "react";
import { keyframes } from "@emotion/react";
import { css } from "@emotion/css";

const explodeAnimation = keyframes`
  0% { transform: scale(1); }
  100% { transform: scale(0);
 }
`;

const ImageExplosion = () => {
  return (
    <div
      className={css`
        position: relative;
        width: 200px; /* Adjust the size as needed */
        height: 200px; /* Adjust the size as needed */
        overflow: hidden;
      `}
    >
      <img
        src="/alphabetIcons/M.png" // Replace with your image path
        alt="Disapperaing Image"
        className={css`
          transition: opacity 1s;
          :hover {
            opacity: 0.2;
            transition: opacity 1s;
          }
        `}
      />
    </div>
  );
};

export default ImageExplosion;
