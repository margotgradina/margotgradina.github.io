import {useState} from "react";
import {SBlockType} from "../sBlockTypes";

export const useSBlocks = () => {
  const [gridData, setGridData] = useState<any[]>([]);
  const [currentLayer, setCurrentLayer] = useState<number>(0);
  const [numRows, setNumRows] = useState<number>(10);
  const [numCols, setNumCols] = useState<number>(20);
  const [cellSize, setCellSize] = useState<string>("40px");
  const [border, setBorder] = useState<string>("0px dashed grey");
  const [sBlocks, setSBlocks] = useState<SBlockType[]>([]);

  // Initialize the grid with empty cells
  const initializeGrid = () => {
    const grid: any[] = [];
    for (let y = 1; y <= numRows; y++) {
      const row = [];
      for (let x = 1; x <= numCols; x++) {
        row.push(null); // Initialize with empty cells
      }
      grid.push(row);
    }
    // Set sBlocks on the grid
    sBlocks.forEach((sBlock: any) => {
      const xIndex = sBlock["xPosition"];
      const yIndex = sBlock["yPosition"];
      grid[yIndex][xIndex] = sBlock;
    });
    setGridData(grid);
  };

  // Handle cell click
  const handleCellClick = (x: number, y: number) => {
    // Check if the clicked cell is empty
    if (!gridData[y][x]) {
      // You can create a new sBlock here, for example, using a function to generate a unique ID
      const newBlock: SBlockType = {
        id: x + "_" + y + "_" + currentLayer, // Replace with your unique ID generation logic
        xPosition: x,
        yPosition: y + 1,
        width: 1,
        height: 1,
        layer: 1,
        colour: "blue", // Set the desired color
        rotation: 0,
      };

      // Update the gridData with the new sBlock
      const updatedGrid = [...gridData];
      updatedGrid[y][x] = newBlock;

      // Set the updated grid data
      setGridData(updatedGrid);
    } else {
      // Handle the case when the cell is already filled, e.g., deselect or perform some other action
      // You can implement custom logic for this case
    }
  };

  return {
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
    initializeGrid,
    handleCellClick,
  };
};
