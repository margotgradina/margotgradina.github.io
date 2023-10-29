import React, {useEffect, useState} from "react";
import {css} from "@emotion/css";
import {useSBlocks} from "./hooks/useSBlocks";
import SBlockMenu from "./sBlockMenu";
import ColourPicker from "../general/ColourPicker";
import {SBlockType} from "./sBlockTypes";
import SBlock from "./sBlock";

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
    currentShape,
    setCurrentShape,
    shapeArray,
    currentRotation,
    setcurrentRotation,
  } = useSBlocks();

  // Initialize the grid when the component mounts
  useEffect(() => {
    initializeGrid();
  }, []);

  return (
    <div
      className={css`
        width: 100%;
        height: 90%;
        display: flex;
        align-items: center;
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
          {gridData?.map((row, y) => {
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
                {row.map((cell: SBlockType, x: number) => {
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
                      {cell?.shape && (
                        <>
                          <SBlock
                            onClick={() => {}}
                            type={cell.shape}
                            rotate={cell.rotation as 0 | 90 | 180 | 270}
                            colour={cell?.colour}
                            size={40}
                            sizeUnit={"px"}
                          />
                        </>
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* - - - - MENU - - - - -*/}
      <SBlockMenu
        currentRotation={currentRotation}
        setCurrentRotation={setcurrentRotation}
        shapeArray={shapeArray}
        currentShape={currentShape}
        setCurrentShape={setCurrentShape}
        currentColour={currentColour}
        setCurrentColour={setCurrentColour}
        showColourPicker={showColourPicker}
        setShowColourPicker={setShowColourPicker}
      />
    </div>
  );
};

export default SblockGrid;
