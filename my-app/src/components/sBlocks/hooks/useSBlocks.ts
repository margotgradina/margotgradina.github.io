import {useState} from "react";
import {SBlockType} from "../sBlockTypes";

const initialColour = {
  hsl: {
    h: 0,
    s: 0,
    l: 0,
    a: 1,
  },
  hex: "#000000",
  rgb: {
    r: 0,
    g: 0,
    b: 0,
    a: 1,
  },
  hsv: {
    h: 0,
    s: 0,
    v: 0,
    a: 1,
  },
  oldHue: 0,
  source: "hsv",
};

export const useSBlocks = () => {
  const [gridData, setGridData] = useState<any[]>([]);
  const [currentLayer, setCurrentLayer] = useState<number>(0);
  const [numRows, setNumRows] = useState<number>(10);
  const [numCols, setNumCols] = useState<number>(20);
  const [cellSize, setCellSize] = useState<string>("40px");
  const [border, setBorder] = useState<string>("1px dashed grey");
  const [sBlocks, setSBlocks] = useState<SBlockType[]>([]);
  const [currentColour, setCurrentColour] = useState<any>(initialColour);
  const [currentShape, setCurrentShape] = useState<string>("FULL");
  const [showColourPicker, setShowColourPicker] = useState<boolean>(false);
  const [currentRotation, setcurrentRotation] = useState<0 | 90 | 180 | 270>(0);
  const [showGrid, setShowGrid] = useState<boolean>(true);
  const shapeArray: {shape: string; function: Function}[] = [
    {shape: "FULL", function: () => setCurrentShape("FULL")},
    {shape: "CIRCLE", function: () => setCurrentShape("CIRCLE")},
    {shape: "QUARTERCIRCLE", function: () => setCurrentShape("QUARTERCIRCLE")},
    {shape: "HALFSTADIUM", function: () => setCurrentShape("HALFSTADIUM")},
    {shape: "ELLIPS", function: () => setCurrentShape("ELLIPS")},
    {shape: "DROP", function: () => setCurrentShape("DROP")},
    {shape: "RECTANGLE", function: () => setCurrentShape("RECTANGLE")},
    {shape: "TRIANGLE", function: () => setCurrentShape("TRIANGLE")},
  ];

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
    // if (!gridData[y][x]) {
    // You can create a new sBlock here, for example, using a function to generate a unique ID
    const newBlock: SBlockType = {
      id: x + "_" + y + "_" + currentLayer, // Replace with your unique ID generation logic
      xPosition: x,
      yPosition: y,
      width: 1,
      height: 1,
      layer: 1,
      colour: currentColour?.hex, // Set the desired color //TODO REPLACE WITH HEX WHEN LAYERS ARE BEING IMPLEMENTED
      shape: currentShape,
      rotation: currentRotation,
    };
    // console.log(newBlock);
    // Update the gridData with the new sBlock
    const updatedGrid = [...gridData];
    updatedGrid[y][x] = newBlock;

    // Set the updated grid data
    setGridData(updatedGrid);
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
    currentColour,
    setCurrentColour,
    showColourPicker,
    setShowColourPicker,
    currentShape,
    setCurrentShape,
    shapeArray,
    currentRotation,
    setcurrentRotation,
    showGrid,
    setShowGrid,
  };
};
