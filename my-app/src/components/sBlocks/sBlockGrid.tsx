import React, {useEffect, useState} from "react";
import {css} from "@emotion/css";
import {SBlockType} from "./sBlockTypes";
import {useSBlocks} from "./hooks/useSBlocks";
import BasicButton from "../general/BasicButton";
import SBlock from "./sBlock";
import {SketchPicker} from "react-color";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleXmark} from "@fortawesome/free-solid-svg-icons";

const SblockGrid = () => {
  const {
    gridData,
    setGridData,
    currentLayer,
    setCurrentLayer,
    numRows,
    setNumRows,
    numCols,
    setNumCols,
    cellSize,
    setCellSize,
    border,
    setBorder,
    handleCellClick,
    initializeGrid,
    setCurrentColour,
    currentColour,
    showColourPicker,
    setShowColourPicker,
  } = useSBlocks();

  // Initialize the grid when the component mounts
  useEffect(() => {
    initializeGrid();
  }, []);

  useEffect(() => {
    console.log(currentColour?.hex);
  }, [currentColour]);

  return (
    <div
      className={css`
        width: 100%;
        height: 90%;
        display: flex;
        align-items: end;
        justify-content: space-around;
      `}
    >
      {/* - - - - GRID - - - - -*/}
      <table
        className={css`
          border-collapse: collapse;
          padding: 0;
          margin: 0;
        `}
      >
        <thead>
          <tr>
            <th
              className={css`
                width: ${cellSize};
                padding: 0;
                margin: 0;
              `}
            ></th>
            {Array.from({length: numCols}, (_, i) => {
              return (
                <th
                  key={i}
                  className={css`
                    width: ${cellSize};
                    padding: 0;
                    margin: 0;
                  `}
                >
                  {i + 1}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {gridData.map((row, y) => {
            return (
              <tr key={y}>
                <td
                  className={css`
                    height: ${cellSize};
                    padding: 0;
                    padding-right: 5px;
                    margin: 0;
                    text-align: end;
                  `}
                >
                  {y + 1}
                </td>
                {row.map((cell: any, x: number) => {
                  return (
                    <td
                      key={x}
                      onClick={() => handleCellClick(x, y)}
                      className={css`
                        width: max-content;
                        height: max-content;
                        padding: 0;
                        margin: 0;
                        border: ${border};
                        box-sizing: border-box;
                        background-color: ${cell ? cell?.colour : "white"};
                      `}
                    >
                      <div
                        className={css`
                          background-color: #ce2355;
                          border-radius: 30px 30px 30px 0px;
                          height: ${cellSize};
                          width: ${cellSize};
                        `}
                      >
                        {/* <div
                        className={css`
                          background-color: transparent;
                          border: 1px dashed grey;
                          height: ${cellSize};
                          width: ${cellSize};
                        `}
                      > */}
                      </div>
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* - - - - MENU - - - - -*/}
      <div
        className={css`
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 10vw;
          min-width: 100px;
          max-width: 200px;
          height: 90%;
          border-radius: 10px;
          border: 2px solid grey;
          font-family: "Raleway";
          font-weight: 400;
          font-size: 1rem;
          gap: 1vh;
        `}
      >
        <label>Choose a colour:</label>
        {/* COLOURPICKER */}
        <div
          className={css`
            display: flex;
            flex-direction: row;
            gap: 1vw;
          `}
        >
          <div
            onClick={() => {
              setShowColourPicker(true);
            }}
            className={css`
              width: 1vw;
              height: 1vw;
              border: 0.5px solid grey;
              border-radius: 5px;
              background-color: ${currentColour?.hex || "transparent"};
            `}
          ></div>
          <label>{currentColour?.hex}</label>
        </div>

        {showColourPicker && (
          <div
            className={css`
              height: max-content;
              width: max-content;
              position: absolute;
              z-index: 1000;
              display: flex;
              flex-direction: column;
              gap: 5px;
            `}
          >
            <SketchPicker
              color={currentColour}
              onChange={(colour: any) => {
                setCurrentColour(colour);
              }}
              onChangeComplete={() => {
                // setShowColourPicker(false);
              }}
            />
            <FontAwesomeIcon
              icon={faCircleXmark}
              size={"lg"}
              color="#7CC0A0"
              onClick={() => {
                setShowColourPicker(false);
              }}
            />
          </div>
        )}

        <label>Choose a shape:</label>
        <div
          className={css`
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
          `}
        >
          <div
            className={css`
              display: flex;
              flex-direction: row;
              gap: 0.5rem;
            `}
          >
            <SBlock type={"FULL"} rotate={0} colour={currentColour?.hex || "grey"} size={1.5} sizeUnit={"vw"} />
            <SBlock type={"QUARTERCIRCLE"} rotate={0} colour={currentColour?.hex || "grey"} size={1.5} sizeUnit={"vw"} />
            <SBlock type={"HALFSTADIUM"} rotate={0} colour={currentColour?.hex || "grey"} size={1.5} sizeUnit={"vw"} />
          </div>
          <div
            className={css`
              display: flex;
              flex-direction: row;
              gap: 0.5rem;
            `}
          >
            <SBlock type={"ELLIPS"} rotate={0} colour={currentColour?.hex || "grey"} size={1.5} sizeUnit={"vw"} />
            <SBlock type={"DROP"} rotate={0} colour={currentColour?.hex || "grey"} size={1.5} sizeUnit={"vw"} />
            <SBlock type={"CIRCLE"} rotate={0} colour={currentColour?.hex || "grey"} size={1.5} sizeUnit={"vw"} />
          </div>
        </div>

        <BasicButton
          width="8vw"
          onClick={() => {
            console.log("todo rotate");
          }}
          label={"Rotate 90Deg"}
        />
        <BasicButton
          width="8vw"
          onClick={() => {
            console.log("todo save pdf");
          }}
          label={"Save as PDF"}
        />
        <BasicButton
          width="8vw"
          onClick={() => {
            console.log("todo save png");
          }}
          label={"Save as PNG"}
        />
      </div>
    </div>
  );
};

export default SblockGrid;
