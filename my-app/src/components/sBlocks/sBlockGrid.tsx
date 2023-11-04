import {useEffect} from "react";
import {css} from "@emotion/css";
import {useSBlocks} from "./hooks/useSBlocks";
import SBlockMenu from "./sBlockMenu";
import {SBlockType} from "./sBlockTypes";
import SBlock from "./sBlock";

const SblockGrid = () => {
  const {gridData, numCols, cellSize, border, handleCellClick, initializeGrid, showGrid, setBorder, layers} = useSBlocks();

  //returns a number for the z-index of a shape based on what layer it is in.
  const determineZIndexBasedOnLayerId = (layerId: number): number => {
    // console.log("layers");
    // console.log(layers);

    const foundLayer = layers?.find((l) => l.id == layerId);
    if (foundLayer) {
      return foundLayer.index * 5;
    } else {
      return 0;
    }
  };

  const determineVisibilityBasedOnLayerId = (layerId: number): boolean => {
    console.log("test");
    const foundLayer = layers?.find((l) => l.id == layerId);
    if (foundLayer) {
      console.log("found");
      return foundLayer.visible;
    } else {
      console.log("notfound");
      return false;
    }
  };

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

          overflow: auto;
          ::-webkit-scrollbar {
            width: 5px;
            height: 5px;
          }

          ::-webkit-scrollbar-thumb {
            background-color: #7cc0a0;
            border-radius: 20px;
            border: 0px solid orange;
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
                  {row.map((cell: SBlockType[], x: number) => {
                    return (
                      <td
                        key={x}
                        onClick={() => handleCellClick(x, y)}
                        className={css`
                          width: ${cellSize};
                          height: ${cellSize};
                          padding: 0;
                          margin: 0;
                          border: ${border};
                          position: relative;
                          /* box-sizing: border-box; */
                        `}
                      >
                        {cell?.length > 0 ? (
                          cell?.map((shape: SBlockType, index) => {
                            return (
                              <div
                                key={"div_shape_" + shape.id}
                                className={css`
                                  position: absolute;
                                  top: 0;
                                  left: 0;
                                  visibility: ${determineVisibilityBasedOnLayerId(shape.zPosition) ? "visible" : "hidden"};
                                  z-index: ${determineZIndexBasedOnLayerId(shape?.zPosition)};
                                `}
                              >
                                <SBlock
                                  onClick={() => {}}
                                  type={shape.shape}
                                  rotate={shape.rotation as 0 | 90 | 180 | 270}
                                  colour={shape?.colour}
                                  size={40} //TODO replace with cellsize
                                  sizeUnit={"px"} // TODO replace with cellsize
                                />
                              </div>
                            );
                          })
                        ) : (
                          <div
                            className={css`
                              width: ${cellSize};

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
      <SBlockMenu />
    </div>
  );
};

export default SblockGrid;
