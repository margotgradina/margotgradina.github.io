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
        alt="Exploding Image"
        className={css`
          position: relative;
          width: 200px; /* Adjust the size as needed */
          height: 200px; /* Adjust the size as needed */
          overflow: hidden;
        `}
      />
      <div
        className={css`
          position: absolute;
          background-color: #fff; /* Color of the exploding pixels */
          width: 10px; /* Adjust the size of the pixels */
          height: 10px; /* Adjust the size of the pixels */
          transform: scale(1);
          animation: ${explodeAnimation} 1s ease-in-out forwards;
        `}
      ></div>
    </div>
  );
};

export default ImageExplosion;
