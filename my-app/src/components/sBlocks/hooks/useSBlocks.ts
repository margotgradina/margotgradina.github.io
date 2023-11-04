import {SBlockType} from "../sBlockTypes";
import html2canvas from "html2canvas";
import {useSBlocksData} from "../store/useSblocksData";
import {layer} from "@fortawesome/fontawesome-svg-core";
import zIndex from "@material-ui/core/styles/zIndex";

export const useSBlocks = () => {
  const {
    gridData,
    setGridData,
    numRows,
    setNumRows,
    numCols,
    setNumCols,
    cellSize,
    setCellSize,
    border,
    setBorder,
    currentLayer,
    setCurrentLayer,
    currentColour,
    setCurrentColour,
    currentShape,
    setCurrentShape,
    currentRotation,
    setCurrentRotation,
    showColourPicker,
    setShowColourPicker,
    showGrid,
    setShowGrid,
    showPaletteTemplates,
    setShowPaletteTemplates,
    colourPalette,
    setColourPalette,
    sBlocks,
    setSBlocks,
    paletteArray,
    setPaletteArray,
    rotationArray,
    layers,
    setLayers,
  } = useSBlocksData();

  //Array used to map through all shapes in the menu.
  const shapeArray: {shape: string; function: Function}[] = [
    {shape: "FULL", function: () => setCurrentShape("FULL")},
    {shape: "CIRCLE", function: () => setCurrentShape("CIRCLE")},
    {shape: "QUARTERCIRCLE", function: () => setCurrentShape("QUARTERCIRCLE")},
    {shape: "HALFSTADIUM", function: () => setCurrentShape("HALFSTADIUM")},
    {shape: "ELLIPS", function: () => setCurrentShape("ELLIPS")},
    {shape: "DROP", function: () => setCurrentShape("DROP")},
    {shape: "RECTANGLE", function: () => setCurrentShape("RECTANGLE")},
    {shape: "TRIANGLE", function: () => setCurrentShape("TRIANGLE")},
    {shape: "HALFTRIANGLE", function: () => setCurrentShape("HALFTRIANGLE")},
    {shape: "ROUNDCORNER", function: () => setCurrentShape("ROUNDCORNER")},
    {shape: "HALFCIRCLEOUTWARDS", function: () => setCurrentShape("HALFCIRCLEOUTWARDS")},
  ];

  // Initialize the grid with empty cells
  const initializeGrid = () => {
    const grid: any[] = [];
    if (numRows == null || numCols == null) {
      console.log("amount of columns and/or rows not defined");
      return;
    }

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
  // const handleCellClick = (x: number, y: number) => {
  //   console.log(gridData);
  //   const updatedGrid = [...gridData];

  //   if (currentShape === "EMPTY") {
  //     //== DELETE KNOP
  //     const newBlock: SBlockType = {
  //       id: x + "_" + y + "_" + currentLayer, // Replace with your unique ID generation logic
  //       xPosition: x,
  //       yPosition: y,
  //       zPosition: currentLayer.id,
  //       width: 1,
  //       height: 1,
  //       layer: currentLayer.id,
  //       colour: "transparent", // Set the desired color //TODO REPLACE WITH HEX WHEN LAYERS ARE BEING IMPLEMENTED
  //       shape: "FULL",
  //       rotation: 0,
  //     };

  //     // Update the gridData with the new sBlock
  //     updatedGrid[y][x] = newBlock;
  //   } else {
  //     // if (!gridData[y][x]) {
  //     // You can create a new sBlock here, for example, using a function to generate a unique ID
  //     const newBlock: SBlockType = {
  //       id: x + "_" + y + "_" + currentLayer, // Replace with your unique ID generation logic
  //       xPosition: x,
  //       yPosition: y,
  //       zPosition: currentLayer.id,
  //       width: 1,
  //       height: 1,
  //       layer: currentLayer.id,
  //       colour: typeof currentColour == "string" ? currentColour : currentColour?.hex, // Set the desired color //TODO REPLACE WITH HEX WHEN LAYERS ARE BEING IMPLEMENTED
  //       shape: currentShape as string,
  //       rotation: currentRotation,
  //     };
  //     // console.log(newBlock);
  //     // Update the gridData with the new sBlock
  //     updatedGrid[y][x] = newBlock;
  //   }

  //   // Set the updated grid data
  //   setGridData(updatedGrid);
  // };

  // Handle cell click
  const handleCellClick = (x: number, y: number) => {
    console.log(gridData);
    const updatedGrid = [...gridData];

    if (currentShape === "EMPTY") {
      //== DELETE KNOP
      const newBlock: SBlockType[] = [
        {
          id: x + "_" + y + "_" + currentLayer, // Replace with your unique ID generation logic
          xPosition: x,
          yPosition: y,
          zPosition: currentLayer.id,
          width: 1,
          height: 1,
          layer: currentLayer.id,
          colour: "transparent", // Set the desired color //TODO REPLACE WITH HEX WHEN LAYERS ARE BEING IMPLEMENTED
          shape: "FULL",
          rotation: 0,
        },
      ];

      // Update the gridData with the new sBlock
      updatedGrid[y][x] = newBlock;
    } else {
      // if (!gridData[y][x]) {
      // You can create a new sBlock here, for example, using a function to generate a unique ID
      const newBlock: SBlockType[] = [
        {
          id: x + "_" + y + "_" + currentLayer, // Replace with your unique ID generation logic
          xPosition: x,
          yPosition: y,
          zPosition: currentLayer.id,
          width: 1,
          height: 1,
          layer: currentLayer.id,
          colour: typeof currentColour == "string" ? currentColour : currentColour?.hex, // Set the desired color //TODO REPLACE WITH HEX WHEN LAYERS ARE BEING IMPLEMENTED
          shape: currentShape as string,
          rotation: currentRotation,
        },
      ];

      // console.log(newBlock);
      // Update the gridData with the new sBlock
      updatedGrid[y][x] = newBlock;
    }

    // Set the updated grid data
    setGridData(updatedGrid);
  };

  const handleDownload = async (type: "PNG" | "JPG") => {
    let data;

    const element = document.getElementById("savableGrid");

    if (!element) {
      return console.log("NO GRID FOUND"); //TODO ADD TOAST FOR ALERTS
    }

    const canvas = await html2canvas(element);

    if (type === "JPG") {
      data = canvas.toDataURL("image/jpg");
    } else {
      data = canvas.toDataURL("image/png");
    }

    const link = document.createElement("a");
    link.href = data;

    if (type === "JPG") {
      link.download = "sBlocks.jpg";
    } else {
      link.download = "sBlocks.png";
    }

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleAddColourPalette = (index: number, colour: any) => {
    if (index >= 0 && index < colourPalette?.length) {
      // Create a copy of the original array
      const newColourPalette = [...colourPalette];

      // Replace the color at the specified index and update the state
      newColourPalette[index] = colour;
      console.log(newColourPalette);
      setColourPalette(newColourPalette);
    } else {
      console.error(`Invalid index: ${index}`);
    }
  };

  const handleClickRotation = () => {
    const curr = currentRotation;
    const index = rotationArray?.findIndex((obj) => obj === curr);
    let newIndex: number;
    //if the last item of the array is currenly chosen, start at the begin again, else get the next rotation
    if (index + 1 === rotationArray?.length) {
      newIndex = 0;
    } else {
      newIndex = index + 1;
    }
    const newRotation = rotationArray?.at(newIndex);
    setCurrentRotation(newRotation as 0 | 90 | 180 | 270);
  };

  const handleSetColourPaletteArray = (newColourPalette?: any[]) => {
    if (newColourPalette) {
      setColourPalette(newColourPalette);
    } else {
      setColourPalette(["transparent", "transparent", "transparent", "transparent", "transparent", "transparent"]); //make empty
    }
  };

  const fetchSBlocksColourTemplates = () => {
    if (paletteArray?.length <= 0) {
      fetch("/data/sBlocksColourTemplates.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
        .then((resp) => {
          return resp.json();
        })
        .then((data) => {
          if (data?.ColourPaletteTemplates) {
            const paletteArray: any[] = data?.ColourPaletteTemplates;
            setPaletteArray(paletteArray);
            console.log(paletteArray);
          } else {
            console.log("No colour palettes found;");
          }
        })
        .catch()
        .finally();
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
    currentColour,
    setCurrentColour,
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
    layers,
    setLayers,
  };
};
