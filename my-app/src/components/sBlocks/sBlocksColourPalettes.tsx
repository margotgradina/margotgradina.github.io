import {css} from "@emotion/css";
import {faCircleXmark} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Colour} from "./hooks/useSBlocks";
import {useEffect, useState} from "react";

interface Props {
  handleClick: Function;
  handleClose: Function;
  fetchSBlocksColourTemplates: Function;
  paletteArray: {name: string; colours: Colour[]}[];
}

export const SBlocksColourPalettes = ({handleClick, handleClose, fetchSBlocksColourTemplates, paletteArray}: Props) => {
  useEffect(() => {
    fetchSBlocksColourTemplates();
  }, []);

  return (
    <>
      <div
        className={css`
          position: absolute;
          z-index: 1000;
          height: max-content;
          width: max-content;
          padding: 10px;

          background-color: white;
          border: 1px solid grey;
          border-radius: 15px;
        `}
      >
        <FontAwesomeIcon icon={faCircleXmark} color={"#7cc0a0"} onClick={() => handleClose()} />
        <div
          className={css`
            height: 200px;
            width: 200px;
            overflow-y: auto;
            padding: 10px;
            overflow-y: auto;
            display: flex;
            flex-direction: column;
            gap: 1rem;
            ::-webkit-scrollbar {
              width: 5px; /* width of the entire scrollbar */
            }

            ::-webkit-scrollbar-thumb {
              background-color: #7cc0a0; /*color of the scroll thumb */
              border-radius: 20px; /* roundness of the scroll thumb */
              border: 0px solid orange; /* creates padding around scroll thumb */
            }
          `}
        >
          {paletteArray?.map((palette) => {
            return (
              <div
                onClick={() => {
                  handleClick(palette.colours);
                }}
                className={css`
                  display: flex;
                  flex-direction: column;
                  gap: 0.5rem;
                  border-radius: 15px;
                  padding: 0.5rem 0px 0.5rem 0.5rem;
                  border: 1px dashed grey;
                `}
              >
                <label>{palette.name}</label>
                <div
                  className={css`
                    display: flex;
                    flex-direction: row;
                    width: 100%;
                    align-items: center;
                    justify-content: space-evenly;
                  `}
                >
                  {palette.colours?.map((colour, index) => {
                    return (
                      <div
                        className={css`
                          width: 1vw;
                          height: 1vw;
                          max-width: 20px;
                          max-height: 20px;
                          border: 0.5px solid grey;
                          border-radius: 5px;
                          background-color: ${colour?.hex};
                        `}
                      ></div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SBlocksColourPalettes;
