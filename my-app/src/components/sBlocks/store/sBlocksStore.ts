import {create} from "zustand";
import {Colour, SBlockType} from "../sBlockTypes";

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

type State = {
  gridData: any[];
  numRows: number | null;
  numCols: number | null;
  cellSize: string | null;
  border: string | null;

  currentLayer: number;
  currentColour: Colour | string | null;
  currentShape: string;
  currentRotation: 0 | 90 | 180 | 270;

  showColourPicker: boolean;
  showGrid: boolean;
  showPaletteTemplates: boolean;

  colourPalette: any[];
  sBlocks: SBlockType[];
  paletteArray: {name: string; colours: Colour[]}[];
  rotationArray: number[];
  //   shapeArray: {shape: string; function: Function}[];
};

const initialState: State = {
  gridData: [],
  numRows: 20,
  numCols: 20,
  cellSize: "40px",
  border: "1px dashed grey",

  currentLayer: 0,
  currentColour: initialColour,
  currentShape: "FULL",
  currentRotation: 0,

  showColourPicker: false,
  showGrid: true,
  showPaletteTemplates: false,

  colourPalette: ["transparent", "transparent", "transparent", "transparent", "transparent", "transparent"],
  sBlocks: [],
  paletteArray: [],
  rotationArray: [0, 90, 180, 270],
};

type Actions = {
  setGridData: (arr: any[]) => void;
  setNumRows: (num: number) => void;
  setNumCols: (num: number) => void;
  setCellsize: (str: string) => void;
  setBorder: (str: string) => void;

  setCurrentLayer: (num: number) => void;
  setCurrentColour: (colour: string | Colour) => void;
  setCurrentShape: (str: string) => void;
  setCurrentRotation: (num: 0 | 90 | 180 | 270) => void;

  setShowColourPicker: (bool: boolean) => void;
  setShowGrid: (bool: boolean) => void;
  setShowPaletteTemplates: (bool: boolean) => void;

  setColourPalette: (arr: any[]) => void;
  setSBlocks: (arr: SBlockType[]) => void;
  setPaletteArray: (arr: {name: string; colours: Colour[]}[]) => void;
};

export const useSBlocksStore = create<State & Actions>((set) => ({
  ...initialState,
  clearDataStoreOO: () => set(initialState),
  setGridData: (arr: any[]) => set(() => ({gridData: arr})),
  setNumRows: (num: number) => set(() => ({numRows: num})),
  setNumCols: (num: number) => set(() => ({numCols: num})),
  setCellsize: (str: string) => set(() => ({cellSize: str})),
  setBorder: (str: string) => set(() => ({border: str})),

  setCurrentLayer: (num: number) => set(() => ({currentLayer: num})),
  setCurrentColour: (colour: string | Colour) => set(() => ({currentColour: colour})),
  setCurrentShape: (str: string) => set(() => ({currentShape: str})),
  setCurrentRotation: (num: 0 | 90 | 180 | 270) => set(() => ({currentRotation: num})),

  setShowColourPicker: (bool: boolean) => set(() => ({showColourPicker: bool})),
  setShowGrid: (bool: boolean) => set(() => ({showGrid: bool})),
  setShowPaletteTemplates: (bool: boolean) => set(() => ({showPaletteTemplates: bool})),

  setColourPalette: (arr: any[]) => set(() => ({colourPalette: arr})),
  setSBlocks: (arr: SBlockType[]) => set(() => ({sBlocks: arr})),
  setPaletteArray: (arr: {name: string; colours: Colour[]}[]) => set(() => ({paletteArray: arr})),
}));
