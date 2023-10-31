import {useEffect, useState} from "react";
import {css} from "@emotion/css";
import {useSBlocks} from "./hooks/useSBlocks";
import SBlockMenu from "./sBlockMenu";
import {SBlockType} from "./sBlockTypes";
import SBlock from "./sBlock";
import html2canvas from "html2canvas";
import BasicButton from "../general/BasicButton";

const SblockGrid = () => {
  const {
    gridData,
    numCols,
    cellSize,
    border,
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
    setCurrentRotation,
    handleClickRotation,
    rotationArray,
    showGrid,
    setShowGrid,
    setBorder,
    handleDownload,
    handleAddColourPalette,
    colourPalette,
    setColourPalette,
    handleSetColourPaletteArray,
    showPaletteTemplates,
    setShowPaletteTemplates,
    paletteArray,
    setPaletteArray,
    fetchSBlocksColourTemplates,
  } = useSBlocks();

  // Initialize the grid when the component mounts
  useEffect(() => {
    initializeGrid();
  }, []);
  useEffect(() => {
    if (showGrid) {
      setBorder("0.5px dashed grey");
    } else {
      setBorder("0px dashed transparent");
    }
  }, [showGrid]);

  return (
    <div
      className={css`
        width: 90%;
        height: 80%;
        display: flex;
        align-items: center;
        gap: 1rem;
      `}
    >
      {/* - - - - GRID - - - - TODO MOVE TO SEPARATE COMPONENT -*/}
      <div
        className={css`
          width: 90%;
          height: 70%;
          display: flex;
          align-items: flex-start;
          justify-content: space-evenly;

          overflow: auto;
          ::-webkit-scrollbar {
            width: 5px; /* width of the entire scrollbar */
          }

          ::-webkit-scrollbar-thumb {
            background-color: #7cc0a0; /* color of the scroll thumb */
            border-radius: 20px; /* roundness of the scroll thumb */
            border: 0px solid orange; /* creates padding around scroll thumb */
          }
        `}
      >
        <table
          id="savableGrid"
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
                          /* box-sizing: border-box; */
                        `}
                      >
                        {cell?.shape ? (
                          <>
                            <SBlock
                              onClick={() => {}}
                              type={cell.shape}
                              rotate={cell.rotation as 0 | 90 | 180 | 270}
                              colour={cell?.colour}
                              size={40} //TODO replace with cellsize
                              sizeUnit={"px"} // TODO replace with cellsize
                            />
                          </>
                        ) : (
                          <div
                            className={css`
                              width: cellSize;

                              /* border: 1px dashed grey; */
                            `}
                          ></div>
                        )}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {/* - - - - MENU - - - - -*/}
      <SBlockMenu
        handleDownload={handleDownload}
        showGrid={showGrid}
        setShowGrid={setShowGrid}
        currentRotation={currentRotation}
        setCurrentRotation={setCurrentRotation}
        handleClickRotation={handleClickRotation}
        shapeArray={shapeArray}
        currentShape={currentShape}
        setCurrentShape={setCurrentShape}
        currentColour={currentColour}
        setCurrentColour={setCurrentColour}
        showColourPicker={showColourPicker}
        setShowColourPicker={setShowColourPicker}
        handleAddColourPalette={handleAddColourPalette}
        colourPalette={colourPalette}
        showPaletteTemplates={showPaletteTemplates}
        setShowPaletteTemplates={setShowPaletteTemplates}
        handleSetColourPaletteArray={handleSetColourPaletteArray}
        paletteArray={paletteArray}
        fetchSBlocksColourTemplates={fetchSBlocksColourTemplates}
      />
    </div>
  );
};

export default SblockGrid;
